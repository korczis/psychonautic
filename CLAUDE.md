# CLAUDE.md - Psychonautic Documentation Site

**Version**: 1.0.0
**Last Updated**: 2026-01-28
**Project Type**: Zola Static Site (Documentation)
**Language**: Czech (cs) primary, English secondary
**Doctrine**: NO MERCY, NO DOUBTS

---

## Quick Start

```bash
# Development server
zola serve

# Build for production
zola build

# Build with drafts
zola serve --drafts
```

---

## Project Overview

Psychonautic is a Czech-language documentation site built with Zola static site generator using the EasyDocs theme.

**Stack**: Zola | SASS | Markdown | GitLab Pages
**Theme**: EasyDocs (customized)
**Deployment**: GitLab CI/CD to GitLab Pages

---

## NO MERCY, NO DOUBTS Doctrine

### NO MERCY
- Complete every content piece fully
- No placeholder text, no "TODO" sections
- All content must be publication-ready
- Czech language must be grammatically correct

### NO DOUBTS
- Research before writing
- Verify all facts and references
- Evidence-based content only

---

## Stack-Based Conversation Mode

Every Claude session must track conversation frames:
- Frame ID per response
- Input/Output summaries
- Key decisions made

Commands: `/stack`, `/frame N`, `/pop N`, `/checkpoint <name>`

---

## Content Structure

```
content/
├── _index.md           # Homepage
├── section-name/
│   ├── _index.md       # Section index
│   └── page.md         # Individual pages
```

### Frontmatter Template

```toml
+++
title = "Page Title"
description = "Brief description for SEO"
date = 2026-01-28
updated = 2026-01-28
draft = false
weight = 10
sort_by = "weight"

[taxonomies]
tags = ["tag1", "tag2"]

[extra]
lead = "Lead paragraph for the page"
+++
```

---

## Writing Guidelines

### Czech Language
- Use formal Czech ("vykani") for documentation
- Maintain consistent terminology throughout
- Avoid anglicisms where Czech equivalents exist
- Use Czech quotation marks: "text"

### Content Quality
- Clear, concise explanations
- Practical examples where applicable
- Proper heading hierarchy (h2, h3, h4)
- Internal links to related content

### Markdown Standards
- One sentence per line (for better diffs)
- Blank line before and after code blocks
- Use fenced code blocks with language hints
- Images in `static/images/` directory

---

## Build Commands

| Command | Description |
|---------|-------------|
| `zola serve` | Development server at localhost:1111 |
| `zola serve --drafts` | Include draft content |
| `zola build` | Build to `public/` directory |
| `zola check` | Check for broken links |

---

## Deployment

GitLab CI automatically deploys to GitLab Pages on push to main branch.

**Pipeline**: Build -> Deploy
**Target**: GitLab Pages (korczis.gitlab.io/psychonautic)

---

## Agent Registry

Available agents in `.aiad/agents/`:
- **content-writer** - Content creation and editing
- **zola-specialist** - Build, deploy, and Zola configuration

---

## Commands

| Command | Description |
|---------|-------------|
| `/content` | Create or edit content |
| `/build` | Build and deploy operations |

---

## File Locations

| Purpose | Path |
|---------|------|
| Content | `content/` |
| Templates | `templates/` |
| Styles | `sass/` |
| Static assets | `static/` |
| Configuration | `config.toml` |
| Session context | `.claude/session-context/` |

---

## Session Management

Save session context to `.claude/session-context/YYYY-MM-DD-description-session.md`

Include:
- Session objectives
- Content created/modified
- Decisions made
- Next steps

---

*Psychonautic Documentation Site - Built with Zola*
