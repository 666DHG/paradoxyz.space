// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://paradoxyz.space', 
  integrations: [sitemap(), mdx()],

  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
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