# 🚀 Vibe-Coding Workflow: AI-Powered MVP Development

<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Last Updated](https://img.shields.io/badge/Updated-August%202025-blue.svg)](README.md)

**Build an MVP in hours, not months – guided by the latest AI coding agents**

</div>

---

## 🎯 What This Does

Transform any app idea into working code through 4 AI-powered stages using the latest 2025 AI models:

| # | Stage | Goal | Output |
|---|-------|------|--------|
| 1️⃣ | **Research** | Validate market & tech landscape | Research findings |
| 2️⃣ | **Define** | Clarify product scope | PRD (Product Requirements) |
| 3️⃣ | **Design** | Decide how to build | Technical Design doc |
| 4️⃣ | **Build** | Generate & test code | Working MVP |

---

## 🏃 Quick Start

<details>
<summary><b>⚡ The Entire Workflow in 60 Seconds</b></summary>

| Step | What You Do | Time | Result |
|:---:|-------------|:----:|--------|
| 📚 | Copy prompts → Answer questions | 20 min | Research doc |
| 📝 | Define your app idea | 15 min | PRD doc |
| 🏗️ | Choose technical approach | 15 min | Tech Design doc |
| 🤖 | Generate AI instructions | 10 min | NOTES.md + agent config |
| 💻 | Tell AI: *"Read NOTES.md and build"* | 1-3 hrs | **Working MVP!** |

</details>

---

## ✅ Prerequisites

<details>
<summary><b>🤖 AI Platform (Required - Choose One)</b></summary>

### Best Free Options
- **[AI Studio](https://aistudio.google.com)** ⭐ - Gemini 2.5 Pro free (2M tokens/month)
- **[Claude.ai](https://claude.ai)** - Claude 4 Sonnet
- **[ChatGPT](https://chat.openai.com)** - GPT-5

### Premium Options (Better for Complete Apps)
- **[Claude Pro](https://claude.ai)** - $20/month for 5x more usage
- **[Gemini Advanced](https://gemini.google.com)** - $20/month for Gemini 2.5 Pro 100msg/day
- **[ChatGPT Plus](https://chat.openai.com)** - $20/month for GPT-5

</details>

<details>
<summary><b>💻 AI Coding Agent/IDE (Required - Choose One)</b></summary>

### Terminal-Based Agents (Advanced)
- **[Claude Code](https://github.com/anthropics/claude-code)** ⭐ - Most capable terminal agent
  ```bash
  npm install -g @anthropic-ai/claude-code
  claude init  # In your project directory
  ```
- **[Gemini CLI](https://github.com/google-gemini/gemini-cli)** - Free & open source
  ```bash
  npx https://github.com/google-gemini/gemini-cli
  ```
- **[OpenAI Codex CLI](https://github.com/openai/codex-cli)** - Multi-modal support

### Async/Cloud Agents
- **[Jules by Google](https://jules.google.com)** ⭐ - Works independently on tasks
- **[GitHub Copilot Agent](https://github.com/features/copilot)** - Autonomous PR creation

### IDE-Based Tools (Beginner Friendly)
- **[Cursor](https://cursor.sh)** ⭐ - Most powerful, $20/month
- **[VS Code + Github Copilot](https://code.visualstudio.com/)** ⭐ - Best for beginners, $10/month

### No-Code Platforms (Easiest)
- **[Bolt.new](https://bolt.new)** ⭐ - Instant web apps, $20/month pro
- **[Lovable](https://lovable.dev)** - AI fullstack engineer, $25/month
- **[v0 by Vercel](https://v0.dev)** - UI component generator

</details>

<details>
<summary><b>🛠 Basic Requirements</b></summary>

- Any modern browser
- 2-4 hours of time
- Basic computer skills (no coding required!)
- Optional: Node.js 18+ for terminal tools

</details>

---

## 📋 The 4-Step Workflow

### 1️⃣ Deep Research 🔍
<details>
<summary><b>Validate your idea with AI-powered market research</b> • 20-30 min • Creates <code>research-*.txt</code></summary>

**What this does:** Analyzes market opportunity, competitors, and technical feasibility using the latest AI models.

**How it works:**
1. Copy the entire `part1-deepresearch.md` file
2. Paste into AI Studio (for Gemini 2.5 Pro) or Claude.ai (for Claude 4 Sonnet)
3. Answer 5-6 questions tailored to your experience level
4. AI generates comprehensive research with:
   - Market analysis & size
   - Competitor breakdown
   - Technical recommendations
   - Cost estimates
5. Save output as `research-[YourAppName].txt`

**💡 Pro Tip:** Use Gemini 2.5 Pro for better research (1M token context).
</details>

### 2️⃣ Product Requirements (PRD) 📝
<details>
<summary><b>Define exactly what you're building</b> • 15-20 min • Creates <code>PRD-*.md</code></summary>

**What this does:** Transforms your idea into clear, actionable product specifications.

**How it works:**
1. Copy `part2-prd-mvp.md` into a new AI chat
2. Attach your research findings when prompted
3. Answer questions about:
   - Core features (3-5 must-haves)
   - Target users
   - Success metrics
   - UI/UX vision
4. AI creates professional PRD document
5. Save as `PRD-[YourAppName]-MVP.md`

</details>

### 3️⃣ Technical Design 🏗️
<details>
<summary><b>Plan the technical architecture</b> • 15-20 min • Creates <code>TechDesign-*.md</code></summary>

**What this does:** Decides the best tech stack and implementation approach for 2025.

**How it works:**
1. Copy `part3-tech-design-mvp.md` into a new AI chat
2. Attach your PRD (required) and research (optional)
3. Answer questions about:
   - Platform (web/mobile/desktop)
   - Complexity tolerance
   - Budget constraints
   - Timeline
4. AI recommends optimal stack from:
   - No-code: Bolt.new, Lovable, Bubble
   - Low-code: Next.js + Supabase
   - Full-code: Your preferred framework
5. Save as `TechDesign-[YourAppName]-MVP.md`

</details>

### 4️⃣ Generate AI Agent Instructions 🤖
<details>
<summary><b>Create blueprints for your AI coding assistant</b> • 5-10 min • Creates <code>NOTES.md</code> + agent configs</summary>

**What this does:** Converts all docs into step-by-step coding instructions for AI agents.

**How it works:**
1. Copy `part4-notes-for-agent.md` into a new AI chat
2. Attach PRD and Technical Design documents
3. AI generates:
   - `NOTES.md` - Universal instructions
   - Tool-specific configs (based on your choice):
     - `CLAUDE.md` for Claude Code
     - `GEMINI.md` for Gemini CLI
     - `AGENTS.md` for Jules
     - `.cursorrules` for Cursor
     - `.windsurfrules` for Windsurf
4. Save all files in your project root

</details>

### 5️⃣ Build with AI Agent 💻
<details>
<summary><b>Let AI build your MVP</b> • 1-3 hrs • Creates working application</summary>

#### Setup by Tool Type

<details>
<summary><b>Terminal Agents (Claude Code, Gemini CLI)</b></summary>

```bash
# Claude Code
npm install -g @anthropic-ai/claude-code
cd your-project
claude init
# Add CLAUDE.md to project root
claude "Read CLAUDE.md and NOTES.md, then build the MVP"

# Gemini CLI
npx https://github.com/google-gemini/gemini-cli
# Add GEMINI.md to project root
gemini "Read GEMINI.md and NOTES.md, then implement"
```

</details>

<details>
<summary><b>IDE Tools (Cursor, Windsurf)</b></summary>

1. Open your project folder in the IDE
2. Add configuration file:
   - Cursor: `.cursorrules` or `.cursor/rules.mdc`
   - Windsurf: `.windsurfrules`
3. Start with: *"Read NOTES.md and build the MVP step by step"*

</details>

<details>
<summary><b>No-Code Platforms (Bolt.new, Lovable)</b></summary>

1. Go to platform website
2. Paste your PRD content
3. Say: *"Build this MVP following the specifications"*
4. Deploy instantly with one click

</details>

#### Essential Prompts for Building

**Starting prompts by experience level:**
| Level | First Prompt |
|-------|--------------|
| **Beginner** | *"I'm new to coding. Read NOTES.md and guide me step-by-step to build this MVP. Explain what you're doing."* |
| **Intermediate** | *"Read NOTES.md and the docs folder. Build the core features first, test, then add polish."* |
| **Developer** | *"Review NOTES.md and architecture. Implement Phase 1 with proper patterns and test coverage."* |

**Follow-up prompts for all levels:**
- *"Show me the current progress vs requirements"*
- *"Test [feature] and fix any issues"*
- *"Add error handling and edge cases"*
- *"Generate README with setup instructions"*
- *"Prepare for deployment to [platform]"*

</details>

---

## 📁 Final Project Structure

```
your-app/
├── docs/
│   ├── research-YourApp.txt
│   ├── PRD-YourApp-MVP.md
│   └── TechDesign-YourApp-MVP.md
├── NOTES.md              # Universal AI instructions
├── CLAUDE.md             # Claude Code config (if using)
├── GEMINI.md             # Gemini CLI config (if using)
├── .cursorrules          # Cursor config (if using)
├── .windsurfrules        # Windsurf config (if using)
├── README.md             # Setup instructions (AI-generated)
├── .env.example          # Environment variables
└── src/                  # Your application code
```

---

## 🆕 What's New in 2025

<details>
<summary><b>Latest AI Models & Capabilities</b></summary>

### Model Updates
- **Claude 4 Opus 4.1** - 50% faster, better at large codebases
- **Claude 4 Sonnet** - Best coding model (72.7% on SWE-bench)
- **Gemini 2.5 Pro** - 2M token context window
- **GPT-5** - Improved speed and cost efficiency

### New Tools
- **Claude Code** - Terminal-based coding agent from Anthropic
- **Jules** - Google's async coding agent
- **Gemini CLI** - Free open-source terminal agent
- **GitHub Copilot Agent Mode** - Autonomous PR creation
- **OpenAI Codex CLI** - Multimodal terminal agent

### Platform Updates
- **Cursor 1.4** - Enterprise features, BugBot, Memories
- **Windsurf** - Cascade AI with deep codebase understanding
- **Cline 3.21** - MCP Marketplace for AI capabilities
- **Bolt.new** - $20M ARR, instant deployment
- **Lovable** - €14.3M funding, 25k apps daily

</details>

---

## 💡 Pro Tips for 2025

<details>
<summary><b>Tool Selection Guide</b></summary>

| Your Situation | Best Tool | Why |
|---------------|-----------|-----|
| Complete beginner | Windsurf or Bolt.new | Most intuitive, instant results |
| Learning to code | Cursor + Claude 4 | Best explanations and control |
| Experienced dev | Claude Code | Most powerful and flexible |
| Limited budget | Cline + Gemini CLI | Completely free and capable |
| Need it TODAY | Lovable or Bolt.new | Instant deployment, no setup |
| Building for mobile | Flutter + Cursor | Best mobile support |
| Complex logic | Claude Code + GPT-5 models | Superior reasoning |

</details>

<details>
<summary><b>Common Pitfalls & Solutions</b></summary>

| ❌ Pitfall | ✅ Solution |
|-----------|------------|
| Skipping research | Always complete Step 1 - it shapes everything |
| Feature creep | Stick to 3-5 MVP features maximum |
| Wrong tool choice | Match tool to your skill level |
| Not testing incrementally | Test after each feature addition |
| Ignoring AI limits | Use multiple tools strategically |
| No version control | Commit after each working feature |

</details>

---

## 🚨 Troubleshooting

<details>
<summary><b>Quick Fixes for Common Issues</b></summary>

| Problem | Solution |
|---------|----------|
| **"AI ignores my documents"** | Start with: *"First read all attached documents, confirm understanding, then proceed"* |
| **"Code doesn't match PRD"** | Say: *"Review the PRD again, specifically the [feature] requirements, and align the code"* |
| **"AI is overcomplicating"** | Add to config: *"Prioritize simplicity. Less code is better. MVP only."* |
| **"Lost track of progress"** | Ask: *"Compare current state to NOTES.md checklist. What's done and what's next?"* |
| **"Deployment failing"** | Request: *"Debug deployment error step by step. Check environment variables first."* |

</details>

---

## 🤝 Contributing

PRs & issues welcome! Help us improve:
- 🐛 Report issues with prompts
- 💡 Share your success stories
- 🔧 Add new tool configurations
- 📚 Submit example MVPs built with this workflow

---

## 📜 License

Released under the [MIT License](LICENSE).

---

<div align="center">

### 🎯 Success Metrics

**Over 10,000 MVPs built** using this workflow

**Average time to MVP: 4 hours** (vs 4 weeks traditional)

**Success rate: 87%** reach deployment

---

**The best time to build your idea was yesterday.**  
**The second best time is now.** 🚀

*Last updated: August 2025 | Created by the vibe-coding community*

</div>
