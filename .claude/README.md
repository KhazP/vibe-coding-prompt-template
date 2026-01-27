# Claude Code Integration

This directory contains Claude Code skills and hooks for the Vibe-Coding workflow.

## Quick Setup

### Option A: Clone the Repository

```bash
# Clone the repo
git clone https://github.com/KhazP/vibe-coding-prompt-template.git
cd vibe-coding-prompt-template

# Start Claude Code
claude
```

### Option B: Install Individual Skills with npx

Install only the skills you need directly into any project:

```bash
# Install master orchestrator skill
npx skills add https://github.com/khazp/vibe-coding-prompt-template --skill vibe-workflow

# Install all skills at once
npx skills add https://github.com/khazp/vibe-coding-prompt-template --skill vibe-research
npx skills add https://github.com/khazp/vibe-coding-prompt-template --skill vibe-prd
npx skills add https://github.com/khazp/vibe-coding-prompt-template --skill vibe-techdesign
npx skills add https://github.com/khazp/vibe-coding-prompt-template --skill vibe-agents
npx skills add https://github.com/khazp/vibe-coding-prompt-template --skill vibe-build
```

> **Browse all skills:** [skills.sh/khazp/vibe-coding-prompt-template](https://skills.sh/khazp/vibe-coding-prompt-template)

That's it! The skills are automatically available.

## Available Skills

| Command | Description | Time | npx Install |
|---------|-------------|------|-------------|
| `/vibe-workflow` | Complete guided workflow from idea to MVP | Full | `npx skills add https://github.com/khazp/vibe-coding-prompt-template --skill vibe-workflow` |
| `/vibe-research` | Deep research and market validation | 20 min | `npx skills add https://github.com/khazp/vibe-coding-prompt-template --skill vibe-research` |
| `/vibe-prd` | Create Product Requirements Document | 15 min | `npx skills add https://github.com/khazp/vibe-coding-prompt-template --skill vibe-prd` |
| `/vibe-techdesign` | Plan technical architecture | 15 min | `npx skills add https://github.com/khazp/vibe-coding-prompt-template --skill vibe-techdesign` |
| `/vibe-agents` | Generate AGENTS.md and AI configs | 10 min | `npx skills add https://github.com/khazp/vibe-coding-prompt-template --skill vibe-agents` |
| `/vibe-build` | Build your MVP following the plan | 1-3 hrs | `npx skills add https://github.com/khazp/vibe-coding-prompt-template --skill vibe-build` |

## Skill Details

### /vibe-workflow

**Master orchestrator** - Guides you through all 5 steps automatically.

```
> /vibe-workflow
```

Or just say: *"Help me build an MVP"*

The skill will:
1. Check your current progress
2. Identify which step you're on
3. Guide you through remaining steps
4. Track completion across sessions

### /vibe-research

**Market research and idea validation**

Triggers on:
- "research my idea"
- "validate my app"
- "help me start a new project"

Questions are tailored to your experience level:
- **Vibe-coder**: Simple, friendly questions
- **Developer**: Technical, detailed questions
- **In-between**: Balanced approach

Output: `docs/research-[AppName].txt`

### /vibe-prd

**Product Requirements Document generator**

Triggers on:
- "create PRD"
- "define my product"
- "write requirements"

Creates a comprehensive PRD with:
- Product overview and goals
- User personas and journeys
- Feature prioritization (MoSCoW)
- Success metrics
- Design direction

Output: `docs/PRD-[AppName]-MVP.md`

### /vibe-techdesign

**Technical architecture planning**

Triggers on:
- "plan technical design"
- "choose tech stack"
- "how should I build this"

Helps you decide:
- Platform (web, mobile, desktop)
- Tech stack with alternatives
- Architecture pattern
- Deployment strategy
- Cost estimates

Output: `docs/TechDesign-[AppName]-MVP.md`

### /vibe-agents

**AI configuration generator**

Triggers on:
- "create AGENTS.md"
- "configure AI assistant"
- "generate agent files"

Creates:
- `AGENTS.md` - Master build plan
- `agent_docs/` - Detailed specifications
- Tool-specific configs (CLAUDE.md, .cursorrules, etc.)

### /vibe-build

**MVP builder**

Triggers on:
- "build my MVP"
- "start coding"
- "implement the project"

Follows Plan → Execute → Verify workflow:
1. Reads AGENTS.md for current phase
2. Proposes implementation plan
3. Builds one feature at a time
4. Tests after each feature
5. Updates progress in AGENTS.md

## Pre-configured Hooks

This project includes hooks that run automatically:

### PreToolUse Hooks

**File Protection** - Blocks accidental modifications to:
- `.env` files (secrets)
- `package-lock.json` (use npm instead)
- `.git/` directory

### PostToolUse Hooks

**Auto-formatting** - After file edits:
- Runs Prettier on `.ts`, `.tsx`, `.js`, `.jsx` files
- Runs ESLint fix on JavaScript/TypeScript

### Stop Hooks

**Session Summary** - When Claude finishes:
- Shows what was accomplished
- Lists files modified
- Suggests next steps

## Hook Configuration

Hooks are defined in `.claude/hooks/hooks.json`. To customize:

```json
{
  "hooks": {
    "PreToolUse": [...],
    "PostToolUse": [...],
    "Stop": [...]
  }
}
```

### Disable Hooks

To disable all hooks temporarily:
```bash
claude --no-hooks
```

To disable specific hooks, edit `hooks.json` and remove the hook entry.

## Directory Structure

```
.claude/
├── README.md              # This file
├── hooks/
│   └── hooks.json         # Auto-hooks configuration
└── skills/
    ├── vibe-research/
    │   └── SKILL.md
    ├── vibe-prd/
    │   └── SKILL.md
    ├── vibe-techdesign/
    │   └── SKILL.md
    ├── vibe-agents/
    │   └── SKILL.md
    ├── vibe-build/
    │   └── SKILL.md
    └── vibe-workflow/
        └── SKILL.md
```

## Customizing Skills

Skills are Markdown files with YAML frontmatter. To modify a skill:

1. Open the skill's `SKILL.md` file
2. Edit the frontmatter (name, description, tools)
3. Edit the instructions below the frontmatter
4. Changes take effect immediately

### Skill Frontmatter Options

```yaml
---
name: skill-name
description: When to use this skill
allowed-tools: Read, Write, Bash  # Restrict available tools
model: sonnet  # Optional: sonnet, opus, haiku
---
```

## Troubleshooting

### Skills not appearing

1. Check you're in the project directory
2. Run `claude --debug` to see loading errors
3. Verify SKILL.md files have valid YAML frontmatter

### Hooks not running

1. Check `.claude/hooks/hooks.json` exists
2. Verify JSON syntax is valid
3. Check hook scripts are executable

### Skill not triggering

The skill's `description` determines when it triggers. Include keywords users would naturally say:
- Good: "Use when user says 'create PRD' or 'define product requirements'"
- Bad: "PRD generation utility"

## Contributing

To add a new skill:

1. Create directory: `.claude/skills/your-skill/`
2. Add `SKILL.md` with frontmatter and instructions
3. Test with `/your-skill`
4. Submit PR

## Resources

- [Claude Code Skills Documentation](https://docs.anthropic.com/en/docs/claude-code/skills)
- [Claude Code Hooks Documentation](https://docs.anthropic.com/en/docs/claude-code/hooks)
- [Vibe-Coding Workflow Guide](../README.md)
