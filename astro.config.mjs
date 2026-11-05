import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.musiceducationbites.lu',
  // Old Wix addresses, so existing links keep working.
  redirects: {
    '/meb': '/',
    '/mebabout': '/about',
    '/mebepisodes': '/episodes',
    '/mebinteractive': '/interactive',
    '/mebcontact': '/contact',
  },
});
