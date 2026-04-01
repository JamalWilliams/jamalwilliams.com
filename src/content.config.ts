import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import fs from 'node:fs';
import path from 'node:path';
import 'dotenv/config';

/**
 * ARCHITECTURAL RESOLUTION:
 * In local dev, we point to the absolute path of the external Obsidian Vault.
 * In Cloudflare CI/GitHub Actions, we point to a bundled ./Vault folder in the repo.
 */
const getVaultPath = () => {
  const envPath = process.env.VAULT_CONTENT_PATH;
  
  // 1. If we have an ENV var and it exists, use it.
  if (envPath && fs.existsSync(envPath)) return envPath;

  // 2. Check for a local "repo-relative" vault (used in CI)
  const repoRelative = path.resolve('./Vault/Websites/jamalwilliams.com');
  if (fs.existsSync(repoRelative)) return repoRelative;

  // 3. Fallback to a safe default within the src folder
  return './src/content';
};

const VAULT_ROOT = getVaultPath();
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
