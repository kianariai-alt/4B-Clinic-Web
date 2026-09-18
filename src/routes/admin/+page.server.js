import { articles } from '$lib/data/articles.js';
import { adminConfigured, isAdmin } from '$lib/server/admin.js';

export async function load(event) {
  const authenticated = await isAdmin(event);
  return {
    configured: adminConfigured(event),
    authenticated,
    articles: authenticated ? articles : []
  };
}
