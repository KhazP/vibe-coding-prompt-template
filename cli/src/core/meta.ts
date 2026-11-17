import { existsSync, readFileSync } from 'node:fs';

export interface PrdMeta {
  appName: string;
  oneLiner?: string;
  targetUsers?: string;
  phase?: string;
  mustHave?: string[];
  niceToHave?: string[];
  notInMvp?: string[];
  successMetrics?: string[];
}

export interface StackMeta {
  frontend?: string;
  backend?: string;
  database?: string;
  auth?: string;
  styling?: string;
  deployment?: string;
}

export interface CommandsMeta {
  setup?: string;
  dev?: string;
  test?: string;
  typecheck?: string;
  lint?: string;
  build?: string;
}

export interface TechMeta {
  appName?: string;
  stack?: StackMeta;
  commands?: CommandsMeta;
  aiScope?: string;
}

export type Tool = 'claude' | 'cursor' | 'codex' | 'gemini' | 'copilot' | 'local';

const OPEN_FENCE = /^[ \t]*(`{3,}|~{3,})[ \t]*([^`\s]*)[^`]*$/;
const CLOSE_FENCE = /^[ \t]*(`{3,}|~{3,})[ \t]*$/;

// Bodies of ```json and untagged fenced blocks, paired line by line as in
// CommonMark (a closing fence uses the same character and is at least as long).
// Blocks inside a markdown or untagged outer fence (````markdown, as Parts 2
// and 3 recommend for copyable output) are searched too; other code blocks such
// as ```text or ```bash are skipped whole.
function fencedBodies(content: string): string[] {
  const lines = content.split(/\r?\n/);
  const bodies: string[] = [];
  const scan = (from: number, to: number) => {
    for (let i = from; i < to; i++) {
      const open = OPEN_FENCE.exec(lines[i]);
      if (!open) continue;
      const [, marker, info] = open;
      let end = i + 1;
      for (; end < to; end++) {
        const close = CLOSE_FENCE.exec(lines[end]);
        if (close && close[1][0] === marker[0] && close[1].length >= marker.length) break;
      }
      const lang = info.toLowerCase();
      if (lang === 'json' || lang === '') {
        const body = lines.slice(i + 1, end).join('\n').trim();
        if (body) bodies.push(body);
      }
      if (lang === 'markdown' || lang === 'md' || lang === '') scan(i + 1, end);
      i = end;
    }
  };
  scan(0, lines.length);
  return bodies;
}

function findJsonBlocks(content: string): unknown[] {
  const blocks: unknown[] = [];
  for (const body of fencedBodies(content)) {
    try {
      blocks.push(JSON.parse(body));
    } catch {
      // ignore unparseable fences
    }
  }
  return blocks;
}

const METADATA_KEYS = ['documentType', 'schemaVersion', 'appName', 'oneLiner', 'targetUsers', 'mustHave', 'stack', 'commands'];

/** Raw text of the fenced JSON blocks that look like document metadata. */
export function metadataSource(content: string): string {
  return fencedBodies(content).filter(body => {
    try {
      const value = JSON.parse(body);
      return isRecord(value) && METADATA_KEYS.some(key => key in value);
    } catch {
      return false;
    }
  }).join('\n');
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function strArray(v: unknown): string[] | undefined {
  if (Array.isArray(v)) return v.filter((x) => typeof x === 'string');
  return undefined;
}

function str(v: unknown): string | undefined {
  return typeof v === 'string' && v.trim() ? v.trim() : undefined;
}

function rec(v: unknown): Record<string, unknown> | undefined {
  return isRecord(v) ? v : undefined;
}

function metadataBlocks(content: string): unknown[] {
  const blocks = findJsonBlocks(content);
  const typed = blocks.filter(b => isRecord(b) && b.documentType !== undefined);
  if (typed.length) return typed;
  // A schemaVersion in an ordinary configuration example is not a document
  // contract. Keep malformed document-shaped contracts so they still fail.
  const identified = blocks.filter(b => isRecord(b) && b.schemaVersion !== undefined &&
    ['appName', 'oneLiner', 'targetUsers', 'mustHave', 'stack', 'commands'].some(key => key in b));
  return identified.length ? identified : blocks.filter(b => !isRecord(b) || b.schemaVersion === undefined);
}

const STACK_KEYS = ['frontend', 'backend', 'database', 'auth', 'styling', 'deployment'];
const COMMAND_KEYS = ['setup', 'dev', 'test', 'typecheck', 'lint', 'build'];

function hasKnownValue(value: unknown, keys: string[]): boolean {
  return isRecord(value) && keys.some(key => !!str(value[key]));
}

function contract(block: Record<string, unknown>, type: string): boolean {
  if (block.schemaVersion === undefined && block.documentType === undefined) return true; // legacy
  if (block.schemaVersion !== 1 || block.documentType !== type || !str(block.appName)) return false;
  if (type === 'prd') return !!str(block.oneLiner) && !!str(block.targetUsers) && Array.isArray(block.mustHave) && block.mustHave.length > 0 && block.mustHave.every(v => !!str(v));
  return hasKnownValue(block.stack, STACK_KEYS) && hasKnownValue(block.commands, COMMAND_KEYS);
}

export function parsePrdMeta(content: string): PrdMeta | undefined {
  for (const block of metadataBlocks(content)) {
    if (!isRecord(block)) continue;
    if (!contract(block, 'prd')) return undefined;
    const appName = str(block.appName);
    if (!appName) continue;
    return {
      appName,
      oneLiner: str(block.oneLiner),
      targetUsers: str(block.targetUsers),
      phase: str(block.phase),
      mustHave: strArray(block.mustHave),
      niceToHave: strArray(block.niceToHave),
      notInMvp: strArray(block.notInMvp),
      successMetrics: strArray(block.successMetrics),
    };
  }
  return undefined;
}

export function parseTechMeta(content: string): TechMeta | undefined {
  for (const block of metadataBlocks(content)) {
    if (!isRecord(block)) continue;
    if (!contract(block, 'techdesign')) return undefined;
    const hasStack = isRecord(block.stack);
    const hasCommands = isRecord(block.commands);
    if (!hasStack && !hasCommands) continue;
    if (((hasStack && Object.keys(block.stack as object).length > 0) ||
        (hasCommands && Object.keys(block.commands as object).length > 0)) &&
        !hasKnownValue(block.stack, STACK_KEYS) && !hasKnownValue(block.commands, COMMAND_KEYS)) return undefined;

    const stackSrc = rec(block.stack);
    const stack = hasStack && stackSrc
      ? {
          frontend: str(stackSrc.frontend),
          backend: str(stackSrc.backend),
          database: str(stackSrc.database),
          auth: str(stackSrc.auth),
          styling: str(stackSrc.styling),
          deployment: str(stackSrc.deployment),
        }
      : undefined;

    const commandsSrc = rec(block.commands);
    const commands = hasCommands && commandsSrc
      ? {
          setup: str(commandsSrc.setup),
          dev: str(commandsSrc.dev),
          test: str(commandsSrc.test),
          typecheck: str(commandsSrc.typecheck),
          lint: str(commandsSrc.lint),
          build: str(commandsSrc.build),
        }
      : undefined;

    return {
      appName: str(block.appName),
      stack,
      commands,
      aiScope: str(block.aiScope),
    };
  }
  return undefined;
}

export function readFileIfExists(path: string): string | undefined {
  if (existsSync(path)) return readFileSync(path, 'utf8');
  return undefined;
}
