// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

/**
 * Bible Database Queries for Bible.Systems
 *
 * Provides helper functions for querying Bible data from D1.
 * All queries go through the shard router to find the correct database.
 */

import type { D1Database } from '@cloudflare/workers-types';
import { getResourceDbChirho, getShardDbChirho, type EnvBindingsChirho } from './router-chirho';

// Book metadata - maps book IDs to full names and abbreviations
export interface BookMetadataChirho {
	idChirho: string;
	nameChirho: string;
	abbrevChirho: string;
	chaptersChirho: number;
	testamentChirho: 'OT' | 'NT';
}

// All 66 books of the Bible
export const BIBLE_BOOKS_CHIRHO: BookMetadataChirho[] = [
	// Old Testament (39 books)
	{ idChirho: 'gen', nameChirho: 'Genesis', abbrevChirho: 'Gen', chaptersChirho: 50, testamentChirho: 'OT' },
	{ idChirho: 'exo', nameChirho: 'Exodus', abbrevChirho: 'Exod', chaptersChirho: 40, testamentChirho: 'OT' },
	{ idChirho: 'lev', nameChirho: 'Leviticus', abbrevChirho: 'Lev', chaptersChirho: 27, testamentChirho: 'OT' },
	{ idChirho: 'num', nameChirho: 'Numbers', abbrevChirho: 'Num', chaptersChirho: 36, testamentChirho: 'OT' },
	{ idChirho: 'deu', nameChirho: 'Deuteronomy', abbrevChirho: 'Deut', chaptersChirho: 34, testamentChirho: 'OT' },
	{ idChirho: 'jos', nameChirho: 'Joshua', abbrevChirho: 'Josh', chaptersChirho: 24, testamentChirho: 'OT' },
	{ idChirho: 'jdg', nameChirho: 'Judges', abbrevChirho: 'Judg', chaptersChirho: 21, testamentChirho: 'OT' },
	{ idChirho: 'rut', nameChirho: 'Ruth', abbrevChirho: 'Ruth', chaptersChirho: 4, testamentChirho: 'OT' },
	{ idChirho: '1sa', nameChirho: '1 Samuel', abbrevChirho: '1Sam', chaptersChirho: 31, testamentChirho: 'OT' },
	{ idChirho: '2sa', nameChirho: '2 Samuel', abbrevChirho: '2Sam', chaptersChirho: 24, testamentChirho: 'OT' },
	{ idChirho: '1ki', nameChirho: '1 Kings', abbrevChirho: '1Kgs', chaptersChirho: 22, testamentChirho: 'OT' },
	{ idChirho: '2ki', nameChirho: '2 Kings', abbrevChirho: '2Kgs', chaptersChirho: 25, testamentChirho: 'OT' },
	{ idChirho: '1ch', nameChirho: '1 Chronicles', abbrevChirho: '1Chr', chaptersChirho: 29, testamentChirho: 'OT' },
	{ idChirho: '2ch', nameChirho: '2 Chronicles', abbrevChirho: '2Chr', chaptersChirho: 36, testamentChirho: 'OT' },
	{ idChirho: 'ezr', nameChirho: 'Ezra', abbrevChirho: 'Ezra', chaptersChirho: 10, testamentChirho: 'OT' },
	{ idChirho: 'neh', nameChirho: 'Nehemiah', abbrevChirho: 'Neh', chaptersChirho: 13, testamentChirho: 'OT' },
	{ idChirho: 'est', nameChirho: 'Esther', abbrevChirho: 'Esth', chaptersChirho: 10, testamentChirho: 'OT' },
	{ idChirho: 'job', nameChirho: 'Job', abbrevChirho: 'Job', chaptersChirho: 42, testamentChirho: 'OT' },
	{ idChirho: 'psa', nameChirho: 'Psalms', abbrevChirho: 'Ps', chaptersChirho: 150, testamentChirho: 'OT' },
	{ idChirho: 'pro', nameChirho: 'Proverbs', abbrevChirho: 'Prov', chaptersChirho: 31, testamentChirho: 'OT' },
	{ idChirho: 'ecc', nameChirho: 'Ecclesiastes', abbrevChirho: 'Eccl', chaptersChirho: 12, testamentChirho: 'OT' },
	{ idChirho: 'sng', nameChirho: 'Song of Solomon', abbrevChirho: 'Song', chaptersChirho: 8, testamentChirho: 'OT' },
	{ idChirho: 'isa', nameChirho: 'Isaiah', abbrevChirho: 'Isa', chaptersChirho: 66, testamentChirho: 'OT' },
	{ idChirho: 'jer', nameChirho: 'Jeremiah', abbrevChirho: 'Jer', chaptersChirho: 52, testamentChirho: 'OT' },
	{ idChirho: 'lam', nameChirho: 'Lamentations', abbrevChirho: 'Lam', chaptersChirho: 5, testamentChirho: 'OT' },
	{ idChirho: 'ezk', nameChirho: 'Ezekiel', abbrevChirho: 'Ezek', chaptersChirho: 48, testamentChirho: 'OT' },
	{ idChirho: 'dan', nameChirho: 'Daniel', abbrevChirho: 'Dan', chaptersChirho: 12, testamentChirho: 'OT' },
	{ idChirho: 'hos', nameChirho: 'Hosea', abbrevChirho: 'Hos', chaptersChirho: 14, testamentChirho: 'OT' },
	{ idChirho: 'jol', nameChirho: 'Joel', abbrevChirho: 'Joel', chaptersChirho: 3, testamentChirho: 'OT' },
	{ idChirho: 'amo', nameChirho: 'Amos', abbrevChirho: 'Amos', chaptersChirho: 9, testamentChirho: 'OT' },
	{ idChirho: 'oba', nameChirho: 'Obadiah', abbrevChirho: 'Obad', chaptersChirho: 1, testamentChirho: 'OT' },
	{ idChirho: 'jon', nameChirho: 'Jonah', abbrevChirho: 'Jonah', chaptersChirho: 4, testamentChirho: 'OT' },
	{ idChirho: 'mic', nameChirho: 'Micah', abbrevChirho: 'Mic', chaptersChirho: 7, testamentChirho: 'OT' },
	{ idChirho: 'nam', nameChirho: 'Nahum', abbrevChirho: 'Nah', chaptersChirho: 3, testamentChirho: 'OT' },
	{ idChirho: 'hab', nameChirho: 'Habakkuk', abbrevChirho: 'Hab', chaptersChirho: 3, testamentChirho: 'OT' },
	{ idChirho: 'zep', nameChirho: 'Zephaniah', abbrevChirho: 'Zeph', chaptersChirho: 3, testamentChirho: 'OT' },
	{ idChirho: 'hag', nameChirho: 'Haggai', abbrevChirho: 'Hag', chaptersChirho: 2, testamentChirho: 'OT' },
	{ idChirho: 'zec', nameChirho: 'Zechariah', abbrevChirho: 'Zech', chaptersChirho: 14, testamentChirho: 'OT' },
	{ idChirho: 'mal', nameChirho: 'Malachi', abbrevChirho: 'Mal', chaptersChirho: 4, testamentChirho: 'OT' },
	// New Testament (27 books)
	{ idChirho: 'mat', nameChirho: 'Matthew', abbrevChirho: 'Matt', chaptersChirho: 28, testamentChirho: 'NT' },
	{ idChirho: 'mrk', nameChirho: 'Mark', abbrevChirho: 'Mark', chaptersChirho: 16, testamentChirho: 'NT' },
	{ idChirho: 'luk', nameChirho: 'Luke', abbrevChirho: 'Luke', chaptersChirho: 24, testamentChirho: 'NT' },
	{ idChirho: 'jhn', nameChirho: 'John', abbrevChirho: 'John', chaptersChirho: 21, testamentChirho: 'NT' },
	{ idChirho: 'act', nameChirho: 'Acts', abbrevChirho: 'Acts', chaptersChirho: 28, testamentChirho: 'NT' },
	{ idChirho: 'rom', nameChirho: 'Romans', abbrevChirho: 'Rom', chaptersChirho: 16, testamentChirho: 'NT' },
	{ idChirho: '1co', nameChirho: '1 Corinthians', abbrevChirho: '1Cor', chaptersChirho: 16, testamentChirho: 'NT' },
	{ idChirho: '2co', nameChirho: '2 Corinthians', abbrevChirho: '2Cor', chaptersChirho: 13, testamentChirho: 'NT' },
	{ idChirho: 'gal', nameChirho: 'Galatians', abbrevChirho: 'Gal', chaptersChirho: 6, testamentChirho: 'NT' },
	{ idChirho: 'eph', nameChirho: 'Ephesians', abbrevChirho: 'Eph', chaptersChirho: 6, testamentChirho: 'NT' },
	{ idChirho: 'php', nameChirho: 'Philippians', abbrevChirho: 'Phil', chaptersChirho: 4, testamentChirho: 'NT' },
	{ idChirho: 'col', nameChirho: 'Colossians', abbrevChirho: 'Col', chaptersChirho: 4, testamentChirho: 'NT' },
	{ idChirho: '1th', nameChirho: '1 Thessalonians', abbrevChirho: '1Thess', chaptersChirho: 5, testamentChirho: 'NT' },
	{ idChirho: '2th', nameChirho: '2 Thessalonians', abbrevChirho: '2Thess', chaptersChirho: 3, testamentChirho: 'NT' },
	{ idChirho: '1ti', nameChirho: '1 Timothy', abbrevChirho: '1Tim', chaptersChirho: 6, testamentChirho: 'NT' },
	{ idChirho: '2ti', nameChirho: '2 Timothy', abbrevChirho: '2Tim', chaptersChirho: 4, testamentChirho: 'NT' },
	{ idChirho: 'tit', nameChirho: 'Titus', abbrevChirho: 'Titus', chaptersChirho: 3, testamentChirho: 'NT' },
	{ idChirho: 'phm', nameChirho: 'Philemon', abbrevChirho: 'Phlm', chaptersChirho: 1, testamentChirho: 'NT' },
	{ idChirho: 'heb', nameChirho: 'Hebrews', abbrevChirho: 'Heb', chaptersChirho: 13, testamentChirho: 'NT' },
	{ idChirho: 'jas', nameChirho: 'James', abbrevChirho: 'Jas', chaptersChirho: 5, testamentChirho: 'NT' },
	{ idChirho: '1pe', nameChirho: '1 Peter', abbrevChirho: '1Pet', chaptersChirho: 5, testamentChirho: 'NT' },
	{ idChirho: '2pe', nameChirho: '2 Peter', abbrevChirho: '2Pet', chaptersChirho: 3, testamentChirho: 'NT' },
	{ idChirho: '1jn', nameChirho: '1 John', abbrevChirho: '1John', chaptersChirho: 5, testamentChirho: 'NT' },
	{ idChirho: '2jn', nameChirho: '2 John', abbrevChirho: '2John', chaptersChirho: 1, testamentChirho: 'NT' },
	{ idChirho: '3jn', nameChirho: '3 John', abbrevChirho: '3John', chaptersChirho: 1, testamentChirho: 'NT' },
	{ idChirho: 'jud', nameChirho: 'Jude', abbrevChirho: 'Jude', chaptersChirho: 1, testamentChirho: 'NT' },
	{ idChirho: 'rev', nameChirho: 'Revelation', abbrevChirho: 'Rev', chaptersChirho: 22, testamentChirho: 'NT' }
];

