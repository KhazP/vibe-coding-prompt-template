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
- **Current phase:** [Discovery / Foundation / Core MVP / Polish / Launch]

## Commands

Only the ones that are **not** guessable from the manifest — non-standard
scripts, required flags, environment setup. Delete this section if `npm run dev`
is genuinely all there is.

- [command] — [why it isn't obvious]

## Read first

1. `docs/PRD-*.md` (what we're building — the source of truth)
2. `docs/TechDesign-*.md` (how we're building it)
3. `agent_docs/project_brief.md`
4. `agent_docs/tech_stack.md`
5. `agent_docs/testing.md`

If this file or `agent_docs/` still has `[bracketed]` placeholders, fill them from
the two docs above before planning. Load anything else only when it becomes relevant.

## Gotchas

**The highest-value section in this file.** Things that look safe and aren't;
conventions that differ from the framework default, so the surrounding code
would teach the wrong pattern; failures that took real time to diagnose.

- [e.g. "All types live in one monolithic `types.ts` — do not co-locate them."]
- [e.g. "The pre-commit hook reverts the working tree on failure."]

## Protected areas — ask before changing

- `.env*`, secrets, credentials, private logs
- `.github/workflows/`, deployment, infrastructure
- existing database migrations
- auth, payments, billing, production email/send flows
- AI provider credentials, MCP servers, tool permissions

**Never print, commit, or transmit secrets, tokens, private logs, or production
data.** Never delete files, rewrite large areas, or change
infrastructure/auth/billing/migrations without approval.

## AI features

Delete this section unless the product itself uses AI.

- **Model can see:** [public / user-owned / private data]
- **Never send:** [secrets, tokens, private logs, production exports]
- **AI can do:** [read only / draft / write / destructive / external network]
- **Needs approval:** [send, delete, deploy, charge, email, production write]
- **How to verify behavior:** [eval command or prompts]
- **Fallback:** [what users see when AI fails]

## Done means

Report: files changed · commands run · test/build/device results · AI eval
evidence if applicable · remaining risks · rollback notes if relevant.

---

**When this file gets long, that is the signal to split it.** Move task-specific
procedures (deploy steps, release checklists, API references) into
`.claude/skills/<name>/SKILL.md`, where only the one-line description stays in
context and the body loads when it is actually needed. Move
directory-specific conventions into `<subdir>/CLAUDE.md`, which loads only when
work touches that directory. Keep universal constraints and safety prohibitions
here — never move a "never do X" rule somewhere it might not be loaded.
