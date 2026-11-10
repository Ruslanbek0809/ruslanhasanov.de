// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Legal pages are noindex, so they stay out of the sitemap.
const NOINDEX_PATHS = ['/imprint/', '/privacy/', '/de/impressum/', '/de/datenschutz/'];

export default defineConfig({
  site: 'https://ruslanhasanov.de',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX_PATHS.some((p) => new URL(page).pathname === p),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', de: 'de' },
      },
    }),
  ],
  devToolbar: { enabled: false },
});
