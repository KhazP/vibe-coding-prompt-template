<p align="center">
  <img src="https://img.shields.io/badge/Vibe--Coding-Workflow-blueviolet?style=for-the-badge&logo=rocket&logoColor=white" alt="Vibe-Coding Workflow" height="40"/>
</p>

<h3 align="center">Vibe Workflow — start a project with AI</h3>

<p align="center">
  <strong>Four complete prompts to turn your idea into a plan, then build it with your AI coding assistant.</strong>
</p>

<p align="center">
  Used on projects like <a href="https://vibeworkflow.app">vibeworkflow.app</a>, <a href="https://moneyvisualiser.com">moneyvisualiser.com</a>, <a href="https://caglacabaoglu.com">caglacabaoglu.com</a>, and <a href="https://alpyalay.org/realdex">RealDex App</a>.
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="MIT License"/></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome"/></a>
  <a href="https://github.com/KhazP/vibe-coding-prompt-template/stargazers"><img src="https://img.shields.io/github/stars/KhazP/vibe-coding-prompt-template?style=flat-square&color=yellow" alt="Stars"/></a>
  <a href="https://github.com/KhazP/vibe-coding-prompt-template/issues"><img src="https://img.shields.io/github/issues/KhazP/vibe-coding-prompt-template?style=flat-square" alt="Issues"/></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Claude-Anthropic-orange?style=flat-square&logo=anthropic" alt="Claude"/>
  <img src="https://img.shields.io/badge/Gemini-Google-4285F4?style=flat-square&logo=google" alt="Gemini"/>
  <img src="https://img.shields.io/badge/ChatGPT-OpenAI-412991?style=flat-square&logo=openai" alt="ChatGPT"/>
  <img src="https://img.shields.io/badge/Cursor-Editor-000000?style=flat-square&logo=cursor" alt="Cursor"/>
  <img src="https://img.shields.io/badge/VS_Code-Microsoft-007ACC?style=flat-square&logo=visualstudiocode" alt="VS Code"/>
  <a href="https://www.npmjs.com/package/vibeworkflow"><img src="https://img.shields.io/badge/npx_vibeworkflow-CLI-CB3837?style=flat-square&logo=npm" alt="npx vibeworkflow"/></a>
</p>

---

## Start a project

**Copy a prompt, answer its questions, save the result, and move to the next step.** You can use a fresh chat for every prompt; attach the saved documents listed below.

The prompts are deliberately detailed and self-contained. Use ChatGPT, Claude, Gemini, or another chat tool for planning, then your preferred AI coding assistant for building. No CLI or skill installation is required.

Create a folder for your app with a `docs/` folder inside. Choose a short filename for your app, such as `ReadingList`, and use it consistently below.

| Step | Copy the full prompt | Attach | Save in your app folder |
|---|---|---|---|
| 1. Research | [Part 1](part1-deepresearch.md) | Your idea; existing notes if useful | Run the generated research request, then save its findings as `docs/research-AppName.md` |
| 2. Define the MVP | [Part 2](part2-prd-mvp.md) | Completed research findings | `docs/PRD-AppName-MVP.md` |
| 3. Choose the technical approach | [Part 3](part3-tech-design-mvp.md) | PRD; research optional | `docs/TechDesign-AppName-MVP.md` |
| 4. Set up your coding assistant | [Part 4](part4-notes-for-agent.md) | PRD and Tech Design | The named instruction files in your app folder |
| 5. Build | Use the first build prompt below | Open your app folder in your coding assistant | Working code, checked against your PRD |

On GitHub, open a prompt, select **Raw**, and copy the entire file. If attachments are unavailable, paste each input document with its filename above it.

### 1. Research your idea

Paste Part 1 and answer the questions. It produces a **research request** tailored to your idea. Save that as `research-request-AppName.md` if you want to keep it.

**Run that request** in a chat tool with browsing or deep research. Save the resulting findings as `docs/research-AppName.md`. The request itself is not the research report. If browsing is unavailable, keep the findings labeled unverified and carry those uncertainties into your PRD.

### 2. Define the MVP

Paste Part 2 and attach your research findings. Answer any missing questions, then review the must-have features and what stays outside the MVP.

Save the complete PRD as `docs/PRD-AppName-MVP.md`, including its **Handoff Context** and final JSON metadata block. These let the next chat reuse your decisions.

### 3. Choose the technical approach

Paste Part 3 and attach the PRD. The prompt helps you choose a suitable stack, project structure, implementation steps, and checks. Attach the research too if it contains useful constraints.

