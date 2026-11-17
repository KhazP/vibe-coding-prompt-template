---
applyTo: "**/*.{ts,js,py,go,rs,java,cs,sql}"
---

# Backend Instructions

Read `AGENTS.md`, `agent_docs/tech_stack.md`, and `agent_docs/code_patterns.md`.

- Keep business logic out of transport handlers unless the approved stack uses that pattern.
- Validate all external input at boundaries.
- Do not modify production data paths without approval. Follow the authorization rules in `AGENTS.md`: editing auth, billing, infrastructure, or migration source is ordinary work in scope; confirm authorization before applying it to a live system, deploying, sending externally, or changing access.
- Keep secrets server-side and out of logs, traces, model-visible content, and client payloads.
- For AI/tool routes, classify actions as read-only, write, destructive, external network, credential-bearing, or production.
