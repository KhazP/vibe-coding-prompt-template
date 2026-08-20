# Technical Design Document: Reddit to AI MVP

*Reconstructed example — this project shipped before the workflow existed; these docs show what following the workflow produces.*

## How We'll Build It

### Recommended Approach: Vanilla-JS Chrome Extension (Manifest V3)

**Primary Recommendation: Plain JavaScript + HTML + CSS — no framework, no build step**
- **Why it's perfect for you:** one language everywhere; AI assistants write excellent vanilla JS; you reload the unpacked extension and see changes instantly — nothing to compile; zero hosting costs because there is no server.
- **What it costs:** $0 (free editor, free linting, no hosting)
- **Time to learn:** days to be productive with an AI assistant guiding you
- **Limitations to know:** Chrome-only for now, and scraping/pasting depends on page layouts that Reddit and the AI sites can change without warning.

| Option | Pros | Cons |
|--------|------|------|
| **Chrome extension (vanilla JS)** ✅ | Lives right on the Reddit page; no backend; privacy-friendly; $0 to run | Chrome-only at first; selectors can break when sites change |
| Web app + backend (paste a URL) | Works on any device and browser | Needs Reddit API access + hosting bills; extra copy-paste step for users |
| Bookmarklet / userscript | Simplest possible start | Scary install for non-technical users; cramped UI; hard to maintain |

**The trade-off we're accepting:** DOM fragility — layouts change and break selectors. We mitigate with the preview step (you always see what will be sent) and the copy-prompt fallback overlay.

## Project Setup Checklist

- [ ] **Accounts (Day 1):** GitHub (code backup); Google account for the Chrome Web Store later
- [ ] **AI assistant (Day 1):** install VS Code + Claude Code; test with "create a manifest.json for a Manifest V3 extension called Reddit to AI"
- [ ] **Initialize (Day 2):** `npm init -y`, add ESLint, create `src/manifest.json`, load it unpacked at `chrome://extensions`

## Project Structure

```
Reddit-to-AI/
├── src/
│   ├── manifest.json        # Extension definition (Manifest V3)
│   ├── service_worker.js    # Background brain: scrape queue, prompt assembly, tab handoff
│   ├── redditScraper.js     # Reads post + nested comments from the page
│   ├── promptBuilder.js     # Thread data + preset → final prompt text
│   ├── aiPaster.js          # Finds the AI site's chat box and pastes
│   ├── popup.html/js/css    # Toolbar popup: platform, preset, quick filters
│   ├── preview.html/js/css  # Review/edit screen with size meter
│   ├── options.html/js/css  # Settings: defaults, custom templates
│   └── images/              # Icons and platform logos
├── tests/                   # Node test files (*.test.mjs)
├── scripts/                 # Packaging + validation scripts
├── docs/                    # Research, PRD, this TechDesign
├── package.json             # lint / test / package commands
└── README.md
```

## Building Your Features

### Feature 1: Smart Thread Scraping & Quick Filters — Medium
- **Build prompt:** "In my MV3 extension, scrape the open Reddit thread (title, author, subreddit, body, nested comments to a configurable depth) from the service worker, with options to hide bot authors and set a minimum comment score."
- **Test it by:** open a 200+ comment thread, run the scrape, confirm nested replies and that the filters change the output

### Feature 2: Prompt Presets & Custom Templates — Easy
- **Build prompt:** "Create promptBuilder.js: given scraped thread data and a preset (Summarization, Debate Analysis, Sentiment, ELI5, Key Takeaways), return a prompt string; support custom templates with a {content} placeholder."
- **Test it by:** pick Debate Analysis and check the thread lands where `{content}` was

### Feature 3: Preview Before Sending (Context Budget) — Medium
- **Build prompt:** "Create a preview page showing the prompt in an editable textarea with a live meter (characters, estimated tokens, comment count) that warns when large, plus Send / Copy / Export buttons."
- **Test it by:** edit the text and watch the meter update; trim a huge thread until the warning clears

