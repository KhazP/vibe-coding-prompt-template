import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { scaffold } from '../src/core/scaffold.js';

const cli = join(process.cwd(), 'dist/cli.js');
const templatesDir = join(process.cwd(), '../templates');
const fence = (value: unknown) => '```json\n' + JSON.stringify(value) + '\n```';
const prd = { schemaVersion: 1, documentType: 'prd', appName: 'Books', oneLiner: 'Keep a reading list', targetUsers: 'Readers', mustHave: ['Add a book'] };
const tech = { schemaVersion: 1, documentType: 'techdesign', appName: 'Books', stack: { frontend: 'HTML' }, commands: { dev: 'python3 -m http.server 8000' } };

function fixture(fn: (dir: string) => void) {
  const dir = mkdtempSync(join(tmpdir(), 'vibe-handoff-'));
  try { fn(dir); } finally { rmSync(dir, { recursive: true, force: true }); }
}

function write(dir: string, path: string, content: string) {
  mkdirSync(dirname(join(dir, path)), { recursive: true });
  writeFileSync(join(dir, path), content);
}

function run(dir: string, args: string[] = []) {
  return spawnSync(process.execPath, [cli, '--tools', 'local', ...args], {
    cwd: dir, encoding: 'utf8', env: { ...process.env, VIBE_TEMPLATES_DIR: templatesDir },
  });
}

test('manual exports and manifest paths remain usable in generated instructions', () => {
  const routes = [
    { prd: 'PRD.md', techdesign: 'TECH_DESIGN.md', manifest: false },
    { prd: 'PRD-Books-MVP.md', techdesign: 'TechDesign-Books-MVP.md', manifest: false },
    { prd: 'docs/PRD-Books-MVP.md', techdesign: 'docs/TechDesign-Books-MVP.md', manifest: false },
    { prd: 'planning/Book requirements.md', techdesign: 'planning/Book design.md', manifest: true },
  ];
  for (const route of routes) fixture(dir => {
    const documents = { prd: route.prd, techdesign: route.techdesign };
    write(dir, documents.prd, fence(prd));
    write(dir, documents.techdesign, fence(tech));
    const manifest = { schemaVersion: 1, templateVersion: '0.3.0', mode: 'quick', tools: ['local'], documents };
    const manifestText = JSON.stringify(manifest);
    if (route.manifest) write(dir, 'vibe.project.json', manifestText);

    const result = run(dir);
    assert.equal(result.status, 0, result.stderr);
    const agents = readFileSync(join(dir, 'AGENTS.md'), 'utf8');
    assert(agents.includes('`' + documents.prd + '`'), documents.prd);
    assert(agents.includes('`' + documents.techdesign + '`'), documents.techdesign);
    assert(!agents.includes('docs/PRD-*.md'));
    assert(!agents.includes('[PRD path]'));
    assert(result.stdout.includes(`Read AGENTS.md, then ${documents.prd} and ${documents.techdesign}.`));
    const savedManifest = readFileSync(join(dir, 'vibe.project.json'), 'utf8');
    assert.deepEqual(JSON.parse(savedManifest).documents, documents);
    if (route.manifest) assert.equal(savedManifest, manifestText, 'existing manifest is preserved byte-for-byte');
  });
});

test('duplicate app-specific exports show both candidates and an explicit flag resolves them without writing', () => fixture(dir => {
  write(dir, 'PRD-Books-MVP.md', fence(prd));
  write(dir, 'docs/PRD-Books-MVP.md', fence(prd));
  write(dir, 'TechDesign-Books-MVP.md', fence(tech));
  const ambiguous = run(dir, ['--json']);
  assert.notEqual(ambiguous.status, 0);
  assert.match(ambiguous.stderr, /Multiple PRD.md candidates: PRD-Books-MVP.md, docs\/PRD-Books-MVP.md/);
  assert.match(ambiguous.stderr, /--prd <path>/);
  assert(!existsSync(join(dir, 'AGENTS.md')));
  assert(!existsSync(join(dir, '.agents')));

  const preview = run(dir, ['--prd', 'PRD-Books-MVP.md', '--dry-run', '--json']);
  assert.equal(preview.status, 0, preview.stderr);
  assert.deepEqual(JSON.parse(preview.stdout).documents, { prd: 'PRD-Books-MVP.md', techdesign: 'TechDesign-Books-MVP.md' });
  assert(!existsSync(join(dir, 'AGENTS.md')));
  assert(!existsSync(join(dir, 'vibe.project.json')));
}));

test('full setup copies reusable skill assets verbatim and leaves them out of the project punch-list', () => fixture(dir => {
  const result = scaffold({ targetDir: dir, templatesDir, tools: ['claude'], prd, tech,
    documents: { prd: 'PRD.md', techdesign: 'TECH_DESIGN.md' } });
  const skills = result.files.filter(file => file.includes('/skills/'));
  assert(skills.some(file => file.startsWith('.agents/')));
  assert(skills.some(file => file.startsWith('.claude/')));
  for (const file of skills) {
    assert.equal(readFileSync(join(dir, file), 'utf8'), readFileSync(join(templatesDir, file), 'utf8'), file);
  }
  assert(!result.remainingPlaceholders.some(item => item.file.includes('/skills/')));
  assert(result.remainingPlaceholders.some(item => item.file === 'agent_docs/testing.md'));
}));
