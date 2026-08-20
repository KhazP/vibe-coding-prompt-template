# Review Prompt

Review the current diff against `AGENTS.md`, `agent_docs/`, and `REVIEW-CHECKLIST.md`.

Prioritize:

- Bugs, regressions, security issues, data leaks, and missing tests.
- Architecture drift from `agent_docs/tech_stack.md` and `agent_docs/code_patterns.md`.
- AI/tool permission issues, prompt-injection risks, missing evals, and unsafe logs.

Return findings first with file/line references. If no findings, say that clearly and list residual test gaps.
