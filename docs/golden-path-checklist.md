# Golden Path Integration Checklist

Use this checklist to validate the end-to-end workflow produces the expected files at each step.

## Step 1: Deep Research

**Input:** User's idea description + `part1-deepresearch.md` prompt
**Output:**
- [ ] `docs/research-[AppName].md` exists (`.txt` accepted for backward compatibility)
- [ ] Document includes: market analysis, competitors, technical recommendations, MVP feature prioritization

**Handoff to Step 2:** Research document or active chat session

## Step 2: Product Requirements (PRD)

**Input:** Research output + `part2-prd-mvp.md` prompt
**Output:**
- [ ] `docs/PRD-[AppName]-MVP.md` exists
- [ ] Document includes: product overview, target users, must-have features, success metrics, design direction

**Handoff to Step 3:** PRD document or active chat session

## Step 3: Technical Design

**Input:** PRD output + `part3-tech-design-mvp.md` prompt
**Output:**
- [ ] `docs/TechDesign-[AppName]-MVP.md` exists
- [ ] Document includes: tech stack, project structure, implementation approach, deployment plan, cost estimates

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
  - Cursor: `.cursor/rules/` or `.cursorrules`
  - Gemini CLI: `GEMINI.md`
  - VS Code + Copilot: `.github/copilot-instructions.md`

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
