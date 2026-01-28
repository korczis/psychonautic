# NO MERCY, NO DOUBTS Doctrine

```yaml
doctrine-spec: "1.0"
name: no-mercy-no-doubts
version: "1.0.0"
authority: universal
compliance: mandatory
```

---

## Core Principles

### NO MERCY

| Principle | Enforcement |
|-----------|-------------|
| **Complete Execution** | Finish every task completely |
| **No Placeholders** | No TODOs, FIXMEs, or "coming soon" |
| **Publication-Ready** | All content ready for production |
| **Quality First** | No shortcuts, no compromises |

### NO DOUBTS

| Principle | Enforcement |
|-----------|-------------|
| **Research First** | Understand before acting |
| **Verify Facts** | Every claim must be accurate |
| **Evidence-Based** | Support with sources |
| **Decisive Action** | Once decided, commit fully |

---

## Application to Content

### Writing
- Complete articles only - no partial drafts published
- All facts verified before publication
- Proper Czech grammar and terminology
- No placeholder images or sections

### Building
- Builds must complete without errors
- Test locally before deployment
- Check for broken links
- Verify search functionality

---

## Violation Protocol

| Level | Description | Action |
|-------|-------------|--------|
| L1 | Minor deviation | Warning + correction |
| L2 | Incomplete content | Block publication |
| L3 | Unverified facts | Reject + rewrite |

---

## Enforcement Block

All AIAD components must include:

```yaml
enforcement:
  doctrine: "no-mercy-no-doubts"
  version: "1.0.0"
  compliance: mandatory
```

---

*Doctrine: NO MERCY, NO DOUBTS v1.0.0*
