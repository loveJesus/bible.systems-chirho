<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. — John 3:16 -->

<svelte:head>
	<title>Bible.Systems - Open Source Bible Study Platform (In Development)</title>
	<meta name="description" content="Free, open-source Bible study platform in active development. Building cross-references, Hebrew/Greek tools, and API access. Join us in creating accessible Bible study tools." />
	<meta name="keywords" content="Bible study, cross-references, Strong's concordance, Hebrew, Greek, open source, Bible API, free Bible tools" />

	<!-- Open Graph -->
	<meta property="og:title" content="Bible.Systems - Open Source Bible Study (In Development)" />
	<meta property="og:description" content="Open-source Bible study tools in active development. Help us build free, accessible Scripture study resources." />
	<meta property="og:url" content="https://bible.systems" />
	<meta property="og:image" content="https://bible.systems/og-image.png" />

	<!-- Twitter -->
	<meta name="twitter:title" content="Bible.Systems - Open Source Bible Study" />
	<meta name="twitter:description" content="Open-source Bible study platform in development. Free Scripture tools for everyone." />

	<!-- Canonical -->
	<link rel="canonical" href="https://bible.systems" />
</svelte:head>

<div class="bg-gradient-bible min-h-screen">
	<!-- Hero Section -->
	<section class="max-w-7xl mx-auto px-4 pt-20 pb-16 text-center">
		<div class="mb-8 flex flex-wrap items-center justify-center gap-3">
			<span class="inline-block bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-amber-400 text-sm font-medium">
				Open Source
			</span>
			<span class="inline-block bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-amber-400 text-sm font-medium">
				In Development
			</span>
			<span class="inline-block bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-amber-400 text-sm font-medium">
				MIT License
			</span>
		</div>

		<h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight">
			<span class="text-gradient-gold">Open Source</span><br />
			<span class="text-white">Bible Study</span><br />
			<span class="text-slate-400 text-4xl md:text-5xl">In Development</span>
		</h1>

		<p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-6">
			Building free Bible study tools with cross-references, original language support,
			and API access. We're just getting started — join us on the journey.
		</p>

		<blockquote class="text-amber-400 text-lg italic mb-10 max-w-2xl mx-auto">
			"Your word is a lamp to my feet and a light to my path."
			<cite class="block text-amber-500/70 text-base mt-1 not-italic">— Psalm 119:105</cite>
		</blockquote>

		<!-- CTA Buttons -->
		<div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
			<a
				href="/read-chirho"
				class="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 rounded-full px-8 py-3 text-white font-bold transition-colors"
			>
				Start Reading
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
			<a
				href="/features-fe"
				class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full px-8 py-3 text-slate-300 font-medium transition-colors"
			>
				View All Features
			</a>
		</div>

		<!-- Status -->
		<div class="inline-flex items-center gap-2 bg-slate-800/70 border border-slate-700 rounded-full px-5 py-2">
			<span class="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
			<span class="text-slate-400 text-sm">Building Phase 1: KJV + Cross-References + API</span>
		</div>
	</section>

	<!-- Current Status Bar -->
	<section class="max-w-5xl mx-auto px-4 py-8">
		<div class="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 text-center">
			<h2 class="text-amber-400 font-bold mb-2">Early Development</h2>
			<p class="text-slate-300 text-sm max-w-2xl mx-auto">
				We have sample KJV chapters, basic cross-references, and a working interlinear prototype.
				Full Bible content, lexicons, and advanced features are being built.
			</p>
		</div>
	</section>

	<!-- Featured Verse & Quick Access -->
	<section class="max-w-5xl mx-auto px-4 py-8">
		<div class="grid md:grid-cols-2 gap-6">
			<!-- Featured Verse -->
			<div class="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8">
				<div class="flex items-center gap-2 mb-4">
					<div class="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
						<svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
						</svg>
					</div>
					<span class="text-amber-400 text-sm font-medium">Featured Verse</span>
				</div>
				<blockquote class="text-lg md:text-xl text-slate-200 leading-relaxed mb-4 font-serif italic">
					"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
				</blockquote>
				<a href="/read-chirho/jhn/3" class="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors">
					John 3:16 — Read Chapter
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>

			<!-- Quick Access -->
			<div class="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8">
				<div class="flex items-center gap-2 mb-4">
					<div class="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
						<svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
						</svg>
					</div>
					<span class="text-amber-400 text-sm font-medium">Start Reading</span>
				</div>
				<p class="text-slate-300 mb-4">Jump to these popular passages:</p>
				<div class="grid grid-cols-2 gap-2">
					<a href="/read-chirho/gen/1" class="px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white text-sm transition-colors text-center">Genesis 1</a>
					<a href="/read-chirho/psa/23" class="px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white text-sm transition-colors text-center">Psalm 23</a>
					<a href="/read-chirho/rom/8" class="px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white text-sm transition-colors text-center">Romans 8</a>
					<a href="/read-chirho/heb/11" class="px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white text-sm transition-colors text-center">Hebrews 11</a>
				</div>
				<a href="/read-chirho" class="mt-4 flex items-center justify-center gap-2 w-full py-2.5 bg-amber-500 hover:bg-amber-600 rounded-lg text-white font-medium transition-colors">
					Browse All Books
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>
		</div>
	</section>

	<!-- Features In Development -->
	<section class="max-w-7xl mx-auto px-4 py-16">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">What We're Building</h2>
			<p class="text-slate-400 text-lg max-w-2xl mx-auto">Our roadmap toward comprehensive Bible study tools — open source and free</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			<!-- Cross-References with Provenance -->
			<div class="group bg-slate-900/50 hover:bg-slate-900/70 rounded-xl p-6 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300">
				<div class="flex items-start justify-between mb-4">
					<div class="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
						<svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
						</svg>
					</div>
					<span class="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">Partial</span>
				</div>
				<h3 class="text-xl font-bold text-white mb-2">Cross-References</h3>
				<p class="text-slate-400">Sample cross-references available. Full TSK import (340K+ refs) with provenance tracking is in progress.</p>
			</div>

			<!-- Morphological Search -->
			<div class="group bg-slate-900/50 hover:bg-slate-900/70 rounded-xl p-6 border border-sky-500/30 hover:border-sky-500/50 transition-all duration-300">
				<div class="flex items-start justify-between mb-4">
					<div class="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
						<svg class="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
					<span class="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">Building</span>
				</div>
				<h3 class="text-xl font-bold text-white mb-2">Morphological Search</h3>
				<p class="text-slate-400">"Find θεός in genitive case followed by adjective within 3 words" — Logos-level grammatical queries.</p>
			</div>

			<!-- Louw-Nida Semantic Domains -->
			<div class="group bg-slate-900/50 hover:bg-slate-900/70 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
				<div class="flex items-start justify-between mb-4">
					<div class="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
						<svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
						</svg>
					</div>
					<span class="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">Building</span>
				</div>
				<h3 class="text-xl font-bold text-white mb-2">Semantic Domains</h3>
				<p class="text-slate-400">Louw-Nida domains beyond Strong's numbers. Search by meaning, not just word form.</p>
			</div>

			<!-- Interlinear + Morphology -->
			<div class="group bg-slate-900/50 hover:bg-slate-900/70 rounded-xl p-6 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300">
				<div class="flex items-start justify-between mb-4">
					<div class="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
						<svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
						</svg>
					</div>
					<span class="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">Building</span>
				</div>
				<h3 class="text-xl font-bold text-white mb-2">Interlinear + Full Parsing</h3>
				<p class="text-slate-400">Hebrew/Greek/Aramaic with person, number, gender, case, tense, voice, mood, and Hebrew stems.</p>
			</div>

			<!-- Publisher Portal -->
			<div class="group bg-slate-900/50 hover:bg-slate-900/70 rounded-xl p-6 border border-rose-500/30 hover:border-rose-500/50 transition-all duration-300">
				<div class="flex items-start justify-between mb-4">
					<div class="w-12 h-12 bg-rose-500/10 rounded-lg flex items-center justify-center group-hover:bg-rose-500/20 transition-colors">
						<svg class="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
						</svg>
					</div>
					<span class="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">Building</span>
				</div>
				<h3 class="text-xl font-bold text-white mb-2">Publisher Portal</h3>
				<p class="text-slate-400">Publishers can upload resources with flexible licensing — free, subscription, or per-API-call pricing.</p>
			</div>

			<!-- REST & MCP API -->
			<div class="group bg-slate-900/50 hover:bg-slate-900/70 rounded-xl p-6 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300">
				<div class="flex items-start justify-between mb-4">
					<div class="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
						<svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
						</svg>
					</div>
					<span class="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">Planned</span>
				</div>
				<h3 class="text-xl font-bold text-white mb-2">REST & MCP API</h3>
				<p class="text-slate-400">API access for developers and AI assistants is planned. Currently basic endpoints only.</p>
			</div>
		</div>

		<div class="text-center mt-8">
			<a href="/features-fe" class="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors">
				View full roadmap
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</section>

	<!-- Architecture Preview -->
	<section class="max-w-5xl mx-auto px-4 py-16">
		<div class="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 md:p-10">
			<h2 class="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Architecture Planned</h2>
			<p class="text-slate-400 text-center mb-6 text-sm">These systems are designed and ready for implementation</p>
			<div class="grid md:grid-cols-3 gap-6 text-center">
				<div>
					<div class="text-4xl mb-2">🗄️</div>
					<h3 class="text-lg font-bold text-white mb-1">D1 Database Sharding</h3>
					<p class="text-slate-400 text-sm">Schemas designed for 16 shards. Currently using temporary storage while we build.</p>
				</div>
				<div>
					<div class="text-4xl mb-2">⚔️</div>
					<h3 class="text-lg font-bold text-white mb-1">SWORD Modules Installed</h3>
					<p class="text-slate-400 text-sm">22 modules including KJV, ASV, lexicons, and commentaries. Import scripts ready.</p>
				</div>
				<div>
					<div class="text-4xl mb-2">🌍</div>
					<h3 class="text-lg font-bold text-white mb-1">Multi-Language (Planned)</h3>
					<p class="text-slate-400 text-sm">Spanish (SpaRV1909) installed. More languages coming as we build out.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Mission Section -->
	<section class="max-w-4xl mx-auto px-4 py-12">
		<div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-10 text-center">
			<h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h2>
			<p class="text-slate-300 text-lg leading-relaxed mb-6">
				To build freely accessible Bible study tools that help believers
				explore God's Word. We're a small project with big aspirations —
				working toward features that rival professional software, completely free.
			</p>
			<p class="text-slate-400 mb-4">
				We're building in the open. Check our <a href="https://github.com/loveJesus/bible.systems-chirho" class="text-amber-400 hover:underline">GitHub</a> to see progress and contribute.
			</p>
			<p class="text-slate-500 text-sm">
				Part of <a href="https://stack.faith" class="text-amber-400 hover:underline">FaithStack</a> —
				Christ-centered technology for the glory of God.
			</p>
		</div>
	</section>

	<!-- Open Source Section -->
	<section class="max-w-4xl mx-auto px-4 py-16">
		<div class="bg-gradient-to-r from-amber-500/5 to-amber-600/5 border border-amber-500/20 rounded-2xl p-8 md:p-10">
			<div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
				<div class="flex-shrink-0">
					<div class="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center">
						<svg class="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
						</svg>
					</div>
				</div>
				<div class="text-center md:text-left">
					<h3 class="text-2xl font-bold text-white mb-2">Free & Open Source</h3>
					<p class="text-slate-300 mb-4">
						Bible.Systems is MIT licensed. View the source, contribute, or fork it for your own use.
						God's Word should be freely accessible to all.
					</p>
					<a
						href="https://github.com/loveJesus/bible.systems-chirho"
						class="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
						target="_blank"
						rel="noopener noreferrer"
					>
						View on GitHub
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Final CTA -->
	<section class="max-w-4xl mx-auto px-4 py-16 text-center">
		<p class="text-slate-400 mb-4">Have ideas or feedback?</p>
		<p class="text-slate-300 text-lg mb-6">
			Click the feedback button in the corner to share your thoughts, report issues, or suggest features.
		</p>
		<div class="flex items-center justify-center gap-2 text-amber-400">
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
			<span class="font-medium">Look for the gold bubble</span>
		</div>
	</section>
</div>
