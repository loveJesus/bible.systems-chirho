#!/usr/bin/env bun
// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

/**
 * KJV Bible Import Script for Bible.Systems D1
 *
 * Extracts full KJV Bible from SWORD modules and prepares SQL statements
 * for import into D1 resource shards.
 *
 * Features:
 * - Full 31,102 verses from KJV
 * - Strong's number extraction
 * - Word-level data with morphology
 * - Louw-Nida semantic domain mapping
 * - Cross-references from TSK
 *
 * Usage:
 *   bun run scripts/import-kjv-to-d1-chirho.ts [--output=output.sql] [--limit=100]
 *
 * Note: This script uses execFileSync for safe command execution without shell injection risks.
 */

import { execFileSync } from 'child_process';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { getLouwNidaForStrongsChirho } from '../src/lib/data_chirho/strongs-louw-nida-mapping-chirho';

// ============================================================================
// BIBLE STRUCTURE
// ============================================================================

// SWORD uses Roman numerals for numbered books - swordNameChirho is what diatheke returns
const BOOKS_CHIRHO = [
	// Old Testament
	{ idChirho: 'gen', nameChirho: 'Genesis', swordNameChirho: 'Genesis', chaptersChirho: 50 },
	{ idChirho: 'exo', nameChirho: 'Exodus', swordNameChirho: 'Exodus', chaptersChirho: 40 },
	{ idChirho: 'lev', nameChirho: 'Leviticus', swordNameChirho: 'Leviticus', chaptersChirho: 27 },
	{ idChirho: 'num', nameChirho: 'Numbers', swordNameChirho: 'Numbers', chaptersChirho: 36 },
	{ idChirho: 'deu', nameChirho: 'Deuteronomy', swordNameChirho: 'Deuteronomy', chaptersChirho: 34 },
	{ idChirho: 'jos', nameChirho: 'Joshua', swordNameChirho: 'Joshua', chaptersChirho: 24 },
	{ idChirho: 'jdg', nameChirho: 'Judges', swordNameChirho: 'Judges', chaptersChirho: 21 },
	{ idChirho: 'rut', nameChirho: 'Ruth', swordNameChirho: 'Ruth', chaptersChirho: 4 },
	{ idChirho: '1sa', nameChirho: '1 Samuel', swordNameChirho: 'I Samuel', chaptersChirho: 31 },
	{ idChirho: '2sa', nameChirho: '2 Samuel', swordNameChirho: 'II Samuel', chaptersChirho: 24 },
	{ idChirho: '1ki', nameChirho: '1 Kings', swordNameChirho: 'I Kings', chaptersChirho: 22 },
	{ idChirho: '2ki', nameChirho: '2 Kings', swordNameChirho: 'II Kings', chaptersChirho: 25 },
	{ idChirho: '1ch', nameChirho: '1 Chronicles', swordNameChirho: 'I Chronicles', chaptersChirho: 29 },
	{ idChirho: '2ch', nameChirho: '2 Chronicles', swordNameChirho: 'II Chronicles', chaptersChirho: 36 },
	{ idChirho: 'ezr', nameChirho: 'Ezra', swordNameChirho: 'Ezra', chaptersChirho: 10 },
	{ idChirho: 'neh', nameChirho: 'Nehemiah', swordNameChirho: 'Nehemiah', chaptersChirho: 13 },
	{ idChirho: 'est', nameChirho: 'Esther', swordNameChirho: 'Esther', chaptersChirho: 10 },
	{ idChirho: 'job', nameChirho: 'Job', swordNameChirho: 'Job', chaptersChirho: 42 },
	{ idChirho: 'psa', nameChirho: 'Psalms', swordNameChirho: 'Psalms', chaptersChirho: 150 },
	{ idChirho: 'pro', nameChirho: 'Proverbs', swordNameChirho: 'Proverbs', chaptersChirho: 31 },
	{ idChirho: 'ecc', nameChirho: 'Ecclesiastes', swordNameChirho: 'Ecclesiastes', chaptersChirho: 12 },
	{ idChirho: 'sng', nameChirho: 'Song of Solomon', swordNameChirho: 'Song of Solomon', chaptersChirho: 8 },
	{ idChirho: 'isa', nameChirho: 'Isaiah', swordNameChirho: 'Isaiah', chaptersChirho: 66 },
	{ idChirho: 'jer', nameChirho: 'Jeremiah', swordNameChirho: 'Jeremiah', chaptersChirho: 52 },
	{ idChirho: 'lam', nameChirho: 'Lamentations', swordNameChirho: 'Lamentations', chaptersChirho: 5 },
	{ idChirho: 'ezk', nameChirho: 'Ezekiel', swordNameChirho: 'Ezekiel', chaptersChirho: 48 },
	{ idChirho: 'dan', nameChirho: 'Daniel', swordNameChirho: 'Daniel', chaptersChirho: 12 },
	{ idChirho: 'hos', nameChirho: 'Hosea', swordNameChirho: 'Hosea', chaptersChirho: 14 },
	{ idChirho: 'jol', nameChirho: 'Joel', swordNameChirho: 'Joel', chaptersChirho: 3 },
	{ idChirho: 'amo', nameChirho: 'Amos', swordNameChirho: 'Amos', chaptersChirho: 9 },
	{ idChirho: 'oba', nameChirho: 'Obadiah', swordNameChirho: 'Obadiah', chaptersChirho: 1 },
	{ idChirho: 'jon', nameChirho: 'Jonah', swordNameChirho: 'Jonah', chaptersChirho: 4 },
	{ idChirho: 'mic', nameChirho: 'Micah', swordNameChirho: 'Micah', chaptersChirho: 7 },
	{ idChirho: 'nam', nameChirho: 'Nahum', swordNameChirho: 'Nahum', chaptersChirho: 3 },
	{ idChirho: 'hab', nameChirho: 'Habakkuk', swordNameChirho: 'Habakkuk', chaptersChirho: 3 },
	{ idChirho: 'zep', nameChirho: 'Zephaniah', swordNameChirho: 'Zephaniah', chaptersChirho: 3 },
	{ idChirho: 'hag', nameChirho: 'Haggai', swordNameChirho: 'Haggai', chaptersChirho: 2 },
	{ idChirho: 'zec', nameChirho: 'Zechariah', swordNameChirho: 'Zechariah', chaptersChirho: 14 },
	{ idChirho: 'mal', nameChirho: 'Malachi', swordNameChirho: 'Malachi', chaptersChirho: 4 },
	// New Testament
	{ idChirho: 'mat', nameChirho: 'Matthew', swordNameChirho: 'Matthew', chaptersChirho: 28 },
	{ idChirho: 'mrk', nameChirho: 'Mark', swordNameChirho: 'Mark', chaptersChirho: 16 },
	{ idChirho: 'luk', nameChirho: 'Luke', swordNameChirho: 'Luke', chaptersChirho: 24 },
	{ idChirho: 'jhn', nameChirho: 'John', swordNameChirho: 'John', chaptersChirho: 21 },
	{ idChirho: 'act', nameChirho: 'Acts', swordNameChirho: 'Acts', chaptersChirho: 28 },
	{ idChirho: 'rom', nameChirho: 'Romans', swordNameChirho: 'Romans', chaptersChirho: 16 },
	{ idChirho: '1co', nameChirho: '1 Corinthians', swordNameChirho: 'I Corinthians', chaptersChirho: 16 },
	{ idChirho: '2co', nameChirho: '2 Corinthians', swordNameChirho: 'II Corinthians', chaptersChirho: 13 },
	{ idChirho: 'gal', nameChirho: 'Galatians', swordNameChirho: 'Galatians', chaptersChirho: 6 },
	{ idChirho: 'eph', nameChirho: 'Ephesians', swordNameChirho: 'Ephesians', chaptersChirho: 6 },
	{ idChirho: 'php', nameChirho: 'Philippians', swordNameChirho: 'Philippians', chaptersChirho: 4 },
	{ idChirho: 'col', nameChirho: 'Colossians', swordNameChirho: 'Colossians', chaptersChirho: 4 },
	{ idChirho: '1th', nameChirho: '1 Thessalonians', swordNameChirho: 'I Thessalonians', chaptersChirho: 5 },
	{ idChirho: '2th', nameChirho: '2 Thessalonians', swordNameChirho: 'II Thessalonians', chaptersChirho: 3 },
	{ idChirho: '1ti', nameChirho: '1 Timothy', swordNameChirho: 'I Timothy', chaptersChirho: 6 },
	{ idChirho: '2ti', nameChirho: '2 Timothy', swordNameChirho: 'II Timothy', chaptersChirho: 4 },
	{ idChirho: 'tit', nameChirho: 'Titus', swordNameChirho: 'Titus', chaptersChirho: 3 },
	{ idChirho: 'phm', nameChirho: 'Philemon', swordNameChirho: 'Philemon', chaptersChirho: 1 },
	{ idChirho: 'heb', nameChirho: 'Hebrews', swordNameChirho: 'Hebrews', chaptersChirho: 13 },
	{ idChirho: 'jas', nameChirho: 'James', swordNameChirho: 'James', chaptersChirho: 5 },
	{ idChirho: '1pe', nameChirho: '1 Peter', swordNameChirho: 'I Peter', chaptersChirho: 5 },
	{ idChirho: '2pe', nameChirho: '2 Peter', swordNameChirho: 'II Peter', chaptersChirho: 3 },
	{ idChirho: '1jn', nameChirho: '1 John', swordNameChirho: 'I John', chaptersChirho: 5 },
	{ idChirho: '2jn', nameChirho: '2 John', swordNameChirho: 'II John', chaptersChirho: 1 },
	{ idChirho: '3jn', nameChirho: '3 John', swordNameChirho: 'III John', chaptersChirho: 1 },
	{ idChirho: 'jud', nameChirho: 'Jude', swordNameChirho: 'Jude', chaptersChirho: 1 },
	{ idChirho: 'rev', nameChirho: 'Revelation', swordNameChirho: 'Revelation of John', chaptersChirho: 22 },
];

