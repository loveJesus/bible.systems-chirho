// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env: {
				FEEDBACK_DB_CHIRHO: D1Database;
				CATALOG_DB_CHIRHO: D1Database;
				APP_DB_CHIRHO: D1Database;
				// Resource shards (16 initial)
				RES_00_CHIRHO: D1Database;
				RES_01_CHIRHO: D1Database;
				RES_02_CHIRHO: D1Database;
				RES_03_CHIRHO: D1Database;
				RES_04_CHIRHO: D1Database;
				RES_05_CHIRHO: D1Database;
				RES_06_CHIRHO: D1Database;
				RES_07_CHIRHO: D1Database;
				RES_08_CHIRHO: D1Database;
				RES_09_CHIRHO: D1Database;
				RES_0A_CHIRHO: D1Database;
				RES_0B_CHIRHO: D1Database;
				RES_0C_CHIRHO: D1Database;
				RES_0D_CHIRHO: D1Database;
				RES_0E_CHIRHO: D1Database;
				RES_0F_CHIRHO: D1Database;
			};
			context: {
				waitUntil(promise: Promise<unknown>): void;
			};
			caches: CacheStorage;
		}
	}

	/** Options of window.turnstile.render that FeedbackBubbleChirho uses. */
	interface TurnstileRenderOptionsChirho {
		sitekey: string;
		callback?: (tokenChirho: string) => void;
		'error-callback'?: () => void;
		theme?: 'auto' | 'light' | 'dark';
		size?: 'normal' | 'flexible' | 'compact';
	}

	/** Cloudflare Turnstile, loaded by the script tag in app.html. */
	interface TurnstileChirho {
		/** Returns the widget id, or undefined when the widget could not be rendered. */
		render(containerChirho: string | HTMLElement, optionsChirho: TurnstileRenderOptionsChirho): string | undefined;
		reset(widgetIdChirho?: string): void;
	}

	interface Window {
		turnstile?: TurnstileChirho;
	}
}

export {};
