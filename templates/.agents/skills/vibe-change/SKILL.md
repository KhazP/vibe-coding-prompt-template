---
name: vibe-change
description: Add one bounded feature to an existing app while preserving current behavior. Do not restart the full new-project workflow.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, AskUserQuestion
---

# Vibe Change

Inspect the affected source, applicable repository instructions, current diff, and relevant checks. Consult product documents when scope or acceptance criteria are unclear. Confirm only missing acceptance criteria, constraints, and scope. An absent PRD or AGENTS.md does not require starting research again.

Establish the relevant baseline with checks appropriate to the change; use an existing user journey when behavior is affected. Preserve current work; record a real recovery checkpoint for risky changes. Identify the smallest affected area and implement one feature without unrelated rewrites. Add regression checks where they demonstrate behavior, and rerun the affected checks.

Use `../vibe-verify/SKILL.md` for the changed journey and relevant existing behavior. Update product decisions only where requirements changed, and progress in MEMORY.md. Report Changed, Checked, Not checked, Next decision, Recovery. Escalate to deeper planning only for an actual architecture, security, cost, or data-migration decision.
