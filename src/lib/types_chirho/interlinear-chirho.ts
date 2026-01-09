// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

/**
 * Interlinear Bible Types for Bible.Systems
 *
 * Creates interlinear text between ANY two languages using Strong's numbers
 * as the universal linking mechanism.
 *
 * Based on the bible_interlinear_maker_chirho approach:
 * - N:M word mapping (one word can have multiple Strong's; one Strong's maps to multiple words)
 * - Language-agnostic alignment
 * - Support for Hebrew/Greek to any modern language
 * - Cross-translation interlinear (e.g., Spanish/English)
 */

// ============================================================================
// CORE TOKEN TYPES
// ============================================================================

/**
 * A token representing one or more words linked by Strong's numbers
 * This is the fundamental unit for interlinear alignment
 */
export interface InterlinearTokenChirho {
	// Strong's numbers linking this token (can be multiple for compound concepts)
	strongsChirho: string[]; // e.g., ["G3588", "G2316"] for "the God"

	// The actual words in this token
	wordsChirho: string[]; // e.g., ["the", "God"] or ["τὸν", "θεόν"]

	// Position in verse
	positionChirho: number;

	// Morphology (if available from original language)
	morphologyChirho?: string; // e.g., "T-ASM N-ASM"

	// Lemma (dictionary form)
	lemmaChirho?: string; // e.g., "ὁ θεός"
}

/**
 * An aligned block showing correspondence between languages
 */
export interface AlignedBlockChirho {
	// Original language text (Hebrew/Greek/Aramaic)
	originalChirho: string;

	// Strong's numbers for this block
	strongsChirho: string[];

	// Target language translations (can be multiple words)
	translationsChirho: {
		languageCodeChirho: string; // e.g., "en", "es", "zh"
		versionIdChirho: string; // e.g., "KJV", "SpaRV1909"
		wordsChirho: string[];
	}[];

	// Morphology data
	morphologyChirho?: string;
	lemmaChirho?: string;
	transliterationChirho?: string;

	// Semantic domain (Louw-Nida)
	louwNidaChirho?: string[];
}

/**
 * Full interlinear verse with multiple language alignments
 */
export interface InterlinearVerseChirho {
	// Reference
	bookChirho: string;
	chapterChirho: number;
	verseChirho: number;

	// Original language data
	originalLanguageChirho: 'hebrew' | 'greek' | 'aramaic';
	originalVersionChirho: string; // e.g., "WLC", "MorphGNT", "OSHB"
	originalTextChirho: string; // Full original text

	// Tokenized original
	originalTokensChirho: InterlinearTokenChirho[];

	// Aligned blocks with all translations
	alignedBlocksChirho: AlignedBlockChirho[];

	// Full translations (for reference/fallback)
	translationsChirho: {
		versionIdChirho: string;
		languageCodeChirho: string;
		textChirho: string;
	}[];
}

// ============================================================================
// ALIGNMENT FUNCTIONS
// ============================================================================

/**
 * Parse Strong's numbers from a raw string
 * Handles formats: <H1234>, <G5678>, H1234, G5678
 */
export function parseStrongsFromTextChirho(textChirho: string): string[] {
	const strongsPatternChirho = /<([GgHh]\d+)>|([GgHh]\d+)/g;
	const matchesChirho: string[] = [];
	let matchChirho;

	while ((matchChirho = strongsPatternChirho.exec(textChirho)) !== null) {
		const strongsChirho = (matchChirho[1] || matchChirho[2]).toUpperCase();
		if (!matchesChirho.includes(strongsChirho)) {
			matchesChirho.push(strongsChirho);
		}
	}

	return matchesChirho;
}

/**
 * Normalize Strong's number to standard format (G0025, H1234)
 */
export function normalizeStrongsChirho(strongsChirho: string): string {
	const cleanedChirho = strongsChirho.replace(/[<>]/g, '').toUpperCase();
	const matchChirho = cleanedChirho.match(/^([GH])(\d+)$/);

	if (matchChirho) {
		const prefixChirho = matchChirho[1];
		const numberChirho = matchChirho[2].padStart(4, '0');
		return `${prefixChirho}${numberChirho}`;
	}

	return cleanedChirho;
}

