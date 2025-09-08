# Suggested Commands for Hugo Website Development

## Development Commands

### Local Development
```bash
# Start local development server (available at http://localhost:1313)
hugo server

# Start server with drafts included
hugo server -D

# Start server with verbose logging
hugo server --verbose
```

### Building
```bash
# Build the static site (outputs to /public)
hugo

# Build with minification
hugo --minify

# Build with drafts included
hugo -D

# Clean build (removes public directory first)
rm -rf public && hugo
```

## Git Commands
```bash
# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Update content"

# Push to GitHub (triggers deployment)
git push origin main

# Pull latest changes
git pull origin main
```

## Content Management
```bash
# Create new content (example for papers)
hugo new papers/my-paper/index.md

# Create new content with archetype
hugo new --kind papers papers/my-paper/index.md
```

## System Utilities (macOS/Darwin)
```bash
# List files
ls -la

# Navigate directories
cd content/papers

# Find files
find . -name "*.md"

# Search in files
grep -r "sbi" content/

# Open in VS Code
code .

# Check Hugo version
hugo version

# Check if Hugo is installed
which hugo
```

## Validation & Testing
```bash
# Check for broken links (if installed)
hugo --buildDrafts --verbose 2>&1 | grep -E "ERROR|WARN"

# Check config validity
hugo config

# List all content
hugo list all

# List drafts
hugo list drafts
```

## Deployment
Deployment happens automatically via GitHub Actions when pushing to main branch.
Manual deployment not needed, but the workflow can be triggered manually from GitHub Actions tab if necessary.