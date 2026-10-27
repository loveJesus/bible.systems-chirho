// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { TURNSTILE_SECRET_KEY_CHIRHO } from '$env/static/private';
import { FEEDBACK_TYPES_CHIRHO, type FeedbackTypeChirho } from '$lib/types_chirho/feedback-chirho';

interface FeedbackPayloadChirho {
	type_chirho: FeedbackTypeChirho;
	message_chirho: string;
	email_chirho?: string | null;
	rating_chirho?: number | null;
	page_url_chirho?: string | null;
	user_agent_chirho?: string | null;
	turnstile_token_chirho?: string;
}

interface TurnstileResponseChirho {
	success: boolean;
	'error-codes'?: string[];
}

interface FeedbackRowChirho {
	id_chirho: string;
	type_chirho: string;
	message_chirho: string;
	email_chirho: string | null;
	rating_chirho: number | null;
	page_url_chirho: string | null;
	user_agent_chirho: string | null;
	ip_address_chirho: string | null;
	created_at_chirho: string;
	resolved_chirho: number;
	resolved_at_chirho: string | null;
	notes_chirho: string | null;
}

// Verify Turnstile token with Cloudflare
async function verifyTurnstileChirho(tokenChirho: string, ipChirho: string): Promise<boolean> {
	try {
		const responseChirho = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({
				secret: TURNSTILE_SECRET_KEY_CHIRHO,
				response: tokenChirho,
				remoteip: ipChirho
			})
		});

		const dataChirho: TurnstileResponseChirho = await responseChirho.json();
		return dataChirho.success;
	} catch (errorChirho) {
		console.error('Turnstile verification error:', errorChirho);
		return false;
	}
}

export const POST: RequestHandler = async ({ request, platform, getClientAddress }) => {
	try {
		const bodyChirho: FeedbackPayloadChirho = await request.json();

		// Verify Turnstile token
		if (!bodyChirho.turnstile_token_chirho) {
			return json(
				{
					error_chirho: {
						code_chirho: 'VALIDATION_ERROR',
						message_chirho: 'Verification required'
					}
				},
				{ status: 400 }
			);
		}

		const clientIpChirho = getClientAddress();
		const isValidTurnstileChirho = await verifyTurnstileChirho(bodyChirho.turnstile_token_chirho, clientIpChirho);

		if (!isValidTurnstileChirho) {
			return json(
				{
					error_chirho: {
						code_chirho: 'VERIFICATION_FAILED',
						message_chirho: 'Verification failed. Please try again.'
					}
				},
				{ status: 400 }
			);
		}

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

		if (!FEEDBACK_TYPES_CHIRHO.includes(bodyChirho.type_chirho)) {
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
		const feedbackIdChirho = crypto.randomUUID();
		const createdAtChirho = new Date().toISOString();

		// Store in D1 database
		const dbChirho = platform?.env?.FEEDBACK_DB_CHIRHO;

		if (dbChirho) {
			await dbChirho.prepare(
				`INSERT INTO feedback_chirho (
					id_chirho, type_chirho, message_chirho, email_chirho,
					rating_chirho, page_url_chirho, user_agent_chirho,
					ip_address_chirho, created_at_chirho
				) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
			).bind(
				feedbackIdChirho,
				bodyChirho.type_chirho,
				bodyChirho.message_chirho.trim().slice(0, 5000),
				bodyChirho.email_chirho || null,
				bodyChirho.rating_chirho || null,
				bodyChirho.page_url_chirho?.slice(0, 500) || null,
				bodyChirho.user_agent_chirho?.slice(0, 500) || null,
				clientIpChirho,
				createdAtChirho
			).run();

			console.log('Feedback stored in D1:', feedbackIdChirho);
		} else {
			// Fallback logging when D1 is not available (local dev without D1)
			console.log('Feedback received (D1 not available):', JSON.stringify({
				id_chirho: feedbackIdChirho,
				type_chirho: bodyChirho.type_chirho,
				message_chirho: bodyChirho.message_chirho.trim().slice(0, 100) + '...',
				created_at_chirho: createdAtChirho
			}));
		}

		// TODO: Send notification email via 2SMTP when feedback is received
		// This can be enabled once we have the email system fully configured

		return json({
			data_chirho: {
				id_chirho: feedbackIdChirho,
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

// GET endpoint to retrieve feedback statistics
export const GET: RequestHandler = async ({ url, platform }) => {
	const dbChirho = platform?.env?.FEEDBACK_DB_CHIRHO;

	if (!dbChirho) {
		return json({
			data_chirho: {
				total_chirho: 0,
				message_chirho: 'Database not available'
			}
		});
	}

	try {
		// Get feedback counts by type
		const statsResultChirho = await dbChirho.prepare(`
			SELECT
				COUNT(*) as total_chirho,
				SUM(CASE WHEN type_chirho = 'bug' THEN 1 ELSE 0 END) as bugs_chirho,
				SUM(CASE WHEN type_chirho = 'feature' THEN 1 ELSE 0 END) as features_chirho,
				SUM(CASE WHEN type_chirho = 'general' THEN 1 ELSE 0 END) as general_chirho,
				SUM(CASE WHEN resolved_chirho = 0 THEN 1 ELSE 0 END) as unresolved_chirho,
				AVG(CASE WHEN rating_chirho IS NOT NULL THEN rating_chirho END) as avg_rating_chirho
			FROM feedback_chirho
		`).first<{
			total_chirho: number;
			bugs_chirho: number;
			features_chirho: number;
			general_chirho: number;
			unresolved_chirho: number;
			avg_rating_chirho: number | null;
		}>();

		return json({
			data_chirho: {
				total_chirho: statsResultChirho?.total_chirho || 0,
				bugs_chirho: statsResultChirho?.bugs_chirho || 0,
				features_chirho: statsResultChirho?.features_chirho || 0,
				general_chirho: statsResultChirho?.general_chirho || 0,
				unresolved_chirho: statsResultChirho?.unresolved_chirho || 0,
				avg_rating_chirho: statsResultChirho?.avg_rating_chirho
					? Math.round(statsResultChirho.avg_rating_chirho * 10) / 10
					: null,
				message_chirho: 'Feedback statistics retrieved successfully'
			}
		});
	} catch (errorChirho) {
		console.error('Feedback stats error:', errorChirho);
		return json(
			{
				error_chirho: {
					code_chirho: 'INTERNAL_ERROR',
					message_chirho: 'Failed to retrieve feedback statistics'
				}
			},
			{ status: 500 }
		);
	}
};
