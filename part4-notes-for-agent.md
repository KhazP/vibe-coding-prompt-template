# Part 4 — Generate AGENTS.md and AI Agent Configuration Files

I'll help you create the instruction files that will guide your AI coding assistant to build your MVP. These files are what make the magic happen!

<details>
<summary><b>Required Documents — Please Attach</b></summary>

### Required:
1. **PRD Document** (from Part 2) — Defines WHAT to build
2. **Technical Design Document** (from Part 3) — Defines HOW to build

### Optional but Helpful:
- **Research Findings** (from Part 1) — Additional context

Attach these in any format (.txt, .pdf, .docx, .md) or paste if short.

</details>

After attaching your files, confirm your setup:

**A) Technical Level:**
- A) **Vibe-coder** — AI does everything, I guide and test
- B) **Developer** — I code with AI assistance
- C) **Somewhere in between** — Learning while building

**B) Which AI Tool(s) Will You Use?** (Can select multiple)
1. **Claude Code** — Terminal-based agent with session memory
2. **Codex** — OpenAI's agent (CLI, IDE extension, or cloud)
3. **Google Antigravity / equivalent** — Agent-first IDE (availability may vary)
4. **Cursor** — AI-powered IDE
5. **Gemini CLI** — Free terminal agent
6. **VS Code + GitHub Copilot** — IDE with AI extension
7. **Lovable / v0** — No-code platforms

Please attach files and type: A/B/C and tool numbers (e.g., "A, 1,4"):

(If your attached documents end with a **Handoff Context** block, the assistant will pre-fill these answers for you — just confirm.)

---

## Instructions for AI Assistant

<details>
<summary><b>Generation Rules & Logic</b></summary>

### Handoff Context (Read This First)
If an attached document ends with a `## Handoff Context` block (Parts 1–3 append one), read it before anything else. It already states the app name, user level, chosen stack, target platform, budget, timeline, AI coding tool, and source files. Pre-fill those answers, confirm them to the user in one line ("Got it from the handoff: building X with Y, using Z"), and don't re-ask what it already answers.

### Your Goal
You are an expert Tech Lead setting up a **Progressive Disclosure** documentation system for an AI Agent. Your output must be **modular** to prevent context window overload.

1. **Master Plan (`AGENTS.md`)**: High-level context, roadmap, and active state.
2. **Memory & Quality Gates (`MEMORY.md`, `REVIEW-CHECKLIST.md`)**: Session continuity and the definition of done.
3. **Detailed Docs (`agent_docs/`)**: Specific implementation details.
4. **Tool Configs**: Concise pointers to the above.

### Content Extraction Guidelines
- **From PRD:** Extract exact feature names, user stories, success metrics, and constraints.
- **From Tech Design:** Extract exact tech stack, architecture decisions, and implementation approaches.
- **Language Level:** Adjust explanations in `agent_docs/` based on user's technical level (A/B/C).
  - **Level A (Vibe-coder):** Explain *concepts* simply, focus on "what to do next".
  - **Level B (Developer):** Focus on *architecture*, patterns, and best practices.
- **Be Specific:** Resolve every placeholder with actual project details (see the placeholder rule in the instantiation steps below).
- **Keep Examples:** Include code examples with comments explaining the "why".

### Behavioral Sections (Fill, Don't Create)
`templates/AGENTS.md` already ships with `## How I Should Think`, `## What NOT To Do`, `## Engineering Constraints`, `## Current State`, and `## Roadmap` sections. Do NOT invent new section names — fill and tune the existing ones:

- **How I Should Think:** Keep the Plan → Execute → Verify discipline (see below). Tune the tone to the user's level: short and plain for Level A; full rigor for Level B.
- **What NOT To Do:** Keep the defaults (no deleting files without confirmation, no schema changes without a backup plan, no out-of-phase features, no skipping tests, no bypassing hooks, no deprecated libraries). Add project-specific items only if the PRD/Tech Design calls for them.
- **Engineering Constraints:** For Level B (developer) projects, keep the full set (type safety, architectural sovereignty, library governance, workflow discipline). For Level A, you may simplify the wording — but never delete the type-safety and verification rules.
- **Roadmap:** Fill Phase 2 with the exact must-have features from the PRD; adjust the other phases to fit the project.
- **Current State:** Initialize to "Project setup — nothing built yet".

