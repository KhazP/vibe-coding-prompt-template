---
applyTo: "**/*.{test,spec}.{ts,tsx,js,jsx,py,go,rs,java,cs}"
---

# Testing Instructions

Read `agent_docs/testing.md`.

- Add the test level required by the Tech Design.
- Do not delete, weaken, or skip unrelated tests to make a pipeline pass.
- For UI work, include browser/device verification where required.
- For AI features, include direct, indirect, negative, auth-required, failure, and trajectory checks.
- Report exact commands and results in the PR or final handoff.
