# Part 2 — Product Requirements Document (PRD) Generator

I'll help you create a Product Requirements Document (PRD) for your MVP. This document will define WHAT you're building, WHO it's for, and WHY it matters.

**Fresh chat is fine:** paste this entire prompt and attach your saved research findings, `research-[AppName].md`, if you have them. No earlier chat, installed skills, or repository access is required. Part 1's `research-request-[AppName].md` is a request to run research, not the findings.

<details>
<summary><b>Before We Begin — File Upload Instructions</b></summary>

### If you have research from Part 1:
Please attach your research findings in any format:
- `.txt`, `.pdf`, `.docx`, `.md` files all work
- Or paste the content directly if it's short

### Don't have research yet?
No problem! We can still create a great PRD. Just let me know and we'll proceed.

</details>

If your attached file or message does not already give your technical level, please tell me about yourself:
- A) **Vibe-coder** — Great ideas, limited coding experience, using AI to build
- B) **Developer** — Experienced programmer
- C) **Somewhere in between** — Some coding knowledge, still learning

Please attach your research findings (or type "no file"). Give A, B, or C only if your message or attached Handoff Context does not already include your technical level.

---

## Instructions for AI Assistant

<details>
<summary><b>Best AI Platforms for PRD Creation</b></summary>

### Platform Guidance
Use the assistant that best fits the available context and verification path. Claude, ChatGPT, Gemini, and similar tools can all work if they preserve structure, cite source material, and ask clarifying questions before generating the PRD.

| Need | Selection Criteria |
|------|--------------------|
| Structured documents | Follows templates exactly and keeps acceptance criteria concrete |
| Large research input | Handles attachments without dropping requirements |
| Current tool claims | Can cite official docs or clearly mark uncertainty |
| Downstream automation | Can emit clean Markdown plus optional structured summaries |

### Fresh-Chat Intake & Session Continuity
- This prompt works in a new chat using the files and answers provided here. Continuing in the same chat is also fine.
- Read the supplied research and Handoff Context before asking questions. Never assume access to previous chats, files that were only mentioned, or installed workflow skills.
- If a needed file is unavailable, ask the user to attach it or paste its contents. Carry decisions and unresolved questions into the output so Part 3 can start independently.

### Evergreen Naming
- Prefer model family names in docs and examples (for example: Claude Sonnet, Claude Opus, Gemini Pro, Gemini Flash) instead of pinned version names.
- Add a last-verified note for pricing, quotas, beta features, and vendor-specific capabilities.

</details>

Use research findings already attached or pasted in this chat. If none are available, ask whether the user will attach them or wants to proceed without research; do not require an upload when they choose to proceed.

**Check what was supplied:** a document titled Deep Research Request or named `research-request-[AppName].md` is not completed research. Ask for its findings or an explicit choice to continue without them. Read the research-status label when present; carry forward partial research and unverified hypotheses without upgrading them to sourced facts.

When findings are provided, do this **required extraction step before asking unanswered questions**:

**Handoff Context block? Read it first.** Pre-fill the user's level, app name, platform, budget, timeline, constraints, decisions, and open questions. DON'T re-ask anything it already answers, including the A/B/C classification. If there is no Handoff Context, extract what you can from the supplied document or message, then use the complete question paths below for anything still missing. If sources contradict the user's current instructions, show the conflict and ask only when the choice would change the product.

