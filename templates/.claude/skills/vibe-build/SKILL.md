---
name: vibe-build
description: Build an approved MVP task using AGENTS.md, agent_docs, tests, browser checks, AI evals, and evidence reporting.
---

# Vibe Build

Read `AGENTS.md`, `agent_docs/project_brief.md`, `agent_docs/tech_stack.md`, `agent_docs/code_patterns.md`, `agent_docs/testing.md`, and the active task/spec.

Workflow:
1. Summarize the current phase and acceptance criteria.
2. Propose the smallest safe implementation plan.
3. Build one feature at a time.
4. Run the documented checks.
5. For AI/MCP/tool changes, run the documented direct, indirect, negative, auth-required, failure, trajectory, approval, and data-boundary checks.
6. Update `MEMORY.md` with major decisions or completed phases.
7. Return evidence: changed files, commands, results, screenshots/browser notes if applicable, AI eval/tool-call evidence if applicable, unresolved risks, and rollback notes.

Do not auto-approve untrusted MCP servers, shell/write/network tools, production actions, billing actions, or destructive changes.
