import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({ fallback: '404.html' }),
    prerender: {
      entries: ['*'],
      crawl: false
    },
    trailingSlash: 'always'
  }
};

export default config;
