# Part IV - Generate AGENTS.md and AI Agent Configuration Files

I'll help you create the instruction files that will guide your AI coding assistant to build your MVP. These files are what make the magic happen!

<details>
<summary><b>📁 Required Documents - Please Attach</b></summary>

### Required:
1. **PRD Document** (from Part II) - Defines WHAT to build
2. **Technical Design Document** (from Part III) - Defines HOW to build

### Optional but Helpful:
- **Research Findings** (from Part I) - Additional context

Attach these in any format (.txt, .pdf, .docx, .md) or paste if short.

</details>

After attaching your files, confirm your setup:

**A) Technical Level:**
- A) **Vibe-coder** - AI does everything, I guide and test
- B) **Developer** - I code with AI assistance
- C) **Somewhere in between** - Learning while building

**B) Which AI Tool(s) Will You Use?** (Can select multiple)
- 1) **Claude Code** - Terminal-based agent
- 2) **Gemini CLI** - Free terminal agent
- 3) **Google Antigravity** - Google’s agentic IDE
- 4) **Cursor** - AI-powered IDE
- 5) **Windsurf** - Beginner-friendly IDE (now Antigravity)
- 6) **Cline** - Open source VS Code extension
- 7) **GitHub Copilot** - In VS Code
- 8) **Bolt.new / Lovable** - No-code platforms
- 9) **Aider** - CLI pair-programmer that uses AGENTS.md for context

Please attach files and type: A/B/C and tool numbers (e.g., "A, 4,5"):

---

## Instructions for AI Assistant

<details>
<summary><b>🤖 CRITICAL: Generation Rules & Logic</b></summary>

### 🎯 Your Goal
You are an expert Tech Lead setting up a **Progressive Disclosure** documentation system for an AI Agent. 
Your output must be **modular** to prevent context window overload.
1. **Master Plan (`AGENTS.md`)**: High-level context and roadmap.
2. **Detailed Docs (`agent_docs/`)**: Specific implementation details.
3. **Tool Configs**: Concise pointers to the above.

### 🧠 Content Extraction Guidelines
- **From PRD:** Extract exact feature names, user stories, success metrics, and constraints.
- **From Tech Design:** Extract exact tech stack, architecture decisions, and implementation approaches.
- **Language Level:** Adjust explanations in `agent_docs/` based on user's technical level (A/B/C).
  - **Level A (Vibe-coder):** Explain *concepts* simply, focus on "what to do next".
  - **Level B (Developer):** Focus on *architecture*, patterns, and best practices.
- **Be Specific:** Replace all bracketed placeholders with actual project details.
- **Keep Examples:** Include code examples with comments explaining the "why".

### 🚫 "Less is More" for Configs
- Do **NOT** put giant prompt dumps into `CLAUDE.md` or `.cursorrules`.
- Instead, put that content into `agent_docs/code_patterns.md` or `agent_docs/tech_stack.md`.
- The config files should merely *point* the AI to the right documentation.

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

## Generate AGENTS.md (Universal Instructions)

### 1. Create `AGENTS.md` (Master Plan)
Generate this file in the project root. It should be the single source of truth for the project status and high-level goals.

```markdown
# AGENTS.md - Master Plan for [App Name]

## 🎯 Project Overview
**App:** [App Name]
**Goal:** [One-line description]
**Stack:** [Tech Stack]
**Current Phase:** Phase 1 - Foundation

## 📚 Documentation Index
Refer to these files in `agent_docs/` for details:
- `agent_docs/tech_stack.md`: Tech stack & libraries
- `agent_docs/code_patterns.md`: Code style & patterns
- `agent_docs/testing.md`: Testing strategy
- `agent_docs/product_requirements.md`: Full PRD

## 🚀 Roadmap
### Phase 1: Foundation
- [ ] Initialize project
- [ ] Setup database

### Phase 2: Core Features
- [ ] [Feature 1]
- [ ] [Feature 2]

## 🔄 Progress Log
- [Date]: Project initialized
```

