---
name: vibe-agents
description: "Create project agent instructions and tool configuration from agreed product and technical decisions."
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, AskUserQuestion
---

# Project agent instructions

Use agreed requirements, technical decisions, and the existing repository to
write only stable, non-obvious guidance. For a targeted AGENTS.md edit, update
the affected instructions directly; do not require an installer, new PRD, or
full interview. Keep progress in the project's memory/handoff file rather than
the always-loaded rules.

For initial Vibe Workflow setup, use the configured manifest paths. If the
vibeworkflow CLI is available, inspect `npx vibeworkflow --dry-run --json` and
initialize within the user's authorization. Preserve existing files; replacement
flags are for intentional replacements whose affected files have been reviewed.
The CLI installs files directly, not into a new templates/ directory.

Fill relevant placeholders from known decisions. Keep task-specific procedures
in skills or references and load them only when relevant. Distinguish local
implementation from external sends, production changes, and new access. Do not
enable broad tool permissions just to make setup convenient.

Use `npx vibeworkflow doctor` for CLI-generated setup when available; it checks
configuration, not a working build or user journey. In a chat without filesystem
access, use the repository's docs/context-pack.md and supplied product decisions
to produce separated files to save. State absent template/context limitations
instead of inventing them. Continue into implementation only when that is part
of the user's request.
