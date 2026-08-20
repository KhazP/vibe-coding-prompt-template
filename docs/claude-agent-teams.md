# Claude Subagents and Agent Teams

Last verified: 2026-04

Claude Code supports several layers of delegation. For this workflow, use the lowest-complexity layer that solves the problem:

1. Root `CLAUDE.md` for project memory and instructions
2. Project subagents for focused research, review, debugging, or test work
3. Plan Mode for permissioned planning before edits
4. Experimental agent teams only when agents need to coordinate with each other

## Subagents first

Use subagents for bounded work that benefits from separate context:

- Researcher: read docs, schemas, and source files; return findings and risks
- Code reviewer: inspect a diff and report bugs before merge
- Test runner: run the project verification commands and summarize failures
- Debugger: isolate one failing feature or test file

Good subagent prompts are concrete:

```text
Read AGENTS.md and agent_docs/testing.md. Review the auth diff only.
Return prioritized findings with file/line references. Do not edit files.
```

Add reusable project subagents under `.claude/agents/*.md` only when the role will be used repeatedly. Keep each agent narrow and point it back to `AGENTS.md` and `agent_docs/`.

## Plan Mode

For complex changes, use Claude Code Plan Mode or the equivalent permission mode before edits. The workflow prompt should say:

```text
Read AGENTS.md and agent_docs/. Enter Plan Mode. Propose the smallest safe implementation plan, list the files you expect to touch, and wait before editing.
```

The goal is not more ceremony. The goal is to prevent unreviewed multi-file rewrites and make the first implementation pass easy to verify.

## Agent teams are advanced

Agent teams are useful when multiple teammates must coordinate, challenge each other's findings, or own separate modules. Treat them as an advanced, opt-in workflow because they add token cost and coordination overhead.

Use this only for large tasks:

```text
Read AGENTS.md. You are the lead. Assign a read-only researcher, a reviewer, and one implementation teammate with a disjoint file scope. The implementation teammate must present a plan before editing.
```

Do not make agent teams the default for beginner MVPs. Most projects should start with one lead agent plus focused subagents.

## Memory, hooks, and privacy

- Put durable project facts in `CLAUDE.md`, `AGENTS.md`, and `MEMORY.md`.
- Put long procedures in skills, not in root config files.
- Put repeated role definitions in `.claude/agents/`.
- Use `.claude/settings.json` for shareable project permissions/hooks and `.claude/settings.local.json` for personal settings.
- Avoid printing secrets into terminal output or transcripts. Deny reads of credential files unless the user explicitly authorizes the task.

## Official references

- [Claude Code subagents](https://code.claude.com/docs/en/sub-agents)
- [Claude Code agent teams](https://code.claude.com/docs/en/agent-teams)
- [Claude Code permission modes](https://code.claude.com/docs/en/permission-modes)
- [Claude Code memory](https://code.claude.com/docs/en/memory)
- [Claude Code hooks](https://code.claude.com/docs/en/hooks)