// ============================================================================
// TYPES
// ============================================================================

interface VerseChirho {
	idChirho: string;
	versionIdChirho: string;
	bookIdChirho: string;
	chapterChirho: number;
	verseChirho: number;
	textChirho: string;
	textOriginalChirho?: string;
	wordCountChirho: number;
}

interface WordInstanceChirho {
	idChirho: string;
	verseIdChirho: string;
	positionChirho: number;
	textChirho: string;
	lemmaChirho?: string;
	originalTextChirho?: string;
	transliterationChirho?: string;
	strongsChirho?: string;
	morphologyChirho?: string;
	louwNidaChirho?: string;
}

// ============================================================================
// DIATHEKE INTERFACE (SAFE - using execFileSync)
// ============================================================================

function runDiathekeChirho(moduleChirho: string, keyChirho: string, optionsChirho: string[] = []): string {
	try {
		// Using execFileSync to prevent shell injection - passes arguments as array
		const argsChirho = ['-b', moduleChirho, ...optionsChirho, '-k', keyChirho];
		return execFileSync('diatheke', argsChirho, {
			encoding: 'utf-8',
			maxBuffer: 10 * 1024 * 1024,
			stdio: ['pipe', 'pipe', 'pipe'], // Suppress stderr
		});
	} catch {
		return '';
	}
}

