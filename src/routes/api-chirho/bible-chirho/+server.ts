// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { bibleKjvChirho, getAvailableBooksChirho } from '$lib/data_chirho/bible_kjv_chirho';

/**
 * GET /api-chirho/bible-chirho
 * Returns available Bible versions and books
 */
export const GET: RequestHandler = async () => {
	const booksChirho = getAvailableBooksChirho();

	return json({
		data_chirho: {
			versions_chirho: [
				{
					id_chirho: bibleKjvChirho.version,
					name_chirho: bibleKjvChirho.versionName,
					language_chirho: 'en',
					books_count_chirho: booksChirho.length
				}
			],
			books_chirho: booksChirho.map((b) => ({
				name_chirho: b.name,
				abbrev_chirho: b.abbrev,
				available_chapters_chirho: b.chapterCount
			})),
			message_chirho: 'Bible.Systems API - KJV Public Domain. More versions coming soon.'
		}
	});
};
