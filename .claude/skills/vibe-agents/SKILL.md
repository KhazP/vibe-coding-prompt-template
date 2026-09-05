---
name: vibe-agents
description: Generate project agent instructions from agreed requirements and technical decisions. Not for ordinary incremental feature changes.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, AskUserQuestion
---

# Vibe Agents

Read the agreed PRD and Tech Design using vibe.project.json paths when available; otherwise inspect docs/PRD-*-MVP.md and docs/TechDesign-*-MVP.md. Reconcile conflicts and reuse Handoff Context before asking anything.

Run `npx vibeworkflow --dry-run --json` to inspect setup changes, then initialize within existing authorization. Existing files are preserved by default. Use --force only for explicitly intended replacement after showing affected files. The CLI installs selected files directly; it does not create a templates/ directory.

Fill required placeholders from decisions. AGENTS.md contains stable rules; MEMORY.md contains current progress; agent_docs contains concise build context. Run `npx vibeworkflow doctor` and resolve required setup errors. Build and behavior remain Not checked.

For a chat without filesystem access, use the repository's downloadable docs/context-pack.md plus the user's product documents; output clearly separated files to save. Do not invent absent template content. Tool configurations follow the installed client's supported settings; do not enable broad permissions automatically.
