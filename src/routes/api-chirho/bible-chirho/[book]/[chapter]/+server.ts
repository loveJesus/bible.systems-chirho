// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {
	getBookMetadataChirho,
	getChapterVersesChirho,
	getVerseChirho,
	getAvailableChaptersChirho,
	getBibleDbChirho,
	getAllBooksChirho
} from '$lib/db_chirho/bible-queries-chirho';
import type { EnvBindingsChirho } from '$lib/db_chirho/router-chirho';

// Fallback to TypeScript data file for local development without D1
import {
	getBookChirho,
	getChapterChirho as getChapterFromFileChirho,
	getVerseChirho as getVerseFromFileChirho,
	getAvailableChaptersChirho as getAvailableChaptersFromFileChirho
} from '$lib/data_chirho/bible_kjv_chirho';

/**
 * GET /api-chirho/bible-chirho/:book/:chapter
 * Returns verses for a specific chapter
 *
 * Optional query param: ?verse=N to get a specific verse
 */
export const GET: RequestHandler = async ({ params, url, platform }) => {
	const { book, chapter } = params;
	const chapterNumChirho = parseInt(chapter, 10);
	const verseParamChirho = url.searchParams.get('verse');

	// Get book metadata
	const bookMetaChirho = getBookMetadataChirho(book);
	if (!bookMetaChirho) {
		// List all book names for helpful error message
		const allBooksChirho = getAllBooksChirho();
		const bookNamesChirho = allBooksChirho.map((bChirho) => bChirho.nameChirho).join(', ');

		return json(
			{
				error_chirho: {
					code_chirho: 'BOOK_NOT_FOUND',
					message_chirho: `Book "${book}" not found. Available books: ${bookNamesChirho}`
				}
			},
			{ status: 404 }
		);
	}

	// Validate chapter number
	if (isNaN(chapterNumChirho) || chapterNumChirho < 1) {
		return json(
			{
				error_chirho: {
					code_chirho: 'INVALID_CHAPTER',
					message_chirho: 'Chapter must be a positive number'
				}
			},
			{ status: 400 }
		);
	}

	// Check if we're in a Cloudflare Workers environment with D1
	if (!platform?.env?.RES_00_CHIRHO) {
		// Fallback for local development without D1
		return handleWithFallbackChirho(book, bookMetaChirho.nameChirho, bookMetaChirho.abbrevChirho, chapterNumChirho, verseParamChirho);
	}

	const envChirho = platform.env as unknown as EnvBindingsChirho;
	const dbChirho = getBibleDbChirho(envChirho, 'kjv');

	// Get available chapters for validation and navigation
	const availableChaptersChirho = await getAvailableChaptersChirho(
		dbChirho,
		'kjv',
		bookMetaChirho.idChirho
	);

	// Get verses for the chapter
	const versesChirho = await getChapterVersesChirho(
		dbChirho,
		'kjv',
		bookMetaChirho.idChirho,
		chapterNumChirho
	);

	if (versesChirho.length === 0) {
		// Chapter not found - provide available chapters
		return json(
			{
				error_chirho: {
					code_chirho: 'CHAPTER_NOT_FOUND',
					message_chirho: `Chapter ${chapterNumChirho} not found for ${bookMetaChirho.nameChirho}. Available chapters: ${availableChaptersChirho.join(', ') || 'none'}`
				}
			},
			{ status: 404 }
		);
	}

	// If verse param provided, return specific verse
	if (verseParamChirho) {
		const verseNumChirho = parseInt(verseParamChirho, 10);
		if (isNaN(verseNumChirho) || verseNumChirho < 1) {
			return json(
				{
					error_chirho: {
						code_chirho: 'INVALID_VERSE',
						message_chirho: 'Verse must be a positive number'
					}
				},
				{ status: 400 }
			);
		}

		const verseDataChirho = await getVerseChirho(
			dbChirho,
			'kjv',
			bookMetaChirho.idChirho,
			chapterNumChirho,
			verseNumChirho
		);

		if (!verseDataChirho) {
			return json(
				{
					error_chirho: {
						code_chirho: 'VERSE_NOT_FOUND',
						message_chirho: `Verse ${verseNumChirho} not found in ${bookMetaChirho.nameChirho} ${chapterNumChirho}`
					}
				},
				{ status: 404 }
			);
		}

		return json({
			data_chirho: {
				version_chirho: 'kjv',
				book_chirho: bookMetaChirho.nameChirho,
				book_id_chirho: bookMetaChirho.idChirho,
				book_abbrev_chirho: bookMetaChirho.abbrevChirho,
				chapter_chirho: chapterNumChirho,
				verse_chirho: verseDataChirho.verseChirho,
				text_chirho: verseDataChirho.textChirho,
				reference_chirho: `${bookMetaChirho.nameChirho} ${chapterNumChirho}:${verseDataChirho.verseChirho}`,
				source_chirho: 'd1'
			}
		});
	}

	// Return full chapter
	return json({
		data_chirho: {
			version_chirho: 'kjv',
			book_chirho: bookMetaChirho.nameChirho,
			book_id_chirho: bookMetaChirho.idChirho,
			book_abbrev_chirho: bookMetaChirho.abbrevChirho,
			chapter_chirho: chapterNumChirho,
			verse_count_chirho: versesChirho.length,
			verses_chirho: versesChirho.map((vChirho) => ({
				verse_chirho: vChirho.verseChirho,
				text_chirho: vChirho.textChirho
			})),
			reference_chirho: `${bookMetaChirho.nameChirho} ${chapterNumChirho}`,
			navigation_chirho: {
				available_chapters_chirho: availableChaptersChirho,
				prev_chapter_chirho:
					chapterNumChirho > 1 && availableChaptersChirho.includes(chapterNumChirho - 1)
						? chapterNumChirho - 1
						: null,
				next_chapter_chirho: availableChaptersChirho.includes(chapterNumChirho + 1)
					? chapterNumChirho + 1
					: null
			},
			source_chirho: 'd1'
		}
	});
};

