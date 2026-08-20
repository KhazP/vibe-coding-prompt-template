# AI Feature Patterns

Last verified: 2026-05

Use this when: the MVP might include product AI, RAG, tool calls, memory, voice, browser use, or local models.

## Quick Answer

Default to the smallest useful AI feature:

- Server-side model call
- Structured output
- Clear data boundary
- Small eval set
- Logging/cost limits
- Human approval for risky actions

## Choose A Pattern

| Need | Start with | Avoid at MVP |
|------|------------|--------------|
| Generate text, classify, extract data | Server route + structured output schema | Free-form JSON parsing |
| Answer from project/private docs | RAG with scoped retrieval and citations | Dumping every file into context |
| Review a small stable corpus | Long context plus caching where supported | Premature vector DB setup |
| Take user actions | Tool calls with read/write/destructive classes | Autonomous writes |
| Voice | Realtime only if speech is core UX | Voice as decoration |
| Browser/computer use | Sandbox-only last-mile automation | Replacing real APIs with clicks |
| Memory | Explicit user/project/session memory | "Remember everything" |
| Local/private AI | Smoke-test output and tool calling first | Assuming local models behave like cloud models |

## Checklist

- [ ] What can the model see?
- [ ] What structured output does the app require?
- [ ] What tools/actions can AI call?
- [ ] Which actions need approval?
- [ ] What happens when the provider fails or quota runs out?
- [ ] What prompt set proves the feature works?
- [ ] Where are traces, logs, and costs recorded?

## Example

For an AI support assistant, start with read-only RAG over help docs, cite sources, block account changes, log trace IDs, and test direct, indirect, negative, auth-required, and failure prompts.

## Links

- [OpenAI Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs)
- [OpenAI tools](https://developers.openai.com/api/docs/guides/tools)
- [OpenAI Realtime API](https://developers.openai.com/api/docs/guides/realtime)
- [OpenTelemetry GenAI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/)
