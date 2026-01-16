---
name: vibe-agents
description: Generate AGENTS.md and AI configuration files for your project. Use when the user wants to create agent instructions, set up AI configs, or says "create AGENTS.md", "configure my AI assistant", or "generate agent files".
allowed-tools: Read, Write, Glob, Grep, AskUserQuestion
---

# Vibe-Coding Agent Configuration Generator

You are helping the user create AGENTS.md and tool-specific configuration files. This is Step 4 of the vibe-coding workflow.

## Your Role

Generate the instruction files that guide AI coding assistants to build the MVP. Use progressive disclosure - master plan in AGENTS.md, details in agent_docs/.

## Prerequisites

1. Look for `docs/PRD-*.md` - REQUIRED
2. Look for `docs/TechDesign-*.md` - REQUIRED
3. If either is missing, suggest running the appropriate skill first

## Step 1: Load Context

Extract from documents:

**From PRD:**
- Product name and description
- Primary user story
- All must-have features
- Nice-to-have and excluded features
- Success metrics
- UI/UX requirements
- Timeline and constraints

**From Tech Design:**
- Complete tech stack
- Project structure
- Database schema
- Implementation approach
- Deployment platform
- AI tool recommendations

## Step 2: Ask Configuration Questions

Ask the user:

> **Which AI tools will you use?** (Select all that apply)
> 1. Claude Code (terminal-based)
> 2. Gemini CLI (free terminal agent)
> 3. Google Antigravity (agent-first IDE)
> 4. Cursor (AI-powered IDE)
> 5. VS Code + GitHub Copilot
> 6. Lovable / v0 (no-code)

Then ask:

> **What's your technical level?**
> - A) Vibe-coder
> - B) Developer
> - C) In-between

## Step 3: Generate Files

Create the following structure:

```
project/
├── AGENTS.md                    # Master plan
├── agent_docs/
│   ├── tech_stack.md           # Tech details
│   ├── code_patterns.md        # Code style
│   ├── project_brief.md        # Persistent rules
│   ├── product_requirements.md # PRD summary
│   └── testing.md              # Test strategy
├── CLAUDE.md                   # If Claude Code selected
├── GEMINI.md                   # If Gemini/Antigravity selected
├── .cursorrules                # If Cursor selected
└── .github/copilot-instructions.md  # If Copilot selected
```

## AGENTS.md Template

```markdown
# AGENTS.md - Master Plan for [App Name]

## Project Overview
**App:** [Name]
**Goal:** [One-liner]
**Stack:** [Tech stack]
**Current Phase:** Phase 1 - Foundation

## How I Should Think
1. **Understand Intent First**: Identify what the user actually needs
2. **Ask If Unsure**: If critical info is missing, ask before proceeding
3. **Plan Before Coding**: Propose a plan, get approval, then implement
4. **Verify After Changes**: Run tests/checks after each change
5. **Explain Trade-offs**: When recommending, mention alternatives

## Plan -> Execute -> Verify
1. **Plan:** Outline approach, ask for approval
2. **Execute:** One feature at a time
3. **Verify:** Run tests/checks, fix before moving on

## Context Files
Load only when needed:
- `agent_docs/tech_stack.md` - Tech details
- `agent_docs/code_patterns.md` - Code style
- `agent_docs/project_brief.md` - Project rules
- `agent_docs/product_requirements.md` - Requirements
- `agent_docs/testing.md` - Test strategy

## Current State
**Last Updated:** [Date]
**Working On:** [Task]
**Recently Completed:** None yet
**Blocked By:** None

## Roadmap

### Phase 1: Foundation
- [ ] Initialize project
- [ ] Setup database
- [ ] Configure auth

### Phase 2: Core Features
- [ ] [Feature 1 from PRD]
- [ ] [Feature 2 from PRD]
- [ ] [Feature 3 from PRD]

### Phase 3: Polish
- [ ] Error handling
- [ ] Mobile responsiveness
- [ ] Performance optimization

### Phase 4: Launch
- [ ] Deploy to production
- [ ] Setup monitoring
- [ ] Launch checklist

## What NOT To Do
- Do NOT delete files without confirmation
- Do NOT modify database schemas without backup plan
- Do NOT add features not in current phase
- Do NOT skip tests for "simple" changes
- Do NOT use deprecated libraries
```

## Tool Config Templates

### CLAUDE.md (Claude Code)

```markdown
# CLAUDE.md - Claude Code Configuration

## Project Context
**App:** [Name]
**Stack:** [Stack]
**Stage:** MVP Development

## Directives
1. **Master Plan:** Read `AGENTS.md` first for current phase and tasks
2. **Documentation:** Refer to `agent_docs/` for details
3. **Plan-First:** Propose plan, wait for approval
4. **Incremental:** One feature at a time, test frequently
5. **Concise:** Be brief, ask clarifying questions when needed

## Commands
- `npm run dev` - Start server
- `npm test` - Run tests
- `npm run lint` - Check code style
```

### .cursorrules (Cursor)

```markdown
# Cursor Rules for [App Name]

## Project Context
**App:** [Name]
**Stack:** [Stack]
**Stage:** MVP Development

## Directives
1. Read `AGENTS.md` first
2. Refer to `agent_docs/` for details
3. Plan before coding
4. Build incrementally
5. Test frequently

## Commands
- `npm run dev` - Start server
- `npm test` - Run tests
```

### GEMINI.md (Gemini CLI / Antigravity)

```markdown
# GEMINI.md - Gemini Configuration

## Project Context
**App:** [Name]
**Stack:** [Stack]

## Directives
1. Read `AGENTS.md` first
2. Use `agent_docs/` for details
3. Plan, then execute
4. Build incrementally
```

## agent_docs/ Files

Generate each file with content from PRD and Tech Design:

- **tech_stack.md**: List every library, version, setup commands, code examples
- **code_patterns.md**: Naming conventions, file structure, error handling patterns
- **project_brief.md**: Product vision, coding conventions, quality gates, key commands
- **product_requirements.md**: Core requirements, user stories, success metrics
- **testing.md**: Test strategy, tools, verification loop, pre-commit hooks

## After Completion

Write all files to the project, then tell the user:

> **Files Created:**
> - `AGENTS.md` - Master plan
> - `agent_docs/` - Detailed documentation
> - [Tool-specific configs based on selection]
>
> **Project Structure:**
> ```
> your-app/
> ├── docs/
> │   ├── research-[App].txt
> │   ├── PRD-[App]-MVP.md
> │   └── TechDesign-[App]-MVP.md
> ├── AGENTS.md
> ├── agent_docs/
> │   ├── tech_stack.md
> │   ├── code_patterns.md
> │   ├── project_brief.md
> │   ├── product_requirements.md
> │   └── testing.md
> └── [tool configs]
> ```
>
> **Next Step:** Run `/vibe-build` to start building your MVP, or say "Build my MVP following AGENTS.md"
