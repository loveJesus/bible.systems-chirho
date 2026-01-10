// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {
	getAllBooksChirho,
	getAvailableBooksChirho,
	getVerseCountChirho,
	getBibleDbChirho,
	type BookMetadataChirho
} from '$lib/db_chirho/bible-queries-chirho';
import type { EnvBindingsChirho } from '$lib/db_chirho/router-chirho';

/**
 * GET /api-chirho/bible-chirho
 * Returns available Bible versions and books
 */
export const GET: RequestHandler = async ({ platform }) => {
	// Check if we're in a Cloudflare Workers environment with D1
	if (!platform?.env?.RES_00_CHIRHO) {
		// Fallback for local development without D1
		const allBooksChirho = getAllBooksChirho();

		return json({
			data_chirho: {
				versions_chirho: [
					{
						id_chirho: 'kjv',
						name_chirho: 'King James Version',
						language_chirho: 'en',
						books_count_chirho: 66,
						source_chirho: 'metadata'
					}
				],
				books_chirho: allBooksChirho.map((bChirho) => ({
					id_chirho: bChirho.idChirho,
					name_chirho: bChirho.nameChirho,
					abbrev_chirho: bChirho.abbrevChirho,
					chapters_chirho: bChirho.chaptersChirho,
					testament_chirho: bChirho.testamentChirho
				})),
				message_chirho:
					'Bible.Systems API - Using metadata (D1 not available in this environment)'
			}
		});
	}

	const envChirho = platform.env as unknown as EnvBindingsChirho;
	const dbChirho = getBibleDbChirho(envChirho, 'kjv');

	// Get available books from D1
	const availableBookIdsChirho = await getAvailableBooksChirho(dbChirho, 'kjv');
	const verseCountChirho = await getVerseCountChirho(dbChirho, 'kjv');

	// Map available book IDs to full metadata
	const allBooksChirho = getAllBooksChirho();
	const availableBooksChirho = allBooksChirho.filter((bChirho) =>
		availableBookIdsChirho.includes(bChirho.idChirho)
	);

	return json({
		data_chirho: {
			versions_chirho: [
				{
					id_chirho: 'kjv',
					name_chirho: 'King James Version',
					language_chirho: 'en',
					books_count_chirho: availableBooksChirho.length,
					verse_count_chirho: verseCountChirho,
					source_chirho: 'd1'
				}
			],
			books_chirho: availableBooksChirho.map((bChirho) => ({
				id_chirho: bChirho.idChirho,
				name_chirho: bChirho.nameChirho,
				abbrev_chirho: bChirho.abbrevChirho,
				chapters_chirho: bChirho.chaptersChirho,
				testament_chirho: bChirho.testamentChirho
			})),
			message_chirho: 'Bible.Systems API - KJV Public Domain. More versions coming soon.'
		}
	});
};

// JESUS CHRIST IS LORD
