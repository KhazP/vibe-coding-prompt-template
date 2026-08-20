# Testing Strategy

## Frameworks
- **Unit Tests:** [Tool, e.g., Vitest]
- **Integration Tests:** [Tool]
- **E2E Tests:** [Tool, e.g., Playwright]
- **Browser / Device Checks:** [Tool or manual flow]
- **AI Evals:** [Tool or golden prompt set, if applicable]

## Rules & Requirements
- **Coverage:** Aim for [X]% code coverage on critical paths.
- **Before Commit:** Always run `[project-specific command]` before verifying a task is complete.
- **Failures:** NEVER skip tests or mock out assertions to make a pipeline pass without Human approval. If an Agent breaks a test, the Agent must fix it.
- **Browser Evidence:** For UI changes, capture browser/device evidence or describe the exact manual verification.
- **AI Evidence:** For AI changes, include prompt/action evidence and data-boundary checks.

## Execution
- Command to run all tests: `[Command]`
- Command to run a single test file: `[Command pattern]`
- Command to run typecheck/build: `[Command]`
- Command to run browser checks: `[Command or manual steps]`
- Command to run AI/action checks: `[Command or manual steps]`

## AI Verification (If Applicable)
- **Direct prompts:** [Expected tool and output]
- **Indirect prompts:** [Expected routing or refusal]
- **Negative prompts:** [What must not trigger tool calls]
- **Auth-required prompts:** [Expected login/permission behavior]
- **Failure prompts:** [Provider timeout, quota, malformed input, retry/idempotency]
- **Data assertions:** Model-visible output and logs contain only the intended data
