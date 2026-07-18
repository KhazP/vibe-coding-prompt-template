# Product Requirements Document: Reddit to AI MVP

*Reconstructed example — this project shipped before the workflow existed; these docs show what following the workflow produces.*

## Product Overview

**App Name:** Reddit to AI
**Tagline:** Turn any Reddit thread into a ready-to-send AI prompt in one click.
**Launch Goal:** Ship to the Chrome Web Store and reach the first 100 users.
**Target Launch:** 4 weeks (early June 2025)

## Who It's For

### Primary User: The Curious Lurker
Reads Reddit daily on desktop, keeps twenty tabs open, and already uses an AI chat for summaries and second opinions. Not necessarily technical — just wants the good bits of a thread fast.

**Their Current Pain:**
- Copy-pasting a long thread into an AI chat is slow and loses the reply structure
- Threads are noisy — bots and downvoted comments bury the good stuff
- Big threads overflow the AI's input box with no warning

**What They Need:**
- One click from Reddit page to a complete, well-formatted prompt
- A way to see and trim the prompt before it sends
- Their favorite instructions saved and reusable

### Example User Story
"Meet Alex, a daily Reddit reader. Every evening a 600-comment megathread drops. Alex wants the key takeaways and the main points of disagreement — without reading all 600 comments or spending ten minutes copy-pasting."

## The Problem We're Solving

Reddit threads hold some of the best discussion on the internet, and AI chats are great at digesting long text — but the bridge between them is manual copy-paste. This app is that bridge: scrape, filter, preview, send.

**Why Existing Solutions Fall Short:**
- Manual copy-paste: tedious, loses threading, no filtering
- Generic "summarize this page" extensions: treat Reddit like a flat article, no prompt control

## User Journey

1. **Discovery** — finds us on the Chrome Web Store or via a Reddit recommendation; hook: "stop copy-pasting threads into ChatGPT"
2. **Onboarding (first 5 minutes)** — installs, opens a thread, clicks the icon, hits **Scrape & Preview**; quick win: a clean prompt in seconds
3. **Core usage loop** — trigger: an interesting long thread; action: scrape → preview → send; reward: an instant digest; investment: saved templates and filter defaults
4. **Success moment** — a 600-comment thread becomes a tidy summary; share trigger: telling the subreddit about it

## MVP Features

### Must Have for Launch

#### 1. Smart Thread Scraping & Quick Filters
- **What:** Reads the open Reddit thread — post, metadata, and nested comments to a configurable depth — with quick filters to hide bots and set a minimum score.
- **User Story:** As a Reddit reader, I want the whole thread captured and cleaned in one click so that I never copy-paste anything.
- **Success Criteria:** captures title, author, subreddit, body, and nested comments; hide-bots and minimum-score filters visibly change the comment set
- **Priority:** P0 (Critical)

#### 2. Prompt Presets & Custom Templates
- **What:** One-click presets (Summarization, Debate Analysis, Sentiment Analysis, ELI5, Key Takeaways) plus custom templates using a `{content}` placeholder.
- **User Story:** As a user, I want my favorite analysis style saved so that I never retype instructions.
- **Success Criteria:** every preset produces a complete prompt with the thread inserted at `{content}`; saved custom templates are reusable
- **Priority:** P0 (Critical)

#### 3. Preview Before Sending (Context Budget)
- **What:** A preview screen shows the final prompt with a live size meter (estimated characters/tokens, comment count) and lets you edit, copy, or export before anything is sent.
- **User Story:** As a user, I want to check and trim the prompt first so that I never blow past the AI's input limit.
- **Success Criteria:** prompt fully editable; size meter warns when the prompt gets too big
- **Priority:** P0 (Critical)

#### 4. Send to Your AI (with Fallback)
- **What:** One click opens the chosen AI chat (Gemini, ChatGPT, Claude, or AI Studio) and pastes the prompt; if auto-paste fails, a fallback overlay offers a one-click **Copy Prompt** button.
- **User Story:** As a user, I want the prompt to land in my AI chat automatically so that the whole flow takes seconds.
- **Success Criteria:** auto-paste works on all 4 supported platforms; fallback copy overlay appears when auto-paste is blocked
- **Priority:** P0 (Critical)

