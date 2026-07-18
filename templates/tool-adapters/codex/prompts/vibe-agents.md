---
description: Vibe-coding step 4 — generate AGENTS.md and tool configs
---

# vibe-agents — Step 4: Agent-file setup

Step 4 of the vibe-coding workflow: generate `AGENTS.md` + tool configs so the AI builder stays on track.

**Read `part4-notes-for-agent.md` at the repository root and follow it as the single source of truth.** (If it isn't in this project, ask the user to paste it.)

The essentials:
- Requires `docs/PRD-*.md` and `docs/TechDesign-*.md` — if either is missing, route the user back a stage.
- Instantiate the files in `templates/` (`AGENTS.md`, `MEMORY.md`, `REVIEW-CHECKLIST.md`, `agent_docs/`) — fill every `[REPLACE:]` / `[CHOOSE:]` placeholder from the PRD and Tech Design; never rewrite the templates.
- Add the thin tool adapter from `templates/tool-adapters/` for the user's tool.

Done? Point the user to the final stage: `/prompts:vibe-build`.
