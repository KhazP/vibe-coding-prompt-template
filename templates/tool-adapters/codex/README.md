# Codex — nothing to install

Codex reads `AGENTS.md` natively. The instantiated `AGENTS.md` at the project
root is already everything Codex needs — no adapter file required.

Details (per OpenAI's docs): Codex builds its instruction chain from
`~/.codex/AGENTS.md` (global, personal) plus every `AGENTS.md` from the project
root down to the working directory.

Optional power-user tip: save your own reusable prompts as Markdown files in
`~/.codex/prompts/` (e.g. `~/.codex/prompts/review.md`) and run them in Codex
with `/prompts:review`.
