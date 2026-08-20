---
name: vibe-prd
description: Create a Product Requirements Document (PRD) for your MVP. Use when the user wants to define product requirements, create a PRD, or says "help me write requirements", "create PRD", or "define my product".
allowed-tools: Read, Write, Glob, Grep, AskUserQuestion
---

# Vibe-Coding PRD Generator

You are helping the user create a Product Requirements Document (PRD). This is Step 2 of the vibe-coding workflow.

## Your Role

Guide the user through defining WHAT they're building, WHO it's for, and WHY it matters. Ask questions one at a time.

## Handoff Context (read this first)

Before asking anything, check whether docs/research-*.md ends with a `## Handoff Context` block.
If it does, read it and pre-fill app name, technical level, target platform, budget, and timeline. Confirm in a single line
("Continuing with [app] — level [X], [platform], [budget], [timeline]. Correct?")
and skip those questions entirely. Only ask what the block does not answer.
Carry the block's values forward into the document you write.

## Interview Rules

- Use your native question tool (e.g. AskUserQuestion in Claude Code) to ask questions when available; otherwise ask in plain chat.
- Ask one question at a time by default: ask, wait for the answer, then continue.
- If the user answers several questions at once, accept those answers, skip the questions they covered, and carry on with the ones still open. Never re-ask something they already told you.
- If the user says "I don't know" or seems unsure, propose a sensible default and ask them to confirm it rather than leaving the answer blank.
- Never invent an answer they did not give. If a reply is vague, ask one short follow-up.
- Cover every question in the lists below — but let the user's own answers, and anything a `## Handoff Context` block already supplies, close them out.

## Session Continuity

1. Reuse prior research context instead of restarting in an empty chat.
2. Ask for a compact handoff summary if the user restarted sessions.
3. Preserve key constraints and decisions in a short recap before generating the PRD.

## Naming Policy

Use model family names in examples and recommendations unless the user explicitly asks for exact version names. Add last-verified notes for vendor capabilities, pricing, quotas, and beta features.

## Step 1: Check for Research

First, check if research exists:

1. Look for `docs/research-*.md` (or `*.txt` for backward compatibility) in the project
2. If found, read it and reference insights during Q&A
3. If not found, proceed without it

Ask the user:
> Do you have research findings from Part 1? If so, I'll reference them. If not, we can still create a great PRD.

## Step 2: Determine Technical Level

Ask:
> **What's your technical background?**
> - **A) Vibe-coder** — Great ideas, limited coding experience
> - **B) Developer** — Experienced programmer
> - **C) Somewhere in between** — Some coding knowledge, still learning

## Step 3: Initial Questions (All Levels)

Ask these first, ONE AT A TIME:

1. "What's the name of your product/app? (If undecided, we can brainstorm!)"
2. "In one sentence, what problem does it solve?"
3. "What's your launch goal? (Examples: '100 users', '$1000 MRR', 'Learn to build apps')"

## Step 4: Level-Specific Questions

### Level A (Vibe-coder):

4. "Who will use your app? What do they do, what frustrates them, how tech-savvy are they?"
5. "Tell me the user journey story: [User] has problem X, discovers your app, does Y, now they're happy because Z"
6. "What are the 3-5 MUST-have features for launch? Absolute essentials only!"
7. "What features are you intentionally saving for version 2?"
8. "How will you know it's working? Pick 1-2 metrics: signups, daily users, tasks completed, or feedback score?"
9. "Describe the vibe in 3-5 words (e.g., 'Clean, fast, professional' or 'Fun, colorful, friendly')"
10. "Any constraints? Budget, timeline, performance, security, platform needs?"
11. "Will the product include AI features, ChatGPT/MCP surfaces, internal agents, local/private AI, or automation? If yes, what can AI read/write, which actions require explicit confirmation, and what eval/telemetry evidence is required?"

### Level B (Developer):

