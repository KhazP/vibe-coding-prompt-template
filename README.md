<p align="center">
  <img src="https://img.shields.io/badge/Vibe--Coding-Workflow-blueviolet?style=for-the-badge&logo=rocket&logoColor=white" alt="Vibe-Coding Workflow" height="40"/>
</p>

<h3 align="center">A practical AI workflow for shipping MVPs</h3>

<p align="center">
  <strong>Turn an idea into an MVP with structured prompts, agent docs, and AI-assisted coding workflows.</strong>
</p>

<p align="center">
  Used on projects like <a href="https://vibeworkflow.app">vibeworkflow.app</a>, <a href="https://moneyvisualiser.com">moneyvisualiser.com</a>, <a href="https://caglacabaoglu.com">caglacabaoglu.com</a>, and <a href="https://alpyalay.org/realdex">RealDex App</a>.
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

## Table of contents
- [Built with this workflow](#built-with-this-workflow)
- [Workflow overview](#workflow-overview)
- [Quick start and the 5 steps](#quick-start-and-the-5-steps)
- [Prerequisites and tools](#prerequisites-and-tools)
- [Advanced agent practices](#advanced-agent-practices)
- [Project structure and deployment](#project-structure-and-deployment)
- [Common pitfalls and troubleshooting](#common-pitfalls-and-troubleshooting)

---

## Built with this workflow

This repo documents the workflow behind a handful of shipped projects. The goal is simple: do the thinking upfront, hand clean context to your tools, and keep the build phase moving.

| Project | What it is |
| :-- | :-- |
| [vibeworkflow.app](https://vibeworkflow.app) | An interactive web app built around the same structured vibe-coding workflow documented here. |
| [moneyvisualiser.com](https://moneyvisualiser.com) | A money visualization website that visualized money in a 3D environment. |
| [caglacabaoglu.com](https://caglacabaoglu.com) | A production portfolio and gallery site built with the same PRD-to-agent execution approach. |
| [alpyalay.org/realdex](https://alpyalay.org/realdex) | A mobile app built on React Native that lets you catch animals, and put them in a Pokemon-like collection. |

<p align="center">
  <sub>Maintained by <a href="https://x.com/alpyalay">Alp Yalay</a>.</sub>
</p>

---

## Workflow overview

The process moves through five stages, from idea validation to working code:

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

<p align="center">
  <a href=".claude/README.md">
    <img src="https://img.shields.io/badge/Using_Claude_Code%3F-Click_here_for_built--in_skills-667eea?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude Code Skills"/>
  </a>
  <a href="https://vibeworkflow.app/#/vibe-coding">
    <img src="https://img.shields.io/badge/Try_the_Website-Open_Vibe--Coding_Webapp-43e97b?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Vibe-Coding Website"/>
  </a>
</p>

---

## Quick start and the 5 steps

> TL;DR: run research, turn it into a PRD, choose the stack, generate your agent files, then build in small passes.

### Phase 1: thinking through the product
Do the first three steps in ChatGPT, Claude.ai, Gemini, or any other chat tool. You do not need a repo yet.

### ![Step 1](https://img.shields.io/badge/Step_1-Deep_Research-764ba2?style=flat-square) Deep Research
<details open>
<summary><b>Check whether the idea is worth building</b> - 20-30 min</summary>

This step gives you a quick read on demand, competitors, and whether the scope looks realistic.

1. Open [`part1-deepresearch.md`](part1-deepresearch.md) and **copy all of its contents**.
2. **Paste it** into your preferred AI platform Chat (like Claude.ai, ChatGPT, or Gemini) and press **Enter**.
3. The AI will ask you a few questions about your idea. Answer them truthfully in the chat.
4. The AI will generate a comprehensive research document based on your answers.
5. **Save the output** into a local file named `research-[YourAppName].txt` or simply **keep this chat open** for Step 2.

Tip: if your chat tool supports web search, turn it on so the stats and competitor references are current.
</details>

### ![Step 2](https://img.shields.io/badge/Step_2-Product_Requirements-f093fb?style=flat-square) Product Requirements (PRD)
<details open>
<summary><b>Write down what the MVP actually needs to do</b> - 15-20 min</summary>

This turns the rough idea into a scope you can build against.

1. Copy the contents of [`part2-prd-mvp.md`](part2-prd-mvp.md).
2. **Option A (Same Chat):** If you kept your chat open, paste the prompt right below the Deep Research output.
3. **Option B (New Chat):** Start a fresh chat, paste your saved `research-[YourAppName].txt` content, and then paste the Part 2 prompt below it.
4. Press Enter, answer any clarifying questions the AI asks, and let it generate your requirements.
5. **Save the final output** as `PRD-[YourAppName]-MVP.md`.
</details>

### ![Step 3](https://img.shields.io/badge/Step_3-Technical_Design-4facfe?style=flat-square) Technical Design
<details open>
<summary><b>Pick a stack you can actually ship with</b> - 15-20 min</summary>

This step helps you choose the stack and decide where to keep things simple.

1. Copy the contents of [`part3-tech-design-mvp.md`](part3-tech-design-mvp.md).
2. Paste it into your **ongoing conversation** (or into a new one, making sure to attach the `PRD-[YourAppName]-MVP.md` from Step 2 as context).
3. The AI will ask questions regarding your budget, timeline, and complexity tolerance.
4. Discuss the trade-offs it presents (e.g., full-code vs. no-code builder).
5. Once a stack is decided, **save the output** as `TechDesign-[YourAppName]-MVP.md`.
</details>

### Phase 2: execution in your IDE
Move into Cursor, VS Code with Copilot, Claude Code, or your preferred coding setup. This is where the project becomes code.

### ![Step 4](https://img.shields.io/badge/Step_4-Instantiate_Templates-00f2fe?style=flat-square) Set up the agent files
<details open>
<summary><b>Create the docs and instructions your coding agent will rely on</b> - 1-2 min</summary>

This step fills out `AGENTS.md` and the supporting docs from your PRD and tech design.

1. Click **"Use this template"** in GitHub (or clone this repository locally).
2. Open this cloned repository folder in your **AI IDE** (like Cursor or VS Code).
3. Upload/move the formatting documents you saved (`PRD.md` and `TechDesign.md`) into your IDE.
4. Open the AI Chat inside your IDE, type: *"Read [`part4-notes-for-agent.md`](part4-notes-for-agent.md), follow its instructions, and set up my workspace."*
5. The agent should copy the boilerplates from `/templates/` into your project root and fill in the placeholders using your PRD and tech design.
</details>

### ![Step 5](https://img.shields.io/badge/Step_5-Build_MVP-43e97b?style=flat-square) Build with AI Agent
<details open>
<summary><b>Build the MVP in small, reviewable chunks</b> - 1-3 hrs</summary>

Choose your development environment and start iterating:

1. Ensure your newly generated `AGENTS.md` and configuration files are physically in the project folder.
2. Give your agent its **first command:** 
   > *"Read AGENTS.md, propose a Phase 1 plan, wait for my approval, and then build it step by step."*
3. Treat the agent like a junior developer. Ask it to stop after each major feature, explain the diff, and run tests where possible.
4. **Repeat the loop** until your MVP is complete:

**Recommended Loop:**
```text
╭──────────────╮      ╭──────────────╮      ╭──────────────╮
│   📝 Plan    │ ───>│  ⚡ Execute │ ───>│  🔍 Verify  │
│  (Approve)   │      │  (One Feat)  │      │    (Test)    │
╰──────────────╯      ╰──────────────╯      ╰──────────────╯
       ▲                                           │
       └───────────────────────────────────────────┘
```
</details>

---

## Prerequisites and tools

You need a modern browser, a few hours, and enough comfort with files and copy-paste to move between tools. You do not need to be an experienced developer.

### Platform selection guide

| Focus Area | Recommended Tools |
|------------|-------------------|
| **Fast Prototype (Full-stack)** | ![Lovable](https://img.shields.io/badge/Lovable-ff69b4?style=flat-square) (Includes Agent/Plan mode, DB, Auth) |
| **Production-Ready Frontend** | ![v0](https://img.shields.io/badge/v0-000?style=flat-square) (Vercel-native, exact Next.js/React components) |
| **Learning / Sandbox Coding** | ![Cursor](https://img.shields.io/badge/Cursor-000?style=flat-square) (Dynamic Context) or VS Code with Copilot |
| **Complex Logic / Multi-Agent** | ![Claude Code](https://img.shields.io/badge/Claude_Code-orange?style=flat-square) (Agent Teams) or GitHub Copilot CLI |
| **Budget-Limited** | ![Gemini CLI](https://img.shields.io/badge/Gemini_CLI-4285F4?style=flat-square) (Free) + VS Code |

Note: I would not use this workflow as-is for native hardware work, heavily regulated products, or safety-critical systems.

---

## Advanced agent practices

<details open>
<summary><b>1. Artifact-first memory and compaction</b></summary>

To avoid context overload, let the agent write things down instead of trying to keep everything in one giant chat:
- **Compaction and handoffs:** Use native compaction (`/compact` in Copilot CLI, Claude Code logic) instead of hard resets. When you switch sessions, have the agent write a `001-spec.md` or `recap.md` and load only that file into the new chat.
- **Dynamic context (Cursor):** Let the agent save findings into real files instead of burying them in chat history.
- If you must restart, attach `AGENTS.md`, `PRD.md`, and your latest spec file.
</details>

<details open>
<summary><b>2. Multi-agent orchestration and plugins</b></summary>

- **Agent teams:** Tools like Claude Code support multiple agents working in parallel. Treat them like assigned roles, not magic.
- **Plan before edit:** Ask for an approved plan from the lead agent before the execute agent starts changing files. It cuts down on silent regressions.
- Keep `AGENTS.md` as the source of truth, then add tool-specific plugins or `.cursor/rules/` to seamlessly extend capabilities.
</details>

<details>
<summary><b>3. Model strategy matrix</b></summary>

Use model families instead of pinned version names. It ages better as models get swapped underneath you.

| Strategy | Primary Families | Best For | Speed |
|----------|------------------|----------|:-----:|
| Speed-first | Gemini Flash, Claude Sonnet | Fast prototyping, broad iteration | High |
| Balanced | Claude Sonnet, Gemini Pro | Daily coding, debugging, planning | Med-High |
| Depth-first | Claude Opus, Gemini Pro | Deep reasoning, complex refactors | Medium |
</details>

<details>
<summary><b>4. Agent observability</b></summary>

When an agent ignores instructions or behaves inconsistently:
1. Check which instructions/rules/hooks were loaded.
2. Confirm tool permissions and blocked actions.
3. Verify the active session context was not reset.
4. Re-run with explicit instruction order: *"Read AGENTS.md, then agent_docs/, then execute."*
</details>

---

## Project structure and deployment

### Recommended project skeleton
```
your-app/
├── 📁 docs/
│   ├── research-YourApp.txt
│   ├── PRD-YourApp-MVP.md
│   └── TechDesign-YourApp-MVP.md
├── 📁 agent_docs/
│   └── tech_stack.md, project_brief.md, testing.md
├── 📄 AGENTS.md                  # Universal AI instructions (The Master Contract)
├── 📁 specs/                     # Agent handoff artifacts (e.g. 001-feature-spec.md)
├── 📁 .cursor/rules/             # Cursor rules (preferred)
└── 📁 src/                       # Your application code
```

### Deployment and security

Once the MVP works, do a final pass on secrets, auth, and basic abuse protections before you deploy:

1. **Security Pass:** Check dependencies, secrets, auth paths, and rate limits.
2. **Push & Deploy:**
   - ![Vercel](https://img.shields.io/badge/Vercel-Deploy-000?style=flat-square&logo=vercel) For Next.js, React, frontend apps.
   - ![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=flat-square&logo=cloudflare) For Static sites, edge functions.

---

## Common pitfalls and troubleshooting

<details>
<summary><b>Avoid these mistakes</b></summary>

| Pitfall | Solution |
|---------|----------|
| Skipping discovery work | Run the Part 1 research prompt first |
| Letting agents ship code alone | Review the diff and run tests before merging |
| Publishing auto-generated UIs | Test accessibility and security before launch |
| Forcing one tool to do everything | Mix tools, IDE + terminal + builder usually works better |

</details>

<details>
<summary><b>Agent troubleshooting</b></summary>

| Problem | Solution |
|---------|----------|
| **"AI ignores my docs"** | Say: *"First read AGENTS.md, PRD, and TechDesign. Summarize key requirements before coding."* |
| **"Code doesn't match PRD"** | Say: *"Re-read the PRD section on [feature], list acceptance criteria, then refactor."* |
| **"AI is overcomplicating"** | Add to config: *"Prioritize MVP scope. Offer the simplest working implementation."* |
| **"Deployment failing"** | Request: *"Walk through deployment checklist, verify env vars, then run health check."* |

</details>

---

## Monthly update cadence
This template is maintained monthly. Review tool deprecations, refresh model-family references, and update agent capability notes when the ecosystem shifts.

## Contributing

<p align="center">
  <a href="https://github.com/KhazP/vibe-coding-prompt-template/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/KhazP/vibe-coding-prompt-template?style=for-the-badge&color=blue" alt="Contributors"/>
  </a>
  <a href="https://github.com/KhazP/vibe-coding-prompt-template/network/members">
    <img src="https://img.shields.io/github/forks/KhazP/vibe-coding-prompt-template?style=for-the-badge&color=blue" alt="Forks"/>
  </a>
</p>

PRs and issues are welcome. If you adapt this workflow, add a new tool setup, or ship something interesting with it, that is useful context for everyone else too. See [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md) for guidelines.

---

## License

Released under the [MIT License](LICENSE).

---

<p align="center">
  <strong>If this workflow helps you ship something real, open an issue or PR and show what changed.</strong>
</p>

<p align="center">
  <sub>Created by <a href="https://x.com/alpyalay">@alpyalay</a> and improved through community contributions.</sub>
</p>

<p align="center">
  <a href="#workflow-overview">
    <img src="https://img.shields.io/badge/↑_Back_to_Top-blueviolet?style=for-the-badge" alt="Back to Top"/>
  </a>
</p>
