# Developer Context: jamalwilliams.com (v3.1)

## Architecture (Jamal 3.1)
- **Framework**: Astro 5.0+ (Static Site Generation / Content Layer API)
- **CMS**: Repository-Local (`src/content/`)
- **Integration**: Standard Astro Content Collections (No external vault dependencies)
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Deployment**: Configured for Cloudflare

## Content Implementation
- **Loader**: Astro's native `glob` loader with `base` set to the local `src/content` path.
- **Source of Truth**: All markdown, media, and data assets are now tracked directly in the Git repository.
- **Staging Parity**: Moving content into the repo ensures that staging and production environments always have access to the latest content without manual sync.

## Folder Structure (src/content)
- `pages/`: Main site pages (about, principles, stack, homepage).
- `practice/`: Business pillar entries (jwi, nl, sovereign-life).
- `posts/`: Blog content.

## Dynamic Logic
- **Homepage**: Content and hero image driven by `src/content/pages/homepage.md`.
- **Navigation**: Sticky glassmorphic pill driven by the `menu` array in `homepage.md`.
- **Ordering**: Controlled via the `order` field in page frontmatter.

## Styling Philosophy
- **Base Mode**: Dark theme (`bg-slate-950`).
- **Brand Colors**: Slate, Blue (JWI), Emerald (NL), Gold-1/Gold-2 (Accents).
- **Vibe**: Sovereign Storyteller, Digital Architect. High-end, architectural, professional.
- **Typography**: `Outfit` (Headings), `Inter` (Body).