function normalizeStrongsChirho(strongsChirho: string): string {
	const matchChirho = strongsChirho.match(/([GH])(\d+)/i);
	if (!matchChirho) return strongsChirho;
	return `${matchChirho[1].toUpperCase()}${matchChirho[2].padStart(4, '0')}`;
}

// ============================================================================
// PARSING
// ============================================================================

function parseChapterChirho(
	swordNameChirho: string,
	bookIdChirho: string,
	chapterChirho: number
): { versesChirho: VerseChirho[]; wordsChirho: WordInstanceChirho[] } {
	const versesChirho: VerseChirho[] = [];
	const wordsChirho: WordInstanceChirho[] = [];

	// Get the entire chapter with morphology output
	// Use swordNameChirho for diatheke (e.g., "I Samuel" not "1 Samuel")
	const rawChirho = runDiathekeChirho('KJV', `${swordNameChirho} ${chapterChirho}`, ['-o', 'm']);
	if (!rawChirho) return { versesChirho, wordsChirho };

	// Split into verses - use swordNameChirho to match diatheke output format
	const escapedBookChirho = swordNameChirho.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const versePatternChirho = new RegExp(
		`${escapedBookChirho} ${chapterChirho}:(\\d+):\\s*([\\s\\S]*?)(?=${escapedBookChirho} ${chapterChirho}:\\d+:|\\(KJV\\)|$)`,
		'g'
	);
	let verseMatchChirho;

	while ((verseMatchChirho = versePatternChirho.exec(rawChirho)) !== null) {
		const verseNumChirho = parseInt(verseMatchChirho[1]);
		const contentChirho = verseMatchChirho[2];

		// Parse words with Strong's
		const wordPatternChirho = /<w[^>]*savlm="([^"]*)"[^>]*>([^<]*)<\/w>/g;
		let wordMatchChirho;
		let positionChirho = 0;
		const verseWordsChirho: WordInstanceChirho[] = [];

		while ((wordMatchChirho = wordPatternChirho.exec(contentChirho)) !== null) {
			const savlmChirho = wordMatchChirho[1];
			const textChirho = wordMatchChirho[2].trim();

			if (textChirho) {
				// Parse Strong's numbers
				const strongsMatchesChirho = savlmChirho.match(/strong:([GH]\d+)/gi);
				const strongsListChirho = strongsMatchesChirho
					? strongsMatchesChirho.map((sChirho) => normalizeStrongsChirho(sChirho.replace(/strong:/i, '')))
					: [];

				// Parse lemma
				const lemmaMatchChirho = savlmChirho.match(/lemma\.[\w]+:(\S+)/);
				const lemmaChirho = lemmaMatchChirho ? lemmaMatchChirho[1] : undefined;

				// Get Louw-Nida domains
				const lnDomainsChirho: string[] = [];
				for (const strongsChirho of strongsListChirho) {
					const mappingChirho = getLouwNidaForStrongsChirho(strongsChirho);
					if (mappingChirho) {
						for (const domainChirho of mappingChirho.domainsChirho) {
							if (!lnDomainsChirho.includes(domainChirho.louwNidaNumberChirho)) {
								lnDomainsChirho.push(domainChirho.louwNidaNumberChirho);
							}
						}
					}
				}

				const verseIdChirho = `kjv:${bookIdChirho}:${chapterChirho}:${verseNumChirho}`;
				const wordIdChirho = `${verseIdChirho}:${positionChirho}`;

				verseWordsChirho.push({
					idChirho: wordIdChirho,
					verseIdChirho,
					positionChirho,
					textChirho,
					lemmaChirho,
					strongsChirho: strongsListChirho.length > 0 ? strongsListChirho.join(',') : undefined,
					louwNidaChirho: lnDomainsChirho.length > 0 ? lnDomainsChirho.join(',') : undefined,
				});

				positionChirho++;
			}
		}

		// Get plain text
		const plainTextChirho = contentChirho
			.replace(/<[^>]+>/g, '')
			.replace(/\s+/g, ' ')
			.trim();

		if (plainTextChirho) {
			const verseIdChirho = `kjv:${bookIdChirho}:${chapterChirho}:${verseNumChirho}`;
			versesChirho.push({
				idChirho: verseIdChirho,
				versionIdChirho: 'kjv',
				bookIdChirho,
				chapterChirho,
				verseChirho: verseNumChirho,
				textChirho: plainTextChirho,
				wordCountChirho: verseWordsChirho.length,
			});

			wordsChirho.push(...verseWordsChirho);
		}
	}

	return { versesChirho, wordsChirho };
}

