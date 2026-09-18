import { json } from '@sveltejs/kit';
import { adminConfigured, createAdminSession, passwordMatches } from '$lib/server/admin.js';

export async function POST(event) {
  if (!adminConfigured(event)) {
    return json({ ok: false, error: 'پنل هنوز روی Cloudflare پیکربندی نشده است.' }, { status: 503 });
  }
  const body = await event.request.json().catch(() => ({}));
  const password = String(body?.password || '');
  if (!(await passwordMatches(event, password))) {
    return json({ ok: false, error: 'رمز عبور نادرست است.' }, { status: 401 });
  }
  await createAdminSession(event);
  return json({ ok: true });
}
