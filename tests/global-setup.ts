 import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  console.log('🚀 Starting global test setup...');
  
  // Verify the application is accessible
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    const baseURL = process.env.BASE_URL || 'http://localhost:3000';
    console.log(`📡 Checking if application is accessible at ${baseURL}`);
    
    await page.goto(baseURL, { waitUntil: 'networkidle' });
    
    // Verify the page loads correctly
    await page.waitForSelector('h1', { timeout: 10000 });
    console.log('✅ Application is accessible and responsive');
    
    // Pre-warm the application by navigating through key sections
    console.log('🔥 Pre-warming application...');
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(1000);
    await page.evaluate(() => window.scrollTo(0, 1500));
    await page.waitForTimeout(1000);
    await page.evaluate(() => window.scrollTo(0, 2500));
    await page.waitForTimeout(1000);
    
    console.log('✅ Application pre-warming completed');
    
  } catch (error) {
    console.error('❌ Global setup failed:', error);
    throw error;
  } finally {
    await browser.close();
  }
  
  console.log('✅ Global test setup completed successfully');
}

export default globalSetup; 