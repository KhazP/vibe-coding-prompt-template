# CLAUDE.md — Claude Code Configuration for PolyBot

## Project Context
**App:** PolyBot — Automated Polymarket trading bot
**Stack:** Python 3.11, asyncio, py-clob-client, API-Sports, Anthropic Claude API, SQLite, Discord webhooks
**Base Repo:** `brodyautomates/polymarket-pipeline` (extend it, don't rewrite it)
**Stage:** MVP Development — 5 new modules to build
**User Level:** Developer (Python-literate, math background — explain the "why", not just the "what")

## Directives
1. **Master Plan:** Always read `AGENTS.md` first. It contains the current phase and task list.
2. **Documentation:** Refer to `agent_docs/` for tech stack details, code patterns, and testing strategy.
3. **Plan-First:** Propose a brief plan and wait for approval before writing any code.
4. **Incremental:** Build one module at a time. Dry-run test before moving to the next.
5. **No Live Trades in Tests:** Never set `DRY_RUN=false` during development unless explicitly asked.
6. **Explain Code:** User wants to understand the code — add comments explaining the "why", not just the "what".
7. **Concise:** Be brief. Ask ONE clarifying question at a time if something is unclear.

## Commands
```bash
python pipeline.py              # run bot in dry-run mode (safe)
python pipeline.py --live       # LIVE trading — confirm with user first!
pytest tests/                   # run all unit tests
pytest tests/test_<module>.py   # run single module tests
ruff check .                    # lint
python -m <module_name>         # smoke-test a module in isolation
```

## Key Integration Points
- All async modules expose `async def run()` and wire into `pipeline.py` via `asyncio.gather`
- `risk_manager` must be called before every order submission
- `stop_loss_monitor` runs as a persistent background task
- `notifier` is called by scanner, edge detector, risk manager, and daily report — import it, don't reinvent it
