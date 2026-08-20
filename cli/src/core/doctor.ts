import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parsePrdMeta, parseTechMeta } from './meta.js';

export type Severity = 'error' | 'warn';

export interface Finding {
  severity: Severity;
  message: string;
}

export interface DoctorResult {
  ok: boolean;
  findings: Finding[];
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

const PLACEHOLDER_RE = /\[([^\]\n]+)\](?!\()/g;

function realPlaceholders(content: string): string[] {
  const seen = new Set<string>();
  const matches = content.match(PLACEHOLDER_RE);
  if (!matches) return [];
  for (const m of matches) {
    const inner = m.replace(/^\[|\]$/g, '').trim();
    if (inner === '' || inner === 'x' || inner === 'X') continue;
    if (!seen.has(m)) seen.add(m);
  }
  return [...seen];
}

function findDoc(projectDir: string, prefix: string, suffix: string): string | undefined {
  const docsDir = join(projectDir, 'docs');
  if (!existsSync(docsDir)) return undefined;
  const entries = readdirSync(docsDir);
  const match = entries.find(
    (e) => e.startsWith(prefix) && e.endsWith(suffix) && e !== 'research.md',
  );
  return match ? join(docsDir, match) : undefined;
}

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

  const prdPath = findDoc(opts.projectDir, 'PRD-', '-MVP.md');
  const techPath = findDoc(opts.projectDir, 'TechDesign-', '-MVP.md');

  if (!prdPath) {
    push('error', 'missing docs/PRD-[AppName]-MVP.md');
  } else {
    const prd = parsePrdMeta(readFileSync(prdPath, 'utf8'));
    if (!prd) {
      push('warn', 'PRD has no parseable meta block; add the ```json block from part2');
    }
  }

  if (!techPath) {
    push('error', 'missing docs/TechDesign-[AppName]-MVP.md');
  } else {
    const tech = parseTechMeta(readFileSync(techPath, 'utf8'));
    if (!tech) {
      push('warn', 'Tech Design has no parseable meta block; add the ```json block from part3');
    }
  }

  if (has('AGENTS.md')) {
    const content = readFileSync(join(opts.projectDir, 'AGENTS.md'), 'utf8');
    if (!content.includes('agent_docs')) {
      push('warn', 'AGENTS.md does not reference agent_docs/');
    }
  }

  for (const rel of [...REQUIRED_AGENT_DOCS, 'AGENTS.md']) {
    if (!has(rel)) continue;
    const placeholders = realPlaceholders(readFileSync(join(opts.projectDir, rel), 'utf8'));
    if (placeholders.length > 0) {
      push('warn', `${rel} has unfilled placeholders: ${placeholders.join(', ')}`);
    }
  }

  const ok = !findings.some((f) => f.severity === 'error' || (opts.strict && f.severity === 'warn'));
  return { ok, findings };
}
