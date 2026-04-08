# System Memory & Context 🧠
<!--
AGENTS: Update this file after every major milestone, structural change, or resolved bug.
DO NOT delete historical context if still relevant. Compress older completed items.
-->

## 🏗️ Active Phase & Goal
**Current Task:** Phase 1 — Build `sports_scanner.py` and `notifier.py`
**Next Steps:**
1. Scaffold `sports_scanner.py` with Gamma API polling (60s interval, $10K+ volume filter)
2. Scaffold `notifier.py` with Discord webhook embeds (4 message types)
3. Wire both into `pipeline.py` via `asyncio.gather`
4. Dry-run smoke test

## 📂 Architectural Decisions
*(Log specific choices made during the build here so future agents respect them)*
- 2026-04-08 — Extending `brodyautomates/polymarket-pipeline` rather than building from scratch; preserves existing news streaming, Claude classifier, Kelly sizer, executor, and SQLite logger.
- 2026-04-08 — All new modules integrate into `pipeline.py` via `asyncio.gather`; no new entry points.
- 2026-04-08 — Dry-run is default; live trading requires `--live` CLI flag or `DRY_RUN=false` in `.env`.
- 2026-04-08 — Risk limits: max 50 trades/day, max 10 open positions, 10% cash reserve, 5-loss circuit breaker, 15% stop-loss.

## 🐛 Known Issues & Quirks
*(Log current bugs or weird workarounds here)*
- None yet — project not started.

## 📜 Completed Phases
- [x] PRD and Tech Design documentation
- [x] AGENTS.md workspace setup
- [ ] Phase 1: Sports Scanner + Notifier
- [ ] Phase 2: Edge Detection + Risk Management
- [ ] Phase 3: Stop-Loss + Daily Report
- [ ] Phase 4: VPS Deploy + Paper Trading
- [ ] Phase 5: Go Live
