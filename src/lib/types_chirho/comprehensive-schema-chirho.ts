// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

/**
 * Comprehensive Bible Data Schema for Bible.Systems
 *
 * This schema supports Logos-level features and beyond:
 * - Word-level morphological analysis
 * - Louw-Nida semantic domains
 * - Syntax trees and discourse analysis
 * - Text-critical apparatus (manuscript variants)
 * - Cross-reference provenance
 * - Commentary integration
 * - Timeline and geography
 * - Entity tracking (persons, places, events)
 * - Theological concept mapping
 */

// ============================================================================
// CORE IDENTIFIERS
// ============================================================================

export interface BibleReferenceChirho {
	bookIdChirho: string; // e.g., "GEN", "MAT", "REV"
	chapterChirho: number;
	verseChirho: number;
	wordPositionChirho?: number; // Optional word-level reference
}

export interface CanonicalIdChirho {
	// Unique identifier for any Bible location
	osisIdChirho: string; // e.g., "John.3.16" (OSIS standard)
	usfmIdChirho?: string; // e.g., "JHN 3:16" (USFM standard)
	swordKeyChirho?: string; // SWORD module key format
}

// ============================================================================
// WORD-LEVEL DATA MODEL
// ============================================================================

export interface WordInstanceChirho {
	// Position in text
	referenceChirho: BibleReferenceChirho;
	positionInVerseChirho: number;
	positionInBookChirho?: number;

	// Surface text
	textChirho: string; // As it appears in this version
	textNormalizedChirho?: string; // Normalized form

	// Original language data
	originalTextChirho?: string; // Greek/Hebrew/Aramaic
	transliterationChirho?: string;

	// Lexical data
	lemmaChirho?: string; // Dictionary form
	strongsNumbersChirho?: string[]; // Can have multiple (e.g., compound words)
	goodrickKohlenbergerChirho?: string[]; // GK numbers

	// Morphology
	morphologyChirho?: MorphologyDataChirho;

	// Semantic domains
	louwNidaDomainsChirho?: string[]; // e.g., ["25.43", "23.28"]
	semanticFieldsChirho?: string[]; // Custom semantic tagging

	// Syntax
	syntaxRoleChirho?: SyntaxRoleChirho;
	clauseIdChirho?: string;
	phraseIdChirho?: string;

	// Discourse
	discourseUnitChirho?: string;
	discourseTypeChirho?: DiscourseTypeChirho;

	// Cross-references at word level
	wordLevelRefsChirho?: WordLevelReferenceChirho[];
}

// ============================================================================
// MORPHOLOGY
// ============================================================================

export interface MorphologyDataChirho {
	// Raw morphology code
	codeChirho: string; // e.g., "V-AAI-3S"
	schemeChirho: MorphologySchemeChirho; // Which coding scheme

	// Parsed components
	partOfSpeechChirho: PartOfSpeechChirho;

	// Verb attributes
	tenseChirho?: TenseChirho;
	voiceChirho?: VoiceChirho;
	moodChirho?: MoodChirho;

	// Nominal attributes
	caseChirho?: CaseChirho;
	numberChirho?: NumberChirho;
	genderChirho?: GenderChirho;

	// Additional
	personChirho?: PersonChirho;
	degreeChirho?: DegreeChirho; // For adjectives/adverbs

	// Hebrew-specific
	stemChirho?: HebrewStemChirho; // Qal, Niphal, Piel, etc.
	stateChirho?: HebrewStateChirho; // Absolute, Construct

	// Suffix information
	suffixPersonChirho?: PersonChirho;
	suffixNumberChirho?: NumberChirho;
	suffixGenderChirho?: GenderChirho;
}

export type MorphologySchemeChirho =
	| 'robinson' // Robinson's Greek codes
	| 'packard' // Packard's codes
	| 'oshm' // Open Scriptures Hebrew Morphology
	| 'logos' // Logos morphology system
	| 'step'; // STEP Bible morphology

export type PartOfSpeechChirho =
	| 'noun'
	| 'verb'
	| 'adjective'
	| 'adverb'
	| 'pronoun'
	| 'preposition'
	| 'conjunction'
	| 'particle'
	| 'interjection'
	| 'article'
	| 'numeral';

export type TenseChirho =
	| 'present'
	| 'imperfect'
	| 'future'
	| 'aorist'
	| 'perfect'
	| 'pluperfect'
	| 'future_perfect';

export type VoiceChirho = 'active' | 'middle' | 'passive' | 'middle_passive' | 'deponent';

export type MoodChirho =
	| 'indicative'
	| 'subjunctive'
	| 'optative'
	| 'imperative'
	| 'infinitive'
	| 'participle';

