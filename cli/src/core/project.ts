import { existsSync, readFileSync, readdirSync, realpathSync } from 'node:fs';
import { isAbsolute, join, relative, resolve } from 'node:path';
import type { Tool } from './meta.js';

export interface ProjectManifest {
  schemaVersion: 1;
  templateVersion: string;
  mode: 'quick' | 'guided' | 'deep';
  tools: Tool[];
  documents: { prd: string; techdesign: string };
}

export function projectPath(dir: string, path: string): string {
  const normalized = path.replace(/\\/g, '/');
  if (!normalized || isAbsolute(normalized) || /^[A-Za-z]:/.test(normalized)) throw new Error('Document paths must be relative to the project');
  const full = resolve(dir, normalized);
  const rel = relative(resolve(dir), full);
  if (rel === '..' || rel.startsWith(`..${process.platform === 'win32' ? '\\' : '/'}`)) throw new Error('Document path escapes project');
  if (existsSync(full)) {
    const actual = relative(realpathSync(dir), realpathSync(full));
    if (isAbsolute(actual) || actual === '..' || actual.startsWith('../') || actual.startsWith('..\\')) throw new Error('Document symlink escapes project');
  }
  return full;
}

export function readManifest(dir: string): ProjectManifest | undefined {
  const file = join(dir, 'vibe.project.json');
  if (!existsSync(file)) return undefined;
  const value = JSON.parse(readFileSync(file, 'utf8'));
  if (value?.schemaVersion !== 1 || typeof value.templateVersion !== 'string' ||
      !['quick', 'guided', 'deep'].includes(value.mode) || !Array.isArray(value.tools) ||
      value.tools.some((t: unknown) => !['claude', 'cursor', 'codex', 'gemini', 'copilot', 'local'].includes(t as string)) ||
      typeof value.documents?.prd !== 'string' || typeof value.documents?.techdesign !== 'string') {
    throw new Error('Invalid vibe.project.json (expected schemaVersion 1, templateVersion, mode, tools and document paths)');
  }
  projectPath(dir, value.documents.prd);
  projectPath(dir, value.documents.techdesign);
  return value;
}

export function documentPaths(dir: string, skip: { prd?: boolean; techdesign?: boolean } = {}): { prd?: string; techdesign?: string } {
  const manifest = readManifest(dir);
  if (manifest) return { prd: projectPath(dir, manifest.documents.prd), techdesign: projectPath(dir, manifest.documents.techdesign) };
  const find = (prefix: string, standard: string) => {
    const candidates = [join(dir, standard), join(dir, 'docs', standard)].filter(existsSync);
    const docs = join(dir, 'docs');
    if (existsSync(docs)) candidates.push(...readdirSync(docs).filter(n => n.startsWith(prefix) && n.endsWith('-MVP.md')).map(n => join(docs, n)));
    if (candidates.length > 1) throw new Error(`Multiple ${standard} candidates; set document paths in vibe.project.json`);
    return candidates[0];
  };
  return { prd: skip.prd ? undefined : find('PRD-', 'PRD.md'), techdesign: skip.techdesign ? undefined : find('TechDesign-', 'TECH_DESIGN.md') };
}
