# CLAUDE.md — [App Name]

**Project guidance lives in [AGENTS.md](./AGENTS.md).** Read it first. This file
holds only what is specific to Claude Code, so the two never drift apart —
duplicating commands or architecture across both is how they start disagreeing.

## Source of truth, in order

1. `AGENTS.md`
2. `agent_docs/project_brief.md`
3. `agent_docs/tech_stack.md`
4. `agent_docs/testing.md`

## Operating notes

- Plan before multi-file edits; build one small change at a time.
- Use the exact verification commands in `agent_docs/testing.md` — don't invent
  package-manager scripts.
- Delegate focused research, review, or debugging to subagents.
- **Never auto-approve** MCP, shell/write/network, production, billing, or
  destructive tools. Never read, print, or transmit secrets without explicit
  permission.
- For AI product work, verify structured outputs, provider retention/training
  settings, evals, telemetry, cost ceilings, and approval gates.

## Memory is automatic — don't hand-maintain it

Claude preserves relevant context on its own. **Do not add instructions to
manually update a `MEMORY.md` after decisions or phases**; that was the old
pattern and it produces a stale file that competes with the real one.

## Growing this file

Prefer progressive disclosure over length. Task-specific procedures belong in
`.claude/skills/<name>/SKILL.md` (only the description stays resident);
directory-specific conventions belong in `<subdir>/CLAUDE.md` (loads on demand).
Universal constraints and safety prohibitions stay in `AGENTS.md`.
