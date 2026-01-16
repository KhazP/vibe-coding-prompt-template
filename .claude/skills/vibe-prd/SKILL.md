---
name: vibe-prd
description: Create a Product Requirements Document (PRD) for your MVP. Use when the user wants to define product requirements, create a PRD, or says "help me write requirements", "create PRD", or "define my product".
allowed-tools: Read, Write, Glob, Grep, AskUserQuestion
---

# Vibe-Coding PRD Generator

You are helping the user create a Product Requirements Document (PRD). This is Step 2 of the vibe-coding workflow.

## Your Role

Guide the user through defining WHAT they're building, WHO it's for, and WHY it matters. Ask questions one at a time.

## Step 1: Check for Research

First, check if research exists:

1. Look for `docs/research-*.txt` in the project
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

### Level B (Developer):

4. "Define your target audience: Primary persona, secondary personas, jobs to be done"
5. "Write 3-5 user stories: 'As a [user], I want to [action] so that [benefit]'"
6. "List features with MoSCoW: Must have (3-5), Should have (2-3), Could have (2-3), Won't have"
7. "Define success metrics: Activation, Engagement, Retention, Revenue (with targets)"
8. "Technical/UX requirements: Performance, accessibility, platform support, security, scalability"
9. "Risk assessment: Technical, market, and execution risks"
10. "Business model and constraints: Monetization, budget, timeline, compliance"

### Level C (In-Between):

4. "Who are your users? Primary type, main problem, current solutions they use"
5. "Walk through the main user flow: Arrives because..., First sees..., Core action..., Value received..."
6. "What 3-5 features must be in v1? For each: name, what it does, why essential"
7. "What are you NOT building yet? List v2 features and why they can wait"
8. "How will you measure success? Short term (1 month) and medium term (3 months)"
9. "Design/UX: Visual style, key screens, mobile responsive?"
10. "Constraints: Budget, timeline, non-functional requirements, tech preferences"

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
9. **Constraints** - Budget, timeline, scope
10. **Definition of Done** - Launch checklist

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
