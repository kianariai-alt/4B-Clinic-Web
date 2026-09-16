# 4B Clinic — SvelteKit / Cloudflare Workers

Migration project for moving `4b-clinic.com` from WordPress to SvelteKit on Cloudflare Workers without interrupting the current production site.

## Stack

- SvelteKit 5
- Cloudflare Workers
- Wrangler
- GitHub Actions
- Persian RTL responsive UI

## Local development

```bash
npm install
npm run dev
npm run check
npm run build
```

## Cloudflare preview deployment

The repository includes `.github/workflows/deploy-cloudflare.yml`. It is manual-only for now so merging code cannot accidentally change production.

Add these GitHub Actions repository secrets before running the workflow:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

The API token must be stored as a GitHub secret, never committed to the repository. Scope it to the Cloudflare account/resources required for this Worker.

After the two secrets exist, run the `deploy-cloudflare` workflow from GitHub Actions. Wrangler will deploy the SvelteKit Worker and Cloudflare can provide a temporary `*.workers.dev` URL for review.

## Production safety rule

Do **not** attach `4b-clinic.com` or change production DNS until all of the following have been verified:

1. WordPress URL inventory and 301 redirect map
2. Contact and lead forms
3. Analytics and conversion events
4. Search metadata, sitemap and structured data
5. Email DNS records including MX, SPF, DKIM and DMARC
6. Mobile and desktop QA
7. Final content and medical review

## Current clinical content

- Orthopedics includes knee, meniscus and a dedicated shoulder pathway.
- Shoulder page covers frozen shoulder, partial rotator cuff tears, tendon disorders and selected capsule/soft-tissue injuries with conservative eligibility wording.
- Contact structure includes Instagram, Telegram, Bale, Rubika, Eitaa and YouTube.
- Social URLs intentionally remain empty until official clinic handles are verified. Set them in `src/lib/data/site.js`.
