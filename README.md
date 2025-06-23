# 🚀 Vibe-Coding Workflow: AI-Powered MVP Development

<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Buy Me A Coffee](https://img.shields.io/badge/☕-Buy%20Me%20A%20Coffee-yellow)](https://www.buymeacoffee.com/alpyalayg)

**Build an MVP in hours, not months – guided end-to-end by AI.**

</div>

---

## 🎯 What This Does
Turn any app idea into working code through 4 AI-powered stages:

| # | Stage | Goal | Output |
|---|-------|------|--------|
| 1️⃣ | **Research** | Validate market & tech landscape | Research findings |
| 2️⃣ | **Define**  | Clarify product scope | PRD (Product Requirements) |
| 3️⃣ | **Design**  | Decide how to build | Technical Design doc |
| 4️⃣ | **Build**   | Generate & test code | Working MVP |

---

## 🏃 Quick Start

**The Entire Workflow in 30 Seconds**

| Step | What You Do | Time | Result |
|:---:|-------------|:----:|--------|
| 📚 | Copy prompts → Answer questions | 20 min | Research doc |
| 📝 | Define your app idea | 15 min | PRD doc |
| 🏗️ | Choose technical approach | 15 min | Tech Design doc |
| 🤖 | Generate AI instructions | 10 min | NOTES.md |
| 💻 | Tell AI: *"Read NOTES.md and build"* | 1-3 hrs | **Working MVP!** |

**That's it!**

---

## ✅ Prerequisites

**🤖 AI Platform** (choose one)
- [AI Studio](https://studio.google.com) ⭐ - Best free limits (10 req/min)
- [Claude](https://claude.ai) - (~40 msg/day free)
- [ChatGPT](https://chat.openai.com) - (10 msg/per 5hr)
- [Gemini](https://gemini.google.com) - (limited access to 2.5 Pro for free users | 100 msg/day for paid)

**💻 AI-Enabled IDE / Agent** (choose one)
- [Jules](https://jules.google.com) - Asynchronous agent that works on tasks independently.
- [Claude Code](https://www.anthropic.com/claude-code) ⭐ - Powerful command-line tool for agentic coding.
- [Cursor](https://cursor.sh) ⭐ - Purpose-built for AI coding.
- VS Code + [Claude Extension](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code)
- VS Code + [GitHub Copilot](https://github.com/features/copilot) - Popular combo.
- [Windsurf](https://codeium.com/windsurf) - Privacy-focused.
- [Cline](https://marketplace.visualstudio.com) - Open source VS Code extension.

**🛠 Basic Requirements**
- Any modern browser
- 2-4 hours of time
- Zero coding experience needed!

---

## 📋 The 4-Step Workflow

**Transform your idea into a working MVP through these guided steps:**

### 1️⃣ Deep Research 🔍
<details>
<summary><b>Validate your idea with AI-powered market research</b> • 20-30 min • Creates <code>research-*.txt</code></summary>

**What this does:** Analyzes market opportunity, competitors, and technical feasibility.

**How it works:**
1. Copy the entire `part1-deepresearch.md` file.
2. Paste into any AI platform (AI Studio, Claude, ChatGPT, etc.).
3. Answer 5-6 questions about your idea (tailored to your experience level).
4. AI generates comprehensive research on market, competitors, and implementation options.
5. Save the output as `research-[YourAppName].txt`.

</details>

### 2️⃣ Product Requirements (PRD) 📝
<details>
<summary><b>Define exactly what you're building</b> • 15-20 min • Creates <code>PRD-*.md</code></summary>

**What this does:** Transforms your idea into clear, actionable product specifications.

**How it works:**
1. Copy `part2-prd-generator.md` into a new Gemini chat.
2. Attach your research findings when prompted.
3. Answer questions about features, users, and success metrics.
4. AI creates a professional PRD document.
5. Save as `PRD-[YourAppName]-MVP.md`.

</details>

### 3️⃣ Technical Design 🏗️
<details>
<summary><b>Plan the technical architecture</b> • 15-20 min • Creates <code>TechDesign-*.md</code></summary>

**What this does:** Decides the tech stack and implementation approach.

**How it works:**
1. Copy `part3-tech-design-generator.md` into a new Gemini chat.
2. Attach your PRD (required) and research (optional).
3. Answer questions about platform, complexity, and constraints.
4. AI designs the technical architecture.
5. Save as `TechDesign-[YourAppName]-MVP.md`.

</details>

### 4️⃣ Generate AI Agent Instructions 🤖
<details>
<summary><b>Create a blueprint for your AI coding assistant</b> • 5-10 min • Creates <code>NOTES.md</code></summary>

**What this does:** Converts all previous docs into step-by-step coding instructions.

**How it works:**
1. Copy `part4-generate-notes-for-agent.md` into a new Gemini chat.
2. Attach both PRD and Technical Design documents.
3. AI creates detailed implementation instructions.
4. Save the output as `NOTES.md`.

</details>

</div>

### 5️⃣  Build with AI IDE 💻
<details>
<summary>Time 1-3 hrs • Tool Your AI IDE • Output Working MVP</summary>

#### ➊ Project Setup
1. Create a project folder → add a `docs` subfolder.  
2. Move generated files:  
   ```
   docs/research-*.txt
   docs/PRD-*.md
   docs/TechDesign-*.md
   NOTES.md        (in root, not docs)
   ```
3. Create an agent instructions file in your root folder (see step ➋).
4. Open the folder in your AI-enabled IDE or connect it to your AI agent.

#### ➋ Create AI Agent Rules
The filename and setup depend on your chosen tool. Create the appropriate file in your project's **root directory**.

| Tool | Rule File | Setup |
|:---|:---|:---|
| **[Jules](https://jules.google.com/task) & [Codex](https://github.com/openai/codex?tab=readme-ov-file#memory--project-docs)** | `AGENTS.md` | Create this file to describe your project's tools, conventions, and goals. Jules reads this automatically. |
| **Claude Code (CLI)** | `CLAUDE.md` | Create this file to provide context, commands, and style guides. The Claude CLI reads this automatically. |
| **Cursor** | `.cursorrules` | Create this file and paste the rule content below. |
| **GitHub Copilot** | `copilot-instructions.md` | Create this file and paste the rule content below. |

**General Rule Content (for Cursor, Copilot, etc.):**
```text
Read NOTES.md first – it is your implementation guide.
Build features incrementally and test each one.

# Code Philosophy:
- Prioritize simplicity: less code is more maintainable
- Replace rather than patch: rewrite components instead of adding layers
- Fail fast: no fallback mechanisms that mask errors
- Keep it clean: flag deprecated files for removal
- Stay modular: try to have 500 lines per file, keep the structure modular

# Development Standards:
- Thread safety: prevent race conditions through proper state management
- Configuration: use environment variables, never hardcode secrets or URLs
- Documentation: functions need a clear docstring explaining its purpose
- Structure: organize code into logical modules with single responsibilities

# Output Requirements:
- Show complete implementations (no "rest remains the same" comments)
- Provide exact placement instructions for code snippets
- Include full context for single function changes
- Display entire modified files unless explicitly asked for snippets

# AI Behavior:
- Use extended thinking mode for complex logic – thorough analysis prevents bugs
- Explain architectural decisions before implementing
- Validate against requirements before generating code

# IMPORTANT:
- Create a [project-name].md file if you haven't.
- After adding a major feature or completing a milestone, update [project-name].md.
- Always read [project-name].md before writing any code.
- Document the entire database schema in [project-name].md.
- For new migrations, make sure to add them to the same file.
```

> **💡 Agent-Specific Setup**
> - **For Jules:** Your `AGENTS.md` should describe the project's purpose and any key architectural patterns or commands.
> - **For Claude Code:** Your `CLAUDE.md` should contain instructions, common commands, and style guides to improve accuracy. You can run `/init` in the Claude Code CLI to generate a template.

#### ➌ Kick-off Prompt (pick one)

| Level | Prompt |
|-------|--------|
| Vibe-Coder | *"I'm a non-technical founder. Read NOTES.md, explain the project, then guide me step-by-step."* |
| Learner | *"Read NOTES.md, explain the tech stack, teach me as we build."* |
| Developer | *"Read NOTES.md and the files in the /docs folder. Confirm the architecture, then start implementing Phase 1."* |

#### ➍ Follow-Up Prompts

**Planning & Implementation**
- "Show me the implementation plan for [Feature] before we code"
- "Let's build [Feature] - start with the simplest working version"
- "What are the edge cases we should handle for [Feature]?"

**Debugging & Understanding**
- "I'm seeing [error/issue] - explain what's wrong and how to fix it"
- "Break down this function and explain each part's purpose"
- "Why did you choose this approach over alternatives?"

**Testing & Validation**
- "Create a test to verify [Feature] works correctly"
- "Let's manually test the happy path for [Feature]"
- "Show me what could break this feature"

**Progress Tracking**
- "What have we built so far vs. what's in NOTES.md?"
- "What's the next priority from our requirements?"
- "Are we still aligned with the original PRD?"

#### ➎ Launch Checklist

**Before calling it done:**

- ✅ **Documentation** - "Generate a user-friendly README with quick start steps"
- ✅ **Configuration** - "Create .env.example with all needed settings and descriptions"  
- ✅ **Validation** - "Let's do a complete walkthrough as a new user would"
- ✅ **Error Handling** - "Show me how the app handles common failure scenarios"
- ✅ **Deployment** - "Generate deployment instructions based on our Tech Design"

🎉 **Ship it!** Your MVP is ready for real users.
</details>

---

## 📁 Project Structure (after Step 5)
```text
your-app/
├─ docs/
│  ├─ research-YourApp.txt
│  ├─ PRD-YourApp-MVP.md
│  └─ TechDesign-YourApp-MVP.md
├─ .clauderules    ← or .cursorrules, etc. (based on your IDE)
├─ NOTES.md        ← AI implementation guide
├─ README.md       ← setup & run instructions (AI-generated)
├─ .env.example    ← environment variables template
├─ src/…           ← your app code (AI-generated)
└─ …
```

---

## 💡 Pro Tips
- **Be Specific:** The more detailed your request, the better the result. Include examples when possible.
- **Plan First:** Ask for an implementation plan before coding – prevents costly rewrites.
- **Test Early:** Request tests *before* features – clarifies requirements and catches bugs.
- **Stay Focused:** Build only the core MVP features from your PRD. Enhancement comes later.
- **Verify Often:** Run the app after each major addition – catch issues immediately.
- **Learn as You Go:** Ask "why" whenever confused – AI loves to teach.

### Common Pitfalls
| ❌ Pitfall | ✅ Fix |
|-----------|-------|
| Skipping research | Complete **Step 1** – it shapes everything |
| Feature creep | Stick to the PRD MVP scope |
| Perfectionism | Ship working code, polish later |
| Ignoring errors | Address issues immediately, don't accumulate technical debt |

---

## 🚨 Troubleshooting

### Common Issues & Quick Fixes

| Problem | Solution |
|---------|----------|
| **"AI ignores my documents"** | Say: *"First, read the attached [document name], then proceed"* |
| **"Lost track of progress"** | Ask: *"Compare our current state against NOTES.md - what's done and what's next?"* |
| **"Features don't match PRD"** | Tell AI: *"This implementation differs from the PRD. Review [feature] in the PRD and align the code"* |
| **"Code is getting messy"** | Request: *"Refactor this following our modular structure rules - max 500 lines per file"* |
| **"AI is overcomplicating"** | Remind: *"Simplify this - remember, less code is better for our MVP"* |

### Still Stuck?
- Start a fresh chat with all documents attached
- Lead with: *"I'm building an MVP. Read all attached docs, confirm understanding, then proceed with [specific task]"*

---

## 🤝 Contributing
PRs & issues welcome! 
- 🐛 Report issues with prompts
- 💡 Share your success stories
- 🔧 Improve templates for edge cases
- 📚 Add examples of built MVPs

---

## 📜 License
Released under the [MIT License](LICENSE).

---

<div align="center">

**The goal isn't perfect code on the first try – it's a working MVP you can iterate on.**  
Every great app starts somewhere. Yours starts **now**. 🚀

</div>
