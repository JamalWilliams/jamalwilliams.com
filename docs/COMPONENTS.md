# UI Components: Architectural & Editorial

This document outlines the reusable components used to maintain the "Jamal 3.0" aesthetic across the site.

## Base Components

### 1. `Hero.astro`
The primary high-impact entry section.
- **Visuals**: Massive background watermark, floating image with glassmorphism glow, and staggered text animations.
- **Props**: `headline`, `subHeadline`, `description`, `image`, `badge`, `primaryCTA`, `secondaryCTA`.

### 2. `Marquee.astro`
An infinitely scrolling text ribbon used for branding and dynamic energy.
- **Visuals**: Semi-transparent background with gold accents.
- **Props**: `items` (Array of strings).

### 3. `SectionHeader.astro`
Ensures consistent section entry styling.
- **Visuals**: Large uppercase heading with a thin bottom border and optional italicized quote.
- **Props**: `title`, `subtitle`, `quote`.

### 4. `PracticeCard.astro`
A high-end card for showcasing business pillars.
- **Visuals**: Aspect-ratio locked, glass texture, order-number watermark, and color-coded hover effects.
- **Props**: `id`, `title`, `description`, `index`.

### 5. `ManifestoSection.astro`
A high-contrast "light mode" break for long-form narrative.
- **Visuals**: Black text on soft-white background, editorial spacing, and trait grid.
- **Props**: `quote`, `description`, `ctaText`, `ctaHref`, `traits`.

## Usage Guidelines
- **Typography**: Always use `.font-architectural` for major headings to maintain the black-weight "Outfit" style.
- **Color**: Use `gold-1` for primary interactive elements and `gold-2` for accents.
- **Spacing**: Prefer the `.rounded-architectural` utility for all large containers to maintain the soft-geometry feel.

---
*Last Updated: April 8, 2026*
