import { glob } from 'astro/loaders'; // Not available with legacy API
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const pages = defineCollection({
  loader: glob({ base: 'docs/pages', pattern: '**/*.{md,mdx}' }),
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
    /** Inleiding onder de h1 van de componentpagina: een langere versie van `description` */
    lead: z.string().optional(),
    previewImage: z.string().optional(),
  }),
});

export const collections = { pages, components };
