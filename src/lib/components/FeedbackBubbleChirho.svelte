<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. - John 3:16 -->

<script lang="ts">
	import type { FeedbackTypeChirho } from '$lib/types_chirho/feedback-chirho';

	let isOpenChirho = $state(false);
	let feedbackTypeChirho = $state<FeedbackTypeChirho>('general');
	let messageChirho = $state('');
	let emailChirho = $state('');
	let ratingChirho = $state(0);
	let isSubmittingChirho = $state(false);
	let submittedChirho = $state(false);
	let errorChirho = $state('');
	let turnstileTokenChirho = $state('');
	let turnstileWidgetIdChirho = $state<string | null>(null);

	// Turnstile site key (public)
	// Test key that always passes - replace with production key from Cloudflare Dashboard
	// Docs: https://developers.cloudflare.com/turnstile/troubleshooting/testing/
	const TURNSTILE_SITE_KEY_CHIRHO = '1x00000000000000000000AA';

	function toggleBubbleChirho() {
		isOpenChirho = !isOpenChirho;
		if (!isOpenChirho) {
			resetFormChirho();
		}
	}

	function resetFormChirho() {
		feedbackTypeChirho = 'general';
		messageChirho = '';
		emailChirho = '';
		ratingChirho = 0;
		submittedChirho = false;
		errorChirho = '';
		turnstileTokenChirho = '';
		// Reset Turnstile widget if it exists
		if (turnstileWidgetIdChirho !== null && typeof window !== 'undefined' && window.turnstile) {
			window.turnstile.reset(turnstileWidgetIdChirho);
		}
	}

	function initTurnstileChirho() {
		if (typeof window !== 'undefined' && window.turnstile) {
			const containerChirho = document.getElementById('turnstile-container-chirho');
			if (containerChirho && !turnstileWidgetIdChirho) {
				turnstileWidgetIdChirho = window.turnstile.render('#turnstile-container-chirho', {
					sitekey: TURNSTILE_SITE_KEY_CHIRHO,
					callback: (tokenChirho) => {
						turnstileTokenChirho = tokenChirho;
					},
					'error-callback': () => {
						errorChirho = 'Verification failed. Please try again.';
					},
					theme: 'dark',
					size: 'flexible'
				}) ?? null;
			}
		}
	}

	$effect(() => {
		if (isOpenChirho && !submittedChirho) {
			// Wait for DOM to update, then init Turnstile
			setTimeout(initTurnstileChirho, 100);
		}
	});

	function setFeedbackTypeChirho(typeChirho: FeedbackTypeChirho) {
		feedbackTypeChirho = typeChirho;
	}

	function setRatingChirho(valueChirho: number) {
		ratingChirho = valueChirho;
	}

	async function submitFeedbackChirho(eventChirho: SubmitEvent) {
		eventChirho.preventDefault();
		if (!messageChirho.trim()) {
			errorChirho = 'Please enter your feedback';
			return;
		}

		if (!turnstileTokenChirho) {
			errorChirho = 'Please complete the verification';
			return;
		}

		isSubmittingChirho = true;
		errorChirho = '';

		try {
			const responseChirho = await fetch('/api-chirho/feedback-chirho', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					type_chirho: feedbackTypeChirho,
					message_chirho: messageChirho,
					email_chirho: emailChirho || null,
					rating_chirho: ratingChirho > 0 ? ratingChirho : null,
					page_url_chirho: window.location.href,
					user_agent_chirho: navigator.userAgent,
					turnstile_token_chirho: turnstileTokenChirho
				})
			});

			if (responseChirho.ok) {
				submittedChirho = true;
				setTimeout(() => {
					isOpenChirho = false;
					setTimeout(resetFormChirho, 300);
				}, 2000);
			} else {
				const dataChirho = await responseChirho.json();
				errorChirho = dataChirho.error_chirho?.message_chirho || 'Failed to submit feedback';
			}
		} catch (errChirho) {
			errorChirho = 'Network error. Please try again.';
		} finally {
			isSubmittingChirho = false;
		}
	}

	function getLabelTextChirho() {
		if (feedbackTypeChirho === 'bug') return 'Describe the issue';
		if (feedbackTypeChirho === 'feature') return 'Describe your idea';
		return 'Your feedback';
	}

	function getPlaceholderTextChirho() {
		if (feedbackTypeChirho === 'bug') return 'What happened? What did you expect?';
		if (feedbackTypeChirho === 'feature') return 'What feature would help your Bible study?';
		return 'Share your thoughts...';
	}
</script>

<!-- Feedback Bubble Button -->
<button
	onclick={toggleBubbleChirho}
	class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-full shadow-lg shadow-amber-500/25 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
	aria-label="Send feedback"
