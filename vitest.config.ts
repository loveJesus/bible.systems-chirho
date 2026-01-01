// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
	resolve: {
		alias: {
			$lib: resolve('./src/lib')
		}
	},
	test: {
		// Include unit tests from src directory
		include: ['src/**/*.test.ts'],
		// Exclude E2E tests (handled by Playwright)
		exclude: ['tests-e2e-chirho/**', 'node_modules/**'],
		// Fast timeout for unit tests
		testTimeout: 5000,
		// Environment for server-side tests
		environment: 'node',
		// Globals for cleaner test syntax
		globals: true
	}
});
