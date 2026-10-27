// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { error } from '@sveltejs/kit';
import {
	getBookMetadataChirho,
	getAllBooksChirho,
	getChapterVersesChirho,
	getAvailableChaptersChirho,
	getBibleDbChirho
} from '$lib/db_chirho/bible-queries-chirho';
import type { EnvBindingsChirho } from '$lib/db_chirho/router-chirho';
import type { PageServerLoad } from './$types';

// Supported versions
const VERSIONS_CHIRHO: Record<string, { nameChirho: string; abbrevChirho: string }> = {
	kjv: { nameChirho: 'King James Version', abbrevChirho: 'KJV' }
};

export const load: PageServerLoad = async ({ params, platform }) => {
	const { version_chirho, book_chirho, chapter_chirho } = params;
	const versionIdChirho = (version_chirho || 'kjv').toLowerCase();
	const chapterNumChirho = parseInt(chapter_chirho || '1', 10);

	// Validate version
	const versionInfoChirho = VERSIONS_CHIRHO[versionIdChirho];
	if (!versionInfoChirho) {
		error(404, {
			message: `Version "${version_chirho}" not found. Available: ${Object.keys(VERSIONS_CHIRHO).join(', ')}`
		});
	}

	// Get book metadata
	const bookMetaChirho = getBookMetadataChirho(book_chirho || '');
	if (!bookMetaChirho) {
		error(404, {
			message: `Book "${book_chirho}" not found`
		});
	}

	// Validate chapter number
	if (isNaN(chapterNumChirho) || chapterNumChirho < 1) {
		error(400, {
			message: 'Invalid chapter number'
		});
	}

	// Check if chapter is within book's chapter count
	if (chapterNumChirho > bookMetaChirho.chaptersChirho) {
		error(404, {
			message: `Chapter ${chapterNumChirho} not found. ${bookMetaChirho.nameChirho} has ${bookMetaChirho.chaptersChirho} chapters.`
		});
	}

	// Check if we have D1 available
	if (!platform?.env?.RES_00_CHIRHO) {
		// No D1 - return error for now since we need D1 for full Bible
		error(503, {
			message: 'Bible database not available. Please try again later.'
		});
	}

	const envChirho = platform.env as unknown as EnvBindingsChirho;
	const dbChirho = getBibleDbChirho(envChirho, versionIdChirho);

	// Get verses from D1
	const versesChirho = await getChapterVersesChirho(
		dbChirho,
		versionIdChirho,
		bookMetaChirho.idChirho,
		chapterNumChirho
	);

	if (versesChirho.length === 0) {
		error(404, {
			message: `No verses found for ${bookMetaChirho.nameChirho} ${chapterNumChirho}`
		});
	}

	// Get available chapters for navigation
	const availableChaptersChirho = await getAvailableChaptersChirho(
		dbChirho,
		versionIdChirho,
		bookMetaChirho.idChirho
	);

	// Calculate prev/next chapter
	const currentIndexChirho = availableChaptersChirho.indexOf(chapterNumChirho);
	const prevChapterChirho =
		currentIndexChirho > 0 ? availableChaptersChirho[currentIndexChirho - 1] : null;
	const nextChapterChirho =
		currentIndexChirho < availableChaptersChirho.length - 1
			? availableChaptersChirho[currentIndexChirho + 1]
			: null;

	// Get all books for navigation dropdown
	const allBooksChirho = getAllBooksChirho();

	return {
		versionChirho: {
			idChirho: versionIdChirho,
			nameChirho: versionInfoChirho.nameChirho,
			abbrevChirho: versionInfoChirho.abbrevChirho
		},
		bookChirho: {
			nameChirho: bookMetaChirho.nameChirho,
			abbrevChirho: bookMetaChirho.abbrevChirho,
			idChirho: bookMetaChirho.idChirho
		},
		chapterChirho: chapterNumChirho,
		versesChirho: versesChirho.map((vChirho) => ({
			verseChirho: vChirho.verseChirho,
			textChirho: vChirho.textChirho
		})),
		navigationChirho: {
			prevChapterChirho: prevChapterChirho,
			nextChapterChirho: nextChapterChirho,
			availableChaptersChirho: availableChaptersChirho,
			allBooksChirho: allBooksChirho.map((bChirho) => ({
				idChirho: bChirho.idChirho,
				nameChirho: bChirho.nameChirho,
				chaptersChirho: bChirho.chaptersChirho
			}))
		}
	};
};

// JESUS CHRIST IS LORD
