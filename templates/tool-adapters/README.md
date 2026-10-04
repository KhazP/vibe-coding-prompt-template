# Optional tool setup

Start with the [main workflow](../../README.md). Its full manual prompts can be
pasted into a fresh chat with the previous stage's output and Handoff Context.
The setup below is an optional way to use the bundled skills in a coding tool.

Last verified: 2026-10-04 (official documentation only). Skill discovery and
workflow behavior have **not been checked in live clients for this repository**.

## Install the bundled skills

In your app folder, ask your coding agent to run:

```text
npx vibeworkflow --skills-only --tools <tool>
```

Replace `<tool>` with `codex`, `claude`, `cursor`, `copilot`, or `gemini`.
The CLI currently uses `gemini` as its selector for Google tooling, including
Antigravity. This installs `.agents/skills/` and adds the `.claude/skills/`
mirror when `claude` is selected. It preserves existing files and does not
generate the project documents in skills-only mode.

For a manual installation, copy this repository's complete `.agents/skills/`
folder into your app's `.agents/skills/`. For Claude Code, copy the complete
`.claude/skills/` folder instead. Keep the reference subfolders and the bundled
collection together: some skills refer to a sibling skill. Use one installation
route and review existing copies before adding another.

The canonical source is `workflow/skills/`; generated bundles include the
instructions they need. The workflow repository itself does not need to be
cloned into your app.

## Invoke the stage you want

| Coding tool | Project skill folder | Example: invoke the PRD stage |
|---|---|---|
| [Codex CLI or IDE extension](https://learn.chatgpt.com/docs/build-skills) | `.agents/skills/` | Choose it with `/skills`, or type `$vibe-prd` |
| [Claude Code](https://code.claude.com/docs/en/skills) | `.claude/skills/` | `/vibe-prd` |
| [Cursor](https://cursor.com/docs/skills) | `.agents/skills/` | `/vibe-prd` |
| [Antigravity](https://antigravity.google/docs/skills) | `.agents/skills/` | `/vibe-prd` |
| [Copilot in VS Code](https://code.visualstudio.com/docs/agent-customization/agent-skills) | `.agents/skills/` | `/vibe-prd`; use `/skills` to inspect configured skills |

[Copilot also documents skills for other surfaces](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills).
The slash-command example above applies to VS Code; check your client's own
invocation controls elsewhere.

Supply the previous stage's saved output and say which stage to complete.
For example, after selecting the PRD skill:

```text
Complete the PRD stage only using my research and Handoff Context. Return the
finished PRD and a handoff explaining what to attach and paste for technical
design. Wait for me to start that next stage.
```

Confirm that your client recognizes the intended skill before relying on it.
If it is unavailable, use the full manual prompt from the main workflow.

## Project instructions and handoffs

`AGENTS.md` holds shared project rules; `agent_docs/` holds implementation
details, and the repository's `MEMORY.md` holds current progress and handoffs.
Only add adapter files for the tools you use:

- **Claude Code:** use the `CLAUDE.md` in this folder at your app root, or the
  fuller generated template. Both use an actual `@AGENTS.md` import. With a
  project `CLAUDE.md` present, a prose instruction to read `AGENTS.md` does not
  guarantee that it loads. See [Claude's import guidance](https://code.claude.com/docs/en/memory#share-one-file-with-other-coding-tools).
- **Codex:** reads `AGENTS.md` natively; see the [Codex setup note](codex/README.md).
- **Cursor or Copilot:** retain the generated instruction adapter if you use
  one, pointing to the shared files rather than duplicating their contents.
- **Antigravity:** use the current [rules guidance](https://antigravity.google/docs/rules)
  when extra workspace instructions are needed.

Preserve client permission settings and the user's existing authorization for
routine local work. Shared handoff state is separate from a client's private
automatic memory.

## Legacy wrappers

The `cursor/commands/`, `antigravity/workflows/`, and `codex/prompts/` files remain
in this repository for existing setups. They are legacy wrappers, not the
recommended installation route. New setups use the bundled skills above.

[Codex custom prompts are deprecated in favor of skills](https://learn.chatgpt.com/docs/custom-prompts).
[Antigravity workflows retire on November 1, 2026](https://antigravity.google/docs/migration/workflows-to-skills/).
When migrating, review existing wrappers and confirm that the client invokes
the intended skill. Runtime compatibility remains unverified until that check
is performed in the installed client.
