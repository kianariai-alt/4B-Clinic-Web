import { site } from '$lib/data/site.js';
export const prerender = true;
export function GET() {
  return new Response(
    `User-agent: *\nAllow: /\nDisallow: /admin\nSitemap: ${site.domain}/sitemap.xml\n`,
    { headers: { 'content-type': 'text/plain; charset=utf-8' } }
  );
}
