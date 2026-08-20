# AGENTS.md — Master Plan for [App Name]

## Project Overview & Stack
**App:** [App Name]
**Overview:** [One-paragraph description of the project, its core value proposition, and primary users]
**Stack:** [Primary Tech Stack from Tech Design]
**Surface:** [Web app / mobile app / desktop app / AI-assisted app / hybrid]
**Critical Constraints:** [Mobile-first design, compliance, strict types, budget, data sensitivity, etc.]

## Setup & Commands
Execute these commands for standard development workflows. Do not invent new package manager commands.
- **Setup:** `[from Tech Design]`
- **Development:** `[from Tech Design]`
- **Testing:** `[from Tech Design]`
- **Linting & Formatting:** `[from Tech Design]`
- **Typecheck:** `[from Tech Design]`
- **Build:** `[from Tech Design]`
- **Browser / Device Checks:** `[from Tech Design]`
- **AI Evals:** `[if applicable]`

## Protected Areas
Do NOT modify these areas without explicit human approval:
- **Infrastructure:** `infrastructure/`, Dockerfiles, and deployment workflows (`.github/workflows/`).
- **Database Migrations:** Existing migration files.
- **Third-Party Integrations:** Payment gateway configurations and Auth setups.
- **AI Action Permissions:** Destructive actions, prompt/eval fixtures, and provider credentials.
- **Secrets:** `.env*`, API keys, OAuth credentials, tokens, private logs, and production data exports.

## Coding Conventions
- **Formatting:** Enforce required ESLint/Prettier rules strictly. No warnings allowed in new code.
- **Architecture rules:** Follow the architecture chosen in `agent_docs/tech_stack.md`; do not impose a new pattern without approval.
- **Testing Expectations:** New behavior needs the test level defined in `agent_docs/testing.md`. Core user flows require integration or browser checks.
- **Type Safety:** Use the project's strictness level. For TypeScript projects, avoid `any`; use precise interfaces or `unknown` with guards.
- **AI Safety:** For AI features, keep action boundaries tight, classify read/write/destructive operations, and add eval prompts before declaring complete.

## Agent Behaviors
These rules apply across all AI coding assistants (Cursor, Copilot, Claude, Gemini):
1. **Plan Before Execution:** ALWAYS propose a brief step-by-step plan before changing more than one file.
2. **Refactor Over Rewrite:** Prefer refactoring existing functions incrementally rather than completely rewriting large blocks of code.
3. **Context Compaction:** Write states to `MEMORY.md` or a `spec.md` instead of filling context history during long sessions.
4. **Iterative Verification:** Run tests or linters after each logical change. Fix errors before proceeding (See `REVIEW-CHECKLIST.md`).
5. **Delegation:** Use focused subagents for research/review/test tasks. Keep file ownership explicit and avoid overlapping edits.
6. **No Secret Exposure:** Do not print or transmit credentials, tokens, private user data, or logs unless the user explicitly authorizes that exact action.
