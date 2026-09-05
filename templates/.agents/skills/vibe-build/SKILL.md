---
name: vibe-build
description: Implement an approved new-project slice and report actual checks. For changes to an existing app use vibe-change.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, AskUserQuestion
---

# Vibe Build

Read AGENTS.md, MEMORY.md, the manifest's product documents, and relevant agent_docs. Establish acceptance criteria for one usable slice and implement within existing authorization. Preserve uncommitted work and record an actual recovery checkpoint before risky changes; never fabricate a commit or backup.

Start with a functioning screen or equivalent observable output. Add authentication, a database, infrastructure, and AI only when requirements justify them. Run the project's applicable checks after reviewing commands; doctor is setup validation only. Use `../vibe-verify/SKILL.md` for the actual journey. For AI features also check failure behavior, data boundaries, and permission denial where relevant.

Update current progress and next steps in MEMORY.md; stable rules remain in AGENTS.md. Report Changed, Checked with commands/results, Not checked, Next decision, and Recovery. Do not treat a passing build as proof of working behavior.
