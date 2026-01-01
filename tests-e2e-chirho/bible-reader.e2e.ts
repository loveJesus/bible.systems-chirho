// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { test, expect } from '@playwright/test';

test.describe('Bible Reader - Critical Flows', () => {
	test('homepage loads with key elements', async ({ page }) => {
		await page.goto('/');

		// Check title
		await expect(page).toHaveTitle(/Bible\.Systems/);

		// Check hero section
		await expect(page.locator('text=Study Scripture')).toBeVisible();

		// Check navigation link to Bible
		await expect(page.locator('a[href="/read-chirho"]')).toBeVisible();
	});

	test('Bible index page lists available books', async ({ page }) => {
		await page.goto('/read-chirho');

		// Check page title
		await expect(page).toHaveTitle(/Read the Bible/);

		// Check that books are listed
		await expect(page.locator('text=Genesis')).toBeVisible();
		await expect(page.locator('text=Psalms')).toBeVisible();
		await expect(page.locator('text=John')).toBeVisible();
	});

	test('Genesis 1 chapter loads with verses', async ({ page }) => {
		await page.goto('/read-chirho/gen/1');

		// Check page title
		await expect(page).toHaveTitle(/Genesis 1/);

		// Check chapter header
		await expect(page.locator('h1:has-text("Genesis")')).toBeVisible();

		// Check first verse is visible
		await expect(page.locator('text=In the beginning God created')).toBeVisible();

		// Check verse numbers exist
		await expect(page.locator('sup:has-text("1")')).toBeVisible();
	});

	test('John 3:16 verse is accessible', async ({ page }) => {
		await page.goto('/read-chirho/jhn/3');

		// Check famous verse is present
		await expect(page.locator('text=God so loved the world')).toBeVisible();
	});

	test('chapter navigation works', async ({ page }) => {
		await page.goto('/read-chirho/gen/1');

		// Check next chapter link exists
		const nextLink = page.locator('a:has-text("Chapter 2")');
		await expect(nextLink).toBeVisible();

		// Click and verify navigation
		await nextLink.click();
		await expect(page).toHaveURL(/\/read-chirho\/gen\/2/);
		await expect(page.locator('text=Chapter 2')).toBeVisible();
	});

	test('book selector dropdown works', async ({ page }) => {
		await page.goto('/read-chirho/gen/1');

		// Click book selector button
		await page.locator('button:has-text("Genesis")').first().click();

		// Check dropdown appears with other books
		await expect(page.locator('a:has-text("Psalms")')).toBeVisible();
		await expect(page.locator('a:has-text("John")')).toBeVisible();
	});
});

test.describe('Bible API - Endpoints', () => {
	test('GET /api-chirho/bible-chirho returns book list', async ({ request }) => {
		const response = await request.get('/api-chirho/bible-chirho');
		expect(response.ok()).toBe(true);

		const data = await response.json();
		expect(data.data_chirho).toBeDefined();
		expect(data.data_chirho.books_chirho).toBeDefined();
		expect(Array.isArray(data.data_chirho.books_chirho)).toBe(true);
	});

	test('GET /api-chirho/bible-chirho/gen/1 returns Genesis 1', async ({ request }) => {
		const response = await request.get('/api-chirho/bible-chirho/gen/1');
		expect(response.ok()).toBe(true);

		const data = await response.json();
		expect(data.data_chirho.book_chirho).toBe('Genesis');
		expect(data.data_chirho.chapter_chirho).toBe(1);
		expect(data.data_chirho.verses_chirho.length).toBeGreaterThan(0);
	});

	test('GET /api-chirho/bible-chirho/jhn/3?verse=16 returns John 3:16', async ({ request }) => {
		const response = await request.get('/api-chirho/bible-chirho/jhn/3?verse=16');
		expect(response.ok()).toBe(true);

		const data = await response.json();
		expect(data.data_chirho.verse_chirho).toBe(16);
		expect(data.data_chirho.text_chirho).toContain('God so loved');
	});

	test('GET /api-chirho/bible-chirho/invalid/1 returns 404', async ({ request }) => {
		const response = await request.get('/api-chirho/bible-chirho/invalidbook/1');
		expect(response.status()).toBe(404);
	});
});
