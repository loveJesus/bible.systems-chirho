// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import type { Handle } from '@sveltejs/kit';

const securityHeadersChirho: Record<string, string> = {
	'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'X-Frame-Options': 'DENY',
	'X-XSS-Protection': '1; mode=block',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
		"style-src 'self' 'unsafe-inline'",
		"img-src 'self' data: https:",
		"font-src 'self' data:",
		"connect-src 'self' https:",
		"frame-src 'self' https://challenges.cloudflare.com https://*.hf.space",
		"frame-ancestors 'none'"
	].join('; ')
};

export const handle: Handle = async ({ event, resolve }) => {
	const responseChirho = await resolve(event);

	// Add security headers to all responses
	const newHeadersChirho = new Headers(responseChirho.headers);

	for (const [keyChirho, valueChirho] of Object.entries(securityHeadersChirho)) {
		newHeadersChirho.set(keyChirho, valueChirho);
	}

	return new Response(responseChirho.body, {
		status: responseChirho.status,
		statusText: responseChirho.statusText,
		headers: newHeadersChirho
	});
};
