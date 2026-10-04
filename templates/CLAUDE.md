@AGENTS.md

# CLAUDE.md — [App Name]

The import above loads the shared project instructions. Keep Claude-specific
guidance here and consult the relevant files in `agent_docs/` for details.

## Operating notes

- Keep planning proportional to the requested change and complete the scope
  the user selected. A request for one planning stage ends with its handoff.
- Use the exact verification commands in `agent_docs/testing.md` — don't invent
  package-manager scripts.
- One session is sufficient by default. Use focused subagents only when the
  task and available tools justify them.
- Use the user's existing authorization for routine local edits and checks.
  Keep the client's permission controls intact. Ask when a new external send,
  paid service, production change, or destructive action is outside that scope;
  do not ask again for work already authorized. Keep secrets out of outputs.
- When AI features are in scope, verify the relevant provider settings,
  structured outputs, evaluations, and cost limits.

## Shared progress and Claude memory

The repository's `MEMORY.md` is the portable handoff for the user and their
coding tools. Update it at meaningful milestones and handoffs with the current
objective, decisions, actual checks, blockers, and next action. Replace stale
progress and reference product documents instead of copying transcripts.

Claude's automatic memory is separate, normally stored outside the repository
under `~/.claude/projects/<project>/memory/`. It can preserve private preferences
and lessons, but it does not replace the shared project handoff.

## Growing this file

Prefer progressive disclosure over length. Task-specific procedures belong in
`.claude/skills/<name>/SKILL.md` and supporting references;
directory-specific conventions belong in `<subdir>/CLAUDE.md` (loads on demand).
Universal constraints and safety prohibitions stay in `AGENTS.md`.
