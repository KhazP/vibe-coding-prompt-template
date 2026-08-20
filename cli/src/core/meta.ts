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

const FENCE = /```(?:json)?\s*([\s\S]*?)```/gi;

function findJsonBlocks(content: string): unknown[] {
  const blocks: unknown[] = [];
  let m: RegExpExecArray | null;
  FENCE.lastIndex = 0;
  while ((m = FENCE.exec(content)) !== null) {
    const body = m[1].trim();
    if (!body) continue;
    try {
      blocks.push(JSON.parse(body));
    } catch {
      // ignore unparseable fences
    }
  }
  return blocks;
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null;
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

export function parsePrdMeta(content: string): PrdMeta | undefined {
  for (const block of findJsonBlocks(content)) {
    if (!isRecord(block)) continue;
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
  for (const block of findJsonBlocks(content)) {
    if (!isRecord(block)) continue;
    const hasStack = isRecord(block.stack);
    const hasCommands = isRecord(block.commands);
    if (!hasStack && !hasCommands) continue;

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
