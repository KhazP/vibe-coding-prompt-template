# Project Brief

- **Product vision:** Catch mispriced Polymarket odds before the crowd does — automated, disciplined, profitable.
- **Target Audience:** Solo operator — terminal + Discord only, no web UI

## Architecture Map
```
brodyautomates/polymarket-pipeline  (base repo — read before modifying)
├── pipeline.py          ← entry point; wire new modules here via asyncio.gather
├── news_stream.py       ← existing: streams news events
├── classifier.py        ← existing: Claude news → trade signal
├── kelly_sizer.py       ← existing: Kelly position sizing
├── executor.py          ← existing: buy orders (add sell_position() in Phase 2)
├── logger.py            ← existing: SQLite trade log
│
└── NEW MODULES (build these):
    ├── sports_scanner.py       ← Phase 1: market discovery
    ├── notifier.py             ← Phase 1: Discord alerts
    ├── edge_detector.py        ← Phase 2: sportsbook arbitrage
    ├── risk_manager.py         ← Phase 2: position limits + circuit breaker
    └── stop_loss_monitor.py    ← Phase 3: exit management
```

## Signal Paths
- **Sports path:** `sports_scanner` → `edge_detector` (vs sportsbook odds) → `risk_manager` → `executor`
- **General path:** `news_stream` → `classifier` (Claude) → `risk_manager` → `executor`
- **Both paths share:** `risk_manager`, `stop_loss_monitor`, `notifier`

## Conventions
- **Naming:** `snake_case` for files and functions, `PascalCase` for classes, `UPPER_SNAKE` for constants
- **Async:** Every new module exposes `async def run()` for `asyncio.gather` in `pipeline.py`
- **Config:** All tuneable values from `.env` via `python-dotenv`; no magic numbers in code
- **Dry-run:** Default behavior; live trading requires `--live` flag or `DRY_RUN=false` — user must confirm

## Quality Gates
Before marking any phase complete:
1. Unit tests pass (`pytest tests/`)
2. Dry-run smoke test produces expected log output
3. `ruff check .` passes (zero errors)
4. No hardcoded secrets
5. `MEMORY.md` and `AGENTS.md` updated

## Key Commands
```bash
python pipeline.py              # dry-run (always safe)
python pipeline.py --live       # LIVE — confirm with user first!
pytest tests/                   # all unit tests
pytest tests/test_<module>.py   # single module tests
ruff check .                    # lint
```

## Update Cadence
Refresh this brief when: new module added, architectural decision made, base repo updated.
