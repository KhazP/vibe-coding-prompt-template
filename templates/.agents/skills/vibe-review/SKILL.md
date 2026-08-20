---
name: vibe-review
description: Review generated code against the PRD, tech design, and verification checklist.
---

Read `AGENTS.md`, `REVIEW-CHECKLIST.md`, and the current diff.

Return:
- Findings first, prioritized by severity
- Missing tests or verification
- AI/MCP safety concerns, if applicable
- Provider retention/training, telemetry, data-boundary, and permission gaps, if applicable
- Builder exit-review gaps, if the project used an AI/no-code builder
- Residual risks before merge
