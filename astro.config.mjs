// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import 'dotenv/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      fs: {
        // Allow serving files from the vault directory
        allow: [
          '.',
          process.env.VAULT_CONTENT_PATH || ''
        ]
      }
    }
  }
});