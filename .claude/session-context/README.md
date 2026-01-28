# Session Context Directory

This directory stores Claude Code session context files for continuity across sessions.

## Naming Convention

`YYYY-MM-DD-description-session.md`

Example: `2026-01-28-content-migration-session.md`

## Template

```markdown
# Session: [Description]
**Date**: YYYY-MM-DD
**Duration**: [time]

## Objectives
- [ ] Objective 1
- [ ] Objective 2

## Actions Taken
1. Action description
2. Action description

## Files Modified
- `path/to/file.md` - Description of changes

## Decisions Made
- Decision 1: Rationale
- Decision 2: Rationale

## Next Steps
- [ ] Next step 1
- [ ] Next step 2
```

## Retention

Keep last 10 session files. Archive older sessions if needed.
