import { glob } from 'astro/loaders'; // Not available with legacy API
import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  loader: glob({ base: './pages', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    thumbnail: z.string().optional(),
    order: z.number().default(0),
  }),
});

const components = defineCollection({
  loader: glob({ base: 'docs/components', pattern: ['**/*.{md,mdx}', '!**/_*.{md,mdx}'] }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    frameworks: z.array(z.string()).default([]),
  }),
});

export const collections = { pages, components };
