// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

/**
 * Cross-Reference System for Bible.Systems
 *
 * Based on the Treasury of Scripture Knowledge (TSK), a public domain
 * compilation of over 500,000 cross-references between Bible verses.
 *
 * Format: Each verse can have multiple cross-references, organized by topic/theme.
 */

export interface CrossReferenceChirho {
	verse_chirho: string; // e.g., "Gen.1.1"
	references_chirho: ReferenceGroupChirho[];
}

export interface ReferenceGroupChirho {
	topic_chirho?: string; // Optional topic/theme for this group
	refs_chirho: string[]; // Array of verse references e.g., ["Psa.33.6", "Jhn.1.1-3"]
}

export interface VerseReferenceChirho {
	book_chirho: string;
	chapter_chirho: number;
	verse_start_chirho: number;
	verse_end_chirho?: number;
	text_preview_chirho?: string;
}

/** One reference as /api-chirho/cross-references-chirho returns it. */
export interface FormattedReferenceChirho {
	raw_chirho: string; // e.g., "Psa.33.6"
	formatted_chirho: string; // e.g., "Psalms 33:6"
}

/** data_chirho of a verse lookup on /api-chirho/cross-references-chirho. */
export interface VerseCrossReferencesChirho {
	verse_chirho: string;
	book_chirho: string;
	chapter_chirho: number;
	verse_number_chirho: number;
	cross_references_chirho: { topic_chirho: string | null; references_chirho: FormattedReferenceChirho[] }[];
	referenced_by_chirho: FormattedReferenceChirho[];
	total_references_chirho: number;
	total_topics_chirho: number;
}

/**
 * Sample cross-reference data for existing Bible chapters.
 * Key format: "BookAbbrev.Chapter.Verse" (e.g., "Gen.1.1")
 *
 * This is a foundational sample. Full TSK data contains 500,000+ cross-references.
 */
