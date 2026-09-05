# Reading List: one verified slice

A dependency-free example of Quick planning: add and remove books in one browser. No accounts, database service, or AI. Source: [index.html](index.html). Decisions: [PRD](PRD.md), [Tech Design](TECH_DESIGN.md).

From this folder run `python3 -m http.server 8000`, then open http://localhost:8000. Stop the server with Ctrl+C.

[Recorded browser walkthrough](demo.webm).

## Acceptance journey

1. In a fresh browser origin, confirm the empty-list message.
2. Add “A Wizard of Earthsea”. Confirm it appears and the count is one.
3. Reload. Confirm the title remains.
4. Remove it. Confirm the empty-list message returns and stays after reload.
5. Submit spaces. Confirm no book is added.
6. Add `<img src=x onerror=alert(1)>`. Confirm it is literal text, never HTML.

For a recovery exercise, work in a copy and intentionally remove `save()` from the submit handler. Use vibe-debug to reproduce lost entries after reload, fix that call, and recheck removal. For a feature exercise use vibe-change to add a title filter.

Limits: single browser storage; no sync, backup, import, sorting, or multi-user access. Clearing browser data deletes the list. Blocked/full storage produces a warning. See [verification evidence](VERIFICATION.md) for actual performed checks; this checklist alone is not evidence.
