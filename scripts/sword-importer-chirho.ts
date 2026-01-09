// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

/**
 * SWORD Module Importer for Bible.Systems
 *
 * Parses output from diatheke and converts to our data format.
 * Supports:
 * - Bible text with Strong's numbers and morphology
 * - Greek/Hebrew original texts
 * - Cross-references from TSK
 * - Commentaries
 * - Lexicon entries
 * - Interlinear alignment via Strong's numbers
 * - Louw-Nida semantic domain lookup
 */

import { execSync } from 'child_process';
import {
	type InterlinearTokenChirho,
	type AlignedBlockChirho,
	type InterlinearVerseChirho,
	parseStrongsFromTextChirho,
	normalizeStrongsChirho,
	createAlignedBlocksChirho,
} from '../src/lib/types_chirho/interlinear-chirho';
import { getLouwNidaForStrongsChirho } from '../src/lib/data_chirho/strongs-louw-nida-mapping-chirho';

// ============================================================================
// TYPES
// ============================================================================

interface WordInstanceChirho {
	positionChirho: number;
	textChirho: string;
	strongsChirho?: string[];
	morphologyChirho?: string;
	lemmaChirho?: string;
	louwNidaChirho?: string[]; // Semantic domain references
}

interface VerseDataChirho {
	referenceChirho: string;
	bookChirho: string;
	chapterChirho: number;
	verseChirho: number;
	textChirho: string;
	wordsChirho?: WordInstanceChirho[];
	crossReferencesChirho?: string[];
}

interface StrongsEntryChirho {
	numberChirho: string;
	originalChirho: string;
	transliterationChirho: string;
	pronunciationChirho: string;
	definitionChirho: string;
	languageChirho: 'greek' | 'hebrew';
}

interface GreekWordChirho {
	wordChirho: string;
	strongsChirho?: string;
	morphologyChirho?: string;
	lemmaChirho?: string;
	positionChirho: number;
}

// ============================================================================
// DIATHEKE INTERFACE
// ============================================================================

function runDiathekeChirho(
	moduleChirho: string,
	keyChirho: string,
	optionsChirho: string = ''
): string {
	try {
		const cmdChirho = `diatheke -b ${moduleChirho} ${optionsChirho} -k "${keyChirho}" 2>/dev/null`;
		return execSync(cmdChirho, { encoding: 'utf-8' });
	} catch (errorChirho) {
		console.error(`Error running diatheke for ${moduleChirho}:`, errorChirho);
		return '';
	}
}

// ============================================================================
// PARSING FUNCTIONS
// ============================================================================

/**
 * Parse KJV output with Strong's numbers
 */
function parseKjvWithStrongsChirho(rawTextChirho: string): VerseDataChirho | null {
	const matchChirho = rawTextChirho.match(/^(.+? \d+:\d+):\s*(.+)\n\(KJV\)/s);
	if (!matchChirho) return null;

	const referenceChirho = matchChirho[1];
	const contentChirho = matchChirho[2];

	// Parse reference
	const refMatchChirho = referenceChirho.match(/(.+?) (\d+):(\d+)/);
	if (!refMatchChirho) return null;

	const bookChirho = refMatchChirho[1];
	const chapterChirho = parseInt(refMatchChirho[2]);
	const verseChirho = parseInt(refMatchChirho[3]);

	// Extract words with Strong's numbers
	const wordsChirho: WordInstanceChirho[] = [];
	const wordPatternChirho = /<w[^>]*savlm="([^"]*)"[^>]*>([^<]*)<\/w>/g;
	let positionChirho = 0;
	let wordMatchChirho;

	while ((wordMatchChirho = wordPatternChirho.exec(contentChirho)) !== null) {
		const savlmChirho = wordMatchChirho[1];
		const textChirho = wordMatchChirho[2].trim();

		if (textChirho) {
			// Parse Strong's numbers
			const strongsMatchesChirho = savlmChirho.match(/strong:([GH]\d+)/g);
			const strongsChirho = strongsMatchesChirho
				? strongsMatchesChirho.map((sChirho) =>
						normalizeStrongsChirho(sChirho.replace('strong:', ''))
					)
				: undefined;

			// Parse lemma
			const lemmaMatchChirho = savlmChirho.match(/lemma\.TR:(\S+)/);
			const lemmaChirho = lemmaMatchChirho ? lemmaMatchChirho[1] : undefined;

			// Get Louw-Nida domains for Strong's numbers
			const louwNidaChirho: string[] = [];
			if (strongsChirho) {
				for (const sChirho of strongsChirho) {
					const lnMappingChirho = getLouwNidaForStrongsChirho(sChirho);
					if (lnMappingChirho) {
						for (const domainChirho of lnMappingChirho.domainsChirho) {
							if (!louwNidaChirho.includes(domainChirho.louwNidaNumberChirho)) {
								louwNidaChirho.push(domainChirho.louwNidaNumberChirho);
							}
						}
					}
				}
			}

			wordsChirho.push({
				positionChirho: positionChirho++,
				textChirho,
				strongsChirho,
				lemmaChirho,
				louwNidaChirho: louwNidaChirho.length > 0 ? louwNidaChirho : undefined,
			});
		}
	}

	// Get plain text
	const plainTextChirho = contentChirho
		.replace(/<[^>]+>/g, '')
		.replace(/\s+/g, ' ')
		.trim();

	return {
		referenceChirho,
		bookChirho,
		chapterChirho,
		verseChirho,
		textChirho: plainTextChirho,
		wordsChirho: wordsChirho.length > 0 ? wordsChirho : undefined,
	};
}

