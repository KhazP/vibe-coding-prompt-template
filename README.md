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
  <a href="https://www.npmjs.com/package/vibeworkflow"><img src="https://img.shields.io/badge/npx_vibeworkflow-CLI-CB3837?style=flat-square&logo=npm" alt="npx vibeworkflow"/></a>
</p>

---

## Start here

**Using an AI coding agent?** Open Claude Code, Cursor, Codex, or Gemini CLI in your project and say:

> Run `npx vibeworkflow` and follow its instructions.

It installs the planning skills, interviews you one question at a time, writes your PRD and Tech Design, and scaffolds the agent files — Steps 1-4, driven for you. You just answer questions.

**Prefer to drive it yourself?** Paste the prompts from this repo into any chat tool, in order:

| Step | What happens | Where |
| :-- | :-- | :-- |
| 1. [Deep Research](#phase-1-thinking-through-the-product) | Validate the idea against real sources | Chat tool |
| 2. [PRD](#phase-1-thinking-through-the-product) | Define what you're building, and for whom | Chat tool |
| 3. [Tech Design](#phase-1-thinking-through-the-product) | Pick the surface, stack, and deployment | Chat tool |
| 4. [Agent files](#phase-2-execution-in-your-ide) | Generate `AGENTS.md` and `agent_docs/` | `npx vibeworkflow` or paste |
| 5. [Build](#phase-2-execution-in-your-ide) | Ship in small, verified passes | Your AI IDE |

<details>
<summary>See the flow as a diagram</summary>

```mermaid
flowchart LR
    A[💡 Idea] --> B[📊 Research] --> C[📋 PRD] --> D[🏗️ Tech Design] --> E[🤖 AGENTS.md] --> F[🚀 MVP / AI App]

    style A fill:#667eea,stroke:#667eea,color:#fff
    style B fill:#764ba2,stroke:#764ba2,color:#fff
    style C fill:#f093fb,stroke:#f093fb,color:#fff
    style D fill:#4facfe,stroke:#4facfe,color:#fff
    style E fill:#00f2fe,stroke:#00f2fe,color:#000
    style F fill:#43e97b,stroke:#43e97b,color:#000
```

</details>

<p align="center">
  <a href=".claude/README.md">
    <img src="https://img.shields.io/badge/Using_Claude_Code%3F-Click_here_for_built--in_skills-667eea?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude Code Skills"/>
  </a>
  <a href="https://vibeworkflow.app/#/vibe-coding">
    <img src="https://img.shields.io/badge/Try_the_Website-Open_Vibe--Coding_Webapp-43e97b?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Vibe-Coding Website"/>
  </a>
</p>

---

## Table of contents
- [Start here](#start-here)
- [Quick start and the 5 steps](#quick-start-and-the-5-steps)
- [Built with this workflow](#built-with-this-workflow)
- [Modern AI build paths](#modern-ai-build-paths)
- [Prerequisites and tools](#prerequisites-and-tools)
- [Advanced agent practices](#advanced-agent-practices)
- [AI safety and evidence](#ai-safety-and-evidence)
- [Project structure and deployment](#project-structure-and-deployment)
- [Common pitfalls and troubleshooting](#common-pitfalls-and-troubleshooting)
- [Further reading](#further-reading)

---

## Quick start and the 5 steps

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
5. **Save the output** into a local file named `research-[YourAppName].md` (or `.txt`) or simply **keep this chat open** for Step 2.

Tip: if your chat tool supports web search, source grounding, URL context, or deep research mode, turn it on and require cited claims with access dates.
</details>

### ![Step 2](https://img.shields.io/badge/Step_2-Product_Requirements-f093fb?style=flat-square) Product Requirements (PRD)
<details open>
<summary><b>Write down what the MVP actually needs to do</b> - 15-20 min</summary>

This turns the rough idea into a scope you can build against.

1. Copy the contents of [`part2-prd-mvp.md`](part2-prd-mvp.md).
2. **Option A (Same Chat):** If you kept your chat open, paste the prompt right below the Deep Research output.
3. **Option B (New Chat):** Start a fresh chat, paste your saved `research-[YourAppName].md` content, and then paste the Part 2 prompt below it.
4. Press Enter, answer any clarifying questions the AI asks, and let it generate your requirements.
5. **Save the final output** as `PRD-[YourAppName]-MVP.md`.
</details>

### ![Step 3](https://img.shields.io/badge/Step_3-Technical_Design-4facfe?style=flat-square) Technical Design
<details open>
<summary><b>Pick a stack you can actually ship with</b> - 15-20 min</summary>

This step helps you choose the stack, deployment target, AI provider strategy if the product needs AI, and the verification path.

1. Copy the contents of [`part3-tech-design-mvp.md`](part3-tech-design-mvp.md).
2. Paste it into your **ongoing conversation** (or into a new one, making sure to attach the `PRD-[YourAppName]-MVP.md` from Step 2 as context).
3. The AI will ask questions regarding your budget, timeline, and complexity tolerance.
4. Discuss the trade-offs it presents, including no-code/full-code, Vercel vs. Cloudflare, and whether AI evals are required.
5. Once a stack is decided, **save the output** as `TechDesign-[YourAppName]-MVP.md`.
</details>

### Phase 2: execution in your IDE
Move into Codex, Cursor, VS Code with Copilot, Claude Code, Antigravity/Gemini-compatible agents, or your preferred coding setup. This is where the project becomes code and verified artifacts.

### ![Step 4](https://img.shields.io/badge/Step_4-Instantiate_Templates-00f2fe?style=flat-square) Set up the agent files
<details open>
<summary><b>Create the docs and instructions your coding agent will rely on</b> - 1-2 min</summary>

> **CLI shortcut:** tell your AI agent to run `npx vibeworkflow` from your project folder — the CLI is agent-driven, not meant to be run by hand. If you already have `docs/PRD-*.md` + `docs/TechDesign-*.md` (with the JSON meta block), it scaffolds the files below (skipping anything you've already edited) and verifies with `npx vibeworkflow doctor`. If the docs are missing, it installs the planning skills, auto-detects your AI tools, and prints agent instructions that drive the research → PRD → Tech Design interviews for you — your agent asks the questions one at a time; you just answer. The paste flow below still works everywhere.

This step fills out `AGENTS.md` and the supporting docs from your PRD and tech design.

1. Click **"Use this template"** in GitHub (or clone this repository locally).
2. Open this cloned repository folder in your **AI IDE** (like Cursor or VS Code).
3. Create a `docs/` folder in your project root if it does not already exist.
4. Move your saved documents into `docs/` using these names:
   - `docs/PRD-[YourAppName]-MVP.md`
   - `docs/TechDesign-[YourAppName]-MVP.md`
   - optional: `docs/research-[YourAppName].md` (or `.txt` for backward compatibility)
5. Open the AI Chat inside your IDE, type: *"Read [`part4-notes-for-agent.md`](part4-notes-for-agent.md), follow its instructions, and set up my workspace."*
6. The agent should copy the boilerplates from `/templates/`, generate selected tool configs (`CLAUDE.md`, `.cursor/rules/`, `GEMINI.md`, `.codex/config.toml`, `.agents/skills/`, etc.), and fill placeholders using the files in `docs/`.

Default generated files:
- `AGENTS.md`
- `MEMORY.md`
- `REVIEW-CHECKLIST.md`
- `agent_docs/project_brief.md`
- `agent_docs/tech_stack.md`
- `agent_docs/testing.md`

Optional generated files:
- `agent_docs/code_patterns.md` when the codebase has real conventions to preserve.
- `agent_docs/product_requirements.md` when the PRD is long enough to need a build-facing summary.
- `.claude/`, `.cursor/`, `.github/`, `.codex/`, `.gemini/`, and local-agent files only for tools the user selected.
- `agent-permissions.example.json` only when AI tools, MCP servers, or product actions are in scope.
</details>

### ![Step 5](https://img.shields.io/badge/Step_5-Build_MVP-43e97b?style=flat-square) Build with AI Agent
<details open>
<summary><b>Build the MVP in small, reviewable chunks</b> - 1-3 hrs</summary>

Choose your development environment and start iterating:

1. Ensure your newly generated `AGENTS.md`, `agent_docs/`, and tool configuration files are physically in the project folder.
2. Give your agent its **first command:** 
   > *"Read AGENTS.md, propose a Phase 1 plan, wait for my approval, and then build it step by step."*
3. Treat the agent like a junior developer. Ask it to stop after each major feature, explain the diff, run the project-specific verification commands, and use browser/mobile checks for user-visible flows.
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

## Built with this workflow

This repo documents the workflow behind a handful of shipped projects. The goal is simple: do the thinking upfront, hand clean context to your tools, and keep the build phase moving through reviewable plans, tests, and browser checks.

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

## Modern AI build paths

The five-step workflow stays the same whether you're building a standard web MVP, an AI product on OpenAI/Vercel/Cloudflare/Google, a local-model setup, or a builder prototype — you just make the target surface explicit in Step 3. See [Modern AI build paths](docs/ai/build-paths.md) for the per-path defaults and the exact items to add to your Tech Design, kept current under the [Freshness policy](docs/maintenance/freshness-policy.md).

For AI product features, use [AI feature patterns](docs/ai/feature-patterns.md). For MCP, agent permissions, prompt injection, and provider retention decisions, use [AI agent security](docs/ai/agent-security.md). For builder-generated projects, complete the [Builder exit review](docs/workflow/builder-exit-review.md).

---

## Prerequisites and tools

You need a modern browser, a few hours, and enough comfort with files and copy-paste to move between tools. You do not need to be an experienced developer.

### Platform selection guide

| Focus Area | Recommended Tools |
|------------|-------------------|
| **Fast Prototype** | Lovable, v0, or Google AI Studio Build mode; verify export and deployment path before committing |
| **Production Web App** | Next.js/Vercel, Cloudflare Workers, or another boring stack the team can maintain |
| **AI Product Features** | Provider SDKs, AI SDKs, Workers AI, or local models with cost and data checks |
| **Learning / Sandbox Coding** | Cursor rules, Codex skills, Antigravity/Gemini legacy, VS Code with Copilot, Continue, Cline, or Aider |
| **Complex Logic / Delegation** | Claude Code subagents, Codex subagents, or Cursor background agents with scoped tasks |
| **Budget-Limited AI** | Antigravity/Gemini where currently supported, free-tier provider APIs, or Workers AI, with quota checks and current pricing verification |
| **Private / Local AI** | LM Studio, Ollama, Continue, Cline, Aider, OpenHands, llama.cpp, or MLX with explicit tool approvals |

Note: I would not use this workflow as-is for native hardware work, heavily regulated products, or safety-critical systems.

---

## Advanced agent practices

<details open>
<summary><b>1. Artifact-first memory and compaction</b></summary>

To avoid context overload, let the agent write durable project facts into files instead of trying to keep everything in one giant chat:
- **Compaction and handoffs:** Use native compaction/summarization where the tool supports it. When you switch sessions, have the agent write a `specs/001-feature.md` or `recap.md` and load only that file into the new chat.
- **Repo-owned memory:** Keep decisions and current state in `MEMORY.md`; tool-side memories are personal and should not replace versionable project docs.
- **Cursor/Codex/Gemini context:** Use project rules, skills, or `GEMINI.md` as concise pointers to `AGENTS.md` and `agent_docs/`, not as huge prompt dumps.
- If you must restart, attach `AGENTS.md`, `docs/PRD-[YourAppName]-MVP.md`, `docs/TechDesign-[YourAppName]-MVP.md`, and your latest handoff artifact.
</details>

<details open>
<summary><b>2. Multi-agent orchestration and plugins</b></summary>

- **Subagents first:** Use focused subagents for research, code review, debugging, and test verification. Use experimental team-style coordination only when agents truly need to communicate or split disjoint modules.
- **Plan before edit:** Use the tool's actual plan/approval mode where available, then require a short plan before multi-file changes.
- **Scoped rules and skills:** Keep `AGENTS.md` as the cross-tool source of truth, then add `.cursor/rules/`, `.claude/agents/`, `.codex/config.toml`, `.agents/skills/`, or `GEMINI.md` only as concise tool-specific adapters.
- **Task routing:** Use [Agent tooling compatibility](docs/tools/agent-tooling-compatibility.md) to decide when to use Codex, Claude Code, Cursor, Copilot, Antigravity, local agents, or builder tools.
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

Always verify current model names, quotas, and pricing against official docs before writing them into project artifacts. Reasoning effort and verbosity are product settings, not automatic quality upgrades.

<details>
<summary><b>4. Agent observability</b></summary>

When an agent ignores instructions or behaves inconsistently:
1. Check which instructions/rules/hooks were loaded.
2. Confirm tool permissions and blocked actions.
3. Verify the active session context was not reset.
4. Re-run with explicit instruction order: *"Read AGENTS.md, then agent_docs/, then execute."*
</details>

---

## AI safety and evidence

Treat AI safety as a design-time requirement, not a final polish pass: Step 3 defines the AI surface, data boundaries, approval gates, evals, and cost ceiling; Step 4 generates the matching tool permissions; Step 5 produces evidence (changed files, commands, test/browser results, unresolved risks). Untrusted content — web pages, emails, tool output, RAG chunks, uploads — is data, not instructions.

Full guidance: [AI agent security](docs/ai/agent-security.md) and [AI feature patterns](docs/ai/feature-patterns.md).

---

## Project structure and deployment

### Recommended project skeleton
```
your-app/
├── 📁 docs/
│   ├── research-YourApp.md
│   ├── PRD-YourApp-MVP.md
│   └── TechDesign-YourApp-MVP.md
├── 📁 agent_docs/
│   ├── tech_stack.md
│   ├── code_patterns.md
│   ├── project_brief.md
│   ├── product_requirements.md
│   └── testing.md
├── 📄 AGENTS.md                  # Universal AI instructions (The Master Contract)
├── 📄 MEMORY.md                  # Artifact-first memory for session continuity
├── 📁 specs/                     # Agent handoff artifacts (e.g. 001-feature-spec.md)
├── 📁 .cursor/rules/             # Cursor rules (preferred)
├── 📁 .claude/agents/            # Optional Claude subagents
├── 📁 .agents/skills/            # Optional Codex/Codex-compatible skills
├── 📁 .github/instructions/      # Optional Copilot scoped instructions
├── 📁 .github/prompts/           # Optional Copilot reusable prompts
├── 📄 GEMINI.md                  # Optional Antigravity/Gemini legacy memory/config pointer
├── 📄 llms.txt                   # Optional machine-readable project guide
└── 📁 src/                       # Your application code
```

### Deployment and security

Once the MVP works, do a final pass on secrets, auth, and basic abuse protections before you deploy:

1. **Security Pass:** Check dependencies, secrets, auth paths, and rate limits.
2. **AI Safety Pass:** For AI features, check prompt-injection boundaries, tool/action permissions, provider retention/training settings, logs, cost ceilings, evals, and telemetry redaction.
3. **Push & Deploy:**
   - ![Vercel](https://img.shields.io/badge/Vercel-Deploy-000?style=flat-square&logo=vercel) For Next.js, React, frontend apps.
   - ![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=flat-square&logo=cloudflare) For static sites, edge functions, and Workers AI.

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
| Trusting stale tool claims | Re-check official docs and update the last-verified date |
| Shipping AI tools without evals | Add direct, indirect, negative, auth, and failure-case prompt checks |

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

## Further reading

- [Worked example — what the workflow produces end to end](examples/reddit-to-ai/)
- [Docs index — what to read and when](docs/README.md)
- [Claude subagents and agent teams — delegated work patterns](docs/tools/claude-agent-teams.md)
- [Cursor agents, rules, memories, and background agents](docs/tools/cursor-cloud-agents.md)
- [AI agent security — threat surfaces, tool permissions, and evals](docs/ai/agent-security.md)
- [AI feature patterns — RAG, structured outputs, memory, approvals, telemetry](docs/ai/feature-patterns.md)
- [Agent tooling compatibility — choosing adapters and agent surfaces](docs/tools/agent-tooling-compatibility.md)
- [Builder exit review — no-code/AI builder production checks](docs/workflow/builder-exit-review.md)
- [Freshness policy — how time-sensitive content is maintained](docs/maintenance/freshness-policy.md)
- [Golden path checklist — end-to-end workflow validation, partially automated via `scripts/validate.py`](docs/workflow/golden-path-checklist.md)

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

PRs and issues are welcome. If you adapt this workflow, add a new tool setup, or ship something interesting with it, that is useful context for everyone else too. For community Q&A and roadmap ideas, use [Discussions](https://github.com/KhazP/vibe-coding-prompt-template/discussions). See [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md) for guidelines.

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
