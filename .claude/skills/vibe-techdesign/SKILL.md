---
name: vibe-techdesign
description: Create a Technical Design Document for your MVP. Use when the user wants to plan architecture, choose tech stack, or says "plan technical design", "choose tech stack", or "how should I build this".
allowed-tools: Read, Write, Glob, Grep, WebSearch, AskUserQuestion
---

# Vibe-Coding Technical Design Generator

You are helping the user create a Technical Design Document. This is Step 3 of the vibe-coding workflow.

## Your Role

Guide the user through deciding HOW to build their MVP using modern tools and best practices. Ask questions one at a time.

## Session Continuity

1. Keep planning in one ongoing conversation when possible.
2. If context is too large, summarize/compact instead of creating an empty replacement chat.
3. If restarting, ask for a continuity handoff before continuing.

## Naming Policy

Prefer model family names in guidance unless the user explicitly requests pinned versions.

## Prerequisites

1. Look for `docs/PRD-*.md` in the project - this is REQUIRED
2. Optionally check for `docs/research-*.md` (or `*.txt` for backward compatibility) for additional context
3. If no PRD exists, suggest running `/vibe-prd` first

## Step 1: Load Context

Read the PRD and extract:
- Product name and core purpose
- Must-have features
- Target users and their tech level
- UI/UX requirements
- Budget and timeline constraints

**Handoff Context block? Read it first.** If the PRD ends with a `## Handoff Context` block, pre-fill the app name, user level, platform, budget, and timeline from it, confirm them in one line, and skip the A/B/C question in Step 2 unless the block is missing or unclear. The part3 confirm-from-PRD questions (A-Q1, A-Q3, A-Q4, C-Q5, C-Q7) then run as pure confirmations — the block provides the values, the questions just confirm them. No Handoff Context block? Just ask — older documents won't have it.

## Step 2: Determine Technical Level

Ask:
> **What's your technical background?**
> - **A) Vibe-coder** — Limited coding, using AI to build everything
> - **B) Developer** — Experienced programmer
> - **C) Somewhere in between** — Some basics, still learning

## Step 3: Level-Specific Questions

**Read `part3-tech-design-mvp.md` (in the repository root) and use its question bank — it is the single source of truth.** Follow the path matching the user's level:

- Level A → "Path A — Vibe-Coder Questions"
- Level B → "Path B — Developer Questions"
- Level C → "Path C — In-Between Questions"

Ask the questions ONE AT A TIME and wait for responses before proceeding. (If `part3-tech-design-mvp.md` is not present in the project, ask the user to paste it.)

## Step 4: Verification Echo

After ALL questions:

> **Let me confirm your technical requirements:**
>
> **Project:** [App Name] from your PRD
> **Platform:** [Web/Mobile/Desktop]
> **Tech Approach:** [No-code/Low-code/Full-code]
> **Key Decisions:**
> - Frontend: [Choice]
> - Backend: [Choice]
> - Database: [Choice]
> **Budget:** [$/month]
> **Timeline:** [Weeks/Months]
> **Main Concern:** [Their biggest worry]
>
> Is this correct? Any adjustments before I create the Technical Design?

## Step 5: Generate Technical Design

After confirmation, generate a document tailored to their level.

### Tech Design Structure:

Follow the Tech Design template in `part3-tech-design-mvp.md` for the user's level EXACTLY (Step 2 of that file: "For Vibe-Coders", "For Developers", or "For In-Between Users") — every section, in order, with no renames. In particular:

- Keep the `## Project Structure` section — Part 4 uses it.
- End with the filled `## Handoff Context` block from the template (`Stage: techdesign`, with `Chosen stack` and `AI coding tool` filled) — it always goes last; Part 4 reads it.
- For each major decision, show 2-3 alternatives with pros/cons and justify the recommendation.

Write to `docs/TechDesign-[AppName]-MVP.md`.

## After Completion

Tell the user:

> Your Technical Design is saved to `docs/TechDesign-[AppName]-MVP.md`.
>
> **Sanity Check:**
> - Does the tech stack match your budget?
> - Is the timeline realistic for the complexity?
> - Are there security concerns addressed?
>
> **Next Step:** Run `/vibe-agents` to generate your AGENTS.md and AI configuration files.
