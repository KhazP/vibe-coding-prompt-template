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
    write(join(dir, 'docs/PRD-Todo-MVP.md'), 'no meta block here');
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
