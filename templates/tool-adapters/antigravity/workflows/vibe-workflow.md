---
description: Route the user to the right stage of the vibe-coding workflow
---

# /vibe-workflow — the 5-stage router

The vibe-coding workflow turns an app idea into a working MVP in 5 stages. Your job: figure out where the user is and route them to the right stage.

1. Check which of these exist: `docs/research-*.md`, `docs/PRD-*.md`, `docs/TechDesign-*.md`, `AGENTS.md` + `agent_docs/`.
2. The first missing piece is the next stage:

| Stage | Command | Source of truth |
|---|---|---|
| 1. Research | `/vibe-research` | `part1-deepresearch.md` |
| 2. PRD | `/vibe-prd` | `part2-prd-mvp.md` |
| 3. Tech design | `/vibe-techdesign` | `part3-tech-design-mvp.md` |
| 4. Agent setup | `/vibe-agents` | `part4-notes-for-agent.md` |
| 5. Build | `/vibe-build` | `AGENTS.md` |

Nothing exists yet? Welcome the user and start at stage 1. Everything exists? Go straight to stage 5.

The part files at the repository root are the single source of truth — never re-ask what a doc in `docs/` already answers. (If a part file isn't in this project, ask the user to paste it.)
