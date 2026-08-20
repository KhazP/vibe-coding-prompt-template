import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CommandsMeta, PrdMeta, TechMeta, Tool } from './meta.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const ALL_TOOLS: Tool[] = ['claude', 'cursor', 'codex', 'gemini', 'copilot', 'local'];

export interface InitOptions {
  targetDir: string;
  templatesDir?: string;
  prd?: PrdMeta;
  tech?: TechMeta;
  tools?: Tool[];
  aiInScope?: boolean;
  /** Only write skill files (.agents/skills/, plus per-tool skill dirs). */
  skillsOnly?: boolean;
  /** Overwrite files that already exist in the target (default: keep them). */
  overwrite?: boolean;
}

export interface ScaffoldResult {
  files: string[];
  skipped: string[];
  remainingPlaceholders: Array<{ file: string; placeholders: string[] }>;
}

interface FillEntry {
  search: string;
  value?: string;
}

const PLACEHOLDER_RE = /\[([^\]\n]+)\](?!\()/g;

function appName(prd?: PrdMeta, tech?: TechMeta): string | undefined {
  return prd?.appName ?? tech?.appName;
}

export function resolveTemplatesDir(explicit?: string): string {
  if (explicit) return explicit;
  const env = process.env.VIBE_TEMPLATES_DIR;
  if (env) return env;
  const candidates = [
    join(__dirname, '..', 'templates'), // dist/templates (published)
    join(__dirname, '..', '..', '..', 'templates'), // repo root (dev)
  ];
  for (const c of candidates) {
    if (existsSync(join(c, 'AGENTS.md'))) return c;
  }
  throw new Error('templates directory not found; set VIBE_TEMPLATES_DIR');
}

function buildFillMap(prd?: PrdMeta, tech?: TechMeta): Map<string, string> {
  const map = new Map<string, string>();
  const name = appName(prd, tech);

  if (name) {
    map.set('[App Name]', name);
    map.set('[AppName]', name);
  }
  if (prd?.oneLiner) map.set('[one sentence]', prd.oneLiner);
  if (prd?.targetUsers) map.set('[target users]', prd.targetUsers);
  if (prd?.phase) map.set('[Discovery / Foundation / Core MVP / Polish / Launch]', prd.phase);
  if (tech?.stack) {
    const s = tech.stack;
    if (s.frontend) map.set('[framework/version]', s.frontend);
    if (s.backend) map.set('[framework/runtime]', s.backend);
    if (s.database) map.set('[database/ORM]', s.database);
    if (s.auth) map.set('[provider]', s.auth);
    if (s.styling) map.set('[library/system]', s.styling);
    if (s.deployment) map.set('[host]', s.deployment);
  }
  if (tech?.commands) {
    const c = tech.commands;
    if (c.setup) map.set('[setup command from Tech Design]', c.setup);
    if (c.dev) map.set('[dev command from Tech Design]', c.dev);
  }

  const now = new Date();
  map.set('[YYYY-MM]', now.toISOString().slice(0, 7));
  map.set('[YYYY-MM-DD]', now.toISOString().slice(0, 10));

  return map;
}

const COMMAND_LINE_RE = /^(\s*-\s*(?:Setup|Dev|Test|Typecheck|Lint\/format|Build|All tests|Single test)\s*:\s*`?)\[[^\]\n]+\](`?)/i;

function commandForLabel(label: string, commands?: CommandsMeta): string | undefined {
  const l = label.toLowerCase();
  if (l.includes('setup')) return commands?.setup;
  if (l.includes('dev')) return commands?.dev;
  if (l.includes('single test') || l.includes('all tests') || l.includes('test')) return commands?.test;
  if (l.includes('typecheck')) return commands?.typecheck;
  if (l.includes('lint')) return commands?.lint;
  if (l.includes('build')) return commands?.build;
  return undefined;
}

function fillCommands(content: string, commands?: CommandsMeta): string {
  if (!commands) return content;
  return content
    .split('\n')
    .map((line) => {
      const m = line.match(COMMAND_LINE_RE);
      if (!m) return line;
      const cmd = commandForLabel(m[1], commands);
      if (!cmd) return line;
      return line.replace(COMMAND_LINE_RE, `${m[1]}${cmd}${m[2] ?? ''}`);
    })
    .join('\n');
}

function fillTemplate(content: string, fill: Map<string, string>, commands?: CommandsMeta): string {
  let out = content;
  for (const [search, value] of fill) {
    out = out.split(search).join(value);
  }
  return fillCommands(out, commands);
}

function remainingPlaceholders(content: string): string[] {
  const seen = new Set<string>();
  const matches = content.match(PLACEHOLDER_RE);
  if (!matches) return [];
  for (const m of matches) {
    const key = m.trim();
    const inner = key.replace(/^\[|\]$/g, '').trim();
    if (inner === '' || inner === 'x' || inner === 'X') continue;
    if (!seen.has(key)) seen.add(key);
  }
  return [...seen];
}

function listFiles(dir: string, base: string, out: string[]): string[] {
  for (const entry of readdirSync(dir)) {
    if (entry === '.DS_Store') continue;
    const full = join(dir, entry);
    const rel = relative(base, full);
    if (statSync(full).isDirectory()) {
      listFiles(full, base, out);
    } else {
      out.push(rel);
    }
  }
  return out;
}

export function scaffold(opts: InitOptions): ScaffoldResult {
  const templatesDir = resolveTemplatesDir(opts.templatesDir);
  const tools = new Set<Tool>(opts.tools ?? []);
  const fill = buildFillMap(opts.prd, opts.tech);

  const allFiles = listFiles(templatesDir, templatesDir, []);

  const files: string[] = [];
  const skipped: string[] = [];
  const remaining: ScaffoldResult['remainingPlaceholders'] = [];

  for (const rel of allFiles) {
    const included = opts.skillsOnly ? isSkillFile(rel, tools) : shouldInclude(rel, tools, opts.aiInScope);
    if (!included) continue;
    const src = join(templatesDir, rel);
    const dest = join(opts.targetDir, rel);

    let content: string;
    if (existsSync(dest) && !opts.overwrite) {
      // Never clobber a file the user or their agent may have edited; report
      // the placeholders still present on disk instead.
      skipped.push(rel);
      content = readFileSync(dest, 'utf8');
    } else {
      content = fillTemplate(readFileSync(src, 'utf8'), fill, opts.tech?.commands);
      mkdirSync(dirname(dest), { recursive: true });
      writeFileSync(dest, content);
      files.push(rel);
    }

    const placeholders = remainingPlaceholders(content);
    if (placeholders.length > 0) {
      remaining.push({ file: rel, placeholders });
    }
  }

  return { files, skipped, remainingPlaceholders: remaining };
}

// The canonical skills live in .agents/skills/ and are always installed; the
// .claude/skills/ mirror is added when Claude Code is in play.
function isSkillFile(rel: string, tools: Set<Tool>): boolean {
  if (rel.startsWith('.agents/skills/')) return true;
  if (rel.startsWith('.claude/skills/')) return tools.has('claude');
  return false;
}

function shouldInclude(rel: string, tools: Set<Tool>, aiInScope?: boolean): boolean {
  const top = rel.split('/')[0];

  if (top === 'agent_docs') return true;
  if (rel === 'AGENTS.md' || rel === 'MEMORY.md' || rel === 'REVIEW-CHECKLIST.md') return true;

  if (rel === 'agent-permissions.example.json') return aiInScope === true;

  if (top === 'CLAUDE.md' || rel === 'CLAUDE.md') return tools.has('claude');
  if (rel.startsWith('.claude/')) return tools.has('claude');

  if (rel.startsWith('.cursor/')) return tools.has('cursor');

  if (rel.startsWith('.codex/')) return tools.has('codex');
  if (rel.startsWith('.agents/skills/')) return true;
  if (rel.startsWith('.agents/')) return tools.has('codex') || tools.has('gemini') || tools.has('local');

  if (rel.startsWith('.gemini/') || rel === 'GEMINI.md') return tools.has('gemini');

  if (rel.startsWith('.github/')) return tools.has('copilot');

  return false;
}