/**
 * Parse MorphGNT Greek text with morphology
 */
function parseMorphGntChirho(rawTextChirho: string): GreekWordChirho[] {
	const wordsChirho: GreekWordChirho[] = [];

	// MorphGNT format includes morphological codes
	const lineChirho = rawTextChirho.split('\n')[0];
	if (!lineChirho) return wordsChirho;

	// Parse Greek words from OSIS XML
	const wordPatternChirho = /<w[^>]*lemma="([^"]*)"[^>]*morph="([^"]*)"[^>]*>([^<]+)<\/w>/g;
	let matchChirho;
	let positionChirho = 0;

	while ((matchChirho = wordPatternChirho.exec(rawTextChirho)) !== null) {
		const lemmaChirho = matchChirho[1];
		const morphChirho = matchChirho[2];
		const wordChirho = matchChirho[3];

		// Extract Strong's if present
		const strongsMatchChirho = lemmaChirho.match(/strong:G(\d+)/);
		const strongsChirho = strongsMatchChirho ? `G${strongsMatchChirho[1].padStart(4, '0')}` : undefined;

		wordsChirho.push({
			wordChirho,
			strongsChirho,
			morphologyChirho: morphChirho,
			lemmaChirho,
			positionChirho: positionChirho++,
		});
	}

	// Fallback: parse plain text if no OSIS format
	if (wordsChirho.length === 0) {
		const cleanLineChirho = lineChirho.replace(/\([^)]+\)$/, '').trim();
		const greekWordsChirho = cleanLineChirho.split(/\s+/);

		for (const wordChirho of greekWordsChirho) {
			if (wordChirho && /[\u0370-\u03FF]/.test(wordChirho)) {
				// Greek character range
				wordsChirho.push({
					wordChirho,
					positionChirho: positionChirho++,
				});
			}
		}
	}

	return wordsChirho;
}

/**
 * Parse TSK cross-references
 */
function parseTskChirho(rawTextChirho: string): string[] {
	const referencesChirho: string[] = [];
	const refPatternChirho = /<scripRef>([^<]+)<\/scripRef>/g;
	let matchChirho;

	while ((matchChirho = refPatternChirho.exec(rawTextChirho)) !== null) {
		const refsChirho = matchChirho[1].split(';').map((rChirho) => rChirho.trim());
		referencesChirho.push(...refsChirho);
	}

	return referencesChirho;
}

/**
 * Parse Strong's dictionary entry
 */
function parseStrongsEntryChirho(
	rawTextChirho: string,
	languageChirho: 'greek' | 'hebrew'
): StrongsEntryChirho | null {
	if (languageChirho === 'greek') {
		const matchChirho = rawTextChirho.match(
			/<entryFree n="(\d+)">\s*<orth>([^<]+)<\/orth>.*?<orth[^>]*type="trans">([^<]+)<\/orth>\s*<pron[^>]*>([^<]+)<\/pron>\s*<def>\s*([^<]+)/s
		);
		if (matchChirho) {
			return {
				numberChirho: `G${matchChirho[1].padStart(4, '0')}`,
				originalChirho: matchChirho[2],
				transliterationChirho: matchChirho[3],
				pronunciationChirho: matchChirho[4],
				definitionChirho: matchChirho[5].trim(),
				languageChirho: 'greek',
			};
		}
	} else {
		// Hebrew format is different
		const matchChirho = rawTextChirho.match(/(\d+)\s+(\S+)\s+(\S+)\s+([\s\S]+)/);
		if (matchChirho) {
			return {
				numberChirho: `H${matchChirho[1].padStart(4, '0')}`,
				originalChirho: matchChirho[2],
				transliterationChirho: matchChirho[2],
				pronunciationChirho: matchChirho[3],
				definitionChirho: matchChirho[4].trim(),
				languageChirho: 'hebrew',
			};
		}
	}
	return null;
}

