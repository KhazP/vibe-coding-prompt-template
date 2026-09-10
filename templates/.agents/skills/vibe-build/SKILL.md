---
name: vibe-build
description: "Implement a new-project slice through the relevant checks and working user journey."
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, AskUserQuestion
---

# Build a new-project slice

Establish the requested outcome and acceptance criteria from the user's brief
and relevant project decisions. Read applicable repository instructions and
only the documents needed for this slice. An absent or stale MEMORY.md does
not require rebuilding the whole planning workflow.

Implement the intended behavior using the chosen stack. Preserve unrelated
work and make a recovery checkpoint when the change warrants it. Add accounts,
databases, infrastructure, paid services, and AI only when requirements justify
them. Continue until the requested slice works, not merely until files exist.

Use the project's affected checks and exercise the relevant user journey when
runtime access permits it. Fix failures caused by the change, distinguish
pre-existing failures, and reuse results that remain valid. A setup validator
or passing build alone is not evidence of interactive behavior.

Update project progress when the repository maintains it. Report the outcome,
actual checks, unverified behavior, and any concrete blocker or recovery note.
External sends, production changes, store submission, and deployment remain
subject to authorization for their specific effect and target.
