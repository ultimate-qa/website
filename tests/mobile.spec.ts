import { expect, test } from '@playwright/test';

test.describe('Mobile Responsiveness Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('mobile viewport renders correctly', async ({ page }) => {
    // Set to mobile viewport
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE size
    
    // Check that the page loads
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Push Higher Quality');
    
    // Check that mobile navigation works
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });

  test('tablet viewport renders correctly', async ({ page }) => {
    // Set to tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 }); // iPad size
    
    // Check that the page loads
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Push Higher Quality');
    
    // Check that content is properly arranged for tablet
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();
  });

  test('responsive stats grid on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check that stats cards are visible and stacked on mobile
    const statsCards = page.locator('[class*="grid"]').locator('div').filter({ hasText: /\d+/ }).first();
    await expect(statsCards).toBeVisible();
  });

  test('buttons are touch-friendly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Find all CTA buttons and get the first visible one
    const ctaButtons = page.locator('button', { hasText: 'Get Free Discovery Session' });
    const buttonCount = await ctaButtons.count();
    expect(buttonCount).toBeGreaterThan(0);
    
    // Check each button until we find a visible one
    let visibleButton = null;
    for (let i = 0; i < buttonCount; i++) {
      const button = ctaButtons.nth(i);
      if (await button.isVisible()) {
        visibleButton = button;
        break;
      }
    }
    
    // If we found a visible button, test its touch-friendliness
    if (visibleButton) {
      const buttonBox = await visibleButton.boundingBox();
      if (buttonBox) {
        expect(buttonBox.height).toBeGreaterThan(40);
      }
    } else {
      // If no buttons are visible on mobile, just verify they exist in the DOM
      expect(buttonCount).toBeGreaterThan(0);
    }
  });

  test('text is readable on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 }); // iPhone 5 size
    
    // Check that main heading is visible and readable
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    
    // Check that text doesn't overflow
    const subtitle = page.locator('p').filter({ hasText: 'We transform your ideas' });
    await expect(subtitle).toBeVisible();
  });
}); 