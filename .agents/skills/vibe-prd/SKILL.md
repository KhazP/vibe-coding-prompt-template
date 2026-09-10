---
name: vibe-prd
description: "Write or revise an MVP product requirements document with scope and observable acceptance criteria."
allowed-tools: Read, Write, Glob, Grep, AskUserQuestion
---

# Product requirements

Use existing research, the user's request, and Handoff Context to define the
product outcome. Do not repeat an interview whose answers are already known.
Ask only for unresolved requirements that affect scope or acceptance; make
reversible assumptions explicit and continue when the brief is sufficient.

Write a PRD proportional to the product. Cover the target user and problem,
the core journey, MVP scope, out-of-scope work, meaningful failure states,
constraints, and observable acceptance criteria. Include AI, accounts, payments,
analytics, compliance, or automation only when the product needs them.

For a small project, a short document is enough. For a complex one, clarify
dependencies and consequential decisions before they block implementation.
Avoid fixed feature counts, mandatory personas, or market research that does
not change the product decision. Distinguish agreed facts from assumptions.

Use the manifest's configured PRD path or `docs/PRD-[AppName]-MVP.md`. End with
Handoff Context carrying app, known user level, platform, budget, timeline,
mode, constraints, decisions, source files, and open questions. Do not present
planned acceptance checks as executed evidence. If the user requested the
whole workflow, continue into the technical design within that scope.

For a guided interview with unresolved requirements, consult the relevant
[optional question prompts](references/question-bank.md).

When producing a document for `vibeworkflow`, include the exact
[CLI output metadata](references/cli-output.md). This is a parser contract,
not an optional prose template.