// Verse data returned from database
export interface VerseDbChirho {
	idChirho: string;
	versionIdChirho: string;
	bookIdChirho: string;
	chapterChirho: number;
	verseChirho: number;
	textChirho: string;
	textOriginalChirho?: string;
	wordCountChirho?: number;
}

// Version info
export interface BibleVersionChirho {
	idChirho: string;
	nameChirho: string;
	languageChirho: string;
	bookCountChirho: number;
	verseCountChirho: number;
}

/**
 * Look up book metadata by ID or name
 */
export function getBookMetadataChirho(bookRefChirho: string): BookMetadataChirho | undefined {
	const normalizedChirho = bookRefChirho.toLowerCase().replace(/\s+/g, '');

	return BIBLE_BOOKS_CHIRHO.find(
		(bChirho) =>
			bChirho.idChirho === normalizedChirho ||
			bChirho.nameChirho.toLowerCase().replace(/\s+/g, '') === normalizedChirho ||
			bChirho.abbrevChirho.toLowerCase() === normalizedChirho
	);
}

/**
 * Get all books metadata
 */
export function getAllBooksChirho(): BookMetadataChirho[] {
	return BIBLE_BOOKS_CHIRHO;
}

/**
 * Get verses for a chapter from D1
 */
export async function getChapterVersesChirho(
	dbChirho: D1Database,
	versionIdChirho: string,
	bookIdChirho: string,
	chapterChirho: number
): Promise<VerseDbChirho[]> {
	const resultChirho = await dbChirho
		.prepare(
			`
			SELECT
				id_chirho,
				version_id_chirho,
				book_id_chirho,
				chapter_chirho,
				verse_chirho,
				text_chirho,
				text_original_chirho,
				word_count_chirho
			FROM verses_chirho
			WHERE version_id_chirho = ?
				AND book_id_chirho = ?
				AND chapter_chirho = ?
			ORDER BY verse_chirho
		`
		)
		.bind(versionIdChirho, bookIdChirho, chapterChirho)
		.all();

	return (resultChirho.results as Record<string, unknown>[]).map(mapVerseRowChirho);
}

