const COOKIE_NAME = '4b_admin_session';
const SESSION_SECONDS = 60 * 60 * 8;
const ARTICLES_PATH = 'src/lib/data/articles.js';

/** @param {any} event @param {string} name */
export function envValue(event, name) {
  const platformValue = event?.platform?.env?.[name];
  if (platformValue) return String(platformValue);
  if (typeof process !== 'undefined' && process?.env?.[name]) return String(process.env[name]);
  return '';
}

/** @param {string} input */
function bytes(input) {
  return new TextEncoder().encode(input);
}

/** @param {ArrayBuffer} buffer */
function hex(buffer) {
  return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** @param {string} secret @param {string} value */
async function hmac(secret, value) {
  const key = await crypto.subtle.importKey('raw', bytes(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return hex(await crypto.subtle.sign('HMAC', key, bytes(value)));
}

/** @param {string} a @param {string} b */
function safeEqual(a, b) {
  const aa = bytes(a);
  const bb = bytes(b);
  if (aa.length !== bb.length) return false;
  let out = 0;
  for (let i = 0; i < aa.length; i += 1) out |= aa[i] ^ bb[i];
  return out === 0;
}

/** @param {any} event */
export function adminConfigured(event) {
  return Boolean(
    envValue(event, 'ADMIN_PASSWORD') &&
    envValue(event, 'ADMIN_SESSION_SECRET') &&
    envValue(event, 'GITHUB_ADMIN_TOKEN')
  );
}

/** @param {any} event @param {string} password */
export async function passwordMatches(event, password) {
  const expected = envValue(event, 'ADMIN_PASSWORD');
  if (!expected) return false;
  return safeEqual(await hmac('4b-password-check', password), await hmac('4b-password-check', expected));
}

/** @param {any} event */
export async function createAdminSession(event) {
  const secret = envValue(event, 'ADMIN_SESSION_SECRET');
  const exp = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const payload = String(exp);
  const sig = await hmac(secret, payload);
  event.cookies.set(COOKIE_NAME, `${payload}.${sig}`, {
    path: '/admin',
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: SESSION_SECONDS
  });
}

/** @param {any} event */
export async function isAdmin(event) {
  const secret = envValue(event, 'ADMIN_SESSION_SECRET');
  if (!secret) return false;
  const raw = event.cookies.get(COOKIE_NAME) || '';
  const [expRaw, sig] = raw.split('.');
  const exp = Number(expRaw);
  if (!exp || !sig || exp < Math.floor(Date.now() / 1000)) return false;
  const expected = await hmac(secret, expRaw);
  return safeEqual(sig, expected);
}

/** @param {any} event */
export function clearAdminSession(event) {
  event.cookies.delete(COOKIE_NAME, { path: '/admin' });
}

/** @param {any} event */
function githubConfig(event) {
  return {
    token: envValue(event, 'GITHUB_ADMIN_TOKEN'),
    owner: envValue(event, 'GITHUB_OWNER') || 'kianariai-alt',
    repo: envValue(event, 'GITHUB_REPO') || '4B-Clinic-Web',
    branch: envValue(event, 'GITHUB_BRANCH') || 'main'
  };
}

/** @param {Uint8Array} input */
export function base64FromBytes(input) {
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < input.length; i += chunk) {
    binary += String.fromCharCode(...input.subarray(i, Math.min(i + chunk, input.length)));
  }
  return btoa(binary);
}

/** @param {string} input */
function base64FromText(input) {
  return base64FromBytes(bytes(input));
}

/** @param {any} event @param {string} path */
async function githubFile(event, path) {
  const { token, owner, repo, branch } = githubConfig(event);
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${encodeURIComponent(branch)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': '4B-Clinic-CMS'
    }
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub read failed: ${res.status}`);
  return await res.json();
}

/** @param {any} event @param {string} path @param {string} contentBase64 @param {string} message */
async function putGithubFile(event, path, contentBase64, message) {
  const { token, owner, repo, branch } = githubConfig(event);
  const existing = await githubFile(event, path);
  const body = {
    message,
    content: contentBase64,
    branch,
    ...(existing?.sha ? { sha: existing.sha } : {})
  };
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': '4B-Clinic-CMS'
    },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`GitHub write failed: ${res.status} ${detail.slice(0, 250)}`);
  }
  return await res.json();
}

/** @param {any[]} articles */
export function serializeArticles(articles) {
  const clean = JSON.stringify(articles, null, 2);
  return `export const articles = ${clean};

export const publishedArticles = articles.filter((article) => article.status !== 'draft');

/** @param {string} slug */
export const articleBySlug = (slug) => publishedArticles.find((article) => article.slug === slug);
`;
}

/** @param {any} event @param {any[]} articles */
export async function saveArticles(event, articles) {
  const source = serializeArticles(articles);
  return await putGithubFile(
    event,
    ARTICLES_PATH,
    base64FromText(source),
    'content: update articles from 4B admin panel'
  );
}

/** @param {any} event @param {string} path @param {Uint8Array} data */
export async function saveImage(event, path, data) {
  return await putGithubFile(
    event,
    path,
    base64FromBytes(data),
    'content: upload article image from 4B admin panel'
  );
}
