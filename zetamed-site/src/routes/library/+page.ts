import imported from '$lib/generated/content.json';
import { featuredArticles } from '$lib/data/site';

export const prerender = true;

export function load(){
  const items = imported.items?.length
    ? imported.items.filter((x:any) => x.type === 'post').map((x:any) => ({title:x.title, href:x.path, category:x.categories?.[0] || 'کتابخانه', excerpt:x.excerptText || ''}))
    : featuredArticles.map(x => ({...x, excerpt:''}));
  return { items };
}