export const crossReferencesChirho: Record<string, ReferenceGroupChirho[]> = {
	// ============ GENESIS 1 ============
	'Gen.1.1': [
		{
			topic_chirho: 'The Beginning',
			refs_chirho: ['Jhn.1.1-3', 'Heb.1.10', 'Psa.33.6', 'Psa.90.2', 'Pro.8.22-24', 'Isa.40.21', 'Col.1.16-17']
		},
		{
			topic_chirho: 'God as Creator',
			refs_chirho: ['Neh.9.6', 'Job.38.4', 'Isa.44.24', 'Jer.10.12', 'Rev.4.11']
		}
	],
	'Gen.1.2': [
		{
			topic_chirho: 'The Spirit of God',
			refs_chirho: ['Job.26.13', 'Psa.104.30', 'Isa.40.13-14']
		},
		{
			topic_chirho: 'Void and Darkness',
			refs_chirho: ['Jer.4.23', 'Isa.45.18', 'Job.26.7']
		}
	],
	'Gen.1.3': [
		{
			topic_chirho: 'God Spoke Light',
			refs_chirho: ['Psa.33.6', 'Psa.33.9', '2Cor.4.6', 'Heb.11.3', '1Jhn.1.5']
		}
	],
	'Gen.1.26': [
		{
			topic_chirho: 'Image of God',
			refs_chirho: ['Gen.5.1', 'Gen.9.6', 'Eph.4.24', 'Col.3.10', '1Cor.11.7', 'Jas.3.9']
		},
		{
			topic_chirho: 'Dominion',
			refs_chirho: ['Gen.9.2', 'Psa.8.6-8', 'Heb.2.6-9']
		}
	],
	'Gen.1.27': [
		{
			topic_chirho: 'Male and Female',
			refs_chirho: ['Gen.5.2', 'Mat.19.4', 'Mrk.10.6', 'Gal.3.28']
		}
	],

	// ============ GENESIS 2 ============
	'Gen.2.7': [
		{
			topic_chirho: 'Breath of Life',
			refs_chirho: ['Gen.3.19', 'Job.33.4', 'Ecc.12.7', 'Isa.2.22', '1Cor.15.45']
		}
	],
	'Gen.2.18': [
		{
			topic_chirho: 'Not Good to Be Alone',
			refs_chirho: ['Pro.18.22', 'Ecc.4.9-12', '1Cor.11.9']
		}
	],
	'Gen.2.24': [
		{
			topic_chirho: 'Marriage',
			refs_chirho: ['Mat.19.5-6', 'Mrk.10.7-9', 'Eph.5.31', '1Cor.6.16']
		}
	],

	// ============ GENESIS 3 ============
	'Gen.3.1': [
		{
			topic_chirho: 'The Serpent',
			refs_chirho: ['Rev.12.9', 'Rev.20.2', '2Cor.11.3', 'Jhn.8.44']
		}
	],
	'Gen.3.15': [
		{
			topic_chirho: 'The First Gospel (Protoevangelium)',
			refs_chirho: ['Rom.16.20', 'Gal.4.4', 'Heb.2.14', '1Jhn.3.8', 'Rev.12.17']
		}
	],
	'Gen.3.19': [
		{
			topic_chirho: 'Return to Dust',
			refs_chirho: ['Gen.2.7', 'Ecc.12.7', 'Psa.104.29', 'Rom.5.12']
		}
	],

	// ============ PSALMS 1 ============
	'Psa.1.1': [
		{
			topic_chirho: 'Blessed',
			refs_chirho: ['Psa.32.1-2', 'Psa.112.1', 'Psa.119.1', 'Pro.4.14-15', 'Jer.15.17']
		}
	],
	'Psa.1.2': [
		{
			topic_chirho: 'Meditation on the Law',
			refs_chirho: ['Jos.1.8', 'Psa.19.7-10', 'Psa.119.97', 'Psa.119.148']
		}
	],
	'Psa.1.3': [
		{
			topic_chirho: 'Tree Planted by Waters',
			refs_chirho: ['Jer.17.8', 'Eze.47.12', 'Rev.22.2', 'Psa.92.12-14']
		}
	],

	// ============ PSALMS 23 ============
	'Psa.23.1': [
		{
			topic_chirho: 'The LORD is My Shepherd',
			refs_chirho: ['Jhn.10.11', 'Jhn.10.14', 'Heb.13.20', '1Pet.2.25', 'Isa.40.11', 'Eze.34.11-12']
		}
	],
	'Psa.23.2': [
		{
			topic_chirho: 'Green Pastures and Still Waters',
			refs_chirho: ['Eze.34.14', 'Rev.7.17', 'Isa.49.10']
		}
	],
	'Psa.23.4': [
		{
			topic_chirho: 'Valley of Death',
			refs_chirho: ['Job.3.5', 'Psa.44.19', 'Isa.9.2', 'Luk.1.79']
		},
		{
			topic_chirho: 'Fear No Evil',
			refs_chirho: ['Psa.3.6', 'Psa.27.1', 'Isa.43.2']
		}
	],
	'Psa.23.5': [
		{
			topic_chirho: 'Anointed with Oil',
			refs_chirho: ['Psa.45.7', 'Psa.92.10', 'Luk.7.46']
		},
		{
			topic_chirho: 'Cup Overflows',
			refs_chirho: ['Psa.16.5', 'Psa.116.13']
		}
	],
	'Psa.23.6': [
		{
			topic_chirho: 'Goodness and Mercy',
			refs_chirho: ['Psa.27.4', 'Psa.84.10']
		}
	],

	// ============ JOHN 1 ============
	'Jhn.1.1': [
		{
			topic_chirho: 'In the Beginning',
			refs_chirho: ['Gen.1.1', 'Pro.8.22-23', '1Jhn.1.1', 'Rev.1.2', 'Rev.19.13']
		},
		{
			topic_chirho: 'The Word',
			refs_chirho: ['Heb.1.1-2', '1Jhn.5.7', 'Rev.19.13']
		},
		{
			topic_chirho: 'The Word Was God',
			refs_chirho: ['Isa.9.6', 'Jhn.20.28', 'Rom.9.5', 'Tit.2.13', 'Heb.1.8', '1Jhn.5.20']
		}
	],
	'Jhn.1.3': [
		{
			topic_chirho: 'All Things Made by Him',
			refs_chirho: ['Gen.1.1', 'Psa.33.6', 'Eph.3.9', 'Col.1.16', 'Heb.1.2']
		}
	],
	'Jhn.1.4': [
		{
			topic_chirho: 'Life and Light',
			refs_chirho: ['Jhn.5.26', 'Jhn.8.12', 'Jhn.9.5', 'Jhn.11.25', 'Jhn.14.6', '1Jhn.5.11']
		}
	],
	'Jhn.1.14': [
		{
			topic_chirho: 'The Word Became Flesh',
			refs_chirho: ['Isa.7.14', 'Mat.1.16', 'Luk.1.31-35', 'Rom.1.3', 'Gal.4.4', 'Php.2.6-7', '1Tim.3.16', 'Heb.2.14']
		},
		{
			topic_chirho: 'Glory of the Only Begotten',
			refs_chirho: ['Jhn.2.11', 'Mat.17.2', '2Pet.1.17', 'Isa.40.5']
		}
	],
	'Jhn.1.29': [
		{
			topic_chirho: 'Lamb of God',
			refs_chirho: ['Exo.12.3', 'Isa.53.7', '1Pet.1.19', 'Rev.5.6', 'Rev.5.12']
		}
	],

	// ============ JOHN 3 ============
	'Jhn.3.3': [
		{
			topic_chirho: 'Born Again',
			refs_chirho: ['Jhn.3.5-7', 'Jhn.1.13', '1Pet.1.23', '1Jhn.3.9', 'Gal.6.15', 'Tit.3.5']
		}
	],
	'Jhn.3.14': [
		{
			topic_chirho: 'Serpent Lifted Up',
			refs_chirho: ['Num.21.8-9', 'Jhn.8.28', 'Jhn.12.32']
		}
	],
	'Jhn.3.16': [
		{
			topic_chirho: "God's Love for the World",
			refs_chirho: ['Rom.5.8', '1Jhn.4.9-10', 'Eph.2.4-5', 'Tit.3.4']
		},
		{
			topic_chirho: 'Only Begotten Son',
			refs_chirho: ['Jhn.1.14', 'Jhn.1.18', 'Jhn.3.18', '1Jhn.4.9', 'Heb.11.17']
		},
		{
			topic_chirho: 'Everlasting Life',
			refs_chirho: ['Jhn.3.36', 'Jhn.5.24', 'Jhn.6.40', 'Jhn.6.47', 'Jhn.10.28', 'Jhn.17.3', 'Rom.6.23', '1Jhn.5.11-13']
		}
	],
	'Jhn.3.17': [
		{
			topic_chirho: 'Not to Condemn but Save',
			refs_chirho: ['Jhn.5.45', 'Jhn.8.15', 'Jhn.12.47', 'Luk.9.56', '1Jhn.4.14']
		}
	],
	'Jhn.3.36': [
		{
			topic_chirho: 'Belief and Eternal Life',
			refs_chirho: ['Jhn.3.16', 'Jhn.5.24', 'Jhn.6.47', '1Jhn.5.10-12']
		},
		{
			topic_chirho: 'Wrath of God',
			refs_chirho: ['Rom.1.18', 'Eph.5.6', 'Col.3.6', 'Rev.6.16-17']
		}
	],

	// ============ ROMANS 8 ============
	'Rom.8.1': [
		{
			topic_chirho: 'No Condemnation',
			refs_chirho: ['Jhn.3.18', 'Jhn.5.24', 'Rom.5.16', 'Rom.8.33-34', 'Gal.3.13']
		}
	],
	'Rom.8.14': [
		{
			topic_chirho: 'Sons of God',
			refs_chirho: ['Gal.3.26', 'Gal.4.6', '1Jhn.3.1-2']
		}
	],
	'Rom.8.28': [
		{
			topic_chirho: 'All Things Work Together',
			refs_chirho: ['Gen.50.20', 'Jer.24.5-7', 'Eph.1.11', '2Tim.1.9']
		}
	],
	'Rom.8.31': [
		{
			topic_chirho: 'God Is for Us',
			refs_chirho: ['Num.14.9', 'Psa.56.9', 'Psa.118.6', 'Isa.8.10']
		}
	],
	'Rom.8.37': [
		{
			topic_chirho: 'More Than Conquerors',
			refs_chirho: ['1Cor.15.57', '2Cor.2.14', '1Jhn.4.4', '1Jhn.5.4-5', 'Rev.12.11']
		}
	],
	'Rom.8.38': [
		{
			topic_chirho: 'Nothing Can Separate Us',
			refs_chirho: ['Jhn.10.28-29', 'Rom.8.35', 'Eph.3.18-19', 'Php.1.21']
		}
	],

	// ============ PROVERBS 3 ============
	'Pro.3.5': [
		{
			topic_chirho: 'Trust in the LORD',
			refs_chirho: ['Psa.37.3', 'Psa.62.8', 'Psa.125.1', 'Isa.26.3-4', 'Jer.17.7-8']
		}
	],
	'Pro.3.6': [
		{
			topic_chirho: 'Acknowledge Him',
			refs_chirho: ['Psa.37.5', 'Isa.30.21', 'Jer.10.23']
		}
	],
	'Pro.3.9': [
		{
			topic_chirho: 'Honor the LORD',
			refs_chirho: ['Exo.23.19', 'Mal.3.10', 'Luk.14.13-14', '2Cor.9.6-7']
		}
	],
	'Pro.3.11': [
		{
			topic_chirho: "LORD's Discipline",
			refs_chirho: ['Job.5.17', 'Heb.12.5-6', 'Rev.3.19']
		}
	],

	// ============ MATTHEW 5 ============
	'Mat.5.3': [
		{
			topic_chirho: 'Poor in Spirit',
			refs_chirho: ['Psa.34.18', 'Psa.51.17', 'Isa.57.15', 'Isa.66.2', 'Luk.6.20']
		}
	],
	'Mat.5.4': [
		{
			topic_chirho: 'Those Who Mourn',
			refs_chirho: ['Psa.126.5-6', 'Isa.61.2-3', 'Luk.6.21', 'Rev.21.4']
		}
	],
	'Mat.5.5': [
		{
			topic_chirho: 'The Meek',
			refs_chirho: ['Psa.37.11', 'Isa.11.4', 'Mat.11.29', '1Pet.3.4']
		}
	],
	'Mat.5.6': [
		{
			topic_chirho: 'Hunger for Righteousness',
			refs_chirho: ['Psa.42.1-2', 'Psa.63.1', 'Isa.55.1-2', 'Jhn.6.35']
		}
	],
	'Mat.5.8': [
		{
			topic_chirho: 'Pure in Heart',
			refs_chirho: ['Psa.24.4', 'Psa.73.1', 'Heb.12.14', '1Jhn.3.2-3']
		}
	],
	'Mat.5.14': [
		{
			topic_chirho: 'Light of the World',
			refs_chirho: ['Jhn.8.12', 'Eph.5.8', 'Php.2.15', '1Th.5.5']
		}
	],
	'Mat.5.16': [
		{
			topic_chirho: 'Let Your Light Shine',
			refs_chirho: ['1Pet.2.12', 'Eph.5.8-9', 'Php.2.15', 'Tit.2.14']
		}
	],
	'Mat.5.44': [
		{
			topic_chirho: 'Love Your Enemies',
			refs_chirho: ['Luk.6.27-28', 'Luk.23.34', 'Act.7.60', 'Rom.12.20', '1Pet.3.9']
		}
	]
};

