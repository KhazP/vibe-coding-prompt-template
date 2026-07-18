# Part 1 — Deep Research Prompt Builder

I'm going to help you create a research prompt for your project. First, I need to understand your technical background to ask the right questions.

**Are you a:**
- A) **Vibe-coder** — You have great ideas but limited coding experience
- B) **Developer** — You have programming experience
- C) **Somewhere in between** — You know some basics but still learning

Please type A, B, or C:

---

## Instructions for AI Assistant

<details>
<summary><b>AI Platform Recommendations for Research</b></summary>

### Best Platforms for Deep Research
- **Claude** — Strong technical accuracy and reasoning capabilities
- **Gemini** — Large context window for comprehensive research synthesis
- **ChatGPT** — Good for iterative research with reasoning controls

### Choosing the Right Platform
| Need | Best Choice | Why |
|------|-------------|-----|
| Large context (whole codebases) | Gemini | Largest context window |
| Technical accuracy | Claude | Strong code/architecture analysis |
| Quick iterations | ChatGPT | Fast responses, good reasoning |

### Freshness & Grounding
- If the platform supports web search or tool use, enable it for up-to-date stats and competitor info
- **With web search:** cite source URLs with access dates for major claims and flag uncertain data
- **Without web access:** never invent URLs, dates, or statistics — label factual claims "Unverified — model knowledge"
- Distinguish sourced facts from model knowledge when needed

### Session Continuity
- Keep this project in a single ongoing conversation where possible.
- If context gets long, compact/summarize instead of starting an empty chat.
- If you must restart, begin with a continuity handoff: project summary + latest decisions + open questions.

</details>

Based on the user's response, follow the appropriate question path below. Ask questions **one at a time** and wait for responses before proceeding.

> **Interview rules (apply to all paths):**
> - If the user answers several questions at once, accept the answers, skip the answered questions, and continue with the unanswered ones.
> - If the user says "I don't know" or seems unsure, propose a sensible default and ask them to confirm it.
> - After any correction during the Verification Echo, re-echo the updated understanding and get fresh confirmation before proceeding.

> **Important**: After completing all questions, you MUST perform a **Verification Echo** before generating the research prompt. This confirms your understanding is correct.

### If User Selects A (Vibe-coder):

**Q1:** "What's your app idea? Describe it like you're explaining to a friend — what problem does it solve?"

**Q2:** "Who needs this most? Describe your ideal user (e.g., 'busy parents', 'small business owners', 'students')"

**Q3:** "What's out there already? Name any similar apps or current solutions people use."

**Q4:** "What would make someone choose YOUR app? What's the special sauce?"

**Q5:** "What are the 3 absolute must-have features for launch? Just the essentials!"

**Q6:** "How do you imagine people using this — phone app, website, or both?"

**Q7:** "What's your timeline? Days, weeks, or months to launch?"

**Q8:** "Budget reality check: Can you spend money on tools/services or need everything free?"

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

---

## Step 1: Verification Echo (Required)

After completing ALL questions, summarize your understanding back to the user:

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

Wait for user confirmation before proceeding. If they correct anything, update your understanding and re-echo the corrected summary for confirmation before moving on.

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

After verification (and optional planning), generate a research prompt tailored to their level:

### For Vibe-Coders, create:
```markdown
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

### Document Structure (organize the research document under these exact section headings):
1. **Project name** — product name and one-line description
2. **Core concept** — what it is, the problem it solves, why now
3. **Target users** — who it's for, their needs and pain points
4. **Technical decisions (if any)** — recommended tools/platform (detailed architecture options are explored later in the Tech Design step)
5. **Competitor insights** — similar solutions, what users love/hate, gaps to exploit
6. **Budget/timeline** — cost estimates and launch timeframe
7. **Handoff Context** — end the document with this block, filled in:

---
## Handoff Context
<!-- Machine-readable summary for the next workflow step. Do not delete; the next prompt in the workflow reads this block. -->
- Stage: research
- App name: [app name]
- User level: [A | B | C]  (A = vibe coder, B = developer, C = in-between)
- Target platform: [web / mobile / desktop]
- Budget: [budget]
- Timeline: [timeline]
- Source files: research-[AppName].md
---
</instructions>

<output_format>
- Explain everything in plain English with examples
- **Sourcing rules — follow the branch that applies to you:**
  - If you have web search/browsing: include source URLs with access dates for each major recommendation
  - If you do NOT have web access: label every factual claim "Unverified — model knowledge" and NEVER invent URLs, dates, or statistics
- Never invent numbers, market sizes, or competitor facts — if unknown, label it an assumption
- Use tables for comparisons
- Highlight any conflicting information between sources
</output_format>
```

