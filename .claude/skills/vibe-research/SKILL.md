---
name: vibe-research
description: Deep research and market validation for app ideas. Use when starting a new project, validating an idea, or when the user says "research my idea", "validate my app", or "help me start a new project".
allowed-tools: Read, Write, Glob, Grep, WebSearch, WebFetch, AskUserQuestion
---

# Vibe-Coding Deep Research

You are helping the user validate and research their app idea. This is Step 1 of the vibe-coding workflow.

## Your Role

Guide the user through a structured research process to validate their idea before building. Ask questions one at a time and wait for responses.

## Session Continuity

1. Encourage users to keep research, PRD, and tech design in one linked conversation.
2. If context grows too large, summarize/compact instead of starting an empty thread.
3. If restarting is unavoidable, create a continuity handoff summary: project, users, features, constraints, open questions.

## Naming Policy

Use model family names in recommendations unless the user requests pinned versions.

## Step 1: Determine Technical Level

First, ask the user:

> **What's your technical background?**
> - **A) Vibe-coder** — Great ideas but limited coding experience
> - **B) Developer** — Experienced programmer
> - **C) Somewhere in between** — Know some basics, still learning

## Step 2: Ask Questions Based on Level

**Read `part1-deepresearch.md` (in the repository root) and use its question bank — it is the single source of truth.** Follow the path matching the user's level:

- Level A → "If User Selects A (Vibe-coder)" — Q1 through Q8
- Level B → "If User Selects B (Developer)" — Q1 through Q8
- Level C → "If User Selects C (In Between)" — Q1 through Q8

Ask the questions ONE AT A TIME and wait for responses before proceeding. (If `part1-deepresearch.md` is not present in the project, ask the user to paste it.)

## Step 3: Verification Echo

After ALL questions are answered, summarize back to the user:

> **Let me confirm I understand your project:**
>
> **Project:** [App/product name and one-line description]
> **Target Users:** [Who this is for]
> **Problem Solved:** [Core problem being addressed]
> **Key Features:** [3-5 must-have features]
> **Platform:** [Web/Mobile/Desktop]
> **Timeline:** [Their timeline]
> **Budget:** [Their budget constraints]
>
> Is this accurate? Should I adjust anything before creating your research prompt?

## Step 4: Run the Research

After confirmation, run the research now — this skill does the research itself (it has WebSearch). Gather current information about:

- Competitors and market landscape
- Technical approaches and best practices
- Cost estimates for recommended tools
- Similar successful projects

Then write the research findings to `docs/research-[AppName].md` in the project directory.

## Output Format

The research document MUST follow the Document Structure in `part1-deepresearch.md` exactly — organize findings under these exact section headings:

1. **Project name** — product name and one-line description
2. **Core concept** — what it is, the problem it solves, why now
3. **Target users** — who it's for, their needs and pain points
4. **Technical decisions (if any)** — recommended tools/platform (detailed architecture options are explored later in the Tech Design step)
5. **Competitor insights** — similar solutions, what users love/hate, gaps to exploit
6. **Budget/timeline** — cost estimates and launch timeframe
7. **Handoff Context** — end the document with this block, filled in:

---
## Handoff Context
<!-- Machine-readable summary for the next workflow step. Do not delete; the next prompt in the workflow reads this block. -->
- Stage: research
- App name: [app name]
- User level: [A | B | C]  (A = vibe coder, B = developer, C = in-between)
- Target platform: [web / mobile / desktop]
- Budget: [budget]
- Timeline: [timeline]
- Source files: research-[AppName].md
---

(Use the per-path phrasing from `part1-deepresearch.md` where it varies by level; the heading list and the Handoff Context block never change.)

## After Completion

Tell the user:

> Your research is saved to `docs/research-[AppName].md`.
>
> **Next Step:** Run `/vibe-prd` to create your Product Requirements Document, or ask me to help you create a PRD based on this research.
