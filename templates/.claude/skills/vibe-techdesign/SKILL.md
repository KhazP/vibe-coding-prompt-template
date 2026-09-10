---
name: vibe-techdesign
description: "Write an MVP technical design from agreed requirements, including architecture choices and relevant tradeoffs."
allowed-tools: Read, Write, Glob, Grep, WebSearch, AskUserQuestion
---

# MVP technical design

Read the agreed requirements and reuse Handoff Context. Inspect an existing
project's stack and relevant implementation before proposing replacements.
Ask only for consequential choices that remain unresolved; a known answer
does not need another confirmation echo.

Describe the architecture needed for the core journey: component/service
boundaries, data ownership, integration contracts, deployment target, and
relevant failure behavior. Prefer the smallest design that meets requirements.
Add auth, storage, infrastructure, AI, or paid services only when justified.
Verify changing vendor details from the installed code or official sources.

Record meaningful tradeoffs, compatibility constraints, migration/recovery
requirements where applicable, and how the result will be checked. Distinguish
local test operations from external sends, production writes, and deployments.
Keep secrets out of generated documents. Do not assign broad tool permissions
or require a team of agents to execute an ordinary implementation.

Use the manifest's configured design path or `docs/TechDesign-[AppName]-MVP.md`.
Quick mode can be a short architecture and implementation plan; deeper modes
should expand only where uncertainty or risk warrants it. End with Handoff
Context carrying app, known user level, platform, budget, timeline, mode,
constraints, decisions, source files, and open questions. Continue to the next
authorized workflow stage rather than stopping solely because a document exists.

For a guided interview with unresolved requirements, consult the relevant
[optional question prompts](references/question-bank.md).

When producing a document for `vibeworkflow`, include the exact
[CLI output metadata](references/cli-output.md). This is a parser contract,
not an optional prose template.