/**
 * Find matching Strong's numbers between two token sets
 * Returns indices of matching tokens
 */
export function findStrongsMatchesChirho(
	tokens1Chirho: InterlinearTokenChirho[],
	tokens2Chirho: InterlinearTokenChirho[]
): Array<{ index1Chirho: number; index2Chirho: number; matchingStrongsChirho: string[] }> {
	const matchesChirho: Array<{
		index1Chirho: number;
		index2Chirho: number;
		matchingStrongsChirho: string[];
	}> = [];

	for (let i1Chirho = 0; i1Chirho < tokens1Chirho.length; i1Chirho++) {
		const strongs1Chirho = new Set(tokens1Chirho[i1Chirho].strongsChirho);

		for (let i2Chirho = 0; i2Chirho < tokens2Chirho.length; i2Chirho++) {
			const matchingChirho = tokens2Chirho[i2Chirho].strongsChirho.filter((sChirho) =>
				strongs1Chirho.has(sChirho)
			);

			if (matchingChirho.length > 0) {
				matchesChirho.push({
					index1Chirho: i1Chirho,
					index2Chirho: i2Chirho,
					matchingStrongsChirho: matchingChirho,
				});
			}
		}
	}

	return matchesChirho;
}

/**
 * Create aligned blocks from original and translation tokens
 */
export function createAlignedBlocksChirho(
	originalTokensChirho: InterlinearTokenChirho[],
	translationDataChirho: Array<{
		languageCodeChirho: string;
		versionIdChirho: string;
		tokensChirho: InterlinearTokenChirho[];
	}>
): AlignedBlockChirho[] {
	const blocksChirho: AlignedBlockChirho[] = [];

	for (const originalTokenChirho of originalTokensChirho) {
		const blockChirho: AlignedBlockChirho = {
			originalChirho: originalTokenChirho.wordsChirho.join(' '),
			strongsChirho: originalTokenChirho.strongsChirho,
			translationsChirho: [],
			morphologyChirho: originalTokenChirho.morphologyChirho,
			lemmaChirho: originalTokenChirho.lemmaChirho,
		};

		// Find matching words in each translation
		for (const translationChirho of translationDataChirho) {
			const matchingTokensChirho = translationChirho.tokensChirho.filter((tChirho) =>
				tChirho.strongsChirho.some((sChirho) => originalTokenChirho.strongsChirho.includes(sChirho))
			);

			const wordsChirho = matchingTokensChirho.flatMap((tChirho) => tChirho.wordsChirho);

			blockChirho.translationsChirho.push({
				languageCodeChirho: translationChirho.languageCodeChirho,
				versionIdChirho: translationChirho.versionIdChirho,
				wordsChirho: wordsChirho.length > 0 ? wordsChirho : ['—'], // Em dash for untranslated
			});
		}

		blocksChirho.push(blockChirho);
	}

	return blocksChirho;
}

// ============================================================================
// SUPPORTED LANGUAGES AND VERSIONS
// ============================================================================

export interface BibleVersionInfoChirho {
	idChirho: string;
	nameChirho: string;
	languageCodeChirho: string;
	languageNameChirho: string;
	hasStrongsChirho: boolean;
	testamentChirho: 'ot' | 'nt' | 'both';
	licenseChirho: string;
}

