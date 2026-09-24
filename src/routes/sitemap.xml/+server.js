import { site } from '$lib/data/site.js';
import { publishedArticles as articles } from '$lib/data/articles.js';

export const prerender = true;

// Public, indexable static routes only. Keep admin and other private utility routes out.
const staticPaths = ['', '/orthopedics','/orthopedics/knee','/orthopedics/knee/osteoarthritis-non-surgical','/orthopedics/knee/meniscus-non-surgical','/orthopedics/knee/knee-wear','/orthopedics/shoulder','/hair','/hair/hair-loss-control','/hair/non-surgical-hair-loss','/hair/pl-prgf','/skin','/skin/non-surgical-rejuvenation','/skin/needle-free-rejuvenation','/skin/pl-prgf-rejuvenation','/skin/scar/non-surgical-scar-treatment','/skin/scar/hypertrophic-keloid','/skin/scar/acne-scars','/wounds','/wounds/chronic-wound-treatment','/wounds/diabetic-foot','/wounds/diabetic-wound-red-flags','/sexual-health','/sexual-health/erectile-dysfunction-evaluation','/sexual-health/female-dryness-pain','/sexual-health/o-shot-p-shot-guide','/bio-harmony','/technologies','/articles','/doctors','/about','/contact','/editorial-policy'];

/** @param {string} path @param {string} [lastmod] */
function urlEntry(path, lastmod = '') {
  const modified = lastmod ? `<lastmod>${lastmod.slice(0, 10)}</lastmod>` : '';
  const priority = path === '' ? '<priority>1.0</priority>' : '';
  return `<url><loc>${site.domain}${path}</loc>${modified}${priority}</url>`;
}

export function GET() {
  const staticUrls = staticPaths.map((path) => urlEntry(path));
  const articleUrls = articles.map((article) =>
    urlEntry(`/articles/${article.slug}`, article.updatedAt || '')
  );
  const urls = [...new Set([...staticUrls, ...articleUrls])].join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { 'content-type': 'application/xml; charset=utf-8' } }
  );
}
