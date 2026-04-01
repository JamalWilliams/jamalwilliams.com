# Developer Context: jamalwilliams.com

## Architecture (Jamal 3.0)
- **Framework**: Astro 5.0+ (Static Site Generation / Content Layer API)
- **CMS**: Headless via **Obsidian Vault** (`Vault/Websites/jamalwilliams.com/`)
- **Integration**: Framework-native (No sync scripts or symlinks)
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Deployment**: Configured for Cloudflare

## Headless CMS Implementation
- **Loader**: Astro's native `glob` loader with `base` set to the Vault path.
- **Environment**: `VAULT_CONTENT_PATH` defined in `.env`.
- **Vite Security**: `server.fs.allow` configured in `astro.config.mjs` to authorize the external Vault path.
- **Media**: External `media/` folder linked directly to `public/media/` (or served via Vite config).

## Folder Structure (Obsidian Vault)
- `site/pages/`: Main site pages (about, principles, stack, homepage).
- `site/practice/`: Business pillar entries (jwi, nl, sovereign-life).
- `site/posts/`: Blog content.
- `site/media/`: All images and assets (accessible via `/media/`).

## Dynamic Logic
- **Homepage**: Content and hero image driven by `site/pages/homepage.md`.
- **Navigation**: Sticky glassmorphic pill driven by the `menu` array in `homepage.md`.
- **Ordering**: Controlled via the `order` field in page frontmatter.

## Styling Philosophy
- **Base Mode**: Dark theme (`bg-slate-950`).
- **Brand Colors**: Slate, Blue (JWI), Emerald (NL), Gold-1/Gold-2 (Accents).
- **Vibe**: Sovereign Storyteller, Digital Architect. High-end, architectural, professional.
- **Typography**: `Outfit` (Headings), `Inter` (Body).
