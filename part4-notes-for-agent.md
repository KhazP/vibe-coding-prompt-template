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
2. **Gemini CLI** — Free terminal agent
3. **Google Antigravity / equivalent** — Agent-first IDE (availability may vary)
4. **Cursor** — AI-powered IDE
5. **VS Code + GitHub Copilot** — IDE with AI extension
6. **Lovable / v0** — No-code platforms

Please attach files and type: A/B/C and tool numbers (e.g., "A, 1,4"):

---

## Instructions for AI Assistant

<details>
<summary><b>Generation Rules & Logic</b></summary>

### Your Goal
You are an expert Tech Lead setting up a **Progressive Disclosure** documentation system for an AI Agent. Your output must be **modular** to prevent context window overload.

1. **Master Plan (`AGENTS.md`)**: High-level context, roadmap, and active state.
2. **Detailed Docs (`agent_docs/`)**: Specific implementation details.
3. **Tool Configs**: Concise pointers to the above.

### Content Extraction Guidelines
- **From PRD:** Extract exact feature names, user stories, success metrics, and constraints.
- **From Tech Design:** Extract exact tech stack, architecture decisions, and implementation approaches.
- **Language Level:** Adjust explanations in `agent_docs/` based on user's technical level (A/B/C).
  - **Level A (Vibe-coder):** Explain *concepts* simply, focus on "what to do next".
  - **Level B (Developer):** Focus on *architecture*, patterns, and best practices.
- **Be Specific:** Replace all bracketed placeholders with actual project details.
- **Keep Examples:** Include code examples with comments explaining the "why".

### High-Order Prompts (Meta-Cognition)
Include these behavioral instructions in AGENTS.md to improve agent reasoning:

```markdown
## How I Should Think
1. **Understand Intent First**: Before answering, identify what the user actually needs
2. **Ask If Unsure**: If critical information is missing, ask before proceeding
3. **Plan Before Coding**: Propose a plan, ask for approval, then implement
4. **Verify After Changes**: Run tests/linters or manual checks after each change
5. **Explain Trade-offs**: When recommending something, mention alternatives
```

### Plan → Execute → Verify (Required)
- **Plan:** Outline a brief approach and ask for approval before coding.
- **Plan Mode:** If the tool supports Plan/Reflect mode, use it for this step.
- **Execute:** Implement one feature at a time.
- **Verify:** Run tests/linters or manual checks after each feature; fix before moving on.

### Context & Memory Guidance
- Treat `AGENTS.md` and `agent_docs/` as living docs.
- Use tool config files (`CLAUDE.md`, `GEMINI.md`, `.cursor/rules/` or legacy `.cursorrules`, etc.) for persistent project rules.
- Update these files as the project scales (commands, conventions, constraints).
- Avoid restarting in empty chats during implementation; summarize/compact first.

### Plugin Support (Recommended)
- If your IDE supports agent plugins, prefer plugin/rules packages over one-off manual setup.
- Verify plugin load status before implementation work.
- If behavior seems wrong: confirm loaded prompts/skills/hooks first, then retry with "Read AGENTS.md first".

### Optional Multi-Agent/Parallel Work
- If the tool supports sub-agents or parallel search, delegate exploration or test checks to speed up work.

### Checkpoints & Pre-Commit Hooks
- Create checkpoints/commits after milestones.
- Use pre-commit hooks to enforce formatting, linting, and tests where applicable.

### Anti-Patterns to Include
Add these to tool configs to prevent common AI mistakes:

```markdown
## What NOT To Do
- Do NOT delete files without explicit confirmation
- Do NOT modify database schemas without backup plan
- Do NOT add features not in the current phase
- Do NOT skip tests for "simple" changes
- Do NOT bypass failing tests or pre-commit hooks
- Do NOT use deprecated libraries or patterns
```

### Strict Anti-Vibe Engineering Rules
For developer-level projects, add these to enforce production quality:

```markdown
## Engineering Constraints

### Type Safety (No Compromises)
- The `any` type is FORBIDDEN—use `unknown` with type guards
- All function parameters and returns must be typed
- Use Zod or similar for runtime validation

### Architectural Sovereignty
- Routes/controllers handle request/response ONLY
- All business logic goes in `services/` or `core/`
- No database calls from route handlers

### Library Governance
- Check existing `package.json` before suggesting new dependencies
- Prefer native APIs over libraries (fetch over axios)
- No deprecated patterns (useEffect for data → use TanStack Query)

### The "No Apologies" Rule
- Do NOT apologize for errors—fix them immediately
- Do NOT generate filler text before providing solutions
- If context is missing, ask ONE specific clarifying question

### Workflow Discipline
- Pre-commit hooks must pass before commits (or ask if they should be bypassed)
- If verification fails, fix issues before continuing
```

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
- Nice-to-have features (exact list)
- NOT in MVP features (exact list)
- Success metrics (all of them)
- UI/UX requirements (design words/vibe)
- Timeline and constraints

