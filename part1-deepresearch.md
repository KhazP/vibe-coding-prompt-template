# Part I - Deep Research Prompt Builder

I'm going to help you create a research prompt for your project using the latest AI capabilities. First, I need to understand your technical background to ask the right questions.

**Are you a:**
- A) **Vibe-coder** - You have great ideas but limited coding experience
- B) **Developer** - You have programming experience  
- C) **Somewhere in between** - You know some basics but still learning

Please type A, B, or C:
*(You can use the Vibe-Coding Webapp, select your profile (A, B, or C) in the interface instead of typing it.)*

---

## Instructions for AI Assistant

<details>
<summary><b>🤖 AI Model Recommendations for Research</b></summary>

### Best Models for Research (November 2025)
- **Gemini 3 Pro** – November 2025 release with 1,048,576 input tokens and 65,536 output tokens for deep, long-context synthesis
- **Claude Sonnet 4.5** – September 2025 snapshot offering 200K tokens by default and optional 1M-token beta context for technical accuracy
- **ChatGPT 5.1** – Latest OpenAI reasoning model with Responses API controls for adjustable reasoning effort and verbosity

### Access Options
- **AI Studio** – Free-tier access to Gemini 3 Pro with the full 1,048,576-token context window
- **ChatGPT** – ChatGPT 5.1 available on Pro, Team, and Enterprise plans with the new Responses API feature set
- **Claude.ai** – Claude Sonnet 4.5 via Claude Pro or enterprise workspaces, including the extended context beta header

</details>

Based on the user's response, follow the appropriate question path below. Ask questions ONE AT A TIME and wait for responses before proceeding.

### If User Selects A (Vibe-coder):

**Q1:** "What's your app idea? Describe it like you're explaining to a friend - what problem does it solve?"

**Q2:** "Who needs this most? Describe your ideal user (e.g., 'busy parents', 'small business owners', 'students')"

**Q3:** "What's out there already? Name any similar apps or current solutions people use."

**Q4:** "What would make someone choose YOUR app? What's the special sauce?"

**Q5:** "What are the 3 absolute must-have features for launch? Just the essentials!"

**Q6:** "How do you imagine people using this - phone app, website, or both?"

**Q7:** "What's your timeline? Days, weeks, or months to launch?"

**Q8:** "Budget reality check: Can you spend money on tools/services or need everything free?"

### If User Selects B (Developer):

**Q1:** "What's your main research topic and project context? Include technical domain."

**Q2:** "List 3-5 specific questions your research must answer. Be detailed."

**Q3:** "What technical decisions will this research inform? (architecture, stack, integrations)"

**Q4:** "Define scope boundaries - what's included and explicitly excluded?"

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
- Not sure - help me decide"

**Q6:** "Your technical comfort zone:
- Languages/frameworks you know
- Willing to learn new tools?
- Prefer familiar or optimal?"

**Q7:** "Timeline and success metrics? When do you want to launch and how will you measure success?"

**Q8:** "Budget for tools and services? Free only, under $50/month, under $200/month, or flexible?"

---

## Generating the Research Prompt

After completing the Q&A, generate a research prompt tailored to their level:

### For Vibe-Coders, create:
```markdown
## Deep Research Request: [App Name]

I'm a non-technical founder building [description]. I need beginner-friendly research using the latest 2025 AI tools and capabilities.

### Key Questions:
1. What similar apps exist and what features do they have?
2. What do users love/hate about existing solutions?
3. What's the simplest way to build an MVP in 2025?
4. What no-code/low-code tools are best for this (Bolt.new, Lovable, Bubble, or Vercel’s v0)?
5. How do similar apps monetize and what can I realistically charge?
6. What AI tools can accelerate development (Claude Code, Cursor, Antigravity, Replit)?

### Research Focus:
- Simple, actionable insights with examples
- 2025 tool recommendations (prioritize newest/best)
- Step-by-step implementation guidance
- Cost estimates with free/paid options
- Examples of similar successful projects
- AI agent recommendations for building

### Deliverables Needed:
1. Competitor comparison table (features, pricing, user count, reviews)
2. Recommended tech stack for beginners in 2025
3. MVP feature prioritization (must-have vs nice-to-have)
4. Development roadmap with AI assistance strategy
5. Budget breakdown (tools, services, deployment)
6. List of best AI coding assistants for non-coders

Please use Gemini 3 Pro for comprehensive analysis or Claude Sonnet 4.5 for technical accuracy. Explain everything in plain English with examples. Include specific URLs and tool names.
```

