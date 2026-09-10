---
name: vibe-workflow
description: "Select the appropriate planning, implementation, or debugging workflow for an app project."
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, AskUserQuestion
---

# App workflow router

Use the request and existing project state to choose the next useful action.
Load only the context needed to identify the outcome, constraints, and current
implementation. An existing file does not prove that a stage is complete.

- **New product:** use research, PRD, and technical design skills selectively.
  Quick mode needs a clear outcome, constraints, and acceptance journey; deeper
  planning is useful for unresolved integrations or consequential decisions.
- **Existing product:** implement the requested change in the current architecture.
  Use a change skill if available; missing planning documents do not require
  restarting discovery.
- **Broken behavior:** reproduce, diagnose, fix, and verify the failure. Use a
  debugging skill if available, without redoing the new-product interview.
- **Instructions or handoff only:** produce the requested artifacts and report
  their limits; do not begin an unrequested implementation or deployment.

Use `vibe-agents` when creating project instructions, `vibe-build` for a new
implementation, and an available verification skill for a relevant user journey.
Only invoke skills actually present in the target environment. The five stages
are a useful route, not five approval gates or a mandatory document set for
every edit.

Reuse answered questions and Handoff Context. Ask for missing consequential
decisions; otherwise proceed with clearly stated assumptions. Keep stable
constraints in AGENTS.md, decisions in product documents, and current progress
in MEMORY.md where the project uses it. One builder is sufficient unless
independent work and available tools justify delegation.

Complete the scope the user requested, including relevant checks and fixes.
When reporting, distinguish actual results from unperformed checks and name
any concrete blocker. Do not stop at the first implementation if a working
product was requested; do not publish merely because local work is complete.
