# Vibe-Coding Wiki (Dec 2025)

This wiki mirrors the latest repository content so you can copy/paste the right prompts into your AI tool of choice. The repo provides four prompt files (`part1`–`part4`) and a README describing two workflows:

- **Automated**: Use the Vibe-Coding web app to run the full flow without copy/paste – https://vibeworkflow.app/#/vibe-coding  
- **Manual**: Copy the prompts below into Gemini, Claude, or ChatGPT and follow the steps.

## 0) Prerequisites
- Pick an AI platform: **Gemini 3 Pro** (AI Studio), **Claude Sonnet 4.5** (Claude.ai), or **ChatGPT 5.1**.
- Pick an AI coding agent/IDE (one is enough): Claude Code, Gemini CLI, Cursor, Windsurf, Cline, Aider, Copilot Agent, etc.
- Optional: Node.js 22+ for terminal tools.

## 1) Deep Research (20–30 min) → `research-[YourApp].txt`
- Open `part1-deepresearch.md` in the repo.
- Paste it into your AI chat (or select profile A/B/C in the web app).
- Answer the tailored questions; the AI returns a full research brief (market, competitors, tech options, costs).
- Save the output as `research-[YourApp].txt`.

## 2) Product Requirements (15–20 min) → `PRD-[YourApp]-MVP.md`
- Open `part2-prd-mvp.md`.
- Start a new AI chat, attach your research file, and answer the prompts about users, core features, success metrics, and UX.
- Save as `PRD-[YourApp]-MVP.md`.

## 3) Technical Design (15–20 min) → `TechDesign-[YourApp]-MVP.md`
- Open `part3-tech-design-mvp.md`.
- Provide your PRD (and research if helpful). The AI recommends stack, architecture, complexity trade-offs, and deployment approach for 2025 (no-code, low-code, or full-code).
- Save as `TechDesign-[YourApp]-MVP.md`.

## 4) Generate AI Agent Instructions (5–10 min) → `AGENTS.md` + configs
- Open `part4-notes-for-agent.md`.
- Give the AI your PRD and Technical Design. It will generate:
  - `AGENTS.md` (universal build instructions; renamed from NOTES.md in v2.0.0)
  - Agent configs as needed: `CLAUDE.md`, `GEMINI.md`, `.aider.conf.yml`, `.clinerules`, `.cursorrules`, `.windsurfrules`.
- Place these files in your project root.

## 5) Build with an AI Agent (1–3 hrs)
- Point your agent/IDE at the project and say: “Read AGENTS.md (and the tool config). Implement the MVP step by step.”
- Suggested starter prompts (from README):
  - Beginner: “I'm new to coding. Read AGENTS.md and guide me step-by-step to build this MVP.”
  - Intermediate: “Read AGENTS.md and docs. Build core features first, then polish.”
  - Developer: “Review AGENTS.md and architecture. Implement Phase 1 with tests.”

## Expected Project Structure
```
your-app/
├── docs/
│   ├── research-YourApp.txt
│   ├── PRD-YourApp-MVP.md
│   └── TechDesign-YourApp-MVP.md
├── AGENTS.md
├── CLAUDE.md / GEMINI.md / .aider.conf.yml / .clinerules / .cursorrules / .windsurfrules (as needed)
├── README.md
├── .env.example
└── src/ (generated code)
```

## Tips & Guardrails (from README)
- Use the newest models: Gemini 3 Pro (1M ctx), Claude Sonnet 4.5 (200K/1M beta), ChatGPT 5.1.
- Ask agents to show their plan, run tests, and map work to the PRD before merging.
- Keep budgets in mind; have a free backup stack (Cline + Gemini CLI).
- For sensitive work, prefer org/API keys and keep secrets in vaults.

## Troubleshooting
- “AI ignores my docs” → Start with “Read AGENTS.md, PRD, TechDesign. Summarize key requirements first.”
- “Code doesn’t match PRD” → “Re-read PRD section on [feature]; list acceptance criteria; refactor.”
- “Overcomplicating” → Add: “Prioritize MVP scope. Deliver simplest working implementation first.”
- “Deployment failing” → “Walk through deployment checklist, verify env vars, then run platform health command.”

## Contributing
PRs and issues welcome: prompt fixes, new agent configs, or example MVPs built with this workflow. License: MIT.
