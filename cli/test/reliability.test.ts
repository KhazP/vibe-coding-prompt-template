import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, readdirSync, realpathSync } from 'node:fs';
import { join, win32 } from 'node:path';
import { tmpdir } from 'node:os';
import { scaffold, normalizePath } from '../src/core/scaffold.js';
import { documentPaths } from '../src/core/project.js';
import { parsePrdMeta, parseTechMeta } from '../src/core/meta.js';
import { doctor } from '../src/core/doctor.js';
const cli = join(process.cwd(), 'dist/cli.js');
const templatesDir = join(process.cwd(), '../templates');
function fixture(fn: (dir: string) => void) {
  const dir = mkdtempSync(join(tmpdir(), 'vibe-regression-'));
  try { fn(dir); } finally { rmSync(dir, { recursive: true, force: true }); }
}
const fence = (value: unknown) => '```json\n' + JSON.stringify(value) + '\n```';
test('malformed flags fail before filesystem mutation', () => fixture(dir => {
  for (const args of [['--force=maybe'], ['--unknown'], ['--prd', '--force'], ['--dir='], ['--tools', 'typo'], ['init', 'extra'], ['doctor', '--force']]) {
    const result = spawnSync(process.execPath, [cli, ...args], { cwd: dir, encoding: 'utf8' });
    assert.notEqual(result.status, 0, args.join(' '));
    assert.deepEqual(readdirSync(dir), []);
  }
}));
test('false force preserves work, explicit force replaces it, dry-run never writes', () => fixture(dir => {
  const run = (...args: string[]) => spawnSync(process.execPath, [cli, '--tools', 'local', ...args], { cwd: dir, encoding: 'utf8', env: { ...process.env, VIBE_TEMPLATES_DIR: templatesDir } });
  assert.equal(run('--dry-run').status, 0);
  assert.deepEqual(readdirSync(dir), []);
  assert.equal(run().status, 0);
  const file = join(dir, '.agents/skills/vibe-build/SKILL.md');
  writeFileSync(file, 'custom');
  assert.equal(run('--force=false').status, 0);
  assert.equal(readFileSync(file, 'utf8'), 'custom');
  assert.equal(run('--force', '--dry-run').status, 0);
  assert.equal(readFileSync(file, 'utf8'), 'custom');
  assert.equal(run('--force=true').status, 0);
  assert.notEqual(readFileSync(file, 'utf8'), 'custom');
}));
test('scaffold API refuses truthy non-boolean overwrite and normalizes native Windows paths', () => fixture(dir => {
  scaffold({ targetDir: dir, templatesDir });
  writeFileSync(join(dir, 'AGENTS.md'), 'custom');
  scaffold({ targetDir: dir, templatesDir, overwrite: 'false' as unknown as boolean });
  assert.equal(readFileSync(join(dir, 'AGENTS.md'), 'utf8'), 'custom');
  assert.equal(normalizePath(win32.relative('C:\\templates', 'C:\\templates\\.agents\\skills\\vibe-build\\SKILL.md')), '.agents/skills/vibe-build/SKILL.md');
}));
test('manifest paths override conventions and reject traversal and ambiguity', () => fixture(dir => {
  writeFileSync(join(dir, 'PRD.md'), 'x');
  assert.equal(documentPaths(dir).prd, join(dir, 'PRD.md'));
  mkdirSync(join(dir, 'docs'));
  writeFileSync(join(dir, 'docs/PRD-App-MVP.md'), 'x');
  assert.throws(() => documentPaths(dir), /Multiple/);
  const manifest = { schemaVersion: 1, templateVersion: '0.2.2', mode: 'quick', tools: [], documents: { prd: 'custom.md', techdesign: 'design.md' } };
  writeFileSync(join(dir, 'vibe.project.json'), JSON.stringify(manifest));
  assert.equal(documentPaths(dir).prd, join(dir, 'custom.md'));
  manifest.documents.prd = '../outside.md';
  writeFileSync(join(dir, 'vibe.project.json'), JSON.stringify(manifest));
  assert.throws(() => documentPaths(dir), /escapes/);
}));
test('versioned contracts reject missing fields, wrong types, and unsupported versions; legacy remains readable', () => {
  const prd = { schemaVersion: 1, documentType: 'prd', appName: 'Books', oneLiner: 'Save books', targetUsers: 'Me', mustHave: ['Add'] };
  assert.ok(parsePrdMeta(fence(prd)));
  assert.equal(parsePrdMeta(fence({ ...prd, schemaVersion: 2 })), undefined);
  assert.equal(parsePrdMeta(fence({ ...prd, mustHave: [] })), undefined);
  assert.equal(parseTechMeta(fence(prd)), undefined);
  assert.ok(parsePrdMeta(fence({ appName: 'Legacy' })));
});
test('doctor blocks missing metadata and unsupported config without claiming build or behavior', () => fixture(dir => {
  scaffold({ targetDir: dir, templatesDir, tools: ['claude'] });
  writeFileSync(join(dir, 'PRD.md'), 'No metadata');
  writeFileSync(join(dir, 'TECH_DESIGN.md'), fence({ stack: {} }));
  writeFileSync(join(dir, '.claude/settings.json'), '{"permissions":{"defaultMode":"ask"}}');
  const result = doctor({ projectDir: dir });
  assert.equal(result.ok, false);
  assert(result.findings.some(f => f.severity === 'error' && f.message.includes('meta')));
  assert(result.findings.some(f => f.message.includes('defaultMode')));
  assert.deepEqual(result.checks, { setup: 'incomplete', build: 'not-checked', behavior: 'not-checked' });
}));
test('conflicting projects fail init without writing setup', () => fixture(dir => {
  writeFileSync(join(dir, 'PRD.md'), fence({ appName: 'One' }));
  writeFileSync(join(dir, 'TECH_DESIGN.md'), fence({ appName: 'Two', stack: {} }));
  const result = spawnSync(process.execPath, [cli], { cwd: dir, encoding: 'utf8' });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /different projects/);
  assert.equal(readdirSync(dir).length, 2);
}));
test('format hook passes shell-sensitive filenames literally as arguments', () => fixture(dir => {
  const prettier = join(dir, 'node_modules/prettier/bin');
  mkdirSync(prettier, { recursive: true });
  writeFileSync(join(prettier, 'prettier.cjs'), "require('node:fs').writeFileSync('args.json', JSON.stringify(process.argv.slice(2)))");
  const filename = 'quote";$(touch PWNED);`touch PWNED`.js';
  const hook = join(process.cwd(), '../scripts/format-hook.cjs');
  const result = spawnSync(process.execPath, [hook], { cwd: dir, encoding: 'utf8', input: JSON.stringify({ tool_input: { file_path: filename } }) });
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(readFileSync(join(dir, 'args.json'), 'utf8')), ['--write', '--', join(realpathSync(dir), filename)]);
  assert(!readdirSync(dir).includes('PWNED'));
}));
test('identified metadata wins over unrelated legacy-looking examples', () => {
  const content = fence({ appName: 'Example' }) + '\n' + fence({ schemaVersion: 1, documentType: 'prd', appName: 'Real', oneLiner: 'Actual project', targetUsers: 'Readers', mustHave: ['Save'] });
  assert.equal(parsePrdMeta(content)?.appName, 'Real');
});
test('full preview includes the new manifest and explicit PRD resolves ambiguous discovery', () => fixture(dir => {
  mkdirSync(join(dir, 'docs'));
  writeFileSync(join(dir, 'PRD.md'), fence({ appName: 'One' }));
  writeFileSync(join(dir, 'docs/PRD-Other-MVP.md'), fence({ appName: 'Other' }));
  writeFileSync(join(dir, 'TECH_DESIGN.md'), fence({ appName: 'One', stack: { frontend: 'HTML' } }));
  const result = spawnSync(process.execPath, [cli, '--prd', 'PRD.md', '--dry-run', '--json'], { cwd: dir, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  assert(JSON.parse(result.stdout).files.includes('vibe.project.json'));
  assert.deepEqual(readdirSync(dir).sort(), ['PRD.md', 'TECH_DESIGN.md', 'docs'].sort());
}));
