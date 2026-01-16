<p align="center">
  <img src="https://img.shields.io/badge/Vibe--Coding-Workflow-blueviolet?style=for-the-badge&logo=rocket&logoColor=white" alt="Vibe-Coding Workflow" height="40"/>
</p>

<h3 align="center">AI-Powered MVP Development</h3>

<p align="center">
  <strong>Build an MVP in hours, not months — guided by AI coding agents</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="MIT License"/></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome"/></a>
  <a href="https://github.com/KhazP/vibe-coding-prompt-template/stargazers"><img src="https://img.shields.io/github/stars/KhazP/vibe-coding-prompt-template?style=flat-square&color=yellow" alt="Stars"/></a>
  <a href="https://github.com/KhazP/vibe-coding-prompt-template/issues"><img src="https://img.shields.io/github/issues/KhazP/vibe-coding-prompt-template?style=flat-square" alt="Issues"/></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Claude-Anthropic-orange?style=flat-square&logo=anthropic" alt="Claude"/>
  <img src="https://img.shields.io/badge/Gemini-Google-4285F4?style=flat-square&logo=google" alt="Gemini"/>
  <img src="https://img.shields.io/badge/ChatGPT-OpenAI-412991?style=flat-square&logo=openai" alt="ChatGPT"/>
  <img src="https://img.shields.io/badge/Cursor-Editor-000000?style=flat-square&logo=cursor" alt="Cursor"/>
  <img src="https://img.shields.io/badge/VS_Code-Microsoft-007ACC?style=flat-square&logo=visualstudiocode" alt="VS Code"/>
</p>

---

## The Workflow

Transform any app idea into working code through 5 AI-powered stages:

```mermaid
flowchart LR
    subgraph Phase1[" "]
        A[💡 Idea]
    end

    subgraph Phase2["Research"]
        B[📊 Market Analysis]
    end

    subgraph Phase3["Define"]
        C[📋 PRD]
    end

    subgraph Phase4["Design"]
        D[🏗️ Tech Design]
    end

    subgraph Phase5["Generate"]
        E[🤖 AGENTS.md]
    end

    subgraph Phase6["Build"]
        F[🚀 MVP]
    end

    A --> B --> C --> D --> E --> F

    style A fill:#667eea,stroke:#667eea,color:#fff
    style B fill:#764ba2,stroke:#764ba2,color:#fff
    style C fill:#f093fb,stroke:#f093fb,color:#fff
    style D fill:#4facfe,stroke:#4facfe,color:#fff
    style E fill:#00f2fe,stroke:#00f2fe,color:#000
    style F fill:#43e97b,stroke:#43e97b,color:#000
```

