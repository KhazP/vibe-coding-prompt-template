# Changelog

All notable changes to the Vibe-Coding Prompt Template will be documented in this file.

## [Unreleased] - March 2026 — Agentic Era v2.0

This major update shifts the repository from "chat-based prompt generation" to **Artifact-First Memory** and **Multi-Agent Orchestration**, reflecting the massive tool updates from February and March 2026 (Cursor Cloud Agents, Claude Agent Teams, and Copilot custom agents).

### Added
- **Artifact-First Memory:** Introduced `MEMORY.md` and `spec.md` concepts to prevent context window overload during long coding sessions.
- **Claude Agent Teams Guide:** Added `docs/claude-agent-teams.md` covering parallel sub-agents and the Team Lead approval flow.
- **Cursor Cloud Agents Guide:** Added `docs/cursor-cloud-agents.md` focusing on dynamic context discovery and file-centric memory.
- **Visual README Loop:** A modernized `╭──╮` looping diagram for the Execute -> Verify workflow.

### Changed
- **README Redesign:** Overhauled the main README to use collapsibles `<details open>`, a table of contents, and a faster 5-step quick start.
- **Tool Matrix:** Updated the tool recommendation matrix to clearly separate prototype tools (Lovable) from production tools (v0), and highlighted multi-agent capabilities.
- **Part 4 Prompts (`part4-notes-for-agent.md`):** Replaced legacy prompt structures with 2026 Agentic Boilerplate conventions, including explicit blocked directories and strict TypeScript guidelines.

### Removed
- **MCP Support Guide:** Removed `mcp-support.md` as standard tools now natively handle context retrieval much better, shifting the focus to native plugin workflows and Agent Teams.
