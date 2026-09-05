import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, resolve, relative } from 'node:path';
import { documentPaths, readManifest } from './core/project.js';
import { doctor } from './core/doctor.js';
import { parsePrdMeta, parseTechMeta, type Tool } from './core/meta.js';
import { scaffold, ALL_TOOLS } from './core/scaffold.js';

const USAGE = `vibeworkflow — agent-driven Step 4 automation for the vibe-coding workflow

This tool is designed to be run BY an AI coding agent (Claude Code, Cursor,
Codex, Gemini CLI, ...), not by hand. In your AI tool, say:

  Run "npx vibeworkflow" and follow its instructions.

Usage:
  vibeworkflow [init] [flags]    Smart default: scaffold skills + kickoff when
                                 docs are missing, full scaffold when they exist
  vibeworkflow doctor [flags]    Validate a project against the golden-path checklist

init flags:
  --prd <path>         Path to docs/PRD-*.md (default: auto-detect in <dir>/docs)
  --techdesign <path>  Path to docs/TechDesign-*.md (default: auto-detect)
  --tools <list>       Comma-separated: claude,cursor,codex,gemini,copilot,local
                       (default: auto-detect installed AI tools)
  --ai                 Include agent-permissions.example.json (AI features in scope)
  --skills-only        Install workflow skills without generating project setup
  --dry-run            Preview affected files without writing
  --force              Overwrite files that already exist (default: keep them)
  --json               Emit machine-readable JSON
  --dir <path>         Target directory (default: current directory)

doctor flags:
  --dir <path>         Project directory (default: current directory)
  --strict             Treat warnings as failures
  --json               Emit machine-readable JSON

Environment:
  VIBE_TEMPLATES_DIR   Override templates source directory
`;

interface ParsedArgs {
  command?: string;
  prd?: string;
  techdesign?: string;
  tools?: string;
  ai?: boolean;
  force?: boolean;
  json?: boolean;
  dir?: string;
  strict?: boolean;
  skillsOnly?: boolean;
  help?: boolean;
  dryRun?: boolean;
}

function parseArgs(argv: string[]): ParsedArgs {
  const out: ParsedArgs = {};
  const booleans = new Set(['help', 'json', 'ai', 'force', 'strict', 'dry-run', 'skills-only']);
  const strings = new Set(['prd', 'techdesign', 'tools', 'dir']);
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i] === '-h' ? '--help' : argv[i];
    if (!arg.startsWith('-')) {
      if (out.command || !['init', 'doctor'].includes(arg)) throw new Error(`Unexpected argument: ${arg}`);
      out.command = arg;
      continue;
    }
    const match = /^--([^=]+)(?:=(.*))?$/.exec(arg);
    if (!match) throw new Error(`Unknown option: ${arg}`);
    const [, key, inline] = match;
    if (booleans.has(key)) {
      if (inline !== undefined && inline !== 'true' && inline !== 'false') throw new Error(`--${key} expects true or false`);
      Object.assign(out, { [key === 'dry-run' ? 'dryRun' : key === 'skills-only' ? 'skillsOnly' : key]: inline !== 'false' });
    } else if (strings.has(key)) {
      const value = inline ?? argv[++i];
      if (!value || value.startsWith('-')) throw new Error(`--${key} requires a value`);
      Object.assign(out, { [key]: value });
    } else throw new Error(`Unknown option: --${key}`);
  }
  if (out.command === 'doctor' && ['prd', 'techdesign', 'tools', 'ai', 'force', 'dryRun', 'skillsOnly'].some(k => k in out)) {
    throw new Error('doctor accepts only --dir, --strict, --json and --help');
  }
  if (out.command !== 'doctor' && out.strict !== undefined) throw new Error('--strict is only valid with doctor');
  return out;
}

function isTty(): boolean {
  return process.stdin.isTTY === true && process.stdout.isTTY === true;
}

function parseToolsFlag(raw: string): Tool[] {
  const values = raw.toLowerCase().split(',').map(t => t.trim());
  if (values.some(t => !ALL_TOOLS.includes(t as Tool))) throw new Error(`Invalid tools: ${raw}`);
  return [...new Set(values)] as Tool[];
}

