import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { scaffold } from '../src/core/scaffold.js';

function tmpDir() {
  return mkdtempSync(join(tmpdir(), 'vibe-coding-test-'));
}

const templatesDir = join(process.cwd(), '..', 'templates');

test('scaffold copies core files with no tools', () => {
  const dir = tmpDir();
  try {
    const result = scaffold({ targetDir: dir, templatesDir });
    for (const f of ['AGENTS.md', 'MEMORY.md', 'REVIEW-CHECKLIST.md', 'agent_docs/project_brief.md']) {
      assert.ok(result.files.includes(f), `missing ${f}`);
    }
    assert.ok(
      result.files.includes('.agents/skills/vibe-workflow/SKILL.md'),
      'canonical skills should always be included',
    );
    assert.ok(!result.files.includes('CLAUDE.md'));
    assert.ok(!result.files.includes('.cursor/rules/00-project.mdc'));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('scaffold includes tool-specific files for selected tools', () => {
  const dir = tmpDir();
  try {
    const result = scaffold({ targetDir: dir, templatesDir, tools: ['claude', 'cursor'] });
    assert.ok(result.files.includes('CLAUDE.md'));
    assert.ok(result.files.includes('.claude/agents/researcher.md'));
    assert.ok(result.files.includes('.cursor/rules/00-project.mdc'));
    assert.ok(!result.files.includes('GEMINI.md'));
    assert.ok(!result.files.includes('.codex/config.toml'));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('scaffold fills app name and commands deterministically', () => {
  const dir = tmpDir();
  try {
    const result = scaffold({
      targetDir: dir,
      templatesDir,
      tools: ['claude'],
      prd: { appName: 'Todo App', oneLiner: 'Track tasks fast', targetUsers: 'freelancers', phase: 'Foundation' },
      tech: {
        stack: { frontend: 'Next.js', database: 'Supabase' },
        commands: { dev: 'npm run dev', test: 'npm test' },
      },
    });

    const agents = readFileSync(join(dir, 'AGENTS.md'), 'utf8');
    assert.ok(agents.includes('Todo App'), 'AGENTS.md should include app name');
    assert.ok(agents.includes('Track tasks fast'), 'AGENTS.md should include one-liner');
    assert.ok(agents.includes('freelancers'), 'AGENTS.md should include target users');
    assert.ok(agents.includes('Foundation'), 'AGENTS.md should include phase');
    assert.ok(!agents.includes('[target users]'), '[target users] should be filled');

    const claude = readFileSync(join(dir, 'CLAUDE.md'), 'utf8');
    assert.ok(claude.includes('Todo App'));

    const techStack = readFileSync(join(dir, 'agent_docs/tech_stack.md'), 'utf8');
    assert.ok(techStack.includes('Next.js'));
    assert.ok(techStack.includes('npm run dev'));
    assert.ok(techStack.includes('npm test'));
    assert.ok(!techStack.includes('[framework/version]'));

    assert.ok(result.remainingPlaceholders.length > 0, 'should report a punch-list');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('skillsOnly scaffolds just skill files, mirroring for claude', () => {
  const dir = tmpDir();
  try {
    const result = scaffold({ targetDir: dir, templatesDir, tools: ['claude'], skillsOnly: true });
    assert.ok(result.files.includes('.agents/skills/vibe-workflow/SKILL.md'));
    assert.ok(result.files.includes('.claude/skills/vibe-prd/SKILL.md'));
    assert.ok(result.files.every((f) => f.includes('/skills/')), 'should only write skill files');
    assert.ok(!result.files.includes('AGENTS.md'));

    const noClaude = scaffold({ targetDir: tmpDir(), templatesDir, tools: ['codex'], skillsOnly: true });
    assert.ok(!noClaude.files.some((f) => f.startsWith('.claude/')), 'no .claude mirror without claude');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('scaffold keeps existing files unless overwrite is set', () => {
  const dir = tmpDir();
  try {
    scaffold({ targetDir: dir, templatesDir });
    const agentsPath = join(dir, 'AGENTS.md');
    writeFileSync(agentsPath, '# My edited AGENTS.md\n');

    const second = scaffold({ targetDir: dir, templatesDir });
    assert.ok(second.skipped.includes('AGENTS.md'), 'existing file should be skipped');
    assert.ok(!second.files.includes('AGENTS.md'));
    assert.equal(readFileSync(agentsPath, 'utf8'), '# My edited AGENTS.md\n', 'edit must survive re-run');

    const forced = scaffold({ targetDir: dir, templatesDir, overwrite: true });
    assert.ok(forced.files.includes('AGENTS.md'), 'overwrite should rewrite the file');
    assert.notEqual(readFileSync(agentsPath, 'utf8'), '# My edited AGENTS.md\n');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('scaffold output matches templates byte-for-byte except auto-filled dates', () => {
  const dir = tmpDir();
  try {
    const result = scaffold({ targetDir: dir, templatesDir });
    const now = new Date();
    const yyyymm = now.toISOString().slice(0, 7);
    const yyyymmdd = now.toISOString().slice(0, 10);
    for (const rel of result.files) {
      const src = readFileSync(join(templatesDir, rel), 'utf8')
        .split('[YYYY-MM-DD]')
        .join(yyyymmdd)
        .split('[YYYY-MM]')
        .join(yyyymm);
      const dest = readFileSync(join(dir, rel), 'utf8');
      assert.equal(dest, src, `${rel} should be byte-identical to template (modulo date fills) when no meta provided`);
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