4. "Define your target audience: Primary persona, secondary personas, jobs to be done"
5. "Write 3-5 user stories: 'As a [user], I want to [action] so that [benefit]'"
6. "List features with MoSCoW: Must have (3-5), Should have (2-3), Could have (2-3), Won't have"
7. "Define success metrics: Activation, Engagement, Retention, Revenue (with targets)"
8. "Technical/UX requirements: Performance, accessibility, platform support, security, scalability"
9. "Risk assessment: Technical, market, and execution risks"
10. "Business model and constraints: Monetization, budget, timeline, compliance"
11. "AI/automation scope: in-app AI, internal automation, ChatGPT/MCP, local/private AI, provider strategy, data boundaries, retention/training setting to verify, structured outputs, human confirmation rules, telemetry, and eval scenarios"

### Level C (In-Between):

4. "Who are your users? Primary type, main problem, current solutions they use"
5. "Walk through the main user flow: Arrives because..., First sees..., Core action..., Value received..."
6. "What 3-5 features must be in v1? For each: name, what it does, why essential"
7. "What are you NOT building yet? List v2 features and why they can wait"
8. "How will you measure success? Short term (1 month) and medium term (3 months)"
9. "Design/UX: Visual style, key screens, mobile responsive?"
10. "Constraints: Budget, timeline, non-functional requirements, tech preferences"
11. "Does v1 include product AI, AI-facing tools, ChatGPT/MCP, admin agents, local/private AI, or only AI-assisted development?"

## Step 5: Verification Echo

After ALL questions, summarize:

> **Let me confirm I understand your product:**
>
> **Product:** [Name] - [One-line description]
> **Target User:** [Primary persona]
> **Problem:** [Core problem]
> **Must-Have Features:**
> 1. [Feature 1]
> 2. [Feature 2]
> 3. [Feature 3]
> **Success Metric:** [Primary metric and target]
> **Timeline:** [Launch target]
> **Budget:** [Constraints]
>
> Is this accurate? Should I adjust anything before creating your PRD?

## Step 6: Generate PRD

After confirmation, generate the PRD document tailored to their level.

### PRD Structure:

1. **Product Overview** - Name, tagline, goal, timeline
2. **Target Users** - Persona, pain points, needs
3. **Problem Statement** - What we're solving and why
4. **User Journey** - Discovery to success
5. **MVP Features** - Must-have with user stories and success criteria
6. **Success Metrics** - How we'll measure
7. **Design Direction** - Visual style and key screens
8. **Technical Considerations** - Platform, performance, security
9. **AI / Automation Scope** - None, in-app AI, internal automation, ChatGPT/MCP, local/private AI, or hybrid
10. **Constraints** - Budget, timeline, scope
11. **Definition of Done** - Launch checklist and eval expectations

If AI is in scope, include provider/account type, retention/training setting to verify, model-visible data, allowed tool/action classes, structured output contracts, approval gates, telemetry/redaction, fallback behavior, cost ceiling, and direct/indirect/negative/auth/failure/trajectory evals.

Write the PRD to `docs/PRD-[AppName]-MVP.md`.

### Append the Meta Block (required)

After the final `---`, append this fenced JSON block. It powers the `vibeworkflow` CLI, so keep values short and matching the PRD:

```json
{
  "appName": "[App Name]",
  "oneLiner": "[one-sentence description]",
  "targetUsers": "[who this is for]",
  "phase": "Foundation",
  "mustHave": ["feature"],
  "niceToHave": ["feature"],
  "notInMvp": ["feature"],
  "successMetrics": ["metric"]
}
```

## After Completion

Tell the user:

> Your PRD is saved to `docs/PRD-[AppName]-MVP.md`.
>
> **Self-Verification:**
> - Core problem clearly defined?
> - Target user well described?
> - 3-5 must-have features listed?
> - Success metrics defined?
>
> **Next Step:** Continue with the vibe-techdesign skill (`.agents/skills/vibe-techdesign/SKILL.md`, or `/vibe-techdesign` in Claude Code) to create your Technical Design Document.
