import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lane: z.enum(['ai', 'golf', 'care', 'facilities']),
    series: z.string().optional(),
    thread: z
      .enum([
        'the-game-and-me',
        'the-builder',
        'why-instruction-fails',
        'how-learning-actually-works',
      ])
      .optional(),
    originalUrl: z.string().url().optional(),
    keywords: z.array(z.string()).optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
