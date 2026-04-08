# Testing Strategy

## Frameworks
- **Unit Tests:** `pytest` with `pytest-asyncio` for async coroutines
- **HTTP Mocking:** `aioresponses` for mocking `aiohttp` calls (Gamma API, API-Sports, Discord)
- **Linting:** `ruff check .`
- **Type Checking:** `mypy` (optional, recommended for new modules)

## Rules
- Write unit tests for each new module BEFORE marking its phase complete
- Never set `DRY_RUN=false` in test runs — mock the executor layer
- If a test fails, fix it before proceeding to the next module
- Never mock away business logic — only mock external I/O (HTTP calls, Discord webhooks)
- A phase is only "done" when tests pass AND dry-run smoke test succeeds

## Test File Structure
```
tests/
├── test_sports_scanner.py
├── test_edge_detector.py
├── test_risk_manager.py
├── test_stop_loss_monitor.py
└── test_notifier.py
```

## Key Test Cases Per Module

### `sports_scanner.py`
- Returns only markets with volume ≥ $10K (filters correctly)
- Returns `[]` on Gamma API error — does NOT raise/crash
- Polling loop runs at 60s intervals (mock `asyncio.sleep`, verify call count)

### `edge_detector.py`
- Emits trade signal when gap ≥ 8% (assert signal triggered)
- No signal when gap < 8% (assert no trade call)
- Returns `None` gracefully on API-Sports error

### `risk_manager.py`
- Blocks trade when daily cap (50) reached
- Blocks trade when max positions (10) open
- Blocks trade when cash reserve < 10%
- Triggers circuit breaker after exactly 5 consecutive losses
- Allows trade again after circuit breaker resets at midnight

### `stop_loss_monitor.py`
- Triggers FOK sell when midpoint drops exactly 15% below entry
- Does NOT trigger at 14.9% drop
- Calls `notifier.stop_loss()` on trigger
- Polls every 10 seconds (mock sleep, verify interval)

### `notifier.py`
- Sends correct embed color per message type (green/red/blue)
- Logs error and does NOT crash when Discord webhook returns non-204

## Commands
```bash
pytest tests/                          # all tests
pytest tests/test_risk_manager.py      # single module
pytest tests/ -v                       # verbose output
pytest tests/ --tb=short               # short traceback on failure
ruff check .                           # lint
```

## Pre-Commit Verification Loop
Run these in order before every commit:
1. `ruff check .` — zero errors
2. `pytest tests/` — all pass
3. Dry-run smoke test — expected log output confirmed (markets fetched, signals logged, no live orders)
4. Check `REVIEW-CHECKLIST.md` — all boxes ticked
5. Update `AGENTS.md` phase checklist and `MEMORY.md`
