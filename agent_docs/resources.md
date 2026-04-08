# Essential Resources

## Core Documentation
- **py-clob-client:** https://github.com/Polymarket/py-clob-client — Polymarket CLOB API Python client; study order placement and midpoint polling patterns
- **Gamma API:** `https://gamma-api.polymarket.com/markets` — public market discovery; no auth required
- **API-Sports:** https://www.api-football.com/documentation-v3 — sportsbook odds; `X-RapidAPI-Key` header auth
- **asyncio:** https://docs.python.org/3/library/asyncio.html — Python async runtime reference
- **pytest-asyncio:** https://pytest-asyncio.readthedocs.io/ — async test support; use `@pytest.mark.asyncio`
- **aioresponses:** https://github.com/pnuckowski/aioresponses — mock aiohttp HTTP calls in tests
- **python-dotenv:** https://pypi.org/project/python-dotenv/ — load `.env` config

## Base Repo Reference
Study these before writing new modules:
- `executor.py` — existing buy order patterns; match this style when adding `sell_position()`
- `pipeline.py` — `asyncio.gather` wiring; add new modules here
- `kelly_sizer.py` — Kelly math implementation; call this for sizing, don't reimplement it

## Curated Repositories
| Repository | Purpose |
|------------|---------|
| **PatrickJS/awesome-cursorrules** | Anti-vibe rule templates |
| **matebenyovszky/healing-agent** | Self-healing Python patterns |
| **modelcontextprotocol/servers** | MCP server implementations |

## Discord Embed Quick Reference
```python
# Embed color codes
EMBED_COLORS = {
    "trade": 0x00FF00,           # green  — trade executed
    "stop_loss": 0xFF0000,       # red    — stop-loss triggered
    "circuit_breaker": 0xFF0000, # red    — circuit breaker halted
    "daily_summary": 0x0000FF,   # blue   — end-of-day P&L report
}

# Minimal Discord webhook payload
{
    "embeds": [{
        "title": "Trade Executed",
        "description": "Bought YES @ 0.42 on [market]",
        "color": 0x00FF00,
    }]
}
```

## Systemd Service Unit (Phase 4 Reference)
```ini
[Unit]
Description=PolyBot Trading Bot
After=network.target

[Service]
WorkingDirectory=/home/user/polybot
ExecStart=/home/user/polybot/.venv/bin/python pipeline.py
Restart=on-failure
RestartSec=10
EnvironmentFile=/home/user/polybot/.env

[Install]
WantedBy=multi-user.target
```
