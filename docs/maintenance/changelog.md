# Changelog

All notable changes to the Vibe-Coding Prompt Template will be documented in this file.

## [Unreleased] - March 2026 — Agentic Era v2.0

This major update shifts the repository from "chat-based prompt generation" to **Artifact-First Memory** and **Multi-Agent Orchestration**, reflecting the massive tool updates from February and March 2026 (Cursor Cloud Agents, Claude Agent Teams, and Copilot custom agents).

### Added
- **`vibeworkflow` CLI:** Zero-dependency npm package (`npx vibeworkflow init` / `doctor`) that automates Step 4 — scaffolds `AGENTS.md`, `agent_docs/`, and tool configs from the PRD/Tech Design meta block, then validates the result against the golden-path checklist.
- **Meta-block contract:** Parts 2 and 3 (and the `vibe-prd`/`vibe-techdesign` skills) now instruct the assistant to append a machine-readable JSON summary, consumed by both `vibeworkflow init` (fill) and `vibeworkflow doctor` (validate).
- **Skills shipped via CLI:** the planning skills (`vibe-research`/`vibe-prd`/`vibe-techdesign`/`vibe-workflow`) now live in `templates/`, so `npx vibeworkflow init` installs them into the user's project. When docs are missing, `init` emits an agent-first kickoff that tells the agent to use those skills to generate the docs.
- **CI workflows:** `cli-test.yml` guards template/CLI drift; `release-cli.yml` publishes `vibeworkflow` to npm on `v*` tags.
- **CLI 0.2.0 — agent-first single path:** bare `npx vibeworkflow` is now the smart default (kickoff when docs are missing, full scaffold when they exist). The CLI no longer interviews at all — it auto-detects installed AI tools (env vars + `.claude`/`.cursor`/`.codex`/`.gemini` dirs, `--tools` overrides) and always installs the canonical `.agents/skills/` (mirrored to `.claude/skills/` for Claude Code) *before* printing agent instructions, so the kickoff prompt always points at files that exist. The inline 9-question fallback interview, the interactive TTY picker, and the `--level`/`--answers` protocol are gone — the skills' full interviews are the only interview, and agents are told to use their native question tool strictly one question at a time. Scaffolding is idempotent: existing files are never overwritten (`--force` opts out), so re-runs can't clobber filled-in docs. Humans running it in a terminal get a banner redirecting them to drive it via their AI agent.

### Added
- **Artifact-First Memory:** Introduced `MEMORY.md` and `spec.md` concepts to prevent context window overload during long coding sessions.
- **Claude Agent Teams Guide:** Added `docs/claude-agent-teams.md` covering parallel sub-agents and the Team Lead approval flow.
- **Cursor Cloud Agents Guide:** Added `docs/cursor-cloud-agents.md` focusing on dynamic context discovery and file-centric memory.
- **Visual README Loop:** A modernized `╭──╮` looping diagram for the Execute -> Verify workflow.

### Changed
- **README Redesign:** Overhauled the main README to use collapsibles `<details open>`, a table of contents, and a faster 5-step quick start.
- **Tool Matrix:** Updated the tool recommendation matrix to clearly separate prototype tools (Lovable) from production tools (v0), and highlighted multi-agent capabilities.
- **Part 4 Prompts (`part4-notes-for-agent.md`):** Replaced legacy prompt structures with 2026 Agentic Boilerplate conventions, including explicit blocked directories and strict TypeScript guidelines.

### Removed
- **MCP Support Guide:** Removed `mcp-support.md` as standard tools now natively handle context retrieval much better, shifting the focus to native plugin workflows and Agent Teams.
