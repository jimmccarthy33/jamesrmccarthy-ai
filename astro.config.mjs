// @ts-check
import { readFile, writeFile } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const home = 'https://www.jamesrmccarthy.ai/';

/** @returns {import('astro').AstroIntegration} */
function restoreHomepageSitemapSlash() {
  return {
    name: 'restore-homepage-sitemap-slash',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const file = new URL('sitemap-0.xml', dir);
        const xml = await readFile(file, 'utf8');
        const bare = '<loc>https://www.jamesrmccarthy.ai</loc>';
        const slashed = `<loc>${home}</loc>`;
        if (!xml.includes(bare)) {
          throw new Error(`Expected homepage sitemap loc ${bare}`);
        }
        await writeFile(file, xml.replaceAll(bare, slashed));
      },
    },
  };
}

export default defineConfig({
  site: 'https://www.jamesrmccarthy.ai',
  trailingSlash: 'never',
  integrations: [sitemap(), restoreHomepageSitemapSlash()],
});
