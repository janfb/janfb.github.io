# Code Style and Conventions

## Markdown Content Structure

### Front Matter Format
All content files should have YAML front matter with these common fields:
```yaml
---
title: "Title of the content"
date: YYYY-MM-DD
lastmod: YYYY-MM-DD (optional)
author: ["Author Name"] 
description: "Brief description for SEO"
tags: ["tag1", "tag2"]
summary: "Short summary displayed in lists"
cover:
    image: "image.jpg" (optional)
    alt: "Alt text"
    relative: false
editPost:
    URL: "external link"
    Text: "Link text"
---
```

## Content Guidelines

### File Organization
- Each major content piece should be in its own directory with `index.md`
- Related assets (images, PDFs) go in the same directory
- Use descriptive directory names (kebab-case preferred)

### Writing Style
- Academic tone but accessible
- Focus on clarity and precision
- Use proper citations and references
- Include BibTeX entries for papers

### Images
- Place images in the same directory as the content
- Use descriptive filenames
- Provide alt text for accessibility
- Profile picture: 160x160px recommended

### Links
- Internal links: use relative URLs (`/papers/paper1/`)
- External links: include full URL with https://
- PDFs and downloads: place in content directory

## Hugo-Specific Conventions

### Sections
- Main sections defined in config: books, courses, papers, data, talks, software
- Each section has an `_index.md` for section landing page
- Individual items use `index.md` in subdirectories

### Tags
- Use lowercase, hyphenated tags
- Be consistent with existing tags
- Common tags: machine-learning, bayesian-inference, sbi, neuroscience

### Math Support
- Math rendering is enabled via config
- Use standard LaTeX syntax for equations

### Code Highlighting
- Syntax highlighting style: autumn
- Code blocks use triple backticks with language specification

## Configuration Notes
- Light theme only (no dark mode toggle)
- No reading time display
- No table of contents by default (can override per page)
- Code copy buttons enabled
- Disables scroll to top button