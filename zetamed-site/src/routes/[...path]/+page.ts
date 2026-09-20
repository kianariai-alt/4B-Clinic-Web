import imported from '$lib/generated/content.json';
import { error } from '@sveltejs/kit';

export const prerender = true;
export const entries = () => (imported.items || []).map((x:any) => ({ path: x.path.replace(/^\//,'').replace(/\/$/,'') }));

export function load({ params }){
  const wanted = '/' + (params.path || '') + '/';
  const item = (imported.items || []).find((x:any) => x.path === wanted || x.path.replace(/\/$/,'') === wanted.replace(/\/$/,''));
  if (!item) throw error(404, 'این صفحه پس از اجرای مهاجرت وردپرس ایجاد می‌شود.');
  return { item };
}
