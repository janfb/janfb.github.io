# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal academic website for Jan Teusen (né Boelts), built with [Jekyll](https://jekyllrb.com/) on top of the [al-folio](https://github.com/alshedivat/al-folio) theme (vendored, not a remote dependency). Repo: `janfb/personal-website`. Deployed to GitHub Pages at `https://janfb.github.io/personal-website/`.

## Common commands

- `bundle install` — install Ruby gems (Jekyll + ~25 plugins). Required once per machine; rerun after `Gemfile` changes.
- `bundle exec jekyll serve` — local dev server with live reload at <http://localhost:4000/personal-website/>.
- `bundle exec jekyll build` — one-shot build into `_site/`. CI runs this with `JEKYLL_ENV=production`.
- New blog post: `_posts/YYYY-MM-DD-slug.md` (the date prefix in the filename matters — Jekyll uses it for permalinks and ordering).
- New publication: add a BibTeX entry to `_bibliography/papers.bib`. Optional al-folio fields: `selected={true}` (homepage block), `abbr`, `pdf`, `code`, `arxiv`, `html`, `preview` (filename in `assets/img/publication_preview/`), `note`.

Local Ruby is 3.4.x; CI uses 3.3.5 — usually compatible but if a version-specific build issue appears, install via `chruby`/`rbenv`.

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`: build with Ruby 3.3.5, run PurgeCSS, publish `_site/` to the `gh-pages` branch via `JamesIves/github-pages-deploy-action`. **Repo Pages source must be set to "Deploy from a branch" → `gh-pages`** (not "GitHub Actions") and **Actions → Workflow permissions → Read and write** must be enabled. The deploy strategy is "build elsewhere, push static" because `jekyll-scholar` (the publications plugin) isn't on GitHub Pages' allowlist.

## Repository layout — what's not obvious from `ls`

- **al-folio is vendored**: `_layouts/`, `_includes/`, `_sass/`, `_plugins/` are part of this repo, not a gem. Override by editing in place. Don't try to upgrade by re-cloning al-folio over the tree without diffing — non-trivial customizations live in `_pages/talks.md`, `_config.yml`, `_pages/about.md`.
- **Custom collection: `_talks/`**. al-folio doesn't ship one. Wired up in `_config.yml` under `collections:` and `defaults:` (which sets `layout: page` and `permalink: /talks/:path/`). Rendered on `/talks/` by `_pages/talks.md` via a Liquid loop over `site.talks`. Adding a new talk = drop a `_talks/YYYY-MM-slug.md` with frontmatter `title`, `date`, `venue`, `event_url` (optional), `coauthors` (optional), `img` (optional).
- **`_teachings/` (with the `s`)** is al-folio's standard collection name — match it. Rendered by `_includes/courses.liquid` via `_pages/teaching.md`. Frontmatter: `title`, `year`, `term`, `instructor`, `description`, `img`, `materials`.
- **`_projects/`**: drop `published: false` in frontmatter to hide a project (won't render to `_site/`). Categories are disabled site-wide via `enable_project_categories: false` in `_config.yml` — flip back on if/when there are enough projects.
- **`baseurl: /personal-website`** in `_config.yml`. All asset URLs are prefixed at build time. **Verify against repo Settings → Pages** before deploying — if the served URL is bare `https://janfb.github.io/`, set `baseurl: ""`. Mismatch = all images and CSS 404 on the live site.
- **`_data/socials.yml`**: handles for Email, GitHub, LinkedIn, X, Google Scholar. Plugin is `jekyll-socials` — keys must match its expected names (`github_username`, `linkedin_username`, `x_username`, `scholar_userid`, `email`).
- **`_data/cv.yml`**: structured CV. Currently scaffolded empty; populate Education / Experience / Skills sections to fill `/cv/`.
- **Math** is enabled site-wide via MathJax (`enable_math: true`); use `$..$` and `$$..$$` in Markdown.

## Conventions worth preserving

- Authors flagged equal-contribution in BibTeX go in a `note={...}` field (e.g. `note={A. Foo and B. Bar contributed equally.}`) — `*` markers in author names break jekyll-scholar's name matching for bolding.
- The owner's name is bolded in author lists via `scholar.last_name: [Teusen, Boelts]` and `scholar.first_name: [Jan, "Jan-Matthis"]` in `_config.yml`. Add aliases there if your name appears under another spelling on a future paper.
- Paper preview images go in `assets/img/publication_preview/<slug>.<ext>` and are referenced by filename only via the bib entry's `preview=` field.
- Locally hosted PDFs go in `assets/pdf/` and are referenced as `pdf=foo.pdf` (Jekyll prepends the assets path) in BibTeX. External PDFs use a full URL.

## Things that will trip you up

- **Don't commit `_site/`**: it's the build output; ignored by `.gitignore`. (Current `.gitignore` is al-folio's, not the legacy Hugo one.)
- **Don't commit `Gemfile.lock`**: al-folio's `.gitignore` excludes it on purpose so CI resolves fresh.
- **Demo content removed during migration**: `assets/jupyter/blog.ipynb` was deleted because it requires Python `jupyter` CLI for conversion at build time. If you re-add Jupyter posts, install `jupyter` (`pip install jupyter`) before `bundle exec jekyll build`.
- **PaperMod / Hugo legacy is gone**: no `config.yml`, `content/`, `layouts/`, `themes/`. The migration commit is on branch `migrate-to-al-folio`.