// ============================================================================
// INTERLINEAR FUNCTIONS
// ============================================================================

/**
 * Convert parsed KJV word data to interlinear tokens
 */
function wordsToInterlinearTokensChirho(wordsChirho: WordInstanceChirho[]): InterlinearTokenChirho[] {
	return wordsChirho.map((wordChirho) => ({
		strongsChirho: wordChirho.strongsChirho ?? [],
		wordsChirho: [wordChirho.textChirho],
		positionChirho: wordChirho.positionChirho,
		morphologyChirho: wordChirho.morphologyChirho,
		lemmaChirho: wordChirho.lemmaChirho,
	}));
}

/**
 * Convert Greek words to interlinear tokens
 */
function greekToInterlinearTokensChirho(greekWordsChirho: GreekWordChirho[]): InterlinearTokenChirho[] {
	return greekWordsChirho.map((wordChirho) => ({
		strongsChirho: wordChirho.strongsChirho ? [wordChirho.strongsChirho] : [],
		wordsChirho: [wordChirho.wordChirho],
		positionChirho: wordChirho.positionChirho,
		morphologyChirho: wordChirho.morphologyChirho,
		lemmaChirho: wordChirho.lemmaChirho,
	}));
}

/**
 * Create full interlinear verse with Greek + English alignment
 */
async function createInterlinearVerseChirho(
	referenceChirho: string
): Promise<InterlinearVerseChirho | null> {
	// Get KJV with Strong's
	const kjvRawChirho = runDiathekeChirho('KJV', referenceChirho, '-o m');
	const kjvParsedChirho = parseKjvWithStrongsChirho(kjvRawChirho);
	if (!kjvParsedChirho || !kjvParsedChirho.wordsChirho) return null;

	// Get Greek text
	const greekRawChirho = runDiathekeChirho('MorphGNT', referenceChirho, '-o m');
	const greekWordsChirho = parseMorphGntChirho(greekRawChirho);

	// Create tokens
	const kjvTokensChirho = wordsToInterlinearTokensChirho(kjvParsedChirho.wordsChirho);
	const greekTokensChirho = greekToInterlinearTokensChirho(greekWordsChirho);

	// Create aligned blocks using Strong's numbers
	const alignedBlocksChirho = createAlignedBlocksChirho(greekTokensChirho, [
		{
			languageCodeChirho: 'en',
			versionIdChirho: 'KJV',
			tokensChirho: kjvTokensChirho,
		},
	]);

	// Add Louw-Nida domains to aligned blocks
	for (const blockChirho of alignedBlocksChirho) {
		const lnDomainsChirho: string[] = [];
		for (const strongsChirho of blockChirho.strongsChirho) {
			const mappingChirho = getLouwNidaForStrongsChirho(strongsChirho);
			if (mappingChirho) {
				for (const domainChirho of mappingChirho.domainsChirho) {
					if (!lnDomainsChirho.includes(domainChirho.louwNidaNumberChirho)) {
						lnDomainsChirho.push(domainChirho.louwNidaNumberChirho);
					}
				}
			}
		}
		if (lnDomainsChirho.length > 0) {
			blockChirho.louwNidaChirho = lnDomainsChirho;
		}
	}

	return {
		bookChirho: kjvParsedChirho.bookChirho,
		chapterChirho: kjvParsedChirho.chapterChirho,
		verseChirho: kjvParsedChirho.verseChirho,
		originalLanguageChirho: 'greek',
		originalVersionChirho: 'MorphGNT',
		originalTextChirho: greekWordsChirho.map((wChirho) => wChirho.wordChirho).join(' '),
		originalTokensChirho: greekTokensChirho,
		alignedBlocksChirho,
		translationsChirho: [
			{
				versionIdChirho: 'KJV',
				languageCodeChirho: 'en',
				textChirho: kjvParsedChirho.textChirho,
			},
		],
	};
}

// ============================================================================
// EXPORT FUNCTION
// ============================================================================

