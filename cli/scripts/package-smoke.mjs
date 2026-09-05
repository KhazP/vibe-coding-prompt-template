import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import assert from 'node:assert/strict';
const scratch = mkdtempSync(join(tmpdir(), 'vibe-package-'));
const npm = process.env.npm_execpath;
// Invoke npm through Node to avoid Windows .cmd shell interpolation.
const npmCli = npm || resolve(process.execPath, '..', 'node_modules/npm/bin/npm-cli.js');
const runNpm = (args, cwd) => execFileSync(process.execPath, [npmCli, ...args], { cwd, encoding: 'utf8', env: { ...process.env, npm_config_cache: join(scratch, 'cache') } });
try {
  runNpm(['run', 'build'], process.cwd());
  const packed = JSON.parse(runNpm(['pack', '--ignore-scripts', '--json', '--pack-destination', scratch], process.cwd()));
  const consumer = join(scratch, 'consumer');
  mkdirSync(consumer);
  writeFileSync(join(consumer, 'package.json'), '{"private":true}');
  runNpm(['install', '--ignore-scripts', '--no-audit', '--no-fund', join(scratch, packed[0].filename)], consumer);
  const bin = join(consumer, 'node_modules/vibeworkflow/bin/vibeworkflow.js');
  const env = { ...process.env };
  delete env.VIBE_TEMPLATES_DIR;
  const run = args => JSON.parse(execFileSync(process.execPath, [bin, '--json', '--tools', 'claude', ...args], { cwd: consumer, env, encoding: 'utf8' }));
  const first = run(['--skills-only']);
  assert.equal(first.kind, 'vibeworkflow-skills');
  assert(first.files.includes('.agents/skills/vibe-agents/SKILL.md'));
  const skill = join(consumer, '.agents/skills/vibe-debug/SKILL.md');
  writeFileSync(skill, 'user customization');
  run(['--force=false']);
  assert.equal(readFileSync(skill, 'utf8'), 'user customization');
  run(['--force', '--dry-run']);
  assert.equal(readFileSync(skill, 'utf8'), 'user customization');
  writeFileSync(join(consumer, 'PRD.md'), '```json\n{"appName":"Smoke"}\n```');
  writeFileSync(join(consumer, 'TECH_DESIGN.md'), '```json\n{"appName":"Smoke","stack":{"frontend":"HTML"}}\n```');
  assert(run([]).files.includes('AGENTS.md'));
  assert.equal(JSON.parse(readFileSync(join(consumer, '.claude/settings.json'))).permissions.defaultMode, 'default');
  console.log('Packaged CLI: clean install, full setup, preservation, and dry-run passed');
} finally { rmSync(scratch, { recursive: true, force: true }); }
