# Artifact Review Checklist 🔍

> **AGENTS:** Do not mark a feature or task as "Complete" until you verify these checks. Provide terminal output or log snippets as proof.
> **HUMANS:** Use this checklist before committing Agent-generated code.

## Code Quality & Safety
- [ ] No hardcoded API keys or secrets (all in `.env` via `python-dotenv`)
- [ ] Type hints on all new public functions (Python 3.11 style)
- [ ] `DRY_RUN` is `true` in `.env` during development — not accidentally set to `false`
- [ ] No modification of base-repo files without explicit approval
- [ ] No new dependencies added without updating `requirements.txt`
- [ ] No `any`-equivalent patterns (e.g., bare `except:` without logging)

## Execution & Testing
- [ ] Module runs without import errors (`python -m <module> --help` or equivalent)
- [ ] Linter passes (`ruff check .` — zero errors)
- [ ] Unit tests pass (`pytest tests/`)
- [ ] Dry-run smoke test produces expected log output
- [ ] No open Polymarket positions accidentally left from testing

## Artifact Handoff
- [ ] `MEMORY.md` updated with any new architectural decisions made during this task
- [ ] Phase checklist in `AGENTS.md` updated (completed items checked off)
- [ ] `.env.example` updated if new environment variables were added