export type CaseChirho = 'nominative' | 'genitive' | 'dative' | 'accusative' | 'vocative';

export type NumberChirho = 'singular' | 'dual' | 'plural';

export type GenderChirho = 'masculine' | 'feminine' | 'neuter' | 'common';

export type PersonChirho = 'first' | 'second' | 'third';

export type DegreeChirho = 'positive' | 'comparative' | 'superlative';

export type HebrewStemChirho =
	| 'qal'
	| 'niphal'
	| 'piel'
	| 'pual'
	| 'hithpael'
	| 'hiphil'
	| 'hophal'
	| 'pilpel'
	| 'polel'
	| 'polal'
	| 'hithpolel'
	| 'poel'
	| 'poal'
	| 'palel'
	| 'pulal'
	| 'qal_passive';

export type HebrewStateChirho = 'absolute' | 'construct' | 'determined';

// ============================================================================
// SYNTAX
// ============================================================================

export interface SyntaxRoleChirho {
	roleChirho: SyntaxRoleTypeChirho;
	headWordPositionChirho?: number; // Position of word this depends on
	dependentsChirho?: number[]; // Positions of dependent words
}

export type SyntaxRoleTypeChirho =
	| 'subject'
	| 'predicate'
	| 'object_direct'
	| 'object_indirect'
	| 'complement'
	| 'modifier'
	| 'adverbial'
	| 'vocative'
	| 'apposition'
	| 'conjunction'
	| 'subordinator'
	| 'relative'
	| 'genitive_modifier'
	| 'prepositional_phrase'
	| 'article';

export interface ClauseChirho {
	idChirho: string;
	typeChirho: ClauseTypeChirho;
	referenceChirho: BibleReferenceChirho;
	startPositionChirho: number;
	endPositionChirho: number;
	parentClauseIdChirho?: string;
	childClauseIdsChirho?: string[];
}

export type ClauseTypeChirho =
	| 'main'
	| 'relative'
	| 'conditional_protasis'
	| 'conditional_apodosis'
	| 'purpose'
	| 'result'
	| 'temporal'
	| 'causal'
	| 'concessive'
	| 'comparative'
	| 'content'
	| 'participial'
	| 'infinitival';

// ============================================================================
// DISCOURSE ANALYSIS
// ============================================================================

export type DiscourseTypeChirho =
	| 'narrative'
	| 'discourse_direct'
	| 'discourse_indirect'
	| 'hortatory'
	| 'expository'
	| 'procedural'
	| 'poetry'
	| 'prophecy'
	| 'apocalyptic'
	| 'genealogy'
	| 'law'
	| 'wisdom'
	| 'lament'
	| 'praise'
	| 'prayer';

export interface DiscourseUnitChirho {
	idChirho: string;
	typeChirho: DiscourseTypeChirho;
	startReferenceChirho: BibleReferenceChirho;
	endReferenceChirho: BibleReferenceChirho;
	speakerChirho?: string; // Who is speaking
	addresseeChirho?: string; // Who is being addressed
	parentUnitIdChirho?: string;
	childUnitIdsChirho?: string[];
}

// ============================================================================
// TEXT-CRITICAL APPARATUS
// ============================================================================

export interface TextualVariantChirho {
	referenceChirho: BibleReferenceChirho;
	wordPositionsChirho: number[]; // Which words are affected

	// Readings
	readingsChirho: VariantReadingChirho[];

	// Editorial decision
	preferredReadingIndexChirho?: number;
	certaintyChirho?: 'A' | 'B' | 'C' | 'D'; // NA/UBS rating system
}

export interface VariantReadingChirho {
	textChirho: string; // The variant text
	witnesseChirho: ManuscriptWitnessChirho[]; // Supporting manuscripts
	supportTypeChirho?: 'early' | 'widespread' | 'internal' | 'harmonization';
}

export interface ManuscriptWitnessChirho {
	siglumChirho: string; // e.g., "P66", "א", "B", "D"
	typeChirho: ManuscriptTypeChirho;
	centuryChirho?: number;
	familyChirho?: string; // Text family (Alexandrian, Byzantine, etc.)
}

export type ManuscriptTypeChirho =
	| 'papyrus'
	| 'uncial'
	| 'minuscule'
	| 'lectionary'
	| 'version'
	| 'patristic';

// ============================================================================
// CROSS-REFERENCES WITH PROVENANCE
// ============================================================================

export interface CrossReferenceChirho {
	sourceReferenceChirho: BibleReferenceChirho;
	targetReferenceChirho: BibleReferenceChirho;

