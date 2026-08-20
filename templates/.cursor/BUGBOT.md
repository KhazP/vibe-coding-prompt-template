# Cursor Bugbot Review Instructions

Last generated: [YYYY-MM-DD]

Use `AGENTS.md`, `agent_docs/`, and `REVIEW-CHECKLIST.md` as the review contract.

Focus on:

- Functional regressions and missing tests.
- Security issues around auth, secrets, billing, infrastructure, migrations, and production data.
- AI/tool issues: prompt injection, overbroad permissions, unsafe logs, missing evals, and destructive actions without confirmation.
- Third-party API claims that need current official docs.

Treat findings as advisory until the human or lead agent verifies them with tests and source docs.