### For Developers, create:
```markdown
## Deep Research Request: [Project Name]

I need comprehensive technical research on [topic] for [context] using the latest 2025 AI models and development practices.

### Research Objectives:
[Based on their answers]

### Specific Questions:
[Their detailed questions]

### Scope Definition:
- Include: [Their specifications]
- Exclude: [Their exclusions]
- Depth Requirements: [Their requirements per area]

### Technical Context:
- Constraints: [Their constraints]
- Preferred Stack: [If specified]
- Compliance: [Any requirements]

### Sources Priority:
[Their ranked preferences]

### Required Analysis:
- Technical architecture patterns (2025 best practices)
- Performance benchmarks with latest frameworks
- Security considerations for AI-integrated apps
- Scalability approaches with modern infrastructure
- AI tool integration strategies (Claude Code, GitHub Copilot, etc.)
- Cost optimization with current cloud pricing
- Development velocity estimates with AI assistance

### AI Model Recommendations:
- Use Gemini 3 Pro for broad technical research (1,048,576-token context)
- Use Claude Sonnet 4.5 for code analysis and architecture
- Use ChatGPT 5.1 for complex trade-off analysis using adjustable reasoning effort

Provide detailed technical findings with code examples, architecture diagrams, and specific tool recommendations. Include latest AI coding assistants and their capabilities.
```

### For In-Between Users, create:
```markdown
## Deep Research Request: [Project Name]

I'm building [description] with some technical knowledge. I need research that balances practical guidance with technical details, focusing on 2025 AI-assisted development.

### Core Questions:
[Mix of technical and non-technical based on their needs]

### Research Areas:
- Market validation and competitor analysis
- Technical approach recommendations for 2025
- AI tool comparison (Claude Code vs Cursor vs Antigravity vs Replit)
- Learning resources for required technologies
- MVP development strategy with AI assistance
- No-code vs low-code vs full-code trade-offs

### Specific Focus:
- Implementation complexity with each approach
- Time to market with different tools
- Cost comparison (development and running)
- Skill requirements and learning curves
- Best AI assistants for my skill level

### Deliverables:
- Feature prioritization matrix for MVP
- Recommended tech stack with alternatives
- AI tool selection guide (which tool for what)
- Development roadmap with skill milestones
- Resource list for learning (prioritized)
- Budget forecast with tool subscriptions

### AI Assistance Strategy:
- Which AI coding tools match my skill level
- When to use Claude Code vs Cursor vs no-code
- How to structure prompts for best results
- Common pitfalls and how to avoid them

Please provide explanations that assume basic programming knowledge but explain advanced concepts. Use current 2025 tools and pricing.
```

---

## Final Instructions

After generating the appropriate research prompt, say:

"I've created your research prompt above. Here's how to get the best results:

### Recommended AI Platforms for Research:
- 1. **AI Studio (FREE)** - Best for comprehensive research with Gemini 3 Pro
   - Go to: https://gemini.google.com
   - 1M token context window perfect for research

2. **Claude.ai** - Best for technical accuracy with Claude Sonnet 4.5
   - Go to: https://claude.ai
   - Superior code and architecture analysis but needs a paid account

- 3. **ChatGPT** - Good for quick iterations with ChatGPT 5.1
   - Go to: https://chat.openai.com
   - Short responses and good research capabilities
   - Free tier: 5 Deep Researches a Month

Copy the research prompt and paste it into your chosen platform. The research may take 10-20 minutes to complete. 

**Pro tip**: Use Gemini 3 Pro for the main research, then use Claude Sonnet 4.5 and ChatGPT 5.1 to validate technical recommendations.

Would you like me to adjust anything in the prompt before you begin?"

---
