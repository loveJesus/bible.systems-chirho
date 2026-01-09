// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

/**
 * Louw-Nida Semantic Domain Types for Bible.Systems
 *
 * The Louw-Nida Greek-English Lexicon organizes Greek words by semantic domains
 * rather than alphabetically. There are 93 major domains covering all concepts
 * in the Greek New Testament.
 *
 * This structure allows:
 * - Finding all words related to a concept (e.g., all "love" words)
 * - Understanding word relationships by meaning
 * - Cross-linguistic semantic analysis
 */

// The 93 Louw-Nida semantic domains
export const LOUW_NIDA_DOMAINS_CHIRHO = {
	// Domain 1-11: Entities
	'1': { nameChirho: 'Geographical Objects and Features', categoryChirho: 'entities' },
	'2': { nameChirho: 'Natural Substances', categoryChirho: 'entities' },
	'3': { nameChirho: 'Plants', categoryChirho: 'entities' },
	'4': { nameChirho: 'Animals', categoryChirho: 'entities' },
	'5': { nameChirho: 'Foods and Condiments', categoryChirho: 'entities' },
	'6': { nameChirho: 'Artifacts', categoryChirho: 'entities' },
	'7': { nameChirho: 'Constructions', categoryChirho: 'entities' },
	'8': { nameChirho: 'Body, Body Parts, and Body Products', categoryChirho: 'entities' },
	'9': { nameChirho: 'People', categoryChirho: 'entities' },
	'10': { nameChirho: 'Kinship Terms', categoryChirho: 'entities' },
	'11': { nameChirho: 'Groups and Classes of Persons and Members of Such Groups and Classes', categoryChirho: 'entities' },

	// Domain 12-22: Events and States
	'12': { nameChirho: 'Supernatural Beings and Powers', categoryChirho: 'events' },
	'13': { nameChirho: 'Be, Become, Exist, Happen', categoryChirho: 'events' },
	'14': { nameChirho: 'Physical Events and States', categoryChirho: 'events' },
	'15': { nameChirho: 'Linear Movement', categoryChirho: 'events' },
	'16': { nameChirho: 'Non-Linear Movement', categoryChirho: 'events' },
	'17': { nameChirho: 'Stances and Events Related to Stances', categoryChirho: 'events' },
	'18': { nameChirho: 'Attachment', categoryChirho: 'events' },
	'19': { nameChirho: 'Physical Impact', categoryChirho: 'events' },
	'20': { nameChirho: 'Violence, Harm, Destroy, Kill', categoryChirho: 'events' },
	'21': { nameChirho: 'Danger, Risk, Safe, Save', categoryChirho: 'events' },
	'22': { nameChirho: 'Trouble, Hardship, Relief, Favorable Circumstances', categoryChirho: 'events' },

	// Domain 23-24: Activities
	'23': { nameChirho: 'Physiological Processes and States', categoryChirho: 'activities' },
	'24': { nameChirho: 'Sensory Events and States', categoryChirho: 'activities' },

	// Domain 25-34: Mental and Psychological
	'25': { nameChirho: 'Attitudes and Emotions', categoryChirho: 'psychological' },
	'26': { nameChirho: 'Psychological Faculties', categoryChirho: 'psychological' },
	'27': { nameChirho: 'Learn', categoryChirho: 'psychological' },
	'28': { nameChirho: 'Know', categoryChirho: 'psychological' },
	'29': { nameChirho: 'Memory and Recall', categoryChirho: 'psychological' },
	'30': { nameChirho: 'Think', categoryChirho: 'psychological' },
	'31': { nameChirho: 'Hold a View, Believe, Trust', categoryChirho: 'psychological' },
	'32': { nameChirho: 'Understand', categoryChirho: 'psychological' },
	'33': { nameChirho: 'Communication', categoryChirho: 'psychological' },
	'34': { nameChirho: 'Association', categoryChirho: 'psychological' },

	// Domain 35-40: Social Relations
	'35': { nameChirho: 'Help, Care For', categoryChirho: 'social' },
	'36': { nameChirho: 'Guide, Discipline, Follow', categoryChirho: 'social' },
	'37': { nameChirho: 'Control, Rule', categoryChirho: 'social' },
	'38': { nameChirho: 'Punish, Reward', categoryChirho: 'social' },
	'39': { nameChirho: 'Hostility, Strife', categoryChirho: 'social' },
	'40': { nameChirho: 'Reconciliation, Forgiveness', categoryChirho: 'social' },

	// Domain 41-56: Social Activities
	'41': { nameChirho: 'Behavior and Related States', categoryChirho: 'social_activities' },
	'42': { nameChirho: 'Perform, Do', categoryChirho: 'social_activities' },
	'43': { nameChirho: 'Agriculture', categoryChirho: 'social_activities' },
	'44': { nameChirho: 'Animal Husbandry, Fishing', categoryChirho: 'social_activities' },
	'45': { nameChirho: 'Building, Constructing', categoryChirho: 'social_activities' },
	'46': { nameChirho: 'Household Activities', categoryChirho: 'social_activities' },
	'47': { nameChirho: 'Activities Involving Liquids or Masses', categoryChirho: 'social_activities' },
	'48': { nameChirho: 'Activities Involving Cloth', categoryChirho: 'social_activities' },
	'49': { nameChirho: 'Activities Involving the Body', categoryChirho: 'social_activities' },
	'50': { nameChirho: 'Contests and Play', categoryChirho: 'social_activities' },
	'51': { nameChirho: 'Festivals', categoryChirho: 'social_activities' },
	'52': { nameChirho: 'Funerals and Burial', categoryChirho: 'social_activities' },
	'53': { nameChirho: 'Religious Activities', categoryChirho: 'social_activities' },
	'54': { nameChirho: 'Maritime Activities', categoryChirho: 'social_activities' },
	'55': { nameChirho: 'Military Activities', categoryChirho: 'social_activities' },
	'56': { nameChirho: 'Courts and Legal Procedures', categoryChirho: 'social_activities' },

	// Domain 57: Economic
	'57': { nameChirho: 'Possess, Transfer, Exchange', categoryChirho: 'economic' },

	// Domain 58-61: Quantity and Quality
	'58': { nameChirho: 'Nature, Class, Example', categoryChirho: 'quantity_quality' },
	'59': { nameChirho: 'Quantity', categoryChirho: 'quantity_quality' },
	'60': { nameChirho: 'Number', categoryChirho: 'quantity_quality' },
	'61': { nameChirho: 'Sequence', categoryChirho: 'quantity_quality' },

	// Domain 62-66: Arrangement
	'62': { nameChirho: 'Arrange, Organize', categoryChirho: 'arrangement' },
	'63': { nameChirho: 'Whole, Unite, Part, Divide', categoryChirho: 'arrangement' },
	'64': { nameChirho: 'Comparison', categoryChirho: 'arrangement' },
	'65': { nameChirho: 'Value', categoryChirho: 'arrangement' },
	'66': { nameChirho: 'Proper, Improper', categoryChirho: 'arrangement' },

	// Domain 67-68: Time and Space
	'67': { nameChirho: 'Time', categoryChirho: 'time_space' },
	'68': { nameChirho: 'Aspect', categoryChirho: 'time_space' },

	// Domain 69-78: Discourse
	'69': { nameChirho: 'Affirmation, Negation', categoryChirho: 'discourse' },
	'70': { nameChirho: 'Real, Unreal', categoryChirho: 'discourse' },
	'71': { nameChirho: 'Mode', categoryChirho: 'discourse' },
	'72': { nameChirho: 'True, False', categoryChirho: 'discourse' },
	'73': { nameChirho: 'Genuine, Counterfeit', categoryChirho: 'discourse' },
	'74': { nameChirho: 'Able, Capable', categoryChirho: 'discourse' },
	'75': { nameChirho: 'Adequate, Enough', categoryChirho: 'discourse' },
	'76': { nameChirho: 'Power, Force', categoryChirho: 'discourse' },
	'77': { nameChirho: 'Ready, Prepared', categoryChirho: 'discourse' },
	'78': { nameChirho: 'Degree', categoryChirho: 'discourse' },

	// Domain 79-86: Spatial Relations
	'79': { nameChirho: 'Features of Objects', categoryChirho: 'spatial' },
	'80': { nameChirho: 'Space', categoryChirho: 'spatial' },
	'81': { nameChirho: 'Spacial Dimensions', categoryChirho: 'spatial' },
	'82': { nameChirho: 'Spacial Orientations', categoryChirho: 'spatial' },
	'83': { nameChirho: 'Spacial Positions', categoryChirho: 'spatial' },
	'84': { nameChirho: 'Spacial Extensions', categoryChirho: 'spatial' },
	'85': { nameChirho: 'Existence in Space', categoryChirho: 'spatial' },

	// Domain 86-91: Relational
	'86': { nameChirho: 'Weight', categoryChirho: 'relational' },
	'87': { nameChirho: 'Status', categoryChirho: 'relational' },
	'88': { nameChirho: 'Moral and Ethical Qualities and Related Behavior', categoryChirho: 'relational' },
	'89': { nameChirho: 'Relations', categoryChirho: 'relational' },
	'90': { nameChirho: 'Case', categoryChirho: 'relational' },
	'91': { nameChirho: 'Discourse Referentials', categoryChirho: 'relational' },

	// Domain 92-93: Names and Other
	'92': { nameChirho: 'Discourse Markers', categoryChirho: 'other' },
	'93': { nameChirho: 'Names of Persons and Places', categoryChirho: 'other' },
} as const;

