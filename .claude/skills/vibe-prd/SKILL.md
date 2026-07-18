---
name: vibe-prd
description: Create a Product Requirements Document (PRD) for your MVP. Use when the user wants to define product requirements, create a PRD, or says "help me write requirements", "create PRD", or "define my product".
allowed-tools: Read, Write, Glob, Grep, AskUserQuestion
---

# Vibe-Coding PRD Generator

You are helping the user create a Product Requirements Document (PRD). This is Step 2 of the vibe-coding workflow.

## Your Role

Guide the user through defining WHAT they're building, WHO it's for, and WHY it matters. Ask questions one at a time.

## Session Continuity

1. Reuse prior research context instead of restarting in an empty chat.
2. Ask for a compact handoff summary if the user restarted sessions.
3. Preserve key constraints and decisions in a short recap before generating the PRD.

## Naming Policy

Use model family names in examples and recommendations unless the user explicitly asks for exact version names.

## Step 1: Check for Research

First, check if research exists:

1. Look for `docs/research-*.md` (or `*.txt` for backward compatibility) in the project
2. If found, read it and reference insights during Q&A
3. If not found, proceed without it

**Handoff Context block? Read it first.** If the research document ends with a `## Handoff Context` block, pre-fill the app name, user level, platform, budget, and timeline from it, confirm them in one line ("Got it — level B, web app, ~$50/mo, 4 weeks — right?"), and skip the A/B/C question in Step 2 unless the block is missing or unclear. No Handoff Context block? Just ask — older documents won't have it.

Ask the user:
> Do you have research findings from Part 1? If so, I'll reference them. If not, we can still create a great PRD.

## Step 2: Determine Technical Level

Ask:
> **What's your technical background?**
> - **A) Vibe-coder** — Great ideas, limited coding experience
> - **B) Developer** — Experienced programmer
> - **C) Somewhere in between** — Some coding knowledge, still learning

## Step 3: Run the Question Bank

**Read `part2-prd-mvp.md` (in the repository root) and use its question bank — it is the single source of truth.**

1. Start with "Initial Questions for ALL Users" (Q1–Q3).
2. Then follow the path matching the user's level:
   - Level A → "Path A — Vibe-Coder Questions"
   - Level B → "Path B — Developer Questions"
   - Level C → "Path C — In-Between Questions"

Ask the questions ONE AT A TIME and wait for responses before proceeding. Do NOT generate the PRD until all essential answers are collected. (If `part2-prd-mvp.md` is not present in the project, ask the user to paste it.)

## Step 4: Verification Echo

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

## Step 5: Generate PRD

After confirmation, generate the PRD document tailored to their level.

### PRD Structure:

Follow the PRD template in `part2-prd-mvp.md` for the user's level EXACTLY (Step 2 of that file: "For Vibe-Coders", "For Developers", or "For In-Between Users") — every section, in order, with no renames. In particular:

- Keep the canonical `## Out of Scope (Not in MVP)` heading exactly as written.
- End the PRD with the filled `## Handoff Context` block from the template (`Stage: prd`), carrying values forward from the research and interview — it always goes last, after the document footer.
- Replace every [bracketed placeholder]; anything genuinely unknown goes in Open Questions as TBD.

Write the PRD to `docs/PRD-[AppName]-MVP.md`.

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
> **Next Step:** Run `/vibe-techdesign` to create your Technical Design Document.
