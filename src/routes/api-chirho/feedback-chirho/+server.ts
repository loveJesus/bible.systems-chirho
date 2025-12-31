// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

interface FeedbackPayloadChirho {
	type_chirho: 'bug' | 'feature' | 'general';
	message_chirho: string;
	email_chirho?: string | null;
	rating_chirho?: number | null;
	page_url_chirho?: string | null;
	user_agent_chirho?: string | null;
}

// In-memory store for now (will be replaced with D1 database)
const feedbackStoreChirho: Array<FeedbackPayloadChirho & { id_chirho: string; created_at_chirho: string }> = [];

export const POST: RequestHandler = async ({ request, platform }) => {
	try {
		const bodyChirho: FeedbackPayloadChirho = await request.json();

		// Validate required fields
		if (!bodyChirho.message_chirho || !bodyChirho.message_chirho.trim()) {
			return json(
				{
					error_chirho: {
						code_chirho: 'VALIDATION_ERROR',
						message_chirho: 'Message is required'
					}
				},
				{ status: 400 }
			);
		}

		if (!['bug', 'feature', 'general'].includes(bodyChirho.type_chirho)) {
			return json(
				{
					error_chirho: {
						code_chirho: 'VALIDATION_ERROR',
						message_chirho: 'Invalid feedback type'
					}
				},
				{ status: 400 }
			);
		}

		// Validate rating if provided
		if (bodyChirho.rating_chirho !== null && bodyChirho.rating_chirho !== undefined) {
			if (bodyChirho.rating_chirho < 1 || bodyChirho.rating_chirho > 5) {
				return json(
					{
						error_chirho: {
							code_chirho: 'VALIDATION_ERROR',
							message_chirho: 'Rating must be between 1 and 5'
						}
					},
					{ status: 400 }
				);
			}
		}

		// Validate email format if provided
		if (bodyChirho.email_chirho) {
			const emailRegexChirho = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegexChirho.test(bodyChirho.email_chirho)) {
				return json(
					{
						error_chirho: {
							code_chirho: 'VALIDATION_ERROR',
							message_chirho: 'Invalid email format'
						}
					},
					{ status: 400 }
				);
			}
		}

		// Create feedback entry
		const feedbackEntryChirho = {
			id_chirho: crypto.randomUUID(),
			type_chirho: bodyChirho.type_chirho,
			message_chirho: bodyChirho.message_chirho.trim().slice(0, 5000), // Limit message length
			email_chirho: bodyChirho.email_chirho || null,
			rating_chirho: bodyChirho.rating_chirho || null,
			page_url_chirho: bodyChirho.page_url_chirho?.slice(0, 500) || null,
			user_agent_chirho: bodyChirho.user_agent_chirho?.slice(0, 500) || null,
			created_at_chirho: new Date().toISOString()
		};

		// Store feedback (in-memory for now, will use D1 later)
		feedbackStoreChirho.push(feedbackEntryChirho);

		// Log feedback for now (in production, this would go to D1)
		console.log('Feedback received:', JSON.stringify(feedbackEntryChirho, null, 2));

		// TODO: Send notification email via 2SMTP when feedback is received
		// This can be enabled once we have the email system fully configured

		return json({
			data_chirho: {
				id_chirho: feedbackEntryChirho.id_chirho,
				message_chirho: 'Feedback submitted successfully. Thank you!'
			}
		});
	} catch (errorChirho) {
		console.error('Feedback submission error:', errorChirho);
		return json(
			{
				error_chirho: {
					code_chirho: 'INTERNAL_ERROR',
					message_chirho: 'Failed to process feedback'
				}
			},
			{ status: 500 }
		);
	}
};

// GET endpoint to retrieve feedback (admin only - will add auth later)
export const GET: RequestHandler = async ({ url }) => {
	// For now, return count only (full admin access will require auth)
	return json({
		data_chirho: {
			total_chirho: feedbackStoreChirho.length,
			message_chirho: 'Feedback retrieval requires admin authentication'
		}
	});
};