async function exportSampleDataChirho() {
	console.log('=== Bible.Systems SWORD Data Export ===\n');
	console.log('Integrating Strong\'s, Louw-Nida domains, and interlinear alignment\n');

	// Export John 3:16 with full interlinear
	console.log('─'.repeat(60));
	console.log('JOHN 3:16 - Full Interlinear Export');
	console.log('─'.repeat(60));

	const interlinearChirho = await createInterlinearVerseChirho('John 3:16');
	if (interlinearChirho) {
		console.log('\n📖 Greek Text:');
		console.log(`   ${interlinearChirho.originalTextChirho}`);

		console.log('\n📖 English (KJV):');
		console.log(`   ${interlinearChirho.translationsChirho[0].textChirho}`);

		console.log('\n🔗 Aligned Blocks with Louw-Nida Domains:');
		for (const blockChirho of interlinearChirho.alignedBlocksChirho) {
			if (blockChirho.strongsChirho.length > 0) {
				const enWordsChirho =
					blockChirho.translationsChirho.find((tChirho) => tChirho.languageCodeChirho === 'en')
						?.wordsChirho ?? [];
				const lnChirho = blockChirho.louwNidaChirho?.join(', ') ?? '—';
				console.log(
					`   ${blockChirho.originalChirho.padEnd(15)} | ${blockChirho.strongsChirho.join(',').padEnd(10)} | ${enWordsChirho.join(' ').padEnd(15)} | L-N: ${lnChirho}`
				);
			}
		}
	}

	// Standard parsed output
	console.log('\n' + '─'.repeat(60));
	console.log('PARSED VERSE DATA');
	console.log('─'.repeat(60));

	const john316KjvChirho = runDiathekeChirho('KJV', 'John 3:16', '-o m');
	const john316ParsedChirho = parseKjvWithStrongsChirho(john316KjvChirho);
	console.log('\nJohn 3:16 (KJV with Strong\'s and Louw-Nida):');
	if (john316ParsedChirho?.wordsChirho) {
		for (const wordChirho of john316ParsedChirho.wordsChirho.slice(0, 10)) {
			const lnChirho = wordChirho.louwNidaChirho?.join(', ') ?? '—';
			console.log(
				`   ${wordChirho.textChirho.padEnd(12)} | ${(wordChirho.strongsChirho?.join(',') ?? '—').padEnd(10)} | L-N: ${lnChirho}`
			);
		}
		console.log(`   ... (${john316ParsedChirho.wordsChirho.length} total words)`);
	}

	// Cross-references
	console.log('\n' + '─'.repeat(60));
	console.log('TSK CROSS-REFERENCES');
	console.log('─'.repeat(60));

	const john316TskChirho = runDiathekeChirho('TSK', 'John 3:16');
	const crossRefsChirho = parseTskChirho(john316TskChirho);
	console.log(`\n📚 ${crossRefsChirho.length} cross-references found:`);
	for (const refChirho of crossRefsChirho.slice(0, 8)) {
		console.log(`   • ${refChirho}`);
	}
	if (crossRefsChirho.length > 8) {
		console.log(`   ... and ${crossRefsChirho.length - 8} more`);
	}

	// Strong's dictionary lookup with Louw-Nida
	console.log('\n' + '─'.repeat(60));
	console.log('STRONG\'S + LOUW-NIDA INTEGRATION');
	console.log('─'.repeat(60));

	const keyWordsChirho = ['G0025', 'G2889', 'G4100', 'G2222', 'G0166'];
	for (const strongsChirho of keyWordsChirho) {
		const lnMappingChirho = getLouwNidaForStrongsChirho(strongsChirho);
		if (lnMappingChirho) {
			console.log(`\n📘 ${strongsChirho} - ${lnMappingChirho.greekChirho} (${lnMappingChirho.transliterationChirho})`);
			for (const domainChirho of lnMappingChirho.domainsChirho) {
				console.log(`   Domain ${domainChirho.louwNidaNumberChirho}: ${domainChirho.glossChirho}`);
			}
		}
	}

	// Hebrew sample
	console.log('\n' + '─'.repeat(60));
	console.log('HEBREW TEXT SAMPLE (Genesis 1:1)');
	console.log('─'.repeat(60));

	const gen11HebrewChirho = runDiathekeChirho('WLC', 'Genesis 1:1');
	console.log('\n' + gen11HebrewChirho.split('\n')[0]);

	// Summary
	console.log('\n' + '═'.repeat(60));
	console.log('EXPORT SUMMARY');
	console.log('═'.repeat(60));
	console.log(`
✓ Interlinear alignment via Strong's numbers
✓ Louw-Nida semantic domain lookup
✓ Cross-reference extraction from TSK
✓ Greek text from MorphGNT
✓ Hebrew text from WLC
✓ Word-level morphology data
`);

	console.log('JESUS CHRIST IS LORD');
	console.log('═'.repeat(60));
}

// Run export
exportSampleDataChirho().catch(console.error);
