<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. — John 3:16 -->

<script>
	import '../app.css';
	import FeedbackBubbleChirho from '$lib/components/FeedbackBubbleChirho.svelte';
	let { children } = $props();
</script>

<div class="min-h-screen bg-slate-950 text-white flex flex-col">
	<!-- Skip Links for Accessibility -->
	<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-amber-500 focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold">
		Skip to main content
	</a>
	<a href="#footer-navigation" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-48 focus:z-[100] focus:bg-amber-500 focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold">
		Skip to footer
	</a>

	<header class="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
		<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
			<div class="flex items-center justify-between h-16">
				<a href="/" class="flex items-center gap-3">
					<div class="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
						<span class="text-2xl">📖</span>
					</div>
					<span class="text-xl font-bold text-gradient-gold">Bible.Systems</span>
				</a>
				<div class="flex items-center gap-6">
					<a href="/features-fe" class="text-slate-400 hover:text-amber-400 text-sm hidden sm:block">Features</a>
					<a href="/contact-fe" class="text-slate-400 hover:text-amber-400 text-sm hidden sm:block">Contact</a>
					<a href="https://stack.faith" class="text-slate-400 hover:text-amber-400 text-sm">FaithStack</a>
				</div>
			</div>
		</nav>
	</header>

	<main id="main-content" class="pt-16 flex-1">
		{@render children()}
	</main>

	<footer id="footer-navigation" class="bg-slate-900 border-t border-slate-800 py-12">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
				<!-- Brand -->
				<div class="col-span-2 md:col-span-1">
					<div class="flex items-center gap-2 mb-4">
						<span class="text-2xl">📖</span>
						<span class="text-lg font-bold text-gradient-gold">Bible.Systems</span>
					</div>
					<p class="text-slate-400 text-sm">
						Comprehensive Bible study platform with cross-references, original languages, and API access.
					</p>
				</div>

				<!-- Resources -->
				<div>
					<h4 class="text-white font-semibold mb-4">Resources</h4>
					<ul class="space-y-2">
						<li><a href="/features-fe" class="text-slate-400 hover:text-amber-400 text-sm">Feature Requests</a></li>
						<li><a href="https://github.com/loveJesus/bible.systems-chirho" class="text-slate-400 hover:text-amber-400 text-sm">GitHub</a></li>
						<li><a href="https://stack.faith" class="text-slate-400 hover:text-amber-400 text-sm">FaithStack</a></li>
					</ul>
				</div>

				<!-- Legal -->
				<div>
					<h4 class="text-white font-semibold mb-4">Legal</h4>
					<ul class="space-y-2">
						<li><a href="/privacy-fe" class="text-slate-400 hover:text-amber-400 text-sm">Privacy Policy</a></li>
						<li><a href="/terms-fe" class="text-slate-400 hover:text-amber-400 text-sm">Terms of Service</a></li>
						<li><a href="/accessibility-fe" class="text-slate-400 hover:text-amber-400 text-sm">Accessibility</a></li>
					</ul>
				</div>

				<!-- Contact -->
				<div>
					<h4 class="text-white font-semibold mb-4">Contact</h4>
					<ul class="space-y-2">
						<li><a href="/contact-fe" class="text-slate-400 hover:text-amber-400 text-sm">Contact Us</a></li>
						<li><a href="mailto:hello@bible.systems" class="text-slate-400 hover:text-amber-400 text-sm">hello@bible.systems</a></li>
					</ul>
				</div>
			</div>

			<!-- Bottom -->
			<div class="border-t border-slate-800 pt-8 text-center">
				<p class="text-amber-400 font-semibold mb-2">JESUS CHRIST IS LORD</p>
				<div class="flex justify-center mb-3">
					<a
						href="https://kingdominvest.ing/campaigns-chirho/biblesystems-campaign-chirho"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-lg"
						title="Support Bible.Systems on KingdomInvest.ing"
					>
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
							<path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3H5v2h14v-2z"/>
						</svg>
						Support This Project
					</a>
				</div>
				<p class="text-slate-500 text-sm">
					Part of <a href="https://stack.faith" class="text-amber-400 hover:underline">FaithStack</a> ·
					<a href="/privacy-fe" class="hover:text-amber-400">Privacy</a> ·
					<a href="/terms-fe" class="hover:text-amber-400">Terms</a> ·
					<a href="/accessibility-fe" class="hover:text-amber-400">Accessibility</a>
				</p>
				<p class="text-slate-600 text-xs mt-4">© {new Date().getFullYear()} Bible.Systems. All rights reserved.</p>
			</div>
		</div>
	</footer>

	<!-- Feedback Bubble -->
	<FeedbackBubbleChirho />
</div>
