// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import {
	getBookChirho,
	getChapterChirho,
	getAvailableChaptersChirho,
	getAvailableBooksChirho
} from '$lib/data_chirho/bible_kjv_chirho';

export const load: PageServerLoad = async ({ params }) => {
	const { book, chapter } = params;
	const chapterNumChirho = parseInt(chapter, 10);

	// Get book data
	const bookDataChirho = getBookChirho(book);
	if (!bookDataChirho) {
		error(404, {
			message: `Book "${book}" not found`
		});
	}

	// Validate chapter
	if (isNaN(chapterNumChirho) || chapterNumChirho < 1) {
		error(400, {
			message: 'Invalid chapter number'
		});
	}

	// Get chapter data
	const chapterDataChirho = getChapterChirho(book, chapterNumChirho);
	if (!chapterDataChirho) {
		const availableChirho = getAvailableChaptersChirho(book);
		error(404, {
			message: `Chapter ${chapterNumChirho} not available. Available chapters: ${availableChirho.join(', ')}`
		});
	}

	// Get navigation info
	const availableChaptersChirho = getAvailableChaptersChirho(book);
	const currentIndexChirho = availableChaptersChirho.indexOf(chapterNumChirho);
	const prevChapterChirho = currentIndexChirho > 0 ? availableChaptersChirho[currentIndexChirho - 1] : null;
	const nextChapterChirho =
		currentIndexChirho < availableChaptersChirho.length - 1
			? availableChaptersChirho[currentIndexChirho + 1]
			: null;

	// Get all books for navigation
	const allBooksChirho = getAvailableBooksChirho();

	return {
		bookChirho: {
			name: bookDataChirho.name,
			abbrev: bookDataChirho.abbrev
		},
		chapterChirho: chapterNumChirho,
		versesChirho: chapterDataChirho.verses,
		navigationChirho: {
			prevChapter: prevChapterChirho,
			nextChapter: nextChapterChirho,
			availableChapters: availableChaptersChirho,
			allBooks: allBooksChirho
		}
	};
};
