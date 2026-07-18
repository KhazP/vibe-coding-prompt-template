# AGENTS.md — Master Plan for [REPLACE: app name]

<!--
Single source of truth for every AI coding assistant on this project.
Keep it lean — details live in the Context Files at the bottom. Update Current State and Roadmap as you build.
-->

## Project Overview & Stack
**App:** [REPLACE: app name]
**Overview:** [REPLACE: one-paragraph description — what it does, who it's for, core value]
**Stack:** [REPLACE: primary tech stack] *(e.g. Next.js, Node, PostgreSQL)*
**Critical Constraints:** [REPLACE: non-negotiables] *(e.g. mobile-first, strict TypeScript, free-tier only)*

## Setup & Commands
Execute these commands for standard development workflows. Do not invent new package manager commands.
- **Setup:** `[REPLACE: install command]`
- **Development:** `[REPLACE: dev server command]`
- **Testing:** `[REPLACE: test command]`
- **Linting & Formatting:** `[REPLACE: lint command]`
- **Build:** `[REPLACE: build command]`

## Protected Areas 🛡️
Do NOT modify these without explicit human approval:
- **Secrets:** NEVER commit `.env` files or hardcode API keys, tokens, or passwords. Use environment variables and ask the human to set them up.
- **Infrastructure:** `infrastructure/`, Dockerfiles, and deployment workflows (`.github/workflows/`).
- **Database Migrations:** Existing migration files.
- **Third-Party Integrations:** Payment gateway configuration and auth setup.

## Coding Conventions
- **Formatting:** [REPLACE: formatter/linter rules] *(e.g. ESLint + Prettier — no warnings in new code)*
- **Architecture:** [CHOOSE: feature-based folders | layered | hexagonal | MVC | framework default]
- **Testing:** All new utilities get unit tests. Core user flows get integration tests.
- **Type Safety:** Use strict typing. Avoid `any`; define precise interfaces or use `unknown`.

## How I Should Think 🧠
1. **Understand Intent First:** Identify what the user actually needs before answering.
2. **Ask If Unsure:** If critical information is missing, ask ONE specific question before proceeding.
3. **Plan Before Coding:** Propose a brief step-by-step plan and wait for approval before changing more than one file. (If your tool has a plan/reflect mode, use it.)
4. **Execute Incrementally:** Build one feature at a time. Prefer refactoring over rewriting large blocks.
5. **Verify After Changes:** Run tests/linters or manual checks after each logical change; fix failures before moving on (see `REVIEW-CHECKLIST.md`).
6. **Explain Trade-offs:** When recommending something, briefly mention alternatives.
7. **Remember in Files:** Write state and decisions to `MEMORY.md` instead of relying on chat history.
8. **Use Subagents If Available:** If your tool supports subagents or parallel agents, assign roles and require a plan before edits.

## What NOT To Do ⛔
- Do NOT delete files without explicit confirmation.
- Do NOT modify database schemas without a backup plan.
- Do NOT add features not in the current phase.
- Do NOT skip tests for "simple" changes.
- Do NOT bypass failing tests or pre-commit hooks.
- Do NOT use deprecated libraries or patterns.

## Engineering Constraints 🏗️
- **Type Safety:** The `any` type is forbidden — use `unknown` with type guards. All function parameters and returns are typed. Validate external input with a runtime schema (e.g. Zod).
- **Architectural Sovereignty:** Route/UI layers handle request/response ONLY. Business logic lives in services/core modules. No database calls from route handlers.
- **Library Governance:** Check `package.json` before suggesting new dependencies. Prefer native APIs over libraries. Use the data-fetching approach specified in `agent_docs/tech_stack.md`.
- **Clear Communication:** State issues briefly and fix them — no apology loops or filler. If context is missing, ask ONE specific clarifying question.
- **Workflow Discipline:** Pre-commit hooks must pass before commits (or ask before bypassing). If verification fails, fix it before continuing.

## Current State 📍
**Last Updated:** [REPLACE: date]
**Working On:** [REPLACE: current task, or "Project setup — nothing built yet"]
**Recently Completed:** [REPLACE: last finished task, or "Nothing yet"]
**Blocked By:** [REPLACE: blocker, or "None"]

## Roadmap 🗺️

### Phase 1: Foundation
- [ ] Initialize project
- [ ] Set up database
- [ ] Configure auth

### Phase 2: Core Features
- [ ] [REPLACE: must-have feature 1 from PRD]
- [ ] [REPLACE: must-have feature 2 from PRD]
- [ ] [REPLACE: must-have feature 3 from PRD]

### Phase 3: Polish
- [ ] Error handling
- [ ] Mobile responsiveness
- [ ] Performance pass

### Phase 4: Launch
- [ ] Security pass (see `REVIEW-CHECKLIST.md`)
- [ ] Deploy to production
- [ ] Launch checklist

## Context Files 📚
Load these only when needed — progressive disclosure keeps context lean:
- `agent_docs/tech_stack.md` — Stack details, libraries, setup commands
- `agent_docs/code_patterns.md` — Architecture and code style rules
- `agent_docs/project_brief.md` — Product vision and conventions
- `agent_docs/product_requirements.md` — Feature list and user stories
- `agent_docs/testing.md` — Test strategy and commands
- `MEMORY.md` — Session memory: decisions, known issues, active goal
- `REVIEW-CHECKLIST.md` — Definition of done before marking work complete
- `specs/` — Feature specs and handoff notes created during the build
