# /build Command

```yaml
command-spec: "1.0"
name: build
version: "1.0.0"
agent: zola-specialist
```

---

## Synopsis

```
/build [action]
```

---

## Actions

| Action | Description |
|--------|-------------|
| `serve` | Start development server |
| `production` | Build for production |
| `check` | Check for broken links |
| `deploy` | Deploy to GitLab Pages |
| `clean` | Remove build artifacts |

---

## Usage Examples

```
/build serve
/build production
/build check
/build deploy
/build clean
```

---

## Default Behavior

When invoked without arguments, runs `zola build` for production build.

---

## Commands Executed

| Action | Shell Command |
|--------|---------------|
| `serve` | `zola serve --drafts` |
| `production` | `zola build` |
| `check` | `zola check` |
| `deploy` | Push to main branch |
| `clean` | `rm -rf public/` |

---

## Doctrine Compliance

```yaml
enforcement:
  doctrine: "no-mercy-no-doubts"
  compliance: mandatory
```

---

*Command: /build v1.0.0*
