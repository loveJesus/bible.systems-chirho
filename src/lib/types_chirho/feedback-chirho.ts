// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

/** Feedback kinds the bubble offers and /api-chirho/feedback-chirho accepts. */
export const FEEDBACK_TYPES_CHIRHO = ['bug', 'feature', 'general'] as const;

export type FeedbackTypeChirho = (typeof FEEDBACK_TYPES_CHIRHO)[number];