export const INTERLINEAR_VERSIONS_CHIRHO: BibleVersionInfoChirho[] = [
	// Original Languages
	{
		idChirho: 'WLC',
		nameChirho: 'Westminster Leningrad Codex',
		languageCodeChirho: 'he',
		languageNameChirho: 'Hebrew',
		hasStrongsChirho: true,
		testamentChirho: 'ot',
		licenseChirho: 'public_domain',
	},
	{
		idChirho: 'MorphGNT',
		nameChirho: 'Morphological Greek NT',
		languageCodeChirho: 'grc',
		languageNameChirho: 'Greek',
		hasStrongsChirho: true,
		testamentChirho: 'nt',
		licenseChirho: 'CC-BY-SA',
	},
	{
		idChirho: 'LXX',
		nameChirho: 'Septuagint',
		languageCodeChirho: 'grc',
		languageNameChirho: 'Greek',
		hasStrongsChirho: true,
		testamentChirho: 'ot',
		licenseChirho: 'public_domain',
	},

	// English
	{
		idChirho: 'KJV',
		nameChirho: 'King James Version',
		languageCodeChirho: 'en',
		languageNameChirho: 'English',
		hasStrongsChirho: true,
		testamentChirho: 'both',
		licenseChirho: 'public_domain',
	},
	{
		idChirho: 'ASV',
		nameChirho: 'American Standard Version',
		languageCodeChirho: 'en',
		languageNameChirho: 'English',
		hasStrongsChirho: false,
		testamentChirho: 'both',
		licenseChirho: 'public_domain',
	},

	// Spanish
	{
		idChirho: 'SpaRV1909',
		nameChirho: 'Reina-Valera 1909',
		languageCodeChirho: 'es',
		languageNameChirho: 'Spanish',
		hasStrongsChirho: true,
		testamentChirho: 'both',
		licenseChirho: 'public_domain',
	},

	// More can be added...
];

// ============================================================================
// VERSE NUMBER MAPPING (for Hebrew/Modern differences)
// ============================================================================

/**
 * Some books have different verse numbering between Hebrew and modern translations
 * This maps Hebrew verse numbers to their modern equivalents
 */
export const VERSE_NUMBER_MAPPINGS_CHIRHO: Record<string, Record<string, string>> = {
	// Genesis 32 - Hebrew starts at 32:1, but in many English Bibles 31:55 = Hebrew 32:1
	Genesis: {
		'32:1': '31:55', // Hebrew 32:1 = English 31:55
		'32:2': '32:1',
		'32:3': '32:2',
		// ... continues
	},

	// Psalms titles are often verse 1 in Hebrew but verse 0/unnumbered in English
	Psalms: {
		// Most psalms with titles
		'3:1': 'title',
		'3:2': '3:1',
		// ... continues for many psalms
	},

	// Malachi
	Malachi: {
		'3:19': '4:1', // Hebrew Malachi 3:19-24 = English Malachi 4:1-6
		'3:20': '4:2',
		'3:21': '4:3',
		'3:22': '4:4',
		'3:23': '4:5',
		'3:24': '4:6',
	},
};

/**
 * Get the equivalent verse reference in another versification system
 */
export function mapVerseReferenceChirho(
	bookChirho: string,
	verseRefChirho: string,
	fromSystemChirho: 'hebrew' | 'modern'
): string {
	const bookMappingsChirho = VERSE_NUMBER_MAPPINGS_CHIRHO[bookChirho];
	if (!bookMappingsChirho) return verseRefChirho;

	if (fromSystemChirho === 'hebrew') {
		return bookMappingsChirho[verseRefChirho] ?? verseRefChirho;
	} else {
		// Reverse lookup
		for (const [hebrewChirho, modernChirho] of Object.entries(bookMappingsChirho)) {
			if (modernChirho === verseRefChirho) return hebrewChirho;
		}
		return verseRefChirho;
	}
}

// ============================================================================
// ALPHABET REFERENCES (for learning)
// ============================================================================

