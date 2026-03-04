# Testing Strategy

## Frameworks
- **Unit Tests:** [Tool, e.g., Vitest]
- **E2E Tests:** [Tool, e.g., Playwright]

## Rules & Requirements
- **Coverage:** Aim for [X]% code coverage on critical paths.
- **Before Commit:** Always run `[npm run test]` before verifying a task is complete.
- **Failures:** NEVER skip tests or mock out assertions to make a pipeline pass without Human approval. If an Agent breaks a test, the Agent must fix it.

## Execution
- Command to run all tests: `[Command]`
- Command to run a single test file: `[Command pattern]`