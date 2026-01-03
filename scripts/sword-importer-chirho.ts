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
 */

import { execSync } from 'child_process';

// Types for our data model
interface WordInstanceChirho {
	positionChirho: number;
	textChirho: string;
	strongsChirho?: string[];
	morphologyChirho?: string;
	lemmaChirho?: string;
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

// Utility to run diatheke
function runDiathekeChirho(moduleChirho: string, keyChirho: string, optionsChirho: string = ''): string {
	try {
		const cmdChirho = `diatheke -b ${moduleChirho} ${optionsChirho} -k "${keyChirho}" 2>/dev/null`;
		return execSync(cmdChirho, { encoding: 'utf-8' });
	} catch (errorChirho) {
		console.error(`Error running diatheke for ${moduleChirho}:`, errorChirho);
		return '';
	}
}

// Parse KJV output with Strong's numbers
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
				? strongsMatchesChirho.map((sChirho) => sChirho.replace('strong:', ''))
				: undefined;

			// Parse lemma
			const lemmaMatchChirho = savlmChirho.match(/lemma\.TR:(\S+)/);
			const lemmaChirho = lemmaMatchChirho ? lemmaMatchChirho[1] : undefined;

			wordsChirho.push({
				positionChirho: positionChirho++,
				textChirho,
				strongsChirho,
				lemmaChirho,
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

// Parse TSK cross-references
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

// Parse Strong's dictionary entry
function parseStrongsEntryChirho(rawTextChirho: string, languageChirho: 'greek' | 'hebrew'): StrongsEntryChirho | null {
	if (languageChirho === 'greek') {
		const matchChirho = rawTextChirho.match(
			/<entryFree n="(\d+)">\s*<orth>([^<]+)<\/orth>.*?<orth[^>]*type="trans">([^<]+)<\/orth>\s*<pron[^>]*>([^<]+)<\/pron>\s*<def>\s*([^<]+)/s
		);
		if (matchChirho) {
			return {
				numberChirho: `G${matchChirho[1].padStart(5, '0')}`,
				originalChirho: matchChirho[2],
				transliterationChirho: matchChirho[3],
				pronunciationChirho: matchChirho[4],
				definitionChirho: matchChirho[5].trim(),
				languageChirho: 'greek',
			};
		}
	} else {
		// Hebrew format is different
		const matchChirho = rawTextChirho.match(
			/(\d+)\s+(\S+)\s+(\S+)\s+([\s\S]+)/
		);
		if (matchChirho) {
			return {
				numberChirho: `H${matchChirho[1].padStart(5, '0')}`,
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

// Main export function
async function exportSampleDataChirho() {
	console.log('=== Bible.Systems SWORD Data Export ===\n');

	// Export John 3:16
	const john316KjvChirho = runDiathekeChirho('KJV', 'John 3:16', '-o m');
	const john316ParsedChirho = parseKjvWithStrongsChirho(john316KjvChirho);
	console.log('John 3:16 (parsed):');
	console.log(JSON.stringify(john316ParsedChirho, null, 2));

	// Export TSK cross-references
	const john316TskChirho = runDiathekeChirho('TSK', 'John 3:16');
	const crossRefsChirho = parseTskChirho(john316TskChirho);
	console.log('\nCross-references:');
	console.log(JSON.stringify(crossRefsChirho, null, 2));

	// Export Strong's G25 (agapao)
	const g25Chirho = runDiathekeChirho('StrongsGreek', '00025');
	const g25ParsedChirho = parseStrongsEntryChirho(g25Chirho, 'greek');
	console.log('\nStrong\'s G25:');
	console.log(JSON.stringify(g25ParsedChirho, null, 2));

	// Export Strong's H1254 (bara)
	const h1254Chirho = runDiathekeChirho('StrongsHebrew', '01254');
	const h1254ParsedChirho = parseStrongsEntryChirho(h1254Chirho, 'hebrew');
	console.log('\nStrong\'s H1254:');
	console.log(JSON.stringify(h1254ParsedChirho, null, 2));

	// Export Genesis 1:1 Hebrew
	const gen11HebrewChirho = runDiathekeChirho('WLC', 'Genesis 1:1');
	console.log('\nGenesis 1:1 (Hebrew):');
	console.log(gen11HebrewChirho);

	// Export MorphGNT Greek
	const john316GreekChirho = runDiathekeChirho('MorphGNT', 'John 3:16');
	console.log('\nJohn 3:16 (Greek):');
	console.log(john316GreekChirho);

	console.log('\n=== Export Complete ===');
}

// Run export
exportSampleDataChirho().catch(console.error);