/**
 * Parse a verse reference string into its components.
 * Handles formats like "Gen.1.1", "Jhn.3.16-17", "Psa.23.1"
 */
export function parseReferenceChirho(refChirho: string): VerseReferenceChirho | null {
	const matchChirho = refChirho.match(/^([A-Za-z1-3]+)\.(\d+)\.(\d+)(?:-(\d+))?$/);
	if (!matchChirho) return null;

	return {
		book_chirho: matchChirho[1],
		chapter_chirho: parseInt(matchChirho[2], 10),
		verse_start_chirho: parseInt(matchChirho[3], 10),
		verse_end_chirho: matchChirho[4] ? parseInt(matchChirho[4], 10) : undefined
	};
}

/**
 * Get cross-references for a specific verse.
 */
export function getCrossReferencesChirho(
	bookChirho: string,
	chapterChirho: number,
	verseChirho: number
): ReferenceGroupChirho[] {
	const keyChirho = `${bookChirho}.${chapterChirho}.${verseChirho}`;
	return crossReferencesChirho[keyChirho] || [];
}

/**
 * Get all verses that reference a specific verse (reverse lookup).
 */
export function getReferencingVersesChirho(
	bookChirho: string,
	chapterChirho: number,
	verseChirho: number
): string[] {
	const targetChirho = `${bookChirho}.${chapterChirho}.${verseChirho}`;
	const referencingChirho: string[] = [];

	for (const [verseKeyChirho, groupsChirho] of Object.entries(crossReferencesChirho)) {
		for (const groupChirho of groupsChirho) {
			for (const refChirho of groupChirho.refs_chirho) {
				// Check if this reference matches our target
				const parsedChirho = parseReferenceChirho(refChirho);
				if (parsedChirho) {
					const refKeyChirho = `${parsedChirho.book_chirho}.${parsedChirho.chapter_chirho}.${parsedChirho.verse_start_chirho}`;
					if (refKeyChirho === targetChirho || refChirho.startsWith(targetChirho)) {
						if (!referencingChirho.includes(verseKeyChirho)) {
							referencingChirho.push(verseKeyChirho);
						}
					}
				}
			}
		}
	}

	return referencingChirho;
}

