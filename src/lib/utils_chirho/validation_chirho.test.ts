// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { describe, it, expect } from 'vitest';
import {
	validateEmailChirho,
	validateFeedbackTypeChirho,
	validateRatingChirho,
	validateFeedbackChirho,
	validateBibleReferenceChirho,
	sanitizeInputChirho
} from './validation_chirho';

describe('validateEmailChirho', () => {
	it('accepts valid email addresses', () => {
		expect(validateEmailChirho('test@example.com')).toBe(true);
		expect(validateEmailChirho('user.name@domain.org')).toBe(true);
		expect(validateEmailChirho('user+tag@gmail.com')).toBe(true);
	});

	it('rejects invalid email addresses', () => {
		expect(validateEmailChirho('')).toBe(false);
		expect(validateEmailChirho('notanemail')).toBe(false);
		expect(validateEmailChirho('missing@domain')).toBe(false);
		expect(validateEmailChirho('@nodomain.com')).toBe(false);
		expect(validateEmailChirho('spaces in@email.com')).toBe(false);
	});
});

describe('validateFeedbackTypeChirho', () => {
	it('accepts valid feedback types', () => {
		expect(validateFeedbackTypeChirho('bug')).toBe(true);
		expect(validateFeedbackTypeChirho('feature')).toBe(true);
		expect(validateFeedbackTypeChirho('general')).toBe(true);
	});

	it('rejects invalid feedback types', () => {
		expect(validateFeedbackTypeChirho('')).toBe(false);
		expect(validateFeedbackTypeChirho('invalid')).toBe(false);
		expect(validateFeedbackTypeChirho('BUG')).toBe(false); // case-sensitive
	});
});

describe('validateRatingChirho', () => {
	it('accepts valid ratings (1-5)', () => {
		expect(validateRatingChirho(1)).toBe(true);
		expect(validateRatingChirho(3)).toBe(true);
		expect(validateRatingChirho(5)).toBe(true);
	});

	it('rejects invalid ratings', () => {
		expect(validateRatingChirho(0)).toBe(false);
		expect(validateRatingChirho(6)).toBe(false);
		expect(validateRatingChirho(-1)).toBe(false);
		expect(validateRatingChirho(3.5)).toBe(false); // must be integer
	});
});

describe('validateFeedbackChirho', () => {
	it('validates complete valid feedback', () => {
		const result = validateFeedbackChirho({
			type_chirho: 'general',
			message_chirho: 'Great Bible study tool!',
			email_chirho: 'user@example.com',
			rating_chirho: 5
		});
		expect(result.valid_chirho).toBe(true);
	});

	it('validates feedback without optional fields', () => {
		const result = validateFeedbackChirho({
			type_chirho: 'bug',
			message_chirho: 'Found an issue'
		});
		expect(result.valid_chirho).toBe(true);
	});

	it('rejects empty message', () => {
		const result = validateFeedbackChirho({
			type_chirho: 'general',
			message_chirho: ''
		});
		expect(result.valid_chirho).toBe(false);
		expect(result.error_chirho).toContain('Message');
	});

	it('rejects whitespace-only message', () => {
		const result = validateFeedbackChirho({
			type_chirho: 'general',
			message_chirho: '   '
		});
		expect(result.valid_chirho).toBe(false);
	});

	it('rejects message over 5000 characters', () => {
		const result = validateFeedbackChirho({
			type_chirho: 'general',
			message_chirho: 'a'.repeat(5001)
		});
		expect(result.valid_chirho).toBe(false);
		expect(result.error_chirho).toContain('too long');
	});

	it('rejects invalid feedback type', () => {
		const result = validateFeedbackChirho({
			type_chirho: 'invalid',
			message_chirho: 'Test message'
		});
		expect(result.valid_chirho).toBe(false);
		expect(result.error_chirho).toContain('type');
	});

	it('rejects invalid email format', () => {
		const result = validateFeedbackChirho({
			type_chirho: 'general',
			message_chirho: 'Test message',
			email_chirho: 'notanemail'
		});
		expect(result.valid_chirho).toBe(false);
		expect(result.error_chirho).toContain('email');
	});

	it('rejects invalid rating', () => {
		const result = validateFeedbackChirho({
			type_chirho: 'general',
			message_chirho: 'Test message',
			rating_chirho: 10
		});
		expect(result.valid_chirho).toBe(false);
		expect(result.error_chirho).toContain('Rating');
	});
});

describe('validateBibleReferenceChirho', () => {
	it('validates valid references', () => {
		expect(validateBibleReferenceChirho('Genesis', 1).valid_chirho).toBe(true);
		expect(validateBibleReferenceChirho('John', 3, 16).valid_chirho).toBe(true);
		expect(validateBibleReferenceChirho('Psa', 23).valid_chirho).toBe(true);
	});

	it('rejects empty book name', () => {
		const result = validateBibleReferenceChirho('', 1);
		expect(result.valid_chirho).toBe(false);
		expect(result.error_chirho).toContain('Book');
	});

	it('rejects invalid chapter number', () => {
		expect(validateBibleReferenceChirho('Genesis', 0).valid_chirho).toBe(false);
		expect(validateBibleReferenceChirho('Genesis', -1).valid_chirho).toBe(false);
	});

	it('rejects invalid verse number', () => {
		expect(validateBibleReferenceChirho('Genesis', 1, 0).valid_chirho).toBe(false);
		expect(validateBibleReferenceChirho('Genesis', 1, -1).valid_chirho).toBe(false);
	});
});

describe('sanitizeInputChirho', () => {
	it('trims whitespace', () => {
		expect(sanitizeInputChirho('  hello  ')).toBe('hello');
	});

	it('escapes HTML tags', () => {
		expect(sanitizeInputChirho('<script>alert("xss")</script>')).toBe('&lt;script&gt;alert("xss")&lt;/script&gt;');
	});

	it('respects max length', () => {
		const result = sanitizeInputChirho('a'.repeat(100), 50);
		expect(result.length).toBe(50);
	});

	it('handles normal text unchanged', () => {
		const text = 'The LORD is my shepherd; I shall not want.';
		expect(sanitizeInputChirho(text)).toBe(text);
	});
});
