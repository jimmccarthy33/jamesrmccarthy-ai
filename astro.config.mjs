// @ts-check
import { readFile, writeFile } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const home = 'https://www.jamesrmccarthy.ai/';

/** @returns {import('astro').AstroIntegration} */
function normalizeSitemapOutputs() {
  return {
    name: 'normalize-sitemap-outputs',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const chunkFile = new URL('sitemap-0.xml', dir);
        const xml = await readFile(chunkFile, 'utf8');
        const bare = '<loc>https://www.jamesrmccarthy.ai</loc>';
        const slashed = `<loc>${home}</loc>`;
        if (!xml.includes(bare)) {
          throw new Error(`Expected homepage sitemap loc ${bare}`);
        }
        await writeFile(chunkFile, xml.replaceAll(bare, slashed));

        // Serve /sitemap.xml as a real 200. A 308 to sitemap-index.xml
        // makes Search Console keep reporting sitemap fetch failures.
        const indexFile = new URL('sitemap-index.xml', dir);
        const indexXml = await readFile(indexFile, 'utf8');
        await writeFile(new URL('sitemap.xml', dir), indexXml);
      },
    },
  };
}

export default defineConfig({
  site: 'https://www.jamesrmccarthy.ai',
  trailingSlash: 'never',
  integrations: [sitemap(), normalizeSitemapOutputs()],
});
