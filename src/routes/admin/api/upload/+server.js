import { json } from '@sveltejs/kit';
import { isAdmin, saveImage } from '$lib/server/admin.js';

/** @type {Record<string, string>} */
const typeToExt = {
  'image/webp': 'webp',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

/** @param {FormDataEntryValue | null} value */
function cleanSlug(value) {
  return String(value || 'article')
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'article';
}

export async function POST(event) {
  if (!(await isAdmin(event))) {
    return json({ ok: false, error: 'دسترسی غیرمجاز' }, { status: 401 });
  }

  const form = await event.request.formData();
  const file = form.get('file');
  const slug = cleanSlug(form.get('slug'));

  if (!(file instanceof File)) {
    return json({ ok: false, error: 'فایل تصویر انتخاب نشده است.' }, { status: 400 });
  }

  const ext = typeToExt[file.type];
  if (!ext) {
    return json({ ok: false, error: 'فقط WEBP، JPG و PNG قابل قبول هستند.' }, { status: 400 });
  }

  if (file.size > 5 * 1024 * 1024) {
    return json({ ok: false, error: 'حجم تصویر باید کمتر از ۵ مگابایت باشد.' }, { status: 413 });
  }

  const path = `static/images/articles/${slug}.${ext}`;
  try {
    const bytes = new Uint8Array(await file.arrayBuffer());
    const result = await saveImage(event, path, bytes);
    return json({
      ok: true,
      path: `/images/articles/${slug}.${ext}`,
      commit: result?.commit?.sha || null
    });
  } catch (error) {
    return json({ ok: false, error: error instanceof Error ? error.message : 'خطا در آپلود تصویر' }, { status: 500 });
  }
}
