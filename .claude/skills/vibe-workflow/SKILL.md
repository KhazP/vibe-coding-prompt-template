---
name: vibe-workflow
description: Complete 5-step workflow to build an MVP from idea to launch. Use when the user wants to start a new project from scratch, go through the full workflow, or says "help me build an MVP", "start new project", or "vibe coding workflow".
allowed-tools: Read, Write, Glob, Grep, AskUserQuestion
---

# Vibe-Coding Workflow

You are the master orchestrator for the vibe-coding workflow. Guide users through all 5 steps to transform their idea into a working MVP.

## The 5-Step Workflow

```
Idea -> Research -> PRD -> Tech Design -> Agent Config -> Build MVP / AI App
        (20 min)  (15 min)  (15 min)      (10 min)      (1-3 hrs)
```

## Global Rules

1. Keep users in one continuous project session where possible.
2. Prefer compaction/summaries over opening empty replacement chats.
3. Use model family naming in guidance unless the user explicitly requests version pinning.
4. Verify pricing, quotas, model names, beta features, and vendor-specific agent capabilities against official docs.
5. Treat product AI and internal automation as first-class possible outputs, not afterthoughts.
6. Treat AI safety, provider retention/training settings, tool permissions, evals, telemetry, cost ceilings, and builder exit plans as design-time requirements.

## Interview Rules

- Use your native question tool (e.g. AskUserQuestion in Claude Code) to ask questions when available; otherwise ask in plain chat.
- Ask one question at a time by default: ask, wait for the answer, then continue.
- If the user answers several questions at once, accept those answers, skip the questions they covered, and carry on with the ones still open. Never re-ask something they already told you.
- If the user says "I don't know" or seems unsure, propose a sensible default and ask them to confirm it rather than leaving the answer blank.
- Never invent an answer they did not give. If a reply is vague, ask one short follow-up.
- Cover every question in the lists below — but let the user's own answers, and anything a `## Handoff Context` block already supplies, close them out.

## Step 1: Assess Current State

First, check what already exists in the project:

| File | Status | What It Means |
|------|--------|---------------|
| `docs/research-*.md` (or `*.txt`) | Check | Research complete |
| `docs/PRD-*.md` | Check | Requirements defined |
| `docs/TechDesign-*.md` | Check | Architecture planned |
| `AGENTS.md` | Check | Ready to build |
| `src/` or `app/` | Check | Building started |

Based on findings, identify where the user is in the workflow. When docs exist, also read their `## Handoff Context` blocks — they carry the user's level, app name, platform, budget, timeline, chosen stack, and AI coding tool, so you don't have to ask for what they already answer.

## Step 2: Guide to Next Step

### If Starting Fresh (No files)

Say:
> **Welcome to the Vibe-Coding Workflow!**
>
> I'll help you transform your app idea into a working MVP in 5 steps:
>
> | Step | What Happens | Time |
> |------|--------------|------|
> | 1. Research | Validate idea & market | 20 min |
> | 2. PRD | Define what to build | 15 min |
> | 3. Tech Design | Plan how to build | 15 min |
> | 4. Agent Config | Generate AI instructions | 10 min |
> | 5. Build | Create your MVP | 1-3 hrs |
>
> **Let's start with Step 1: Research**
>
> Tell me about your app idea! What problem does it solve?

Then guide them through the research phase (see vibe-research skill).

### If Research Exists (has research-*.md or *.txt)

Say:
> **Progress Check:** Research complete!
>
> **Next Step:** Create your Product Requirements Document (PRD)
>
> I found your research at `docs/research-[name].md`. I'll use this to inform your PRD.
>
> Ready to define your product requirements?

Then guide through PRD creation.

### If PRD Exists (has PRD-*.md)

Say:
> **Progress Check:** Research and PRD complete!
>
> **Next Step:** Create your Technical Design
>
> I'll help you decide:
> - What tech stack to use
> - Whether this is a web app, mobile app, desktop app, internal tool, or hybrid
> - How to structure the project
> - Which tools are best for your skill level
> - Whether AI belongs in the product, which provider/runtime fits, and what safety/eval evidence is required
>
> Ready to plan the technical architecture?

Then guide through Tech Design.

### If Tech Design Exists (has TechDesign-*.md)

Say:
> **Progress Check:** Research, PRD, and Tech Design complete!
>
> **Next Step:** Generate AI agent configuration files
>
> I'll create:
> - `AGENTS.md` - Master build plan
> - `MEMORY.md` - Session memory between chats
> - `REVIEW-CHECKLIST.md` - Definition of done (quality + security)
> - `agent_docs/` - Detailed specifications
> - Tool configs, rules, skills, and subagents based on your choices
> - AI/tool permission and evidence requirements when applicable
>
> Which AI tools will you use to build?

Then guide through Agent Config.

> **Shortcut:** if the docs have JSON meta blocks, you can run `npx vibeworkflow init --tools <list>` to scaffold `AGENTS.md`, `agent_docs/`, and tool configs automatically, then `npx vibeworkflow doctor` to verify. The manual flow below works too.

### If AGENTS.md Exists

Say:
> **Progress Check:** All planning complete! Ready to build!
>
> Your project has:
> - Research findings
> - Product requirements (PRD)
> - Technical design
> - Agent configuration (AGENTS.md)
>
> **Let's build your MVP!**
>
> I'll follow the plan in AGENTS.md:
> 1. Set up the project foundation
> 2. Build core features one by one
> 3. Polish and prepare for launch
>
> Shall I start with Phase 1: Foundation?

Then execute the build.

## Workflow State Tracking

Keep track of progress. After each major step:

> **Workflow Progress:**
> - [x] Step 1: Research
> - [x] Step 2: PRD
> - [ ] Step 3: Tech Design <- You are here
> - [ ] Step 4: Agent Config
> - [ ] Step 5: Build MVP

## Handling Interruptions

If user wants to skip a step:

> I recommend completing [step] before moving to [next step] because:
> - [Reason 1]
> - [Reason 2]
>
> However, if you want to proceed anyway, I can work with what we have. Your choice?

## Quick Commands

Remind users they can jump to specific steps:

| Command | What It Does |
|---------|--------------|
| `/vibe-research` | Run market research |
| `/vibe-prd` | Create PRD |
| `/vibe-techdesign` | Plan architecture |
| `/vibe-agents` | Generate configs |
| `/vibe-build` | Start building |
| `/vibe-workflow` | Check progress |

## Completion

When MVP is deployed:

> **Congratulations! Your MVP is live!**
>
> **Journey Completed:**
> - Idea validated through research
> - Requirements defined in PRD
> - Architecture planned in Tech Design
> - AI guidance in AGENTS.md
> - MVP built and deployed
>
> **What's Next:**
> 1. Share with 5-10 beta users
> 2. Collect feedback (use a simple form)
> 3. Identify top 3 improvements
> 4. Plan v2 features
>
> **Remember:** The best time to build was yesterday. The second best time is now. You did it!
