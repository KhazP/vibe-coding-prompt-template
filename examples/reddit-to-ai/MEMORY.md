# System Memory & Context 🧠

*Reconstructed example — this project shipped before the workflow existed; these docs show what following the workflow produces.*

<!--
AGENTS: Update this file after every major milestone, structural change, or resolved bug.
DO NOT delete historical context if it is still relevant. Compress older completed items.
-->

## 🏗️ Active Phase & Goal
**Current Task:** Preview screen — live context-size meter (characters, estimated tokens, comment count)
**Next Steps:**
1. Wire the token estimate to the trim presets so trimming updates the meter live
2. Add Send / Copy / Export buttons and hand off to the paste flow

## 📂 Architectural Decisions
*(Log specific choices made during the build here so future agents respect them)*
- 2025-05-10 — No framework and no build step: plain JS + Manifest V3, so the AI edits files and we just reload the unpacked extension. Faster loop, fewer moving parts.
- 2025-05-17 — All scraping runs in `service_worker.js`, not the popup. Popups die when they lose focus, and big threads take seconds to scrape — the service worker survives.
- 2025-05-24 — Settings live in `chrome.storage.local`; no backend, no accounts. Privacy is a feature here, not an afterthought.

## 🐛 Known Issues & Quirks
*(Log current bugs or weird workarounds here)*
- ChatGPT's composer DOM changed once already and broke auto-paste. Always keep the copy-prompt fallback overlay working before touching `aiPaster.js`.
- Threads with 1,000+ comments can exceed the AI's input limit. The size meter + trim presets are the mitigation — never remove the warning state.

## 📜 Completed Phases
- [x] Initial scaffold (Manifest V3 skeleton + load-unpacked workflow)
- [x] Storage setup (`chrome.storage` settings) and npm lint/test scripts
- [x] Smart thread scraping + quick filters (hide bots, minimum score)
- [x] Prompt presets + `{content}` custom templates
- [ ] Preview screen with context-size meter (in progress)
- [ ] Send-to-AI auto-paste + fallback overlay
