import { site } from '$lib/data/site.js';
import { publishedArticles as articles } from '$lib/data/articles.js';

export const prerender = true;

const staticPaths = ['', '/orthopedics','/orthopedics/knee','/orthopedics/knee/osteoarthritis-non-surgical','/orthopedics/knee/meniscus-non-surgical','/orthopedics/knee/knee-wear','/orthopedics/shoulder','/hair','/skin','/wounds','/sexual-health','/bio-harmony','/technologies','/articles','/doctors','/about','/contact','/editorial-policy'];

/** @param {string} path @param {string} [lastmod] */
function urlEntry(path, lastmod = '') {
  const modified = lastmod ? `<lastmod>${lastmod.slice(0, 10)}</lastmod>` : '';
  return `<url><loc>${site.domain}${path}</loc>${modified}</url>`;
}

export function GET() {
  const staticUrls = staticPaths.map((path) => urlEntry(path));
  const articleUrls = articles.map((article) =>
    urlEntry(`/articles/${article.slug}`, article.updatedAt || '')
  );
  const urls = [...staticUrls, ...articleUrls].join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'content-type': 'application/xml; charset=utf-8' } }
  );
}
