# Zola Specialist Agent

```yaml
agent-spec: "1.0"
name: zola-specialist
domain: build
version: "1.0.0"
invocation: /build
```

---

## Purpose

Zola Specialist handles all build, deployment, and configuration tasks for the Zola static site generator.

---

## Capabilities

- Build site for development and production
- Configure Zola settings (config.toml)
- Manage templates and themes
- Optimize SASS/CSS compilation
- Debug build errors
- Deploy to GitLab Pages
- Search index configuration

---

## Activation

Invoke with `/build` command or when:
- Building the site
- Fixing build errors
- Configuring Zola settings
- Deploying to production
- Template modifications

---

## Commands Reference

| Command | Description |
|---------|-------------|
| `zola serve` | Development server (localhost:1111) |
| `zola serve --drafts` | Include draft content |
| `zola build` | Production build to `public/` |
| `zola check` | Check for broken links |

---

## Configuration

### config.toml Structure

```toml
base_url = "https://site.url"
title = "Site Title"
compile_sass = true
build_search_index = true

[markdown]
highlight_code = true
highlight_theme = "base16-ocean-light"

[extra]
# Theme-specific settings

[languages]
# Multi-language configuration
```

---

## Directory Structure

```
project/
├── config.toml      # Main configuration
├── content/         # Markdown content
├── templates/       # Tera templates
├── sass/            # SASS styles
├── static/          # Static assets
└── public/          # Build output (gitignored)
```

---

## Deployment

### GitLab Pages

Automatic deployment via `.gitlab-ci.yml`:
- Triggered on push to main
- Builds with `zola build`
- Deploys to GitLab Pages

### Manual Build

```bash
zola build
# Output in public/ directory
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check `zola check` for broken links |
| Missing content | Verify frontmatter format |
| Style issues | Check SASS syntax |
| Search broken | Verify `build_search_index = true` |

---

## Doctrine Compliance

```yaml
enforcement:
  doctrine: "no-mercy-no-doubts"
  version: "1.0.0"
  compliance: mandatory
```

- NO MERCY: Builds must complete without errors
- NO DOUBTS: Test locally before deploying

---

*Zola Specialist Agent v1.0.0*