// Detect which AI coding tools are in play. Directory presence (project, then
// home) is the primary signal; env vars set by agent CLIs are additive bonuses.
export function detectTools(projectDir: string, home = homedir()): Tool[] {
  const found = new Set<Tool>();

  if (process.env.CLAUDECODE || process.env.CLAUDE_CODE_ENTRYPOINT) found.add('claude');
  if (process.env.CURSOR_TRACE_ID) found.add('cursor');

  for (const base of [projectDir, home]) {
    if (existsSync(join(base, '.claude'))) found.add('claude');
    if (existsSync(join(base, '.cursor'))) found.add('cursor');
    if (existsSync(join(base, '.codex'))) found.add('codex');
    if (existsSync(join(base, '.gemini'))) found.add('gemini');
  }
  if (existsSync(join(projectDir, '.github', 'copilot-instructions.md'))) found.add('copilot');

  return [...found];
}

function resolveMeta(prdPath: string, techPath: string) {
  const prd = prdPath && existsSync(prdPath) ? parsePrdMeta(readFileSync(prdPath, 'utf8')) : undefined;
  const tech = techPath && existsSync(techPath) ? parseTechMeta(readFileSync(techPath, 'utf8')) : undefined;
  return { prd, tech };
}

function kickoffPrompt(skillEntryPath: string): string {
  return `Read ${skillEntryPath} and inspect the workspace before asking questions.
Route by the user's situation: start something new, continue a project, or fix something broken.
Existing files are evidence to inspect, not proof that planning or verification is complete.
For a new project choose Quick, Guided, or Deep planning appropriate to its scope.
Ask one question at a time by default; if the user answers several at once, accept those answers.
Reuse Handoff Context. Ask only unresolved, relevant questions.
For existing work use vibe-change; for failures use vibe-debug. Do not restart planning.
After new-project documents exist, run npx vibeworkflow, fill placeholders, then run doctor.
Doctor checks setup only: build and behavior remain Not checked until actually exercised.
Build within the user's approved scope and report Changed, Checked, Not checked, Next decision, Recovery.`;
}

const HUMAN_BANNER = `┌─────────────────────────────────────────────────────────────────────┐
│  vibeworkflow is designed to be driven by your AI coding agent,     │
│  not run by hand.                                                   │
│                                                                     │
│  Open your AI tool (Claude Code, Cursor, Codex, Gemini CLI, ...)    │
│  and say:                                                           │
│                                                                     │
│      Run "npx vibeworkflow" and follow its instructions.            │
│                                                                     │
│  Your agent will interview you, write the planning docs, and        │
│  scaffold the project. You only answer its questions.               │
└─────────────────────────────────────────────────────────────────────┘`;

