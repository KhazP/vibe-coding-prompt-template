# Part 3 — Technical Design Document Generator

I'll help you create a Technical Design Document for your MVP. This document will define HOW to build what you outlined in your PRD, using modern tools matched to your skill level.

<details>
<summary><b>Before We Start — Required Documents</b></summary>

1. **PRD Document** (from Part 2) — Required
2. **Research Findings** (from Part 1) — Optional but helpful

Attach as `.txt`, `.pdf`, `.docx`, or `.md` files, or paste the content directly if short.

</details>

Once you've attached the file(s), please confirm your technical level:
- A) **Vibe-coder** — Limited coding, using AI to build everything
- B) **Developer** — Experienced programmer
- C) **Somewhere in between** — Some basics, still learning

Please attach your PRD (and optionally your research) and type A, B, or C:
(If your PRD ends with a **Handoff Context** block, I'll read these answers from it — just confirm.)

---

## Instructions for AI Assistant

<details>
<summary><b>Best AI Platforms for Technical Design</b></summary>

**Claude** (architecture reasoning), **Gemini** (trade-off analysis with large context), or **ChatGPT** (fast iteration) all work well.

**Stability note:** Prefer stacks and tools the team can realistically maintain. If a tool is new or uncertain, present it as an optional alternative and point to official docs for verification.

**Continuity note:** Keep technical design in the same project conversation; if the session gets too long, summarize/compact instead of opening an empty thread.

</details>

Read the attached PRD thoroughly: product purpose, must-have features, target users, platform/budget/timeline, technical preferences. Scan any research for competitor stacks, recommended tools, and costs.

**Handoff Context block? Read it first.** If the PRD ends with a `## Handoff Context` block, it carries the user's level, app name, platform, budget, and timeline from the earlier stages — pre-fill from it and DON'T re-ask what it already answers (including the A/B/C level). The confirm-from-PRD questions below (A-Q1, A-Q3, A-Q4, C-Q5, C-Q7) still run, but as pure confirmations: the block provides the values, the questions just confirm them. No Handoff Context block? Just ask — this block is new, older documents won't have it.

### How to Run the Interview

Ask the questions ONE AT A TIME based on their technical level, following these rules:

1. **Confirm, don't re-ask.** If the PRD already answers a question (platform, budget, timeline), confirm instead: "Your PRD says X — still right?" Only ask the full question if the PRD doesn't say.
2. **Batch answers are welcome.** If the user answers several questions at once, accept them and skip the covered questions.
3. **"I don't know" is a fine answer.** Propose a sensible default for their situation and ask them to confirm it.
4. **Corrections trigger a re-echo** of the updated summary before generating.

### Path A — Vibe-Coder Questions:

**Q1:** "Your PRD suggests [platform, if stated] for [App Name] — is that still right?
- Web (works in any browser) / Mobile app / Desktop app / Not sure — help me decide"

**Q2:** "What's your coding situation?
- No-code only (visual builders) / AI writes all code (I guide and test) / Learning basics / I want to understand what's built"

**Q3:** "Your PRD lists a budget of [budget, if stated] — still accurate?
- Free only (free tiers) / Up to $50/month / Up to $200/month / Flexible"

**Q4:** "Your PRD targets [timeline, if stated] — still realistic?
- ASAP (1-2 weeks) / 1 month / 2-3 months / No rush, learning focus"

**Q5:** "What worries you most about building?
- Getting stuck / Runaway costs / Security problems / Wrong tech choices / Breaking things you can't fix"

**Q6:** "Have you tried any tools yet? What did you like/dislike?"

**Q7:** "For your [main feature from PRD], what's most important?
- Super simple to build / Works perfectly / Looks amazing / Scales if successful"

**Q8:** "Any AI-powered features you want (chat, summarization, recommendations)? List them plus any privacy constraints."

### Path B — Developer Questions:

**Q1:** "Based on the PRD for [App Name], what's your platform strategy and why?"

**Q2:** "Preferred tech stack — frontend, backend, database, infrastructure, AI integration?"

**Q3:** "Architecture pattern for this MVP — monolithic, microservices, serverless, Jamstack, or full-stack framework? Why?"

**Q4:** "How will you handle authentication, file storage, payments, email, and analytics — managed services or custom?"

**Q5:** "AI coding assistance strategy — Claude Code, Gemini CLI, Cursor, VS Code + Copilot, agent-first IDE, or a mix?"

**Q6:** "Workflow and scale — Git strategy, CI/CD platform, testing priorities, environments; expected load, data volume, regions, real-time needs?"

**Q7:** "Security and compliance needs — data sensitivity (public/private/PII), compliance (GDPR/HIPAA/SOC2/none), auth model, API security?"

**Q8:** "Any AI/LLM product features? If yes, specify use cases, latency/cost constraints, and data sensitivity."

### Path C — In-Between Questions:

**Q1:** "Where should [App Name] run based on your PRD?
- Web app (easiest) / Mobile app / Both (start with one?) / Help me decide"

**Q2:** "Your current technical comfort zone — languages and frameworks you know, what you're comfortable with, what you want to learn?"

**Q3:** "For building your MVP, which approach appeals to you?
- No-code (Lovable, v0) — Fastest / Low-code with AI (Cursor) — Balance / Learn by doing — Educational / Hire it out — Hands-off"

**Q4:** "Looking at your features, what's the technical complexity?
- Simple CRUD / Real-time updates / File uploads / Third-party integrations / Complex logic"

**Q5:** "Your PRD lists a budget of [budget, if stated] — still accurate? Roughly $[?]/month total across tools, hosting, and services?"

**Q6:** "AI assistance preference — AI does everything (you test), AI explains (you understand), AI helps when stuck, or a mix?"

**Q7:** "Your PRD targets [timeline, if stated] — still realistic? Hours per week you can dedicate? Hard launch date? Beta users?"

**Q8:** "Any AI-powered features you want (chat, summarization, recommendations)? List them plus any privacy constraints."

---

## Step 1: Verification Echo (Required)

After completing ALL questions, summarize your understanding back to the user:

**Template:**
> "Let me confirm I understand your technical requirements:
>
> **Project:** [App Name] from your PRD
> **Platform:** [Web/Mobile/Desktop]
> **Stack:** Frontend [choice], Backend [choice], Database [choice]
> **Budget:** [$/month]
> **Timeline:** [Weeks/Months]
> **Main Concern:** [Their biggest worry]
>
> Is this correct? Any adjustments before I create the Technical Design?"

Wait for confirmation. If they correct anything, update your understanding and RE-ECHO the corrected summary. Only generate the document once they confirm.

---

## Step 2: Generate Technical Design Document

After verification, create a Tech Design Doc appropriate to their level.

> **Important**: For each major technical decision, you MUST:
> 1. **Provide alternatives** — Show 2-3 options with pros/cons
> 2. **Justify your recommendation** — Explain why one option is best for their situation
> 3. **Acknowledge trade-offs** — Be honest about limitations

> **Generation guardrails:**
> - Replace EVERY [bracketed] placeholder with real content from the interview — no leftover brackets in the final document.
> - Anything genuinely unknown goes into an **Open Questions** section marked TBD, phrased as the question the user still needs to answer.
> - Never invent prices, benchmarks, or performance figures — label estimates as estimates.
> - No ready-made implementations are included on purpose — generate schemas, configs, CI pipelines, and tests fresh for the user's stack, or defer them to their coding agent at build time.
> - End with a Maintenance section (stable dependencies, monthly tool review, update AGENTS.md and configs as you scale) and the Open Questions table, then close with the filled **Handoff Context** block from the template — it always goes last; Part 4 reads it.

> **Pricing note:** Pricing and tool capabilities change monthly — treat all cost figures as rough estimates and check current pricing pages.

> **If the PRD includes AI-powered features**, add an "AI Features (Optional)" section covering: use cases, data sensitivity (public/private/PII), provider options (API-based vs local models), latency/cost targets, and fallback behavior on AI failure.

### For Vibe-Coders — TechDesign-[AppName]-MVP.md:

```markdown
# Technical Design Document: [App Name] MVP

## How We'll Build It

### Recommended Approach: [Best Option for Them]

**Primary Recommendation: [Tool/Platform Name]**
- **Why it's perfect for you:** [3-4 specific reasons]
- **What it costs:** [Pricing tier]
- **Time to learn:** [Hours/Days]
- **Limitations to know:** [Key constraints]

Compare 2-3 alternative tools in a pros/cons table before settling on the recommendation.

## Project Setup Checklist

- [ ] **Accounts (Day 1):** [primary tool], [hosting], [database/backend]
- [ ] **AI assistant (Day 1):** install [Cursor/VS Code/other], add the AI extension, test with "Hello World"
- [ ] **Initialize (Day 2):** code — your AI gives the exact commands, run them one at a time; no-code — "New Project", pick a template, name it [App Name]

## Project Structure

```
my-app/
├── src/        # Your app's code (pages and components)
├── public/     # Images and other static files
├── docs/       # Your PRD, this TechDesign, and notes
└── README.md   # What the project is and how to run it
```

Your exact layout depends on your tool — ask your AI assistant to fill in this tree for your stack. Part 4 will use this section, so don't skip it.

## Building Your Features

### Feature 1: [Feature Name from PRD]
- **Complexity:** Easy/Medium/Hard
- **Build prompt:** "Create a [feature] that [requirements from PRD] using [technology], storing [data fields]" — no-code tools take this description directly; in Cursor your AI writes the code and creates the tables
- **Test it by:** [specific action]

[Repeat for each core feature. Match your PRD's design vision with 1-2 starter templates, colors, and fonts — your AI wires them into the CSS.]

## Database & Data Storage

**Recommended:** [Supabase/Firebase/Airtable-class integrated solution] — ~10 minutes to set up, free tier covers MVP scale. Sketch each data type as a simple field list (e.g. Users: id, email, name, created), then ask your AI to turn it into real tables — it knows how.

## AI Features (Optional)

[If the PRD has AI features, fill this in per the shared checklist: use cases, data sensitivity, provider options, latency/cost targets, fallback. Otherwise delete this section.]

## AI Assistance Strategy

### Which AI Tool for What

| Task | Best AI Tool | Example Prompt |
|------|--------------|----------------|
| Planning architecture | Claude | "Design database schema for [feature]" |
| Writing code | Cursor/Claude Code | "Implement [feature] with [tech]" |
| Fixing bugs | ChatGPT | "Error: [error]. How to fix?" |
| UI/Design | v0/Claude | "Create [component] matching [style]" |

*This table is a suggestion, not a requirement — Part 4 handles final tool setup.*

## Deployment Plan

**Recommended: managed hosting (Vercel/Netlify-class)** — push-to-deploy from your repo, free tier covers the MVP, no servers to manage.

1. Connect your repository and add environment variables (database URL, API keys) in the platform dashboard
2. Deploy — usually one click or one `git push`

**Backup options:** [Platform 2] if [condition]. If you outgrow the free tier, upgrade to a paid tier first — containers and cloud servers are a much-later step.

## Cost Breakdown

| Phase | Services | Notes |
|-------|----------|-------|
| Building | IDE, AI assistant, database, hosting | Free tiers often cover this — check each vendor |
| After launch | Hosting, database, email, storage | Check each vendor's pricing page |

## Success Checklist

- [ ] Accounts created, dev environment ready, limitations understood, budget confirmed
- [ ] Following PRD features only; testing after each feature; asking AI when stuck
- [ ] Before launch: all PRD features work, tested on mobile, basic error handling

**You'll know it's working when:** it runs, PRD features work, it's deployed, you can update it yourself, and costs stay under budget. **Learn more:** [getting-started tutorial for your stack] + r/[subreddit]

---
*Technical Design for: [App Name] | Approach: [chosen] | Est. time to MVP: [weeks] | Est. cost: $[amount]/month*

---
## Handoff Context
<!-- Machine-readable summary for the next workflow step. Do not delete; the next prompt in the workflow reads this block. -->
- Stage: techdesign
- App name: [App Name]
- User level: [A | B | C]  (A = vibe coder, B = developer, C = in-between)
- Target platform: [platform]
- Budget: [budget]
- Timeline: [timeline]
- Chosen stack: [frontend + backend + database + hosting, one line]
- AI coding tool: [tool(s) chosen, if decided]
- Source files: research-[AppName].md → PRD-[AppName]-MVP.md → TechDesign-[AppName]-MVP.md
---
```

### For Developers — TechDesign-[AppName]-MVP.md:

```markdown
# Technical Design Document: [App Name] MVP

## Executive Summary

**System:** [App Name] | **Version:** MVP 1.0 | **Architecture:** [pattern] | **Est. effort:** [person-weeks]

## Architecture Overview

Sketch the layers as a mermaid diagram (client → API → application → data + external services), extended with the PRD's actual services and integrations.

### Tech Stack Decision

Name each choice with a one-line justification:
- **Frontend:** [framework + styling + state + UI kit + test runner]
- **Backend:** [runtime + framework + ORM + API pattern + validation]
- **Infrastructure:** [hosting + database + cache + storage + monitoring]

## Project Structure

```
src/
├── app/ or routes/    # Entry points and routing
├── components/        # UI components
├── lib/ or services/  # Business logic and integrations
├── db/                # Schema, migrations, seeds
└── config/            # Configuration
```

Adapt to your framework's conventions — your coding agent can scaffold the real layout.

## Data Model

For each core PRD entity, define fields/types, relationships (cascade behavior), indexes for your query patterns, and a caching plan (browser, CDN, Redis, DB). Ask your coding agent to generate the schema DDL and migrations when you build — it knows how.

## Feature Implementation

For each PRD feature, specify:
- **Endpoints:** `POST/GET /api/FEATURE`, `GET/PUT/DELETE /api/FEATURE/:id`
- **Request/response shapes + validation:** [fields and rules from PRD]
- **Business rules + side effects:** [events, notifications]

Ask your coding agent to scaffold the service layer, types, tests, and code-split/paginated queries per feature — it knows how.

## Security Implementation

- **Auth + authorization:** [managed (Clerk/Supabase) vs JWT + refresh tokens], session expiry, MFA, [roles model]
- **Abuse protection:** rate limiting, CORS, and security headers (CSP via Helmet or framework equivalent) — your coding agent adds these at build time

## Development Workflow

Pick one primary AI tool per phase (architecture, implementation, debugging, testing) — a suggestion, not a requirement; Part 4 handles final tool setup.
- **Git + hooks:** trunk or GitHub-flow style, `feature/` `fix/` `chore/` branches; run format/lint/tests pre-commit
- **CI/CD:** ask your coding agent to generate the pipeline (install → test → build → deploy) for your hosting platform when you build — it knows how

## Testing Strategy

- **Targets:** 80% unit coverage; integration tests on critical paths; E2E on main user journeys
- **Visual verification + self-healing:** Generate → Render → Inspect (screenshot) → Refine before committing; on E2E failure, capture the error + accessibility snapshot for AI selector repair. Your coding agent writes the suites at build time.

## Deployment

**Recommended MVP path: managed hosting** — app on [Vercel / Railway / Render-class] (git push to deploy, preview environments, free tier covers the MVP), managed Postgres [Supabase/Neon-class], secrets in platform environment variables (never committed).

Containers and cloud VMs (AWS ECS, GCP Cloud Run) are a scale-later option; your coding agent can generate a Dockerfile or IaC when you need them.

## Cost Analysis

### Running Costs (Monthly — example stack)
| Service | Example Tier |
|---------|-------------|
| Hosting (Vercel) / Database (Supabase) / Monitoring (Sentry) | Pro / Pro / Team |

Add cache/email as needed — verify all tiers on vendor pricing pages.

## Agent Architecture (Advanced)

Your Part 1 research already covered agentic workflows (planner-executor-reviewer loops, MCP integration points) — reuse those findings here instead of re-deriving them.

---
*Version 1.0 | Last updated: [date] | Next review: [date + 1 month] | Technical lead: [name]*

---
## Handoff Context
<!-- Machine-readable summary for the next workflow step. Do not delete; the next prompt in the workflow reads this block. -->
- Stage: techdesign
- App name: [App Name]
- User level: [A | B | C]  (A = vibe coder, B = developer, C = in-between)
- Target platform: [platform]
- Budget: [budget]
- Timeline: [timeline]
- Chosen stack: [frontend + backend + database + hosting, one line]
- AI coding tool: [tool(s) chosen, if decided]
- Source files: research-[AppName].md → PRD-[AppName]-MVP.md → TechDesign-[AppName]-MVP.md
---
```

### For In-Between Users — TechDesign-[AppName]-MVP.md:

```markdown
# Technical Design Document: [App Name] MVP

## Recommended Approach

**Primary approach: [low-code with AI assistance]** — matches your current skills while teaching new ones.
- **Time to MVP:** [4-6 weeks] | **Learning curve:** moderate | **Cost:** [tier]

### Tech Stack (Balanced for Learning)
- **Frontend:** [Next.js / React + Vite] — huge community, AI knows it well
- **Backend:** [Supabase / Firebase / PocketBase] — handles auth, database, APIs
- **Deployment:** [Vercel / Cloudflare] — git push = deployed
- **AI assistant:** [Cursor / Claude Code / equivalent] — best balance of power and ease

## Project Structure

```
[app-name]/
├── src/
│   ├── components/   # Reusable UI pieces
│   ├── pages/        # App screens/routes
│   ├── lib/          # Helper functions (database, auth)
│   └── styles/       # CSS files
├── public/           # Images, fonts
├── .env.local        # Secret keys
├── package.json      # Dependencies
└── README.md         # Instructions
```

A standard pattern AI assistants understand, easy to navigate, and it scales as you learn.

## Building Each Feature

### Feature 1: [User Authentication] — Easy with [Supabase/Firebase]

1. **Set up auth** — ask your AI: "Set up [Supabase] auth in my project, including client config and environment variables." It knows how.
2. **Create a login component** — prompt: "Create a login form using [Supabase] auth and Tailwind CSS."
3. **Test** — sign up with a test email, verify the confirmation email, test login/logout.

**Learning points:** how auth works, environment variables for secrets, component-based development.

### Feature 2: [Core Feature from PRD] — [Complexity]

1. **Sketch the data:** list the fields for each table (id, user_id, title, status, created_at...). Your AI turns the sketch into real tables, and can write the Row Level Security policies.
2. **Build the UI:** list view, detail view, edit form — prompt: "Add [feature] to my app. Requirements: [from PRD]. Explain the approach first, then provide code."

[Continue for other features, splitting the AI work: Claude for architecture, Cursor for components, ChatGPT for debugging.]

## Development Setup

1. **VS Code** — from code.visualstudio.com, plus Prettier, ESLint, and Tailwind CSS IntelliSense extensions
2. **Cursor** — from cursor.com. Explore Cursor's Settings → Features panel to see what's available.
3. **Git + project** — `git init` and first commit; clone your starter template, `npm install`, add your keys to `.env.local`, then `npm run dev`. Your AI will walk you through each step.

## Simplified Architecture

**How your app works:** user clicks a button → frontend sends a request → backend processes it → database saves → UI updates.

**Key concepts:** components are reusable UI pieces (LEGO blocks); state is data that changes; props are settings passed to components; hooks are React functions starting with 'use'.

## AI Features (Optional)

[If the PRD has AI features, fill this in per the shared checklist: use cases, data sensitivity, provider options, latency/cost targets, fallback. Otherwise delete this section.]

## Step-by-Step Implementation

- **Week 1 — Foundation:** dev environment, project structure, deploy "Hello World" to Vercel, connect Supabase
- **Weeks 2-4 — Features & launch:** authentication, [core features from PRD], styling, error handling, mobile testing, production deploy

## Common Challenges & Solutions

- **"I don't understand this error"** → paste the exact message + the relevant code + your stack, and ask: "Explain what's wrong in simple terms and how to fix it."
- **"Code feels too complex or confusing"** → break it into smaller pieces, build the simplest version first, and ask AI to explain it line by line

## Deployment Guide

### Deploy to Vercel (Recommended)

1. Push your code to GitHub, then go to vercel.com → Import repository
2. Add your keys (Supabase URL, anon key) in the Vercel dashboard
3. Click Deploy — your app is live in 2-3 minutes

Containers and cloud servers are a scale-later option — the managed path above is all you need for the MVP.

## Cost Breakdown

### Development Phase
| Service | Free Tier | Notes |
|---------|-----------|-------|
| Cursor | Trial | Check cursor.com/pricing |
| Supabase | Limited | Check supabase.com/pricing |
| Vercel | Generous | Check vercel.com/pricing |

**After launch:** 0-500 users mostly fits free tiers; costs rise as you grow — check each vendor's pricing page.

## Learning Resources

**Learn:** react.dev tutorial → supabase.com/docs → vercel.com/docs; when stuck: product Discords + your AI assistants.

## Success Metrics

- [ ] App doesn't crash for users
- [ ] You can add features yourself; deployment takes < 5 minutes
- [ ] You understand most of the code; monthly costs under budget
- [ ] Users are actually using it!

---
*Created for: [App Name] | Path: Balanced learning | Est. time: 4-6 weeks*

---
## Handoff Context
<!-- Machine-readable summary for the next workflow step. Do not delete; the next prompt in the workflow reads this block. -->
- Stage: techdesign
- App name: [App Name]
- User level: [A | B | C]  (A = vibe coder, B = developer, C = in-between)
- Target platform: [platform]
- Budget: [budget]
- Timeline: [timeline]
- Chosen stack: [frontend + backend + database + hosting, one line]
- AI coding tool: [tool(s) chosen, if decided]
- Source files: research-[AppName].md → PRD-[AppName]-MVP.md → TechDesign-[AppName]-MVP.md
---
```

---

## Final Instructions

After generating the appropriate Technical Design Document based on their level, say:

"I've created your Technical Design Document above. It defines HOW to build what's described in your PRD.

### Self-Verification Checklist

Let's verify the Technical Design is complete:

| Required Section | Present? |
|-----------------|----------|
| Platform/approach clearly chosen | Yes / No |
| Alternatives compared with pros/cons | Yes / No |
| Tech stack fully specified | Yes / No |
| Trade-offs honestly acknowledged | Yes / No |
| Cost breakdown included | Yes / No |
| Timeline realistic | Yes / No |
| AI assistance strategy defined | Yes / No |

*If any items are missing, I'll add them now.*

### Critical Review Questions

Before proceeding, let's sanity-check:
1. **Does this tech stack match the budget?** (Free tiers vs paid)
2. **Does the timeline match the complexity?** (Realistic expectations)
3. **Are there any security concerns?** (User data, payments)

**Save this as** `TechDesign-[AppName]-MVP.md` in your project folder. Keep the `## Handoff Context` block at the end intact — Part 4 reads it.

### Next Step:
You now have research findings (Part 1), a PRD (Part 2), and this Technical Design (Part 3). Proceed to **Part 4** to generate the AGENTS.md file and tool-specific configuration files that will guide your AI assistant in building the actual code.

Would you like me to adjust anything in the Technical Design before moving on?"
