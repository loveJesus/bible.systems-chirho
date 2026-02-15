<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. — John 3:16 -->

<script>
	let { data } = $props();

	// Group books by testament
	let otBooksChirho = $derived(
		data.booksChirho.filter((bChirho) => bChirho.testamentChirho === 'OT')
	);
	let ntBooksChirho = $derived(
		data.booksChirho.filter((bChirho) => bChirho.testamentChirho === 'NT')
	);
</script>

<svelte:head>
	<title>Read the Bible - Bible.Systems</title>
	<meta
		name="description"
		content="Read the Holy Bible online. King James Version (KJV) with all 66 books and 31,102 verses."
	/>
	<link rel="canonical" href="https://bible.systems/read-chirho" />
</svelte:head>

<div class="min-h-screen bg-slate-950">
	<div class="max-w-6xl mx-auto px-4 py-12">
		<!-- Header -->
		<div class="text-center mb-12">
			<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Read the Bible</h1>
			<p class="text-xl text-slate-400 mb-4">King James Version (KJV) - Public Domain</p>
			{#if data.sourceChirho === 'd1' && data.verseCountChirho > 0}
				<p class="text-amber-400 font-medium">
					{data.booksChirho.length} Books • {data.verseCountChirho.toLocaleString()} Verses
				</p>
			{/if}
		</div>

		<!-- Quick Access -->
		<div class="mb-12">
			<h2 class="text-xl font-semibold text-white mb-4">Popular Passages</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
				<a
					href="/read-chirho/kjv/gen/1"
					class="p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-amber-500/50 transition-colors group"
				>
					<p class="text-amber-400 font-semibold group-hover:text-amber-300">Genesis 1</p>
					<p class="text-slate-400 text-sm">In the beginning...</p>
				</a>
				<a
					href="/read-chirho/kjv/jhn/3"
					class="p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-amber-500/50 transition-colors group"
				>
					<p class="text-amber-400 font-semibold group-hover:text-amber-300">John 3</p>
					<p class="text-slate-400 text-sm">For God so loved...</p>
				</a>
				<a
					href="/read-chirho/kjv/psa/23"
					class="p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-amber-500/50 transition-colors group"
				>
					<p class="text-amber-400 font-semibold group-hover:text-amber-300">Psalm 23</p>
					<p class="text-slate-400 text-sm">The Lord is my shepherd</p>
				</a>
				<a
					href="/read-chirho/kjv/rom/8"
					class="p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-amber-500/50 transition-colors group"
				>
					<p class="text-amber-400 font-semibold group-hover:text-amber-300">Romans 8</p>
					<p class="text-slate-400 text-sm">No condemnation</p>
				</a>
				<a
					href="/read-chirho/kjv/mat/5"
					class="p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-amber-500/50 transition-colors group"
				>
					<p class="text-amber-400 font-semibold group-hover:text-amber-300">Matthew 5</p>
					<p class="text-slate-400 text-sm">The Beatitudes</p>
				</a>
				<a
					href="/read-chirho/kjv/pro/3"
					class="p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-amber-500/50 transition-colors group"
				>
					<p class="text-amber-400 font-semibold group-hover:text-amber-300">Proverbs 3</p>
					<p class="text-slate-400 text-sm">Trust in the Lord</p>
				</a>
				<a
					href="/read-chirho/kjv/isa/53"
					class="p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-amber-500/50 transition-colors group"
				>
					<p class="text-amber-400 font-semibold group-hover:text-amber-300">Isaiah 53</p>
					<p class="text-slate-400 text-sm">The Suffering Servant</p>
				</a>
				<a
					href="/read-chirho/kjv/rev/21"
					class="p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-amber-500/50 transition-colors group"
				>
					<p class="text-amber-400 font-semibold group-hover:text-amber-300">Revelation 21</p>
					<p class="text-slate-400 text-sm">New Heaven and Earth</p>
				</a>
			</div>
		</div>

		<!-- Old Testament -->
		{#if otBooksChirho.length > 0}
			<div class="mb-12">
				<h2 class="text-2xl font-bold text-white mb-2">Old Testament</h2>
				<p class="text-slate-400 mb-6">{otBooksChirho.length} Books</p>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
					{#each otBooksChirho as bookChirho}
						<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
							<div class="flex items-center justify-between mb-3">
								<h3 class="text-lg font-bold text-white">{bookChirho.nameChirho}</h3>
								<span class="text-xs text-slate-500">{bookChirho.availableChaptersChirho.length} ch</span>
							</div>
							<div class="flex flex-wrap gap-1">
								{#each bookChirho.availableChaptersChirho as chapChirho}
									<a
										href="/read-chirho/kjv/{bookChirho.idChirho}/{chapChirho}"
										class="w-8 h-8 flex items-center justify-center bg-slate-800 hover:bg-amber-500 rounded text-slate-300 hover:text-white text-xs font-medium transition-colors"
									>
										{chapChirho}
									</a>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- New Testament -->
		{#if ntBooksChirho.length > 0}
			<div class="mb-12">
				<h2 class="text-2xl font-bold text-white mb-2">New Testament</h2>
				<p class="text-slate-400 mb-6">{ntBooksChirho.length} Books</p>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
					{#each ntBooksChirho as bookChirho}
						<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
							<div class="flex items-center justify-between mb-3">
								<h3 class="text-lg font-bold text-white">{bookChirho.nameChirho}</h3>
								<span class="text-xs text-slate-500">{bookChirho.availableChaptersChirho.length} ch</span>
							</div>
							<div class="flex flex-wrap gap-1">
								{#each bookChirho.availableChaptersChirho as chapChirho}
									<a
										href="/read-chirho/kjv/{bookChirho.idChirho}/{chapChirho}"
										class="w-8 h-8 flex items-center justify-center bg-slate-800 hover:bg-amber-500 rounded text-slate-300 hover:text-white text-xs font-medium transition-colors"
									>
										{chapChirho}
									</a>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- API Info -->
		<div class="mt-16 p-6 bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-xl">
			<div class="flex items-start gap-4">
				<div class="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
					<svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
						/>
					</svg>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-white mb-2">API Access</h3>
					<p class="text-slate-400 text-sm mb-3">
						Access Bible data programmatically via our REST API.
					</p>
					<div class="bg-slate-950 rounded-lg p-3 font-mono text-sm">
						<span class="text-slate-500">GET</span>
						<span class="text-amber-400 ml-2">/api-chirho/bible-chirho/kjv/jhn/3</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Back Link -->
		<div class="mt-12 text-center">
			<a href="/" class="text-amber-400 hover:underline">Back to Home</a>
		</div>
	</div>
</div>
