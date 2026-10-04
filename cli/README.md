# vibeworkflow

Optional project setup for the [manual vibe-coding workflow](https://github.com/KhazP/vibe-coding-prompt-template).

After saving your PRD and Technical Design, open your project in Claude Code,
Cursor, Codex, Gemini CLI, or another coding agent and say:
>
> ```
> Run "npx vibeworkflow" and follow its instructions.
> ```
>
The helper creates project instructions from those documents. The manual
copy-and-paste workflow also works without installing this CLI.

## What it does

`npx vibeworkflow` is state-aware:

- **Fresh project (no docs):** installs the planning skills into
  `.agents/skills/` (mirrored to `.claude/skills/` when Claude Code is
  detected) and prints instructions for the agent to inspect existing work,
  reuse answered questions, and identify what is still needed.
- **Docs exist:** accepts `PRD.md` / `TECH_DESIGN.md` or
  `PRD-*-MVP.md` / `TechDesign-*-MVP.md` at the project root or in `docs/`.
  Custom paths can be selected in `vibe.project.json` or with explicit flags.
  It scaffolds
  `AGENTS.md`, `agent_docs/`, and per-tool configs, auto-filling values from
  the docs' JSON meta blocks, using their actual paths in generated
  instructions, and reporting remaining project-template placeholders.
- **Reusable skills stay reusable:** skill files and their example references
  are copied unchanged and excluded from the project punch-list.
- **Re-runs are safe:** existing files are never overwritten (pass `--force`
  to opt out), so filled-in docs and edited configs survive.

`npx vibeworkflow doctor` checks setup files, metadata, and declared template
placeholders (`--strict` treats warnings as failures). It does not launch the
app, execute its commands, or judge whether the plan is complete.

## Flags

| Flag | Purpose |
|------|---------|
| `--tools <list>` | Override tool detection: `claude,cursor,codex,gemini,copilot,local` |
| `--prd <path>` / `--techdesign <path>` | Explicit doc paths (default: auto-detect at project root or in `docs/`) |
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
declared placeholders fail setup even without `--strict`. Literal CSS selectors,
JSON arrays, checkboxes, and Markdown links are not unfinished template fields.
If multiple documents match, the error lists them; select the intended file with
`--prd` / `--techdesign` or record both paths in the manifest.

Skill maintainers edit `workflow/skills/` at repository root and regenerate with
`python3 scripts/sync-skills.py`. Run `npm run test:package` to install the actual
tarball into a temporary consumer and test preservation and preview behavior.