### 2. Create `agent_docs/` Directory
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
```

---

## Generate Tool-Specific Configuration Files

Based on the tools they selected, generate the appropriate configuration files below. Each file should reference the AGENTS.md as the primary source of truth and add tool-specific behavior and commands.

### For Claude Code Users - CLAUDE.md:

Use this exact template, filling in project-specific details:

```markdown
# CLAUDE.md - Claude Code Configuration for [App Name]

## 🎯 Project Context
**App:** [App Name]
**Stack:** [Tech Stack]
**Stage:** MVP Development
**User Level:** [Level]

## 📋 Directives
1. **Master Plan:** Always read `AGENTS.md` first. It contains the current phase and tasks.
2. **Documentation:** Refer to `agent_docs/` for tech stack details, code patterns, and testing guides.
3. **Incremental Build:** Build one small feature at a time. Test frequently.
4. **No Linting:** Do not act as a linter. Use `npm run lint` if needed.
5. **Communication:** Be concise. Explain your plan before implementing.

## 🛠 Commands
- `npm run dev` - Start server
- `npm test` - Run tests
- `npm run lint` - Check code style
```

### For Cursor Users - .cursorrules:

```markdown
# Cursor Rules for [App Name]

## 🎯 Project Context
**App:** [App Name]
**Stack:** [Tech Stack]
**Stage:** MVP Development
**User Level:** [Level]

## 📋 Directives
1. **Master Plan:** Always read `AGENTS.md` first. It contains the current phase and tasks.
2. **Documentation:** Refer to `agent_docs/` for tech stack details, code patterns, and testing guides.
3. **Incremental Build:** Build one small feature at a time. Test frequently.
4. **No Linting:** Do not act as a linter. Use `npm run lint` if needed.
5. **Communication:** Be concise. Explain your plan before implementing.

## 🛠 Commands
- `npm run dev` - Start server
- `npm test` - Run tests
- `npm run lint` - Check code style
```

### For Windsurf Users - .windsurfrules:

```markdown
# Windsurf Rules for [App Name]

## 🎯 Project Context
**App:** [App Name]
**Stack:** [Tech Stack]
**Stage:** MVP Development
**User Level:** [Level]

## 📋 Directives
1. **Master Plan:** Always read `AGENTS.md` first. It contains the current phase and tasks.
2. **Documentation:** Refer to `agent_docs/` for tech stack details, code patterns, and testing guides.
3. **Incremental Build:** Build one small feature at a time. Test frequently.
4. **No Linting:** Do not act as a linter. Use `npm run lint` if needed.
5. **Communication:** Be concise. Explain your plan before implementing.

## 🛠 Commands
- `npm run dev` - Start server
- `npm test` - Run tests
- `npm run lint` - Check code style
```

### For Gemini CLI Users - GEMINI.md:

```markdown
# GEMINI.md - Gemini CLI Configuration for [App Name]

## 🎯 Project Context
**App:** [App Name]
**Stack:** [Tech Stack]
**Stage:** MVP Development
**User Level:** [Level]

## 📋 Directives
1. **Master Plan:** Always read `AGENTS.md` first. It contains the current phase and tasks.
2. **Documentation:** Refer to `agent_docs/` for tech stack details, code patterns, and testing guides.
3. **Incremental Build:** Build one small feature at a time. Test frequently.
4. **No Linting:** Do not act as a linter. Use `npm run lint` if needed.
5. **Communication:** Be concise. Explain your plan before implementing.

## 🛠 Commands
- `npm run dev` - Start server
- `npm test` - Run tests
- `npm run lint` - Check code style
```

### For Antigravity Users - GEMINI.md:

```markdown
# ANTIGRAVITY.md - Antigravity Configuration for [App Name]

## 🎯 Project Context
**App:** [App Name]
**Stack:** [Tech Stack]
**Stage:** MVP Development
**User Level:** [Level]

