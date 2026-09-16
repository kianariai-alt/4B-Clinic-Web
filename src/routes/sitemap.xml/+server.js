import { site } from '$lib/data/site.js';
export const prerender = true;
const paths = ['', '/orthopedics','/orthopedics/shoulder','/hair','/skin','/wounds','/sexual-health','/bio-harmony','/technologies','/articles','/about','/contact'];
export function GET() {
  const urls = paths.map((p) => `<url><loc>${site.domain}${p}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'content-type': 'application/xml' } });
}
