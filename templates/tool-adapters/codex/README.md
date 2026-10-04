# Optional Codex setup

Last verified: 2026-10-04 (official documentation only). This repository has not
verified the skill bundle in a live Codex client.

Codex reads the app's `AGENTS.md` natively, so no additional instruction adapter
is required. Keep stable rules there, implementation details in `agent_docs/`,
and current progress in the repository's `MEMORY.md`.

## Use the bundled skills

Follow the [skills installation guide](../README.md). The optional CLI command
for a Codex project is:

```text
npx vibeworkflow --skills-only --tools codex
```

In the Codex CLI or IDE extension, use `/skills` to select a skill, or mention
one explicitly with `$vibe-prd`, `$vibe-techdesign`, or another installed name.
Supply the previous stage's output and Handoff Context, and request only the
stage you want to complete. Check that the client recognizes the skill first.

The bundle uses `.agents/skills/` and includes its reference files. Install the
collection together so sibling skill references remain available. Standalone
skills work without a plugin; this repository does not claim a verified native
plugin installation route.

## Legacy custom prompts

The `prompts/` files are retained for existing installations. Custom prompts
are deprecated in favor of skills; use the skill bundle for new setups.

## Official references

- [Create and use skills](https://learn.chatgpt.com/docs/build-skills)
- [Custom prompts and migration to skills](https://learn.chatgpt.com/docs/custom-prompts)
- [AGENTS.md instructions](https://developers.openai.com/codex/guides/agents-md)

The [full manual workflow](../../../README.md) remains available for fresh chats
or clients where a skill cannot be loaded.
