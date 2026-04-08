# Product Requirements — PolyBot MVP

## Product Overview
**Name:** PolyBot
**One-liner:** Automated Polymarket trading bot that detects mispriced odds via sports data and news classification, then trades with disciplined Kelly-based risk management.
**Problem:** Can't watch Polymarket 24/7 to catch mispriced odds before they correct.
**Interface:** Terminal + Discord only (no web UI)

## Primary User Story
"As a solo Polymarket trader, I want a bot that scans for mispriced markets and executes trades automatically so that I can profit from prediction market inefficiencies without constant monitoring."

## Must-Have Features (MVP)

### 1. Sports Scanner (`sports_scanner.py`)
- Poll Gamma API every 60 seconds
- Filter: sports AND general markets, $10K+ 24h volume
- Output: list of active market candidates passed to edge detector

### 2. Notifier (`notifier.py`)
- Discord webhook embeds with color coding:
  - Trade executed → green embed
  - Stop-loss triggered → red embed
  - Circuit breaker activated → red embed
  - Daily P&L summary → blue embed (end of day)

### 3. Edge Detector (`edge_detector.py`)
- Fetch sportsbook odds from API-Sports
- Compare vs Polymarket implied probability
- Trigger signal when gap ≥ 8%
- Size position at quarter-Kelly

### 4. Risk Manager (`risk_manager.py`)
- Enforce before EVERY order:
  - Max 50 trades/day
  - Max 10 open positions
  - Min 10% cash reserve
- Circuit breaker: halt trading after 5 consecutive losses (reset at midnight)

### 5. Stop-Loss Monitor (`stop_loss_monitor.py`)
- Poll position midpoint every 10 seconds as background task
- Submit FOK (Fill-or-Kill) sell order if price drops ≥15% below entry
- Trigger red Discord embed on activation

### 6. Executor (extension of existing `executor.py`)
- Add `sell_position()` to complement existing buy logic

## Nice to Have (Post-MVP)
- Web dashboard for trade history visualization
- Multiple sportsbook sources (currently API-Sports only)
- Telegram as alternative to Discord
- Backtesting framework against historical Polymarket data

## NOT in MVP
- Web UI of any kind
- Multi-user support
- Automated tax reporting
- Market making / liquidity provision
- Custom Kelly fraction per market

## Success Metrics
| Metric | Target | Gate |
|--------|--------|------|
| Paper-trading P&L | Positive over 50+ trades | Required before going live |
| Circuit breaker | Fires correctly after 5 consecutive losses | Required |
| Stop-loss execution | Triggers within 10s of threshold breach | Required |
| Daily trade cap | Never exceeds 50 trades/day | Required |

## Risk Limits (Hard Constraints — Not Configurable Without Approval)
| Parameter | Value |
|-----------|-------|
| Edge trigger threshold | ≥8% price gap vs sportsbook |
| Position sizing | Quarter-Kelly (0.25 × full Kelly) |
| Max daily trades | 50 |
| Max open positions | 10 |
| Min cash reserve | 10% of bankroll |
| Consecutive loss limit | 5 (then halt until reset) |
| Stop-loss threshold | 15% below entry midpoint |
| Stop-loss poll interval | Every 10 seconds |
| Market volume minimum | $10,000 24h volume |
| Scanner poll interval | Every 60 seconds |

## Timeline (Started 2026-04-08)
| Phase | Days | Deliverable |
|-------|------|-------------|
| 1 | 1–3 | `sports_scanner.py` + `notifier.py` |
| 2 | 4–6 | `edge_detector.py` + `risk_manager.py` + `executor.sell_position()` |
| 3 | 7–9 | `stop_loss_monitor.py` + daily report |
| 4 | 10–12 | VPS deploy + paper trading (50+ trades) |
| 5 | 13+ | Go live (positive paper P&L required) |
