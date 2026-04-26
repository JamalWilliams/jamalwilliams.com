import { test, expect } from '@playwright/test';

test.describe('Homepage Architecture', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the Hero section with correct branding', async ({ page }) => {
    // Check for the massive background watermark
    const watermark = page.locator('h1.font-architectural');
    await expect(watermark).toBeVisible();
    
    // Check for the primary headline
    const headline = page.locator('h2.font-architectural');
    await expect(headline).toBeVisible();
    
    // Check for the CTA buttons
    const primaryCTA = page.getByRole('link', { name: /View Practice/i });
    await expect(primaryCTA).toBeVisible();
  });

  test('should render the Practice cards', async ({ page }) => {
    const practiceSection = page.locator('#practice');
    await expect(practiceSection).toBeVisible();

    const practiceCards = page.locator('a[href^="/practice/"]');
    const count = await practiceCards.count();
    expect(count).toBeGreaterThan(0);

    // Check first card has the architectural watermark (index number)
    const firstCardWatermark = practiceCards.first().locator('span.font-architectural');
    await expect(firstCardWatermark).toBeVisible();
    await expect(firstCardWatermark).toHaveText('01');
  });

  test('should display the Manifesto section with high-contrast styling', async ({ page }) => {
    const manifestoSection = page.locator('section.section-light');
    await expect(manifestoSection).toBeVisible();
    
    // Check for the black-on-white high contrast
    await expect(manifestoSection).toHaveClass(/bg-soft-white/);
    await expect(manifestoSection).toHaveClass(/text-navy/);

    const manifestoHeading = manifestoSection.locator('h2', { hasText: /THE/i });
    await expect(manifestoHeading).toBeVisible();
  });

  test('should have a functional sticky navigation with glassmorphism', async ({ page }) => {
    const nav = page.locator('#main-nav');
    await expect(nav).toBeVisible();
    await expect(nav).toHaveClass(/glass/);
    await expect(nav).toHaveClass(/backdrop-blur-xl/);
  });
});
