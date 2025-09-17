import { glob } from 'astro/loaders'; // Not available with legacy API
import { defineCollection, reference, z } from 'astro:content';

const basis = defineCollection({
  loader: glob({ base: '../../documentation/website/basis', pattern: ['**/*.md', '!**/_*.md'] }),
  schema: z.object({
    description: z.string(),
    title: z.string(),
  }),
});

export const collections = { basis };
