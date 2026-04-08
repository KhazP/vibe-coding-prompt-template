# AGENTS.md — Master Plan for PolyBot

## Project Overview
**App:** PolyBot
**Goal:** Automated Polymarket trading bot that detects mispriced odds and executes trades with disciplined risk management — profit while you sleep.
**Stack:** Python 3.11, asyncio, py-clob-client, API-Sports, Anthropic Claude API, SQLite, Discord webhooks, Hostinger VPS + systemd
**Base:** Extends `brodyautomates/polymarket-pipeline` (news streaming, Claude classification, Kelly sizing, trade execution, SQLite logging, CLI already implemented)
**Current Phase:** Phase 1 — Sports Scanner + Notifier (Days 1–3)

## How I Should Think
1. **Understand Intent First**: Identify what the user actually needs before writing code
2. **Ask If Unsure**: If critical info is missing (API keys, config values, integration points), ask before proceeding
3. **Plan Before Coding**: Propose a brief step-by-step plan, get approval, then implement
4. **Verify After Changes**: Run tests/checks after each module; fix failures before moving on
5. **Explain Trade-offs**: When recommending an approach, mention alternatives and why you chose this one

## Plan → Execute → Verify
1. **Plan:** Outline approach, identify which existing base-repo functions are reused, ask for approval
2. **Execute:** One module at a time; wire into `pipeline.py` via `asyncio.gather`
3. **Verify:** Run unit tests + dry-run smoke test; fix before moving on

## Context Files
Load only when needed:
- `agent_docs/tech_stack.md` — Python stack, API setup, asyncio patterns
- `agent_docs/project_brief.md` — Coding conventions and key commands
- `agent_docs/product_requirements.md` — Full feature list, risk rules, success metrics
- `agent_docs/testing.md` — Test strategy, dry-run protocol, verification loop

## What NOT To Do
- Do NOT delete files without explicit confirmation
- Do NOT modify base-repo `pipeline.py` without reviewing existing wiring first
- Do NOT make live trades unless `--live` flag or `DRY_RUN=false` in `.env` — and user confirms
- Do NOT add features outside the current phase
- Do NOT skip unit tests for "simple" changes
- Do NOT use deprecated libraries or patterns
- Do NOT hardcode API keys — use `.env` + `python-dotenv`

## Current State
**Last Updated:** 2026-04-08
**Working On:** Nothing yet — workspace setup complete, ready to start Phase 1
**Recently Completed:** PRD + Tech Design docs, AGENTS.md workspace setup
**Blocked By:** None

## Roadmap

### Phase 1: Sports Scanner + Notifier (Days 1–3)
- [ ] `sports_scanner.py` — Gamma API, every 60s, $10K+ volume filter, sports + general markets
- [ ] `notifier.py` — Discord webhook: trade=green, stop-loss=red, circuit-breaker=red, daily summary=blue
- [ ] Wire both into `pipeline.py` via `asyncio.gather`
- [ ] Dry-run smoke test: confirm markets fetched, Discord message delivered

### Phase 2: Edge Detection + Risk Management (Days 4–6)
- [ ] `edge_detector.py` — Compare Polymarket prices vs API-Sports sportsbook odds; trigger at ≥8% gap; quarter-Kelly sizing
- [ ] `risk_manager.py` — daily trade cap (50), max open positions (10), 10% cash reserve, 5-loss circuit breaker
- [ ] `executor.sell_position()` — add sell side to existing executor
- [ ] Integration test: simulated edge detected → risk check → dry-run order logged

### Phase 3: Stop-Loss + Daily Report (Days 7–9)
- [ ] `stop_loss_monitor.py` — poll midpoint every 10s; FOK sell if price drops 15% below entry
- [ ] `daily_report` — end-of-day P&L summary via Discord (blue embed)
- [ ] End-to-end paper trade simulation: full flow sports signal → open → stop-loss trigger → report

### Phase 4: VPS Deploy + Paper Trading (Days 10–12)
- [ ] Hostinger VPS setup + systemd service unit
- [ ] `.env` config for live keys (paper money)
- [ ] 50+ paper trades logged in SQLite
- [ ] Verify positive P&L trend before going live

### Phase 5: Go Live (Day 13+)
- [ ] Switch `DRY_RUN=false` / `--live` flag
- [ ] Monitor first 10 live trades manually
- [ ] Adjust Kelly fraction if drawdown exceeds tolerance

## Protected Areas
Do NOT modify without explicit approval:
- Base-repo files (especially `executor.py`, `pipeline.py`) — read first, propose changes, get approval
- `.env` API keys and secrets
- SQLite schema for existing tables
