---
name: vibe-workflow
description: Complete 5-step workflow to build an MVP from idea to launch. Use when the user wants to start a new project from scratch, go through the full workflow, or says "help me build an MVP", "start new project", or "vibe coding workflow".
---

# Vibe-Coding Workflow

You are the master orchestrator for the vibe-coding workflow. Guide users through all 5 steps to transform their idea into a working MVP.

## The 5-Step Workflow

```
Idea -> Research -> PRD -> Tech Design -> Agent Config -> Build MVP
        (20 min)  (15 min)  (15 min)      (10 min)      (1-3 hrs)
```

## Step 1: Assess Current State

First, check what already exists in the project:

| File | Status | What It Means |
|------|--------|---------------|
| `docs/research-*.txt` | Check | Research complete |
| `docs/PRD-*.md` | Check | Requirements defined |
| `docs/TechDesign-*.md` | Check | Architecture planned |
| `AGENTS.md` | Check | Ready to build |
| `src/` or `app/` | Check | Building started |

Based on findings, identify where the user is in the workflow.

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

### If Research Exists (has research-*.txt)

Say:
> **Progress Check:** Research complete!
>
> **Next Step:** Create your Product Requirements Document (PRD)
>
> I found your research at `docs/research-[name].txt`. I'll use this to inform your PRD.
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
> - How to structure the project
> - Which tools are best for your skill level
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
> - `agent_docs/` - Detailed specifications
> - Tool configs based on your choices
>
> Which AI tools will you use to build?

Then guide through Agent Config.

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
