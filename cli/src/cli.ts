import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, resolve } from 'node:path';
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
  help?: boolean;
}

function parseArgs(argv: string[]): ParsedArgs {
  const out: ParsedArgs = {};
  const positional: string[] = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--help' || a === '-h') {
      out.help = true;
    } else if (a === '--json') {
      out.json = true;
    } else if (a === '--ai') {
      out.ai = true;
    } else if (a === '--force') {
      out.force = true;
    } else if (a === '--strict') {
      out.strict = true;
    } else if (a === '--prd' || a === '--techdesign' || a === '--tools' || a === '--dir') {
      out[a.slice(2) as 'prd'] = argv[++i];
    } else if (a.startsWith('--')) {
      const eq = a.indexOf('=');
      if (eq >= 0) {
        out[a.slice(2, eq) as 'prd'] = a.slice(eq + 1);
      }
    } else {
      positional.push(a);
    }
  }
  if (positional.length > 0) out.command = positional[0];
  return out;
}

function isTty(): boolean {
  return process.stdin.isTTY === true && process.stdout.isTTY === true;
}

function parseToolsFlag(raw: string): Tool[] {
  return raw
    .toLowerCase()
    .split(',')
    .map((t) => t.trim())
    .filter((t) => ALL_TOOLS.includes(t as Tool)) as Tool[];
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

function findDoc(dir: string, prefix: string): string | undefined {
  const docsDir = join(dir, 'docs');
  if (!existsSync(docsDir)) return undefined;
  const entries = readdirSync(docsDir);
  const match = entries.find((e) => e.startsWith(prefix) && e.endsWith('-MVP.md'));
  return match ? join(docsDir, match) : undefined;
}

function kickoffPrompt(skillEntryPath: string): string {
  return `IF YOU ARE AN AI AGENT READING THIS OUTPUT, drive the whole flow.
The user should only answer your questions.

1. Read ${skillEntryPath} and follow it. It orchestrates the full workflow
   (research -> PRD -> tech design) using the other vibe skills in the same
   folder. Cover every interview question those skills define.
2. Ask questions with your native question tool (e.g. AskUserQuestion) if you
   have one; otherwise ask in chat. One question at a time by default — but if
   the user answers several at once, accept them and skip ahead rather than
   re-asking. On "I don't know", propose a sensible default and confirm it.
   Never invent an answer the user did not give.
3. When docs/PRD-[App]-MVP.md and docs/TechDesign-[App]-MVP.md are both
   written (each ending with its \`\`\`json meta block), run: npx vibeworkflow
   It will scaffold AGENTS.md, agent_docs/, and tool configs.
4. Fill any remaining [placeholders] it reports in AGENTS.md and agent_docs/.
5. STOP. Summarize what was created and WAIT for the user to approve a plan
   before proposing phases or writing any code.`;
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
  const prdPath = args.prd ? resolve(args.prd) : findDoc(dir, 'PRD-');
  const techPath = args.techdesign ? resolve(args.techdesign) : findDoc(dir, 'TechDesign-');

  const tools: Tool[] = args.tools ? parseToolsFlag(args.tools) : detectTools(dir);
  const toolsSource = args.tools ? 'flags' : 'detected';

  if (!prdPath || !techPath) {
    // Kickoff: docs are missing. Scaffold the skill files first so the agent
    // instructions below always point at files that exist.
    const result = scaffold({
      targetDir: dir,
      tools,
      skillsOnly: true,
      overwrite: args.force,
    });

    const skillEntry = '.agents/skills/vibe-workflow/SKILL.md';
    const missing = [!prdPath ? 'PRD' : null, !techPath ? 'Tech Design' : null].filter(Boolean).join(' and ');
    const prompt = kickoffPrompt(skillEntry);

    if (args.json) {
      console.log(
        JSON.stringify(
          {
            kind: 'vibeworkflow-kickoff',
            dir,
            missing,
            tools,
            toolsSource,
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

    console.log(`\nNo ${missing} found in ${dir}/docs/.`);
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
  const result = scaffold({
    targetDir: dir,
    prd,
    tech,
    tools,
    aiInScope: args.ai,
    overwrite: args.force,
  });

  if (args.json) {
    console.log(
      JSON.stringify(
        {
          kind: 'vibeworkflow-init',
          dir,
          tools,
          toolsSource,
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
  console.log('  4. STOP and wait for the user to approve a Phase 1 plan before writing code.');
  if (isTty()) {
    console.log('');
    console.log(HUMAN_BANNER);
  }
}

async function runDoctor(args: ParsedArgs): Promise<void> {
  const dir = resolve(args.dir ?? '.');
  const result = doctor({ projectDir: dir, strict: args.strict });

  if (args.json) {
    console.log(JSON.stringify({ kind: 'vibeworkflow-doctor', ok: result.ok, findings: result.findings }, null, 2));
  } else {
    for (const f of result.findings) {
      console.log(`[${f.severity.toUpperCase()}] ${f.message}`);
    }
    if (result.ok) {
      console.log('\nProject looks good.');
    } else {
      console.log('\nIssues found — fix them before building.');
    }
  }
  process.exitCode = result.ok ? 0 : 1;
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log(USAGE);
    return;
  }

  const command = args.command ?? 'init';

  try {
    if (command === 'init') await runInit(args);
    else if (command === 'doctor') await runDoctor(args);
    else {
      console.error(`unknown command: ${command}`);
      console.log(USAGE);
      process.exitCode = 2;
    }
  } catch (err) {
    console.error(err instanceof Error ? err.message : String(err));
    process.exitCode = 1;
  }
}

void main();