**Extract and restate from the research:**
- **Project name** — [what the research calls it]
- **Core concept** — [what it is and the problem it solves]
- **Target users** — [who it's for]
- **Technical decisions** — [stack, platform, or tools already chosen, if any]
- **Competitor insights** — [similar solutions and gaps found]
- **Budget/timeline** — [cost and timeframe constraints]

Show the known facts together in a short summary and invite corrections while asking the next unanswered question. If an essential item is missing, ask for it during the Q&A. Use the Verification Echo below to confirm the completed understanding rather than requiring separate confirmations of every previously answered field.

> **Slot-Filling Approach**: The Q&A below gathers all required context before PRD generation. Do NOT generate the PRD until all essential slots are filled. If any critical information is missing, ask follow-up questions.

> **Interview rules (apply to all paths):**
> - If the user answers several questions at once, accept the answers, skip the answered questions, and continue with the unanswered ones.
> - If the user says "I don't know" or seems unsure, propose a sensible default and ask them to confirm it.
> - After any correction during the Verification Echo, re-echo the updated understanding and get fresh confirmation before proceeding.

> **Format Preference**: Keep the PRD concise. Use bullet points and tables where possible, and avoid long paragraphs.

### Initial Questions for ALL Users:

**Q1:** "What's the name of your product/app? (If undecided, we can brainstorm!)"

**Q2:** "In one sentence, what problem does it solve? (Example: 'Helps freelancers track time and invoice clients automatically')"

**Q3:** "What's your launch goal? (Examples: '100 users', '$1000 MRR', 'Replace my day job', 'Learn to build apps')"

### Path A — Vibe-Coder Questions:

**Q4:** "Who will use your app? Describe them like you're explaining to a friend:
- What do they do? (job, lifestyle)
- What frustrates them currently?
- How tech-savvy are they?"

**Q5:** "Tell me the user journey story:
- Sarah has problem X...
- She discovers your app...
- She does Y...
- Now she's happy because Z
(Use your own character and story!)"

**Q6:** "What are the 3-5 MUST-have features for launch? The absolute essentials only!"

**Q7:** "What features are you intentionally saving for version 2? (This keeps MVP simple)"

**Q8:** "How will you know it's working? Pick 1-2 simple metrics:
- Number of signups?
- Daily active users?
- Tasks completed?
- Customer feedback score?"

**Q9:** "Describe the vibe in 3-5 words (Examples: 'Clean, fast, professional' or 'Fun, colorful, friendly')"

**Q10:** "Any constraints or non-functional requirements? Budget limits, must launch by date, performance expectations, security/privacy, scalability, compliance, or specific platform needs?"

**Q11:** "Will the product include AI features or an AI-facing surface?
- No AI features in v1
- AI inside the app (chat, summarization, recommendations, image/audio, automation)
- AI-assisted product feature
- ChatGPT/MCP app surface or internal/admin agent
- Not sure — help me decide"

If yes or unsure, ask what user data AI may read, what actions it may take, what should require confirmation, and whether local/private model options matter.

### Path B — Developer Questions:

**Q4:** "Define your target audience:
- Primary persona (demographics, role, technical level)
- Secondary personas (if any)
- Jobs to be done (what they're hiring your product for)"

**Q5:** "Write 3-5 user stories:
Primary: 'As a [user type], I want to [action] so that [benefit]'
(Add 2-4 supporting stories)"

**Q6:** "List core MVP features with MoSCoW prioritization:
- Must have: [3-5 features]
- Should have: [2-3 features]
- Could have: [2-3 features]
- Won't have (this release): [list]"

**Q7:** "Define success metrics (be specific):
- Activation: [metric and target]
- Engagement: [metric and target]
- Retention: [metric and target]
- Revenue (if applicable): [metric and target]"

**Q8:** "Technical and UX requirements:
- Performance: [requirements]
- Accessibility: [standards]
- Platform support: [browsers, devices]
- Security/Privacy: [requirements]
- Scalability: [expectations]
- Design system: [preferences]"

**Q9:** "Risk assessment:
- Technical risks: [list]
- Market risks: [list]
- Execution risks: [list]"

**Q10:** "Business model and constraints:
- Monetization strategy (if any)
- Budget constraints
- Timeline requirements
- Compliance/regulatory needs"

**Q11:** "AI/automation scope:
- Are there AI product features?
- Should users access this through a web/mobile app, or is AI only an internal product feature?
- What data can AI tools read, write, store, or expose?
- What actions require explicit user confirmation?
- Which provider/account, retention/training setting, telemetry, and eval requirements must be captured?"

### Path C — In-Between Questions:

**Q4:** "Who are your users and what do they need?
- Primary user type: [describe]
- Their main problem: [describe]
- Current solution they use: [if any]"

**Q5:** "Walk through the main user flow:
- User arrives at app because...
- First thing they see/do...
- Core action they take...
- Value they get..."

**Q6:** "What 3-5 features must be in v1? For each, explain:
- Feature name
- What it does
- Why it's essential"

**Q7:** "What are you NOT building yet? List features for v2 and why they can wait."

**Q8:** "How will you measure success?
- Short term (1 month): [metric]
- Medium term (3 months): [metric]"

**Q9:** "Design and user experience:
- Visual style: [describe]
- Key screens: [list main ones]
- Mobile responsive? [yes/no/mobile-first]"

**Q10:** "Constraints and requirements:
- Budget for tools/services: [$X/month]
- Timeline: [launch date]
- Non-functional requirements: [performance, security/privacy, scalability, compliance]
- Any technical preferences from research?"

**Q11:** "Does your MVP need AI?
- In-app AI features
- AI product feature
- AI only for development assistance
- ChatGPT/MCP or admin/internal agent
- No AI in the product yet"

If AI is in scope, capture data boundaries, action permissions, approval gates, fallback behavior, and eval expectations.

---

## Step 1: Verification Echo (Required)

After completing ALL questions, summarize your understanding back to the user:

**Template:**
> "Let me confirm I understand your product correctly:
>
> **Product:** [Name] — [One-line description]
> **Target User:** [Primary persona description]
> **Problem:** [Core problem being solved]
> **Must-Have Features:**
> 1. [Feature 1]
> 2. [Feature 2]
> 3. [Feature 3]
> **Success Metric:** [Primary metric and target]
> **Timeline:** [Launch target]
> **Budget:** [Constraints]
>
> Is this accurate? Should I adjust anything before creating your PRD?"

Wait for user confirmation. If they correct anything, update your understanding and re-echo the corrected summary for confirmation before proceeding.

---

## Step 2: Generate PRD Document

> **Generation Guardrails (apply to all templates):**
> - Replace EVERY [bracketed placeholder] with real content from the interview — no leftover placeholders in the final PRD.
> - If something is genuinely unknown, write TBD and list it in the Open Questions section.
> - Never invent market sizes, user numbers, or competitor claims. If a fact isn't from the research or the user, label it as an assumption.
> - Use this order in the saved file: **PRD body and footer → Handoff Context → final fenced JSON metadata**. Carry the agreed values forward from the research and interview. The canonical `## Out of Scope (Not in MVP)` heading stays where the template places it. Keep save/attach/next instructions outside the saved document.
> - Keep this prompt comprehensive, but tailor the generated document to the agreed product. Accounts, databases, payments, analytics, AI, web/mobile support, and hosted deployment are conditional requirements, not defaults to add because a template mentions them. Omit inapplicable details or mark them Not applicable with a short reason; preserve relevant requirements and open questions.

After verification, create a PRD appropriate to their level:

### For Vibe-Coders — PRD-[AppName]-MVP.md:

````markdown
# Product Requirements Document: [App Name] MVP

## Product Overview

**App Name:** [Name]
**Tagline:** [Their one-liner in catchier form]
**Launch Goal:** [What success looks like]
**Target Launch:** [Agreed date or TBD; do not invent a launch deadline]

## Who It's For

### Primary User: [Persona Name]
[User description in conversational language]

**Their Current Pain:**
- [Pain point 1]
- [Pain point 2]
- [Pain point 3]

**What They Need:**
- [Need 1]
- [Need 2]
- [Need 3]

### Example User Story
"Meet [persona name], a [description] who struggles with [problem]. Every day they [current situation]. They need [solution] so they can [desired outcome]."

## The Problem We're Solving

[Expand on their problem statement with context, why it matters, and why now is the right time to solve it]

**Why Existing Solutions Fall Short:**
- [Competitor/current solution]: [Why it's not enough]
- [Competitor/current solution]: [Why it's not enough]

## User Journey

### Discovery → First Use → Success

1. **Discovery Phase**
   - How they find us: [channels]
   - What catches their attention: [hook]
   - Decision trigger: [what makes them try]

2. **Onboarding (First 5 Minutes)**
   - Land on: [first screen/page]
   - First action: [what they do]
   - Quick win: [immediate value]

3. **Core Usage Loop**
   - Trigger: [what brings them back]
   - Action: [what they do]
   - Reward: [what they get]
   - Investment: [what keeps them]

4. **Success Moment**
   - "Aha!" moment: [when they get it]
   - Share trigger: [what makes them tell others]

## MVP Features

### Must Have for Launch

#### 1. [Feature Name]
- **What:** [Simple description]
- **User Story:** As a [user], I want to [action] so that [benefit]
- **Success Criteria:**
  - [ ] [Specific measurable outcome]
  - [ ] [Specific measurable outcome]
- **Priority:** P0 (Critical)

#### 2. [Feature Name]
- **What:** [Description]
- **User Story:** [Story]
- **Success Criteria:**
  - [ ] [Criteria]
  - [ ] [Criteria]
- **Priority:** P0 (Critical)

[Continue for all must-have features]

### Nice to Have (If Time Allows)
- **[Feature]**: [Quick description]
- **[Feature]**: [Quick description]

## Out of Scope (Not in MVP)
- **[Feature]**: Will add after [trigger/milestone]
- **[Feature]**: Will add after [trigger/milestone]
- **[Feature]**: Will add after [trigger/milestone]

*Why we're waiting: Keeps MVP focused and launchable in [timeframe]*

## How We'll Know It's Working

### Launch Success Metrics (First 30 Days)
| Metric | Target | Measure |
|--------|--------|---------|
| [Metric name] | [Target number] | [How to measure] |
| [Metric name] | [Target number] | [How to measure] |

### Growth Metrics (Months 2-3)
| Metric | Target | Measure |
|--------|--------|---------|
| [Metric name] | [Target number] | [How to measure] |

## Look & Feel

**Design Vibe:** [Their 3-5 words]

**Visual Principles:**
1. [Principle based on their description]
2. [Principle based on their description]
3. [Principle based on their description]

**Key Screens/Pages:**
1. **[Screen name]**: [Purpose]
2. **[Screen name]**: [Purpose]
3. **[Screen name]**: [Purpose]

### Simple Wireframe
```
[Main Screen/Homepage]
┌─────────────────────────┐
│     [Header/Logo]       │
├─────────────────────────┤
│                         │
│   [Hero/Main Action]    │
│                         │
├─────────────────────────┤
│ [Feature 1] [Feature 2] │
├─────────────────────────┤
│     [Secondary CTA]     │
└─────────────────────────┘
```

## Technical Considerations

**Platform:** [Web/Mobile/Both]
**Responsive:** [Yes, mobile-first]
**Performance:** Page load < 3 seconds
**Accessibility:** WCAG 2.1 AA minimum
**Security/Privacy:** [Basic requirements, data sensitivity]
**Scalability:** [Expected user growth or constraints]

## AI / Automation Scope

**Product AI:** [None / in-app AI / automation / assistant-assisted workflow]
**User Outcome:** [If AI is included, the single outcome it should support]
**Data Access:** [What AI can read, write, store, or expose]
**Provider / Retention:** [Provider/account type and training/retention setting to verify]
**Output Contract:** [Structured output schema or user-visible freeform answer]
**Human Confirmation:** [Actions that require explicit user approval]
**Evaluation:** [Direct, indirect, negative, auth-required, failure, and trajectory scenarios to verify]
**Telemetry / Cost:** [Allowed logs/traces, redaction rules, fallback behavior, and cost ceiling]

## Quality Standards

**What This App Will NOT Accept:**
- Placeholder content in production ("Lorem ipsum", sample images)
- Broken features — everything listed works or isn't included
- Skipping testing on the agreed platforms before launch
- Ignoring accessibility basics

*These standards will be enforced by the AI coding assistant.*

## Budget & Constraints

**Development Budget:** [$X or "Minimal — using free/cheap tools"]
**Monthly Operating:** [$X estimated]
**Timeline:** [X weeks to launch]
**Team:** [Solo/team size]

## Open Questions & Assumptions
- [Open question]
- [Key assumption]

## Launch Strategy (Brief)

**Soft Launch:** [Approach]
**Target Users:** [How many]
**Feedback Plan:** [How to collect]
**Iteration Cycle:** [How often to update]

## Definition of Done for MVP

The MVP is ready to launch when:
- [ ] All P0 features are functional
- [ ] Basic error handling works
- [ ] It works on the platforms and devices agreed above
- [ ] One complete user journey works end-to-end
- [ ] Analytics are tracking if analytics are in the agreed scope
- [ ] AI evals, data-boundary checks, and approval gates pass if AI is in scope
- [ ] Friends/family test is complete
- [ ] The agreed distribution or deployment path works; automate it only if required

## Next Steps

After this PRD is approved:
1. Create Technical Design Document (Part 3)
2. Set up development environment
3. Build MVP with AI assistance
4. Test with 5-10 beta users
5. Launch!

---
*Document created: [Date]*
*Status: Draft — Ready for Technical Design*

---
## Handoff Context
<!-- Machine-readable summary for the next workflow step. Do not delete; the next prompt in the workflow reads this block. -->
- Stage: prd
- App name: [App Name]
- User level: [A | B | C]  (A = vibe coder, B = developer, C = in-between)
- Target platform: [platform]
- Budget: [budget]
- Timeline: [timeline]
- AI in product scope: [yes / no / undecided]
- Research status: [status of supplied research, or not provided]
- Constraints: [agreed constraints]
- Decisions: [agreed product and technical decisions]
- Open questions: [unresolved questions or none]
- Source files: [actual research filename, or none] → docs/PRD-[AppName]-MVP.md
---
````

### For Developers — PRD-[AppName]-MVP.md:

````markdown
# Product Requirements Document: [App Name] MVP

## Executive Summary

**Product:** [Name]
**Version:** MVP (1.0)
**Document Status:** [Draft/Final]
**Last Updated:** [Date]

### Product Vision
[Expanded vision statement based on their input]

### Success Criteria
[High-level success metrics and targets]

## Problem Statement

### Problem Definition
[Detailed problem analysis with market context]

### Impact Analysis
- **User Impact:** [Quantified where possible]
- **Market Impact:** [Size and opportunity]
- **Business Impact:** [Revenue/growth potential]

## Target Audience

### Primary Persona: [Name]
**Demographics:**
- [Age, location, income, etc.]

**Psychographics:**
- [Behaviors, preferences, values]

**Jobs to Be Done:**
1. [Functional job]
2. [Emotional job]
3. [Social job]

**Current Solutions & Pain Points:**
| Current Solution | Pain Points | Our Advantage |
|-----------------|-------------|---------------|
| [Solution] | [Problems] | [How we're better] |

### Secondary Personas
[If applicable, brief descriptions]

## User Stories

### Epic: [Core Epic Name]

**Primary User Story:**
"As a [user type], I want to [action] so that [benefit]"

**Acceptance Criteria:**
- [ ] [Specific criterion]
- [ ] [Specific criterion]
- [ ] [Specific criterion]

### Supporting User Stories
1. "As a [user], I want to [action] so that [benefit]"
   - AC: [Criteria]
2. "As a [user], I want to [action] so that [benefit]"
   - AC: [Criteria]

[Continue for all stories]

## Functional Requirements

### Core Features (MVP — P0)

#### Feature 1: [Name]
- **Description:** [Detailed description]
- **User Value:** [Why users need this]
- **Business Value:** [Why business needs this]
- **Acceptance Criteria:**
  - [ ] [Specific measurable criterion]
  - [ ] [Specific measurable criterion]
- **Dependencies:** [Technical or business dependencies]
- **Estimated Effort:** [T-shirt size or points]

[Repeat for all P0 features]

### Should Have (P1)
[Brief list with rationale for post-MVP]

### Could Have (P2)
[Brief list with rationale]

## Out of Scope (Not in MVP)
- [Feature]: [Why excluded]
- [Feature]: [Why excluded]

## Non-Functional Requirements

### Performance
- **Page Load:** [Target from PRD or research, e.g. < 3 seconds]
- **API Response:** [Target based on actual user flow]
- **Concurrent Users:** [Expected MVP load]
- **Uptime:** [MVP-appropriate reliability target]

### Security
- **Authentication:** [Method]
- **Authorization:** [RBAC/ACL approach]
- **Data Protection:** [Encryption standards]
- **Compliance:** [GDPR/CCPA/etc.]
- **AI/Tool Permissions:** [What tools can read/write, destructive actions, prompt-injection boundaries]

### AI / Automation Requirements
- **AI Surface:** [None / in-app AI / automation / assistant-assisted workflow]
- **Provider Strategy:** [OpenAI Responses/Agents/Apps SDK / Anthropic API / Gemini-Antigravity / Vercel AI SDK-Gateway / Cloudflare Workers AI-Agents / local model / no product AI]
- **Output Contract:** [Structured outputs, tool schema, MCP schema, or conversational response]
- **Action Permissions:** [Read-only, write, destructive, external network, credential-bearing, production]
- **Data Retention:** [What prompts, outputs, logs, and files may be stored]
- **Cost Ceiling:** [Budget or usage limit]
- **Fallback Behavior:** [What happens when AI calls fail or hit limits]
- **Eval Set:** [Direct, indirect, negative, auth-required, failure-case, and tool trajectory prompts]

### Usability
- **Accessibility:** WCAG 2.1 AA
- **Browser Support:** Chrome, Safari, Firefox, Edge (latest 2 versions)
- **Mobile Support:** Responsive design, iOS 14+, Android 10+
- **Internationalization:** [If applicable]

### Scalability
- **User Growth:** Support 10x growth without architecture change
- **Data Growth:** [Expectations]
- **Geographic Distribution:** [Requirements]

## Quality Standards

*Engineering quality standards (type safety, testing, code rules) are defined later in AGENTS.md (Part 4), not in this document.*

## UI/UX Requirements

### Design Principles
1. [Principle with explanation]
2. [Principle with explanation]
3. [Principle with explanation]

### Information Architecture
Adapt this example to the agreed screens. Include authentication, dashboards, and profiles only when required by the MVP.
```
├── Landing Page
├── Authentication
│   ├── Sign Up
│   ├── Sign In
│   └── Password Reset
├── Dashboard
│   ├── [Section]
│   └── [Section]
├── [Core Feature Area]
│   ├── [Sub-feature]
│   └── [Sub-feature]
└── Settings/Profile
```

### Key User Flows

#### Flow 1: [Name]
1. [Entry point] → 2. [Action] → 3. [Decision: if X, do Y; otherwise Z] → 4. [Success state]

[Include 2-3 critical flows as simple numbered steps]

## Success Metrics

| Category | Metric | Target | Measurement |
|----------|--------|--------|-------------|
| Activation | [Metric] | [Target] | [Tool/Method] |
| Engagement | [Metric] | [Target] | [Tool/Method] |
| Retention | [Metric] | [Target] | [Tool/Method] |
| Revenue (if applicable) | [Metric] | [Target] | [Tool/Method] |

## Constraints & Assumptions

### Constraints
- **Budget:** [Amount]
- **Timeline:** [Launch date]
- **Resources:** [Team size/composition]
- **Technical:** [Platform/framework constraints]

### Assumptions
- [Assumption about users]
- [Assumption about market]
- [Assumption about technology]

### Open Questions
- [Open question]
- [Open question]

### Dependencies
- [External dependency]
- [Internal dependency]

## MVP Definition of Done

### Feature Complete
- [ ] All P0 features implemented
- [ ] All acceptance criteria met
- [ ] Code review completed

### Quality Assurance
- [ ] Tests passing on all critical paths
- [ ] Manual testing completed
- [ ] Performance benchmarks met

### Documentation
- [ ] API documentation complete
- [ ] User documentation drafted
- [ ] Deployment guide created

### Release Ready
- [ ] Staging environment validated
- [ ] Monitoring/alerting configured
- [ ] Rollback plan documented
- [ ] Launch communication prepared

<details>
<summary><b>Enterprise add-on — skip for MVP</b></summary>

*These frameworks matter post-launch (or for funded teams reporting to stakeholders) — not for a first MVP with zero users. Come back to them once you have real usage data.*

### North Star Metric
[Single most important metric]

### OKRs (First 90 Days)

**Objective 1:** [Objective]
- KR1: [Measurable result]
- KR2: [Measurable result]
- KR3: [Measurable result]

### Full AARRR Metrics Framework
| Category | Metric | Target | Measurement |
|----------|--------|--------|-------------|
| Acquisition | [Metric] | [Target] | [Tool/Method] |
| Activation | [Metric] | [Target] | [Tool/Method] |
| Retention | [Metric] | [Target] | [Tool/Method] |
| Revenue | [Metric] | [Target] | [Tool/Method] |
| Referral | [Metric] | [Target] | [Tool/Method] |

### Risk Matrix
| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| [Risk description] | High/Med/Low | High/Med/Low | [Strategy] |

### Appendices
- **A. Competitive Analysis:** [Summary from research]
- **B. Technical Specifications:** [Link to Technical Design Document]
- **C. Mockups/Wireframes:** [Links or embedded images]

</details>

---
*PRD Version: 1.0*
*Next Review: [Date]*
*Owner: [Name]*
*Stakeholders: [List]*

---
## Handoff Context
<!-- Machine-readable summary for the next workflow step. Do not delete; the next prompt in the workflow reads this block. -->
- Stage: prd
- App name: [App Name]
- User level: [A | B | C]  (A = vibe coder, B = developer, C = in-between)
- Target platform: [platform]
- Budget: [budget]
- Timeline: [timeline]
- AI in product scope: [yes / no / undecided]
- Research status: [status of supplied research, or not provided]
- Constraints: [agreed constraints]
- Decisions: [agreed product and technical decisions]
- Open questions: [unresolved questions or none]
- Source files: [actual research filename, or none] → docs/PRD-[AppName]-MVP.md
---
````

### For In-Between Users — PRD-[AppName]-MVP.md:

````markdown
# Product Requirements Document: [App Name] MVP

## Overview

**Product Name:** [Name]
**Problem Statement:** [Expanded from their input]
**MVP Goal:** [Clear, measurable objective]
**Target Launch:** [Timeframe]

## Target Users

### Primary User Profile
**Who:** [User description]
**Problem:** [What they struggle with]
**Current Solution:** [What they use now]
**Why They'll Switch:** [Your unique value]

### User Persona: [Name]
- **Demographics:** [Age range, location, profession]
- **Tech Level:** [Beginner/Intermediate/Advanced]
- **Goals:** [What they want to achieve]
- **Frustrations:** [Current pain points]

## User Journey

### The Story
[Step-by-step narrative of user journey through the app]

### Key Touchpoints
1. **Discovery:** [How they find you]
2. **First Contact:** [Landing page/app store]
3. **Onboarding:** [First experience]
4. **Core Loop:** [Regular usage]
5. **Retention:** [What brings them back]

## MVP Features

### Core Features (Must Have)

#### 1. [Feature Name]
- **Description:** [What it does]
- **User Value:** [Why users need it]
- **Success Criteria:**
  - Users can [action]
  - System [behavior]
  - Data is [state]
- **Priority:** Critical

#### 2. [Feature Name]
[Same structure]

[Continue for 3-5 core features]

## Out of Scope (Not in MVP)
| Feature | Why Wait | Planned For |
|---------|----------|-------------|
| [Feature] | [Reason] | Version 2 |
| [Feature] | [Reason] | Version 2 |

## Success Metrics

### Primary Metrics
1. **[Metric Name]:** [Target] by [Date]
   - How to measure: [Method]
   - Why it matters: [Reasoning]

2. **[Metric Name]:** [Target] by [Date]
   - How to measure: [Method]
   - Why it matters: [Reasoning]

### Secondary Metrics
- [Metric]: [Target]
- [Metric]: [Target]

## UI/UX Direction

**Design Feel:** [Their descriptive words]
**Inspiration:** [Similar apps/sites they like]

### Key Screens
1. **[Screen Name]**
   - Purpose: [What it does]
   - Key Elements: [What's on it]
   - User Actions: [What users can do]

2. **[Screen Name]**
   [Same structure]

### Design Principles
- [Principle 1]: [How it applies]
- [Principle 2]: [How it applies]
- [Principle 3]: [How it applies]

## Technical Considerations

**Platform:** [Web/Mobile/Both]
**Responsive:** [Yes/No/Mobile-first]
**Performance Goals:**
- Load time: < 3 seconds
- Smooth animations (60fps)
- Works on 3-year-old devices

**Security/Privacy:** [Data sensitivity, auth requirements]
**Scalability:** [Expected user growth or constraints]

## AI / Automation Scope

**AI Surface:** [None / in-app AI / automation / assistant-assisted workflow]
**Allowed Data:** [What AI can read/write]
**Provider / Retention:** [Provider/account type and retention/training setting to verify]
**Output Contract:** [Structured output schema or freeform response]
**Confirmation Rules:** [Actions requiring user approval]
**Verification Prompts:** [Direct, indirect, negative, auth-required, failure, and trajectory cases]

**Browser/Device Support:**
- Chrome, Safari, Firefox (latest)
- iOS 14+, Android 10+
- Tablet optimized: [Yes/No]

## Constraints & Requirements

### Budget
- Development tools: $[X]/month
- Hosting/Infrastructure: $[X]/month
- Third-party services: $[X]/month
- **Total:** $[X]/month

### Timeline
- MVP Development: [X weeks]
- Beta Testing: [X weeks]
- Launch Target: [Date]

### Technical Constraints
- [Any specific requirements]
- [Platform limitations]
- [Integration needs]

## Open Questions & Assumptions
- [Open question]
- [Key assumption]

## Quality Standards

**Code Quality:**
- Use the chosen language's type-checking tools where appropriate
- Handle errors explicitly — don't hide them
- Test the important paths before launch

**Design Quality:**
- Use consistent colors and spacing (design tokens)
- Test on the primary target device first, then the other agreed platforms
- Check accessibility basics (contrast, labels)

**What This Project Will NOT Accept:**
- Placeholder content ("Lorem ipsum") at launch
- Features that half-work — complete or cut
- Skipping testing on the agreed target devices

## Risk Mitigation

| Risk | Impact | Mitigation Strategy |
|------|--------|-------------------|
| [Risk] | [High/Med/Low] | [How to handle] |
| [Risk] | [High/Med/Low] | [How to handle] |

## MVP Completion Checklist

### Development Complete
- [ ] All core features working
- [ ] Basic error handling
- [ ] Responsive on the agreed devices, when applicable
- [ ] Tested on the agreed browsers or product platform

### Launch Ready
- [ ] Analytics configured if in scope
- [ ] Basic SEO setup if public web discovery matters
- [ ] An appropriate contact/support method is available
- [ ] Privacy policy and terms provided where applicable to the product

### Quality Checks
- [ ] Friends & family tested
- [ ] Core journey works end-to-end
- [ ] No critical bugs
- [ ] Performance acceptable

## Next Steps

1. **Immediate:** Review and approve this PRD
2. **Next:** Create Technical Design Document (Part 3)
3. **Then:** Set up development environment
4. **Build:** Implement with AI assistance
5. **Test:** Beta with 10-20 users
6. **Launch:** Go live!

---
*Created: [Date]*
*Status: Ready for Technical Design*
*Questions? [Contact]*

---
## Handoff Context
<!-- Machine-readable summary for the next workflow step. Do not delete; the next prompt in the workflow reads this block. -->
- Stage: prd
- App name: [App Name]
- User level: [A | B | C]  (A = vibe coder, B = developer, C = in-between)
- Target platform: [platform]
- Budget: [budget]
- Timeline: [timeline]
- AI in product scope: [yes / no / undecided]
- Research status: [status of supplied research, or not provided]
- Constraints: [agreed constraints]
- Decisions: [agreed product and technical decisions]
- Open questions: [unresolved questions or none]
- Source files: [actual research filename, or none] → docs/PRD-[AppName]-MVP.md
---
````

---

## Final Instructions

### Document Output and Order

Create **`PRD-[AppName]-MVP.md`** using the same app-name filename stem as Part 1. The final project destination is `docs/PRD-[AppName]-MVP.md`; the user may save it anywhere until they create their app folder in Part 4.

The saved artifact contains, in order:
1. The completed PRD body and footer.
2. The filled **Handoff Context** from the selected template.
3. The fenced JSON metadata below as the final block.

Provide a named downloadable file if file creation is available. Otherwise, present one clearly delimited copyable document; use a longer outer fence if the content contains code fences. Do not include the save/attach instructions or your follow-up question inside that file.

### Machine-Readable Summary

Append this fenced JSON block after Handoff Context. It keeps the document compatible with the optional `vibeworkflow` CLI; the manual workflow requires no CLI installation. Match the PRD exactly and use empty arrays where a category has no agreed items:

```json
{
  "schemaVersion": 1,
  "documentType": "prd",
  "appName": "[App Name]",
  "oneLiner": "[one-sentence description]",
  "targetUsers": "[who this is for]",
  "phase": "Foundation",
  "mustHave": ["feature", "feature"],
  "niceToHave": ["feature"],
  "notInMvp": ["feature"],
  "successMetrics": ["metric"]
}
```

### Self-Verification Checklist

Before presenting the completed PRD, verify it against the supplied answers:

| Required Section | Present? |
|-----------------|----------|
| Core problem clearly defined | Yes / No |
| Target user well described | Yes / No |
| Agreed must-have features listed | Yes / No |
| Each feature has a user story and observable success criteria | Yes / No |
| Success metrics defined | Yes / No |
| Constraints acknowledged | Yes / No |
| NOT-in-MVP features listed | Yes / No |
| Handoff Context and JSON agree with the document | Yes / No |
| Unverified claims and open questions remain clearly labeled | Yes / No |

Fix omissions before handing over the file. These checks validate the document's contents; they are not evidence that the product has been built or tested.

### Save → Attach → Part 3

After the artifact, tell the user:

1. **Review the PRD:** check its scope, must-have features, and out-of-scope list. The PRD is a living document; update it as you learn from users.
2. **Save** `PRD-[AppName]-MVP.md`, including its Handoff Context and final JSON block. Its eventual location is `docs/PRD-[AppName]-MVP.md`.
3. **Start Part 3 in your chosen chat:** paste the complete `part3-tech-design-mvp.md` prompt and attach this PRD. You may attach `research-[AppName].md` for additional detail. A fresh chat is fine; no previous conversation or repository access is assumed.

**Copy this with the full Part 3 prompt and your PRD attached:**

```text
Use the attached PRD and its Handoff Context to create my technical design with the full Part 3 prompt I have supplied. Reuse my existing answers and preserve the agreed scope, budget, timeline, and constraints. Ask for missing technical decisions. Do not assume access to my previous chat or project files that I have not provided.
```

End by asking whether the user wants any corrections before they move to technical design. Do not start Part 3 automatically; the user chooses when to continue.

---
