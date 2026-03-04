# AGENTS.md — Master Plan for [App Name]

## Project Overview & Stack
**App:** [App Name]
**Overview:** [One-paragraph description of the project, its core value proposition, and primary users]
**Stack:** [Primary Tech Stack, e.g., Next.js, React, Node, PostgreSQL]
**Critical Constraints:** [e.g., Mobile-first design required, Multi-tenant architecture, Strict TypeScript adherence]

## Setup & Commands
Execute these commands for standard development workflows. Do not invent new package manager commands.
- **Setup:** `[npm install / pnpm install]`
- **Development:** `[npm run dev]`
- **Testing:** `[npm test]`
- **Linting & Formatting:** `[npm run lint]`
- **Build:** `[npm run build]`

## Protected Areas
Do NOT modify these areas without explicit human approval:
- **Infrastructure:** `infrastructure/`, Dockerfiles, and deployment workflows (`.github/workflows/`).
- **Database Migrations:** Existing migration files.
- **Third-Party Integrations:** Payment gateway configurations and Auth setups.

## Coding Conventions
- **Formatting:** Enforce required ESLint/Prettier rules strictly. No warnings allowed in new code.
- **Architecture rules:** Use feature-based folder organization. Maintain hexagonal boundaries where domain logic does not depend on external frameworks.
- **Testing Expectations:** All new utilities must have unit tests. Core user flows require integration tests.
- **Type Safety:** Use strict TypeScript. Avoid `any` types; define precise interfaces or use `unknown`.

## Agent Behaviors
These rules apply across all AI coding assistants (Cursor, Copilot, Claude, Gemini):
1. **Plan Before Execution:** ALWAYS propose a brief step-by-step plan before changing more than one file.
2. **Refactor Over Rewrite:** Prefer refactoring existing functions incrementally rather than completely rewriting large blocks of code.
3. **Context Compaction:** Write states to `MEMORY.md` or a `spec.md` instead of filling context history during long sessions.
4. **Iterative Verification:** Run tests or linters after each logical change. Fix errors before proceeding (See `REVIEW-CHECKLIST.md`).
5. **Team Coordination:** If working in Agent Teams, require the Team Lead to approve teammate PRs or plans.
