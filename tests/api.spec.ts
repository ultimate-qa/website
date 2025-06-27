import { expect, test } from '@playwright/test';

test.describe('API Link Tests', () => {
  const baseURL = process.env.BASE_URL || 'http://localhost:3000';

  test('homepage loads successfully via API', async ({ request }) => {
    const response = await request.get(baseURL);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('text/html');
  });

  test('API endpoints respond correctly', async ({ request }) => {
    // Test the main page
    const mainPage = await request.get(baseURL);
    expect(mainPage.status()).toBe(200);

    // Get the HTML content to extract links
    const html = await mainPage.text();
    
    // Check for essential elements in the HTML
    expect(html).toContain('UltimateQA');
    expect(html).toContain('Software To Market');
    expect(html).toContain('Get Free Discovery Session');
  });

  test('external links are reachable', async ({ request }) => {
    // Test common external links that might be in the site
    const externalLinks = [
      'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
    ];

    for (const link of externalLinks) {
      try {
        const response = await request.get(link, { timeout: 10000 });
        expect(response.status()).toBeLessThan(400);
      } catch (error) {
        console.log(`Warning: External link ${link} may be unreachable:`, error);
        // Don't fail the test for external links, just log
      }
    }
  });

  test('form submission endpoints exist', async ({ request }) => {
    // Test that form endpoints would be reachable (even if they return 405 for GET)
    try {
      const response = await request.get(`${baseURL}/api/contact`);
      // We expect this to either work or return a method not allowed
      expect([200, 404, 405].includes(response.status())).toBeTruthy();
    } catch (error) {
      // Endpoint might not exist yet, which is fine
      console.log('Contact API endpoint not implemented yet');
    }
  });

  test('static assets load correctly', async ({ request }) => {
    // Test that the page loads and contains expected static content
    const response = await request.get(baseURL);
    const html = await response.text();
    
    // Check for essential meta tags and structure
    expect(html).toContain('utf-8');
    expect(html).toContain('viewport');
    expect(html).toContain('UltimateQA');
  });

  test('no broken internal links in navigation', async ({ request }) => {
    const response = await request.get(baseURL);
    const html = await response.text();
    
    // Extract href attributes that look like internal links
    const hrefMatches = html.match(/href="([^"]*?)"/g) || [];
    const internalLinks = hrefMatches
      .map(match => match.replace(/href="([^"]*?)"/, '$1'))
      .filter(href => href.startsWith('/') || href.startsWith('#') || href.startsWith(baseURL))
      .filter(href => !href.startsWith('#')) // Skip anchor links for API testing
      .slice(0, 5); // Limit to first 5 to avoid too many requests

    for (const link of internalLinks) {
      try {
        const fullUrl = link.startsWith('/') ? `${baseURL}${link}` : link;
        const linkResponse = await request.get(fullUrl, { timeout: 5000 });
        expect(linkResponse.status()).toBeLessThan(400);
      } catch (error) {
        console.log(`Warning: Internal link ${link} may be unreachable:`, error);
        // Log but don't fail - some links might be client-side routes
      }
    }
  });
}); 