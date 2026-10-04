import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parsePrdMeta, parseTechMeta } from '../src/core/meta.js';

test('parsePrdMeta extracts fields from a fenced json block', () => {
  const md = `# PRD\n\nSome prose.\n\n\`\`\`json\n{
    "appName": "Todo App",
    "oneLiner": "Track tasks fast",
    "targetUsers": "busy freelancers",
    "phase": "Foundation",
    "mustHave": ["login", "add task"],
    "notInMvp": ["social"],
    "successMetrics": ["10 signups"]
  }\n\`\`\``;
  const meta = parsePrdMeta(md);
  assert.ok(meta);
  assert.equal(meta.appName, 'Todo App');
  assert.equal(meta.targetUsers, 'busy freelancers');
  assert.equal(meta.phase, 'Foundation');
  assert.deepEqual(meta.mustHave, ['login', 'add task']);
  assert.deepEqual(meta.notInMvp, ['social']);
});

test('parsePrdMeta skips unrelated json and returns undefined when absent', () => {
  assert.equal(parsePrdMeta('# just prose'), undefined);
  assert.equal(parsePrdMeta('```json\n{"foo": 1}\n```'), undefined);
});

test('parseTechMeta extracts stack and commands', () => {
  const md = `\`\`\`json
  {
    "appName": "Todo",
    "stack": { "frontend": "Next.js", "database": "Supabase" },
    "commands": { "dev": "npm run dev", "test": "npm test" }
  }
  \`\`\``;
  const meta = parseTechMeta(md);
  assert.ok(meta);
  assert.equal(meta.stack?.frontend, 'Next.js');
  assert.equal(meta.stack?.database, 'Supabase');
  assert.equal(meta.commands?.dev, 'npm run dev');
});

test('parseTechMeta requires stack or commands', () => {
  assert.equal(parseTechMeta('```json\n{"appName": "x"}\n```'), undefined);
});

const fence = (value: unknown) => '```json\n' + JSON.stringify(value) + '\n```';
const versionedPrd = { schemaVersion: 1, documentType: 'prd', appName: 'Books', oneLiner: 'Save books', targetUsers: 'Readers', mustHave: ['Add'] };
const versionedTech = { schemaVersion: 1, documentType: 'techdesign', appName: 'Books', stack: { frontend: 'HTML' }, commands: { dev: 'python3 -m http.server 8000' } };

test('unrelated schemaVersion examples do not hide the final document metadata', () => {
  const example = fence({ schemaVersion: 1, theme: 'dark' });
  assert.equal(parsePrdMeta(example + '\n' + fence(versionedPrd))?.appName, 'Books');
  assert.equal(parseTechMeta(example + '\n' + fence(versionedTech))?.commands?.dev, versionedTech.commands.dev);
  const namedConfig = fence({ schemaVersion: 1, appName: 'Config example', theme: 'dark' });
  assert.equal(parsePrdMeta(namedConfig + '\n' + fence(versionedPrd))?.appName, 'Books');
  assert.equal(parseTechMeta(namedConfig + '\n' + fence(versionedTech))?.appName, 'Books');
  assert.equal(parsePrdMeta(example + '\n' + fence({ appName: 'Legacy' }))?.appName, 'Legacy');
});

test('unrelated examples and legacy fallbacks cannot rescue an invalid document contract', () => {
  const example = fence({ schemaVersion: 1, theme: 'dark' });
  for (const invalid of [
    { ...versionedPrd, schemaVersion: 2 },
    { ...versionedPrd, documentType: 'techdesign' },
    { ...versionedPrd, documentType: undefined },
    { ...versionedPrd, mustHave: [] },
  ]) {
    assert.equal(parsePrdMeta(example + '\n' + fence(invalid) + '\n' + fence({ appName: 'Legacy' })), undefined);
  }
  for (const invalid of [
    { ...versionedTech, schemaVersion: 2 },
    { ...versionedTech, documentType: 'prd' },
  ]) {
    assert.equal(parseTechMeta(example + '\n' + fence(invalid)), undefined);
  }
});

test('technical metadata cannot silently discard all stack or command choices', () => {
  assert.equal(parseTechMeta(fence({ ...versionedTech, stack: { framework: 'HTML' } })), undefined);
  assert.equal(parseTechMeta(fence({ ...versionedTech, commands: { serve: 'python3 -m http.server 8000' } })), undefined);
  assert.equal(parseTechMeta(fence({ appName: 'Books', stack: { framework: 'HTML' }, commands: { serve: 'serve' } })), undefined);
  assert.equal(parseTechMeta(fence(versionedTech))?.stack?.frontend, 'HTML');
});