/**
 * Fallback handler using TypeScript data file (for local dev without D1)
 */
function handleWithFallbackChirho(
	bookParamChirho: string,
	bookNameChirho: string,
	bookAbbrevChirho: string,
	chapterNumChirho: number,
	verseParamChirho: string | null
) {
	// Validate book exists in fallback data
	const bookDataChirho = getBookChirho(bookParamChirho);
	if (!bookDataChirho) {
		return json(
			{
				error_chirho: {
					code_chirho: 'BOOK_NOT_FOUND',
					message_chirho: `Book "${bookParamChirho}" not found in local data. Try: Genesis, Psalms, John, Romans`
				}
			},
			{ status: 404 }
		);
	}

	// Get available chapters for this book
	const availableChaptersChirho = getAvailableChaptersFromFileChirho(bookParamChirho);

	// Get chapter data
	const chapterDataChirho = getChapterFromFileChirho(bookParamChirho, chapterNumChirho);
	if (!chapterDataChirho) {
		return json(
			{
				error_chirho: {
					code_chirho: 'CHAPTER_NOT_FOUND',
					message_chirho: `Chapter ${chapterNumChirho} not available for ${bookDataChirho.name}. Available chapters: ${availableChaptersChirho.join(', ')}`
				}
			},
			{ status: 404 }
		);
	}

	// If verse param provided, return specific verse
	if (verseParamChirho) {
		const verseNumChirho = parseInt(verseParamChirho, 10);
		if (isNaN(verseNumChirho) || verseNumChirho < 1) {
			return json(
				{
					error_chirho: {
						code_chirho: 'INVALID_VERSE',
						message_chirho: 'Verse must be a positive number'
					}
				},
				{ status: 400 }
			);
		}

		const verseDataChirho = getVerseFromFileChirho(bookParamChirho, chapterNumChirho, verseNumChirho);
		if (!verseDataChirho) {
			return json(
				{
					error_chirho: {
						code_chirho: 'VERSE_NOT_FOUND',
						message_chirho: `Verse ${verseNumChirho} not found in ${bookDataChirho.name} ${chapterNumChirho}`
					}
				},
				{ status: 404 }
			);
		}

		return json({
			data_chirho: {
				version_chirho: 'kjv',
				book_chirho: bookDataChirho.name,
				book_abbrev_chirho: bookDataChirho.abbrev,
				chapter_chirho: chapterNumChirho,
				verse_chirho: verseDataChirho.verse,
				text_chirho: verseDataChirho.text,
				reference_chirho: `${bookDataChirho.name} ${chapterNumChirho}:${verseDataChirho.verse}`,
				source_chirho: 'file'
			}
		});
	}

	// Return full chapter
	return json({
		data_chirho: {
			version_chirho: 'kjv',
			book_chirho: bookDataChirho.name,
			book_abbrev_chirho: bookDataChirho.abbrev,
			chapter_chirho: chapterNumChirho,
			verse_count_chirho: chapterDataChirho.verses.length,
			verses_chirho: chapterDataChirho.verses.map((vChirho) => ({
				verse_chirho: vChirho.verse,
				text_chirho: vChirho.text
			})),
			reference_chirho: `${bookDataChirho.name} ${chapterNumChirho}`,
			navigation_chirho: {
				available_chapters_chirho: availableChaptersChirho
			},
			source_chirho: 'file'
		}
	});
}

// JESUS CHRIST IS LORD
