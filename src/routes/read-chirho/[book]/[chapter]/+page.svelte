<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. — John 3:16 -->

<script>
	let { data } = $props();

	let showBookSelectorChirho = $state(false);
	let showChapterSelectorChirho = $state(false);

	function toggleBookSelectorChirho() {
		showBookSelectorChirho = !showBookSelectorChirho;
		showChapterSelectorChirho = false;
	}

	function toggleChapterSelectorChirho() {
		showChapterSelectorChirho = !showChapterSelectorChirho;
		showBookSelectorChirho = false;
	}
</script>

<svelte:head>
	<title>{data.bookChirho.name} {data.chapterChirho} - Bible.Systems</title>
	<meta
		name="description"
		content="Read {data.bookChirho.name} chapter {data.chapterChirho} in the King James Version (KJV) on Bible.Systems"
	/>
	<link rel="canonical" href="https://bible.systems/read-chirho/{data.bookChirho.abbrev.toLowerCase()}/{data.chapterChirho}" />
</svelte:head>

<div class="min-h-screen bg-slate-950">
	<!-- Navigation Header -->
	<div class="sticky top-16 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
		<div class="max-w-4xl mx-auto px-4 py-3">
			<div class="flex items-center justify-between">
				<!-- Book/Chapter Selector -->
				<div class="flex items-center gap-2">
					<!-- Book Selector -->
					<div class="relative">
						<button
							onclick={toggleBookSelectorChirho}
							class="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-white font-medium transition-colors"
						>
							{data.bookChirho.name}
							<svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</button>
						{#if showBookSelectorChirho}
							<div class="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto">
								{#each data.navigationChirho.allBooks as bookChirho}
									<a
										href="/read-chirho/{bookChirho.abbrev.toLowerCase()}/{bookChirho.name === data.bookChirho.name ? data.chapterChirho : data.navigationChirho.availableChapters[0]}"
										class="block px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-amber-400 transition-colors {bookChirho.name === data.bookChirho.name ? 'bg-amber-500/20 text-amber-400' : ''}"
									>
										{bookChirho.name}
									</a>
								{/each}
							</div>
						{/if}
					</div>

					<!-- Chapter Selector -->
					<div class="relative">
						<button
							onclick={toggleChapterSelectorChirho}
							class="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-white font-medium transition-colors"
						>
							Chapter {data.chapterChirho}
							<svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</button>
						{#if showChapterSelectorChirho}
							<div class="absolute top-full left-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50 p-2">
								<div class="grid grid-cols-5 gap-1">
									{#each data.navigationChirho.availableChapters as chapChirho}
										<a
											href="/read-chirho/{data.bookChirho.abbrev.toLowerCase()}/{chapChirho}"
											class="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors {chapChirho === data.chapterChirho ? 'bg-amber-500 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}"
										>
											{chapChirho}
										</a>
									{/each}
								</div>
							</div>
						{/if}
					</div>
				</div>

				<!-- Version Badge -->
				<span class="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium">
					KJV
				</span>
			</div>
		</div>
	</div>

	<!-- Scripture Content -->
	<article class="max-w-3xl mx-auto px-4 py-8">
		<!-- Chapter Header -->
		<header class="text-center mb-10">
			<h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
				{data.bookChirho.name}
			</h1>
			<p class="text-xl text-amber-400">Chapter {data.chapterChirho}</p>
		</header>

		<!-- Verses -->
		<div class="space-y-4">
			{#each data.versesChirho as verseChirho}
				<p class="text-lg md:text-xl text-slate-200 leading-relaxed" id="v{verseChirho.verse}">
					<sup class="text-amber-500 font-semibold mr-2 text-base">{verseChirho.verse}</sup>
					<span class="scripture-text">{verseChirho.text}</span>
				</p>
			{/each}
		</div>

		<!-- Chapter Navigation -->
		<nav class="mt-12 pt-8 border-t border-slate-800">
			<div class="flex items-center justify-between">
				{#if data.navigationChirho.prevChapter}
					<a
						href="/read-chirho/{data.bookChirho.abbrev.toLowerCase()}/{data.navigationChirho.prevChapter}"
						class="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors"
					>
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
						</svg>
						Chapter {data.navigationChirho.prevChapter}
					</a>
				{:else}
					<div></div>
				{/if}

				<a
					href="/"
					class="px-4 py-2 text-slate-400 hover:text-amber-400 transition-colors"
				>
					Home
				</a>

				{#if data.navigationChirho.nextChapter}
					<a
						href="/read-chirho/{data.bookChirho.abbrev.toLowerCase()}/{data.navigationChirho.nextChapter}"
						class="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors"
					>
						Chapter {data.navigationChirho.nextChapter}
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</a>
				{:else}
					<div></div>
				{/if}
			</div>
		</nav>
	</article>
</div>

<style>
	.scripture-text {
		font-family: Georgia, 'Times New Roman', serif;
	}
</style>