/**
 * Book abbreviation mappings for display and lookup.
 */
export const bookAbbreviationsChirho: Record<string, string> = {
	Gen: 'Genesis',
	Exo: 'Exodus',
	Lev: 'Leviticus',
	Num: 'Numbers',
	Deu: 'Deuteronomy',
	Jos: 'Joshua',
	Jdg: 'Judges',
	Rut: 'Ruth',
	'1Sa': '1 Samuel',
	'2Sa': '2 Samuel',
	'1Ki': '1 Kings',
	'2Ki': '2 Kings',
	'1Ch': '1 Chronicles',
	'2Ch': '2 Chronicles',
	Ezr: 'Ezra',
	Neh: 'Nehemiah',
	Est: 'Esther',
	Job: 'Job',
	Psa: 'Psalms',
	Pro: 'Proverbs',
	Ecc: 'Ecclesiastes',
	Son: 'Song of Solomon',
	Isa: 'Isaiah',
	Jer: 'Jeremiah',
	Lam: 'Lamentations',
	Eze: 'Ezekiel',
	Dan: 'Daniel',
	Hos: 'Hosea',
	Joe: 'Joel',
	Amo: 'Amos',
	Oba: 'Obadiah',
	Jon: 'Jonah',
	Mic: 'Micah',
	Nah: 'Nahum',
	Hab: 'Habakkuk',
	Zep: 'Zephaniah',
	Hag: 'Haggai',
	Zec: 'Zechariah',
	Mal: 'Malachi',
	Mat: 'Matthew',
	Mrk: 'Mark',
	Luk: 'Luke',
	Jhn: 'John',
	Act: 'Acts',
	Rom: 'Romans',
	'1Cor': '1 Corinthians',
	'2Cor': '2 Corinthians',
	Gal: 'Galatians',
	Eph: 'Ephesians',
	Php: 'Philippians',
	Col: 'Colossians',
	'1Th': '1 Thessalonians',
	'2Th': '2 Thessalonians',
	'1Tim': '1 Timothy',
	'2Tim': '2 Timothy',
	Tit: 'Titus',
	Phm: 'Philemon',
	Heb: 'Hebrews',
	Jas: 'James',
	'1Pet': '1 Peter',
	'2Pet': '2 Peter',
	'1Jhn': '1 John',
	'2Jhn': '2 John',
	'3Jhn': '3 John',
	Jud: 'Jude',
	Rev: 'Revelation'
};

