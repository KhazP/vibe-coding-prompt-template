# 🚀 Vibe-Coding Workflow: AI-Powered MVP Development

<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Last Updated](https://img.shields.io/badge/Updated-November%202025-blue.svg)](README.md)

**Build an MVP in hours, not months – guided by the latest AI coding agents**

</div>

---

## 🎯 What This Does

Transform any app idea into working code through 5 AI-powered stages using the latest 2025 AI models:

| # | Stage | Goal | Output |
|---|-------|------|--------|
| 1️⃣ | **Research** | Validate market & tech landscape | Research findings |
| 2️⃣ | **Define** | Clarify product scope | PRD (Product Requirements) |
| 3️⃣ | **Design** | Decide how to build | Technical Design doc |
| 4️⃣ | **Generate AI Agent Instructions** | Convert docs into agent blueprints | AGENTS.md + tool-specific config files |
| 5️⃣ | **Build** | Generate & test code | Working MVP |

---

## 🏃 Quick Start

<div align="center">

### ✨ **New: Automated Web App Workflow** ✨

**Skip the manual copy-pasting!**  
We now have an interactive web app that automates the entire process for you.

[![Launch Web App](https://img.shields.io/badge/🚀_Launch-Vibe_Coding_Web_App-blue?style=for-the-badge&logo=vercel)](https://vibe-coding-template-webapp.vercel.app/#/)

</div>

<details>
<summary><b>⚡ Manual Workflow Guide (The Classic Way)</b></summary>

| Step | What You Do | Time | Result |
|:---:|-------------|:----:|--------|
| 📚 | Copy prompts → Answer questions | 20 min | Research doc |
| 📝 | Define your app idea | 15 min | PRD doc |
| 🏗️ | Choose technical approach | 15 min | Tech Design doc |
| 🤖 | Generate AI instructions | 10 min | AGENTS.md + agent config |
| 💻 | Tell the AI agent: *"Read AGENTS.md and build the MVP"* | 1-3 hrs | **Working MVP!** |

</details>

---

## ✅ Prerequisites

<details>
<summary><b>🤖 AI Platform (Required - Choose One)</b></summary>

### Best Free Options
- **[AI Studio](https://aistudio.google.com)** ⭐ - Gemini 3 Pro free tier with the full 1,048,576-token context ([see model details](https://ai.google.dev/gemini-api/docs))
- **[Claude.ai](https://claude.ai)** - Claude Sonnet 4.5 with 200K default / 1M beta context ([see current versions](https://docs.anthropic.com))
- **[ChatGPT](https://chat.openai.com)** - ChatGPT 5.1 via the Responses interface ([see OpenAI docs](https://developers.openai.com))

### Premium Options (Better for Complete Apps)
- **[Claude Pro](https://claude.ai)** - Sonnet 4.5 with higher rate limits and 1M-token projects ([pricing](https://claude.ai))
- **[Gemini Advanced](https://gemini.google.com)** - Gemini 3 Pro/Flash Ultra access with priority throughput ([pricing](https://gemini.google.com))
- **[ChatGPT Plus](https://chat.openai.com)** - ChatGPT 5.1 with higher allocations ([pricing](https://openai.com/chatgpt))

</details>

<details>
<summary><b>💻 AI Coding Agent/IDE (Required - Choose One)</b></summary>

### Terminal-Based Agents (Advanced)
- **[Claude Code](https://github.com/anthropics/claude-code)** ⭐ - Project-aware CLI with session memory and automated testing ([docs](https://docs.anthropic.com))
  ```bash
  npm install -g @anthropic-ai/claude-code
  claude init  # In your project directory
  ```
- **[Gemini CLI](https://github.com/google-gemini/gemini-cli)** - Free & open source with Gemini 3 Pro streaming context ([docs](https://ai.google.dev/gemini-api/docs))
   ```bash
   npm install -g @google-gemini/cli
   gemini login  # Connect your Google account
   ```
- **[OpenAI CLI](https://platform.openai.com/docs/guides/responses)** - Terminal access to ChatGPT 5.1 tool-calling pipelines ([docs](https://platform.openai.com/docs))
   ```bash
   pip install --upgrade openai
   openai responses.create -m gpt-5.1 --input "Summarize AGENTS.md"
   ```
- **[Aider](https://aider.chat)** - CLI tool that reads AGENTS.md context by default ([docs](https://aider.chat/docs))
   ```bash
   pip install aider-chat
   aider --config .aider.conf.yml
   ```

### Async/Cloud Agents
- **[Jules by Google](https://jules.google/docs)** ⭐ - Vertex AI-connected async agent that executes scoped work packets
- **[GitHub Copilot Agent](https://github.com/features/copilot)** - Agentic PR, code review, and deployment prep automation ([docs](https://docs.github.com/en/copilot))

### IDE-Based Tools (Beginner Friendly)
- **[Google Antigravity](https://antigravity.google)** ⭐ - Google’s agent-first coding IDE (async autonomous agent on Vertex AI)
- **[Cursor](https://cursor.sh)** ⭐ - AI editor with long-term Memory, Auto Debug, and Codebase Q&A ([pricing](https://cursor.sh))
- **[VS Code + Github Copilot](https://code.visualstudio.com/)** ⭐ - Editor with Copilot Agent Mode and inline pair programming ([Copilot pricing](https://github.com/features/copilot/plans))

### No-Code Platforms (Easiest)
- **[Bolt.new](https://bolt.new)** ⭐ - Instant Next.js/Supabase apps with scheduled automations ([pricing](https://bolt.new))
- **[Lovable](https://lovable.dev)** - AI fullstack builder shipping 25k apps daily ([pricing](https://lovable.dev))
- **[v0 by Vercel](https://v0.dev)** - AI UI composition with deployment-ready React components ([pricing](https://v0.dev))

</details>

<details>
<summary><b>🛠 Basic Requirements</b></summary>

- Any modern browser
- 2-4 hours of time
- Basic computer skills (no coding required!)
- Optional: Node.js 22+ for terminal tools

</details>

---

## 📋 The 5-Step Workflow

### 1️⃣ Deep Research 🔍
<details>
<summary><b>Validate your idea with AI-powered market research</b> • 20-30 min • Creates <code>research-*.txt</code></summary>

**What this does:** Analyzes market opportunity, competitors, and technical feasibility using the latest AI models.

**How it works:**
1. Copy the entire `part1-deepresearch.md` file
2. Paste into AI Studio (for Gemini 3 Pro), Claude.ai (for Claude Sonnet 4.5), or ChatGPT (for ChatGPT 5.1)
3. Answer 5-6 questions tailored to your experience level
4. AI generates comprehensive research with:
   - Market analysis & size
   - Competitor breakdown
   - Technical recommendations
   - Cost estimates
5. Save output as `research-[YourAppName].txt`

**💡 Pro Tip:** Use Gemini 3 Pro for better research (1,048,576-token context window).
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
<summary><b>Create blueprints for your AI coding assistant</b> • 5-10 min • Creates <code>AGENTS.md</code> + agent configs</summary>

**What this does:** Converts all docs into step-by-step coding instructions for AI agents.

**How it works:**
1. Copy `part4-notes-for-agent.md` into a new AI chat
2. Attach PRD and Technical Design documents
3. AI generates:
   - `AGENTS.md` - Universal instructions
   - Tool-specific configs (based on your choice):
     - `CLAUDE.md` for Claude Code
     - `GEMINI.md` for Gemini CLI & Antigravity
     - `.aider.conf.yml` for Aider
     - `.clinerules` for Cline
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
claude "Read CLAUDE.md and AGENTS.md, then build the MVP"

# Gemini CLI
npm install -g @google-gemini/cli
gemini login
# Add GEMINI.md to project root
gemini "Read GEMINI.md and AGENTS.md, then implement"
```

</details>

<details>
<summary><b>IDE Tools (Cursor, Windsurf)</b></summary>

1. Open your project folder in the IDE
2. Add configuration file:
   - Cursor: `.cursorrules` or `.cursor/rules.mdc`
   - Windsurf: `.windsurfrules`
3. Start with: *"Read AGENTS.md and build the MVP step by step"*

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
| **Beginner** | *"I'm new to coding. Read AGENTS.md and guide me step-by-step to build this MVP. Explain what you're doing."* |
| **Intermediate** | *"Read AGENTS.md and the docs folder. Build the core features first, test, then add polish."* |
| **Developer** | *"Review AGENTS.md and architecture. Implement Phase 1 with proper patterns and test coverage."* |

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
├── AGENTS.md             # Universal AI instructions
├── CLAUDE.md             # Claude Code config (if using)
├── GEMINI.md             # Gemini CLI config (if using)
├── GEMINI.md             # Antigravity config (if using)
├── .aider.conf.yml       # Aider config (if using)
├── .clinerules           # Cline config (if using)
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
- **Claude Sonnet 4.5** – September 2025 release with 200K default / 1M beta context and top-tier architecture reasoning
- **Claude Opus (2025 snapshot)** – Handles massive monorepos and multi-hour planning sessions with improved tool use
- **Gemini 3 Pro** – 1,048,576-token input and 65,536-token output windows for deep research and synthesis
- **ChatGPT 5.1** – Responses API with adjustable reasoning effort, faster tool orchestration, and lower latency

### New Tools
- **Claude Code** - Anthropic's project-aware terminal agent with session memory and automated test orchestration
- **Jules** - Google's asynchronous coding agent that can work independently across Vertex AI projects
- **Gemini CLI** - Open-source CLI with direct Gemini 3 Pro/Flash access, live context streaming, and MCP integrations
- **GitHub Copilot Agent Mode** - Workspace automation for scoped plans, PRs, and deployment checklists
- **OpenAI CLI (Responses API)** - Terminal workflow for ChatGPT 5.1 tool-calling pipelines

### Platform Updates
- **Cursor** - Adds Codebase Q&A, long-term project Memory, and Auto Debug powered by Claude Sonnet 4.5
- **Windsurf** - Cascade AI 3.0 with worklog tracking and pair-mode for live coding
- **Cline** - MCP marketplace runners plus transparent execution summaries in VS Code
- **Bolt.new** - Instant Next.js/Supabase deployments with scheduled automations and $20M ARR milestone
- **Lovable** - AI fullstack builder shipping 25k apps daily after €14.3M growth round

</details>

---

## 💡 Pro Tips for 2025

<details>
<summary><b>Tool Selection Guide</b></summary>

| Persona | Best Tool Stack | Why it fits | What to watch | Setup time |
|---------|-----------------|-----------|--------------|------------|
| Complete beginner | Lovable • Bolt.new | Paste your idea, get a hosted app with a domain and database in minutes | Daily credit caps and hosted code mean you should harden it later | 10–30 min |
| Learning hobbyist | Copilot Agent (VS Code) • Cline | Copilot can edit files for you; Cline shows every diff and runs commands on request | Copilot Free has limits and Cline needs your API key setup | 20–45 min |
| Experienced developer | Cursor 2.0 • Windsurf | Cursor plans tasks and runs code in safe terminals; Windsurf handles bigger refactors with its agents | Usage-based credits and a new IDE to learn | 30–60 min |
| Budget-limited builder | Cline • Gemini CLI | Both are free to install, work locally, and can call Gemini 3 Pro without paid tiers | Less hand-holding than no-code tools—expect to prompt more | 15–40 min |
| Need-it-today founder | Lovable Agent Mode • Bolt.new (Claude) | Fastest path to a working MVP with dashboards, auth, and analytics baked in | Keep an eye on credit burn and schedule a security/UX review | 15–60 min |
| Mobile-first product team | v0.dev + v0 Mobile • Flutter + Gemini | v0 sketches mobile experiences; Flutter + Gemini in Android Studio builds native quality | v0 mobile features are new and Android Studio tooling is still evolving | 45–120 min |
| Complex logic engineer | Claude Code (web/VS Code) • Windsurf | Claude Sonnet 4.5 keeps huge context in its “memory,” Windsurf’s agents plan multi-file changes | Claude web is still preview and company data rules may restrict it | 30–90 min |
| Security/compliance lead | Cline (client-side) • Copilot Enterprise | All code stays local with Cline, while Copilot Enterprise adds SSO and audit logs | You still need team policies and Copilot request caps may apply | 60–120 min |
| Offline/privacy-focused dev | Gemini CLI (local agent) • Cline + local models | Works from your machine, and you can swap in local models (Ollama/DeepSeek) when needed | Fully offline mode depends on your hardware and chosen model | 30–60 min |
| Open-source maintainer | Cline • Aider | Both tools show diffs, commit for you, and play nicely with Git workflows | Terminal-first experience can feel advanced if Git basics are new | 20–45 min |

**Quick Picks (Plain English)**
- Need an MVP tonight? Use Lovable or Bolt.new, then plan a follow-up pass for polish and security.
- Working inside an editor? Cursor or Copilot Agent can code for you—open Cline when you want to double-check every change.
- Huge legacy repo? Bring in Claude Code or Windsurf so the agent “remembers” more of your code at once.
- No budget? Stick with Cline + Gemini CLI and the generous free request limits.
- Mobile-first? Preview flows in v0 Mobile or build native screens with Flutter + Gemini’s suggestions.

**Pricing Guardrails (Nov 2025)**
- Free forever: Gemini Code Assist (6K code reqs/day), Copilot Free (2K completions + 50 chats), Windsurf Free (25 prompts).
- Best under $20: Windsurf Pro $15/mo (500 credits), Copilot Pro $10/mo (Agent Mode), Cursor Pro $20/mo (credit pool + parallel agents).
- Power tiers: Copilot Pro+ $39/mo (1.5K premium calls), Cursor Ultra $200/mo (20× credits), Bolt Pro 200 $200/mo (120M tokens).

**MCP Watch**
- Model Context Protocol (MCP) is a shared standard that lets your AI talk to extra tools (think CI pipelines, databases, ticket queues).
- Cline, Cursor, Claude Code, and Gemini CLI all plug into MCP, but treat those connections like production credentials.

**Caution Flags**
- Claude consumer accounts now offer opt-in data sharing; stick to org workspaces or API keys for sensitive repos.
- Replit Agent 3 can run 200-minute autonomous loops—enable guardrails so retries cannot nuke production data.

**When Not to Use These Tools**
- Native mobile or hardware builds: prefer Flutter + traditional toolchains with AI pairing.
- Regulated workloads needing SOC2/FedRAMP/HIPAA: lean on Copilot Enterprise, Cline with strict policies, or self-hosted stacks.
- Safety-critical or real-time systems: require deterministic, human-led engineering.
- Fundamentals practice: hand-code portions to avoid skipping core concepts.

</details>

<details>
<summary><b>Common Pitfalls & Solutions</b></summary>

| ❌ Pitfall | ✅ Solution |
|-----------|------------|
| Skipping discovery work | Run the Part I research prompt first so the PRD and tech design aren’t guesses |
| Letting agents ship code alone | Ask agents to show their plan, review the diff, and run tests before anything merges |
| Sticker-shock bills | Check credit dashboards weekly and keep a backup stack (Cline + Gemini) that stays free |
| Publishing auto-generated UIs without checks | Test accessibility, security, and performance before launch day |
| Building sensitive apps with personal accounts | Use business plans or API workspaces, switch off data sharing, and keep secrets in vaults |
| Forcing one tool to do everything | Mix and match (IDE + terminal + builder) so each tool covers what it does best |

</details>

---

## 🚨 Troubleshooting

<details>
<summary><b>Quick Fixes for Common Issues</b></summary>

| Problem | Solution |
|---------|----------|
| **"AI ignores my documents"** | Start with: *"First read AGENTS.md, PRD, and TechDesign. Summarize key requirements before coding."* |
| **"Code doesn't match PRD"** | Say: *"Re-read the PRD section on [feature], list acceptance criteria, then refactor accordingly."* |
| **"AI is overcomplicating"** | Add to config: *"Prioritize MVP scope. Offer the simplest working implementation before optimizations."* |
| **"Lost track of progress"** | Ask: *"Update the AGENTS.md progress log and map remaining tasks to implementation phases."* |
| **"Deployment failing"** | Request: *"Walk through deployment checklist, verify env vars, then run the platform-specific health command."* |

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

**The best time to build your idea was yesterday.**  
**The second best time is now.** 🚀

*Last updated: November 2025 | Created by the vibe-coding community*

</div>
