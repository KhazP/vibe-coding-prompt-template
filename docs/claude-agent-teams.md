# Claude Code: Subagents & Agent Teams

> Last verified: 2026-07

Claude Code ships two ways to split work across multiple agents: **subagents** (helpers inside your session) and **agent teams** (independent Claude sessions working in parallel). For vibe-coding MVPs, both are a big speed and safety upgrade over one agent trying to rewrite your whole stack at once.

## 1. Subagents (built-in, on by default)

Subagents are specialized helpers that work in their own context window and return only a summary, so your main chat stays clean. Claude Code includes built-in subagents like **Explore** (read-only codebase search) and **Plan** (research for planning), and you can define your own in `.claude/agents/`.

Useful prompts:

> *"Use the Explore subagent to map out how my auth flow works before we change anything."*

> *"Spawn subagents in parallel: one to research form libraries, one to check how my current validation works. Summarize both."*

Source: [Claude Code subagents docs](https://docs.anthropic.com/en/docs/claude-code/subagents)

## 2. Agent Teams (experimental)

Agent teams coordinate several full Claude Code instances at once. Your main session acts as the **team lead**: it spawns **teammates**, keeps a shared task list, and synthesizes results. Each teammate works in its own context window, and teammates can message each other directly.

Agent teams are experimental and disabled by default. Enable them in `.claude/settings.json`:

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

### The "Team Lead" pattern

Once enabled, describe the team you want in plain language:

> *"Read `AGENTS.md`. You are the Team Lead. Spawn a Researcher teammate to read my existing DB schema, and a Coder teammate to write the new auth routes."*

This isolates work: the Researcher reads files, the Coder writes files, and the Lead manages the task list. You can also watch any teammate and message it directly from the agent panel below the prompt input.

### Require plan approval

For anything risky, make teammates plan before they touch code:

> *"Spawn an architect teammate to refactor the authentication module. Require plan approval before they make any changes."*

The teammate works in read-only plan mode until the lead approves its plan. You can give the lead criteria, e.g. *"only approve plans that include test coverage"* — and you still make the final call, since permission prompts bubble up to your session.

### What teams are good (and bad) at

- **Good:** parallel research, PR review from several angles, features where each teammate owns different files, debugging with competing hypotheses.
- **Bad:** sequential work, edits to the same file (teammates will overwrite each other), quick one-off changes.
- **Cost:** each teammate is a separate Claude instance, so token use scales with team size. Start with 3–5 teammates.
- **Limitations:** experimental — in-process teammates don't survive `/resume`, one team per session, teammates can't spawn their own teammates.

Source: [Claude Code agent teams docs](https://docs.anthropic.com/en/docs/claude-code/agent-teams)

## 3. A safe orchestration pattern for MVPs

Regardless of which feature you use, this rhythm keeps parallel agents from breaking working code:

1. **Lead plans first.** Ask the lead agent to read `AGENTS.md` and produce a step-by-step plan before anyone writes code.
2. **Execute in owned lanes.** Give each worker agent its own files or modules so nobody collides.
3. **Review before merge.** Have the lead (or a reviewer subagent) check the work against the plan and your `MEMORY.md` notes before you accept it.

## 4. Managing long sessions

Over a multi-hour vibe-coding session, any agent's context fills up and it slows down.

- Use `/compact` (or let auto-compaction kick in) to summarize history instead of wiping the chat.
- After finishing a module, ask Claude to append key decisions to your physical `MEMORY.md` file, so a fresh session — or a fresh teammate — can reload context from disk.
