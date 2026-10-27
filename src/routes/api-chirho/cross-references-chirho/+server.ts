// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {
	getCrossReferencesChirho,
	getReferencingVersesChirho,
	formatReferenceChirho,
	getCrossReferenceStatsChirho,
	bookAbbreviationsChirho,
	type VerseCrossReferencesChirho
} from '$lib/data_chirho/cross_references_chirho';

/**
 * GET /api-chirho/cross-references-chirho
 *
 * Query parameters:
 * - book: Book abbreviation (e.g., "Gen", "Jhn")
 * - chapter: Chapter number
 * - verse: Verse number
 * - stats: If "true", return database statistics instead
 *
 * Examples:
 * - /api-chirho/cross-references-chirho?book=Gen&chapter=1&verse=1
 * - /api-chirho/cross-references-chirho?book=Jhn&chapter=3&verse=16
 * - /api-chirho/cross-references-chirho?stats=true
 */
export const GET: RequestHandler = async ({ url }) => {
	// Check for stats request
	const statsParamChirho = url.searchParams.get('stats');
	if (statsParamChirho === 'true') {
		const statsChirho = getCrossReferenceStatsChirho();
		return json({
			data_chirho: {
				...statsChirho,
				message_chirho: 'Cross-reference statistics retrieved successfully'
			}
		});
	}

	// Get verse parameters
	const bookChirho = url.searchParams.get('book');
	const chapterParamChirho = url.searchParams.get('chapter');
	const verseParamChirho = url.searchParams.get('verse');

	// Validate required parameters
	if (!bookChirho || !chapterParamChirho || !verseParamChirho) {
		return json(
			{
				error_chirho: {
					code_chirho: 'VALIDATION_ERROR',
					message_chirho: 'Missing required parameters: book, chapter, verse'
				}
			},
			{ status: 400 }
		);
	}

	const chapterChirho = parseInt(chapterParamChirho, 10);
	const verseChirho = parseInt(verseParamChirho, 10);

	if (isNaN(chapterChirho) || isNaN(verseChirho) || chapterChirho < 1 || verseChirho < 1) {
		return json(
			{
				error_chirho: {
					code_chirho: 'VALIDATION_ERROR',
					message_chirho: 'Chapter and verse must be positive integers'
				}
			},
			{ status: 400 }
		);
	}

	// Get cross-references
	const crossRefsChirho = getCrossReferencesChirho(bookChirho, chapterChirho, verseChirho);

	// Format references for display
	const formattedGroupsChirho = crossRefsChirho.map((groupChirho) => ({
		topic_chirho: groupChirho.topic_chirho || null,
		references_chirho: groupChirho.refs_chirho.map((refChirho) => ({
			raw_chirho: refChirho,
			formatted_chirho: formatReferenceChirho(refChirho)
		}))
	}));

	// Get verses that reference this verse
	const referencingChirho = getReferencingVersesChirho(bookChirho, chapterChirho, verseChirho);
	const formattedReferencingChirho = referencingChirho.map((refChirho) => ({
		raw_chirho: refChirho,
		formatted_chirho: formatReferenceChirho(refChirho)
	}));

	const bookFullNameChirho = bookAbbreviationsChirho[bookChirho] || bookChirho;
	const verseReferenceChirho = `${bookFullNameChirho} ${chapterChirho}:${verseChirho}`;

	return json({
		data_chirho: {
			verse_chirho: verseReferenceChirho,
			book_chirho: bookChirho,
			chapter_chirho: chapterChirho,
			verse_number_chirho: verseChirho,
			cross_references_chirho: formattedGroupsChirho,
			referenced_by_chirho: formattedReferencingChirho,
			total_references_chirho: formattedGroupsChirho.reduce(
				(sumChirho, gChirho) => sumChirho + gChirho.references_chirho.length,
				0
			),
			total_topics_chirho: formattedGroupsChirho.filter((gChirho) => gChirho.topic_chirho).length
		} satisfies VerseCrossReferencesChirho
	});
};
