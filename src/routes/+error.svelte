<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. — John 3:16 -->

<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Page Not Found - Bible.Systems</title>
	<meta name="description" content="The page you're looking for could not be found." />
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="min-h-[80vh] flex items-center justify-center px-4">
	<div class="text-center max-w-lg">
		<!-- Error Icon -->
		<div class="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-8">
			<svg class="w-12 h-12 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
			</svg>
		</div>

		<!-- Error Code -->
		<h1 class="text-6xl font-black text-gradient-gold mb-4">{$page.status}</h1>

		<!-- Error Message -->
		<h2 class="text-2xl font-bold text-white mb-4">
			{#if $page.status === 404}
				Page Not Found
			{:else}
				Something Went Wrong
			{/if}
		</h2>

		<p class="text-slate-400 mb-8">
			{#if $page.status === 404}
				The page you're looking for doesn't exist or has been moved.
			{:else if $page.error?.message}
				{$page.error.message}
			{:else}
				An unexpected error occurred. Please try again.
			{/if}
		</p>

		<!-- Scripture Quote -->
		<blockquote class="text-amber-400/70 italic text-sm mb-8 px-4">
			"Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you."
			<cite class="block mt-1 text-amber-500/50 not-italic">— Matthew 7:7</cite>
		</blockquote>

		<!-- Actions -->
		<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
			<a
				href="/"
				class="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
				</svg>
				Go Home
			</a>
			<a
				href="/features-fe"
				class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-lg transition-colors border border-slate-700"
			>
				View Features
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</div>
</div>
