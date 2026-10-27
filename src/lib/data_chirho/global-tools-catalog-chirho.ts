// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

/**
 * What the Global Bible Tools platform publishes (global-tools.bible.systems and the SWORD module
 * repository), as shown on this site's homepage and features page. The source of truth is the
 * platform repo (andrewbeth-chirho/platform-chirho): the reader languages are the rows of
 * `language_stats_chirho` in the D1 database `bible-lang-meta-chirho`, the PDFs are the entries in
 * `workers-platform-chirho/src/lib/shared-chirho/pdf-downloads-chirho.ts`, and the SWORD languages
 * are the distinct `Lang=` values in `sword-repo-chirho/mods.d/*.conf`.
 * Update these numbers when a language, PDF or module is published there.
 */

/** Languages with an online interlinear reader. */
export const READER_LANGUAGE_COUNT_CHIRHO = 29;

/** Interlinear PDFs on the global-tools downloads page. */
export const INTERLINEAR_PDF_COUNT_CHIRHO = 35;

/**
 * Languages in the SWORD module repository (sword-modules-chirho.bible.systems). It has 29 modules:
 * Bengali and Hindi each have a terse and a readers edition.
 */
export const SWORD_MODULE_LANGUAGE_COUNT_CHIRHO = 27;

export interface FeaturedReaderLanguageChirho {
	codeChirho: string;
	flagChirho: string;
	nativeNameChirho: string;
}

/** Homepage reader cards. Each is a complete Bible (all 66 books glossed). */
export const FEATURED_READER_LANGUAGES_CHIRHO: readonly FeaturedReaderLanguageChirho[] = [
	{ codeChirho: 'eng', flagChirho: '🇺🇸', nativeNameChirho: 'English' },
	{ codeChirho: 'spa', flagChirho: '🇪🇸', nativeNameChirho: 'Español' },
	{ codeChirho: 'hin', flagChirho: '🇮🇳', nativeNameChirho: 'हिंदी' },
	{ codeChirho: 'rus', flagChirho: '🇷🇺', nativeNameChirho: 'Русский' },
	{ codeChirho: 'ben', flagChirho: '🇧🇩', nativeNameChirho: 'বাংলা' },
	{ codeChirho: 'swa', flagChirho: '🇰🇪', nativeNameChirho: 'Kiswahili' },
	{ codeChirho: 'tur', flagChirho: '🇹🇷', nativeNameChirho: 'Türkçe' },
	{ codeChirho: 'arb', flagChirho: '🇸🇦', nativeNameChirho: 'العربية' },
	{ codeChirho: 'zho', flagChirho: '🇨🇳', nativeNameChirho: '中文' },
	{ codeChirho: 'amh', flagChirho: '🇪🇹', nativeNameChirho: 'አማርኛ' },
	{ codeChirho: 'mya', flagChirho: '🇲🇲', nativeNameChirho: 'မြန်မာ' }
];
