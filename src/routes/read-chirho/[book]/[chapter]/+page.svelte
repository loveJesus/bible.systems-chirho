<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. — John 3:16 -->

<script>
	let { data } = $props();

	let showBookSelectorChirho = $state(false);
	let showChapterSelectorChirho = $state(false);
	let copiedVerseChirho = $state(null);
	let showShareMenuChirho = $state(null);
	let selectedVerseChirho = $state(null);
	let crossRefsChirho = $state(null);
	let loadingRefsChirho = $state(false);

	// Book abbreviation mapping for cross-reference lookup
	const bookAbbrevMapChirho = {
		genesis: 'Gen',
		exodus: 'Exo',
		leviticus: 'Lev',
		numbers: 'Num',
		deuteronomy: 'Deu',
		psalms: 'Psa',
		proverbs: 'Pro',
		john: 'Jhn',
		romans: 'Rom',
		matthew: 'Mat'
	};

	function getBookAbbrevChirho() {
		const lowerNameChirho = data.bookChirho.name.toLowerCase();
		return bookAbbrevMapChirho[lowerNameChirho] || data.bookChirho.abbrev;
	}

	function toggleBookSelectorChirho() {
		showBookSelectorChirho = !showBookSelectorChirho;
		showChapterSelectorChirho = false;
	}

	function toggleChapterSelectorChirho() {
		showChapterSelectorChirho = !showChapterSelectorChirho;
		showBookSelectorChirho = false;
	}

	function copyVerseChirho(verseChirho) {
		const textChirho = `"${verseChirho.text}" — ${data.bookChirho.name} ${data.chapterChirho}:${verseChirho.verse} (KJV)`;
		navigator.clipboard.writeText(textChirho);
		copiedVerseChirho = verseChirho.verse;
		setTimeout(() => copiedVerseChirho = null, 2000);
	}

	function copyChapterChirho() {
		const versesTextChirho = data.versesChirho.map(v => `${v.verse}. ${v.text}`).join('\n');
		const textChirho = `${data.bookChirho.name} ${data.chapterChirho} (KJV)\n\n${versesTextChirho}`;
		navigator.clipboard.writeText(textChirho);
		copiedVerseChirho = 'chapter';
		setTimeout(() => copiedVerseChirho = null, 2000);
	}

	function toggleShareMenuChirho(verseNumChirho) {
		showShareMenuChirho = showShareMenuChirho === verseNumChirho ? null : verseNumChirho;
	}

	function shareVerseChirho(verseChirho, platformChirho) {
		const textChirho = `"${verseChirho.text}" — ${data.bookChirho.name} ${data.chapterChirho}:${verseChirho.verse}`;
		const urlChirho = `https://bible.systems/read-chirho/${data.bookChirho.abbrev.toLowerCase()}/${data.chapterChirho}#v${verseChirho.verse}`;

		const shareUrlsChirho = {
			twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(textChirho)}&url=${encodeURIComponent(urlChirho)}`,
			facebook: `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(textChirho)}&u=${encodeURIComponent(urlChirho)}`,
			email: `mailto:?subject=${encodeURIComponent(`${data.bookChirho.name} ${data.chapterChirho}:${verseChirho.verse}`)}&body=${encodeURIComponent(textChirho + '\n\n' + urlChirho)}`
		};

		window.open(shareUrlsChirho[platformChirho], '_blank', 'width=600,height=400');
		showShareMenuChirho = null;
	}

	async function toggleCrossRefsChirho(verseNumChirho) {
		if (selectedVerseChirho === verseNumChirho) {
			selectedVerseChirho = null;
			crossRefsChirho = null;
			return;
		}

		selectedVerseChirho = verseNumChirho;
		loadingRefsChirho = true;
		crossRefsChirho = null;

		try {
			const bookAbbrevChirho = getBookAbbrevChirho();
			const responseChirho = await fetch(
				`/api-chirho/cross-references-chirho?book=${bookAbbrevChirho}&chapter=${data.chapterChirho}&verse=${verseNumChirho}`
			);
			const resultChirho = await responseChirho.json();
			if (resultChirho.data_chirho) {
				crossRefsChirho = resultChirho.data_chirho;
			}
		} catch (errorChirho) {
			console.error('Error fetching cross-references:', errorChirho);
		} finally {
			loadingRefsChirho = false;
		}
	}

	// Close menus when clicking outside
	function handleClickOutsideChirho(eventChirho) {
		if (!eventChirho.target.closest('.share-menu-chirho') && !eventChirho.target.closest('.share-btn-chirho')) {
			showShareMenuChirho = null;
		}
		if (!eventChirho.target.closest('.selector-chirho')) {
			showBookSelectorChirho = false;
			showChapterSelectorChirho = false;
		}
	}

	// Keyboard navigation
	function handleKeydownChirho(eventChirho) {
		// Don't navigate if typing in an input
		if (eventChirho.target.tagName === 'INPUT' || eventChirho.target.tagName === 'TEXTAREA') return;

		if (eventChirho.key === 'ArrowLeft' && data.navigationChirho.prevChapter) {
			window.location.href = `/read-chirho/${data.bookChirho.abbrev.toLowerCase()}/${data.navigationChirho.prevChapter}`;
		} else if (eventChirho.key === 'ArrowRight' && data.navigationChirho.nextChapter) {
			window.location.href = `/read-chirho/${data.bookChirho.abbrev.toLowerCase()}/${data.navigationChirho.nextChapter}`;
		} else if (eventChirho.key === 'Escape') {
			selectedVerseChirho = null;
			crossRefsChirho = null;
		}
	}
</script>

<svelte:window onclick={handleClickOutsideChirho} onkeydown={handleKeydownChirho} />

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
			<p class="text-xl text-amber-400 mb-4">Chapter {data.chapterChirho}</p>
			<!-- Copy Chapter Button -->
			<button
				onclick={copyChapterChirho}
				class="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm text-slate-300 hover:text-white transition-colors"
			>
				{#if copiedVerseChirho === 'chapter'}
					<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span class="text-green-400">Copied!</span>
				{:else}
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
					</svg>
					Copy Chapter
				{/if}
			</button>
		</header>

		<!-- Verses -->
		<div class="space-y-4">
			{#each data.versesChirho as verseChirho}
				<div class="group relative" id="v{verseChirho.verse}">
					<p class="text-lg md:text-xl text-slate-200 leading-relaxed pr-20">
						<sup class="text-amber-500 font-semibold mr-2 text-base">{verseChirho.verse}</sup>
						<span class="scripture-text">{verseChirho.text}</span>
					</p>
					<!-- Verse Actions -->
					<div class="absolute right-0 top-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
						<!-- Cross-Reference Button -->
						<button
							onclick={() => toggleCrossRefsChirho(verseChirho.verse)}
							class="p-2 transition-colors {selectedVerseChirho === verseChirho.verse ? 'text-amber-400' : 'text-slate-500 hover:text-amber-400'}"
							title="View cross-references"
						>
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
							</svg>
						</button>
						<!-- Copy Button -->
						<button
							onclick={() => copyVerseChirho(verseChirho)}
							class="p-2 text-slate-500 hover:text-amber-400 transition-colors"
							title="Copy verse"
						>
							{#if copiedVerseChirho === verseChirho.verse}
								<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							{:else}
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
								</svg>
							{/if}
						</button>
						<!-- Share Button -->
						<div class="relative">
							<button
								onclick={() => toggleShareMenuChirho(verseChirho.verse)}
								class="share-btn-chirho p-2 text-slate-500 hover:text-amber-400 transition-colors"
								title="Share verse"
							>
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
								</svg>
							</button>
							<!-- Share Menu -->
							{#if showShareMenuChirho === verseChirho.verse}
								<div class="share-menu-chirho absolute right-0 top-full mt-1 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50 py-1 min-w-32">
									<button
										onclick={() => shareVerseChirho(verseChirho, 'twitter')}
										class="w-full px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2"
									>
										<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
										Twitter
									</button>
									<button
										onclick={() => shareVerseChirho(verseChirho, 'facebook')}
										class="w-full px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2"
									>
										<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
										Facebook
									</button>
									<button
										onclick={() => shareVerseChirho(verseChirho, 'email')}
										class="w-full px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2"
									>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
										Email
									</button>
								</div>
							{/if}
						</div>
					</div>

					<!-- Cross-References Panel -->
					{#if selectedVerseChirho === verseChirho.verse}
						<div class="mt-3 p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
							{#if loadingRefsChirho}
								<div class="flex items-center gap-2 text-slate-400">
									<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
										<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
										<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
									</svg>
									Loading cross-references...
								</div>
							{:else if crossRefsChirho && crossRefsChirho.cross_references_chirho?.length > 0}
								<div class="space-y-3">
									<div class="flex items-center justify-between">
										<h4 class="text-sm font-semibold text-amber-400 flex items-center gap-2">
											<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
											</svg>
											Cross-References ({crossRefsChirho.total_references_chirho})
										</h4>
										<button
											onclick={() => { selectedVerseChirho = null; crossRefsChirho = null; }}
											class="text-slate-500 hover:text-slate-300 p-1"
											aria-label="Close cross-references panel"
										>
											<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
											</svg>
										</button>
									</div>
									{#each crossRefsChirho.cross_references_chirho as groupChirho}
										<div>
											{#if groupChirho.topic_chirho}
												<p class="text-xs text-slate-400 uppercase tracking-wide mb-1">{groupChirho.topic_chirho}</p>
											{/if}
											<div class="flex flex-wrap gap-2">
												{#each groupChirho.references_chirho as refChirho}
													<span
														class="inline-block px-2 py-1 bg-slate-700 hover:bg-amber-500/20 border border-slate-600 hover:border-amber-500/50 rounded text-sm text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
														title={refChirho.raw_chirho}
													>
														{refChirho.formatted_chirho}
													</span>
												{/each}
											</div>
										</div>
									{/each}
								</div>
							{:else}
								<p class="text-slate-400 text-sm">No cross-references available for this verse yet.</p>
							{/if}
						</div>
					{/if}
				</div>
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
