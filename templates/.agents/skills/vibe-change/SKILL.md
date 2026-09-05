---
name: vibe-change
description: Add one bounded feature to an existing app while preserving current behavior. Do not restart the full new-project workflow.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, AskUserQuestion
---

# Vibe Change

Inspect source, repository instructions, current diff, product documents, and existing checks before asking questions. Confirm only missing acceptance criteria, constraints, and scope. An absent PRD or AGENTS.md does not require starting research again.

Establish the baseline with appropriate approved commands and one existing user journey. Preserve current work; record a real recovery checkpoint for risky changes. Identify the smallest affected area and implement one feature without unrelated rewrites. Add regression checks where they demonstrate behavior, and rerun the affected checks.

Use `../vibe-verify/SKILL.md` for the changed journey and relevant existing behavior. Update product decisions only where requirements changed, and progress in MEMORY.md. Report Changed, Checked, Not checked, Next decision, Recovery. Escalate to deeper planning only for an actual architecture, security, cost, or data-migration decision.
