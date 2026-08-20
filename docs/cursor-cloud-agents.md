# Cursor Agents, Rules, Memories, and Background Agents

Last verified: 2026-04

Cursor works best with this template when `AGENTS.md` stays the cross-tool contract and Cursor-specific behavior lives in scoped project rules.

## Recommended setup

Use this shape for Cursor projects:

```text
your-app/
├── AGENTS.md
├── MEMORY.md
├── agent_docs/
└── .cursor/
    ├── rules/
    │   ├── 00-project.mdc
    │   ├── 10-architecture.mdc
    │   └── 20-testing-review.mdc
    └── environment.json.example
```

Use `AGENTS.md` alone for simple projects. Add `.cursor/rules/*.mdc` when you need scoped, composable behavior.

## Rule patterns

Use small MDC rules instead of one large `.cursorrules` file:

```mdc
---
alwaysApply: true
---

Read AGENTS.md first. Use agent_docs/ for implementation details. Propose a plan before multi-file edits.
```

```mdc
---
globs:
  - "src/**/*.tsx"
description: React UI and accessibility expectations
---

Follow the component patterns in agent_docs/code_patterns.md. Verify user-visible changes in a real browser.
```

Keep large product details in `agent_docs/`; rules should point to them.

## Memories and repo-owned context

Cursor Memories are tool-side/project-scoped generated context. They can help the assistant remember preferences, but they do not replace repo-owned `MEMORY.md`.

Use this split:

- `MEMORY.md`: versionable architecture decisions, current phase, known issues
- `.cursor/rules/*.mdc`: persistent Cursor behavior
- Cursor Memories: personal/tool-side facts that may require review or approval

## Background agents

Use background agents for bounded, branch-friendly tasks:

- “Audit these three files and propose fixes”
- “Run the test suite and summarize failures”
- “Implement this single approved spec on a new branch”

Before using them, confirm GitHub is connected, branches are isolated, and any `.cursor/environment.json` commands are idempotent. Do not put secrets in setup commands, and keep generated logs or large artifacts out of always-loaded context.

## Review and safety loop

- Check the diff after each agent run.
- Validate terminal logs and exit codes, not just prose summaries.
- Use Bugbot or `cursor review` where available, but still run project tests.
- Use `.cursorignore` or indexing ignores for generated files, build artifacts, local logs, and sensitive files.

## Official references

- [Cursor Rules](https://docs.cursor.com/en/context)
- [Cursor Memories](https://docs.cursor.com/en/context/memories)
- [Cursor Background Agents](https://docs.cursor.com/en/background-agents)
- [Cursor Codebase Indexing](https://docs.cursor.com/context/codebase-indexing)
- [Cursor Bugbot](https://docs.cursor.com/bugbot)
- [Cursor changelog](https://cursor.com/changelog)
