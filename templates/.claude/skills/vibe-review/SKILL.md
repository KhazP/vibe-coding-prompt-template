---
name: vibe-review
description: Review a proposed change against requirements, regressions, verification evidence, and relevant security risks.
allowed-tools: Read, Glob, Grep, Bash
---

# Vibe Review

Read the actual diff, applicable instructions, acceptance criteria, and check results. Trace changed behavior into its callers and tests. Look for concrete regressions, missing error handling, incorrect assumptions, and relevant authorization or data exposure issues.

Report actionable findings with file/line, trigger, impact, and suggested correction. Distinguish demonstrated defects from missing evidence. Prioritize correctness and scope over cosmetic preferences. Do not claim independent checks unless you ran them. If there are no findings, say so and disclose remaining verification gaps. Review does not authorize unrelated edits or publication.