**From Tech Design (MUST EXTRACT):**
- Complete tech stack (frontend, backend, database, deployment)
- Project structure (exact folder layout)
- Database schema (if provided)
- Implementation approach for each feature
- Deployment platform and steps
- Budget constraints
- AI tool recommendations

---

## 🎯 Action Required: Instantiate the Templates

Your workflow is governed by the `vibe-coding-prompt-template`. This repository comes with a pre-configured `/templates/` directory containing the 2026 Boilerplate. 

Your task is to **copy** these templates to the project root and **fill in the bracketed variables** using the provided PRD and Tech Design. Do not invent new structures.

### 1. Root Files
- Copy `templates/AGENTS.md` to `AGENTS.md` in the root folder. Replace all `[bracketed]` variables with project-specific details from the Tech Design.
- Copy `templates/MEMORY.md` to `MEMORY.md` in the root folder. Initialize the `## 🏗️ Active Phase & Goal` based on the PRD's Phase 1.
- Copy `templates/REVIEW-CHECKLIST.md` to the root folder as-is.

### 2. Documentation Folder
- Copy the entire `templates/agent_docs/` folder to `agent_docs/` in the project root.
- Open `agent_docs/tech_stack.md` and insert the explicit languages, frameworks, and setup commands from the Tech Design.
- Open `agent_docs/testing.md` and define the test framework as specified.
- Open `agent_docs/project_brief.md` and insert the vision and core conventions.
- Open `agent_docs/product_requirements.md` and dump the complete feature list and user stories from the PRD.

---

Once completed, you the Agent must stop and say: 
> *"Templates instantiated! You can now start the coding loop. Shall we begin Phase 1?"*
Create a folder named `agent_docs` and add these files. **Fill them with RICH DETAIL from the source documents.**

#### `agent_docs/tech_stack.md`
*Instructions: List every library, version, and setup command from the Tech Design.*
```markdown
# Tech Stack & Tools
- **Frontend:** [Framework]
- **Backend:** [Framework]
- **Database:** [Database]
- **Styling:** [Library]

// [Example component code for their stack]
```

## Error Handling
```javascript
// [Example error handling pattern]
```

## Naming Conventions
- [List conventions]
```

#### `agent_docs/project_brief.md`
*Instructions: Capture persistent project rules, conventions, and workflow expectations. Keep this updated as the project scales.*
```markdown
# Project Brief (Persistent)
- **Product vision:** [One-line summary]
- **Coding conventions:** [Naming, formatting, architecture]
- **Quality gates:** [Tests, pre-commit hooks, review rules]
- **Key commands:** [Dev/test/build commands]
- **Update cadence:** [When to refresh this brief]
```

#### `agent_docs/product_requirements.md`
*Instructions: Copy the core requirements, user stories, and success metrics from the PRD.*
```markdown
# Product Requirements
[Content from PRD]
```

#### `agent_docs/testing.md`
*Instructions: Define the testing strategy based on the Tech Design.*
```markdown
# Testing Strategy
- **Unit Tests:** [Tool]
- **E2E Tests:** [Tool]
- **Manual Checks:** [List]
- **Pre-commit Hooks:** [Lint/format/tests to run before commit]
- **Verification Loop:** Run checks after each feature and fix failures
```

#### `agent_docs/resources.md`
*Instructions: Include for developer-level projects with references to advanced patterns.*
```markdown
# Essential Resources

## Curated Repositories
| Repository | Purpose |
|------------|---------|
| **PatrickJS/awesome-cursorrules** | Anti-vibe rule templates |
| **OneRedOak/claude-code-workflows** | Review workflow packs |
| **matebenyovszky/healing-agent** | Self-healing Python patterns |
| **modelcontextprotocol/servers** | MCP server implementations |

## Key Documentation
- **MCP Protocol:** modelcontextprotocol.io
- **Playwright Testing:** playwright.dev/docs
- **AI Prompting Patterns:** See v0.dev system prompt patterns
```

---

## Generate Tool-Specific Configuration Files

Based on the tools they selected, generate the appropriate configuration files below. Each file should reference the AGENTS.md as the primary source of truth and add tool-specific behavior and commands.

### For Claude Code Users — CLAUDE.md:

```markdown
# CLAUDE.md — Claude Code Configuration for [App Name]

## Project Context
**App:** [App Name]
**Stack:** [Tech Stack]
**Stage:** MVP Development
**User Level:** [Level]

