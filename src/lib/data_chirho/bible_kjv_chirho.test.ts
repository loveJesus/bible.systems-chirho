// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { describe, it, expect } from 'vitest';
import {
	getBookChirho,
	getChapterChirho,
	getVerseChirho,
	getAvailableBooksChirho,
	getAvailableChaptersChirho
} from './bible_kjv_chirho';

describe('Bible Data - getBookChirho', () => {
	it('finds book by full name', () => {
		const book = getBookChirho('Genesis');
		expect(book).toBeDefined();
		expect(book?.name).toBe('Genesis');
		expect(book?.abbrev).toBe('Gen');
	});

	it('finds book by abbreviation (case-insensitive)', () => {
		const book = getBookChirho('gen');
		expect(book).toBeDefined();
		expect(book?.name).toBe('Genesis');
	});

	it('returns undefined for non-existent book', () => {
		const book = getBookChirho('NotABook');
		expect(book).toBeUndefined();
	});

	it('finds John by abbreviation', () => {
		const book = getBookChirho('jhn');
		expect(book).toBeDefined();
		expect(book?.name).toBe('John');
	});
});

describe('Bible Data - getChapterChirho', () => {
	it('retrieves Genesis chapter 1', () => {
		const chapter = getChapterChirho('Genesis', 1);
		expect(chapter).toBeDefined();
		expect(chapter?.chapter).toBe(1);
		expect(chapter?.verses.length).toBeGreaterThan(0);
	});

	it('retrieves chapter by book abbreviation', () => {
		const chapter = getChapterChirho('psa', 23);
		expect(chapter).toBeDefined();
		expect(chapter?.chapter).toBe(23);
	});

	it('returns undefined for non-existent chapter', () => {
		const chapter = getChapterChirho('Genesis', 999);
		expect(chapter).toBeUndefined();
	});
});

describe('Bible Data - getVerseChirho', () => {
	it('retrieves Genesis 1:1', () => {
		const verse = getVerseChirho('Genesis', 1, 1);
		expect(verse).toBeDefined();
		expect(verse?.verse).toBe(1);
		expect(verse?.text).toContain('In the beginning');
	});

	it('retrieves John 3:16', () => {
		const verse = getVerseChirho('John', 3, 16);
		expect(verse).toBeDefined();
		expect(verse?.text).toContain('God so loved the world');
	});

	it('returns undefined for non-existent verse', () => {
		const verse = getVerseChirho('Genesis', 1, 999);
		expect(verse).toBeUndefined();
	});
});

describe('Bible Data - getAvailableBooksChirho', () => {
	it('returns array of available books', () => {
		const books = getAvailableBooksChirho();
		expect(Array.isArray(books)).toBe(true);
		expect(books.length).toBeGreaterThan(0);
	});

	it('each book has required properties', () => {
		const books = getAvailableBooksChirho();
		for (const book of books) {
			expect(book).toHaveProperty('name');
			expect(book).toHaveProperty('abbrev');
			expect(book).toHaveProperty('chapterCount');
		}
	});
});

describe('Bible Data - getAvailableChaptersChirho', () => {
	it('returns chapters for Genesis', () => {
		const chapters = getAvailableChaptersChirho('Genesis');
		expect(Array.isArray(chapters)).toBe(true);
		expect(chapters).toContain(1);
	});

	it('returns chapters for Psalms', () => {
		const chapters = getAvailableChaptersChirho('Psalms');
		expect(chapters).toContain(23);
		expect(chapters).toContain(1);
	});

	it('returns empty array for non-existent book', () => {
		const chapters = getAvailableChaptersChirho('NotABook');
		expect(chapters).toEqual([]);
	});
});
