# Plan: Sovereign Architect UI Transformation

## Objective
Transition the current "Tech/Developer" UI into a high-end "Architectural/Editorial" experience inspired by the Vela Armon, Hotle, and Woodcraft designs.

## Phase 1: Foundation & Layout Updates
- [x] **Refactor `Layout.astro`**: 
    - Support a `fullWidth` prop to allow sections to bleed edge-to-edge.
    - Update the sticky navigation to be more refined (slimmer, higher blur).
    - Add a "Background Brand Mark" (Huge "JAMAL" or "SOVEREIGN" watermark).
- [x] **Update `global.css`**:
    - Define "Architectural" typography: `Outfit` with `font-black` and `tracking-tighter`.
    - Refine the `glass` utility: sharper borders, more transparent backdrop.
    - Create a `rounded-architectural` utility (`rounded-[3rem]`).

## Phase 2: Hero Section ("Vela Armon" Style)
- [x] **Implement Overlapping Typography**:
    - Use `hero_graphic_transparent.png` with massive text behind and in front of it.
    - Headline: "SOVEREIGN" (Display Black) + "by design." (Secondary).
    - New Button Style: Pill shapes with embedded circle icons.

## Phase 3: Practice Showcase ("Hotle" Style)
- [x] **Refactor Practice Cards**:
    - Change from a standard grid to high-impact, full-bleed cards.
    - Use `rounded-[3rem]` and subtle gradients/textures.
    - Showcase JWI and NL with sophisticated typography (mixing Serif and Sans).

## Phase 4: Manifesto & Principles ("Woodcraft" Style)
- [x] **Introduce High-Contrast Light Section**:
    - A "Light Mode" section for the Manifesto or Principles to break the dark theme.
    - Pure white/light-gray background with deep black typography.
    - Add an "Editorial" layout with plenty of whitespace.

## Phase 5: Interaction & Polish
- [ ] **Add Scrolling Marquee**: For "Agentic Systems" or "Slow Exhale" keywords.
- [ ] **Micro-interactions**: Subtle hover states on cards and links.
