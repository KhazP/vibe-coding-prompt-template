---
name: vibe-review
description: Review an AI-generated diff against AGENTS.md, agent_docs, and REVIEW-CHECKLIST.md.
---

# Vibe Review

Read `AGENTS.md`, `agent_docs/`, and `REVIEW-CHECKLIST.md`. Review the current diff. Return findings first, ordered by severity, with file and line references. Focus on correctness, security, AI/tool permissions, missing tests, data leaks, and maintainability. Do not edit files.

Also call out provider retention/training, telemetry, data-boundary, permission, and builder exit-review gaps when applicable.