>
	{#if isOpenChirho}
		<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
		</svg>
	{:else}
		<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
		</svg>
	{/if}
</button>

<!-- Feedback Panel -->
{#if isOpenChirho}
	<div class="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden animate-in">
		<!-- Header -->
		<div class="bg-gradient-to-r from-amber-500/20 to-amber-600/20 border-b border-slate-700 px-4 py-3">
			<h3 class="text-lg font-semibold text-white flex items-center gap-2">
				<span class="text-xl">📖</span>
				Send Feedback
			</h3>
			<p class="text-sm text-slate-400 mt-1">Help us improve Bible.Systems</p>
		</div>

		{#if submittedChirho}
			<!-- Success State -->
			<div class="p-6 text-center">
				<div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
					<svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
				</div>
				<h4 class="text-lg font-semibold text-white mb-2">Thank You!</h4>
				<p class="text-slate-400 text-sm">Your feedback has been received. God bless you!</p>
			</div>
		{:else}
			<!-- Feedback Form -->
			<form onsubmit={submitFeedbackChirho} class="p-4 space-y-4">
				<!-- Feedback Type -->
				<div class="flex gap-2">
					<button
						type="button"
						onclick={() => setFeedbackTypeChirho('bug')}
						class="flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all {feedbackTypeChirho === 'bug' ? 'bg-amber-500/20 border-amber-500 text-amber-400 border' : 'bg-slate-800 border-slate-700 text-slate-400 border hover:bg-slate-700'}"
					>
						<span class="block text-lg mb-1">🐛</span>
						<span class="text-xs">Bug Report</span>
					</button>
					<button
						type="button"
						onclick={() => setFeedbackTypeChirho('feature')}
						class="flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all {feedbackTypeChirho === 'feature' ? 'bg-amber-500/20 border-amber-500 text-amber-400 border' : 'bg-slate-800 border-slate-700 text-slate-400 border hover:bg-slate-700'}"
					>
						<span class="block text-lg mb-1">💡</span>
						<span class="text-xs">Feature</span>
					</button>
					<button
						type="button"
						onclick={() => setFeedbackTypeChirho('general')}
						class="flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all {feedbackTypeChirho === 'general' ? 'bg-amber-500/20 border-amber-500 text-amber-400 border' : 'bg-slate-800 border-slate-700 text-slate-400 border hover:bg-slate-700'}"
					>
						<span class="block text-lg mb-1">💬</span>
						<span class="text-xs">General</span>
					</button>
				</div>

				<!-- Message -->
				<div>
					<label for="feedback-message" class="block text-sm font-medium text-slate-300 mb-1">
						{getLabelTextChirho()}
					</label>
					<textarea
						id="feedback-message"
						bind:value={messageChirho}
						rows="4"
						class="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
						placeholder={getPlaceholderTextChirho()}
					></textarea>
				</div>

				<!-- Rating (for general feedback) -->
				{#if feedbackTypeChirho === 'general'}
					<div>
						<span class="block text-sm font-medium text-slate-300 mb-2">How would you rate your experience?</span>
						<div class="flex gap-2 justify-center">
							<button type="button" onclick={() => setRatingChirho(1)} class="text-2xl transition-transform hover:scale-110 {ratingChirho >= 1 ? 'text-amber-400' : 'text-slate-600'}">★</button>
							<button type="button" onclick={() => setRatingChirho(2)} class="text-2xl transition-transform hover:scale-110 {ratingChirho >= 2 ? 'text-amber-400' : 'text-slate-600'}">★</button>
							<button type="button" onclick={() => setRatingChirho(3)} class="text-2xl transition-transform hover:scale-110 {ratingChirho >= 3 ? 'text-amber-400' : 'text-slate-600'}">★</button>
							<button type="button" onclick={() => setRatingChirho(4)} class="text-2xl transition-transform hover:scale-110 {ratingChirho >= 4 ? 'text-amber-400' : 'text-slate-600'}">★</button>
							<button type="button" onclick={() => setRatingChirho(5)} class="text-2xl transition-transform hover:scale-110 {ratingChirho >= 5 ? 'text-amber-400' : 'text-slate-600'}">★</button>
						</div>
					</div>
				{/if}

				<!-- Email (optional) -->
				<div>
					<label for="feedback-email" class="block text-sm font-medium text-slate-300 mb-1">
						Email <span class="text-slate-500">(optional, for follow-up)</span>
					</label>
					<input
						type="email"
						id="feedback-email"
						bind:value={emailChirho}
						class="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
						placeholder="your@email.com"
					/>
				</div>

				<!-- Turnstile CAPTCHA -->
				<div id="turnstile-container-chirho" class="flex justify-center"></div>

				<!-- Error Message -->
				{#if errorChirho}
					<div class="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
						{errorChirho}
					</div>
				{/if}

				<!-- Submit Button -->
				<button
					type="submit"
					disabled={isSubmittingChirho}
					class="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
				>
					{#if isSubmittingChirho}
						<svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						Sending...
					{:else}
						Send Feedback
					{/if}
				</button>
			</form>
		{/if}
	</div>
{/if}

<style>
	@keyframes slide-in-from-bottom-4 {
		from {
			opacity: 0;
			transform: translateY(1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-in {
		animation: slide-in-from-bottom-4 0.3s ease-out;
	}
</style>
