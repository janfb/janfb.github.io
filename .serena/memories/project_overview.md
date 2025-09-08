# Hugo Academic Website Project

## Project Purpose
This is Jan Boelts/Teusen's personal academic website built with Hugo static site generator. The website showcases:
- Academic papers and publications
- Software projects (particularly the SBI Python package)
- Talks and presentations
- Courses and teaching materials
- Books and educational resources
- Data and research outputs

## Tech Stack
- **Static Site Generator**: Hugo v0.121.1 (extended version)
- **Theme**: PaperMod (modified for academic use)
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions (automated)
- **URL**: https://janfb.github.io

## Project Structure
- `/content/` - Markdown content files organized by section (papers, software, talks, courses, books, data)
- `/static/` - Static assets (images, PDFs, profile picture)
- `/themes/PaperMod/` - Modified PaperMod theme
- `/public/` - Generated static site (gitignored)
- `/layouts/` - Custom layout overrides
- `/assets/` - Asset files for Hugo pipeline
- `config.yml` - Main Hugo configuration file
- `.github/workflows/hugo.yml` - GitHub Actions deployment workflow

## Key Features
- Academic-focused minimalist design
- Profile mode homepage with bio and social links
- Sections for various academic outputs
- Math support enabled
- Code syntax highlighting
- Light theme only (dark mode disabled)