# /content Command

```yaml
command-spec: "1.0"
name: content
version: "1.0.0"
agent: content-writer
```

---

## Synopsis

```
/content [action] [target]
```

---

## Actions

| Action | Description |
|--------|-------------|
| `create` | Create new content page |
| `edit` | Edit existing content |
| `review` | Review content quality |
| `translate` | Translate content (cs/en) |
| `list` | List content pages |

---

## Usage Examples

```
/content create section/new-page
/content edit content/intro/_index.md
/content review
/content translate content/page.md to en
/content list
```

---

## Default Behavior

When invoked without arguments, activates content-writer agent for interactive content creation.

---

## Output

- New/modified Markdown files in `content/`
- Proper frontmatter with all required fields
- Publication-ready content

---

## Doctrine Compliance

```yaml
enforcement:
  doctrine: "no-mercy-no-doubts"
  compliance: mandatory
```

---

*Command: /content v1.0.0*
