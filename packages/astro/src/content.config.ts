import { glob } from 'astro/loaders'; // Not available with legacy API
import { defineCollection, z } from 'astro:content';

const basis = defineCollection({
  loader: glob({ base: '../../documentation/website/basis', pattern: ['**/*.md', '!**/_*.md'] }),
  schema: z.object({
    description: z.string(),
    title: z.string(),
  }),
});

const components = defineCollection({
  loader: glob({ base: 'docs/components', pattern: ['**/*.{md,mdx}', '!**/_*.{md,mdx}'] }),
  schema: z.object({
    title: z.string(),
  }),
});

const developer = defineCollection({
  loader: glob({ base: 'docs/developer', pattern: ['**/*.{md,mdx}', '!**/_*.{md,mdx}'] }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { basis, components, developer };
