# Personal site

Personal academic website for Jan Teusen (né Boelts), built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme. Deployed to GitHub Pages.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Site serves at <http://localhost:4000/personal-website/>.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with Ruby 3.3 + Jekyll, runs PurgeCSS, and publishes the static `_site/` to the `gh-pages` branch via `JamesIves/github-pages-deploy-action`. Set repo Pages source to `gh-pages` branch.

## Where things live

- `_config.yml` — site config: nav order, scholar settings, plugins, baseurl.
- `_pages/` — top-level pages (about, blog, publications, projects, talks, teaching, cv).
- `_bibliography/papers.bib` — publications, rendered on `/publications/` by `jekyll-scholar`.
- `_projects/`, `_talks/`, `_teachings/`, `_posts/` — collection content. Filenames matter (`_posts/YYYY-MM-DD-slug.md`).
- `_data/cv.yml`, `_data/socials.yml` — structured data for CV and social links.
- `assets/img/{prof_pic,publication_preview,projects,talks,teaching}/` — images.
- `assets/pdf/` — locally hosted PDFs.

See [al-folio's docs](https://github.com/alshedivat/al-folio#how-to-use-this-theme) for theme-level customization.
