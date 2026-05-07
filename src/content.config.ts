import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import fs from 'node:fs';
import path from 'node:path';
import 'dotenv/config';

/**
 * ARCHITECTURAL RESOLUTION:
 * We now use the standard local src/content directory as the source of truth.
 * The Vault-as-CMS pattern has been moved into the repository.
 */
const VAULT_ROOT = path.resolve('./src/content');
console.log(`[Jamal 3.0] Content Resolution: ${VAULT_ROOT}`);

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
    practiceQuote: z.string().optional(),
    manifestoQuote: z.string().optional(),
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
