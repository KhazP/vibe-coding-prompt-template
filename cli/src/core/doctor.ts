import { existsSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { documentPaths } from './project.js';
import { parsePrdMeta, parseTechMeta } from './meta.js';
import { remainingPlaceholders } from './placeholders.js';
import { resolveTemplatesDir } from './scaffold.js';

export type Severity = 'error' | 'warn';

export interface Finding {
  severity: Severity;
  message: string;
}

export interface DoctorResult {
  ok: boolean;
  findings: Finding[];
  checks: { setup: "checked" | "incomplete"; build: "not-checked"; behavior: "not-checked" };
}

export interface DoctorOptions {
  projectDir: string;
  strict?: boolean;
}

const REQUIRED_ROOT = ['AGENTS.md', 'MEMORY.md', 'REVIEW-CHECKLIST.md'];
const REQUIRED_AGENT_DOCS = [
  'agent_docs/project_brief.md',
  'agent_docs/tech_stack.md',
  'agent_docs/testing.md',
];

export function doctor(opts: DoctorOptions): DoctorResult {
  const findings: Finding[] = [];
  const push = (severity: Severity, message: string) => findings.push({ severity, message });
  const has = (rel: string) => existsSync(join(opts.projectDir, rel));

  for (const f of REQUIRED_ROOT) {
    if (!has(f)) push('error', `missing ${f}`);
  }
  for (const f of REQUIRED_AGENT_DOCS) {
    if (!has(f)) push('error', `missing ${f}`);
  }

  let paths: { prd?: string; techdesign?: string } = {};
  try { paths = documentPaths(opts.projectDir); } catch (err) { push('error', String(err)); }
  const prdPath = paths.prd && existsSync(paths.prd) ? paths.prd : undefined;
  const techPath = paths.techdesign && existsSync(paths.techdesign) ? paths.techdesign : undefined;
  const prdContent = prdPath ? readFileSync(prdPath, 'utf8') : '';
  const techContent = techPath ? readFileSync(techPath, 'utf8') : '';
  const prd = parsePrdMeta(prdContent);
  const tech = parseTechMeta(techContent);
  const display = (path: string) => relative(opts.projectDir, path).replace(/\\/g, '/');
  if (prd && tech?.appName && prd.appName !== tech.appName) push('error', 'PRD and Tech Design belong to different projects');

  if (!prdPath) {
    push('error', paths.prd ? `missing ${display(paths.prd)}` : 'missing PRD.md or PRD-*-MVP.md at project root or in docs/; custom paths can be set in vibe.project.json');
  } else {
    if (!prd) {
      push('error', `${display(prdPath)} has missing or invalid PRD metadata; use the JSON contract from Part 2`);
    }
  }

  if (!techPath) {
    push('error', paths.techdesign ? `missing ${display(paths.techdesign)}` : 'missing TECH_DESIGN.md or TechDesign-*-MVP.md at project root or in docs/; custom paths can be set in vibe.project.json');
  } else {
    if (!tech) {
      push('error', `${display(techPath)} has missing or invalid Tech Design metadata; use the JSON contract from Part 3`);
    }
  }

  if (has('AGENTS.md')) {
    const content = readFileSync(join(opts.projectDir, 'AGENTS.md'), 'utf8');
    if (!content.includes('agent_docs')) {
      push('warn', 'AGENTS.md does not reference agent_docs/');
    }
  }

  let templatesDir: string | undefined;
  try { templatesDir = resolveTemplatesDir(); } catch (err) { push('error', `Cannot check template placeholders: ${String(err)}`); }
  const template = (rel: string): string => {
    const path = templatesDir && join(templatesDir, rel);
    return path && existsSync(path) ? readFileSync(path, 'utf8') : '';
  };
  const requiredTemplates = [...REQUIRED_AGENT_DOCS, 'AGENTS.md'];
  for (const rel of requiredTemplates) {
    if (!has(rel)) continue;
    const source = template(rel);
    if (templatesDir && !source) push('error', `Cannot check placeholders: missing template ${rel}`);
    const placeholders = remainingPlaceholders(readFileSync(join(opts.projectDir, rel), 'utf8'), source);
    if (placeholders.length > 0) {
      push('error', `${rel} has unfilled placeholders: ${placeholders.join(', ')}`);
    }
  }
  const projectDeclarations = requiredTemplates.map(template).join('\n');
  for (const [path, content, reference] of [
    [prdPath, prdContent, '.agents/skills/vibe-prd/references/cli-output.md'],
    [techPath, techContent, '.agents/skills/vibe-techdesign/references/cli-output.md'],
  ] as const) {
    if (!path) continue;
    const placeholders = remainingPlaceholders(content, projectDeclarations + '\n' + template(reference));
    if (placeholders.length) push('error', `${display(path)} has unfilled placeholders: ${placeholders.join(', ')}`);
  }

  if (has('.claude/settings.json')) {
    try {
      const config = JSON.parse(readFileSync(join(opts.projectDir, '.claude/settings.json'), 'utf8'));
      const mode = config.permissions?.defaultMode;
      if (mode !== undefined && !['default', 'acceptEdits', 'plan', 'auto', 'dontAsk', 'bypassPermissions'].includes(mode)) {
        push('error', `unsupported Claude permissions.defaultMode: ${mode}`);
      }
    } catch { push('error', 'invalid .claude/settings.json'); }
  }
  const ok = !findings.some((f) => f.severity === 'error' || (opts.strict && f.severity === 'warn'));
  return { ok, findings, checks: { setup: ok ? "checked" : "incomplete", build: "not-checked", behavior: "not-checked" } };
}
