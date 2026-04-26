import { test, expect } from '@playwright/test';

test('mobile menu toggles correctly', async ({ page }) => {
  await page.goto('/');
  
  const navToggle = page.locator('#nav-toggle');
  const mobileMenu = page.locator('#mobile-menu');
  const navContainer = page.locator('#main-nav');
  const lines = navToggle.locator('line');

  // Initially hidden
  await expect(mobileMenu).toBeHidden();

  // Open menu
  await navToggle.click();
  
  // Check visibility
  await expect(mobileMenu).toBeVisible();
  
  // Check animation to X (check first line's x1 attribute as a proxy)
  await expect(lines.first()).toHaveAttribute('x1', '18');

  // Close menu
  await navToggle.click();
  
  // Check reset
  await expect(mobileMenu).toBeHidden();
  await expect(lines.first()).toHaveAttribute('x1', '4');
});
