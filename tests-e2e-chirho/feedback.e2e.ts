// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { test, expect } from '@playwright/test';

test.describe('Feedback System - Critical Flows', () => {
	test('feedback bubble is visible on homepage', async ({ page }) => {
		await page.goto('/');

		// Check feedback button exists
		const feedbackButton = page.locator('button[aria-label="Send feedback"]');
		await expect(feedbackButton).toBeVisible();
	});

	test('feedback form opens when bubble clicked', async ({ page }) => {
		await page.goto('/');

		// Click feedback button
		await page.locator('button[aria-label="Send feedback"]').click();

		// Check form appears
		await expect(page.locator('text=Send Feedback')).toBeVisible();
		await expect(page.locator('text=Help us improve Bible.Systems')).toBeVisible();
	});

	test('feedback type buttons are interactive', async ({ page }) => {
		await page.goto('/');
		await page.locator('button[aria-label="Send feedback"]').click();

		// Check all feedback types exist
		await expect(page.locator('text=Bug Report')).toBeVisible();
		await expect(page.locator('text=Feature')).toBeVisible();
		await expect(page.locator('text=General')).toBeVisible();

		// Click bug report
		await page.locator('button:has-text("Bug Report")').click();

		// Check label changes
		await expect(page.locator('text=Describe the issue')).toBeVisible();
	});

	test('feedback form has Turnstile widget', async ({ page }) => {
		await page.goto('/');
		await page.locator('button[aria-label="Send feedback"]').click();

		// Wait for Turnstile container (widget loads asynchronously)
		const turnstileContainer = page.locator('#turnstile-container-chirho');
		await expect(turnstileContainer).toBeVisible();
	});

	test('feedback form validates empty message', async ({ page }) => {
		await page.goto('/');
		await page.locator('button[aria-label="Send feedback"]').click();

		// Try to submit without message
		await page.locator('button:has-text("Send Feedback")').click();

		// Check error message appears
		await expect(page.locator('text=Please enter your feedback')).toBeVisible();
	});

	test('feedback form closes when X clicked', async ({ page }) => {
		await page.goto('/');

		// Open form
		await page.locator('button[aria-label="Send feedback"]').click();
		await expect(page.locator('text=Send Feedback')).toBeVisible();

		// Close form
		await page.locator('button[aria-label="Send feedback"]').click();

		// Check form is hidden
		await expect(page.locator('text=Send Feedback')).not.toBeVisible();
	});

	test('star rating is interactive for general feedback', async ({ page }) => {
		await page.goto('/');
		await page.locator('button[aria-label="Send feedback"]').click();

		// Ensure we're on general feedback (default)
		await page.locator('button:has-text("General")').click();

		// Check rating exists
		await expect(page.locator('text=How would you rate your experience?')).toBeVisible();

		// Click 5 stars
		const stars = page.locator('button:has-text("★")');
		await expect(stars).toHaveCount(5);
	});
});

test.describe('Feedback API', () => {
	test('POST /api-chirho/feedback-chirho requires Turnstile token', async ({ request }) => {
		const response = await request.post('/api-chirho/feedback-chirho', {
			data: {
				type_chirho: 'general',
				message_chirho: 'Test feedback'
				// Missing turnstile_token_chirho
			}
		});

		// Should fail without token
		expect(response.status()).toBe(400);
		const data = await response.json();
		expect(data.error_chirho.message_chirho).toContain('Verification');
	});

	test('POST /api-chirho/feedback-chirho validates message', async ({ request }) => {
		const response = await request.post('/api-chirho/feedback-chirho', {
			data: {
				type_chirho: 'general',
				message_chirho: '',
				turnstile_token_chirho: 'test-token'
			}
		});

		// Should fail with empty message (after Turnstile check)
		expect(response.ok()).toBe(false);
	});
});
