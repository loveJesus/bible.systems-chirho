// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { describe, it, expect, vi } from 'vitest';
import type { RequestEvent } from '@sveltejs/kit';
import { handle } from './hooks.server';

function runHandleChirho(urlChirho: string) {
	const resolveChirho = vi.fn(async () => new Response('page', { status: 200 }));
	const eventChirho = { url: new URL(urlChirho) } as unknown as RequestEvent;
	return { resolveChirho, responsePromiseChirho: handle({ event: eventChirho, resolve: resolveChirho }) };
}

describe('handle', () => {
	it('redirects www.bible.systems to the apex, keeping path and query', async () => {
		const { resolveChirho, responsePromiseChirho } = runHandleChirho('https://www.bible.systems/read-chirho?v=kjv');
		const responseChirho = await responsePromiseChirho;

		expect(responseChirho.status).toBe(301);
		expect(responseChirho.headers.get('location')).toBe('https://bible.systems/read-chirho?v=kjv');
		expect(resolveChirho).not.toHaveBeenCalled();
	});

	it('sends plain-HTTP www requests to the HTTPS apex', async () => {
		const { responsePromiseChirho } = runHandleChirho('http://www.bible.systems/features-fe');
		const responseChirho = await responsePromiseChirho;

		expect(responseChirho.status).toBe(301);
		expect(responseChirho.headers.get('location')).toBe('https://bible.systems/features-fe');
	});

	it('sends plain-HTTP apex requests to HTTPS, keeping path and query', async () => {
		const { resolveChirho, responsePromiseChirho } = runHandleChirho('http://bible.systems/models-chirho?tab=2');
		const responseChirho = await responsePromiseChirho;

		expect(responseChirho.status).toBe(301);
		expect(responseChirho.headers.get('location')).toBe('https://bible.systems/models-chirho?tab=2');
		expect(resolveChirho).not.toHaveBeenCalled();
	});

	it('leaves plain-HTTP local development alone', async () => {
		const { resolveChirho, responsePromiseChirho } = runHandleChirho('http://localhost:5180/');
		const responseChirho = await responsePromiseChirho;

		expect(responseChirho.status).toBe(200);
		expect(resolveChirho).toHaveBeenCalledOnce();
	});

	it('serves the apex with security headers', async () => {
		const { resolveChirho, responsePromiseChirho } = runHandleChirho('https://bible.systems/');
		const responseChirho = await responsePromiseChirho;

		expect(responseChirho.status).toBe(200);
		expect(responseChirho.headers.get('x-frame-options')).toBe('DENY');
		expect(resolveChirho).toHaveBeenCalledOnce();
	});
});
