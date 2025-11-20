// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://paradoxyz.space', 
  integrations: [sitemap()],

  markdown: {
    shikiConfig: {
      theme: 'css-variables',
      langs: [],
      wrap: true,
    },
  },

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  output: 'server'
});