# Docs

Most users only need the main README and the golden path checklist. The rest of these files are reference cards for specific decisions.

## Read This First

- [Golden path checklist](workflow/golden-path-checklist.md) - verify the five-step workflow produced the right files.
- [Freshness policy](maintenance/freshness-policy.md) - maintainer-only rules for keeping AI/tooling claims current.
- [Changelog](CHANGELOG.md) - notable changes to this template and the `vibeworkflow` CLI.

## When You Need Them

| Need | Read |
|------|------|
| Starting from v0, Lovable, Bolt, Replit, or another builder | [Builder exit review](workflow/builder-exit-review.md) |
| Choosing a build path (web MVP, OpenAI/Vercel/Cloudflare/Google AI, local, builder) | [Modern AI build paths](ai/build-paths.md) |
| Adding product AI, RAG, memory, tool calls, or voice | [AI feature patterns](ai/feature-patterns.md) |
| Letting AI read data, call tools, use MCP, or take actions | [AI agent security](ai/agent-security.md) |
| Choosing between Codex, Claude, Cursor, Copilot, Antigravity, builders, or local agents | [Agent tooling compatibility](tools/agent-tooling-compatibility.md) |
| Using Claude Code subagents, skills, hooks, or agent teams | [Claude guide](tools/claude-agent-teams.md) |
| Using Cursor rules, Bugbot, background agents, or environments | [Cursor guide](tools/cursor-cloud-agents.md) |

## Reading Rule

Do not read everything up front. Read the page that matches the decision in front of you, then go back to the workflow.