### Nice to Have (If Time Allows)
- **Comment sort modes:** Best / Top / New / Controversial before scraping
- **Media extraction:** include image and gallery links in the prompt

## Out of Scope (Not in MVP)
- **History & favorites:** will add after launch, once the core flow is proven
- **Batch / multi-thread mode:** will add after the single-thread flow is rock solid
- **Multi-language interface:** will add after the English MVP ships
- **More AI platforms (DeepSeek, Groq, custom URLs):** will add based on user requests
- **Firefox / Safari versions:** will add if the Chrome version gets traction

*Why we're waiting: keeps the MVP focused and launchable in 4 weeks*

## How We'll Know It's Working

### Launch Success Metrics (First 30 Days)
| Metric | Target | Measure |
|--------|--------|---------|
| Installs | 100 | Chrome Web Store dashboard |
| Scrape → send success rate | 9 of 10 attempts | Manual test log on the 4 platforms |

### Growth Metrics (Months 2-3)
| Metric | Target | Measure |
|--------|--------|---------|
| Weekly users | 50+ | Chrome Web Store dashboard |

## Look & Feel

**Design Vibe:** Clean, fast, invisible — feels like part of Reddit.

**Visual Principles:**
1. Native look — system fonts, nothing flashy
2. One obvious action per screen ("Scrape & Preview")
3. Dark-mode friendly — Reddit users live in dark mode

**Key Screens/Pages:**
1. **Popup:** platform + preset pickers, quick filters, big Scrape & Preview button
2. **Preview screen:** editable prompt, size meter, Send/Copy/Export buttons
3. **Options page:** defaults for depth, filters, and templates

### Simple Wireframe
```
┌──────────────────────────────┐
│  Reddit to AI            ⚙   │
│  Send to: [ Gemini      ▼ ]  │
│  Preset:  [ Summarize   ▼ ]  │
│  ☑ Hide bots   Min score: 5  │
│  [   🔍 Scrape & Preview  ]  │
└──────────────────────────────┘
```

## Technical Considerations

**Platform:** Chrome extension (desktop Chrome, Manifest V3)
**Performance:** scraping a 1,000-comment thread completes in seconds; keyboard-navigable popup with labeled controls
**Security/Privacy:** no remote server, no accounts, no tracking — thread data leaves the browser only into the AI tab the user chose
**Scalability:** N/A — everything runs on the user's machine

## Quality Standards

**What This App Will NOT Accept:**
- Sending anything to an AI without showing the prompt first
- Silent scrape failures — every failure gets a visible message
- A broken auto-paste with no copy fallback

*These standards will be enforced by the AI coding assistant.*

## Budget & Constraints

**Budget:** $0 to build, $0/month to run (+ ~$5 one-time Chrome Web Store fee)
**Timeline:** 4 weeks to launch — **Team:** solo (me + an AI coding assistant)

## Open Questions & Assumptions
- How reliable is auto-paste on each AI site? (Assumption: selectors break occasionally — hence the fallback overlay; verify during build)
- Chrome Web Store review time assumed under a week (verify at submission)

## Launch Strategy (Brief)

**Soft Launch:** share on a few relevant subreddits and with friends, aiming for the first 100 installs
**Feedback & Iteration:** GitHub issues + a feedback link in the options page; weekly fixes, monthly features

## Definition of Done for MVP

The MVP is ready to launch when:
- [ ] All P0 features are functional, with basic error handling
- [ ] Scrape → preview → send works end-to-end on all 4 platforms
- [ ] Fallback copy overlay proven by deliberately breaking a selector
- [ ] Friends/family test is complete
- [ ] Store listing (screenshots, description, privacy notes) is ready

## Next Steps

1. Create the Technical Design Document (Part 3)
2. Set up the development environment and build with AI assistance
3. Test with 5-10 beta users, then launch!

---
*Document created: May 2025*
*Status: Draft — Ready for Technical Design*

---
## Handoff Context
<!-- Machine-readable summary for the next workflow step. Do not delete; the next prompt in the workflow reads this block. -->
- Stage: prd
- App name: Reddit to AI
- User level: A
- Target platform: web (Chrome extension)
- Budget: Free tools only (+ ~$5 one-time Chrome Web Store fee)
- Timeline: 4 weeks (evenings & weekends)
- Source files: research-reddit-to-ai.md → PRD-reddit-to-ai-MVP.md
---
