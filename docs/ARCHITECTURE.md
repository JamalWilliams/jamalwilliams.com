# Architecture: The Sovereign Stack (Jamal 3.0)

## Overview
The "Sovereign Stack" is a highly performant, zero-maintenance digital ecosystem designed for absolute ownership of content and narrative. It bridges enterprise-grade software engineering with creative storytelling.

## Core Pillars

### 1. The Brain: Obsidian (Local-First CMS)
All site content is authored in a local **Obsidian Vault**. 
- **Format**: Standard Markdown (.md).
- **Media**: Stored in a local `media/` folder within the vault.
- **Sovereignty**: No database, no third-party web dashboard, no proprietary locking.

### 2. The Engine: Astro 6.0 (The Content Layer)
Astro serves as the build engine, transforming local Markdown into a static, high-performance site.
- **Zero-Sync Pattern**: The Astro site reads directly from the external Vault path via the `glob` loader.
- **Islands Architecture**: Minimal JavaScript is used only for interactive elements (like the mobile menu), while content is 100% static HTML.
- **Type Safety**: Content schemas are strictly validated via Zod in `src/content.config.ts`.

### 3. The Shield: Cloudflare Pages
Global delivery at the edge.
- **Security**: No database or server-side execution significantly reduces the attack surface.
- **Speed**: Content is served from 300+ global data centers.
- **Automation**: GitHub Actions triggers a rebuild whenever the Vault is pushed to GitHub.

## Component Strategy: Architectural & Editorial
The UI follows a "Vela Armon" and "Hotle" inspired aesthetic:
- **Typography**: High-contrast, massive "Architectural" headings (Outfit Black).
- **Texture**: Glassmorphism (blur + transparent layers) over navy backgrounds.
- **Composition**: Generous white space and asymmetrical layouts in the "Manifesto" sections.

## Development Workflow
1. **Write**: Author content in Obsidian.
2. **Review**: Use Storybook (`npm run storybook`) to preview UI components in isolation.
3. **Test**: Run Playwright tests (`npm test`) for critical paths.
4. **Deploy**: `git push` to trigger the Cloudflare build.

---
*Last Updated: April 8, 2026*
