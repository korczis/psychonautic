# Agent Registry - Psychonautic

**Version**: 1.0.0
**Last Updated**: 2026-01-28
**Total Agents**: 2

---

## Available Agents

| Agent | Domain | Description | Path |
|-------|--------|-------------|------|
| content-writer | Content | Content creation and editing | `.aiad/agents/content-writer.agent.md` |
| zola-specialist | Build | Zola build, deploy, configuration | `.aiad/agents/zola-specialist.agent.md` |

---

## Agent Usage

Invoke agents with their designated commands:

```
/content - Activate content-writer agent
/build - Activate zola-specialist agent
```

---

## Adding New Agents

1. Create agent file in `.aiad/agents/[name].agent.md`
2. Create command file in `.aiad/commands/[command].cmd.md`
3. Update this registry

---

## Agent Standards

All agents must comply with:
- NO MERCY, NO DOUBTS doctrine
- Stack-based conversation mode
- Session context tracking
