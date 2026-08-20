import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const cliJs = join(process.cwd(), 'dist', 'cli.js');
const templatesDir = join(process.cwd(), '..', 'templates');

function tmpDir() {
  return mkdtempSync(join(tmpdir(), 'vibe-cli-test-'));
}

function run(dir: string, args: string[]): { stdout: string; json?: any } {
  const stdout = execFileSync(process.execPath, [cliJs, ...args], {
    cwd: dir,
    encoding: 'utf8',
    env: { ...process.env, VIBE_TEMPLATES_DIR: templatesDir },
  });
  let json;
  try {
    json = JSON.parse(stdout);
  } catch {
    // non-JSON output
  }
  return { stdout, json };
}

test('bare invocation in an empty dir scaffolds skills and emits kickoff', () => {
  const dir = tmpDir();
  try {
    const { json } = run(dir, ['--json', '--tools', 'local']);
    assert.equal(json.kind, 'vibeworkflow-kickoff');
    assert.ok(json.files.includes('.agents/skills/vibe-workflow/SKILL.md'));
    assert.ok(
      existsSync(join(dir, '.agents/skills/vibe-workflow/SKILL.md')),
      'skill entry file must exist on disk when the prompt references it',
    );
    assert.ok(json.prompt.includes('.agents/skills/vibe-workflow/SKILL.md'));
    assert.ok(/one question at a time/i.test(json.prompt), 'prompt sets the one-at-a-time default');
    assert.ok(
      /answers several at once/i.test(json.prompt),
      'prompt must allow batched answers instead of re-asking',
    );
    assert.ok(!json.prompt.toLowerCase().includes('fallback'), 'no fallback interview path');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('kickoff is idempotent: re-run never clobbers edited skill files', () => {
  const dir = tmpDir();
  try {
    run(dir, ['--json', '--tools', 'local']);
    const skillPath = join(dir, '.agents/skills/vibe-prd/SKILL.md');
    writeFileSync(skillPath, '# customized\n');

    const { json } = run(dir, ['--json', '--tools', 'local']);
    assert.ok(json.skipped.includes('.agents/skills/vibe-prd/SKILL.md'));
    assert.equal(readFileSync(skillPath, 'utf8'), '# customized\n');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('full init runs once docs exist, keeps kickoff-installed skills', () => {
  const dir = tmpDir();
  try {
    run(dir, ['--json', '--tools', 'claude']);

    mkdirSync(join(dir, 'docs'), { recursive: true });
    writeFileSync(
      join(dir, 'docs', 'PRD-Test-MVP.md'),
      '# PRD\n\n```json\n{ "appName": "Test App", "oneLiner": "Does things", "targetUsers": "testers", "phase": "Foundation" }\n```\n',
    );
    writeFileSync(
      join(dir, 'docs', 'TechDesign-Test-MVP.md'),
      '# Tech\n\n```json\n{ "appName": "Test App", "stack": { "frontend": "Next.js" }, "commands": { "dev": "npm run dev" } }\n```\n',
    );

    const { json } = run(dir, ['--json', '--tools', 'claude']);
    assert.equal(json.kind, 'vibeworkflow-init');
    assert.ok(json.files.includes('AGENTS.md'));
    assert.ok(json.files.includes('CLAUDE.md'));
    assert.ok(json.skipped.includes('.claude/skills/vibe-prd/SKILL.md'), 'kickoff skills kept, not rewritten');

    const agents = readFileSync(join(dir, 'AGENTS.md'), 'utf8');
    assert.ok(agents.includes('Test App'));

    // Re-run: filled files must survive.
    writeFileSync(join(dir, 'AGENTS.md'), '# filled by agent\n');
    const again = run(dir, ['--json', '--tools', 'claude']).json;
    assert.ok(again.skipped.includes('AGENTS.md'));
    assert.equal(readFileSync(join(dir, 'AGENTS.md'), 'utf8'), '# filled by agent\n');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('help flag prints agent-first usage', () => {
  const dir = tmpDir();
  try {
    const { stdout } = run(dir, ['--help']);
    assert.ok(stdout.includes('run BY an AI coding agent'));
    assert.ok(!stdout.includes('--level'), 'removed flags should not be documented');
    assert.ok(!stdout.includes('--answers'));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
