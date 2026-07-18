# /vibe-build — Step 5: Build the MVP

Step 5 of the vibe-coding workflow: build the MVP one verified feature at a time.

**Read `AGENTS.md` first — it is now the source of truth** (roadmap, commands, rules); details live in `agent_docs/`. If `AGENTS.md` doesn't exist yet, route the user to `/vibe-agents` first.

The essentials:
- Plan → execute → verify, ONE feature at a time. Propose a short plan and get approval before coding.
- After each feature: run the project's tests and linter, then update `## Current State` in `AGENTS.md` and `MEMORY.md`.
- Never delete files or change the database schema without confirmation.
- Before launch: work through `REVIEW-CHECKLIST.md`, including its Security section (secrets, auth, dependencies, rate limits).
