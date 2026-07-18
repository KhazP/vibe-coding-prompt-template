# Worked Example: Reddit to AI

*Reconstructed example — this project shipped before the workflow existed; these docs show what following the workflow produces.*

This folder shows what the four-step workflow in this repo actually produces, applied to a real, shipped open-source project: **[Reddit to AI](https://github.com/KhazP/Reddit-to-AI)** — a Chrome extension that scrapes Reddit threads, builds a prompt from a preset, previews it with a size meter, and pastes it into Gemini, ChatGPT, Claude, or AI Studio.

## Read this first: it's a reconstruction

Reddit to AI shipped **before** this workflow was written down — nobody produced these documents at the time. What you see here is what the workflow **would have produced**, rebuilt faithfully from the real project: real feature names, real stack (vanilla JavaScript, Manifest V3, no backend), real layout. Dates line up with the project's actual timeline (first commit: May 2025).

Where the docs would normally cite statistics, they use the workflow's own **"Unverified — model knowledge"** label instead of inventing sources — exactly what Part 1 tells the AI to do when it has no web access.

## Which path it shows

This is the **Level A (vibe coder)** path — the route most visitors take: plain-English answers, short documents, free tools, and an AI coding assistant doing the heavy lifting. Developer (B) and in-between (C) documents would be longer and more technical, but the shape is identical.

## The files, and how they chain

| File | Produced by | What it is |
|---|---|---|
| [`research-reddit-to-ai.md`](reddit-to-ai/research-reddit-to-ai.md) | Part 1 | Deep-research output: concept, users, competitors, budget |
| [`PRD-reddit-to-ai-MVP.md`](reddit-to-ai/PRD-reddit-to-ai-MVP.md) | Part 2 | What the MVP does — and deliberately doesn't do |
| [`TechDesign-reddit-to-ai-MVP.md`](reddit-to-ai/TechDesign-reddit-to-ai-MVP.md) | Part 3 | How to build it: stack choice with trade-offs, structure, costs |
| [`AGENTS.md`](reddit-to-ai/AGENTS.md) | Part 4 (from `templates/AGENTS.md`) | The filled-in master plan, captured mid-build |
| [`MEMORY.md`](reddit-to-ai/MEMORY.md) | Part 4 (from `templates/MEMORY.md`) | What a living memory file looks like a few weeks in |

Each document ends with a **Handoff Context** block — the baton in the relay. Part 2 reads it from the research, Part 3 from the PRD, and Part 4 from the tech design, so you never re-answer the same questions. Watch the `Source files` line grow one arrow per stage, and the `Chosen stack` / `AI coding tool` lines appear once the tech design locks them in.

A fun detail: the PRD's **Out of Scope** list (history, batch mode, multi-language UI, more AI platforms) reads like a spoiler — the real extension shipped most of it later. That's the section working as intended: it's the v2 roadmap in disguise.

## Use it like this

- Starting your own project? Compare your Part 1–3 outputs against these to sanity-check depth and tone.
- Notice what "done" looks like: specific features, honest trade-offs, no leftover placeholder brackets, compact pages.
- Don't copy the content — copy the shape.

## Share your own

Built something with this workflow? Share it through the **Showcase submission** issue template ([`.github/ISSUE_TEMPLATE/showcase_submission.md`](../.github/ISSUE_TEMPLATE/showcase_submission.md)) — real community examples are how this folder grows.
