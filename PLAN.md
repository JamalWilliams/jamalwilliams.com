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

## Phase 5: Interaction & Infrastructure
- [x] **Automated Deployment**: Set up GitHub Actions + Cloudflare Pages.
- [x] **Content Bundling**: Integrated Obsidian Vault content into the repo for CI.
- [ ] **DNS Migration**: Point `jamalwilliams.com` to `jamalwilliams-v3.pages.dev`. (Status: Initializing/Pending - WHOIS confirmed, waiting for Cloudflare activation)
- [ ] **Micro-interactions**: Refine marquee and card entry animations.
- [ ] **Google Workspace Verification**: Finalize TXT record verification. (Status: Record set, pending propagation)
- [ ] **MX/SPF Configuration**: Apply once Cloudflare zone is active.

## Phase 6: Expert-Led Content Refactoring
- [x] **Voice Protocol Upgrade**: Shifted from "we/us" to "I/me" for the personal brand.
- [x] **Positioning Shift**: Transitioned from service-led ("I help you") to expert-led ("I build", "I practice").
- [x] **Content Decoupling**: Refactored `index.astro` to remove hardcoded strings. All hero/section text is now managed in `homepage.md` within the vault.
- [x] **Mandate Integration**: Formalized the "Personal Brand Voice" mandate in `GEMINI.md`.

## ⏭️ Next Steps
- [ ] 🟢 **Monitor Cloudflare Activation**: Site currently in `initializing` state for nameservers. **Do not delete HostGator yet; it is not the bottleneck.**
- [ ] 🟢 **Finalize Google Workspace Verification**: Verification TXT record is confirmed in DNS.
- [ ] 🟢 **Update MX/SPF Records**: Apply after the zone is `active` in Cloudflare.
- [ ] ⚪ **Micro-interactions**: Refine marquee speed and add staggered entry animations.
