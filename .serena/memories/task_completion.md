# Task Completion Checklist

## After Making Content Changes

1. **Preview Changes Locally**
   ```bash
   hugo server
   ```
   - Check at http://localhost:1313
   - Verify all links work
   - Check images display correctly
   - Test on different screen sizes

2. **Build and Validate**
   ```bash
   # Clean build
   rm -rf public
   hugo --minify
   ```
   - Check for any build errors or warnings
   - Verify the public directory is created

3. **Review Changes**
   ```bash
   git status
   git diff
   ```
   - Review all modified files
   - Ensure no unintended changes

4. **Commit and Deploy**
   ```bash
   git add .
   git commit -m "Descriptive commit message"
   git push origin main
   ```
   - Use clear, descriptive commit messages
   - Push triggers automatic deployment via GitHub Actions

5. **Verify Deployment**
   - Check GitHub Actions tab for build status
   - Wait for deployment to complete (usually 2-5 minutes)
   - Visit https://janfb.github.io to verify changes are live

## Content-Specific Checks

### For Papers
- PDF is uploaded and accessible
- BibTeX entry is correct
- Links to external resources work
- Cover image is optimized (if used)

### For Software Projects
- GitHub/external links are correct
- Documentation links work
- Version information is up to date

### For Talks/Courses
- Presentation materials are uploaded
- Dates and venues are accurate
- Registration/video links work (if applicable)

## Regular Maintenance
- Update `lastmod` dates when editing existing content
- Check for and fix broken external links periodically
- Keep Hugo version in sync with GitHub Actions version (currently 0.128.0)
- Review and update profile/bio information as needed