/**
 * Get a specific verse from D1
 */
export async function getVerseChirho(
	dbChirho: D1Database,
	versionIdChirho: string,
	bookIdChirho: string,
	chapterChirho: number,
	verseChirho: number
): Promise<VerseDbChirho | null> {
	const resultChirho = await dbChirho
		.prepare(
			`
			SELECT
				id_chirho,
				version_id_chirho,
				book_id_chirho,
				chapter_chirho,
				verse_chirho,
				text_chirho,
				text_original_chirho,
				word_count_chirho
			FROM verses_chirho
			WHERE version_id_chirho = ?
				AND book_id_chirho = ?
				AND chapter_chirho = ?
				AND verse_chirho = ?
		`
		)
		.bind(versionIdChirho, bookIdChirho, chapterChirho, verseChirho)
		.first();

	if (!resultChirho) {
		return null;
	}

	return mapVerseRowChirho(resultChirho as Record<string, unknown>);
}

/**
 * Get available chapters for a book from D1
 */
export async function getAvailableChaptersChirho(
	dbChirho: D1Database,
	versionIdChirho: string,
	bookIdChirho: string
): Promise<number[]> {
	const resultChirho = await dbChirho
		.prepare(
			`
			SELECT DISTINCT chapter_chirho
			FROM verses_chirho
			WHERE version_id_chirho = ?
				AND book_id_chirho = ?
			ORDER BY chapter_chirho
		`
		)
		.bind(versionIdChirho, bookIdChirho)
		.all();

	return (resultChirho.results as Record<string, unknown>[]).map(
		(rowChirho) => rowChirho.chapter_chirho as number
	);
}