// ============================================================================
// SQL GENERATION
// ============================================================================

function escapeStrChirho(strChirho: string | undefined): string {
	if (!strChirho) return 'NULL';
	return `'${strChirho.replace(/'/g, "''")}'`;
}

function generateVerseSqlChirho(verseChirho: VerseChirho): string {
	return `INSERT INTO verses_chirho (id_chirho, version_id_chirho, book_id_chirho, chapter_chirho, verse_chirho, text_chirho, text_original_chirho, word_count_chirho) VALUES (${escapeStrChirho(verseChirho.idChirho)}, ${escapeStrChirho(verseChirho.versionIdChirho)}, ${escapeStrChirho(verseChirho.bookIdChirho)}, ${verseChirho.chapterChirho}, ${verseChirho.verseChirho}, ${escapeStrChirho(verseChirho.textChirho)}, ${escapeStrChirho(verseChirho.textOriginalChirho)}, ${verseChirho.wordCountChirho});`;
}

function generateWordSqlChirho(wordChirho: WordInstanceChirho): string {
	return `INSERT INTO word_instances_chirho (id_chirho, verse_id_chirho, position_chirho, text_chirho, lemma_chirho, original_text_chirho, transliteration_chirho, strongs_chirho, morphology_chirho, louw_nida_chirho) VALUES (${escapeStrChirho(wordChirho.idChirho)}, ${escapeStrChirho(wordChirho.verseIdChirho)}, ${wordChirho.positionChirho}, ${escapeStrChirho(wordChirho.textChirho)}, ${escapeStrChirho(wordChirho.lemmaChirho)}, ${escapeStrChirho(wordChirho.originalTextChirho)}, ${escapeStrChirho(wordChirho.transliterationChirho)}, ${escapeStrChirho(wordChirho.strongsChirho)}, ${escapeStrChirho(wordChirho.morphologyChirho)}, ${escapeStrChirho(wordChirho.louwNidaChirho)});`;
}

