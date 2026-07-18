# AGENTS.md — Master Plan for Reddit to AI

*Reconstructed example — this project shipped before the workflow existed; these docs show what following the workflow produces.*

<!--
Single source of truth for every AI coding assistant on this project.
Keep it lean — details live in the Context Files at the bottom. Update Current State and Roadmap as you build.
-->

## Project Overview & Stack
**App:** Reddit to AI
**Overview:** A Chrome extension that scrapes any Reddit thread (post, nested comments, metadata), filters the noise, builds a clean prompt from a preset, previews it with a size meter, and pastes it into Gemini, ChatGPT, Claude, or AI Studio. No backend — everything stays in the browser.
**Stack:** Vanilla JavaScript + HTML/CSS, Chrome Extension (Manifest V3), chrome.storage; ESLint + Node `.mjs` tests; no framework, no build step
**Critical Constraints:** Privacy-first (no remote server, no accounts, no tracking); $0/month running costs; must degrade gracefully when Reddit or AI sites change their DOM (preview + copy fallback are non-negotiable)

## Setup & Commands
Execute these commands for standard development workflows. Do not invent new package manager commands.
- **Setup:** `npm install`
- **Development:** open `chrome://extensions`, enable Developer mode, **Load unpacked** → select `src/`; click the extension's reload icon after changes
- **Testing:** `npm test`
- **Linting & Formatting:** `npm run lint`
- **Build:** `npm run package:extension`

## Protected Areas 🛡️
Do NOT modify these without explicit human approval:
- **Secrets:** NEVER commit `.env` files or hardcode API keys, tokens, or passwords. Use environment variables and ask the human to set them up.
- **Infrastructure:** `infrastructure/`, Dockerfiles, and deployment workflows (`.github/workflows/`).
- **Database Migrations:** Existing migration files.
- **Third-Party Integrations:** Payment gateway configuration and auth setup.

## Coding Conventions
- **Formatting:** ESLint — no warnings in new code; run `npm run lint` before committing.
- **Architecture:** Framework default — Manifest V3 roles: `service_worker.js` orchestrates scraping and tab handoff; popup/preview/options are plain-script UI pages; shared logic lives in single-purpose modules (`redditScraper.js`, `promptBuilder.js`, `aiPaster.js`).
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
- Do NOT send thread data anywhere except the AI tab the user explicitly chose.

## Engineering Constraints 🏗️
- **Type Safety:** The `any` type is forbidden — use `unknown` with type guards. All function parameters and returns are typed. Validate external input with a runtime schema (e.g. Zod).
- **Architectural Sovereignty:** Route/UI layers handle request/response ONLY. Business logic lives in services/core modules. No database calls from route handlers.
- **Library Governance:** Check `package.json` before suggesting new dependencies. Prefer native APIs over libraries. Use the data-fetching approach specified in `agent_docs/tech_stack.md`.
- **Clear Communication:** State issues briefly and fix them — no apology loops or filler. If context is missing, ask ONE specific clarifying question.
- **Workflow Discipline:** Pre-commit hooks must pass before commits (or ask before bypassing). If verification fails, fix it before continuing.

## Current State 📍
**Last Updated:** May 31, 2025
**Working On:** Preview screen — editable prompt + live context-size meter (characters, estimated tokens, comment count)
**Recently Completed:** Smart thread scraping with quick filters, and the prompt builder with 5 presets + `{content}` custom templates
**Blocked By:** None

## Roadmap 🗺️

### Phase 1: Foundation
- [x] Initialize project (Manifest V3 skeleton + load-unpacked workflow)
- [x] Set up storage (`chrome.storage` for settings — no database, no accounts)
- [x] Configure lint + test scripts (`npm run lint`, `npm test`)

### Phase 2: Core Features
- [x] Smart thread scraping + quick filters (hide bots, minimum score)
- [x] Prompt presets (Summarization, Debate Analysis, Sentiment, ELI5, Key Takeaways) + `{content}` custom templates
- [ ] Preview screen with context budget meter ← in progress
- [ ] Send to AI platforms (auto-paste) + copy-prompt fallback overlay

### Phase 3: Polish
- [ ] Error handling (failed scrapes, blocked paste, empty threads)
- [ ] Performance pass on 1,000+ comment threads
- [ ] Accessibility pass on popup, preview, and options pages

### Phase 4: Launch
- [ ] Security pass (see `REVIEW-CHECKLIST.md`)
- [ ] Deploy to production (Chrome Web Store listing: screenshots, description, privacy notes)
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
