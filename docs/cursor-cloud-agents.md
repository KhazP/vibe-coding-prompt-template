# Cursor Cloud Agents & Dynamic Context (2026 Guide)

As of early 2026, Cursor has shifted heavily toward **Cloud Agents** and **Dynamic Context Discovery**. If you are using Cursor for your MVP build (Step 5 of the vibe-coding workflow), use these patterns to prevent context bloat and silent breakages.

## 1. File-Centric Memory (Dynamic Context)

Instead of keeping everything in the chat window, Cursor agents now perform much better when they read and write to physical files. 

### Do This:
- When starting a new feature, tell the Agent: *"Review my PRD and write a `specs/001-feature-name.md` file detailing your plan."* 
- Have the agent save long terminal logs or error outputs into physical files (e.g., `logs/build-error.md`) and command it to read that file to debug, rather than pasting 1,000 lines of error codes into the chat.

## 2. Compaction & Hard Resets

Because Cursor can now retrieve context so efficiently from your workspace, you do **not** need to keep a single Cursor chat open for days. 

- **The Pattern:** Build one logical feature. Once it works and is committed, tell Cursor: *"Summarize the current state of architecture and decisions made into `MEMORY.md`."*
- Hit `Ctrl/Cmd + L` to start a completely fresh chat for the next feature. 
- In the new chat, start with: *"Read `AGENTS.md` and `MEMORY.md`, then let's build the next feature."*

## 3. Rules & Instructions (`.cursor/rules/`)

Cursor has moved away from the monolithic `.cursorrules` file. 

Create a `.cursor/rules/` directory and split your rules logically. For example:
- `01-architecture.mdc`: Hexagonal or feature-folder rules.
- `02-testing.mdc`: Instructions to always run `pnpm test` before concluding a task.
- `03-libraries.mdc`: Instructions on which UI libraries (like shadcn/ui) to enforce.

This progressive disclosure ensures the agent only loads the rules relevant to the files it is actively touching.