### Plan → Execute → Verify (Required)
The `## How I Should Think` section must preserve this loop:
- **Plan:** Outline a brief approach and ask for approval before coding.
- **Plan Mode:** If the tool supports Plan/Reflect mode, use it for this step.
- **Execute:** Implement one feature at a time.
- **Verify:** Run tests/linters or manual checks after each feature; fix before moving on.

### Context & Memory Guidance
- Treat `AGENTS.md`, `MEMORY.md`, and `agent_docs/` as living docs.
- Use tool config files (`CLAUDE.md`, `.cursor/rules/`, `.agent/rules/`, or legacy `.cursorrules`, etc.) for persistent project rules.
- Update these files as the project scales (commands, conventions, constraints).
- Avoid restarting in empty chats during implementation; summarize/compact first.

### Plugin Support (Recommended)
- If your IDE supports agent plugins, prefer plugin/rules packages over one-off manual setup.
- Verify plugin load status before implementation work.
- If behavior seems wrong: confirm loaded prompts/skills/hooks first, then retry with "Read AGENTS.md first".

### Optional Multi-Agent/Parallel Work
- If your tool supports subagents or parallel agents, delegate exploration or test checks to speed up work — assign clear roles and require a plan before edits.

### Checkpoints & Pre-Commit Hooks
- Create checkpoints/commits after milestones.
- Use pre-commit hooks to enforce formatting, linting, and tests where applicable.

### "Less is More" for Configs
- Do **NOT** put giant prompt dumps into `CLAUDE.md` or Cursor rules files.
- Instead, put that content into `agent_docs/code_patterns.md` or `agent_docs/tech_stack.md`.
- The config files should merely *point* the AI to the right documentation.

### Model Naming Policy
- Use model family names (Claude Sonnet, Claude Opus, Gemini Pro, Gemini Flash) in generated docs unless the user explicitly asks for pinned versions.

</details>

After receiving the files, extract the following:

**From PRD (MUST EXTRACT):**
- Product name and one-line description
- Primary user story (exact text)
- All must-have features (exact list)
- Nice-to-have features (exact list, if the PRD has them)
- Out-of-scope features — everything under `## Out of Scope (Not in MVP)` (exact list)
- Success metrics (all of them)
- UI/UX requirements (design words/vibe)
- Timeline and constraints

**From Tech Design (MUST EXTRACT):**
- Complete tech stack (frontend, backend, database, deployment)
- Project structure (the folder layout under `## Project Structure`)
- Data model / database schema (`## Data Model` or `## Database & Data Storage`, if provided)
- Implementation approach for each feature
- Deployment platform and steps
- Budget constraints (the cost section)
- AI tool recommendations (if provided)

---

## 🎯 Action Required: Instantiate the Templates

Your workflow is governed by the `vibe-coding-prompt-template`. This repository comes with a pre-configured `/templates/` directory containing the 2026 Boilerplate.

Your task is to **copy every template** to the project root and **fill in every placeholder** using the provided PRD and Tech Design. Do not invent new structures, and do not write your own versions of these files.

### Step 0 — Figure Out Where You're Running

- **IDE mode (primary path):** The user cloned this repository and opened it in an AI IDE, so you can read `/templates/` directly from the workspace. Proceed to Step 1.
- **Chat mode:** The user pasted this file into a chat and you have no file access. Ask them to upload the contents of the `/templates/` folder (`AGENTS.md`, `MEMORY.md`, `REVIEW-CHECKLIST.md`, and everything inside `agent_docs/`) alongside their PRD and Tech Design. Wait until you have them — do NOT recreate the templates from memory.

### Step 1 — Copy Every Template

Copy ALL of these into the project root — no skipping:

| Template | Destination |
|---|---|
| `templates/AGENTS.md` | `AGENTS.md` |
| `templates/MEMORY.md` | `MEMORY.md` |
| `templates/REVIEW-CHECKLIST.md` | `REVIEW-CHECKLIST.md` |
| `templates/agent_docs/tech_stack.md` | `agent_docs/tech_stack.md` |
| `templates/agent_docs/code_patterns.md` | `agent_docs/code_patterns.md` |
| `templates/agent_docs/project_brief.md` | `agent_docs/project_brief.md` |
| `templates/agent_docs/product_requirements.md` | `agent_docs/product_requirements.md` |
| `templates/agent_docs/testing.md` | `agent_docs/testing.md` |

