# 4B Clinic — SvelteKit / Cloudflare Workers

Foundation project for migrating 4b-clinic.com from WordPress to SvelteKit.

## Recommended official bootstrap
For a fresh environment, Cloudflare currently recommends:

```bash
npm create cloudflare@latest -- 4b-clinic --framework=svelte
```

Then merge this project's `src/` design/content into the generated project.

## Local
```bash
npm install
npm run dev
npm run check
npm run build
```

## Deploy
Authenticate Wrangler, then:
```bash
npm run deploy
```

Do not attach the production custom domain until the WordPress URL inventory, redirects, forms, analytics, and email DNS records have been verified.

## Content additions

- Orthopedics now includes a dedicated shoulder pathway.
- Shoulder page: frozen shoulder, partial rotator cuff tears, tendon injuries, and selected capsule/soft-tissue injuries.
- Contact page includes configurable entries for Instagram, Telegram, Bale, Rubika, Eitaa, and YouTube.
- Social URLs intentionally remain null until official clinic handles are verified. Set them in `src/lib/data/site.js`.
