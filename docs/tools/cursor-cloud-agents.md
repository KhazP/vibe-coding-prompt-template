# Cursor Rules And Background Agents

Last verified: 2026-05

Use this when: a generated project will use Cursor rules, Bugbot, background agents, or shared environments.

## Quick Answer

Keep Cursor rules small. Put product details in `AGENTS.md` and `agent_docs/`, then use `.cursor/rules/` to point Cursor at the right files.

## Checklist

- [ ] `.cursor/rules/00-project.mdc` says to read `AGENTS.md` first.
- [ ] Scoped rules exist only when needed, such as frontend, backend, or tests.
- [ ] `.cursor/BUGBOT.md` tells Bugbot to focus on bugs, missing tests, secrets, and AI/tool permission risks.
- [ ] `.cursor/environment.json.example` uses idempotent setup commands.
- [ ] Background agents work on isolated branches.
- [ ] Diffs, logs, and tests are reviewed before merge.

## Example Rule

```mdc
---
alwaysApply: true
---

Read AGENTS.md first. Use agent_docs/ for implementation details.
Propose a plan before multi-file edits. Run the checks in agent_docs/testing.md.
```

## Links

- [Cursor Rules](https://docs.cursor.com/en/context)
- [Cursor Memories](https://docs.cursor.com/en/context/memories)
- [Cursor Background Agents](https://docs.cursor.com/en/background-agents)
- [Cursor Bugbot](https://docs.cursor.com/bugbot)
