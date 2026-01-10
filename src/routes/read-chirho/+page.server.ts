// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import type { ServerLoad } from '@sveltejs/kit';
import {
	getAllBooksChirho,
	getAvailableBooksChirho,
	getAvailableChaptersChirho,
	getBibleDbChirho,
	type BookMetadataChirho
} from '$lib/db_chirho/bible-queries-chirho';
import type { EnvBindingsChirho } from '$lib/db_chirho/router-chirho';

export interface BookWithChaptersChirho extends BookMetadataChirho {
	availableChaptersChirho: number[];
}

export const load: ServerLoad = async ({ platform }) => {
	// Get all 66 books metadata
	const allBooksChirho = getAllBooksChirho();

	// Check if we have D1 available
	if (!platform?.env?.RES_00_CHIRHO) {
		// Fallback: show all books with all their chapters (standard Bible chapter counts)
		const booksWithChaptersChirho: BookWithChaptersChirho[] = allBooksChirho.map((bookChirho) => ({
			...bookChirho,
			availableChaptersChirho: Array.from(
				{ length: bookChirho.chaptersChirho },
				(_, iChirho) => iChirho + 1
			)
		}));

		return {
			booksChirho: booksWithChaptersChirho,
			sourceChirho: 'metadata' as const,
			verseCountChirho: 0
		};
	}

	const envChirho = platform.env as unknown as EnvBindingsChirho;
	const dbChirho = getBibleDbChirho(envChirho, 'kjv');

	// Get which books actually have data in D1
	const availableBookIdsChirho = await getAvailableBooksChirho(dbChirho, 'kjv');

	// For each book with data, get its available chapters
	const booksWithChaptersChirho: BookWithChaptersChirho[] = await Promise.all(
		allBooksChirho
			.filter((bookChirho) => availableBookIdsChirho.includes(bookChirho.idChirho))
			.map(async (bookChirho) => {
				const chaptersChirho = await getAvailableChaptersChirho(
					dbChirho,
					'kjv',
					bookChirho.idChirho
				);
				return {
					...bookChirho,
					availableChaptersChirho: chaptersChirho
				};
			})
	);

	// Sort books in canonical order
	const bookOrderChirho = allBooksChirho.map((bChirho) => bChirho.idChirho);
	booksWithChaptersChirho.sort(
		(aChirho, bChirho) =>
			bookOrderChirho.indexOf(aChirho.idChirho) - bookOrderChirho.indexOf(bChirho.idChirho)
	);

	// Count total verses
	let verseCountChirho = 0;
	try {
		const countResultChirho = await dbChirho
			.prepare(`SELECT COUNT(*) as count_chirho FROM verses_chirho WHERE version_id_chirho = ?`)
			.bind('kjv')
			.first();
		verseCountChirho = (countResultChirho?.count_chirho as number) || 0;
	} catch {
		// Ignore count errors
	}

	return {
		booksChirho: booksWithChaptersChirho,
		sourceChirho: 'd1' as const,
		verseCountChirho
	};
};

// JESUS CHRIST IS LORD
