# 4B Clinic Article CMS

The private article editor is available at:

- `/admin`

## Required Cloudflare secrets

The Worker must have these secrets:

- `ADMIN_PASSWORD` — strong password used to sign in to the CMS.
- `ADMIN_SESSION_SECRET` — long random secret used to sign the 8-hour HttpOnly admin session.
- `GITHUB_ADMIN_TOKEN` — fine-grained GitHub token with **Contents: Read and write** permission limited to the `kianariai-alt/4B-Clinic-Web` repository.

Optional overrides:

- `GITHUB_OWNER` (default: `kianariai-alt`)
- `GITHUB_REPO` (default: `4B-Clinic-Web`)
- `GITHUB_BRANCH` (default: `main`)

## Publishing flow

1. Staff signs in at `/admin`.
2. Create or select an article.
3. Keep status as `draft` while editing.
4. Upload a WEBP/JPG/PNG image if needed.
5. Edit SEO title, meta description, target phrases and Zetamed scientific link.
6. Edit sections and FAQs.
7. Change status to `published`.
8. Press **Save changes**.
9. The CMS commits `src/lib/data/articles.js` to GitHub.
10. Existing GitHub → Cloudflare deployment flow publishes the new version.

Draft articles are automatically excluded from the public article hub and sitemap.

## Security

- The GitHub token is server-side only and never exposed to the browser.
- Admin session cookie is HttpOnly, Secure and SameSite=Strict.
- `/admin` is marked `noindex,nofollow,noarchive`.
- Uploaded images are limited to WEBP/JPG/PNG and 5 MB.
- The fine-grained GitHub token should be restricted to this repository only.