/**
 * Format a reference for display.
 */
export function formatReferenceChirho(refChirho: string): string {
	const parsedChirho = parseReferenceChirho(refChirho);
	if (!parsedChirho) return refChirho;

	const bookNameChirho = bookAbbreviationsChirho[parsedChirho.book_chirho] || parsedChirho.book_chirho;
	const verseRangeChirho = parsedChirho.verse_end_chirho
		? `${parsedChirho.verse_start_chirho}-${parsedChirho.verse_end_chirho}`
		: `${parsedChirho.verse_start_chirho}`;

	return `${bookNameChirho} ${parsedChirho.chapter_chirho}:${verseRangeChirho}`;
}

/**
 * Get statistics about the cross-reference database.
 */
export function getCrossReferenceStatsChirho(): {
	total_verses_chirho: number;
	total_references_chirho: number;
	total_topics_chirho: number;
} {
	let totalRefsChirho = 0;
	let totalTopicsChirho = 0;

	for (const groupsChirho of Object.values(crossReferencesChirho)) {
		for (const groupChirho of groupsChirho) {
			totalRefsChirho += groupChirho.refs_chirho.length;
			if (groupChirho.topic_chirho) totalTopicsChirho++;
		}
	}

	return {
		total_verses_chirho: Object.keys(crossReferencesChirho).length,
		total_references_chirho: totalRefsChirho,
		total_topics_chirho: totalTopicsChirho
	};
}

// JESUS CHRIST IS LORD
