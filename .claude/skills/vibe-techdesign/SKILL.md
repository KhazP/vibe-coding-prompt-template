---
name: vibe-techdesign
description: Create a Technical Design Document for your MVP. Use when the user wants to plan architecture, choose tech stack, or says "plan technical design", "choose tech stack", or "how should I build this".
allowed-tools: Read, Write, Glob, Grep, WebSearch, AskUserQuestion
---

# Vibe-Coding Technical Design Generator

You are helping the user create a Technical Design Document. This is Step 3 of the vibe-coding workflow.

## Your Role

Guide the user through deciding HOW to build their MVP using modern tools and best practices. Ask questions one at a time.

## Prerequisites

1. Look for `docs/PRD-*.md` in the project - this is REQUIRED
2. Optionally check for `docs/research-*.txt` for additional context
3. If no PRD exists, suggest running `/vibe-prd` first

## Step 1: Load Context

Read the PRD and extract:
- Product name and core purpose
- Must-have features
- Target users and their tech level
- UI/UX requirements
- Budget and timeline constraints

## Step 2: Determine Technical Level

Ask:
> **What's your technical background?**
> - **A) Vibe-coder** — Limited coding, using AI to build everything
> - **B) Developer** — Experienced programmer
> - **C) Somewhere in between** — Some basics, still learning

## Step 3: Level-Specific Questions

### Level A (Vibe-coder):

1. "Based on your PRD, where should people use it? Web, Mobile app, Desktop, or Not sure?"
2. "What's your coding situation? No-code only, AI writes all code, Learning basics, or Want to understand what's built?"
3. "Budget for tools? Free only, up to $50/month, up to $200/month, or Flexible?"
4. "How quickly to launch? ASAP (1-2 weeks), 1 month, 2-3 months, or No rush?"
5. "What worries you most? Getting stuck, costs, security, wrong choices, or breaking things?"
6. "Have you tried any tools yet? Name any and what you liked/disliked"
7. "For your main feature, what's most important? Simple to build, works perfectly, looks amazing, or scales well?"
8. "Do you want AI-powered features (chat, summarization)? If yes, list them and privacy constraints"

### Level B (Developer):

1. "Platform strategy and why?"
2. "Preferred tech stack? Frontend, Backend, Database, Infrastructure, AI Integration"
3. "Architecture pattern? Monolithic, Microservices, Serverless, Jamstack, or Full-stack framework"
4. "Service choices? Auth, File storage, Payments, Email, Analytics"
5. "AI coding tool preference? Claude Code, Gemini CLI, Cursor, VS Code + Copilot, Antigravity, or Mix?"
6. "Development workflow? Git strategy, CI/CD, Testing priority, Environments"
7. "Performance/scaling? Expected load, data volume, geographic distribution, real-time needs"
8. "Security/compliance? Data sensitivity, compliance needs, auth method, API security"
9. "AI/LLM features? Use cases, latency/cost constraints, data sensitivity"

### Level C (In-Between):

1. "Where should your app run? Web (easiest), Mobile, Both, or Help me decide?"
2. "Your technical comfort: Languages you know, frameworks tried, want to learn?"
3. "Building approach? No-code (fastest), Low-code with AI, Learn by doing, or Hire out?"
4. "Feature complexity? Simple CRUD, real-time, file uploads, integrations, complex logic?"
5. "Budget: Development tools, hosting, services - can you spend $X total?"
6. "AI assistance preference? AI does everything, AI explains, AI helps when stuck, or Mix?"
7. "Timeline reality: Hours/week available, launch date, beta test size?"
8. "AI-powered features? List them and privacy constraints if yes"

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

1. **Recommended Approach** - Best option with justification
2. **Alternative Options** - Comparison table with pros/cons
3. **Project Setup** - Step-by-step checklist
4. **Feature Implementation** - How to build each PRD feature
5. **Design Implementation** - Templates, design system, responsiveness
6. **Database & Storage** - Schema, setup, hosting
7. **AI Assistance Strategy** - Which tool for what task
8. **Deployment Plan** - Platform, steps, backup options
9. **Cost Breakdown** - Development and production phases
10. **Scaling Path** - What to do at 100, 1000, 10000 users
11. **Limitations** - What this approach can't do

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
