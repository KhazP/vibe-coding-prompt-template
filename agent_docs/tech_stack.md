# Tech Stack & Tools

## Core Stack
- **Language:** Python 3.11 (use `match` statements, `tomllib`, `asyncio.TaskGroup` where appropriate)
- **Async Runtime:** `asyncio` — all I/O is async; use `asyncio.gather` for concurrent module execution
- **Polymarket Client:** `py-clob-client` — CLOB API for order placement and midpoint polling
- **Sportsbook Data:** API-Sports ($10/mo) — REST API via `aiohttp`, JSON responses
- **AI Classification:** `anthropic` SDK (Claude) — already used in base repo for news classification
- **Database:** SQLite via `sqlite3` stdlib — trades, positions, P&L logged by base repo
- **Notifications:** Discord webhooks via `aiohttp` POST — no Discord SDK needed
- **Config:** `python-dotenv` — all secrets in `.env`, never hardcoded
- **Deployment:** Hostinger VPS + systemd service unit

## Key External APIs
| Service | Auth | Rate Limit | Notes |
|---------|------|-----------|-------|
| Polymarket Gamma API | None (public) | ~60 req/min | Market discovery + filtering |
| Polymarket CLOB API | L1/L2 key | — | Order execution via py-clob-client |
| API-Sports | `X-RapidAPI-Key` header | 100 req/day (free tier) | Sportsbook odds comparison |
| Discord Webhook | URL secret | 30 msg/min | Embed-based alerts |
| Anthropic Claude | `ANTHROPIC_API_KEY` | — | General market classification (base repo) |

## Asyncio Pattern (Follow Base Repo Style)
```python
# pipeline.py wiring pattern — add new modules to asyncio.gather
async def main():
    await asyncio.gather(
        sports_scanner.run(),       # NEW: polls Gamma API every 60s
        stop_loss_monitor.run(),    # NEW: polls midpoint every 10s
        news_stream.run(),          # existing base-repo module
    )

if __name__ == "__main__":
    asyncio.run(main())
```

Each new module must expose `async def run()` as its entry point.

## Error Handling Pattern
```python
import logging
logger = logging.getLogger(__name__)

async def fetch_markets() -> list[dict]:
    """Fetch active markets from Gamma API. Returns [] on error (graceful degradation)."""
    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(GAMMA_URL, params=params) as resp:
                resp.raise_for_status()
                return await resp.json()
    except aiohttp.ClientError as e:
        # Don't crash the bot — log and return empty so the loop continues
        logger.error("Gamma API fetch failed: %s", e)
        return []
```

## Discord Embed Pattern
```python
import aiohttp

EMBED_COLORS = {
    "trade": 0x00FF00,           # green
    "stop_loss": 0xFF0000,       # red
    "circuit_breaker": 0xFF0000, # red
    "daily_summary": 0x0000FF,   # blue
}

async def send_embed(webhook_url: str, title: str, description: str, color: int) -> None:
    payload = {
        "embeds": [{
            "title": title,
            "description": description,
            "color": color,
        }]
    }
    async with aiohttp.ClientSession() as session:
        async with session.post(webhook_url, json=payload) as resp:
            if resp.status != 204:
                logger.error("Discord webhook failed: %s", resp.status)
```

## Environment Variables (`.env`)
```
POLYMARKET_API_KEY=...
POLYMARKET_SECRET=...
POLYMARKET_PASSPHRASE=...
APISPORTS_KEY=...
ANTHROPIC_API_KEY=...
DISCORD_WEBHOOK_URL=...
DRY_RUN=true
MAX_DAILY_TRADES=50
MAX_OPEN_POSITIONS=10
MIN_BANKROLL_RESERVE=0.10
CONSECUTIVE_LOSS_LIMIT=5
EDGE_THRESHOLD=0.08
STOP_LOSS_THRESHOLD=0.15
KELLY_FRACTION=0.25
MIN_MARKET_VOLUME=10000
```

## Naming Conventions
- Files: `snake_case.py` (e.g., `sports_scanner.py`)
- Classes: `PascalCase` (e.g., `RiskManager`)
- Functions/variables: `snake_case`
- Constants: `UPPER_SNAKE` (e.g., `MIN_VOLUME_USD = 10_000`)
- Type hints: always on public function signatures
