# GEMINI.md — Antigravity / Gemini Legacy Configuration for [App Name]

Last generated: [YYYY-MM-DD]

## Source of Truth

Read `AGENTS.md` first, then use `agent_docs/` for details. Use this file for Antigravity/Gemini-compatible agents only after verifying current Google tooling support.

## Operating Rules

- Propose a plan before editing.
- Keep changes scoped to the current phase.
- Use the exact verification commands in `agent_docs/testing.md`.
- Use `/memory show`, `/memory refresh`, `/tools`, `/chat save <tag>`, and `/compress` when useful.
- Keep tool approvals conservative.
- Do not enable broad always-allow modes unless the user explicitly accepts the risk.
- Do not auto-approve MCP, shell/write/network, production, billing, or destructive tools.
- For AI product work, verify structured outputs, provider retention/training settings, evals, telemetry, cost ceilings, and approval gates.

## Commands

- Setup: `[from Tech Design]`
- Dev: `[from Tech Design]`
- Test: `[from Tech Design]`
- Lint/format/typecheck/build: `[from Tech Design]`
