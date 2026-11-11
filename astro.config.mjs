// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.kmcode.fr',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      // fr à la racine (/), en sous /en/
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({ i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en-GB' } } }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
