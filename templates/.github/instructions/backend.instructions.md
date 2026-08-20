---
applyTo: "**/*.{ts,js,py,go,rs,java,cs,sql}"
---

# Backend Instructions

Read `AGENTS.md`, `agent_docs/tech_stack.md`, and `agent_docs/code_patterns.md`.

- Keep business logic out of transport handlers unless the approved stack uses that pattern.
- Validate all external input at boundaries.
- Do not modify migrations, auth, billing, infrastructure, or production data paths without approval.
- Keep secrets server-side and out of logs, traces, model-visible content, and client payloads.
- For AI/tool routes, classify actions as read-only, write, destructive, external network, credential-bearing, or production.
