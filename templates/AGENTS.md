# AGENTS.md — [App Name]

> **How to fill this in:** write only what an agent could NOT work out by
> reading the repo. Skip the directory tree (`ls` shows it), the dependency list
> (the manifest shows it), and generic advice like "write clean code" or "handle
> errors" — a capable model already does those, and every line here is loaded
> into context on every single session. If you find yourself describing the
> code, delete it. If you find yourself describing something that once cost
> someone an afternoon, keep it.

## Project

- **What this is:** [one sentence]
- **Who it is for:** [target users]

## Commands

Only the ones that are **not** guessable from the manifest — non-standard
scripts, required flags, environment setup. Delete this section if `npm run dev`
is genuinely all there is.

- [command] — [why it isn't obvious]

## Read first — when relevant

- Product scope or acceptance criteria: `docs/PRD-*.md`.
- Architecture or integration choices: `docs/TechDesign-*.md`.
- Non-obvious product constraints: `agent_docs/project_brief.md`.
- Stack-specific setup: `agent_docs/tech_stack.md`.
- Choosing or troubleshooting checks: `agent_docs/testing.md`.

Read only the documents needed for the task. During initial setup, fill relevant
placeholders from agreed decisions; do not invent missing facts or block an
unrelated small fix on completing every document. Current progress belongs in
`MEMORY.md`.

## Gotchas

**The highest-value section in this file.** Things that look safe and aren't;
conventions that differ from the framework default, so the surrounding code
would teach the wrong pattern; failures that took real time to diagnose.

- [e.g. "All types live in one monolithic `types.ts` — do not co-locate them."]
- [e.g. "The pre-commit hook reverts the working tree on failure."]

## Protected areas

Keep secrets, credentials, private logs, and production data out of commits and
unapproved transmissions. Preserve unrelated working-tree changes.

Within the requested scope, continue through local implementation, affected
checks, and fixes without repeated approval. Changing auth, billing,
infrastructure, or migration source is distinct from applying it to a live
system. Before an external send, deployment, charge, production migration,
destructive data operation, or access change, confirm that the action and target
are covered by the user's authorization. Ask only for missing authorization or a
consequential decision; a multi-file edit alone is not an approval boundary.

Record any project-specific exceptions here, including which test fixtures are
disposable and which commands can reach production. Do not assume tests are
isolated until their configuration establishes it.

## AI features

Delete this section unless the product itself uses AI.

- **Model can see:** [public / user-owned / private data]
- **Never send:** [secrets, tokens, private logs, production exports]
- **AI can do:** [read only / draft / write / destructive / external network]
- **Needs approval:** [send, delete, deploy, charge, email, production write]
- **How to verify behavior:** [eval command or prompts]
- **Fallback:** [what users see when AI fails]

## Done means

Complete the requested behavior, run checks appropriate to the changed area,
and fix failures caused by the change. For runtime work, exercise the relevant
user journey when the environment permits it. Reuse still-valid results; repeat
checks when code changes or new evidence justifies it.

Report the outcome, actual checks and limitations, and rollback notes when
relevant. If completion is blocked, identify the concrete blocker and remaining
work rather than presenting an unchecked implementation as finished.

---

**When this file gets long, that is the signal to split it.** Move task-specific
procedures (deploy steps, release checklists, API references) into
`.claude/skills/<name>/SKILL.md`, where only the one-line description stays in
context and the body loads when it is actually needed. Move
directory-specific conventions into `<subdir>/AGENTS.md` (or the selected
client’s supported equivalent), scoped to work in that directory. Keep universal constraints and safety prohibitions
here — never move a "never do X" rule somewhere it might not be loaded.
