# Agent Tooling Compatibility

Last verified: 2026-10-04 (skill and invocation documentation only).

Use this when choosing optional coding-tool setup after the
[main Start a project workflow](../../README.md). Full manual prompts remain
available for fresh chats; install only the tools you intend to use.

## Documented native skills support

The table describes current official documentation. **Live skill discovery and
workflow behavior for this repository remain Not checked.** A successful file
installation alone does not establish either.

| Tool | Shared project instructions | Bundled skills | Invoke a stage |
|---|---|---|---|
| [Codex CLI / IDE extension](https://learn.chatgpt.com/docs/build-skills) | `AGENTS.md` | `.agents/skills/` | `/skills` picker or `$vibe-prd` |
| [Claude Code](https://code.claude.com/docs/en/skills) | `CLAUDE.md` with `@AGENTS.md` | `.claude/skills/` | `/vibe-prd` |
| [Cursor](https://cursor.com/docs/skills) | `AGENTS.md`; optional `.cursor/rules/` adapter | `.agents/skills/` | `/vibe-prd` |
| [Antigravity](https://antigravity.google/docs/skills) | `AGENTS.md`; extra rules only when needed | `.agents/skills/` | `/vibe-prd` |
| [Copilot in VS Code](https://code.visualstudio.com/docs/agent-customization/agent-skills) | `.github/copilot-instructions.md` pointing to `AGENTS.md` | `.agents/skills/` | `/vibe-prd`; `/skills` opens configuration |

Follow the [bundled installation guide](../../templates/tool-adapters/README.md)
and preserve reference folders and sibling skills. The CLI's Google-tool
selector is currently `gemini`; it installs the shared `.agents/skills/` bundle
for Antigravity too.

[Copilot's other clients also document skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills),
but skill controls differ by surface. Do not assume VS Code's slash commands
work in every client. For other coding tools, use the full manual prompts or
verify their documented skill locations and invocation controls first.

## Instructions, scope, and handoffs

- Keep stable shared rules in `AGENTS.md` and details in `agent_docs/`. Generate
  only the selected tool adapters.
- Use a real `@AGENTS.md` import when supplying a project `CLAUDE.md`.
  [Claude's native AGENTS.md loading](https://code.claude.com/docs/en/memory#agentsmd)
  requires a supported version and, by default, an absent project `CLAUDE.md`.
  The import also supports sessions where native loading is unavailable.
- Complete the stage the user selected and return its output and Handoff
  Context. Begin another stage when the user requests it.
- Keep the repository's `MEMORY.md` as compact, portable progress for later
  sessions and other tools. A client's private automatic memory supplements
  this shared handoff; it does not replace it.
- Reuse existing authorization for routine local edits and checks. Preserve
  client permission controls and ask about new external, paid, production, or
  destructive effects when they are outside the authorized scope.
- Treat skill permissions as client-specific configuration. For example,
  [Claude's `allowed-tools`](https://code.claude.com/docs/en/skills#pre-approve-tools-for-a-skill)
  pre-approves listed tools; it is not a restrictive sandbox. The
  [open skill specification](https://agentskills.io/specification#allowed-tools-field)
  marks support for this field as experimental and variable between clients.

One coding session is sufficient for the main workflow. Add subagents,
background execution, hooks, or MCP only for an actual project requirement.

## Legacy routes

- [Codex custom prompts](https://learn.chatgpt.com/docs/custom-prompts) are
  deprecated in favor of skills. Existing wrappers are retained in this repo,
  but are not a new-install recommendation.
- [Antigravity workflows](https://antigravity.google/docs/migration/workflows-to-skills/)
  retire on **November 1, 2026**. Use native skills for new setup and review old
  wrappers when migrating.
- Cursor's old command wrappers are retained for existing users; new setup
  uses the native skill bundle.
- [Google's Gemini CLI transition](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)
  ended consumer free/Pro/Ultra access to Gemini CLI on June 18, 2026. Antigravity
  is the consumer route. Gemini CLI remains available through supported
  enterprise licenses and paid API access; do not treat those as identical setups.

## What to verify in an installed client

1. **Installed:** the complete skill bundle exists in a documented location.
2. **Recognized:** the client lists or explicitly invokes the intended skill.
3. **Stage completed:** one real request produces the expected artifact and
   handoff while respecting the selected scope.

Record client/version, date, request, result, and an evidence path. Keep setup,
build, and product behavior results separate. See the
[release evidence and remaining checks](../maintenance/reliability-release.md).
Native plugin and marketplace distribution are not verified installation
routes for this package.

## Optional MCP compatibility

Documentation checked 2026-09-05: the
[MCP 2026-07-28 release](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
introduces a stateless core, authorization changes, and a formal extensions
framework. Tasks and [MCP Apps](https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/)
are extensions; protocol support alone does not establish client support for them.

For a project that needs MCP, record client/version, SDK/version, protocol
revision, transport, required extensions, authentication flow, scenario, date,
result, and evidence path. This repository has not run a live client/SDK
interoperability matrix for that revision. See the
[assistant-app recipe](../workflow/recipes.md) before choosing an integration.
