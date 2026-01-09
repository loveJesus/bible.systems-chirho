// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

/**
 * Strong's Number to Louw-Nida Semantic Domain Mapping
 *
 * This file maps Strong's numbers to their Louw-Nida semantic domains.
 * The mapping allows semantic searches like "find all words meaning love"
 * across the entire Bible.
 *
 * Structure:
 * - Strong's number (G0025, H1234)
 * - Primary domain entry (25.43)
 * - Secondary domain entries (if word has multiple meanings)
 * - Gloss for each meaning
 */

import type { LouwNidaDomainIdChirho } from '../types_chirho/louw-nida-chirho';

export interface StrongsLouwNidaMappingChirho {
	strongsChirho: string;
	greekChirho?: string;
	hebrewChirho?: string;
	transliterationChirho: string;
	domainsChirho: {
		louwNidaNumberChirho: string;
		domainIdChirho: LouwNidaDomainIdChirho;
		glossChirho: string;
		definitionChirho?: string;
	}[];
}

/**
 * Mapping of Greek Strong's numbers to Louw-Nida domains
 * Starting with key NT theological words
 */
export const GREEK_STRONGS_TO_LOUW_NIDA_CHIRHO: Map<string, StrongsLouwNidaMappingChirho> = new Map([
	// ============================================================================
	// JOHN 3:16 VOCABULARY
	// ============================================================================

	// οὕτως (houtōs) - "so, thus, in this way"
	[
		'G3779',
		{
			strongsChirho: 'G3779',
			greekChirho: 'οὕτως',
			transliterationChirho: 'houtōs',
			domainsChirho: [
				{
					louwNidaNumberChirho: '61.9',
					domainIdChirho: '61',
					glossChirho: 'in this manner',
					definitionChirho: 'a reference to that which precedes—in this manner, thus, so',
				},
				{
					louwNidaNumberChirho: '78.3',
					domainIdChirho: '78',
					glossChirho: 'so much, to such a degree',
				},
			],
		},
	],

	// γάρ (gar) - "for"
	[
		'G1063',
		{
			strongsChirho: 'G1063',
			greekChirho: 'γάρ',
			transliterationChirho: 'gar',
			domainsChirho: [
				{
					louwNidaNumberChirho: '89.23',
					domainIdChirho: '89',
					glossChirho: 'for, since',
					definitionChirho:
						'marker of cause or reason for an event or state; marker of clarification',
				},
			],
		},
	],

	// ἀγαπάω (agapaō) - "to love"
	[
		'G0025',
		{
			strongsChirho: 'G0025',
			greekChirho: 'ἀγαπάω',
			transliterationChirho: 'agapaō',
			domainsChirho: [
				{
					louwNidaNumberChirho: '25.43',
					domainIdChirho: '25',
					glossChirho: 'to love',
					definitionChirho:
						'to have love for someone or something, based on sincere appreciation and high regard',
				},
			],
		},
	],

	// ἀγάπη (agapē) - "love"
	[
		'G0026',
		{
			strongsChirho: 'G0026',
			greekChirho: 'ἀγάπη',
			transliterationChirho: 'agapē',
			domainsChirho: [
				{
					louwNidaNumberChirho: '25.43',
					domainIdChirho: '25',
					glossChirho: 'love',
					definitionChirho: 'love based on sincere appreciation and high regard',
				},
				{
					louwNidaNumberChirho: '23.28',
					domainIdChirho: '23',
					glossChirho: 'love feast',
					definitionChirho: 'a communal meal expressing Christian love',
				},
			],
		},
	],

	// θεός (theos) - "God"
	[
		'G2316',
		{
			strongsChirho: 'G2316',
			greekChirho: 'θεός',
			transliterationChirho: 'theos',
			domainsChirho: [
				{
					louwNidaNumberChirho: '12.1',
					domainIdChirho: '12',
					glossChirho: 'God',
					definitionChirho: 'the one true God, the supreme supernatural being',
				},
				{
					louwNidaNumberChirho: '12.22',
					domainIdChirho: '12',
					glossChirho: 'god, deity',
					definitionChirho: 'a supernatural being regarded as a deity',
				},
			],
		},
	],

	// κόσμος (kosmos) - "world"
	[
		'G2889',
		{
			strongsChirho: 'G2889',
			greekChirho: 'κόσμος',
			transliterationChirho: 'kosmos',
			domainsChirho: [
				{
					louwNidaNumberChirho: '1.1',
					domainIdChirho: '1',
					glossChirho: 'universe',
					definitionChirho: 'the universe, the world as an ordered system',
				},
				{
					louwNidaNumberChirho: '1.39',
					domainIdChirho: '1',
					glossChirho: 'world, earth',
					definitionChirho: 'the earth and all who live on it',
				},
				{
					louwNidaNumberChirho: '9.23',
					domainIdChirho: '9',
					glossChirho: 'people, humanity',
				},
				{
					louwNidaNumberChirho: '41.38',
					domainIdChirho: '41',
					glossChirho: 'worldly system',
					definitionChirho: 'the system of practices opposed to God',
				},
				{
					louwNidaNumberChirho: '79.12',
					domainIdChirho: '79',
					glossChirho: 'adornment',
				},
			],
		},
	],

	// ὥστε (hōste) - "so that, therefore"
	[
		'G5620',
		{
			strongsChirho: 'G5620',
			greekChirho: 'ὥστε',
			transliterationChirho: 'hōste',
			domainsChirho: [
				{
					louwNidaNumberChirho: '89.52',
					domainIdChirho: '89',
					glossChirho: 'so that, with the result that',
				},
			],
		},
	],

	// δίδωμι (didōmi) - "to give"
	[
		'G1325',
		{
			strongsChirho: 'G1325',
			greekChirho: 'δίδωμι',
			transliterationChirho: 'didōmi',
			domainsChirho: [
				{
					louwNidaNumberChirho: '57.71',
					domainIdChirho: '57',
					glossChirho: 'to give',
					definitionChirho: 'to give an object, whether or not what is given is returnable',
				},
				{
					louwNidaNumberChirho: '13.128',
					domainIdChirho: '13',
					glossChirho: 'to cause, bring about',
				},
				{
					louwNidaNumberChirho: '33.72',
					domainIdChirho: '33',
					glossChirho: 'to allow, permit',
				},
			],
		},
	],

	// υἱός (huios) - "son"
	[
		'G5207',
		{
			strongsChirho: 'G5207',
			greekChirho: 'υἱός',
			transliterationChirho: 'huios',
			domainsChirho: [
				{
					louwNidaNumberChirho: '10.42',
					domainIdChirho: '10',
					glossChirho: 'son',
					definitionChirho: 'a male offspring',
				},
				{
					louwNidaNumberChirho: '9.4',
					domainIdChirho: '9',
					glossChirho: 'a person of',
					definitionChirho: 'a person who belongs to a class characterized by a quality',
				},
			],
		},
	],

	// μονογενής (monogenēs) - "only begotten, unique"
	[
		'G3439',
		{
			strongsChirho: 'G3439',
			greekChirho: 'μονογενής',
			transliterationChirho: 'monogenēs',
			domainsChirho: [
				{
					louwNidaNumberChirho: '58.52',
					domainIdChirho: '58',
					glossChirho: 'unique, only',
					definitionChirho: 'the only one of its kind or class',
				},
				{
					louwNidaNumberChirho: '10.43',
					domainIdChirho: '10',
					glossChirho: 'only child',
				},
			],
		},
	],

	// πιστεύω (pisteuō) - "to believe"
	[
		'G4100',
		{
			strongsChirho: 'G4100',
			greekChirho: 'πιστεύω',
			transliterationChirho: 'pisteuō',
			domainsChirho: [
				{
					louwNidaNumberChirho: '31.35',
					domainIdChirho: '31',
					glossChirho: 'to believe, have faith',
					definitionChirho: 'to believe to the extent of complete trust and reliance',
				},
				{
					louwNidaNumberChirho: '31.43',
					domainIdChirho: '31',
					glossChirho: 'to entrust',
					definitionChirho: 'to entrust something to someone',
				},
			],
		},
	],

	// πίστις (pistis) - "faith"
	[
		'G4102',
		{
			strongsChirho: 'G4102',
			greekChirho: 'πίστις',
			transliterationChirho: 'pistis',
			domainsChirho: [
				{
					louwNidaNumberChirho: '31.85',
					domainIdChirho: '31',
					glossChirho: 'faith, trust',
					definitionChirho: 'trust and reliance upon',
				},
				{
					louwNidaNumberChirho: '31.88',
					domainIdChirho: '31',
					glossChirho: 'the faith, Christian faith',
					definitionChirho: 'the content of what Christians believe',
				},
				{
					louwNidaNumberChirho: '33.289',
					domainIdChirho: '33',
					glossChirho: 'proof, evidence',
				},
			],
		},
	],

	// ἀπόλλυμι (apollymi) - "to destroy, perish"
	[
		'G0622',
		{
			strongsChirho: 'G0622',
			greekChirho: 'ἀπόλλυμι',
			transliterationChirho: 'apollymi',
			domainsChirho: [
				{
					louwNidaNumberChirho: '20.31',
					domainIdChirho: '20',
					glossChirho: 'to destroy',
					definitionChirho: 'to destroy or to cause the destruction of',
				},
				{
					louwNidaNumberChirho: '23.106',
					domainIdChirho: '23',
					glossChirho: 'to perish, die',
					definitionChirho: 'to die, with the implication of ruin or destruction',
				},
				{
					louwNidaNumberChirho: '57.68',
					domainIdChirho: '57',
					glossChirho: 'to lose',
				},
			],
		},
	],

	// ζωή (zōē) - "life"
	[
		'G2222',
		{
			strongsChirho: 'G2222',
			greekChirho: 'ζωή',
			transliterationChirho: 'zōē',
			domainsChirho: [
				{
					louwNidaNumberChirho: '23.88',
					domainIdChirho: '23',
					glossChirho: 'life',
					definitionChirho: 'the state of being alive',
				},
				{
					louwNidaNumberChirho: '23.89',
					domainIdChirho: '23',
					glossChirho: 'eternal life',
					definitionChirho: 'supernatural life, life in fellowship with God',
				},
			],
		},
	],

	// αἰώνιος (aiōnios) - "eternal"
	[
		'G0166',
		{
			strongsChirho: 'G0166',
			greekChirho: 'αἰώνιος',
			transliterationChirho: 'aiōnios',
			domainsChirho: [
				{
					louwNidaNumberChirho: '67.96',
					domainIdChirho: '67',
					glossChirho: 'eternal',
					definitionChirho: 'pertaining to an unlimited duration of time',
				},
				{
					louwNidaNumberChirho: '67.95',
					domainIdChirho: '67',
					glossChirho: 'age-long',
					definitionChirho: 'pertaining to a long period of time',
				},
			],
		},
	],

	// ἔχω (echō) - "to have"
	[
		'G2192',
		{
			strongsChirho: 'G2192',
			greekChirho: 'ἔχω',
			transliterationChirho: 'echō',
			domainsChirho: [
				{
					louwNidaNumberChirho: '57.1',
					domainIdChirho: '57',
					glossChirho: 'to have, possess',
				},
				{
					louwNidaNumberChirho: '13.2',
					domainIdChirho: '13',
					glossChirho: 'to be in a state',
				},
			],
		},
	],

	// πᾶς (pas) - "all, every"
	[
		'G3956',
		{
			strongsChirho: 'G3956',
			greekChirho: 'πᾶς',
			transliterationChirho: 'pas',
			domainsChirho: [
				{
					louwNidaNumberChirho: '59.23',
					domainIdChirho: '59',
					glossChirho: 'all, every',
					definitionChirho: 'the totality of any object, mass, collective, or extension',
				},
				{
					louwNidaNumberChirho: '78.44',
					domainIdChirho: '78',
					glossChirho: 'wholly, completely',
				},
			],
		},
	],

	// ============================================================================
	// MORE KEY THEOLOGICAL TERMS
	// ============================================================================

	// χάρις (charis) - "grace"
	[
		'G5485',
		{
			strongsChirho: 'G5485',
			greekChirho: 'χάρις',
			transliterationChirho: 'charis',
			domainsChirho: [
				{
					louwNidaNumberChirho: '88.66',
					domainIdChirho: '88',
					glossChirho: 'grace, kindness',
					definitionChirho: 'a beneficent disposition toward someone',
				},
				{
					louwNidaNumberChirho: '25.88',
					domainIdChirho: '25',
					glossChirho: 'gratitude, thanks',
				},
				{
					louwNidaNumberChirho: '33.350',
					domainIdChirho: '33',
					glossChirho: 'gracious words',
				},
			],
		},
	],

	// ἁμαρτία (hamartia) - "sin"
	[
		'G0266',
		{
			strongsChirho: 'G0266',
			greekChirho: 'ἁμαρτία',
			transliterationChirho: 'hamartia',
			domainsChirho: [
				{
					louwNidaNumberChirho: '88.289',
					domainIdChirho: '88',
					glossChirho: 'sin',
					definitionChirho: 'behavior contrary to the will of God',
				},
			],
		},
	],

	// δικαιοσύνη (dikaiosynē) - "righteousness"
	[
		'G1343',
		{
			strongsChirho: 'G1343',
			greekChirho: 'δικαιοσύνη',
			transliterationChirho: 'dikaiosynē',
			domainsChirho: [
				{
					louwNidaNumberChirho: '88.13',
					domainIdChirho: '88',
					glossChirho: 'righteousness',
					definitionChirho: 'the state of being in proper relationship with God',
				},
				{
					louwNidaNumberChirho: '34.46',
					domainIdChirho: '34',
					glossChirho: 'justice',
					definitionChirho: 'doing what is just and fair',
				},
			],
		},
	],

	// σωτηρία (sōtēria) - "salvation"
	[
		'G4991',
		{
			strongsChirho: 'G4991',
			greekChirho: 'σωτηρία',
			transliterationChirho: 'sōtēria',
			domainsChirho: [
				{
					louwNidaNumberChirho: '21.25',
					domainIdChirho: '21',
					glossChirho: 'salvation',
					definitionChirho: 'deliverance from danger, particularly spiritual salvation',
				},
				{
					louwNidaNumberChirho: '21.26',
					domainIdChirho: '21',
					glossChirho: 'salvation (spiritual)',
					definitionChirho: 'salvation from sin and its consequences',
				},
			],
		},
	],

	// βασιλεία (basileia) - "kingdom"
	[
		'G0932',
		{
			strongsChirho: 'G0932',
			greekChirho: 'βασιλεία',
			transliterationChirho: 'basileia',
			domainsChirho: [
				{
					louwNidaNumberChirho: '37.64',
					domainIdChirho: '37',
					glossChirho: 'kingdom, reign',
					definitionChirho: 'the act of ruling or exercising kingly power',
				},
				{
					louwNidaNumberChirho: '1.82',
					domainIdChirho: '1',
					glossChirho: 'kingdom (territory)',
					definitionChirho: 'a kingdom in the sense of the territory ruled',
				},
			],
		},
	],

	// κύριος (kyrios) - "Lord"
	[
		'G2962',
		{
			strongsChirho: 'G2962',
			greekChirho: 'κύριος',
			transliterationChirho: 'kyrios',
			domainsChirho: [
				{
					louwNidaNumberChirho: '12.9',
					domainIdChirho: '12',
					glossChirho: 'Lord (God)',
					definitionChirho: 'title for God or Christ',
				},
				{
					louwNidaNumberChirho: '37.51',
					domainIdChirho: '37',
					glossChirho: 'lord, master',
					definitionChirho: 'one who has authority over another',
				},
			],
		},
	],

	// χριστός (christos) - "Christ, anointed one"
	[
		'G5547',
		{
			strongsChirho: 'G5547',
			greekChirho: 'Χριστός',
			transliterationChirho: 'christos',
			domainsChirho: [
				{
					louwNidaNumberChirho: '53.82',
					domainIdChirho: '53',
					glossChirho: 'Christ, Messiah',
					definitionChirho: 'the Anointed One, the Messiah',
				},
			],
		},
	],

	// πνεῦμα (pneuma) - "spirit"
	[
		'G4151',
		{
			strongsChirho: 'G4151',
			greekChirho: 'πνεῦμα',
			transliterationChirho: 'pneuma',
			domainsChirho: [
				{
					louwNidaNumberChirho: '12.18',
					domainIdChirho: '12',
					glossChirho: 'Spirit (Holy Spirit)',
					definitionChirho: "God's Spirit, the Holy Spirit",
				},
				{
					louwNidaNumberChirho: '12.33',
					domainIdChirho: '12',
					glossChirho: 'spirit (supernatural being)',
					definitionChirho: 'a supernatural non-material being',
				},
				{
					louwNidaNumberChirho: '26.9',
					domainIdChirho: '26',
					glossChirho: 'inner being, spirit',
				},
				{
					louwNidaNumberChirho: '14.4',
					domainIdChirho: '14',
					glossChirho: 'wind, breath',
				},
			],
		},
	],

	// λόγος (logos) - "word"
	[
		'G3056',
		{
			strongsChirho: 'G3056',
			greekChirho: 'λόγος',
			transliterationChirho: 'logos',
			domainsChirho: [
				{
					louwNidaNumberChirho: '33.98',
					domainIdChirho: '33',
					glossChirho: 'word, message',
					definitionChirho: 'that which has been stated or communicated',
				},
				{
					louwNidaNumberChirho: '33.260',
					domainIdChirho: '33',
					glossChirho: 'the Word (Christ)',
					definitionChirho: 'a title for Christ (John 1:1)',
				},
				{
					louwNidaNumberChirho: '33.100',
					domainIdChirho: '33',
					glossChirho: 'account, reckoning',
				},
			],
		},
	],

	// ἀλήθεια (alētheia) - "truth"
	[
		'G0225',
		{
			strongsChirho: 'G0225',
			greekChirho: 'ἀλήθεια',
			transliterationChirho: 'alētheia',
			domainsChirho: [
				{
					louwNidaNumberChirho: '72.1',
					domainIdChirho: '72',
					glossChirho: 'truth',
					definitionChirho: 'that which is true, the content of truth',
				},
				{
					louwNidaNumberChirho: '72.2',
					domainIdChirho: '72',
					glossChirho: 'reality',
					definitionChirho: 'the actual, real state of affairs',
				},
			],
		},
	],

	// ἐλπίς (elpis) - "hope"
	[
		'G1680',
		{
			strongsChirho: 'G1680',
			greekChirho: 'ἐλπίς',
			transliterationChirho: 'elpis',
			domainsChirho: [
				{
					louwNidaNumberChirho: '25.59',
					domainIdChirho: '25',
					glossChirho: 'hope',
					definitionChirho: 'to look forward with confidence',
				},
			],
		},
	],
]);