	// Provenance
	provenanceChirho: CrossReferenceProvenanceChirho;

	// Classification
	typeChirho: CrossReferenceTypeChirho;
	strengthChirho?: 'strong' | 'moderate' | 'weak';

	// Relationship details
	relationshipChirho?: string; // Description of the connection
	sharedConceptsChirho?: string[]; // Concepts both passages address
}

export interface CrossReferenceProvenanceChirho {
	sourceChirho: string; // e.g., "TSK", "NA28", "Nestle-Aland"
	traditionChirho?: TheologicalTraditionChirho;
	authorChirho?: string;
	dateChirho?: string;
	confidenceChirho?: number; // 0-1 scale
	notesChirho?: string;
}

export type TheologicalTraditionChirho =
	| 'reformed'
	| 'lutheran'
	| 'catholic'
	| 'orthodox'
	| 'evangelical'
	| 'pentecostal'
	| 'messianic'
	| 'academic'
	| 'ecumenical';

export type CrossReferenceTypeChirho =
	| 'quotation' // Direct OT quotation
	| 'allusion' // Indirect reference
	| 'echo' // Thematic echo
	| 'parallel' // Synoptic parallel
	| 'typology' // Type/antitype
	| 'prophecy_fulfillment'
	| 'thematic'
	| 'verbal' // Shared vocabulary
	| 'structural'; // Similar literary structure

export interface WordLevelReferenceChirho {
	targetWordChirho: BibleReferenceChirho & { wordPositionChirho: number };
	typeChirho: 'same_lemma' | 'same_root' | 'semantic_parallel' | 'cognate';
}

// ============================================================================
// LEXICON AND DICTIONARY ENTRIES
// ============================================================================

export interface LexiconEntryChirho {
	// Identifiers
	lemmaChirho: string;
	strongsNumberChirho?: string;
	goodrickKohlenbergerChirho?: string;
	louwNidaNumbersChirho?: string[];

	// Basic info
	languageChirho: 'greek' | 'hebrew' | 'aramaic';
	transliterationChirho: string;
	pronunciationChirho?: string;

	// Glosses and definitions
	shortGlossChirho: string;
	extendedDefinitionChirho?: string;
	etymologyChirho?: string;

	// Semantic domains
	louwNidaDomainsChirho?: LouwNidaDomainMappingChirho[];
	semanticFieldChirho?: string[];

	// Usage data
	frequencyChirho: FrequencyDataChirho;

	// Related words
	synonymsChirho?: string[]; // Strong's numbers
	antonymsChirho?: string[];
	cognatesChirho?: CognateChirho[];

	// Sources
	lexiconSourcesChirho?: LexiconSourceChirho[];
}

export interface LouwNidaDomainMappingChirho {
	domainChirho: string; // e.g., "25"
	subdomainChirho?: string; // e.g., "A"
	entryNumberChirho: string; // e.g., "25.43"
	meaningChirho: string;
}

export interface FrequencyDataChirho {
	totalOccurrencesChirho: number;
	ntOccurrencesChirho?: number;
	otOccurrencesChirho?: number;
	byBookChirho?: Record<string, number>;
}

export interface CognateChirho {
	lemmaChirho: string;
	strongsChirho?: string;
	relationshipChirho: 'root' | 'derived' | 'compound' | 'related';
}

export interface LexiconSourceChirho {
	nameChirho: string; // e.g., "BDAG", "BDB", "HALOT"
	definitionChirho?: string;
	pageReferenceChirho?: string;
}

// ============================================================================
// ENTITIES (PERSONS, PLACES, THINGS)
// ============================================================================

export interface BiblicalEntityChirho {
	idChirho: string;
	typeChirho: EntityTypeChirho;
	primaryNameChirho: string;
	alternateNamesChirho?: string[];

	// References
	occurrencesChirho: BibleReferenceChirho[];
	primaryReferenceChirho?: BibleReferenceChirho;

	// Relationships
	relationshipsChirho?: EntityRelationshipChirho[];

	// Metadata
	descriptionChirho?: string;
	historicalNotesChirho?: string;
	timelineChirho?: TimelineEventChirho[];
}

export type EntityTypeChirho =
	| 'person'
	| 'place'
	| 'people_group'
	| 'divine_being'
	| 'angel'
	| 'demon'
	| 'object'
	| 'concept'
	| 'event';

export interface EntityRelationshipChirho {
	relatedEntityIdChirho: string;
	relationshipTypeChirho: string; // e.g., "father_of", "located_in", "participated_in"
	referenceChirho?: BibleReferenceChirho;
}

