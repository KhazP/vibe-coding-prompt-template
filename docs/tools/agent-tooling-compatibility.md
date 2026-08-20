# Agent Tooling Compatibility

Last verified: 2026-05

Use this when: you need to choose which AI coding tool or adapter files a generated project should include.

## Quick Answer

Do not generate every adapter. Pick the tools the user will actually use, keep the root instructions short, and point each tool back to `AGENTS.md` and `agent_docs/`.

## Tool Picker

| Need | Good default | Files |
|------|--------------|-------|
| Local agent coding and verification | Codex | `AGENTS.md`, `.codex/config.toml`, `.agents/skills/` |
| Planning, skills, hooks, subagents | Claude Code | `CLAUDE.md`, `.claude/skills/`, `.claude/agents/`, `.claude/settings.json` |
| IDE workflow and background agents | Cursor | `.cursor/rules/`, `.cursor/BUGBOT.md`, `.cursor/environment.json.example` |
| VS Code and GitHub PR workflow | Copilot | `.github/copilot-instructions.md`, `.github/instructions/`, `.github/prompts/` |
| Google agent-first workflow | Antigravity/Gemini legacy | `GEMINI.md`, `.gemini/settings.json` where supported |
| Local/private coding | Continue, Cline, Aider, OpenHands | Tool prompt plus local endpoint and approval rules |
| Prototype/front door | v0, Lovable, Bolt, Replit, other builders | Builder exit review before production |

## Checklist

- [ ] Only selected tools get adapter files.
- [ ] Each adapter points to `AGENTS.md`, `agent_docs/`, and `REVIEW-CHECKLIST.md`.
- [ ] Tool permissions are ask-first for shell, write, network, MCP, production, billing, and destructive actions.
- [ ] Background agents use isolated branches/worktrees.
- [ ] Reviews and tests still run after agent output.

## Example

If the user says "Cursor and Copilot," generate `.cursor/rules/`, `.cursor/BUGBOT.md`, `.github/copilot-instructions.md`, optional `.github/instructions/`, optional `.github/prompts/`, and skip Claude/Codex/Gemini files.

## Links

- [Claude Code changelog](https://code.claude.com/docs/en/changelog)
- [Cursor changelog](https://cursor.com/changelog)
- [GitHub Copilot cloud agent docs](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent)
- [Google Gemini CLI to Antigravity CLI transition](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)