export type LouwNidaDomainIdChirho = keyof typeof LOUW_NIDA_DOMAINS_CHIRHO;

// Subdomain structure (domains have subdomains like 25.A, 25.B, etc.)
export interface LouwNidaSubdomainChirho {
	domainIdChirho: LouwNidaDomainIdChirho;
	subdomainIdChirho: string; // e.g., "25.A", "25.B.1"
	nameChirho: string;
	descriptionChirho?: string;
}

// Entry linking a Greek word to semantic domains
export interface LouwNidaEntryChirho {
	strongsNumberChirho: string; // e.g., "G0025"
	greekWordChirho: string; // e.g., "ἀγαπάω"
	transliterationChirho: string; // e.g., "agapaō"
	glossChirho: string; // Short English gloss
	domainsChirho: LouwNidaDomainReferenceChirho[]; // Words can appear in multiple domains
}

export interface LouwNidaDomainReferenceChirho {
	domainIdChirho: LouwNidaDomainIdChirho;
	subdomainIdChirho?: string;
	louwNidaNumberChirho: string; // e.g., "25.43" (domain.entry)
	meaningChirho: string; // The specific meaning in this domain
	definitionChirho?: string;
}

// Sample entries for key theological words
export const SAMPLE_LOUW_NIDA_ENTRIES_CHIRHO: LouwNidaEntryChirho[] = [
	{
		strongsNumberChirho: 'G0025',
		greekWordChirho: 'ἀγαπάω',
		transliterationChirho: 'agapaō',
		glossChirho: 'to love',
		domainsChirho: [
			{
				domainIdChirho: '25',
				subdomainIdChirho: '25.A',
				louwNidaNumberChirho: '25.43',
				meaningChirho: 'to have love for someone or something',
				definitionChirho:
					'to have love for someone or something, based on sincere appreciation and high regard',
			},
		],
	},
	{
		strongsNumberChirho: 'G0026',
		greekWordChirho: 'ἀγάπη',
		transliterationChirho: 'agapē',
		glossChirho: 'love',
		domainsChirho: [
			{
				domainIdChirho: '25',
				subdomainIdChirho: '25.A',
				louwNidaNumberChirho: '25.43',
				meaningChirho: 'love, based on sincere appreciation',
			},
			{
				domainIdChirho: '23',
				louwNidaNumberChirho: '23.28',
				meaningChirho: 'a meal shared in love (love feast)',
			},
		],
	},
	{
		strongsNumberChirho: 'G5368',
		greekWordChirho: 'φιλέω',
		transliterationChirho: 'phileō',
		glossChirho: 'to love, have affection for',
		domainsChirho: [
			{
				domainIdChirho: '25',
				louwNidaNumberChirho: '25.33',
				meaningChirho: 'to have warm regard for and interest in another',
			},
		],
	},
	{
		strongsNumberChirho: 'G4100',
		greekWordChirho: 'πιστεύω',
		transliterationChirho: 'pisteuō',
		glossChirho: 'to believe, have faith',
		domainsChirho: [
			{
				domainIdChirho: '31',
				louwNidaNumberChirho: '31.35',
				meaningChirho: 'to believe to the extent of complete trust and reliance',
			},
			{
				domainIdChirho: '31',
				louwNidaNumberChirho: '31.43',
				meaningChirho: 'to entrust something to someone',
			},
		],
	},
	{
		strongsNumberChirho: 'G4102',
		greekWordChirho: 'πίστις',
		transliterationChirho: 'pistis',
		glossChirho: 'faith, trust, belief',
		domainsChirho: [
			{
				domainIdChirho: '31',
				louwNidaNumberChirho: '31.85',
				meaningChirho: 'trust, reliance upon',
			},
			{
				domainIdChirho: '31',
				louwNidaNumberChirho: '31.88',
				meaningChirho: 'the content of what is believed (the faith)',
			},
			{
				domainIdChirho: '33',
				louwNidaNumberChirho: '33.289',
				meaningChirho: 'that which causes trust (proof, evidence)',
			},
		],
	},
	{
		strongsNumberChirho: 'G2316',
		greekWordChirho: 'θεός',
		transliterationChirho: 'theos',
		glossChirho: 'God, god',
		domainsChirho: [
			{
				domainIdChirho: '12',
				louwNidaNumberChirho: '12.1',
				meaningChirho: 'God (the one true God)',
			},
			{
				domainIdChirho: '12',
				louwNidaNumberChirho: '12.22',
				meaningChirho: 'a god or goddess (pagan deity)',
			},
		],
	},
	{
		strongsNumberChirho: 'G2889',
		greekWordChirho: 'κόσμος',
		transliterationChirho: 'kosmos',
		glossChirho: 'world, universe, adornment',
		domainsChirho: [
			{
				domainIdChirho: '1',
				louwNidaNumberChirho: '1.1',
				meaningChirho: 'the universe, the world as an ordered system',
			},
			{
				domainIdChirho: '1',
				louwNidaNumberChirho: '1.39',
				meaningChirho: 'the earth and all who live on it',
			},
			{
				domainIdChirho: '9',
				louwNidaNumberChirho: '9.23',
				meaningChirho: 'people, humanity',
			},
			{
				domainIdChirho: '41',
				louwNidaNumberChirho: '41.38',
				meaningChirho: 'the system of practices and standards associated with the world',
			},
			{
				domainIdChirho: '79',
				louwNidaNumberChirho: '79.12',
				meaningChirho: 'adornment, that which adorns',
			},
		],
	},
	{
		strongsNumberChirho: 'G2222',
		greekWordChirho: 'ζωή',
		transliterationChirho: 'zōē',
		glossChirho: 'life',
		domainsChirho: [
			{
				domainIdChirho: '23',
				louwNidaNumberChirho: '23.88',
				meaningChirho: 'life, the state of being alive',
			},
			{
				domainIdChirho: '23',
				louwNidaNumberChirho: '23.89',
				meaningChirho: 'supernatural life, eternal life',
			},
		],
	},
	{
		strongsNumberChirho: 'G0166',
		greekWordChirho: 'αἰώνιος',
		transliterationChirho: 'aiōnios',
		glossChirho: 'eternal, everlasting',
		domainsChirho: [
			{
				domainIdChirho: '67',
				louwNidaNumberChirho: '67.96',
				meaningChirho: 'eternal, without end',
			},
			{
				domainIdChirho: '67',
				louwNidaNumberChirho: '67.95',
				meaningChirho: 'pertaining to a long period of time',
			},
		],
	},
];

// Helper function to get all words in a domain
export function getWordsByDomainChirho(
	domainIdChirho: LouwNidaDomainIdChirho,
	entriesChirho: LouwNidaEntryChirho[] = SAMPLE_LOUW_NIDA_ENTRIES_CHIRHO
): LouwNidaEntryChirho[] {
	return entriesChirho.filter((entryChirho) =>
		entryChirho.domainsChirho.some((dChirho) => dChirho.domainIdChirho === domainIdChirho)
	);
}

// Helper function to get domains for a Strong's number
export function getDomainsForStrongsChirho(
	strongsNumberChirho: string,
	entriesChirho: LouwNidaEntryChirho[] = SAMPLE_LOUW_NIDA_ENTRIES_CHIRHO
): LouwNidaDomainReferenceChirho[] {
	const entryChirho = entriesChirho.find(
		(eChirho) => eChirho.strongsNumberChirho === strongsNumberChirho
	);
	return entryChirho?.domainsChirho ?? [];
}

// Helper to get domain info
export function getDomainInfoChirho(domainIdChirho: LouwNidaDomainIdChirho) {
	return LOUW_NIDA_DOMAINS_CHIRHO[domainIdChirho];
}
