# Artifact Review Checklist 🔍

> **AGENTS:** Do not mark a feature or task as "Complete" until you verify these checks manually or via automated test runs. Provide terminal logs or browser testing results as proof. 
> **HUMANS:** Use this checklist before merging Agent-generated code.

## Code Quality & Safety
- [ ] No `any` types used (or strictly justified with `unknown` and type guards).
- [ ] Protected files/directories (like infrastructure or migrations) were NOT modified without permission.
- [ ] No existing, unrelated tests were deleted or skipped.
- [ ] Component/function is modular and does not break established architecture boundaries.
- [ ] No secrets, tokens, credentials, private logs, or production data were printed, committed, or sent to third parties.

## Execution & Testing
- [ ] Application compiles without fatal errors.
- [ ] Linter passes (`npm run lint` or equivalent).
- [ ] Type check passes (`tsc --noEmit` or equivalent).
- [ ] Related Unit/Integration tests pass.
- [ ] UI is decently responsive across Desktop and Mobile viewports (if applicable).
- [ ] User-visible changes were verified in a real browser or device simulator when applicable.

## AI / Agent Safety
- [ ] AI actions are narrow, documented, and classify read/write/destructive behavior.
- [ ] Prompt-injection and data-exfiltration risks were considered for tool calls, web content, file reads, and uploads.
- [ ] AI evals or golden prompts cover direct, indirect, negative, auth-required, and failure cases.
- [ ] AI features were checked through the real product surface or a documented direct evaluation harness.
- [ ] Model-visible output and logs contain only intended data.
- [ ] Cost ceilings, logging, telemetry, and data-retention behavior match the PRD/Tech Design.

## Tool-Specific Review
- [ ] Cursor changes were reviewed in the diff view; background-agent branches/logs were checked.
- [ ] Claude/Codex/Gemini subagent outputs were reviewed against file ownership and did not overwrite unrelated work.
- [ ] Bugbot, code review agents, or equivalent review tools were treated as advisory, not as a replacement for tests.

## Artifact Handoff
- [ ] The `MEMORY.md` file was updated with any new architectural decisions made during this task.
- [ ] Any obsolete spec files in the workspace have been marked as resolved or archived.