// ============================================================================
// TIMELINE AND GEOGRAPHY
// ============================================================================

export interface TimelineEventChirho {
	idChirho: string;
	titleChirho: string;
	descriptionChirho?: string;

	// Dating
	dateRangeChirho?: DateRangeChirho;
	certaintyChirho?: 'certain' | 'probable' | 'possible' | 'uncertain';

	// References
	biblicalReferencesChirho: BibleReferenceChirho[];

	// Related entities
	participantsChirho?: string[]; // Entity IDs
	locationsChirho?: string[]; // Place entity IDs
}

export interface DateRangeChirho {
	startYearChirho?: number; // Negative for BC
	endYearChirho?: number;
	eraChirho: 'BC' | 'AD' | 'AM'; // AM = Anno Mundi
	notesChirho?: string;
}

export interface GeographicLocationChirho {
	entityIdChirho: string; // Links to BiblicalEntityChirho
	coordinatesChirho?: {
		latitudeChirho: number;
		longitudeChirho: number;
	};
	modernNameChirho?: string;
	regionChirho?: string;
	typeChirho: 'city' | 'region' | 'mountain' | 'river' | 'sea' | 'desert' | 'nation';
}

// ============================================================================
// THEOLOGICAL CONCEPTS
// ============================================================================

export interface TheologicalConceptChirho {
	idChirho: string;
	nameChirho: string;
	categoryChirho: TheologicalCategoryChirho;
	descriptionChirho?: string;

	// Related concepts
	parentConceptChirho?: string;
	childConceptsChirho?: string[];
	relatedConceptsChirho?: string[];

	// Biblical data
	keyVersesChirho: BibleReferenceChirho[];
	keyTermsChirho?: string[]; // Strong's numbers

	// Cross-tradition views
	perspectivesChirho?: TheologicalPerspectiveChirho[];
}

export type TheologicalCategoryChirho =
	| 'theology_proper' // Doctrine of God
	| 'christology' // Doctrine of Christ
	| 'pneumatology' // Doctrine of the Spirit
	| 'anthropology' // Doctrine of Humanity
	| 'hamartiology' // Doctrine of Sin
	| 'soteriology' // Doctrine of Salvation
	| 'ecclesiology' // Doctrine of the Church
	| 'eschatology' // Doctrine of Last Things
	| 'bibliology' // Doctrine of Scripture
	| 'angelology' // Doctrine of Angels
	| 'ethics'; // Moral teaching

export interface TheologicalPerspectiveChirho {
	traditionChirho: TheologicalTraditionChirho;
	viewSummaryChirho: string;
	proponentChirho?: string;
	keySourcesChirho?: string[];
}

// ============================================================================
// COMMENTARY AND STUDY NOTES
// ============================================================================

export interface CommentaryEntryChirho {
	referenceChirho: BibleReferenceChirho;
	sourceChirho: CommentarySourceChirho;
	contentChirho: string;
	contentTypeChirho: 'plain' | 'markdown' | 'html' | 'osis';

	// Metadata
	topicsChirho?: string[];
	relatedEntriesChirho?: BibleReferenceChirho[];
}

export interface CommentarySourceChirho {
	idChirho: string;
	nameChirho: string;
	authorChirho?: string;
	dateChirho?: string;
	traditionChirho?: TheologicalTraditionChirho;
	languageChirho: string;
	licenseChirho: LicenseTypeChirho;
}

export type LicenseTypeChirho =
	| 'public_domain'
	| 'creative_commons'
	| 'proprietary'
	| 'fair_use'
	| 'custom';

// ============================================================================
// SEARCH AND QUERY SUPPORT
// ============================================================================

export interface MorphologicalQueryChirho {
	// Query parts
	partOfSpeechChirho?: PartOfSpeechChirho;
	tenseChirho?: TenseChirho;
	voiceChirho?: VoiceChirho;
	moodChirho?: MoodChirho;
	caseChirho?: CaseChirho;
	numberChirho?: NumberChirho;
	genderChirho?: GenderChirho;
	personChirho?: PersonChirho;

	// Lexical
	lemmaChirho?: string;
	strongsChirho?: string;
	louwNidaDomainChirho?: string;

	// Scope
	booksChirho?: string[];
	authorsChirho?: string[]; // Pauline, Johannine, etc.
}

export interface ProximityQueryChirho {
	term1Chirho: MorphologicalQueryChirho;
	term2Chirho: MorphologicalQueryChirho;
	distanceChirho: number; // Words apart
	orderMattersChirho: boolean;
	sameClauseChirho?: boolean;
	sameVerseChirho?: boolean;
}
