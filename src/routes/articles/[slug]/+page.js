import { error } from '@sveltejs/kit';
import { articleBySlug } from '$lib/data/articles.js';

export function load({ params }) {
  const article = articleBySlug(params.slug);
  if (!article) throw error(404, 'مقاله پیدا نشد');
  return { article };
}
