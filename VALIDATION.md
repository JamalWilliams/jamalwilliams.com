# jamalwilliams.com — Validation Runbook

## Repository

- **Path:** `/Users/jamalwilliams/code/jamalwilliams.com/`
- **Work types:** `ui`, `content`, `build`
- **Source of truth:** `src/` (pages, components, content, layouts)
- **Forbidden paths:** `node_modules/`, `dist/`, `.astro/`, `.git/`, vault mirrors

## Runtime & Dependencies

- **Node:** `>=22.12.0`
- **Framework:** Astro 6.x, Tailwind CSS 4, TypeScript 5.x
- **Dev server:** `http://localhost:4321` (from `npm run dev`)
- **Ready signal:** "astro v6.x started" in terminal output

## Environment Variables

- None required for basic build validation. `dotenv` is loaded for optional env vars.

## Test Infrastructure

| Check | Command | Expected |
|-------|---------|----------|
| Build | `npm run build` | Exit 0, output in `dist/` |
| Dev server | `npm run dev` | Exits 0, serves on :4321 |
| Unit tests | `npx vitest run` | Exit 0, all suites pass |
| Storybook build | `npm run build-storybook` | Exit 0, output in `storybook-static/` |
| Playwright | `npx playwright test` | Exit 0, all specs pass (mobile Chrome) |
| TypeScript | `npx astro check` | Exit 0, no type errors |

## Routes & Screens

| Route | Description | Key Elements |
|-------|-------------|-------------|
| `/` | Homepage | Hero watermark (h1.font-architectural), CTA links, practice cards (#practice), manifesto section, glassmorphism nav |
| `/blog/[...slug]` | Blog posts | Content from `src/content/` |
| `/practice/` | Practice areas | Practice cards with numbered watermarks |
| `/manifesto` | Manifesto page | High-contrast section-light styling |
| `/*` (catch-all) | Catch-all content | Driven by content collection |
| `/404` | Not found | Custom error page |

## Browser Validation (Required for UI Changes)

### Viewport
- Mobile: Pixel 5 (393x851) via Playwright config

### Screenshots
- Output directory: `screenshots/{TASK-ID}/`
- Naming: `{route-name}-{state}.png`
- Required per changed route: starting state, after primary interaction, any error/edge state

### Console
- Zero unexpected errors

### Network
- Zero unexpected failed requests (4xx/5xx)

### Accessibility
- Run `npx playwright test` (includes aXe checks via storybook addon)
- No a11y violations on changed routes

## Content Changes

- Verify content renders in `src/content/`
- Confirm frontmatter matches expected schema
- Check `[...slug].astro` resolves the content entry
- Run `npm run build` to confirm no broken content references

## Non-UI / Backend-Only Work

- No backend runtime; pure static site. Skip screenshots for content-only changes.
- Proof: build exit code + content file hashes + rendered output verification.

## Proof Bundle

- Output: `proof.json` at repo root per `proof-bundle-schema.md`
- All artifacts: SHA-256 hashed, non-empty, byte-count tracked
- Every objective criterion must have `status: pass`
- UI work: at least one browser check with screenshot

## Retryable Failures

- Flaky Playwright timeouts: retry up to 2x
- Network-dependent font loading: allow `networkidle` wait

## Blockers / Escalation

- Build failures with unactionable error messages
- Screenshot diff ratio > 0.1 requiring human review
- Unexpected console errors from third-party scripts

## Human Gates

- Visual design review for any layout/component changes
- Content accuracy review for blog posts and copy changes