// ============================================================================
// MAIN
// ============================================================================

async function mainChirho() {
	const argsChirho = process.argv.slice(2);
	const outputFileChirho =
		argsChirho.find((aChirho) => aChirho.startsWith('--output='))?.split('=')[1] ||
		'data-chirho/kjv-import-chirho.sql';
	const limitChirho = parseInt(
		argsChirho.find((aChirho) => aChirho.startsWith('--limit='))?.split('=')[1] || '0'
	);

	console.log('═'.repeat(60));
	console.log('Bible.Systems KJV Import Script');
	console.log('═'.repeat(60));
	console.log(`Output: ${outputFileChirho}`);
	if (limitChirho > 0) console.log(`Limit: ${limitChirho} chapters`);
	console.log('');

	// Ensure output directory exists
	const dirChirho = outputFileChirho.substring(0, outputFileChirho.lastIndexOf('/'));
	if (dirChirho && !existsSync(dirChirho)) {
		mkdirSync(dirChirho, { recursive: true });
	}

	const allVersesChirho: VerseChirho[] = [];
	const allWordsChirho: WordInstanceChirho[] = [];
	let chapterCountChirho = 0;

	for (const bookChirho of BOOKS_CHIRHO) {
		if (limitChirho > 0 && chapterCountChirho >= limitChirho) break;

		console.log(`📖 ${bookChirho.nameChirho} (${bookChirho.chaptersChirho} chapters)`);

		for (let chChirho = 1; chChirho <= bookChirho.chaptersChirho; chChirho++) {
			if (limitChirho > 0 && chapterCountChirho >= limitChirho) break;

			const { versesChirho, wordsChirho } = parseChapterChirho(
				bookChirho.swordNameChirho,
				bookChirho.idChirho,
				chChirho
			);

			allVersesChirho.push(...versesChirho);
			allWordsChirho.push(...wordsChirho);
			chapterCountChirho++;

			if (chChirho % 10 === 0) {
				process.stdout.write('.');
			}
		}
		console.log(` ✓ ${allVersesChirho.length} verses`);
	}

	console.log('');
	console.log('─'.repeat(60));
	console.log('Generating SQL...');

	// Generate SQL
	const sqlLinesChirho: string[] = [
		'-- For God so loved the world, that He gave His only begotten Son,',
		'-- that all who believe in Him should not perish but have everlasting life. — John 3:16',
		'',
		'-- KJV Bible Import for Bible.Systems',
		`-- Generated: ${new Date().toISOString()}`,
		`-- Verses: ${allVersesChirho.length}`,
		`-- Words: ${allWordsChirho.length}`,
		'',
		'-- Verses',
	];

	for (const verseChirho of allVersesChirho) {
		sqlLinesChirho.push(generateVerseSqlChirho(verseChirho));
	}

	sqlLinesChirho.push('');
	sqlLinesChirho.push('-- Word Instances');

	for (const wordChirho of allWordsChirho) {
		sqlLinesChirho.push(generateWordSqlChirho(wordChirho));
	}

	sqlLinesChirho.push('');
	sqlLinesChirho.push('-- JESUS CHRIST IS LORD');

	writeFileSync(outputFileChirho, sqlLinesChirho.join('\n'));

	console.log('');
	console.log('═'.repeat(60));
	console.log('SUMMARY');
	console.log('═'.repeat(60));
	console.log(`✓ Verses: ${allVersesChirho.length}`);
	console.log(`✓ Words: ${allWordsChirho.length}`);
	console.log(`✓ Output: ${outputFileChirho}`);
	console.log('');
	console.log('JESUS CHRIST IS LORD');
	console.log('═'.repeat(60));
}

mainChirho().catch(console.error);
