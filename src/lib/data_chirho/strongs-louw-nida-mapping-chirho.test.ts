// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { describe, it, expect } from 'vitest';
import {
	GREEK_STRONGS_TO_LOUW_NIDA_CHIRHO,
	getLouwNidaForStrongsChirho,
	getStrongsInDomainChirho,
	findStrongsByGlossChirho,
	getPolysemousWordsChirho,
} from './strongs-louw-nida-mapping-chirho';

describe('strongs-louw-nida-mapping-chirho', () => {
	describe('GREEK_STRONGS_TO_LOUW_NIDA_CHIRHO', () => {
		it('should have mapping for key theological terms', () => {
			expect(GREEK_STRONGS_TO_LOUW_NIDA_CHIRHO.has('G0025')).toBe(true); // agapaō
			expect(GREEK_STRONGS_TO_LOUW_NIDA_CHIRHO.has('G2316')).toBe(true); // theos
			expect(GREEK_STRONGS_TO_LOUW_NIDA_CHIRHO.has('G4100')).toBe(true); // pisteuō
			expect(GREEK_STRONGS_TO_LOUW_NIDA_CHIRHO.has('G2889')).toBe(true); // kosmos
		});

		it('should have at least 20 mappings', () => {
			expect(GREEK_STRONGS_TO_LOUW_NIDA_CHIRHO.size).toBeGreaterThanOrEqual(20);
		});
	});

	describe('getLouwNidaForStrongsChirho', () => {
		it('should return mapping for agapaō (G0025)', () => {
			const mappingChirho = getLouwNidaForStrongsChirho('G0025');
			expect(mappingChirho).toBeDefined();
			expect(mappingChirho?.greekChirho).toBe('ἀγαπάω');
			expect(mappingChirho?.transliterationChirho).toBe('agapaō');
			expect(mappingChirho?.domainsChirho.length).toBeGreaterThan(0);
		});

		it('should return mapping for kosmos (G2889) with multiple domains', () => {
			const mappingChirho = getLouwNidaForStrongsChirho('G2889');
			expect(mappingChirho).toBeDefined();
			expect(mappingChirho?.domainsChirho.length).toBeGreaterThanOrEqual(4);
		});

		it('should handle case-insensitive input', () => {
			const mappingChirho = getLouwNidaForStrongsChirho('g0025');
			expect(mappingChirho).toBeDefined();
		});

		it('should return undefined for unknown Strong number', () => {
			const mappingChirho = getLouwNidaForStrongsChirho('G9999');
			expect(mappingChirho).toBeUndefined();
		});
	});

	describe('getStrongsInDomainChirho', () => {
		it('should find words in domain 25 (Attitudes and Emotions)', () => {
			const wordsChirho = getStrongsInDomainChirho('25');
			expect(wordsChirho.length).toBeGreaterThan(0);
			expect(wordsChirho).toContain('G0025'); // agapaō - to love
		});

		it('should find words in domain 12 (Supernatural Beings)', () => {
			const wordsChirho = getStrongsInDomainChirho('12');
			expect(wordsChirho.length).toBeGreaterThan(0);
			expect(wordsChirho).toContain('G2316'); // theos
		});
	});

	describe('findStrongsByGlossChirho', () => {
		it('should find words with gloss containing "love"', () => {
			const resultsChirho = findStrongsByGlossChirho('love');
			expect(resultsChirho.length).toBeGreaterThan(0);
			const strongsNumbersChirho = resultsChirho.map((rChirho) => rChirho.strongsChirho);
			expect(strongsNumbersChirho).toContain('G0025');
		});

		it('should find words with gloss containing "faith"', () => {
			const resultsChirho = findStrongsByGlossChirho('faith');
			expect(resultsChirho.length).toBeGreaterThan(0);
			const strongsNumbersChirho = resultsChirho.map((rChirho) => rChirho.strongsChirho);
			expect(strongsNumbersChirho).toContain('G4100');
		});

		it('should be case insensitive', () => {
			const resultsChirho = findStrongsByGlossChirho('LOVE');
			expect(resultsChirho.length).toBeGreaterThan(0);
		});
	});

	describe('getPolysemousWordsChirho', () => {
		it('should return words with multiple meanings', () => {
			const polysemousChirho = getPolysemousWordsChirho();
			expect(polysemousChirho.length).toBeGreaterThan(0);

			// kosmos has 5 different meanings
			const kosmosChirho = polysemousChirho.find((wChirho) => wChirho.strongsChirho === 'G2889');
			expect(kosmosChirho).toBeDefined();
			expect(kosmosChirho?.domainsChirho.length).toBeGreaterThanOrEqual(4);
		});
	});

	describe('Louw-Nida domain structure', () => {
		it('should have valid domain IDs in all mappings', () => {
			for (const mappingChirho of GREEK_STRONGS_TO_LOUW_NIDA_CHIRHO.values()) {
				for (const domainChirho of mappingChirho.domainsChirho) {
					expect(domainChirho.domainIdChirho).toMatch(/^\d+$/);
					expect(domainChirho.louwNidaNumberChirho).toMatch(/^\d+\.\d+$/);
				}
			}
		});

		it('should have glosses for all domain entries', () => {
			for (const mappingChirho of GREEK_STRONGS_TO_LOUW_NIDA_CHIRHO.values()) {
				for (const domainChirho of mappingChirho.domainsChirho) {
					expect(domainChirho.glossChirho).toBeTruthy();
					expect(domainChirho.glossChirho.length).toBeGreaterThan(0);
				}
			}
		});
	});
});
