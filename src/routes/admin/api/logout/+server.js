import { json } from '@sveltejs/kit';
import { clearAdminSession } from '$lib/server/admin.js';

export function POST(event) {
  clearAdminSession(event);
  return json({ ok: true });
}
