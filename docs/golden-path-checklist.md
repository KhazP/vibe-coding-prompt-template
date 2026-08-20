# Golden Path Integration Checklist

Use this checklist to validate the end-to-end workflow produces the expected files at each step.

## Step 1: Deep Research

**Input:** User's idea description + `part1-deepresearch.md` prompt
**Output:**
- [ ] `docs/research-[AppName].md` exists (`.txt` accepted for backward compatibility)
- [ ] Document includes: market analysis, competitors, technical recommendations, MVP feature prioritization
- [ ] Major market, pricing, model, and tool claims include source URLs and access dates
- [ ] Optional `structured_summary` exists when downstream automation will use the research

**Handoff to Step 2:** Research document or active chat session

## Step 2: Product Requirements (PRD)

**Input:** Research output + `part2-prd-mvp.md` prompt
**Output:**
- [ ] `docs/PRD-[AppName]-MVP.md` exists
- [ ] Document includes: product overview, target users, must-have features, success metrics, design direction
- [ ] AI/automation scope is explicit: none, in-app AI, internal automation, or hybrid
- [ ] Data access, human-confirmation rules, and eval scenarios are captured if AI is in scope

**Handoff to Step 3:** PRD document or active chat session

## Step 3: Technical Design

**Input:** PRD output + `part3-tech-design-mvp.md` prompt
**Output:**
- [ ] `docs/TechDesign-[AppName]-MVP.md` exists
- [ ] Document includes: tech stack, project structure, implementation approach, deployment plan, cost estimates
- [ ] Target surface is explicit: web app, mobile app, desktop app, internal tool, or hybrid
- [ ] AI provider strategy, data boundaries, fallback behavior, and verification commands are captured when applicable

**Handoff to Step 4:** Technical Design document

## Step 4: Agent Configuration

**Input:** PRD + Technical Design + `part4-notes-for-agent.md`
**Output:**
- [ ] `AGENTS.md` exists in project root
- [ ] `MEMORY.md` exists in project root
- [ ] `REVIEW-CHECKLIST.md` exists in project root
- [ ] `agent_docs/tech_stack.md` exists and is populated
- [ ] `agent_docs/code_patterns.md` exists and is populated
- [ ] `agent_docs/project_brief.md` exists and is populated
- [ ] `agent_docs/product_requirements.md` exists and is populated
- [ ] `agent_docs/testing.md` exists and is populated
- [ ] Tool-specific config exists based on user selection:
  - Claude Code: `CLAUDE.md`
  - Claude Code optional subagents: `.claude/agents/*.md`
  - Cursor: `.cursor/rules/*.mdc` (legacy `.cursorrules` only if requested)
  - Gemini CLI: `GEMINI.md`
  - Gemini CLI optional settings: `.gemini/settings.json`
  - Codex: `.codex/config.toml` and optional `.agents/skills/*/SKILL.md`
  - VS Code + Copilot: `.github/copilot-instructions.md`
- [ ] Tool configs are concise pointers to `AGENTS.md` and `agent_docs/`, not giant prompt dumps

**Handoff to Step 5:** All files above in project root

## Step 5: Build MVP

**Input:** All Step 4 outputs + user's coding environment
**Expected behavior:**
- [ ] Agent reads `AGENTS.md` first
- [ ] Agent proposes a Phase 1 plan before coding
- [ ] Agent builds one feature at a time
- [ ] Agent runs tests/verification after each feature
- [ ] Agent updates `AGENTS.md` current state after progress
- [ ] Agent follows patterns in `agent_docs/code_patterns.md`
- [ ] UI changes are verified in a real browser or device viewport
- [ ] AI changes run direct, indirect, negative, auth-required, and failure-case prompt/action checks
- [ ] AI features are tested through the real product surface or a documented direct evaluation harness

## File contract summary

```
your-app/
├── docs/
│   ├── research-[AppName].md       ← Step 1 output
│   ├── PRD-[AppName]-MVP.md        ← Step 2 output
│   └── TechDesign-[AppName]-MVP.md ← Step 3 output
├── AGENTS.md                       ← Step 4 output (master plan)
├── MEMORY.md                       ← Step 4 output (session continuity)
├── REVIEW-CHECKLIST.md             ← Step 4 output
├── agent_docs/                     ← Step 4 output (detail docs)
│   ├── tech_stack.md
│   ├── code_patterns.md
│   ├── project_brief.md
│   ├── product_requirements.md
│   └── testing.md
├── [tool-specific configs]         ← Step 4 output
│   ├── CLAUDE.md / .claude/agents/
│   ├── .cursor/rules/
│   ├── GEMINI.md / .gemini/settings.json
│   ├── .codex/config.toml / .agents/skills/
│   └── .github/copilot-instructions.md
├── specs/                          ← Created during Step 5 (handoff artifacts)
└── src/                            ← Created during Step 5 (application code)
```

## Claude skill discovery check

If using Claude Code skills, verify:
- [ ] `/vibe-research` finds and reads `docs/research-*.md` (or `.txt`)
- [ ] `/vibe-prd` finds and reads `docs/research-*.md` and writes `docs/PRD-*.md`
- [ ] `/vibe-techdesign` finds and reads `docs/PRD-*.md` and writes `docs/TechDesign-*.md`
- [ ] `/vibe-agents` finds `docs/PRD-*.md` and `docs/TechDesign-*.md` and generates all config files
- [ ] `/vibe-build` finds `AGENTS.md` and `agent_docs/` and starts the build loop

## AI verification check

If the project includes product AI:
- [ ] AI actions, inputs, outputs, and auth boundaries are documented
- [ ] Read/write/destructive action classifications are explicit
- [ ] Model-visible output and logs contain only the intended data
- [ ] Prompt-injection and data-exfiltration risks are covered by negative tests
- [ ] Cost ceilings, telemetry, and data-retention expectations match the PRD
