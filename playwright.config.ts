// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	// E2E test directory
	testDir: './tests-e2e-chirho',
	// Test file pattern
	testMatch: '**/*.e2e.ts',
	// Fast timeout for E2E tests
	timeout: 10000,
	// Fail fast on first error
	fullyParallel: true,
	// No retries in dev (fast feedback)
	retries: 0,
	// Single worker for speed
	workers: 1,
	// Simple reporter
	reporter: 'list',
	use: {
		// MANDATORY: Always run headless
		headless: true,
		// Base URL for local dev server
		baseURL: 'http://localhost:5173',
		// Fast navigation timeout
		navigationTimeout: 5000,
		// No screenshots (faster)
		screenshot: 'off',
		// No videos (faster)
		video: 'off',
		// No traces (faster)
		trace: 'off'
	},
	// Only test in Chromium (fastest)
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		}
	],
	// Start dev server before tests
	webServer: {
		command: 'bun run dev',
		url: 'http://localhost:5173',
		reuseExistingServer: !process.env.CI,
		timeout: 30000
	}
});
