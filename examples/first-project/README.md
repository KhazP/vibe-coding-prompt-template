# First project: Reading List

**Authored worked example**, not a recorded session. No market research or cross-tool test results are claimed.

## Follow the manual path

Each stage can start in a **fresh chat** with its listed inputs.

1. **Idea:** “I want a personal reading list. Add and remove book titles, and keep them after reloading. One browser, no account, no paid services.”
2. **Research:** Paste [Part 1](../../part1-deepresearch.md) with the idea. A research **request** asks a browsing tool to investigate; **findings** are its actual sourced output. Research is optional for this personal exercise; no demand claims are made here.
3. **PRD:** Paste [Part 2](../../part2-prd-mvp.md), the idea, and any actual findings. [PRD.md](PRD.md) shows the sample output.
4. **Technical design:** Paste [Part 3](../../part3-tech-design-mvp.md) and attach the PRD. [TECH_DESIGN.md](TECH_DESIGN.md) shows the sample output.
5. **Agent files:** Paste the full [Part 4](../../part4-notes-for-agent.md), which includes the templates; attach the PRD and technical design. Name your coding assistant. In a new `reading-list/` folder, save them as `docs/PRD-ReadingList-MVP.md` and `docs/TechDesign-ReadingList-MVP.md`. Save the returned agent files with their specified paths.
6. **Build:** Open that folder in your coding assistant: “Read AGENTS.md and build the PRD’s reading list. Check its acceptance steps.” [index.html](index.html) is the reference implementation.

## Run and check

With Python 3 installed, run inside the folder containing `index.html`:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000. Add “Dune” using Enter, reload, remove it, and reload again. Try a whitespace-only title. Expected results are in the PRD. **Browser verification: pending.**

Tiny follow-up: “Change the Add book button to Save book. Recheck adding, removing, and reloading.”

For another fresh chat, attach the current documents and source:

> Continue this Reading List project. Read the attached files; summarize the current behavior and pending checks. My next change is: [describe it]. Preserve the agreed scope, and report only checks you actually perform.
