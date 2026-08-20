# Deep Research: Reddit to AI

*Reconstructed example — this project shipped before the workflow existed; these docs show what following the workflow produces.*

*Research run without web search — factual claims are labeled "Unverified — model knowledge". Verify the important ones before committing.*

## Project name

**Reddit to AI** — a Chrome extension that turns any Reddit thread into a ready-to-send AI prompt in one click.

## Core concept

**What it is:** A browser extension that lives on top of Reddit. Open a thread, click the extension, and it collects the post and comments, builds a clean prompt from a preset (Summarization, Debate Analysis, Sentiment Analysis, ELI5, Key Takeaways), shows you a preview, and pastes it into your favorite AI chat.

**The problem:** Getting a Reddit thread into ChatGPT or Gemini today means copy-pasting comment by comment, losing the reply structure, hitting context limits on big threads with no warning, and retyping the same "please summarize this" instructions every single time.

**Why now:** AI chats have become everyday tools and their context windows are big enough to swallow whole threads — but handing the thread over is still manual grunt work. The bottleneck moved from "can the AI read it?" to "how do I get it in there cleanly?"

## Target users

- **Heavy Reddit readers** who open a 500-comment thread and want the TL;DR before diving in.
- **Researchers and analysts** studying sentiment, debates, or community reaction to an event.
- **AI power users** who already bounce between Gemini, ChatGPT, and Claude and want the same context in all of them.

**Pain points:** manual copy-paste is slow; threads are noisy (bots, jokes, downvoted junk); big threads silently overflow the AI's input box; your analysis instructions have to be retyped every time.

## Technical decisions (if any)

- **Chrome extension (Manifest V3), plain JavaScript** — no app to install, lives right on the Reddit page where the user already is. *(Unverified — model knowledge: Manifest V3 is the extension format Chrome currently requires.)*
- **No backend, no accounts** — everything runs and stays in the browser. This is both a privacy feature and a $0/month cost decision.
- **chrome.storage for settings** — the standard built-in place extensions keep user preferences.
- Detailed architecture (where scraping runs, how the prompt travels between tabs) is left for the Tech Design step.

## Competitor insights

| Solution | What it does | Where it falls short | Our opening |
|---|---|---|---|
| Manual copy-paste | Free, works everywhere | Tedious, loses thread structure, no filtering | Automate the whole grab-and-format step |
| "Summarize this page" extensions | One-click summary of any webpage | Treat Reddit like a flat article — no comment threading, no prompt control, often send data to their servers | Reddit-aware scraping + you see and edit the exact prompt; local-only |
| Web-based Reddit summarizers | Paste a URL, get a summary | Extra tab, no customization, strict size limits | Works where the user already is — on the thread itself |
| Reddit's built-in AI features | Q&A and summaries inside Reddit | Answers stay locked in Reddit; no choice of AI, no prompt presets *(Unverified — model knowledge)* | Bring threads to whichever AI you trust, with your own prompt |

**What users love in existing tools:** one-click simplicity, not leaving the page.
**What they hate:** black-box summaries they can't steer, tools that break when Reddit changes its layout, and not knowing where their data goes.
**Gaps to exploit:** nobody else offers a *preview-and-edit* step plus a visible "how much of the AI's context will this eat?" meter.

## Budget/timeline

- **Tools:** VS Code (free), an AI coding assistant (free tier to start; ~$20/month if a paid plan becomes necessary — check current pricing), ESLint (free). **$0 required to build.**
- **Publishing:** Chrome Web Store developer account, ~$5 one-time *(Unverified — model knowledge)*.
- **Running costs:** $0/month — no server, no database, no API keys.
- **Timeline:** 4 weeks of evenings & weekends to a store-ready MVP. Riskiest part: auto-pasting into each AI site's chat box — budget extra testing time there.

---
## Handoff Context
<!-- Machine-readable summary for the next workflow step. Do not delete; the next prompt in the workflow reads this block. -->
- Stage: research
- App name: Reddit to AI
- User level: A
- Target platform: web (Chrome extension)
- Budget: Free tools only (+ ~$5 one-time Chrome Web Store fee)
- Timeline: 4 weeks (evenings & weekends)
- Source files: research-reddit-to-ai.md
---
