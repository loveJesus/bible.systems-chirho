// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

/**
 * Validation utilities for Bible.Systems
 * These functions are extracted for easy unit testing
 */

export interface FeedbackValidationChirho {
	type_chirho: string;
	message_chirho: string;
	email_chirho?: string | null;
	rating_chirho?: number | null;
}

export interface ValidationResultChirho {
	valid_chirho: boolean;
	error_chirho?: string;
}

/**
 * Validate email format
 */
export function validateEmailChirho(email: string): boolean {
	const emailRegexChirho = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegexChirho.test(email);
}

/**
 * Validate feedback type
 */
export function validateFeedbackTypeChirho(type: string): boolean {
	return ['bug', 'feature', 'general'].includes(type);
}

/**
 * Validate rating (1-5)
 */
export function validateRatingChirho(rating: number): boolean {
	return Number.isInteger(rating) && rating >= 1 && rating <= 5;
}

/**
 * Validate complete feedback payload
 */
export function validateFeedbackChirho(payload: FeedbackValidationChirho): ValidationResultChirho {
	// Check required message
	if (!payload.message_chirho || !payload.message_chirho.trim()) {
		return { valid_chirho: false, error_chirho: 'Message is required' };
	}

	// Check message length
	if (payload.message_chirho.length > 5000) {
		return { valid_chirho: false, error_chirho: 'Message too long (max 5000 characters)' };
	}

	// Check feedback type
	if (!validateFeedbackTypeChirho(payload.type_chirho)) {
		return { valid_chirho: false, error_chirho: 'Invalid feedback type' };
	}

	// Check email if provided
	if (payload.email_chirho && !validateEmailChirho(payload.email_chirho)) {
		return { valid_chirho: false, error_chirho: 'Invalid email format' };
	}

	// Check rating if provided
	if (payload.rating_chirho !== null && payload.rating_chirho !== undefined) {
		if (!validateRatingChirho(payload.rating_chirho)) {
			return { valid_chirho: false, error_chirho: 'Rating must be between 1 and 5' };
		}
	}

	return { valid_chirho: true };
}

/**
 * Validate Bible reference
 */
export function validateBibleReferenceChirho(book: string, chapter: number, verse?: number): ValidationResultChirho {
	if (!book || book.trim().length === 0) {
		return { valid_chirho: false, error_chirho: 'Book name is required' };
	}

	if (!Number.isInteger(chapter) || chapter < 1) {
		return { valid_chirho: false, error_chirho: 'Invalid chapter number' };
	}

	if (verse !== undefined && (!Number.isInteger(verse) || verse < 1)) {
		return { valid_chirho: false, error_chirho: 'Invalid verse number' };
	}

	return { valid_chirho: true };
}

/**
 * Sanitize user input (basic XSS prevention)
 */
export function sanitizeInputChirho(input: string, maxLength: number = 5000): string {
	return input
		.trim()
		.slice(0, maxLength)
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}
