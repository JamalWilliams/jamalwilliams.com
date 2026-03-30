# Developer Context: jamalwilliams.com

## Architecture
- **Framework**: Astro (Static Site Generation/SSR)
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Deployment**: Configured for Cloudflare (inferred from footer)

## Folder Structure
- `/src`
  - `/layouts`: Contains main `Layout.astro` wrapper for injecting global fonts, metadata, and core structural classes.
  - `/pages`: Contains route definitions like `index.astro`.
  - `/styles`: Contains `global.css` importing Tailwind and defining `@theme` overrides.
- `/public`: Static assets (favicon, etc).

## Database/Schema
- No active Supabase schema configured yet. Site currently serves static portfolio content linking to JW Intimates and A Narrative Lens.

## Styling Philosophy
- **Base Mode**: Dark theme (`bg-slate-950`).
- **Brand Colors**: 
  - Slate for deep backgrounds and subtle text (`slate-900`, `slate-950`, `slate-400`).
  - Blue (`blue-500`) used primarily as an accent for JW Intimates.
  - Emerald (`emerald-500`) used primarily as an accent for A Narrative Lens.
- **Vibe**: Sovereign Storyteller, Digital Architect. Flashy but professional. Employs modern web design elements (glassmorphism, clean micro-animations, radiant blurred backgrounds) without betraying the core palette.
- **Typography**: `Outfit` for display/headings, `Inter` for functional/body text.
