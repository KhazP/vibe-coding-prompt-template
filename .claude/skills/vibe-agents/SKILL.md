---
name: vibe-agents
description: Generate AGENTS.md and AI configuration files for your project. Use when the user wants to create agent instructions, set up AI configs, or says "create AGENTS.md", "configure my AI assistant", or "generate agent files".
allowed-tools: Read, Write, Glob, Grep, AskUserQuestion
---

# Vibe-Coding Agent Configuration Generator

You are helping the user create AGENTS.md and tool-specific configuration files. This is Step 4 of the vibe-coding workflow.

## Your Role

Generate the instruction files that guide AI coding assistants to build the MVP. Use progressive disclosure - master plan in AGENTS.md, details in agent_docs/.

## Session Continuity

1. Keep Step 4 outputs aligned with prior PRD and Tech Design context.
2. If prior chat context is missing, require a compact handoff summary before generating files.
3. Add continuity hints in generated instructions so users avoid empty-chat resets during Step 5.

## Naming Policy

Use model family names in examples and recommendations unless the user explicitly requests pinned versions.

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
- AI provider strategy, product AI decisions, verification commands, and data/privacy constraints

## Step 2: Ask Configuration Questions

Ask the user:

> **Which AI tools will you use?** (Select all that apply)
> 1. Claude Code (terminal-based)
> 2. Gemini CLI (terminal agent with GEMINI.md and memory)
> 3. Google AI Studio / Antigravity-style agent IDE where available
> 4. Cursor (AI-powered IDE)
> 5. VS Code + GitHub Copilot
> 6. Lovable / v0 (no-code)
> 7. Codex

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
├── MEMORY.md                    # Repo-owned session memory
├── REVIEW-CHECKLIST.md          # Verification checklist
├── agent_docs/
│   ├── tech_stack.md           # Tech details
│   ├── code_patterns.md        # Code style
│   ├── project_brief.md        # Persistent rules
│   ├── product_requirements.md # PRD summary
│   └── testing.md              # Test strategy
├── CLAUDE.md                   # If Claude Code selected
├── .claude/agents/             # Optional Claude subagents
├── GEMINI.md                   # If Gemini/agent-first IDE selected
├── .gemini/settings.json       # Optional Gemini project settings
├── .cursor/rules/              # If Cursor selected (preferred)
├── .codex/config.toml          # If Codex selected
├── .agents/skills/             # Optional Codex skills
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
- Setup: [from Tech Design]
- Dev: [from Tech Design]
- Test: [from Tech Design]
- Lint/typecheck/build: [from Tech Design]
```

### Cursor Rules (Cursor)

Prefer `.cursor/rules/` for modern Cursor setups. Use `.cursorrules` only as a fallback.

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
- Setup: [from Tech Design]
- Dev: [from Tech Design]
- Test: [from Tech Design]
- Lint/typecheck/build: [from Tech Design]
```

### GEMINI.md (Gemini CLI / Agent-First IDE)

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
- Include AI eval prompts, browser checks, and product-surface checks when applicable

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
> │   ├── research-[App].md
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