async function runInit(args: ParsedArgs): Promise<void> {
  const dir = resolve(args.dir ?? '.');
  const found = args.skillsOnly || (args.prd && args.techdesign) ? {} : documentPaths(dir, { prd: !!args.prd, techdesign: !!args.techdesign });
  const prdPath = args.prd ? resolve(dir, args.prd) : found.prd;
  const techPath = args.techdesign ? resolve(dir, args.techdesign) : found.techdesign;
  for (const path of [prdPath, techPath]) if (path && !existsSync(path)) throw new Error(`Document not found: ${path}`);

  const tools: Tool[] = args.tools ? parseToolsFlag(args.tools) : readManifest(dir)?.tools ?? detectTools(dir);
  const toolsSource = args.tools ? 'flags' : readManifest(dir) ? 'manifest' : 'detected';

  if (args.skillsOnly || !prdPath || !techPath) {
    // Kickoff: docs are missing. Scaffold the skill files first so the agent
    // instructions below always point at files that exist.
    const result = scaffold({
      targetDir: dir,
      tools,
      skillsOnly: true,
      overwrite: args.force === true,
    dryRun: args.dryRun,
    onPlan: plan => { if (args.force && !args.json) console.log(`Affected files (before writing):\n${plan.join("\n")}`); },
    });

    const skillEntry = '.agents/skills/vibe-workflow/SKILL.md';
    const missing = args.skillsOnly ? '' : [!prdPath ? 'PRD' : null, !techPath ? 'Tech Design' : null].filter(Boolean).join(' and ');
    const prompt = kickoffPrompt(skillEntry);

    if (args.json) {
      console.log(
        JSON.stringify(
          {
            kind: args.skillsOnly ? 'vibeworkflow-skills' : 'vibeworkflow-kickoff',
            dir,
            missing,
            tools,
            toolsSource,
            dryRun: args.dryRun === true,
            files: result.files,
            skipped: result.skipped,
            prompt,
          },
          null,
          2,
        ),
      );
      return;
    }

    if (args.dryRun) { console.log(`Preview only; would write:\n${result.files.join('\n')}`); return; }
    if (missing) console.log(`\nNo ${missing} found in ${dir}.`);
    console.log(`Installed ${result.files.length} skill files (${result.skipped.length} already existed).`);
    if (tools.length > 0) console.log(`Detected AI tools: ${tools.join(', ')}`);
    console.log('\n--- AGENT INSTRUCTIONS ---\n');
    console.log(prompt);
    console.log('\n--- END AGENT INSTRUCTIONS ---');
    if (isTty()) {
      console.log('');
      console.log(HUMAN_BANNER);
    }
    return;
  }

  const { prd, tech } = resolveMeta(prdPath, techPath);
  if (!prd || !tech) throw new Error('Both documents need valid metadata before setup can complete');
  if (tech.appName && prd.appName !== tech.appName) throw new Error('PRD and Tech Design belong to different projects');
  const result = scaffold({
    targetDir: dir,
    prd,
    tech,
    tools,
    aiInScope: args.ai,
    overwrite: args.force === true,
    dryRun: args.dryRun,
    onPlan: plan => { if (args.force && !args.json) console.log(`Affected files (before writing):\n${plan.join("\n")}`); },
  });

  if (!existsSync(join(dir, 'vibe.project.json'))) {
    const paths = { prd: relative(dir, prdPath).replace(/\\/g, '/'), techdesign: relative(dir, techPath).replace(/\\/g, '/') };
    if (Object.values(paths).every(p => !p.startsWith('..') && !p.includes(':'))) {
      if (!args.dryRun) writeFileSync(join(dir, 'vibe.project.json'), JSON.stringify({ schemaVersion: 1, templateVersion: '0.3.0', mode: 'guided', tools, documents: paths }, null, 2) + '\n', { flag: 'wx' });
      result.files.push('vibe.project.json');
    }
  }
  if (args.json) {
    console.log(
      JSON.stringify(
        {
          kind: 'vibeworkflow-init',
          dir,
          tools,
          toolsSource,
          dryRun: args.dryRun === true,
          files: result.files,
          skipped: result.skipped,
          remainingPlaceholders: result.remainingPlaceholders,
        },
        null,
        2,
      ),
    );
    return;
  }

  if (args.dryRun) { console.log(`Preview only; would write:\n${result.files.join('\n')}`); return; }
  console.log(`\nScaffolded ${result.files.length} files into ${dir}`);
  if (result.skipped.length > 0) {
    console.log(`Kept ${result.skipped.length} existing files (use --force to overwrite).`);
  }
  if (tools.length > 0) {
    console.log(`Tool configs (${toolsSource}): ${tools.join(', ')}`);
  } else {
    console.log('No AI tools detected — pass --tools claude,cursor,... to add tool configs.');
  }
  if (result.remainingPlaceholders.length > 0) {
    console.log('\nPunch-list (agent: fill these from the PRD and Tech Design):');
    for (const r of result.remainingPlaceholders) {
      console.log(`  ${r.file}: ${r.placeholders.join(', ')}`);
    }
  } else {
    console.log('\nNo remaining placeholders.');
  }

  console.log('\nNext steps (for the agent):');
  console.log('  1. Read AGENTS.md, then docs/PRD-*.md and docs/TechDesign-*.md.');
  console.log('  2. Fill the placeholders above from those docs.');
  console.log('  3. Verify with: npx vibeworkflow doctor');
  console.log('  4. Build the next agreed slice within the user’s authorization, then verify behavior.');
  if (isTty()) {
    console.log('');
    console.log(HUMAN_BANNER);
  }
}

async function runDoctor(args: ParsedArgs): Promise<void> {
  const dir = resolve(args.dir ?? '.');
  const result = doctor({ projectDir: dir, strict: args.strict });

  if (args.json) {
    console.log(JSON.stringify({ kind: 'vibeworkflow-doctor', ...result }, null, 2));
  } else {
    for (const f of result.findings) {
      console.log(`[${f.severity.toUpperCase()}] ${f.message}`);
    }
    if (result.ok) {
      console.log('\nSetup checked.');
    } else {
      console.log('\nSetup incomplete — resolve the findings above.');
    }
  }
  if (!args.json) console.log('Build: Not checked.\nBehavior: Not checked.');
  process.exitCode = result.ok ? 0 : 1;
}

async function main(): Promise<void> {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) { console.log(USAGE); return; }
    if (args.command === 'doctor') await runDoctor(args);
    else await runInit(args);
  } catch (err) {
    console.error(err instanceof Error ? err.message : String(err));
    process.exitCode = 1;
  }
}

void main();