/**
 * Get available books for a version from D1
 */
export async function getAvailableBooksChirho(
	dbChirho: D1Database,
	versionIdChirho: string
): Promise<string[]> {
	const resultChirho = await dbChirho
		.prepare(
			`
			SELECT DISTINCT book_id_chirho
			FROM verses_chirho
			WHERE version_id_chirho = ?
		`
		)
		.bind(versionIdChirho)
		.all();

	return (resultChirho.results as Record<string, unknown>[]).map(
		(rowChirho) => rowChirho.book_id_chirho as string
	);
}

/**
 * Get verse count for a version from D1
 */
export async function getVerseCountChirho(
	dbChirho: D1Database,
	versionIdChirho: string
): Promise<number> {
	const resultChirho = await dbChirho
		.prepare(
			`
			SELECT COUNT(*) as count_chirho
			FROM verses_chirho
			WHERE version_id_chirho = ?
		`
		)
		.bind(versionIdChirho)
		.first();

	return (resultChirho?.count_chirho as number) || 0;
}

/**
 * Search verses by text
 */
export async function searchVersesChirho(
	dbChirho: D1Database,
	versionIdChirho: string,
	queryChirho: string,
	limitChirho: number = 50
): Promise<VerseDbChirho[]> {
	// Use LIKE for simple substring matching
	const searchPatternChirho = `%${queryChirho}%`;

	const resultChirho = await dbChirho
		.prepare(
			`
			SELECT
				id_chirho,
				version_id_chirho,
				book_id_chirho,
				chapter_chirho,
				verse_chirho,
				text_chirho,
				text_original_chirho,
				word_count_chirho
			FROM verses_chirho
			WHERE version_id_chirho = ?
				AND text_chirho LIKE ?
			ORDER BY book_id_chirho, chapter_chirho, verse_chirho
			LIMIT ?
		`
		)
		.bind(versionIdChirho, searchPatternChirho, limitChirho)
		.all();

	return (resultChirho.results as Record<string, unknown>[]).map(mapVerseRowChirho);
}

/**
 * Map database row to VerseDbChirho object
 */
function mapVerseRowChirho(rowChirho: Record<string, unknown>): VerseDbChirho {
	return {
		idChirho: rowChirho.id_chirho as string,
		versionIdChirho: rowChirho.version_id_chirho as string,
		bookIdChirho: rowChirho.book_id_chirho as string,
		chapterChirho: rowChirho.chapter_chirho as number,
		verseChirho: rowChirho.verse_chirho as number,
		textChirho: rowChirho.text_chirho as string,
		textOriginalChirho: rowChirho.text_original_chirho as string | undefined,
		wordCountChirho: rowChirho.word_count_chirho as number | undefined
	};
}

/**
 * Get the D1 database for a Bible version (KJV is in shard 0)
 * For now, KJV is hardcoded to shard 0. In the future, this will use the catalog.
 */
export function getBibleDbChirho(
	envChirho: EnvBindingsChirho,
	versionIdChirho: string
): D1Database {
	// For now, all Bible data is in shard 0
	// In the future, we'll look this up in the catalog
	return getShardDbChirho(envChirho, 0);
}

// JESUS CHRIST IS LORD