Save the complete result as `docs/TechDesign-AppName-MVP.md`, including its Handoff Context and JSON metadata. Keep the same app name as the PRD.

### 4. Set up your coding assistant

Paste the **whole Part 4 prompt** and attach both documents. Tell it which coding assistant you plan to use if that is not already recorded. Part 4 includes the core templates, so it works in a fresh chat without a copy of this repository.

Save each returned file at its named path:

- `AGENTS.md` — lasting project instructions and links to your documents.
- `MEMORY.md` — current progress, decisions, and next step.
- `REVIEW-CHECKLIST.md` — checks to use during implementation.
- `agent_docs/project_brief.md`, `agent_docs/tech_stack.md`, and `agent_docs/testing.md` — practical project details.
- Any files for your selected coding assistant, such as `CLAUDE.md` or `.cursor/rules/00-project.mdc`.

If you run Part 4 inside your coding assistant, it can create the files directly. Review the file list and any unresolved decisions before building.

### 5. Build one useful piece

Open your app folder in your coding assistant and send:

> Read AGENTS.md, MEMORY.md, and the linked PRD and Tech Design. Propose the smallest useful first feature and how we will check it. Wait for my approval of that plan, then implement it and fix any failures in the agreed scope. Report what changed and what you actually checked.

Approve the plan, try the result, and repeat for the next feature. Once a plan is approved, the assistant should continue through its implementation and checks without asking again for each file edit. Keep current progress in `MEMORY.md` so another chat can pick up where you left off.

**See a small example:** [Reading List](examples/first-project/) includes a short walkthrough, sample PRD and Tech Design, and a runnable one-file app.

## Optional skills and CLI

If you prefer running this workflow inside a coding assistant, this repository also includes reusable skills and a CLI:

- [Skills and tool setup](templates/tool-adapters/README.md) — install only the files your assistant uses.
- [Claude Code guide](.claude/README.md) — the bundled workflow skills.
- [CLI guide](cli/README.md) — scaffold from saved project documents, preview changes, and check setup.

For the CLI route, ask your agent to run `npx vibeworkflow` in your app folder and follow its instructions. Existing files are preserved by default. `doctor` checks **setup**; build and behavior remain **Not checked** until they are exercised.

## When you need more detail

| Need | Read |
|---|---|
| Understand the output files or fix document discovery | [Document contract](docs/workflow/document-contract.md) |
| Choose tools, native skills, or adapters | [Agent tooling compatibility](docs/tools/agent-tooling-compatibility.md) |
| Add AI features or choose an AI build path | [AI feature patterns](docs/ai/feature-patterns.md) · [Build paths](docs/ai/build-paths.md) |
| Handle AI tools, permissions, and sensitive data | [AI agent security](docs/ai/agent-security.md) |
| Take a builder prototype into your own codebase | [Builder exit review](docs/workflow/builder-exit-review.md) |
| Check the workflow output | [Golden path checklist](docs/workflow/golden-path-checklist.md) |
| Find advanced guides and maintenance notes | [Docs index](docs/README.md) |

## Common questions

**Can I change chats or AI tools between steps?** Yes. Copy the full next prompt and attach its required documents. The Handoff Context carries your decisions forward.

**Do I clone this repository into my app?** No. Start with your own app folder. Clone this repository when you want to develop the workflow itself.

**The assistant asks something I already answered.** Point it to the Handoff Context in the attached document and ask it to confirm only missing or conflicting decisions.

**The assistant says it cannot find a prompt.** Paste the prompt's full contents. A link to this repository does not automatically put the file in your app or chat.

## Built with this workflow

| Project | What it is |
|---|---|
| [vibeworkflow.app](https://vibeworkflow.app) | An interactive app for this workflow. |
| [moneyvisualiser.com](https://moneyvisualiser.com) | A 3D money visualization website. |
| [caglacabaoglu.com](https://caglacabaoglu.com) | A portfolio and gallery site. |
| [RealDex App](https://alpyalay.org/realdex) | A React Native animal collection app. |

The [Reddit to AI example](examples/reddit-to-ai/) shows a larger set of project documents, reconstructed from a shipped project.

## Contributing

Issues, pull requests, and examples are welcome. See the [contribution guide](.github/CONTRIBUTING.md), [Discussions](https://github.com/KhazP/vibe-coding-prompt-template/discussions), and [changelog](docs/CHANGELOG.md). Time-sensitive tool guidance follows the [freshness policy](docs/maintenance/freshness-policy.md).

## License

[MIT](LICENSE). Created by [Alp Yalay](https://x.com/alpyalay) and improved through community contributions.
