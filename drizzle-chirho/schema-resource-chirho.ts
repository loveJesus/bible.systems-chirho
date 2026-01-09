// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

/**
 * D1 Resource Shard Database Schema
 *
 * This schema is used in each bible-res-XX-chirho shard to store:
 * - Bible verses with word-level data
 * - Cross-references
 * - Lexicon entries
 * - Commentary content
 */

import { sqliteTable, text, integer, real, index } from 'drizzle-orm/sqlite-core';

// ============================================================================
// BIBLE VERSES
// ============================================================================

/**
 * Core verse storage with full text
 */
export const versesChirho = sqliteTable(
	'verses_chirho',
	{
		idChirho: text('id_chirho').primaryKey(), // "kjv:gen:1:1"
		versionIdChirho: text('version_id_chirho').notNull(), // "kjv"
		bookIdChirho: text('book_id_chirho').notNull(), // "gen"
		chapterChirho: integer('chapter_chirho').notNull(),
		verseChirho: integer('verse_chirho').notNull(),
		textChirho: text('text_chirho').notNull(), // Full verse text
		textOriginalChirho: text('text_original_chirho'), // Hebrew/Greek if available
		wordCountChirho: integer('word_count_chirho'),
	},
	(tableChirho) => [
		index('idx_verse_version_chirho').on(tableChirho.versionIdChirho),
		index('idx_verse_book_chirho').on(tableChirho.bookIdChirho),
		index('idx_verse_ref_chirho').on(
			tableChirho.versionIdChirho,
			tableChirho.bookIdChirho,
			tableChirho.chapterChirho
		),
	]
);

// ============================================================================
// WORD-LEVEL DATA
// ============================================================================

/**
 * Every word in every verse with full linguistic data
 */
export const wordInstancesChirho = sqliteTable(
	'word_instances_chirho',
	{
		idChirho: text('id_chirho').primaryKey(), // "kjv:gen:1:1:1"
		verseIdChirho: text('verse_id_chirho')
			.notNull()
			.references(() => versesChirho.idChirho),
		positionChirho: integer('position_chirho').notNull(),
		textChirho: text('text_chirho').notNull(), // Surface form
		lemmaChirho: text('lemma_chirho'), // Dictionary form
		originalTextChirho: text('original_text_chirho'), // Hebrew/Greek
		transliterationChirho: text('transliteration_chirho'),
		strongsChirho: text('strongs_chirho'), // Comma-separated: "G3588,G2316"
		morphologyChirho: text('morphology_chirho'), // Robinson/OSHM code
		louwNidaChirho: text('louw_nida_chirho'), // Comma-separated domain refs
	},
	(tableChirho) => [
		index('idx_word_verse_chirho').on(tableChirho.verseIdChirho),
		index('idx_word_strongs_chirho').on(tableChirho.strongsChirho),
		index('idx_word_lemma_chirho').on(tableChirho.lemmaChirho),
	]
);

// ============================================================================
// CROSS-REFERENCES
// ============================================================================

/**
 * Cross-references with provenance tracking
 */
export const crossReferencesChirho = sqliteTable(
	'cross_references_chirho',
	{
		idChirho: text('id_chirho').primaryKey(),
		fromVerseChirho: text('from_verse_chirho').notNull(), // "gen:1:1"
		toVerseChirho: text('to_verse_chirho').notNull(), // "jhn:1:1"
		sourceChirho: text('source_chirho', {
			enum: ['tsk', 'scripture_quotation', 'allusion', 'parallel', 'typology', 'commentary', 'user'],
		}).notNull(),
		typeChirho: text('type_chirho', {
			enum: ['direct_quote', 'allusion', 'parallel', 'thematic', 'typological', 'contrast'],
		}),
		confidenceChirho: real('confidence_chirho').default(1.0),
		attributionChirho: text('attribution_chirho'), // JSON array of attributions
	},
	(tableChirho) => [
		index('idx_xref_from_chirho').on(tableChirho.fromVerseChirho),
		index('idx_xref_to_chirho').on(tableChirho.toVerseChirho),
	]
);

// ============================================================================
// LEXICON ENTRIES
// ============================================================================

/**
 * Strong's and other lexicon entries
 */
