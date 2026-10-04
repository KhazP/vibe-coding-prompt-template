# Part 1 — Deep Research Prompt Builder

I'm going to help you create a research prompt for your project. **Part 1 produces a research request, not completed research.** You will run that request in your chosen research tool, save the findings, and attach those findings to Part 2.

You can start in a fresh chat. If you already have project notes or a Handoff Context, attach them with this prompt; otherwise, the questions below gather everything needed.

**Are you a:**
- A) **Vibe-coder** — You have great ideas but limited coding experience
- B) **Developer** — You have programming experience
- C) **Somewhere in between** — You know some basics but still learning

Please type A, B, or C if your attached notes or message do not already give your technical level:

---

## Instructions for AI Assistant

<details>
<summary><b>AI Platform Recommendations for Research</b></summary>

### Platform Guidance for Deep Research
Choose based on current capabilities and the verification path, not old ranking tables:
- **Claude / ChatGPT / Gemini:** good general options when they can cite sources and reason through trade-offs.
- **Gemini Deep Research / comparable deep research tools:** useful for cited reports and background research when available; label preview/beta features clearly.
- **Coding-agent research:** useful after a repo exists, but keep it read-only until the research questions are answered.

### Choosing the Right Platform
| Need | Selection Criteria |
|------|--------------------|
| Market/current data | Web search or Google Search grounding with source URLs and access dates |
| Large attachments | Current context-window support plus the ability to cite specific source sections |
| Technical/API claims | Official docs, changelogs, release notes, and examples |
| Automated downstream use | Structured Markdown plus optional JSON/JSON-schema export |

### Freshness & Grounding
- If the platform supports web search or tool use, enable it for up-to-date stats and competitor info
- If the platform supports URL context, attach official docs and competitor URLs instead of relying on memory
- Cite source URLs with access dates for major claims and flag uncertain data
- Distinguish sourced facts from model knowledge when needed
- For pricing, quotas, model names, and beta features, say "verify current docs" instead of treating the answer as permanent

### Fresh-Chat Intake & Session Continuity
- This prompt is self-contained and works in a fresh chat; do not assume access to another conversation, a repository, installed skills, or files that were only mentioned.
- Read the project description and any files actually attached here. If a Handoff Context is present, reuse the technical level, project name, platform, budget, timeline, decisions, and constraints it supplies.
- Briefly state what is already known, then use the complete question path below only for missing information. Do not ask the user to repeat an answer already supplied.
- If a referenced file is unavailable, ask the user to attach it or paste the relevant content.
- Continuing in the same conversation is also fine. If context gets long, save a compact summary of decisions and open questions for the next chat.

</details>

Based on the user's response and available notes, follow the appropriate question path below. Ask unanswered questions **one at a time** by default; if the user prefers a batch or answers several at once, accept those answers and skip the completed questions. Explain unfamiliar terms and offer a suggested default when the user is unsure.

> **Important**: After resolving the relevant questions, you MUST perform a **Verification Echo** before generating the research prompt. This confirms your understanding is correct.

### If User Selects A (Vibe-coder):

**Q1:** "What's your app idea? Describe it like you're explaining to a friend — what problem does it solve?"

**Q2:** "Who needs this most? Describe your ideal user (e.g., 'busy parents', 'small business owners', 'students')"

**Q3:** "What's out there already? Name any similar apps or current solutions people use."

**Q4:** "What would make someone choose YOUR app? What's the special sauce?"

**Q5:** "What are the 3 absolute must-have features for launch? Just the essentials!"

**Q6:** "How do you imagine people using this — phone app, website, or both?"

**Q7:** "What's your timeline? Days, weeks, or months to launch?"

**Q8:** "Budget reality check: Can you spend money on tools/services or need everything free?"

**Q9:** "Should the research evaluate AI product features, automation, ChatGPT/MCP surfaces, local/private model options, or only AI-assisted development?"

### If User Selects B (Developer):

**Q1:** "What's your main research topic and project context? Include technical domain."

**Q2:** "List 3-5 specific questions your research must answer. Be detailed."