## Directives
1. **Master Plan:** Always read `AGENTS.md` first. It contains the current phase and tasks.
2. **Documentation:** Refer to `agent_docs/` for tech stack details, code patterns, and testing guides.
3. **Plan-First:** Propose a brief plan and wait for approval before coding.
4. **Incremental Build:** Build one small feature at a time. Test frequently.
5. **Pre-Commit:** If hooks exist, run them before commits; fix failures.
6. **No Linting:** Do not act as a linter. Use `npm run lint` if needed.
7. **Communication:** Be concise. Ask clarifying questions when needed.

## Commands
- `npm run dev` — Start server
- `npm test` — Run tests
- `npm run lint` — Check code style
```

### For Cursor Users — .cursorrules:

Prefer `.cursor/rules/` for modern Cursor setups. If needed, generate legacy `.cursorrules` as a compatibility fallback.

```markdown
# Cursor Rules for [App Name]

## Project Context
**App:** [App Name]
**Stack:** [Tech Stack]
**Stage:** MVP Development
**User Level:** [Level]

## Directives
1. **Master Plan:** Always read `AGENTS.md` first. It contains the current phase and tasks.
2. **Documentation:** Refer to `agent_docs/` for tech stack details, code patterns, and testing guides.
3. **Plan-First:** Propose a brief plan and wait for approval before coding.
4. **Incremental Build:** Build one small feature at a time. Test frequently.
5. **Pre-Commit:** If hooks exist, run them before commits; fix failures.
6. **No Linting:** Do not act as a linter. Use `npm run lint` if needed.
7. **Communication:** Be concise. Ask clarifying questions when needed.

## Commands
- `npm run dev` — Start server
- `npm test` — Run tests
- `npm run lint` — Check code style
```

### For Gemini CLI / Antigravity Users — GEMINI.md:

```markdown
# GEMINI.md — Gemini CLI / Agent-First IDE Configuration for [App Name]

## Project Context
**App:** [App Name]
**Stack:** [Tech Stack]
**Stage:** MVP Development
**User Level:** [Level]

## Directives
1. **Master Plan:** Always read `AGENTS.md` first. It contains the current phase and tasks.
2. **Documentation:** Refer to `agent_docs/` for tech stack details, code patterns, and testing guides.
3. **Plan-First:** Propose a brief plan and wait for approval before coding.
4. **Incremental Build:** Build one small feature at a time. Test frequently.
5. **Pre-Commit:** If hooks exist, run them before commits; fix failures.
6. **No Linting:** Do not act as a linter. Use `npm run lint` if needed.
7. **Communication:** Be concise. Ask clarifying questions when needed.

## Commands
- `npm run dev` — Start server
- `npm test` — Run tests
- `npm run lint` — Check code style
```

### For VS Code + GitHub Copilot Users:

Create a `.github/copilot-instructions.md` file:

```markdown
# GitHub Copilot Instructions for [App Name]

## Project Context
**App:** [App Name]
**Stack:** [Tech Stack]
**Stage:** MVP Development

## Directives
1. Read `AGENTS.md` for the current phase and tasks.
2. Refer to `agent_docs/` for tech stack details and code patterns.
3. Follow existing code conventions in the repository.
4. Write tests for new functionality.
5. Keep changes incremental and focused.

## Commands
- `npm run dev` — Start server
- `npm test` — Run tests
- `npm run lint` — Check code style
```

---

## Final Instructions

After generating AGENTS.md and the appropriate configuration files based on their tool selection, say:

"I've created your AI agent instruction files above! Here's what you need to do:

## Files to Save:

1. **AGENTS.md** — Save in your project root directory
   - This is the universal instruction file ALL AI assistants can read

2. **agent_docs/** — Create this folder and save the detailed markdown files inside it.

3. **Tool-Specific Config Files** (save the ones for your chosen tools):
   [List the specific files generated based on their selection]

## Your Project Structure Should Now Look Like:

```
your-app/
├── docs/
│   ├── research-[AppName].txt
│   ├── PRD-[AppName]-MVP.md
│   └── TechDesign-[AppName]-MVP.md
├── AGENTS.md                    ← Universal instructions
├── agent_docs/                  ← Detailed documentation
│   ├── tech_stack.md
│   ├── code_patterns.md
│   ├── project_brief.md
│   ├── product_requirements.md
│   └── testing.md
├── [Tool-specific files]       ← Based on your selection
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

#### If Gemini CLI:
```bash
gemini "Read GEMINI.md, then implement the MVP"
```

#### If Antigravity / equivalent agent-first IDE:
1. Open the project in your selected agent-first IDE
2. Ensure GEMINI.md is loaded as context
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
- Run a dedicated security pass before deployment
- Update AGENTS.md and tool configs as the project scales
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
