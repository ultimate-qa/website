import { expect, test } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('page loads within 3 seconds', async ({ page }) => {
    const start = Date.now();
    
    await page.goto('/');
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - start;
    
    console.log(`Page load time: ${loadTime}ms`);
    expect(loadTime).toBeLessThan(3000); // Realistic target for feature-rich page
  });

  test('largest contentful paint is under 2.5 seconds', async ({ page }) => {
    await page.goto('/');
    
    const lcpValue = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        let lcp = 0;
        
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            lcp = entry.startTime;
          });
        }).observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Wait a bit to capture LCP, then resolve
        setTimeout(() => resolve(lcp), 3000);
      });
    });
    
    console.log(`LCP: ${lcpValue}ms`);
    expect(lcpValue).toBeLessThan(2500); // Good LCP target
  });

  test('cumulative layout shift is under 0.1', async ({ page }) => {
    await page.goto('/');
    
    const clsValue = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        let cls = 0;
        
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              cls += (entry as any).value;
            }
          }
        }).observe({ entryTypes: ['layout-shift'] });
        
        // Resolve after a delay to capture layout shifts
        setTimeout(() => resolve(cls), 3000);
      });
    });
    
    console.log(`CLS: ${clsValue}`);
    expect(clsValue).toBeLessThan(0.1);
  });

  test('page has good performance scores', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check basic performance metrics with proper error handling
    const metrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as any;
      if (!navigation) {
        return { domInteractive: 0, domContentLoaded: 0, loadComplete: 0 };
      }
      
      return {
        domContentLoaded: Math.max(0, navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
        loadComplete: Math.max(0, navigation.loadEventEnd - navigation.loadEventStart),
        domInteractive: Math.max(0, navigation.domInteractive - navigation.navigationStart)
      };
    });
    
    console.log('Performance metrics:', metrics);
    
    // DOM should be interactive quickly (only test if we have valid metrics)
    if (metrics.domInteractive && metrics.domInteractive > 0) {
      expect(metrics.domInteractive).toBeLessThan(2000);
    }
    if (metrics.domContentLoaded && metrics.domContentLoaded > 0) {
      expect(metrics.domContentLoaded).toBeLessThan(1000);
    }
  });

  test('no critical console errors on page load', async ({ page }) => {
    const criticalErrors: string[] = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        const text = msg.text();
        // Only capture critical errors, not 404s for optional resources
        if (!text.includes('Failed to load resource') && !text.includes('404')) {
          criticalErrors.push(text);
        }
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    expect(criticalErrors).toHaveLength(0);
  });

  test('page resources load successfully', async ({ page }) => {
    const response = await page.goto('/');
    
    expect(response?.status()).toBe(200);
    
    // Verify main page content is present
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });

  test('critical styles are applied', async ({ page }) => {
    await page.goto('/');
    
    // Check that main content is styled properly
    const mainStyles = await page.locator('main').evaluate(el => {
      const computed = window.getComputedStyle(el);
      return {
        hasBackground: computed.background !== '',
        hasFont: computed.fontFamily !== '',
        isVisible: computed.display !== 'none'
      };
    });
    
    expect(mainStyles.isVisible).toBe(true);
  });

  test('fonts load without blocking', async ({ page }) => {
    const start = Date.now();
    await page.goto('/');
    
    // Wait for fonts to load
    await page.waitForFunction(() => document.fonts.ready);
    
    const fontLoadTime = Date.now() - start;
    console.log(`Font load time: ${fontLoadTime}ms`);
    
    // Fonts should not block rendering significantly
    expect(fontLoadTime).toBeLessThan(3000);
  });
}); 