| Stage | What Happens | Output | Time |
|:-----:|--------------|--------|:----:|
| ![Research](https://img.shields.io/badge/1-Research-764ba2?style=flat-square) | Validate market & tech landscape | `research.txt` | 20 min |
| ![Define](https://img.shields.io/badge/2-Define-f093fb?style=flat-square) | Clarify product scope | `PRD.md` | 15 min |
| ![Design](https://img.shields.io/badge/3-Design-4facfe?style=flat-square) | Decide how to build | `TechDesign.md` | 15 min |
| ![Generate](https://img.shields.io/badge/4-Generate-00f2fe?style=flat-square) | Convert docs into agent blueprints | `AGENTS.md` | 10 min |
| ![Build](https://img.shields.io/badge/5-Build-43e97b?style=flat-square) | Generate & test code | **Working MVP** | 1-3 hrs |

---

<p align="center">
  <a href=".claude/README.md">
    <img src="https://img.shields.io/badge/Using_Claude_Code%3F-Click_here_for_built--in_skills-667eea?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude Code Skills"/>
  </a>
</p>

---

## Quick Start

### How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│  1. Copy prompt file  →  2. Answer questions  →  3. Get docs    │
│  4. Feed docs to AI agent  →  5. Ship your MVP                  │
└─────────────────────────────────────────────────────────────────┘
```

| Step | What You Do | Result |
|:----:|-------------|--------|
| 1 | Copy `part1-deepresearch.md`, answer questions | Research doc |
| 2 | Copy `part2-prd-mvp.md`, answer questions | PRD doc |
| 3 | Copy `part3-tech-design-mvp.md`, answer questions | Tech Design doc |
| 4 | Copy `part4-notes-for-agent.md`, generate configs | AGENTS.md + configs |
| 5 | Tell your AI agent: *"Read AGENTS.md and build the MVP"* | **Working MVP** |

> **Automated alternative:** Try the [Vibe-Coding Webapp](https://vibeworkflow.app/#/vibe-coding) to skip the manual copy-pasting.

---

## Prerequisites

### ![AI](https://img.shields.io/badge/AI-Platform-orange?style=flat-square) AI Platform (Choose One)

For the research and planning phases (Parts 1-4):

| Platform | Best For | Link |
|----------|----------|------|
| ![Claude](https://img.shields.io/badge/Claude-Anthropic-orange?style=flat-square) | Technical accuracy and reasoning | [claude.ai](https://claude.ai) |
| ![Gemini](https://img.shields.io/badge/Gemini-Google-4285F4?style=flat-square) | Large context for comprehensive research | [aistudio.google.com](https://aistudio.google.com) |
| ![ChatGPT](https://img.shields.io/badge/ChatGPT-OpenAI-412991?style=flat-square) | Iterative research | [chat.openai.com](https://chat.openai.com) |

### ![Code](https://img.shields.io/badge/AI-Coding_Agent-blue?style=flat-square) AI Coding Agent (Choose One)

For the build phase (Part 5):

<table>
<tr>
<td width="33%">

**Terminal-Based**
| Tool | Description |
|------|-------------|
| ![Claude Code](https://img.shields.io/badge/Claude_Code-CLI-orange?style=flat-square) | Project-aware CLI with session memory |
| ![Gemini CLI](https://img.shields.io/badge/Gemini_CLI-Free-4285F4?style=flat-square) | Free, open source terminal agent |

</td>
<td width="33%">

**IDE-Based**
| Tool | Description |
|------|-------------|
| ![Cursor](https://img.shields.io/badge/Cursor-Editor-000?style=flat-square) | AI editor, reads `AGENTS.md` |
| ![VS Code](https://img.shields.io/badge/VS_Code-IDE-007ACC?style=flat-square) | + GitHub Copilot or Cline |
| ![Antigravity](https://img.shields.io/badge/Antigravity-Google-4285F4?style=flat-square) | Agent-first IDE |

</td>
<td width="33%">

**No-Code**
| Tool | Description |
|------|-------------|
| ![Lovable](https://img.shields.io/badge/Lovable-Builder-ff69b4?style=flat-square) | Fullstack builder |
| ![v0](https://img.shields.io/badge/v0-Vercel-000?style=flat-square) | UI composition |

</td>
</tr>
</table>

### ![Requirements](https://img.shields.io/badge/Basic-Requirements-gray?style=flat-square) Basic Requirements

- Any modern browser
- 2-4 hours of time
- Basic computer skills (no coding required)
- Optional: Node.js for terminal-based tools

---

## The 5-Step Workflow

### ![Step 1](https://img.shields.io/badge/Step_1-Deep_Research-764ba2?style=flat-square) Deep Research

<details>
<summary><b>Validate your idea with AI-powered market research</b> — 20-30 min</summary>

**What this does:** Analyzes market opportunity, competitors, and technical feasibility.

**How it works:**
1. Copy the entire `part1-deepresearch.md` file
2. Paste into your chosen AI platform (Claude, Gemini, or ChatGPT)
3. Answer 5-6 questions tailored to your experience level
4. AI generates comprehensive research with market analysis, competitor breakdown, technical recommendations, and cost estimates
5. Save output as `research-[YourAppName].txt`

**Tip:** If your platform supports web search, enable it for up-to-date stats and competitor info.

</details>

### ![Step 2](https://img.shields.io/badge/Step_2-Product_Requirements-f093fb?style=flat-square) Product Requirements (PRD)

<details>
<summary><b>Define exactly what you're building</b> — 15-20 min</summary>

**What this does:** Transforms your idea into clear, actionable product specifications.

**How it works:**
1. Copy `part2-prd-mvp.md` into a new AI chat
2. Attach your research findings when prompted
3. Answer questions about core features, target users, success metrics, and UI/UX vision
4. AI creates professional PRD document
5. Save as `PRD-[YourAppName]-MVP.md`

</details>

### ![Step 3](https://img.shields.io/badge/Step_3-Technical_Design-4facfe?style=flat-square) Technical Design

<details>
<summary><b>Plan the technical architecture</b> — 15-20 min</summary>

**What this does:** Decides the best tech stack and implementation approach.

**How it works:**
1. Copy `part3-tech-design-mvp.md` into a new AI chat
2. Attach your PRD (required) and research (optional)
3. Answer questions about platform, complexity tolerance, budget, and timeline
4. AI recommends optimal stack (no-code, low-code, or full-code)
5. Save as `TechDesign-[YourAppName]-MVP.md`

</details>

### ![Step 4](https://img.shields.io/badge/Step_4-Generate_Instructions-00f2fe?style=flat-square) Generate AI Agent Instructions

<details>
<summary><b>Create blueprints for your AI coding assistant</b> — 5-10 min</summary>

**What this does:** Converts all docs into step-by-step coding instructions for AI agents.

**How it works:**
1. Copy `part4-notes-for-agent.md` into a new AI chat
2. Attach PRD and Technical Design documents
3. Ask the AI for a brief plan for the AGENTS structure; review and approve
4. AI generates:
   - `AGENTS.md` — Universal instructions
   - Tool-specific configs based on your choice (CLAUDE.md, .cursorrules, etc.)
5. Save all files in your project root

**Note:** Treat `AGENTS.md` and tool configs as living docs — update them as your project scales.

</details>

### ![Step 5](https://img.shields.io/badge/Step_5-Build_MVP-43e97b?style=flat-square) Build with AI Agent

<details>
<summary><b>Let AI build your MVP</b> — 1-3 hrs</summary>

#### Setup by Tool Type

**Terminal Agents (Claude Code, Gemini CLI)**
```bash
cd your-project
claude "Read AGENTS.md and build the MVP"
# or
gemini "Read AGENTS.md and implement"
```

**IDE Tools (Cursor, VS Code)**
1. Open your project folder in the IDE
2. Add configuration file (.cursorrules or similar)
3. Start with: *"Read AGENTS.md and build the MVP step by step"*

**No-Code Platforms (Lovable, v0)**
1. Go to platform website
2. Paste your PRD content
3. Say: *"Build this MVP following the specifications"*

#### Recommended Loop

```
┌──────────┐     ┌──────────┐     ┌──────────┐
│   Plan   │ --> │ Execute  │ --> │  Verify  │
│ (approve)│     │(one feat)│     │ (test)   │
└──────────┘     └──────────┘     └──────────┘
      ^                                 │
      └─────────────────────────────────┘
```

#### Useful Prompts

| Level | First Prompt |
|-------|--------------|
| **Vibe-coder** | *"Read AGENTS.md and agent_docs. Propose a plan first, wait for approval, then build step by step."* |
| **Developer** | *"Review AGENTS.md and architecture. Propose a Phase 1 plan, get approval, then implement with proper patterns."* |

**Follow-up prompts:**
- *"What's done and what's left?"*
- *"Test [feature] and fix any issues"*
- *"Make it work on mobile"*
- *"Deploy to Vercel/Cloudflare"*

</details>

---

## Final Project Structure

```
your-app/
├── 📁 docs/
│   ├── research-YourApp.txt
│   ├── PRD-YourApp-MVP.md
│   └── TechDesign-YourApp-MVP.md
├── 📁 agent_docs/
│   ├── tech_stack.md
│   ├── code_patterns.md
│   ├── project_brief.md
│   ├── product_requirements.md
│   └── testing.md
├── 📄 AGENTS.md                  # Universal AI instructions
├── 📄 CLAUDE.md                  # Claude Code config (if using)
├── 📄 .cursorrules               # Cursor config (if using)
└── 📁 src/                       # Your application code
```

---

## Deployment

Once your MVP is built, deploy to one of these platforms:

| Platform | Best For | Free Tier |
|----------|----------|:---------:|
| ![Vercel](https://img.shields.io/badge/Vercel-Deploy-000?style=flat-square&logo=vercel) | Next.js, React, frontend apps | ✓ |
| ![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=flat-square&logo=cloudflare) | Static sites, edge functions | ✓ |

Both platforms support git-based deployments — push your code and it deploys automatically.

---

## Tool Selection Guide

<details>
<summary><b>Which tools should I use?</b></summary>

| Situation | Recommended Tools |
|-----------|-------------------|
| Complete beginner | ![Lovable](https://img.shields.io/badge/Lovable-ff69b4?style=flat-square) or ![v0](https://img.shields.io/badge/v0-000?style=flat-square) → instant hosted apps |
| Learning to code | ![Cursor](https://img.shields.io/badge/Cursor-000?style=flat-square) or VS Code with Copilot |
| Experienced developer | ![Claude Code](https://img.shields.io/badge/Claude_Code-orange?style=flat-square) or Cursor |
| Budget-limited | ![Gemini CLI](https://img.shields.io/badge/Gemini_CLI-4285F4?style=flat-square) (free) + VS Code |
| Need MVP fast | Lovable → quick prototypes |
| Complex logic | Claude Code → session memory for large codebases |

**When NOT to use these tools:**
- Native mobile or hardware builds — use traditional toolchains
- Regulated workloads (SOC2, HIPAA) — use enterprise solutions
- Safety-critical systems — require deterministic, human-led engineering

</details>

---

## Common Pitfalls

<details>
<summary><b>Avoid these mistakes</b></summary>

| Pitfall | Solution |
|---------|----------|
| Skipping discovery work | Run the Part 1 research prompt first |
| Letting agents ship code alone | Review the diff and run tests before merging |
| Publishing auto-generated UIs without checks | Test accessibility and security before launch |
| Forcing one tool to do everything | Mix tools — IDE + terminal + builder |

</details>

---

## Troubleshooting

<details>
<summary><b>Quick fixes for common issues</b></summary>

| Problem | Solution |
|---------|----------|
| **"AI ignores my documents"** | Start with: *"First read AGENTS.md, PRD, and TechDesign. Summarize key requirements before coding."* |
| **"Code doesn't match PRD"** | Say: *"Re-read the PRD section on [feature], list acceptance criteria, then refactor accordingly."* |
| **"AI is overcomplicating"** | Add to config: *"Prioritize MVP scope. Offer the simplest working implementation."* |
| **"Deployment failing"** | Request: *"Walk through deployment checklist, verify env vars, then run health check."* |

</details>

---

## Contributing

<p align="center">
  <a href="https://github.com/KhazP/vibe-coding-prompt-template/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/KhazP/vibe-coding-prompt-template?style=for-the-badge&color=blue" alt="Contributors"/>
  </a>
  <a href="https://github.com/KhazP/vibe-coding-prompt-template/network/members">
    <img src="https://img.shields.io/github/forks/KhazP/vibe-coding-prompt-template?style=for-the-badge&color=blue" alt="Forks"/>
  </a>
</p>

PRs and issues welcome! Help us improve:
- Report issues with prompts
- Share your success stories
- Add new tool configurations
- Submit example MVPs built with this workflow

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## License

Released under the [MIT License](LICENSE).

---

<p align="center">
  <strong>The best time to build your idea was yesterday. The second best time is now.</strong>
</p>

<p align="center">
  <sub>Created by the vibe-coding community</sub>
</p>

<p align="center">
  <a href="#the-workflow">
    <img src="https://img.shields.io/badge/↑_Back_to_Top-blueviolet?style=for-the-badge" alt="Back to Top"/>
  </a>
</p>
