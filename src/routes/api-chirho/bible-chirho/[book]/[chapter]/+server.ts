// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getBookChirho, getChapterChirho, getVerseChirho, getAvailableChaptersChirho } from '$lib/data_chirho/bible_kjv_chirho';

/**
 * GET /api-chirho/bible-chirho/:book/:chapter
 * Returns verses for a specific chapter
 *
 * Optional query param: ?verse=N to get a specific verse
 */
export const GET: RequestHandler = async ({ params, url }) => {
	const { book, chapter } = params;
	const chapterNumChirho = parseInt(chapter, 10);
	const verseParamChirho = url.searchParams.get('verse');

	// Validate book exists
	const bookDataChirho = getBookChirho(book);
	if (!bookDataChirho) {
		return json(
			{
				error_chirho: {
					code_chirho: 'BOOK_NOT_FOUND',
					message_chirho: `Book "${book}" not found. Available books: Genesis, Psalms, John, Romans`
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

	// Get available chapters for this book
	const availableChaptersChirho = getAvailableChaptersChirho(book);

	// Get chapter data
	const chapterDataChirho = getChapterChirho(book, chapterNumChirho);
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

		const verseDataChirho = getVerseChirho(book, chapterNumChirho, verseNumChirho);
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
				reference_chirho: `${bookDataChirho.name} ${chapterNumChirho}:${verseDataChirho.verse}`
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
			verses_chirho: chapterDataChirho.verses.map((v) => ({
				verse_chirho: v.verse,
				text_chirho: v.text
			})),
			reference_chirho: `${bookDataChirho.name} ${chapterNumChirho}`,
			navigation_chirho: {
				available_chapters_chirho: availableChaptersChirho
			}
		}
	});
};