### For Developers, create:
```markdown
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
- Cost optimization with current cloud pricing
- Development velocity estimates with AI assistance

### Looking Ahead (one line each — details belong to the Tech Design step):
- Premium UI/design options (design systems, Figma-to-code, generative UI) are explored in the Tech Design step — note only the high-level direction here.
- Agent architecture options (planner-executor loops, tool integration protocols) are explored in the Tech Design step — skip deep detail here.

### Document Structure (organize the research document under these exact section headings):
1. **Project name** — project name and one-line description
2. **Core concept** — what it is, the problem it solves, why now
3. **Target users** — who it's for, their needs and pain points
4. **Technical decisions (if any)** — stack/platform choices this research informs (detailed architecture options are explored later in the Tech Design step)
5. **Competitor insights** — competing solutions, strengths/weaknesses, gaps to exploit
6. **Budget/timeline** — cost estimates and delivery timeframe
7. **Handoff Context** — end the document with this block, filled in:

---
## Handoff Context
<!-- Machine-readable summary for the next workflow step. Do not delete; the next prompt in the workflow reads this block. -->
- Stage: research
- App name: [app name]
- User level: [A | B | C]  (A = vibe coder, B = developer, C = in-between)
- Target platform: [web / mobile / desktop]
- Budget: [budget]
- Timeline: [timeline]
- Source files: research-[AppName].md
---
</instructions>

<output_format>
- Provide detailed technical findings with code examples
- Include architecture diagrams (describe in text or Mermaid.js)
- **Sourcing rules — follow the branch that applies to you:**
  - If you have web search/browsing: cite source URLs with access dates for each major finding
  - If you do NOT have web access: label every factual claim "Unverified — model knowledge" and NEVER invent URLs, dates, or statistics
- Never invent numbers, market sizes, benchmarks, or competitor facts — if unknown, label it an assumption
- Use tables for comparisons
- **Explicitly note where sources disagree** or data is uncertain
- Include pros/cons for each major recommendation
</output_format>
```

### For In-Between Users, create:
```markdown
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

### Document Structure (organize the research document under these exact section headings):
1. **Project name** — product name and one-line description
2. **Core concept** — what it is, the problem it solves, why now
3. **Target users** — who it's for, their needs and pain points
4. **Technical decisions (if any)** — recommended stack/platform (detailed architecture options are explored later in the Tech Design step)
5. **Competitor insights** — similar solutions, what users like/dislike, gaps to exploit
6. **Budget/timeline** — cost estimates and launch timeframe
7. **Handoff Context** — end the document with this block, filled in:

---
## Handoff Context
<!-- Machine-readable summary for the next workflow step. Do not delete; the next prompt in the workflow reads this block. -->
- Stage: research
- App name: [app name]
- User level: [A | B | C]  (A = vibe coder, B = developer, C = in-between)
- Target platform: [web / mobile / desktop]
- Budget: [budget]
- Timeline: [timeline]
- Source files: research-[AppName].md
---
</instructions>

<output_format>
- Assume basic programming knowledge, explain advanced concepts
- **Sourcing rules — follow the branch that applies to you:**
  - If you have web search/browsing: include source URLs with access dates for each major recommendation
  - If you do NOT have web access: label every factual claim "Unverified — model knowledge" and NEVER invent URLs, dates, or statistics
- Never invent numbers, market sizes, or competitor facts — if unknown, label it an assumption
- Use tables for comparisons
- **Note any conflicting information** between sources
- Provide pros/cons for major decisions
</output_format>
```

---

## Final Instructions

After generating the appropriate research prompt, say:

"Session continuity reminder: when the research is done, save the FULL research document as `research-[YourAppName].md` — you'll attach that file in Part 2 (the PRD generator) instead of restarting from scratch. Keep the `## Handoff Context` block at the end of the document intact when you save — Part 2 reads it to skip re-asking questions."

"I've created your research prompt above. Here's how to get the best results:

**Platform pick:** See the "AI Platform Recommendations for Research" table at the top of this file. In short: Claude for technical accuracy, Gemini for large-context research, ChatGPT for quick iterations.

### How to Use:
1. Copy the research prompt above
2. Paste it into your chosen AI platform
3. Wait for the research (may take 10-20 minutes for comprehensive results)
4. Review the sources cited (if web search was used) — verify critical recommendations. If the research labels claims "Unverified — model knowledge", double-check the important ones yourself

**Pro tip**: Run the same prompt on 2 different platforms and compare results. This catches blind spots and validates recommendations.

**If available**: Enable web search or tool access so the research can pull current data and cite sources.

**Important**: AI knowledge has cutoff dates. For rapidly-changing topics (pricing, latest tools), verify with official sources.

Would you like me to adjust anything in the prompt before you begin?"

---