(In chat mode, output each file's full contents in its own labeled code block so the user can save them to the matching location.)

### Step 2 — Fill Every Placeholder

Templates use exactly two kinds of placeholders:

- **`[REPLACE: description]`** — fill in with real, project-specific content from the PRD / Tech Design.
- **`[CHOOSE: option A | option B | option C]`** — pick the ONE option that matches the Tech Design and delete the rest.

Italic hints like *(e.g. ...)* are examples to guide you — keep them if useful, swap in real ones where you can. When you're done, **no square-bracket placeholders may remain** in any file.

File by file:

- **`AGENTS.md`** — Fill Project Overview & Stack and Setup & Commands from the Tech Design. Tune the behavioral sections per the Generation Rules above (fill, don't create). Fill Roadmap Phase 2 with the PRD's must-have features. Set Current State to "Project setup — nothing built yet".
- **`MEMORY.md`** — Initialize `## 🏗️ Active Phase & Goal` based on the PRD's Phase 1.
- **`REVIEW-CHECKLIST.md`** — Copy as-is; it has no placeholders.
- **`agent_docs/tech_stack.md`** — Insert the exact languages, frameworks, versions, and setup commands from the Tech Design, plus short canonical code examples.
- **`agent_docs/code_patterns.md`** — Resolve the CHOOSE lists (architecture pattern, data fetching, file naming) from the Tech Design; fill in the state management tools.
- **`agent_docs/project_brief.md`** — Insert the vision and core conventions.
- **`agent_docs/product_requirements.md`** — Dump the complete feature list (MoSCoW), user stories, and success metrics from the PRD.
- **`agent_docs/testing.md`** — Define the test frameworks and commands as specified in the Tech Design.

### Step 3 — Generate Tool Configs

Generate the configuration files for the user's selected tools from the next section, then go straight to the Final Instructions and STOP.

---

## Generate Tool-Specific Configuration Files

**AGENTS.md is the universal contract.** The user already has it from the instantiation step — Codex reads it natively, and most modern agents (Claude Code, Cursor, Antigravity) do too. Everything else is a thin adapter that points the tool at AGENTS.md. No duplicated prompt dumps.

| Tool | File(s) to create | What it contains | Notes |
|---|---|---|---|
| **Claude Code** | `CLAUDE.md` | 3-line pointer to `AGENTS.md` + `agent_docs/` | Auto-loaded every session. Hooks live in `.claude/settings.json`. |
| **Codex** (CLI / IDE / cloud) | — none — | Nothing. `AGENTS.md` is Codex's native instruction file. | Optional power-user tip: personal reusable prompts go in `~/.codex/prompts/`. |
| **Antigravity** | `.agent/rules/vibe.md` | Always-on workspace rule pointing at `AGENTS.md` | Current Antigravity reads `AGENTS.md` natively; this rule reinforces it. Global rules live in `~/.gemini/GEMINI.md`. |
| **Cursor** | `.cursor/rules/vibe.mdc` | Rule with `alwaysApply: true` pointing at `AGENTS.md`, plus the 3 critical rules | Legacy `.cursorrules` still loads but is deprecated — delete it if one exists. |
| **Any other tool** (Gemini CLI, Copilot, Windsurf, Lovable…) | Its custom-instructions feature | Paste: "Read AGENTS.md — it is the source of truth for this project. Details in `agent_docs/`." | `AGENTS.md` is an open standard; most agents read it or can be pointed at it. |

Generate only the files for the user's selected tools, using the contents below. (IDE-mode shortcut: these exact files also ship in `templates/tool-adapters/` — copy them instead of retyping.)

Optional: six `/vibe-*` stage commands (research → build) also ship in `templates/tool-adapters/<tool>/commands|workflows|prompts/` — copy them to `.cursor/commands/`, `.agent/workflows/`, or `~/.codex/prompts/` for the same guided flow the Claude Code skills provide. (Chat mode: no file access needed — the user can just ask for these files and paste them where their tool expects them.)

**`CLAUDE.md`** — Claude Code:

```markdown
# CLAUDE.md

Read AGENTS.md first. It is the source of truth for this project: roadmap, commands, rules.
Implementation details live in `agent_docs/` — consult them before coding.
Plan before coding, build one feature at a time, verify before moving on.
```

**`.cursor/rules/vibe.mdc`** — Cursor:

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

**`.agent/rules/vibe.md`** — Antigravity:

```markdown
Read AGENTS.md first. It is the source of truth for this project: roadmap, commands, rules.
Implementation details live in `agent_docs/` — consult them before coding.
Plan before coding, build one feature at a time, verify before moving on.
```

---

## Final Instructions — STOP Here

After every template is instantiated and the tool configs for the user's selection are generated, you MUST stop. Say exactly:

> **"Templates instantiated! You can now start the coding loop. Shall we begin Phase 1?"**

Then give the user this summary (adapt the bracketed parts, keep the rest):

"I've created your AI agent instruction files! Here's the recap:

## What Was Created:

1. **AGENTS.md** — the master plan every AI assistant reads first
2. **MEMORY.md** — session memory, so nothing gets forgotten between chats
3. **REVIEW-CHECKLIST.md** — the definition of done (quality + security checks)
4. **agent_docs/** — detailed docs: `tech_stack.md`, `code_patterns.md`, `project_brief.md`, `product_requirements.md`, `testing.md`
5. **Tool configs:** [list the specific files generated based on their selection]

(If we're in a chat without file access: save each file above into the matching location in your project folder.)

## Your Project Structure Should Now Look Like:

```
your-app/
├── docs/
│   ├── research-[AppName].md
│   ├── PRD-[AppName]-MVP.md
│   └── TechDesign-[AppName]-MVP.md
├── AGENTS.md                    ← Universal instructions (master plan)
├── MEMORY.md                    ← Session memory
├── REVIEW-CHECKLIST.md          ← Definition of done
├── agent_docs/                  ← Detailed documentation
│   ├── tech_stack.md
│   ├── code_patterns.md
│   ├── project_brief.md
│   ├── product_requirements.md
│   └── testing.md
├── [Tool-specific files]        ← Based on your selection
├── specs/                       ← Feature specs (created during the build)
└── (your code will go here)
```

## Ready to Build! Here's How to Start:

### With [Their Primary Tool]:

[Provide specific starting instructions based on their main tool choice, for example:]

#### If Claude Code:
```bash
cd your-project
claude init  # If first time
claude
# Then say: "Read CLAUDE.md and AGENTS.md, then start building the MVP"
```

#### If Cursor:
1. Open your project folder in Cursor
2. Ensure `.cursor/rules/` (or legacy `.cursorrules`) is detected
3. Start with: "Read AGENTS.md and begin implementing the MVP step by step"

#### If Lovable/v0:
1. Go to [platform]
2. Create new project
3. Paste your PRD content
4. Say: "Build this following the specifications"

#### If Codex:
```bash
cd your-project
codex
# Then say: "Read AGENTS.md and start building the MVP"
```

#### If Gemini CLI:
```bash
gemini "Read AGENTS.md, then implement the MVP"
```

#### If Antigravity / equivalent agent-first IDE:
1. Open the project in your selected agent-first IDE
2. Ensure `.agent/rules/vibe.md` is in place (Antigravity also reads AGENTS.md natively)
3. Start with: "Read AGENTS.md and begin"

## Your First Prompts:

Based on your level ([their level]), start with:

**First prompt:**
"[Suggested first prompt based on their level and tool]"

**Follow-up prompts:**
- "Show me the current progress"
- "Test [feature name] and fix any issues"
- "Set up pre-commit hooks for lint/tests and keep them updated as the project scales"
- "Make it work on mobile"
- "Add error handling"
- "Deploy to [platform from Tech Design]"

## Success Checklist:

Your setup is complete when:
- [ ] All files saved in correct locations
- [ ] Project folder created
- [ ] AI tool opened and ready
- [ ] First prompt typed and ready to send

## Remember:

- The AI will handle the complex coding
- You guide the direction and test the results
- Start simple, add features incrementally
- Test after each feature
- For frontend projects, require browser-based verification before marking tasks complete
- Run a dedicated security pass before deployment (`REVIEW-CHECKLIST.md` has the list)
- Update AGENTS.md, MEMORY.md, and tool configs as the project scales
- Don't hesitate to ask for explanations

**You're ready to build! Your AI assistant has all the context it needs. Just start the conversation and watch your MVP come to life!**

<details>
<summary><b>Troubleshooting</b></summary>

**If AI seems confused:**
- Start with: "First, read AGENTS.md completely, then confirm you understand the project"

**If AI skips steps:**
- Say: "Let's go slower. Implement just [specific feature] and show me how to test it"

**If you get errors:**
- Say: "I got this error: [error]. Please explain what it means and how to fix it"

**If AI overcomplicates:**
- Say: "That seems complex. What's the simplest way to make this work for an MVP?"

</details>

Would you like me to adjust any of the instructions before you start building?"

---
