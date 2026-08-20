# Golden Path Checklist

Use this when: you want to confirm the workflow produced enough context for an AI coding agent to build safely.

## Quick Answer

A project is ready for the build step when it has:

- `docs/research-[AppName].md` or equivalent research notes
- `docs/PRD-[AppName]-MVP.md`
- `docs/TechDesign-[AppName]-MVP.md`
- `AGENTS.md`
- `agent_docs/`
- `REVIEW-CHECKLIST.md`
- Tool-specific files only for the tools the user selected

## Checklist

- [ ] Research includes competitors, MVP scope, risk, and dated sources for volatile claims.
- [ ] PRD says who the product is for, what v1 must do, and what is out of scope.
- [ ] Tech Design lists stack, commands, data model, deployment, and verification steps.
- [ ] AI scope is explicit: none, simple AI feature, internal agent, MCP/tool use, local model, or builder-assisted.
- [ ] `AGENTS.md` is short and points to `agent_docs/` instead of duplicating everything.
- [ ] `agent_docs/tech_stack.md` has exact setup, dev, test, typecheck, and build commands.
- [ ] `agent_docs/testing.md` says what evidence is required before work is complete.
- [ ] Tool adapters exist only for selected tools: Claude, Cursor, Copilot, Codex, Antigravity/Gemini legacy, or local agents.

## Example

If a user chooses Cursor and Copilot, generate `.cursor/rules/`, `.cursor/BUGBOT.md`, `.github/copilot-instructions.md`, optional `.github/instructions/`, and skip Claude/Codex/Gemini files.

## Links

- Main workflow: `README.md`
- Agent setup prompt: `part4-notes-for-agent.md`
- Build checklist: `templates/REVIEW-CHECKLIST.md`
