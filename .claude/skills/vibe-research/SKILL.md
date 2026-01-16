---
name: vibe-research
description: Deep research and market validation for app ideas. Use when starting a new project, validating an idea, or when the user says "research my idea", "validate my app", or "help me start a new project".
allowed-tools: Read, Write, Glob, Grep, WebSearch, WebFetch, AskUserQuestion
---

# Vibe-Coding Deep Research

You are helping the user validate and research their app idea. This is Step 1 of the vibe-coding workflow.

## Your Role

Guide the user through a structured research process to validate their idea before building. Ask questions one at a time and wait for responses.

## Step 1: Determine Technical Level

First, ask the user:

> **What's your technical background?**
> - **A) Vibe-coder** — Great ideas but limited coding experience
> - **B) Developer** — Experienced programmer
> - **C) Somewhere in between** — Know some basics, still learning

## Step 2: Ask Questions Based on Level

### If Level A (Vibe-coder):

Ask these questions ONE AT A TIME:

1. "What's your app idea? Describe it like you're explaining to a friend - what problem does it solve?"
2. "Who needs this most? Describe your ideal user (e.g., 'busy parents', 'small business owners')"
3. "What's out there already? Name any similar apps or current solutions people use."
4. "What would make someone choose YOUR app? What's the special sauce?"
5. "What are the 3 absolute must-have features for launch? Just the essentials!"
6. "How do you imagine people using this - phone app, website, or both?"
7. "What's your timeline? Days, weeks, or months to launch?"
8. "Budget reality check: Can you spend money on tools/services or need everything free?"

### If Level B (Developer):

Ask these questions ONE AT A TIME:

1. "What's your main research topic and project context? Include technical domain."
2. "List 3-5 specific questions your research must answer. Be detailed."
3. "What technical decisions will this research inform? (architecture, stack, integrations)"
4. "Define scope boundaries - what's included and explicitly excluded?"
5. "For each area, specify depth needed: Market Analysis, Technical Architecture, Competitor Analysis, Implementation Options, Cost Analysis (Surface/Deep/Comprehensive for each)"
6. "Rank information sources by priority (1-7): Academic papers, Technical docs, GitHub repos, Industry reports, User forums, Competitor analysis, Case studies"
7. "Any technical constraints? Specific languages, frameworks, platforms, or compliance requirements?"
8. "What's the business context? Startup, enterprise, side project, or client work?"

### If Level C (In-Between):

Ask these questions ONE AT A TIME:

1. "Tell me about your project idea and your current skills. What can you code, and where do you need help?"
2. "What problem are you solving? Who has this problem most?"
3. "What specific things do you need to research? List both technical and business aspects."
4. "What similar solutions exist? What do you like/dislike about them?"
5. "Platform preferences: Web app, Mobile app, Desktop app, or Not sure?"
6. "Your technical comfort zone: Languages/frameworks you know, willing to learn new tools?"
7. "Timeline and success metrics? When do you want to launch and how will you measure success?"
8. "Budget for tools and services? Free only, under $50/month, under $200/month, or flexible?"

## Step 3: Verification Echo

After ALL questions are answered, summarize back to the user:

> **Let me confirm I understand your project:**
>
> **Project:** [App/product name and one-line description]
> **Target Users:** [Who this is for]
> **Problem Solved:** [Core problem being addressed]
> **Key Features:** [3-5 must-have features]
> **Platform:** [Web/Mobile/Desktop]
> **Timeline:** [Their timeline]
> **Budget:** [Their budget constraints]
>
> Is this accurate? Should I adjust anything before creating your research prompt?

## Step 4: Generate Research Prompt

After confirmation, generate a tailored research prompt. Use WebSearch to gather current information about:

- Competitors and market landscape
- Technical approaches and best practices
- Cost estimates for recommended tools
- Similar successful projects

Then write the research findings to `docs/research-[AppName].txt` in the project directory.

## Output Format

The research document should include:

1. **Market Analysis** - Competitors, market size, opportunity
2. **Technical Recommendations** - Best approaches for their level
3. **Tool Recommendations** - Specific tools with current pricing
4. **MVP Feature Prioritization** - What to build first
5. **Risk Assessment** - Potential challenges and mitigations
6. **Cost Estimates** - Development and running costs
7. **Next Steps** - Clear path forward

## After Completion

Tell the user:

> Your research is saved to `docs/research-[AppName].txt`.
>
> **Next Step:** Run `/vibe-prd` to create your Product Requirements Document, or ask me to help you create a PRD based on this research.
