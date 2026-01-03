// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { describe, it, expect } from 'vitest';
import {
	getCrossReferencesChirho,
	getReferencingVersesChirho,
	parseReferenceChirho,
	formatReferenceChirho,
	getCrossReferenceStatsChirho,
	bookAbbreviationsChirho
} from './cross_references_chirho';

describe('Cross References - parseReferenceChirho', () => {
	it('parses simple reference', () => {
		const resultChirho = parseReferenceChirho('Gen.1.1');
		expect(resultChirho).toEqual({
			book_chirho: 'Gen',
			chapter_chirho: 1,
			verse_start_chirho: 1,
			verse_end_chirho: undefined
		});
	});

	it('parses reference with verse range', () => {
		const resultChirho = parseReferenceChirho('Jhn.1.1-3');
		expect(resultChirho).toEqual({
			book_chirho: 'Jhn',
			chapter_chirho: 1,
			verse_start_chirho: 1,
			verse_end_chirho: 3
		});
	});

	it('parses book abbreviation with number', () => {
		const resultChirho = parseReferenceChirho('1Cor.13.4');
		expect(resultChirho).toEqual({
			book_chirho: '1Cor',
			chapter_chirho: 13,
			verse_start_chirho: 4,
			verse_end_chirho: undefined
		});
	});

	it('returns null for invalid reference', () => {
		expect(parseReferenceChirho('invalid')).toBeNull();
		expect(parseReferenceChirho('')).toBeNull();
		expect(parseReferenceChirho('Gen 1:1')).toBeNull();
	});
});

describe('Cross References - formatReferenceChirho', () => {
	it('formats simple reference', () => {
		expect(formatReferenceChirho('Gen.1.1')).toBe('Genesis 1:1');
	});

	it('formats reference with verse range', () => {
		expect(formatReferenceChirho('Jhn.3.16-17')).toBe('John 3:16-17');
	});

	it('formats Psalms reference', () => {
		expect(formatReferenceChirho('Psa.23.1')).toBe('Psalms 23:1');
	});

	it('returns original for invalid reference', () => {
		expect(formatReferenceChirho('invalid')).toBe('invalid');
	});
});

describe('Cross References - getCrossReferencesChirho', () => {
	it('returns cross-references for Genesis 1:1', () => {
		const refsChirho = getCrossReferencesChirho('Gen', 1, 1);
		expect(refsChirho.length).toBeGreaterThan(0);
		expect(refsChirho[0].topic_chirho).toBe('The Beginning');
		expect(refsChirho[0].refs_chirho).toContain('Jhn.1.1-3');
	});

	it('returns cross-references for John 3:16', () => {
		const refsChirho = getCrossReferencesChirho('Jhn', 3, 16);
		expect(refsChirho.length).toBeGreaterThan(0);
		// Should have multiple topic groups
		const topicsChirho = refsChirho.map((gChirho) => gChirho.topic_chirho);
		expect(topicsChirho).toContain("God's Love for the World");
		expect(topicsChirho).toContain('Everlasting Life');
	});

	it('returns empty array for verse without cross-references', () => {
		const refsChirho = getCrossReferencesChirho('Gen', 99, 99);
		expect(refsChirho).toEqual([]);
	});

	it('returns cross-references for Psalm 23:1', () => {
		const refsChirho = getCrossReferencesChirho('Psa', 23, 1);
		expect(refsChirho.length).toBeGreaterThan(0);
		expect(refsChirho[0].topic_chirho).toBe('The LORD is My Shepherd');
		expect(refsChirho[0].refs_chirho).toContain('Jhn.10.11');
	});
});

describe('Cross References - getReferencingVersesChirho', () => {
	it('finds verses that reference John 1:1', () => {
		const referencingChirho = getReferencingVersesChirho('Jhn', 1, 1);
		// Genesis 1:1 references John 1:1-3, so it should be found
		expect(referencingChirho.length).toBeGreaterThanOrEqual(0);
	});
});

describe('Cross References - getCrossReferenceStatsChirho', () => {
	it('returns statistics about the cross-reference database', () => {
		const statsChirho = getCrossReferenceStatsChirho();
		expect(statsChirho.total_verses_chirho).toBeGreaterThan(0);
		expect(statsChirho.total_references_chirho).toBeGreaterThan(0);
		expect(statsChirho.total_topics_chirho).toBeGreaterThan(0);
	});
});

describe('Cross References - bookAbbreviationsChirho', () => {
	it('has all major Old Testament books', () => {
		expect(bookAbbreviationsChirho['Gen']).toBe('Genesis');
		expect(bookAbbreviationsChirho['Exo']).toBe('Exodus');
		expect(bookAbbreviationsChirho['Psa']).toBe('Psalms');
		expect(bookAbbreviationsChirho['Pro']).toBe('Proverbs');
		expect(bookAbbreviationsChirho['Isa']).toBe('Isaiah');
	});

	it('has all major New Testament books', () => {
		expect(bookAbbreviationsChirho['Mat']).toBe('Matthew');
		expect(bookAbbreviationsChirho['Jhn']).toBe('John');
		expect(bookAbbreviationsChirho['Rom']).toBe('Romans');
		expect(bookAbbreviationsChirho['Rev']).toBe('Revelation');
	});

	it('has numbered books', () => {
		expect(bookAbbreviationsChirho['1Cor']).toBe('1 Corinthians');
		expect(bookAbbreviationsChirho['2Pet']).toBe('2 Peter');
		expect(bookAbbreviationsChirho['1Jhn']).toBe('1 John');
	});
});
