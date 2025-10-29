import { glob } from 'astro/loaders'; // Not available with legacy API
import { defineCollection, reference, z } from 'astro:content';

const basis = defineCollection({
  loader: glob({ base: '../../documentation/website/basis', pattern: ['**/*.md', '!**/_*.md'] }),
  schema: z.object({
    description: z.string(),
    title: z.string(),
  }),
});

const components = defineCollection({
  loader: glob({ base: 'docs/components', pattern: ['**/*.md', '!**/_*.md'] }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { basis, components };
