# vibeworkflow

Agent-driven MVP scaffolding for the [vibe-coding workflow](https://github.com/alpyalay/vibe-coding-prompt-template).

> **This CLI is designed to be run by your AI coding agent, not by hand.**
> Open Claude Code, Cursor, Codex, Gemini CLI, or your preferred AI tool and say:
>
> ```
> Run "npx vibeworkflow" and follow its instructions.
> ```
>
> Your agent will interview you (one question at a time), write the planning
> docs, and scaffold the project. You only answer its questions.

## What it does

`npx vibeworkflow` is state-aware:

- **Fresh project (no docs):** installs the planning skills into
  `.agents/skills/` (mirrored to `.claude/skills/` when Claude Code is
  detected) and prints instructions telling the agent to run the full
  research → PRD → Tech Design interview flow defined in those skills.
- **Docs exist (`docs/PRD-*-MVP.md` + `docs/TechDesign-*-MVP.md`):** scaffolds
  `AGENTS.md`, `agent_docs/`, and per-tool configs, auto-filling values from
  the docs' JSON meta blocks and reporting any remaining `[placeholders]` for
  the agent to fill.
- **Re-runs are safe:** existing files are never overwritten (pass `--force`
  to opt out), so filled-in docs and edited configs survive.

`npx vibeworkflow doctor` validates the project against the golden-path
checklist (`--strict` treats warnings as failures).

## Flags

| Flag | Purpose |
|------|---------|
| `--tools <list>` | Override tool detection: `claude,cursor,codex,gemini,copilot,local` |
| `--prd <path>` / `--techdesign <path>` | Explicit doc paths (default: auto-detect in `docs/`) |
| `--ai` | Include `agent-permissions.example.json` (AI features in scope) |
| `--force` | Overwrite existing files |
| `--json` | Machine-readable output |
| `--dir <path>` | Target directory |

AI tools are auto-detected from agent environment variables and existing
`.claude` / `.cursor` / `.codex` / `.gemini` directories (project or home).

Zero dependencies. Node 18+.

## Reliability and recovery (0.3.0)

From source, run `npm ci`, `npm run build`, then `node bin/vibeworkflow.js --help`.
Use `--skills-only` for a clean skills installation, `--dry-run --json` for a
write-free preview, and `--force` only for intended replacements. Boolean flags
accept `=true` or `=false`; unknown flags, missing values, and invalid tool names
fail before writing. `--force=false` keeps existing work.

Full setup writes a missing `vibe.project.json` with document paths, tools,
planning mode, and template version. Existing manifests are preserved. See the
[document contract](../docs/workflow/document-contract.md) for browser-export
names and versioned metadata. `doctor` validates setup only and explicitly
reports build and behavior as Not checked. Required missing metadata or
placeholders fail setup even without `--strict`.

Skill maintainers edit `workflow/skills/` at repository root and regenerate with
`python3 scripts/sync-skills.py`. Run `npm run test:package` to install the actual
tarball into a temporary consumer and test preservation and preview behavior.
