import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import 'dotenv/config';

const VAULT_ROOT = process.env.VAULT_CONTENT_PATH || './src/content';

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: `${VAULT_ROOT}/posts` }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: `${VAULT_ROOT}/pages` }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    headline: z.string().optional(),
    subHeadline: z.string().optional(),
    heroDescription: z.string().optional(),
    heroImage: z.string().optional(),
    order: z.number().optional(),
    menu: z.array(z.string()).optional(),
  }),
});

const practice = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: `${VAULT_ROOT}/practice` }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    link: z.string().url().optional(),
    accentColor: z.string().optional(),
    icon: z.string().optional(),
  }),
});

export const collections = { posts, pages, practice };