### Feature 4: Send to Your AI (with Fallback) — Hard
- **Build prompt:** "Open the chosen AI site in a new tab and auto-paste the prompt into its composer (Gemini, ChatGPT, Claude, AI Studio). If pasting fails, show an overlay with a Copy Prompt button."
- **Test it by:** send to all 4 platforms; then deliberately break a selector and confirm the fallback overlay appears

## Database & Data Storage

**Recommended: chrome.storage (built into the browser) — no database to set up or pay for.** One data type to sketch, then your AI wires it up:
- **Settings:** platform, preset, minScore, hideBots, commentDepth, customTemplates[]

History (saved threads) is post-MVP per the PRD — when it lands, it goes in chrome.storage too.

## AI Features (Optional)

No in-app AI calls — the AI work happens on the destination platform, so there are no API keys, no model bills, and no data leaving the browser except into the AI tab the user picked.
- **Data sensitivity:** public thread content only; never scrape logged-in or private pages
- **Fallback on failure:** if auto-paste fails, the copy overlay means the user is never stuck

## AI Assistance Strategy

### Which AI Tool for What

| Task | Best AI Tool | Example Prompt |
|------|--------------|----------------|
| Planning architecture | Claude | "Design the message flow between popup, service worker, and the AI tab" |
| Writing code | Claude Code | "Implement the comment scraper with configurable depth" |
| Fixing bugs | ChatGPT | "Error: [error]. How to fix?" |
| UI/Design | Claude | "Create a clean popup that feels native to Reddit" |

*This table is a suggestion, not a requirement — Part 4 handles final tool setup.*

## Deployment Plan

**Recommended: Chrome Web Store** — the natural home for extensions; one-time ~$5 developer fee.

1. `npm run package:extension` to zip `src/`
2. Upload in the Chrome Web Store developer dashboard; add screenshots, description, and privacy notes
3. Submit for review

**Backup option:** share the GitHub repo with "Load unpacked" instructions if store review stalls. Firefox/Edge ports are a much-later step.

## Cost Breakdown

| Phase | Services | Notes |
|-------|----------|-------|
| Building | VS Code, Claude Code, ESLint, GitHub | Free tiers cover this — check each vendor |
| After launch | Chrome Web Store (~$5 one-time) | $0/month running costs — no server |

## Success Checklist

- [ ] Accounts created, extension loads unpacked, budget confirmed ($0 + one-time fee)
- [ ] Following PRD features only; testing after each feature; asking AI when stuck
- [ ] Before launch: all PRD features work, fallback overlay proven, store listing ready

**You'll know it's working when:** scrape → preview → send completes in under a minute on all 4 AI platforms, and a broken selector shows the fallback instead of failing silently. **Learn more:** Chrome's official extension docs + r/chrome_extensions

## Maintenance

- Few, stable dependencies (ESLint only) — review tool versions monthly
- When Reddit or the AI sites change layouts, update selectors and bump the version
- Keep AGENTS.md and configs updated as the project grows

## Open Questions

| Question | Status |
|----------|--------|
| Do old.reddit.com and new Reddit need separate scrapers? | TBD — test in week 1 |
| Token-estimation approach for the size meter | TBD — simplest estimator first, refine later |

---
*Technical Design for: Reddit to AI | Approach: Vanilla-JS Chrome extension (Manifest V3) | Est. time to MVP: 4 weeks | Est. cost: $0/month*

---
## Handoff Context
<!-- Machine-readable summary for the next workflow step. Do not delete; the next prompt in the workflow reads this block. -->
- Stage: techdesign
- App name: Reddit to AI
- User level: A
- Target platform: web (Chrome extension)
- Budget: Free tools only (+ ~$5 one-time Chrome Web Store fee)
- Timeline: 4 weeks (evenings & weekends)
- Chosen stack: Vanilla JavaScript + HTML/CSS Chrome extension (Manifest V3); no backend, no build step; chrome.storage for settings
- AI coding tool: Claude Code
- Source files: research-reddit-to-ai.md → PRD-reddit-to-ai-MVP.md → TechDesign-reddit-to-ai-MVP.md
---
