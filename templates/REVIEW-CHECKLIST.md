# Review Checklist

Do not mark work complete until the relevant checks pass.

## Basic Checks

- [ ] Diff is focused on the requested task.
- [ ] No unrelated files were rewritten.
- [ ] No secrets, tokens, private logs, or production exports were exposed.
- [ ] Protected areas were not changed without approval.
- [ ] Tests/typecheck/build passed or failures are explained.
- [ ] UI changes were checked in a browser/device when applicable.

## AI Checks

Use only if AI, MCP, tool calls, RAG, local models, or builders are involved.

- [ ] Model-visible data is documented.
- [ ] Retrieved docs/web/issues/uploads/tool output are treated as untrusted data.
- [ ] Risky actions require approval.
- [ ] Direct, bad/indirect, auth-required, failure, and tool/action checks passed.
- [ ] Logs/traces do not expose secrets or customer data.
- [ ] Provider retention/training settings were checked before launch.
- [ ] Builder output passed export, local build, secrets, auth/RLS, and rollback review.

## Final Evidence

The final response should include:

- Files changed
- Commands run
- Test/build/browser results
- AI/tool eval results, if applicable
- Remaining risks