## 📋 Directives
1. **Master Plan:** Always read `AGENTS.md` first. It contains the current phase and tasks.
2. **Documentation:** Refer to `agent_docs/` for tech stack details, code patterns, and testing guides.
3. **Incremental Build:** Build one small feature at a time. Test frequently.
4. **No Linting:** Do not act as a linter. Use `npm run lint` if needed.
5. **Communication:** Be concise. Explain your plan before implementing.

## 🛠 Commands
- `npm run dev` - Start server
- `npm test` - Run tests
- `npm run lint` - Check code style
```

### For Cline Users - .clinerules:

```markdown
# Cline Rules for [App Name]

## 🎯 Project Context
**App:** [App Name]
**Stack:** [Tech Stack]
**Stage:** MVP Development
**User Level:** [Level]

## 📋 Directives
1. **Master Plan:** Always read `AGENTS.md` first. It contains the current phase and tasks.
2. **Documentation:** Refer to `agent_docs/` for tech stack details, code patterns, and testing guides.
3. **Incremental Build:** Build one small feature at a time. Test frequently.
4. **No Linting:** Do not act as a linter. Use `npm run lint` if needed.
5. **Communication:** Be concise. Explain your plan before implementing.

## 🛠 Commands
- `npm run dev` - Start server
- `npm test` - Run tests
- `npm run lint` - Check code style
```

### For Aider Users - .aider.conf.yml:

```yaml
read:
  - AGENTS.md
```
(Place this file in the project root so Aider automatically loads the instructions.)

---

## Final Instructions

After generating AGENTS.md and the appropriate configuration files based on their tool selection, say:

"I've created your AI agent instruction files above! Here's what you need to do:

## 📁 Files to Save:

1. **AGENTS.md** - Save in your project root directory
   - This is the universal instruction file ALL AI assistants can read

2. **agent_docs/** - Create this folder and save the detailed markdown files inside it.

3. **Tool-Specific Config Files** (save the ones for your chosen tools):
   [List the specific files generated based on their selection]

## 📂 Your Project Structure Should Now Look Like:

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
│   ├── product_requirements.md
│   └── testing.md
├── [Tool-specific files]       ← Based on your selection
└── (your code will go here)
```

## 🚀 Ready to Build! Here's How to Start:

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
2. The .cursorrules file will be automatically detected
3. Start with: "Read AGENTS.md and begin implementing the MVP step by step"

#### If Bolt.new/Lovable:
1. Go to [platform]
2. Create new project
3. Paste your PRD content
4. Say: "Build this following the specifications"


#### If Gemini CLI:
```bash
gemini "Read GEMINI.md, then implement the MVP"
```

#### If Antigravity:
1. Open the project in Antigravity
2. Ensure GEMINI.md is loaded as context
3. Start with: "Read AGENTS.md and begin"

#### If Aider:
```bash
aider --continue 
# Aider will automatically load AGENTS.md from .aider.conf.yml
```

## 💡 Your First Prompts:

Based on your level ([their level]), start with:

**First prompt:**
"[Suggested first prompt based on their level and tool]"

**Follow-up prompts:**
- "Show me the current progress"
- "Test [feature name] and fix any issues"  
- "Make it work on mobile"
- "Add error handling"
- "Deploy to [platform from Tech Design]"

## ✅ Success Checklist:

Your setup is complete when:
- [ ] All files saved in correct locations
- [ ] Project folder created
- [ ] AI tool opened and ready
- [ ] First prompt typed and ready to send

## 🎯 Remember:

- The AI will handle the complex coding
- You guide the direction and test the results
- Start simple, add features incrementally
- Test after each feature
- Don't hesitate to ask for explanations

**You're ready to build! Your AI assistant has all the context it needs. Just start the conversation and watch your MVP come to life!**

<details>
<summary><b>🔧 Troubleshooting</b></summary>

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