export const HEBREW_ALPHABET_CHIRHO = [
	{ letterChirho: 'א', soundChirho: "'", nameChirho: 'Aleph', valueChirho: 1 },
	{ letterChirho: 'ב', soundChirho: 'b/v', nameChirho: 'Bet', valueChirho: 2 },
	{ letterChirho: 'ג', soundChirho: 'g', nameChirho: 'Gimel', valueChirho: 3 },
	{ letterChirho: 'ד', soundChirho: 'd', nameChirho: 'Dalet', valueChirho: 4 },
	{ letterChirho: 'ה', soundChirho: 'h', nameChirho: 'He', valueChirho: 5 },
	{ letterChirho: 'ו', soundChirho: 'v/w', nameChirho: 'Vav', valueChirho: 6 },
	{ letterChirho: 'ז', soundChirho: 'z', nameChirho: 'Zayin', valueChirho: 7 },
	{ letterChirho: 'ח', soundChirho: 'ch', nameChirho: 'Chet', valueChirho: 8 },
	{ letterChirho: 'ט', soundChirho: 't', nameChirho: 'Tet', valueChirho: 9 },
	{ letterChirho: 'י', soundChirho: 'y', nameChirho: 'Yod', valueChirho: 10 },
	{ letterChirho: 'כ', soundChirho: 'k/ch', nameChirho: 'Kaf', valueChirho: 20 },
	{ letterChirho: 'ל', soundChirho: 'l', nameChirho: 'Lamed', valueChirho: 30 },
	{ letterChirho: 'מ', soundChirho: 'm', nameChirho: 'Mem', valueChirho: 40 },
	{ letterChirho: 'נ', soundChirho: 'n', nameChirho: 'Nun', valueChirho: 50 },
	{ letterChirho: 'ס', soundChirho: 's', nameChirho: 'Samekh', valueChirho: 60 },
	{ letterChirho: 'ע', soundChirho: "'", nameChirho: 'Ayin', valueChirho: 70 },
	{ letterChirho: 'פ', soundChirho: 'p/f', nameChirho: 'Pe', valueChirho: 80 },
	{ letterChirho: 'צ', soundChirho: 'ts', nameChirho: 'Tsade', valueChirho: 90 },
	{ letterChirho: 'ק', soundChirho: 'q', nameChirho: 'Qof', valueChirho: 100 },
	{ letterChirho: 'ר', soundChirho: 'r', nameChirho: 'Resh', valueChirho: 200 },
	{ letterChirho: 'ש', soundChirho: 'sh/s', nameChirho: 'Shin', valueChirho: 300 },
	{ letterChirho: 'ת', soundChirho: 't', nameChirho: 'Tav', valueChirho: 400 },
];

export const GREEK_ALPHABET_CHIRHO = [
	{ letterChirho: 'Α α', soundChirho: 'a', nameChirho: 'Alpha' },
	{ letterChirho: 'Β β', soundChirho: 'b', nameChirho: 'Beta' },
	{ letterChirho: 'Γ γ', soundChirho: 'g', nameChirho: 'Gamma' },
	{ letterChirho: 'Δ δ', soundChirho: 'd', nameChirho: 'Delta' },
	{ letterChirho: 'Ε ε', soundChirho: 'e', nameChirho: 'Epsilon' },
	{ letterChirho: 'Ζ ζ', soundChirho: 'z', nameChirho: 'Zeta' },
	{ letterChirho: 'Η η', soundChirho: 'ē', nameChirho: 'Eta' },
	{ letterChirho: 'Θ θ', soundChirho: 'th', nameChirho: 'Theta' },
	{ letterChirho: 'Ι ι', soundChirho: 'i', nameChirho: 'Iota' },
	{ letterChirho: 'Κ κ', soundChirho: 'k', nameChirho: 'Kappa' },
	{ letterChirho: 'Λ λ', soundChirho: 'l', nameChirho: 'Lambda' },
	{ letterChirho: 'Μ μ', soundChirho: 'm', nameChirho: 'Mu' },
	{ letterChirho: 'Ν ν', soundChirho: 'n', nameChirho: 'Nu' },
	{ letterChirho: 'Ξ ξ', soundChirho: 'x', nameChirho: 'Xi' },
	{ letterChirho: 'Ο ο', soundChirho: 'o', nameChirho: 'Omicron' },
	{ letterChirho: 'Π π', soundChirho: 'p', nameChirho: 'Pi' },
	{ letterChirho: 'Ρ ρ', soundChirho: 'r', nameChirho: 'Rho' },
	{ letterChirho: 'Σ σ/ς', soundChirho: 's', nameChirho: 'Sigma' },
	{ letterChirho: 'Τ τ', soundChirho: 't', nameChirho: 'Tau' },
	{ letterChirho: 'Υ υ', soundChirho: 'u/y', nameChirho: 'Upsilon' },
	{ letterChirho: 'Φ φ', soundChirho: 'ph', nameChirho: 'Phi' },
	{ letterChirho: 'Χ χ', soundChirho: 'ch', nameChirho: 'Chi' },
	{ letterChirho: 'Ψ ψ', soundChirho: 'ps', nameChirho: 'Psi' },
	{ letterChirho: 'Ω ω', soundChirho: 'ō', nameChirho: 'Omega' },
];