**Q3:** "What technical decisions will this research inform? (architecture, stack, integrations)"

**Q4:** "Define scope boundaries — what's included and explicitly excluded?"

**Q5:** "For each area, specify depth needed:
- Market Analysis: [Surface/Deep/Comprehensive]
- Technical Architecture: [Surface/Deep/Comprehensive]
- Competitor Analysis: [Surface/Deep/Comprehensive]
- Implementation Options: [Surface/Deep/Comprehensive]
- Cost Analysis: [Surface/Deep/Comprehensive]"

**Q6:** "Rank these information sources by priority (1-7):
- Academic papers/Research
- Technical documentation
- GitHub repositories
- Industry reports
- User forums/Reddit
- Competitor analysis
- Case studies"

**Q7:** "Any technical constraints? Specific languages, frameworks, platforms, or compliance requirements?"

**Q8:** "What's the business context? Startup, enterprise, side project, or client work?"

**Q9:** "Should the research evaluate AI product architecture, provider choices, structured outputs, MCP/tools, evals, telemetry, data retention, and prompt-injection risk?"

### If User Selects C (In Between):

**Q1:** "Tell me about your project idea and your current skills. What can you code, and where do you need help?"

**Q2:** "What problem are you solving? Who has this problem most?"

**Q3:** "What specific things do you need to research? List both technical and business aspects."

**Q4:** "What similar solutions exist? What do you like/dislike about them?"

**Q5:** "Platform preferences:
- Web app (works in browser)
- Mobile app (iOS/Android)
- Desktop app
- Not sure — help me decide"

**Q6:** "Your technical comfort zone:
- Languages/frameworks you know
- Willing to learn new tools?
- Prefer familiar or optimal?"

**Q7:** "Timeline and success metrics? When do you want to launch and how will you measure success?"

**Q8:** "Budget for tools and services? Free only, under $50/month, under $200/month, or flexible?"

**Q9:** "Should users interact with AI in the product, should AI only help you build, or should research decide?"

---

## Step 1: Verification Echo (Required)

After gathering the required context from the supplied notes and unanswered questions, summarize your understanding back to the user:

**Template:**
> "Let me confirm I understand your project correctly:
>
> **Project:** [App/product name and one-line description]
> **Target Users:** [Who this is for]
> **Problem Solved:** [Core problem being addressed]
> **Key Features:** [3-5 must-have features listed]
> **Platform:** [Web/Mobile/Desktop]
> **Timeline:** [Their timeline]
> **Budget:** [Their budget constraints]
>
> Is this accurate? Should I adjust anything before creating your research prompt?"

Wait for user confirmation before proceeding. If they correct anything, update your understanding.

---

## Step 2: Research Plan (Recommended for Complex Projects)

For complex projects (Developer path or ambitious Vibe-coder projects), first propose a research plan:

**Template:**
> "Here's my proposed research plan:
>
> **Research Areas:**
> 1. [Area 1] — [What we'll investigate]
> 2. [Area 2] — [What we'll investigate]
> 3. [Area 3] — [What we'll investigate]
>
> **Sources to Check:**
> - [Source type 1]
> - [Source type 2]
>
> **Expected Deliverables:**
> - [Deliverable 1]
> - [Deliverable 2]
>
> Does this cover what you need, or should I adjust the focus?"

For simpler Vibe-coder projects, you may skip this step and proceed directly to generating the research prompt.

---

## Step 3: Generating the Research Prompt

After verification (and optional planning), generate one self-contained research request tailored to their level. Include the agreed project context, constraints, decisions, and unanswered research questions in the request itself, so the next tool needs no access to this chat. Use one consistent `[AppName]` filename stem across the workflow.

Name the request **`research-request-[AppName].md`**. Its execution will produce a separate findings file, **`research-[AppName].md`**. The final project destination for the findings is `docs/research-[AppName].md`; the user can save both files anywhere until they create their project folder.

### For Vibe-Coders, create:
````markdown
## Deep Research Request: [App Name]

<context>
I'm a non-technical founder building [description]. I need beginner-friendly research with actionable insights.
</context>

<instructions>
### Key Questions to Answer:
1. What similar apps exist and what features do they have?
2. What do users love/hate about existing solutions?
3. What's the simplest way to build an MVP?
4. What no-code/low-code tools are best for this?
5. How do similar apps monetize and what can I realistically charge?
6. What AI tools or APIs can accelerate development or differentiate the MVP?
7. If AI is part of the product, what data can it read, what actions can it take, and what approval/eval safeguards are required?

### Research Focus:
- Simple, actionable insights with examples
- Current tool recommendations (prioritize newest/best)
- Step-by-step implementation guidance
- Cost estimates with free/paid options
- Examples of similar successful projects

### Required Deliverables:
1. **Competitor Table** — Features, pricing, user count, reviews
2. **Tech Stack** — Recommended tools for beginners
3. **MVP Features** — Must-have vs nice-to-have prioritization
4. **Development Roadmap** — With AI assistance strategy
5. **Budget Breakdown** — Tools, services, deployment costs
6. **AI/Automation Fit** — Whether this should include AI product features or automation
7. **AI Safety & Evidence** — Data boundaries, provider retention/training setting to verify, eval prompts, telemetry, and confirmation gates if AI is in scope
</instructions>

<output_format>
- Explain everything in plain English with examples
- **Include source URLs with access dates** for each major recommendation
- Use tables for comparisons
- Highlight any conflicting information between sources
- Separate official-doc facts from community/anecdotal signal
- Produce findings as `research-[AppName].md` (final project path: `docs/research-[AppName].md`), separate from this research request.
- Begin the findings with **Research status: Researched with sources / Partial research / Not researched — unverified hypotheses**, choosing the status that reflects work actually performed.
- If browsing is unavailable, say so. Offer clearly labeled hypotheses and unanswered questions; do not invent citations, access dates, current prices, or research results. Record any decisions still requiring sourced research.
- End the findings with this filled Handoff Context so Part 2 works in a fresh chat. Preserve user-provided constraints and distinguish agreed decisions from research recommendations.
- After the saved findings, outside the document, tell the user: "Save research-[AppName].md. Next, paste the complete part2-prd-mvp.md prompt into a chat and attach these findings. You may use a new chat; no earlier conversation is required."

Use this Handoff Context at the end of the findings:

```
## Handoff Context
<!-- Machine-readable summary for the next workflow step. Do not delete; the next prompt in the workflow reads this block. -->
- Stage: research
- App name: [app name]
- User level: [A | B | C]  (A = vibe coder, B = developer, C = in-between)
- Target platform: [web / mobile / desktop]
- Budget: [budget]
- Timeline: [timeline]
- AI in product scope: [yes / no / undecided]
- Research status: [actual research status and limitations]
- Constraints: [agreed constraints]
- Decisions: [agreed decisions; label recommendations separately]
- Open questions: [unresolved questions or none]
- Source files: research-request-[AppName].md → docs/research-[AppName].md
```
</output_format>
````

### For Developers, create:
````markdown
## Deep Research Request: [Project Name]

<context>
I need comprehensive technical research on [topic] for [context].

**Technical Context:**
- Constraints: [Their constraints]
- Preferred Stack: [If specified]
- Compliance: [Any requirements]
</context>

<instructions>
### Research Objectives:
[Based on their answers]

### Specific Questions:
[Their detailed questions]

### Scope Definition:
- **Include:** [Their specifications]
- **Exclude:** [Their exclusions]
- **Depth Requirements:** [Their requirements per area]

### Sources Priority:
[Their ranked preferences]

### Required Analysis:
- Technical architecture patterns (current best practices)
- Performance benchmarks with latest frameworks
- Security considerations for AI-integrated apps
- Scalability approaches with modern infrastructure
- AI tool/API integration strategies (include sources and current pricing when available)
- Current AI architecture choices: OpenAI Responses/Agents/Apps SDK, Claude/Anthropic API, Gemini/Antigravity, Vercel AI SDK/Gateway, Cloudflare Workers AI/Agents, local models, MCP, and no-AI alternatives
- AI safety and evaluation: prompt-injection risk, data retention/training policies, structured outputs, tool permissions, human approvals, telemetry, and cost controls
- Cost optimization with current cloud pricing
- Development velocity estimates with AI assistance
- AI feature fit analysis, including provider options, data sensitivity, cost, and fallback behavior

### Premium UI/Design Research:
- Design system generators and component libraries
- Figma-to-code tools
- Generative UI approaches
- Design token standardization patterns

### Agent Architecture Research:
- Planner-Executor-Reviewer (PER) loop patterns
- Agent/tooling integration options for development workflow
- Self-healing code and test strategies
- Visual verification workflows
- Prompt-injection, data-retention, and tool-permission risks for any AI feature
</instructions>

<output_format>
- Provide detailed technical findings with code examples
- Include architecture diagrams (describe in text or Mermaid.js)
- **Cite sources with URLs and access dates** for each major finding
- Use tables for comparisons
- **Explicitly note where sources disagree** or data is uncertain
- Include pros/cons for each major recommendation
- Include an AI architecture section only when relevant: provider, data sent, retention/training setting to verify, tools/actions, output schema, eval set, telemetry, fallback, and cost ceiling
- Produce findings as `research-[AppName].md` (final project path: `docs/research-[AppName].md`), separate from this research request.
- Begin the findings with **Research status: Researched with sources / Partial research / Not researched — unverified hypotheses**, choosing the status that reflects work actually performed.
- If browsing is unavailable, say so. Offer clearly labeled hypotheses and unanswered questions; do not invent citations, access dates, current prices, or research results. Record any decisions still requiring sourced research.
- End the findings with this filled Handoff Context so Part 2 works in a fresh chat. Preserve user-provided constraints and distinguish agreed decisions from research recommendations.
- After the saved findings, outside the document, tell the user: "Save research-[AppName].md. Next, paste the complete part2-prd-mvp.md prompt into a chat and attach these findings. You may use a new chat; no earlier conversation is required."

Use this Handoff Context at the end of the findings:

```
## Handoff Context
<!-- Machine-readable summary for the next workflow step. Do not delete; the next prompt in the workflow reads this block. -->
- Stage: research
- App name: [app name]
- User level: [A | B | C]  (A = vibe coder, B = developer, C = in-between)
- Target platform: [web / mobile / desktop]
- Budget: [budget]
- Timeline: [timeline]
- AI in product scope: [yes / no / undecided]
- Research status: [actual research status and limitations]
- Constraints: [agreed constraints]
- Decisions: [agreed decisions; label recommendations separately]
- Open questions: [unresolved questions or none]
- Source files: research-request-[AppName].md → docs/research-[AppName].md
```
</output_format>
````

### For In-Between Users, create:
````markdown
## Deep Research Request: [Project Name]

<context>
I'm building [description] with some technical knowledge. I need research that balances practical guidance with technical details.

**My Skills:** [Languages/frameworks they know]
**Learning Preference:** [Familiar vs optimal]
</context>

<instructions>
### Core Questions:
[Mix of technical and non-technical based on their needs]

### Research Areas:
- Market validation and competitor analysis
- Technical approach recommendations
- AI tools/APIs relevant to this product and my skill level
- AI safety, data boundary, and eval requirements if AI is part of the product
- Learning resources for required technologies
- MVP development strategy with AI assistance
- No-code vs low-code vs full-code trade-offs

### Specific Focus:
- Implementation complexity with each approach
- Time to market with different tools
- Cost comparison (development and running)
- Skill requirements and learning curves

### Required Deliverables:
1. **Feature Matrix** — MVP prioritization
2. **Tech Stack** — Recommended with alternatives
3. **AI Tool Guide** — Which tool for what task
4. **Roadmap** — Development with skill milestones
5. **Resources** — Learning materials (prioritized)
6. **Budget** — Forecast with tool subscriptions
7. **AI/Automation Fit** — Whether AI product features or automation are worth adding
8. **AI Safety & Evidence** — Provider/data boundary, evals, telemetry, fallback, and approval gates if AI is in scope
</instructions>

<output_format>
- Assume basic programming knowledge, explain advanced concepts
- **Include source URLs with access dates** for recommendations
- Use tables for comparisons
- **Note any conflicting information** between sources
- Provide pros/cons for major decisions
- Produce findings as `research-[AppName].md` (final project path: `docs/research-[AppName].md`), separate from this research request.
- Begin the findings with **Research status: Researched with sources / Partial research / Not researched — unverified hypotheses**, choosing the status that reflects work actually performed.
- If browsing is unavailable, say so. Offer clearly labeled hypotheses and unanswered questions; do not invent citations, access dates, current prices, or research results. Record any decisions still requiring sourced research.
- End the findings with this filled Handoff Context so Part 2 works in a fresh chat. Preserve user-provided constraints and distinguish agreed decisions from research recommendations.
- After the saved findings, outside the document, tell the user: "Save research-[AppName].md. Next, paste the complete part2-prd-mvp.md prompt into a chat and attach these findings. You may use a new chat; no earlier conversation is required."

Use this Handoff Context at the end of the findings:

```
## Handoff Context
<!-- Machine-readable summary for the next workflow step. Do not delete; the next prompt in the workflow reads this block. -->
- Stage: research
- App name: [app name]
- User level: [A | B | C]  (A = vibe coder, B = developer, C = in-between)
- Target platform: [web / mobile / desktop]
- Budget: [budget]
- Timeline: [timeline]
- AI in product scope: [yes / no / undecided]
- Research status: [actual research status and limitations]
- Constraints: [agreed constraints]
- Decisions: [agreed decisions; label recommendations separately]
- Open questions: [unresolved questions or none]
- Source files: research-request-[AppName].md → docs/research-[AppName].md
```
</output_format>
````

---

## Final Instructions

Provide the generated request as a named downloadable file when file creation is available; otherwise, present one clearly delimited copyable block. Keep the instructions below **outside the saved request**. Do not say that research has been completed when you have only prepared its request.

After generating the request, say:

"Your research request is ready as **research-request-[AppName].md**. The next action is to run it in a research-capable AI tool. That tool will produce the separate findings file for Part 2.

### Choosing an AI Platform for Research:

| Need | What to look for |
|------|------------------|
| Current market data | Web search, URL context, source grounding, citations |
| Long source documents | Large context and reliable section-level references |
| Technical claims | Official docs lookup and clear uncertainty notes |
| Automation | Structured Markdown plus optional JSON summary |

### Save → Run Research → Save Findings → Part 2
1. **Save the request** as `research-request-[AppName].md` wherever you keep this project's files.
2. **Run it:** open your chosen research tool, enable browsing or deep research if available, and paste the full request. A fresh chat is fine.
3. **Review the result:** check its research-status label, cited sources, important recommendations, and remaining uncertainties. Research duration depends on the tool and scope. A request or unverified hypotheses must not be presented as completed sourced research.
4. **Save the findings** as `research-[AppName].md`, keeping the Handoff Context. When you create your app folder in Part 4, put this file at `docs/research-[AppName].md`.
5. **Start Part 2:** paste the complete `part2-prd-mvp.md` prompt into your chosen chat and attach `research-[AppName].md`. Attach the findings, not `research-request-[AppName].md`.

**Copy this with the Part 2 prompt and your findings attached:**

```text
Use the attached research findings and their Handoff Context to create my PRD with the full Part 2 prompt I have supplied. Reuse the answers already present; ask for missing details. Check the research-status label and keep unverified claims labeled. Do not assume access to my previous chat.
```

**Pro tip**: Run the same prompt on 2 different platforms and compare results. This catches blind spots and validates recommendations.

**If available**: Enable web search, URL context, source grounding, or deep research mode so the research can pull current data and cite sources.

**Important**: AI knowledge has cutoff dates. For rapidly-changing topics (pricing, quotas, latest tools, model names, beta features), verify with official sources.

Would you like me to adjust anything in the prompt before you begin?"

---
