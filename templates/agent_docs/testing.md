# Testing

## Required Before Completion

- [ ] Relevant tests pass.
- [ ] Typecheck/build passes.
- [ ] User-visible changes are checked in a browser or device when applicable.
- [ ] No tests were skipped or weakened without human approval.
- [ ] Evidence is reported in the final response.

## Commands

- All tests: `[command]`
- Single test: `[command pattern]`
- Typecheck: `[command]`
- Lint/format: `[command]`
- Build: `[command]`
- Browser/device check: `[command or manual flow]`

## What To Test

| Change type | Minimum check |
|-------------|---------------|
| Pure logic | Unit test |
| API/data flow | Integration test |
| UI behavior | Browser/device check |
| Auth, billing, migrations, deployment | Human review plus focused test |
| AI/tool behavior | Prompt/tool eval plus data-boundary check |

## AI Checks

Fill this in only if the product uses AI.

- Direct prompt: [expected result]
- Bad/indirect prompt: [expected refusal or safe behavior]
- Auth-required prompt: [expected permission behavior]
- Failure case: [provider timeout/quota/malformed response]
- Tool/action check: [expected tool call and blocked tool calls]
- Data check: [what must not appear in model output or logs]
