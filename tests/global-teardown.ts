import { FullConfig } from '@playwright/test';

async function globalTeardown(config: FullConfig) {
  console.log('🧹 Starting global test teardown...');
  
  // Cleanup operations if needed
  // For example, clearing test data, stopping services, etc.
  
  console.log('✅ Global test teardown completed');
}

export default globalTeardown; 