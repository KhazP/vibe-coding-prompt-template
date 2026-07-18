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

**Handoff Context block? Read it first.** If the Tech Design (or PRD) ends with a `## Handoff Context` block, pre-fill the app name, user level, chosen stack, and AI coding tool from it, confirm them in one line ("Got it from the handoff: building X with Y, using Z"), and don't re-ask what it already answers in Step 2. No Handoff Context block? Just ask — older documents won't have it.

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
> 3. Google Antigravity / equivalent (agent-first IDE)
> 4. Cursor (AI-powered IDE)
> 5. VS Code + GitHub Copilot
> 6. Lovable / v0 (no-code)

Then ask:

> **What's your technical level?**
> - A) Vibe-coder
> - B) Developer
> - C) In-between

## Step 3: Instantiate the Templates

This repository ships the canonical templates in `/templates/`. **Read and instantiate them — do NOT write your own versions of these files.**

Copy ALL of these into the project root:

| Template | Destination |
|---|---|
| `templates/AGENTS.md` | `AGENTS.md` |
| `templates/MEMORY.md` | `MEMORY.md` |
| `templates/REVIEW-CHECKLIST.md` | `REVIEW-CHECKLIST.md` |
| `templates/agent_docs/*.md` (all five files) | `agent_docs/` |

Then fill every placeholder using the PRD and Tech Design. Templates use exactly two placeholder kinds:

- `[REPLACE: description]` — fill in with project-specific content.
- `[CHOOSE: option A | option B | option C]` — pick the ONE matching option and delete the rest.

No square-bracket placeholders may remain when you're done.

Key fills:

- **AGENTS.md** — Overview & Stack, Setup & Commands from the Tech Design. Tune the existing behavioral sections (`How I Should Think`, `What NOT To Do`, `Engineering Constraints`) to the user's level — fill, don't create. Fill Roadmap Phase 2 with the PRD's must-have features. Set Current State to "Project setup — nothing built yet".
- **MEMORY.md** — Initialize `## 🏗️ Active Phase & Goal` from the PRD's Phase 1.
- **REVIEW-CHECKLIST.md** — Copy as-is; it has no placeholders.
- **agent_docs/tech_stack.md** — Every library, version, and setup command from the Tech Design, plus short canonical code examples.
- **agent_docs/code_patterns.md** — Resolve the CHOOSE lists (architecture pattern, data fetching, file naming) from the Tech Design.
- **agent_docs/project_brief.md** — Product vision and conventions.
- **agent_docs/product_requirements.md** — Complete feature list (MoSCoW), user stories, and success metrics from the PRD.
- **agent_docs/testing.md** — Test frameworks and commands per the Tech Design.

Resulting structure:

```
project/
├── AGENTS.md                    # Master plan
├── MEMORY.md                    # Session memory
├── REVIEW-CHECKLIST.md          # Definition of done
├── agent_docs/
│   ├── tech_stack.md           # Tech details
│   ├── code_patterns.md        # Code style
│   ├── project_brief.md        # Persistent rules
│   ├── product_requirements.md # PRD summary
│   └── testing.md              # Test strategy
├── CLAUDE.md                   # If Claude Code selected
├── .cursor/rules/vibe.mdc      # If Cursor selected
├── .agent/rules/vibe.md        # If Antigravity selected
└── (Codex needs nothing — it reads AGENTS.md natively)
```

## Step 4: Generate Tool Configs

AGENTS.md is the universal contract — Codex reads it natively, and most modern agents do too. Tool configs are thin adapters that point at it. Ready-to-copy versions live in `templates/tool-adapters/`.

| Tool | File | What it is |
|---|---|---|
| Claude Code | `CLAUDE.md` | 3-line pointer to `AGENTS.md` + `agent_docs/` |
| Codex | — none — | Nothing; `AGENTS.md` is Codex's native instruction file. Optional: `~/.codex/prompts/` for personal slash prompts |
| Antigravity | `.agent/rules/vibe.md` | Always-on workspace rule pointing at `AGENTS.md` |
| Cursor | `.cursor/rules/vibe.mdc` | Rule with `alwaysApply: true` pointing at `AGENTS.md` |
| Any other tool | its custom-instructions feature | "Read AGENTS.md — it is the source of truth for this project." (Gemini CLI users: point it at AGENTS.md the same way.) |

### CLAUDE.md (Claude Code)

```markdown
# CLAUDE.md

Read AGENTS.md first. It is the source of truth for this project: roadmap, commands, rules.
Implementation details live in `agent_docs/` — consult them before coding.
Plan before coding, build one feature at a time, verify before moving on.
```

### .cursor/rules/vibe.mdc (Cursor)

Legacy `.cursorrules` still loads but is deprecated — delete it if one exists.

```markdown
---
description: Vibe-coding project rules — source of truth is AGENTS.md
alwaysApply: true
---

Read AGENTS.md first. It is the source of truth: roadmap, commands, rules. Details live in `agent_docs/`.
- Plan before coding; get approval, then build one feature at a time.
- Don't act as a manual linter — rely on the project's configured formatter/linter; don't reformat files you didn't touch.
- Never delete files or change the database schema without confirmation.
```

### .agent/rules/vibe.md (Antigravity)

Current Antigravity reads `AGENTS.md` natively; this always-on workspace rule reinforces it. Global rules live in `~/.gemini/GEMINI.md`.

```markdown
Read AGENTS.md first. It is the source of truth for this project: roadmap, commands, rules.
Implementation details live in `agent_docs/` — consult them before coding.
Plan before coding, build one feature at a time, verify before moving on.
```

## After Completion

Write all files to the project, then tell the user:

> **Files Created:**
> - `AGENTS.md` - Master plan
> - `MEMORY.md` - Session memory
> - `REVIEW-CHECKLIST.md` - Definition of done
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
> ├── MEMORY.md
> ├── REVIEW-CHECKLIST.md
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