/**
 * Helper function to look up Louw-Nida domains for a Strong's number
 */
export function getLouwNidaForStrongsChirho(
	strongsChirho: string
): StrongsLouwNidaMappingChirho | undefined {
	// Normalize Strong's number
	const normalizedChirho = strongsChirho.toUpperCase().replace(/[<>]/g, '');
	return GREEK_STRONGS_TO_LOUW_NIDA_CHIRHO.get(normalizedChirho);
}

/**
 * Find all Strong's numbers in a given domain
 */
export function getStrongsInDomainChirho(domainIdChirho: LouwNidaDomainIdChirho): string[] {
	const resultsChirho: string[] = [];

	for (const [strongsChirho, mappingChirho] of GREEK_STRONGS_TO_LOUW_NIDA_CHIRHO) {
		if (mappingChirho.domainsChirho.some((dChirho) => dChirho.domainIdChirho === domainIdChirho)) {
			resultsChirho.push(strongsChirho);
		}
	}

	return resultsChirho;
}

/**
 * Find Strong's numbers matching a gloss pattern
 */
export function findStrongsByGlossChirho(glossPatternChirho: string): StrongsLouwNidaMappingChirho[] {
	const patternChirho = glossPatternChirho.toLowerCase();
	const resultsChirho: StrongsLouwNidaMappingChirho[] = [];

	for (const mappingChirho of GREEK_STRONGS_TO_LOUW_NIDA_CHIRHO.values()) {
		const hasMatchChirho = mappingChirho.domainsChirho.some(
			(dChirho) =>
				dChirho.glossChirho.toLowerCase().includes(patternChirho) ||
				dChirho.definitionChirho?.toLowerCase().includes(patternChirho)
		);

		if (hasMatchChirho) {
			resultsChirho.push(mappingChirho);
		}
	}

	return resultsChirho;
}

/**
 * Get all words with multiple semantic domains (polysemy)
 */
export function getPolysemousWordsChirho(): StrongsLouwNidaMappingChirho[] {
	const resultsChirho: StrongsLouwNidaMappingChirho[] = [];

	for (const mappingChirho of GREEK_STRONGS_TO_LOUW_NIDA_CHIRHO.values()) {
		if (mappingChirho.domainsChirho.length > 1) {
			resultsChirho.push(mappingChirho);
		}
	}

	return resultsChirho;
}
