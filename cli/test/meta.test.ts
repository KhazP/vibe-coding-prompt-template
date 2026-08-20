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
