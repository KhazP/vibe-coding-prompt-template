import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { doctor } from '../src/core/doctor.js';

function tmpDir() {
  return mkdtempSync(join(tmpdir(), 'vibe-coding-doctor-'));
}

function write(p: string, content: string) {
  mkdirSync(join(p, '..'), { recursive: true });
  writeFileSync(p, content);
}

test('doctor reports clean project', () => {
  const dir = tmpDir();
  try {
    write(join(dir, 'AGENTS.md'), '# AGENTS\nRead agent_docs/ first.');
    write(join(dir, 'MEMORY.md'), '# Memory');
    write(join(dir, 'REVIEW-CHECKLIST.md'), '# Review');
    write(join(dir, 'agent_docs/project_brief.md'), '# Brief');
    write(join(dir, 'agent_docs/tech_stack.md'), '# Stack');
    write(join(dir, 'agent_docs/testing.md'), '# Testing');
    write(join(dir, 'docs/PRD-Todo-MVP.md'), '```json\n{"appName":"Todo","mustHave":["x"]}\n```');
    write(
      join(dir, 'docs/TechDesign-Todo-MVP.md'),
      '```json\n{"stack":{"frontend":"Next.js"},"commands":{"dev":"npm run dev"}}\n```',
    );

    const result = doctor({ projectDir: dir });
    assert.equal(result.ok, true);
    assert.deepEqual(result.findings, []);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('doctor flags missing files and missing meta blocks', () => {
  const dir = tmpDir();
  try {
    const result = doctor({ projectDir: dir });
    assert.equal(result.ok, false);
    const errors = result.findings.filter((f) => f.severity === 'error');
    assert.ok(errors.some((e) => e.message.includes('AGENTS.md')));
    assert.ok(errors.some((e) => e.message.includes('PRD-')));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('doctor strict mode promotes warnings to failures', () => {
  const dir = tmpDir();
  try {
    write(join(dir, 'AGENTS.md'), '# AGENTS');
    write(join(dir, 'MEMORY.md'), '# Memory');
    write(join(dir, 'REVIEW-CHECKLIST.md'), '# Review');
    write(join(dir, 'agent_docs/project_brief.md'), '# Brief');
    write(join(dir, 'agent_docs/tech_stack.md'), '# Stack');
    write(join(dir, 'agent_docs/testing.md'), '# Testing');
    write(join(dir, 'docs/PRD-Todo-MVP.md'), '```json\n{"appName":"Todo"}\n```');
    write(join(dir, 'docs/TechDesign-Todo-MVP.md'), '```json\n{"stack":{}}\n```');

    const lenient = doctor({ projectDir: dir });
    assert.equal(lenient.ok, true);
    assert.ok(lenient.findings.some((f) => f.severity === 'warn'));

    const strict = doctor({ projectDir: dir, strict: true });
    assert.equal(strict.ok, false);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('doctor preserves literal code and links while finding declared project and source placeholders', () => {
  const dir = tmpDir();
  const fence = (value: unknown) => '```json\n' + JSON.stringify(value) + '\n```';
  const prd = { schemaVersion: 1, documentType: 'prd', appName: 'Books', oneLiner: 'Keep books', targetUsers: 'Readers', mustHave: ['Add a book'] };
  try {
    write(join(dir, 'AGENTS.md'), '# Agents\nRead agent_docs/ first.');
    write(join(dir, 'MEMORY.md'), '# Memory');
    write(join(dir, 'REVIEW-CHECKLIST.md'), '# Review');
    write(join(dir, 'agent_docs/project_brief.md'), '# Brief');
    write(join(dir, 'agent_docs/tech_stack.md'), '# Stack');
    const literalExamples = '# Testing\nUse `[data-testid="save"]` and `[aria-label]`.\nJSON: `["feature"]`, `[1, 2]`.\nRead [command](https://example.com), [command][guide] and [guide][command].\n[command]: https://example.com\n- [ ] Browser check\n- [x] Reviewed';
    write(join(dir, 'agent_docs/testing.md'), literalExamples);
    write(join(dir, 'PRD.md'), fence(prd));
    write(join(dir, 'TECH_DESIGN.md'), fence({ schemaVersion: 1, documentType: 'techdesign', appName: 'Books', stack: { frontend: 'HTML' }, commands: { dev: 'python3 -m http.server 8000' } }));
    assert.equal(doctor({ projectDir: dir }).ok, true);

    write(join(dir, 'agent_docs/testing.md'), literalExamples + '\n- Build: `[command]`');
    const incompleteSetup = doctor({ projectDir: dir });
    assert.equal(incompleteSetup.ok, false);
    assert(incompleteSetup.findings.some(f => f.message === 'agent_docs/testing.md has unfilled placeholders: [command]'));

    write(join(dir, 'agent_docs/testing.md'), literalExamples);
    write(join(dir, 'PRD.md'), fence({ ...prd, oneLiner: '[one-sentence description]', mustHave: ['[feature]'] }));
    const incompleteSource = doctor({ projectDir: dir });
    assert.equal(incompleteSource.ok, false);
    assert(incompleteSource.findings.some(f => f.message.includes('PRD.md has unfilled placeholders: [one-sentence description], [feature]')));
    assert.deepEqual(incompleteSource.checks, { setup: 'incomplete', build: 'not-checked', behavior: 'not-checked' });
  } finally { rmSync(dir, { recursive: true, force: true }); }
});