export const lexiconEntriesChirho = sqliteTable(
	'lexicon_entries_chirho',
	{
		idChirho: text('id_chirho').primaryKey(), // "strongs:G0025"
		lexiconIdChirho: text('lexicon_id_chirho').notNull(), // "strongs", "bdb", "thayer"
		entryKeyChirho: text('entry_key_chirho').notNull(), // "G0025"
		originalWordChirho: text('original_word_chirho'), // ἀγαπάω
		transliterationChirho: text('transliteration_chirho'),
		pronunciationChirho: text('pronunciation_chirho'),
		shortDefChirho: text('short_def_chirho'),
		fullDefChirho: text('full_def_chirho'),
		etymologyChirho: text('etymology_chirho'),
		languageChirho: text('language_chirho', { enum: ['greek', 'hebrew', 'aramaic'] }),
		louwNidaDomainsChirho: text('louw_nida_domains_chirho'), // JSON array
		relatedEntriesChirho: text('related_entries_chirho'), // JSON array of related Strong's
	},
	(tableChirho) => [
		index('idx_lex_key_chirho').on(tableChirho.entryKeyChirho),
		index('idx_lex_lexicon_chirho').on(tableChirho.lexiconIdChirho),
	]
);

// ============================================================================
// COMMENTARY SECTIONS
// ============================================================================

/**
 * Commentary content stored by section
 */
export const commentarySectionsChirho = sqliteTable(
	'commentary_sections_chirho',
	{
		idChirho: text('id_chirho').primaryKey(), // "mhc:gen:1:1"
		commentaryIdChirho: text('commentary_id_chirho').notNull(), // "mhc"
		bookIdChirho: text('book_id_chirho').notNull(),
		chapterChirho: integer('chapter_chirho').notNull(),
		verseStartChirho: integer('verse_start_chirho'),
		verseEndChirho: integer('verse_end_chirho'),
		contentChirho: text('content_chirho').notNull(), // Commentary text (may be large)
		authorChirho: text('author_chirho'),
	},
	(tableChirho) => [
		index('idx_comm_ref_chirho').on(
			tableChirho.commentaryIdChirho,
			tableChirho.bookIdChirho,
			tableChirho.chapterChirho
		),
	]
);

// ============================================================================
// LOUW-NIDA DOMAINS
// ============================================================================

/**
 * Louw-Nida semantic domain definitions
 */
export const louwNidaDomainsChirho = sqliteTable('louw_nida_domains_chirho', {
	domainIdChirho: text('domain_id_chirho').primaryKey(), // "25"
	nameChirho: text('name_chirho').notNull(),
	categoryChirho: text('category_chirho'),
	descriptionChirho: text('description_chirho'),
});

/**
 * Strong's to Louw-Nida mappings
 */
export const strongsLouwNidaChirho = sqliteTable(
	'strongs_louw_nida_chirho',
	{
		idChirho: text('id_chirho').primaryKey(), // "G0025:25.43"
		strongsChirho: text('strongs_chirho').notNull(), // "G0025"
		louwNidaNumberChirho: text('louw_nida_number_chirho').notNull(), // "25.43"
		domainIdChirho: text('domain_id_chirho')
			.notNull()
			.references(() => louwNidaDomainsChirho.domainIdChirho),
		glossChirho: text('gloss_chirho').notNull(),
		definitionChirho: text('definition_chirho'),
	},
	(tableChirho) => [
		index('idx_sln_strongs_chirho').on(tableChirho.strongsChirho),
		index('idx_sln_domain_chirho').on(tableChirho.domainIdChirho),
	]
);

// ============================================================================
// TYPES
// ============================================================================

export type VerseChirho = typeof versesChirho.$inferSelect;
export type NewVerseChirho = typeof versesChirho.$inferInsert;

export type WordInstanceChirho = typeof wordInstancesChirho.$inferSelect;
export type NewWordInstanceChirho = typeof wordInstancesChirho.$inferInsert;

export type CrossReferenceChirho = typeof crossReferencesChirho.$inferSelect;
export type NewCrossReferenceChirho = typeof crossReferencesChirho.$inferInsert;

export type LexiconEntryChirho = typeof lexiconEntriesChirho.$inferSelect;
export type NewLexiconEntryChirho = typeof lexiconEntriesChirho.$inferInsert;

export type CommentarySectionChirho = typeof commentarySectionsChirho.$inferSelect;
export type NewCommentarySectionChirho = typeof commentarySectionsChirho.$inferInsert;

export type LouwNidaDomainChirho = typeof louwNidaDomainsChirho.$inferSelect;
export type StrongsLouwNidaChirho = typeof strongsLouwNidaChirho.$inferSelect;
