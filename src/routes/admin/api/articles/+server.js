import { json } from '@sveltejs/kit';
import { isAdmin, saveArticles } from '$lib/server/admin.js';
import { articles as storedArticles } from '$lib/data/articles.js';

/** @param {string} value */
function validSlug(value) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

/** @param {any} article */
function comparable(article) {
  const { updatedAt, createdAt, ...rest } = article || {};
  return JSON.stringify(rest);
}

export async function PUT(event) {
  if (!(await isAdmin(event))) {
    return json({ ok: false, error: 'دسترسی غیرمجاز' }, { status: 401 });
  }

  const body = await event.request.json().catch(() => ({}));
  const articles = body?.articles;

  if (!Array.isArray(articles) || articles.length > 100) {
    return json({ ok: false, error: 'ساختار مقالات معتبر نیست.' }, { status: 400 });
  }

  const slugs = new Set();
  for (const article of articles) {
    if (!article?.title || !article?.slug || !validSlug(article.slug)) {
      return json({ ok: false, error: 'عنوان و slug انگلیسی معتبر برای همه مقالات لازم است.' }, { status: 400 });
    }
    if (slugs.has(article.slug)) {
      return json({ ok: false, error: `slug تکراری: ${article.slug}` }, { status: 400 });
    }
    slugs.add(article.slug);
    article.status = article.status === 'draft' ? 'draft' : 'published';

    const existing = storedArticles.find((item) => item.slug === article.slug);
    const existingCreatedAt = existing && 'createdAt' in existing ? String(existing.createdAt) : '';
    const now = new Date().toISOString();
    article.createdAt = existingCreatedAt || article.createdAt || now;
    article.updatedAt =
      existing && comparable(existing) === comparable(article)
        ? existing.updatedAt || article.updatedAt || now
        : now;
  }

  const payloadSize = new TextEncoder().encode(JSON.stringify(articles)).length;
  if (payloadSize > 1_500_000) {
    return json({ ok: false, error: 'حجم داده مقالات بیش از حد مجاز است.' }, { status: 413 });
  }

  try {
    const result = await saveArticles(event, articles);
    return json({
      ok: true,
      commit: result?.commit?.sha || null,
      message: 'مقالات در GitHub ذخیره شدند و Deploy خودکار آغاز می‌شود.'
    });
  } catch (error) {
    return json({ ok: false, error: error instanceof Error ? error.message : 'خطا در ذخیره مقاله' }, { status: 500 });
  }
}
