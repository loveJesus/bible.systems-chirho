<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. — John 3:16 -->

<script lang="ts">
	import { SOURCE_REPO_URL_CHIRHO } from '$lib';
	import {
		FEATURED_READER_LANGUAGES_CHIRHO,
		READER_LANGUAGE_COUNT_CHIRHO
	} from '$lib/data_chirho/global-tools-catalog-chirho';
</script>

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
			Free Bible study tools: interlinear readers in {READER_LANGUAGE_COUNT_CHIRHO} languages, cantillated Hebrew Bible,
			SWORD modules, and more — all open source.
		</p>

		<blockquote class="text-amber-400 text-lg italic mb-10 max-w-2xl mx-auto">
			"Your word is a lamp to my feet and a light to my path."
			<cite class="block text-amber-500/70 text-base mt-1 not-italic">— Psalm 119:105</cite>
		</blockquote>

		<!-- CTA Buttons -->
		<div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
			<a
				href="https://global-tools.bible.systems/read-chirho/eng"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 rounded-full px-8 py-3 text-white font-bold transition-colors"
			>
				Read Interlinear Bible
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
			<a
				href="#resources-chirho"
				class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full px-8 py-3 text-slate-300 font-medium transition-colors"
			>
				Browse All Resources
			</a>
		</div>
	</section>

	<!-- Global Resources - Front and Center -->
	<section id="resources-chirho" class="max-w-6xl mx-auto px-4 py-12">
		<div class="text-center mb-8">
			<span class="inline-block bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 text-emerald-400 text-sm font-medium mb-4">
				Available Now
			</span>
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-3">Global Bible Resources</h2>
			<p class="text-slate-400 max-w-2xl mx-auto">
				Free interlinear PDFs with original Hebrew & Greek text, Strong's numbers, and translations in multiple languages
			</p>
		</div>

		<!-- Featured: Biblical Semantic Lexicon -->
		<a
			href="https://lexicon-chirho.bible.systems/"
			target="_blank"
			rel="noopener noreferrer"
			class="group block bg-gradient-to-br from-slate-900 via-violet-950/50 to-slate-900 border border-violet-500/30 hover:border-violet-500/60 rounded-2xl p-6 md:p-8 mb-6 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10"
		>
			<div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
				<div class="flex items-center gap-4">
					<div class="w-14 h-14 bg-violet-500/20 rounded-xl flex items-center justify-center group-hover:bg-violet-500/30 transition-colors flex-shrink-0">
						<svg class="w-7 h-7 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
						</svg>
					</div>
					<div>
						<div class="flex items-center gap-2 mb-1">
							<h3 class="text-xl font-bold text-white">Biblical Semantic Lexicon</h3>
							<span class="px-2 py-0.5 bg-violet-500/20 text-violet-400 text-xs font-medium rounded-full">Online</span>
						</div>
						<p class="text-slate-400 text-sm">14,884 Hebrew/Aramaic/Greek lemmas mapped to 20,143 senses across a 3-level domain hierarchy. Browse by concept, lemma, or scripture passage.</p>
					</div>
				</div>
				<p class="text-violet-400 text-sm font-medium group-hover:text-violet-300 md:ml-auto flex-shrink-0">Browse Lexicon →</p>
			</div>
		</a>

		<!-- Featured: Solid Rock Hebrew Bible with Cantillation -->
		<a
			href="https://solid-rock-accents-chirho.bible.systems/"
			target="_blank"
			rel="noopener noreferrer"
			class="group block bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-900 border border-indigo-500/30 hover:border-indigo-500/60 rounded-2xl p-6 md:p-8 mb-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
		>
			<div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
				<div class="flex items-center gap-4">
					<div class="w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors flex-shrink-0">
						<span class="text-3xl" style="font-family: serif;">&#x05D0;</span>
					</div>
					<div>
						<div class="flex items-center gap-2 mb-1">
							<h3 class="text-xl font-bold text-white">Solid Rock Hebrew Bible</h3>
							<span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 text-xs font-medium rounded-full">Online Reader</span>
						</div>
						<p class="text-slate-400 text-sm">Mikra according to the Masora accents mapped onto the Solid Rock Hebrew Bible. 305,000+ words color-coded by match quality.</p>
					</div>
				</div>
				<p class="text-indigo-400 text-sm font-medium group-hover:text-indigo-300 md:ml-auto flex-shrink-0">Read Online →</p>
			</div>
		</a>

		<!-- Interlinear PDF Downloads — 19 Languages -->
		<div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 mb-6">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
					<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
					</svg>
				</div>
				<div>
					<h3 class="text-xl font-bold text-white">Interlinear PDF Bibles</h3>
					<p class="text-slate-400 text-sm">Hebrew/Greek text with Strong's numbers &mdash; 31,102 verses each</p>
				</div>
			</div>

			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-eng-kjv-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">English KJV</span>
					<span class="block text-slate-500 text-xs">137 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-eng-web-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">English WEB</span>
					<span class="block text-slate-500 text-xs">136 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-spa-rv1909-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">Español RV1909</span>
					<span class="block text-slate-500 text-xs">134 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-por-almeida1911-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">Português Almeida</span>
					<span class="block text-slate-500 text-xs">136 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-fra-frejnd-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">Français Darby</span>
					<span class="block text-slate-500 text-xs">137 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-deu-gerelb1905-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">Deutsch Elberfelder</span>
					<span class="block text-slate-500 text-xs">137 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-ita-itarive-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">Italiano Riveduta</span>
					<span class="block text-slate-500 text-xs">137 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-rus-synodal-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">Русский Synodal</span>
					<span class="block text-slate-500 text-xs">137 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-kor-korrv-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">한국어 KorRV</span>
					<span class="block text-slate-500 text-xs">135 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-arb-arasvd-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">العربية SVD</span>
					<span class="block text-slate-500 text-xs">174 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-heb-hebmodern-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">עברית Modern</span>
					<span class="block text-slate-500 text-xs">137 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-hin-hinerv-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">हिंदी ERV</span>
					<span class="block text-slate-500 text-xs">139 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-hin-large-hinfbi-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">हिंदी FBI (Large)</span>
					<span class="block text-slate-500 text-xs">141 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-ben-ben2006eb-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">বাংলা 2006EB</span>
					<span class="block text-slate-500 text-xs">140 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-urd-urdugeo-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">اردو Geo (Large)</span>
					<span class="block text-slate-500 text-xs">164 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-ind-indtb-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">Indonesia TB</span>
					<span class="block text-slate-500 text-xs">137 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-jav-javsabda-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">Basa Jawa SABDA</span>
					<span class="block text-slate-500 text-xs">139 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-tur-turhadi-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">Türkçe HADI</span>
					<span class="block text-slate-500 text-xs">137 MB</span>
				</a>
				<a href="https://media-global-tools.bible.systems/bibles-chirho/interlinear-swa-swhulb-chirho.pdf" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-white text-sm font-medium">Kiswahili ULB</span>
					<span class="block text-slate-500 text-xs">137 MB</span>
				</a>
				<a href="https://global-tools.bible.systems/downloads-chirho" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="text-amber-400 text-sm font-medium">All Downloads</span>
					<span class="block text-amber-400/70 text-xs">Page →</span>
				</a>
			</div>
		</div>

		<!-- Online Interlinear Readers by Language -->
		<div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
					<svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<div>
					<h3 class="text-xl font-bold text-white">Read Online in {READER_LANGUAGE_COUNT_CHIRHO} Languages</h3>
					<p class="text-slate-400 text-sm">Interlinear readers with Hebrew/Greek and glosses</p>
				</div>
			</div>

			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
				{#each FEATURED_READER_LANGUAGES_CHIRHO as languageChirho (languageChirho.codeChirho)}
					<a href="https://global-tools.bible.systems/read-chirho/{languageChirho.codeChirho}" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/50 rounded-lg text-center transition-all">
						<span class="block text-lg mb-1">{languageChirho.flagChirho}</span>
						<span class="text-white text-sm font-medium">{languageChirho.nativeNameChirho}</span>
						<span class="block text-emerald-400 text-xs">66 books</span>
					</a>
				{/each}
				<a href="https://global-tools.bible.systems/read-chirho" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-500/50 rounded-lg text-center transition-all">
					<span class="block text-lg mb-1">🌍</span>
					<span class="text-amber-400 text-sm font-medium">All {READER_LANGUAGE_COUNT_CHIRHO}</span>
					<span class="block text-amber-400/70 text-xs">Languages →</span>
				</a>
			</div>

			<p class="text-center text-slate-500 text-sm mt-6">
				<a href="https://global-tools.bible.systems" target="_blank" rel="noopener noreferrer" class="text-amber-400 hover:underline">global-tools.bible.systems</a> is our lab for developing interlinear resources with Strong's numbers and morphology data, providing seed translations for <a href="https://globalbibletools.com" target="_blank" rel="noopener noreferrer" class="text-amber-400 hover:underline">GlobalBibleTools.com</a>.
			</p>
		</div>
	</section>

	<!-- Bible Software & Tools -->
	<section class="max-w-6xl mx-auto px-4 py-12">
		<div class="text-center mb-8">
			<span class="inline-block bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-1.5 text-violet-400 text-sm font-medium mb-4">
				Open Source Software
			</span>
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-3">Bible Software &amp; Tools</h2>
			<p class="text-slate-400 max-w-2xl mx-auto">
				Desktop apps, libraries, and module repositories for Scripture study and development
			</p>
		</div>

		<div class="space-y-5">
			<!-- Codex Lux -->
			<a
				href="https://codex-lux-chirho.bible.systems/"
				target="_blank"
				rel="noopener noreferrer"
				class="group block relative overflow-hidden rounded-2xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10"
			>
				<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/codex-lux-bg-chirho.webp');"></div>
				<div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/70"></div>
				<div class="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-8">
					<div class="flex-1">
						<div class="flex items-center gap-3 mb-2">
							<div class="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center group-hover:bg-violet-500/30 transition-colors flex-shrink-0">
								<svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							</div>
							<h3 class="text-2xl font-bold text-white">Codex Lux</h3>
						</div>
						<p class="text-slate-300 md:text-lg mb-1">Cross-platform Bible study application built in Rust.</p>
						<p class="text-slate-400 text-sm">Multiple translations, full-text search, interlinear Hebrew/Greek displays, commentary integration, notes, highlights, and reading plans.</p>
					</div>
					<span class="text-violet-400 font-medium group-hover:text-violet-300 flex-shrink-0">Visit →</span>
				</div>
			</a>

			<!-- SWORD Module Repository -->
			<a
				href="https://sword-modules-chirho.bible.systems/"
				target="_blank"
				rel="noopener noreferrer"
				class="group block relative overflow-hidden rounded-2xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10"
			>
				<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/sword-modules-bg-chirho.webp');"></div>
				<div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/70"></div>
				<div class="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-8">
					<div class="flex-1">
						<div class="flex items-center gap-3 mb-2">
							<div class="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center group-hover:bg-violet-500/30 transition-colors flex-shrink-0">
								<svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
								</svg>
							</div>
							<h3 class="text-2xl font-bold text-white">SWORD Module Repository</h3>
						</div>
						<p class="text-slate-300 md:text-lg mb-1">Interlinear Bible modules for SWORD-compatible apps.</p>
						<p class="text-slate-400 text-sm">16 languages with AI-assisted glosses, Strong's numbers, and morphology data. Compatible with any SWORD project reader.</p>
					</div>
					<span class="text-violet-400 font-medium group-hover:text-violet-300 flex-shrink-0">Browse Modules →</span>
				</div>
			</a>

			<!-- RSword -->
			<a
				href="https://rsword-chirho.bible.systems/"
				target="_blank"
				rel="noopener noreferrer"
				class="group block relative overflow-hidden rounded-2xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10"
			>
				<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/rsword-bg-chirho.webp');"></div>
				<div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/70"></div>
				<div class="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-8">
					<div class="flex-1">
						<div class="flex items-center gap-3 mb-2">
							<div class="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center group-hover:bg-violet-500/30 transition-colors flex-shrink-0">
								<svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
								</svg>
							</div>
							<h3 class="text-2xl font-bold text-white">RSword</h3>
						</div>
						<p class="text-slate-300 md:text-lg mb-1">Pure Rust port of the SWORD Bible software library.</p>
						<p class="text-slate-400 text-sm">Read and process SWORD modules programmatically. Powers Codex Lux and the module build pipeline.</p>
					</div>
					<span class="text-violet-400 font-medium group-hover:text-violet-300 flex-shrink-0">View Project →</span>
				</div>
			</a>
		</div>
	</section>

	<!-- Featured Verse -->
	<section class="max-w-5xl mx-auto px-4 py-8">
		<div class="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8 text-center">
			<blockquote class="text-lg md:text-xl text-slate-200 leading-relaxed mb-4 font-serif italic max-w-3xl mx-auto">
				"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
			</blockquote>
			<a href="https://global-tools.bible.systems/read-chirho/eng/43003" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors">
				John 3:16 — Read Interlinear
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</section>

	<!-- AI Models -->
	<section class="max-w-6xl mx-auto px-4 py-12">
		<div class="text-center mb-10">
			<span class="inline-block bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-1.5 text-sky-400 text-sm font-medium mb-4">
				AI / ML
			</span>
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-3">9 AI Models for Scripture</h2>
			<p class="text-slate-400 max-w-2xl mx-auto">
				Open-source machine learning models for biblical scholarship — all live on HuggingFace with interactive demos
			</p>
		</div>

		<!-- 3x3 Grid -->
		<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
			<!-- 1. Theological Guardrails -->
			<a
				href="https://huggingface.co/spaces/LoveJesus/theological-guardrails-chirho"
				target="_blank"
				rel="noopener noreferrer"
				class="group relative block overflow-hidden rounded-2xl border border-sky-500/20 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1"
			>
				<div class="absolute inset-0 bg-gradient-to-br from-sky-950/80 via-slate-900 to-indigo-950/60"></div>
				<div class="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full -translate-y-8 translate-x-8"></div>
				<div class="relative p-5">
					<div class="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-sky-500/30 transition-colors">
						<svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
						</svg>
					</div>
					<div class="flex items-center gap-2 mb-2">
						<h3 class="text-sm font-bold text-white leading-tight">Theological Guardrails</h3>
					</div>
					<p class="text-slate-400 text-xs mb-3 line-clamp-2">Classifies theological statements as orthodox, heterodox, or distinctive.</p>
					<div class="flex items-center justify-between">
						<span class="text-sky-400/80 text-xs font-mono">F1: 0.997</span>
						<span class="text-sky-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Demo →</span>
					</div>
				</div>
			</a>

			<!-- 2. Intertextual Reference Network -->
			<a
				href="https://huggingface.co/spaces/LoveJesus/intertextual-reference-network-chirho"
				target="_blank"
				rel="noopener noreferrer"
				class="group relative block overflow-hidden rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1"
			>
				<div class="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-slate-900 to-teal-950/60"></div>
				<div class="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full -translate-y-8 translate-x-8"></div>
				<div class="relative p-5">
					<div class="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-emerald-500/30 transition-colors">
						<svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
						</svg>
					</div>
					<div class="flex items-center gap-2 mb-2">
						<h3 class="text-sm font-bold text-white leading-tight">Intertextual References</h3>
					</div>
					<p class="text-slate-400 text-xs mb-3 line-clamp-2">Discovers cross-references and classifies connection types across 31,102 verses.</p>
					<div class="flex items-center justify-between">
						<span class="text-emerald-400/80 text-xs font-mono">Rank: 86.7%</span>
						<span class="text-emerald-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Demo →</span>
					</div>
				</div>
			</a>

			<!-- 3. Biblical Language Tutor -->
			<a
				href="https://huggingface.co/spaces/LoveJesus/biblical-language-tutor-chirho"
				target="_blank"
				rel="noopener noreferrer"
				class="group relative block overflow-hidden rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1"
			>
				<div class="absolute inset-0 bg-gradient-to-br from-amber-950/80 via-slate-900 to-orange-950/60"></div>
				<div class="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full -translate-y-8 translate-x-8"></div>
				<div class="relative p-5">
					<div class="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-amber-500/30 transition-colors">
						<span class="text-amber-400 text-lg font-serif font-bold">Ab</span>
					</div>
					<div class="flex items-center gap-2 mb-2">
						<h3 class="text-sm font-bold text-white leading-tight">Language Tutor</h3>
					</div>
					<p class="text-slate-400 text-xs mb-3 line-clamp-2">Morphological parsing and interlinear glossing for Hebrew and Greek.</p>
					<div class="flex items-center justify-between">
						<span class="text-amber-400/80 text-xs font-mono">2 models</span>
						<span class="text-amber-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Demo →</span>
					</div>
				</div>
			</a>

			<!-- 4. Manuscript Variant Analyzer -->
			<a
				href="https://huggingface.co/spaces/LoveJesus/biblical-variant-analyzer-chirho"
				target="_blank"
				rel="noopener noreferrer"
				class="group relative block overflow-hidden rounded-2xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1"
			>
				<div class="absolute inset-0 bg-gradient-to-br from-violet-950/80 via-slate-900 to-purple-950/60"></div>
				<div class="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-full -translate-y-8 translate-x-8"></div>
				<div class="relative p-5">
					<div class="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-violet-500/30 transition-colors">
						<svg class="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
						</svg>
					</div>
					<div class="flex items-center gap-2 mb-2">
						<h3 class="text-sm font-bold text-white leading-tight">Variant Analyzer</h3>
					</div>
					<p class="text-slate-400 text-xs mb-3 line-clamp-2">Classifies Greek NT manuscript variants across 6 critical editions.</p>
					<div class="flex items-center justify-between">
						<span class="text-violet-400/80 text-xs font-mono">Acc: 98.9%</span>
						<span class="text-violet-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Demo →</span>
					</div>
				</div>
			</a>

			<!-- 5. Cross-Translation Semantic -->
			<a
				href="https://huggingface.co/spaces/LoveJesus/biblical-cross-translation-chirho"
				target="_blank"
				rel="noopener noreferrer"
				class="group relative block overflow-hidden rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
			>
				<div class="absolute inset-0 bg-gradient-to-br from-cyan-950/80 via-slate-900 to-sky-950/60"></div>
				<div class="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full -translate-y-8 translate-x-8"></div>
				<div class="relative p-5">
					<div class="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-cyan-500/30 transition-colors">
						<svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
						</svg>
					</div>
					<div class="flex items-center gap-2 mb-2">
						<h3 class="text-sm font-bold text-white leading-tight">Cross-Translation</h3>
					</div>
					<p class="text-slate-400 text-xs mb-3 line-clamp-2">Semantic similarity across Bible translations. Find equivalent passages in any version.</p>
					<div class="flex items-center justify-between">
						<span class="text-cyan-400/80 text-xs font-mono">Pearson: 0.986</span>
						<span class="text-cyan-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Demo →</span>
					</div>
				</div>
			</a>

			<!-- 6. Entity Recognizer -->
			<a
				href="https://huggingface.co/spaces/LoveJesus/biblical-entity-recognizer-chirho"
				target="_blank"
				rel="noopener noreferrer"
				class="group relative block overflow-hidden rounded-2xl border border-rose-500/20 hover:border-rose-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/10 hover:-translate-y-1"
			>
				<div class="absolute inset-0 bg-gradient-to-br from-rose-950/80 via-slate-900 to-pink-950/60"></div>
				<div class="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full -translate-y-8 translate-x-8"></div>
				<div class="relative p-5">
					<div class="w-10 h-10 bg-rose-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-rose-500/30 transition-colors">
						<svg class="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</div>
					<div class="flex items-center gap-2 mb-2">
						<h3 class="text-sm font-bold text-white leading-tight">Entity Recognizer</h3>
					</div>
					<p class="text-slate-400 text-xs mb-3 line-clamp-2">Identifies people, places, divine names, and artifacts in biblical text.</p>
					<div class="flex items-center justify-between">
						<span class="text-rose-400/80 text-xs font-mono">F1: 0.981</span>
						<span class="text-rose-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Demo →</span>
					</div>
				</div>
			</a>

			<!-- 7. Topical Classifier -->
			<a
				href="https://huggingface.co/spaces/LoveJesus/biblical-topical-search-chirho"
				target="_blank"
				rel="noopener noreferrer"
				class="group relative block overflow-hidden rounded-2xl border border-lime-500/20 hover:border-lime-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/10 hover:-translate-y-1"
			>
				<div class="absolute inset-0 bg-gradient-to-br from-lime-950/80 via-slate-900 to-green-950/60"></div>
				<div class="absolute top-0 right-0 w-24 h-24 bg-lime-500/5 rounded-full -translate-y-8 translate-x-8"></div>
				<div class="relative p-5">
					<div class="w-10 h-10 bg-lime-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-lime-500/30 transition-colors">
						<svg class="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
						</svg>
					</div>
					<div class="flex items-center gap-2 mb-2">
						<h3 class="text-sm font-bold text-white leading-tight">Topical Search</h3>
					</div>
					<p class="text-slate-400 text-xs mb-3 line-clamp-2">Semantic Bible search by topic across all 31,102 verses using Nave's Topical Bible.</p>
					<div class="flex items-center justify-between">
						<span class="text-lime-400/80 text-xs font-mono">Acc: 0.83</span>
						<span class="text-lime-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Demo →</span>
					</div>
				</div>
			</a>

			<!-- 8. Passage Simplifier -->
			<a
				href="https://huggingface.co/spaces/LoveJesus/passage-difficulty-simplifier-chirho"
				target="_blank"
				rel="noopener noreferrer"
				class="group relative block overflow-hidden rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1"
			>
				<div class="absolute inset-0 bg-gradient-to-br from-orange-950/80 via-slate-900 to-red-950/60"></div>
				<div class="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full -translate-y-8 translate-x-8"></div>
				<div class="relative p-5">
					<div class="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-500/30 transition-colors">
						<svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
					</div>
					<div class="flex items-center gap-2 mb-2">
						<h3 class="text-sm font-bold text-white leading-tight">Passage Simplifier</h3>
					</div>
					<p class="text-slate-400 text-xs mb-3 line-clamp-2">Scores passage difficulty and generates plain-language simplifications.</p>
					<div class="flex items-center justify-between">
						<span class="text-orange-400/80 text-xs font-mono">Acc: 93.8%</span>
						<span class="text-orange-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Demo →</span>
					</div>
				</div>
			</a>

			<!-- 9. Evangelism & Apologetics -->
			<a
				href="https://huggingface.co/LoveJesus/evangelism-generator-chirho"
				target="_blank"
				rel="noopener noreferrer"
				class="group relative block overflow-hidden rounded-2xl border border-fuchsia-500/20 hover:border-fuchsia-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/10 hover:-translate-y-1"
			>
				<div class="absolute inset-0 bg-gradient-to-br from-fuchsia-950/80 via-slate-900 to-purple-950/60"></div>
				<div class="absolute top-0 right-0 w-24 h-24 bg-fuchsia-500/5 rounded-full -translate-y-8 translate-x-8"></div>
				<div class="relative p-5">
					<div class="w-10 h-10 bg-fuchsia-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-fuchsia-500/30 transition-colors">
						<svg class="w-5 h-5 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
						</svg>
					</div>
					<div class="flex items-center gap-2 mb-2">
						<h3 class="text-sm font-bold text-white leading-tight">Evangelism & Apologetics</h3>
					</div>
					<p class="text-slate-400 text-xs mb-3 line-clamp-2">RAG-powered apologetics with Qwen3-14B. Evidence, dialogues, and Scripture defense.</p>
					<div class="flex items-center justify-between">
						<span class="text-fuchsia-400/80 text-xs font-mono">3 models</span>
						<span class="text-fuchsia-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
					</div>
				</div>
			</a>
		</div>

		<!-- All Models Link -->
		<div class="text-center mt-4">
			<a href="/models-chirho" class="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium transition-colors">
				View all models with full details
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</section>

	<!-- What's Next -->
	<section class="max-w-5xl mx-auto px-4 py-12">
		<div class="text-center mb-8">
			<h2 class="text-2xl md:text-3xl font-bold text-white mb-3">What's Next</h2>
			<p class="text-slate-400 max-w-2xl mx-auto text-sm">Upcoming features for the Bible.Systems platform</p>
		</div>

		<div class="grid md:grid-cols-3 gap-4">
			<div class="bg-slate-900/50 rounded-xl p-5 border border-slate-800">
				<div class="flex items-center gap-2 mb-2">
					<span class="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">In Progress</span>
				</div>
				<h3 class="text-white font-bold mb-1">Cross-References</h3>
				<p class="text-slate-400 text-sm">TSK import (340K+ refs) with provenance tracking.</p>
			</div>

			<div class="bg-slate-900/50 rounded-xl p-5 border border-slate-800">
				<div class="flex items-center gap-2 mb-2">
					<span class="px-2 py-0.5 bg-slate-700 text-slate-400 text-xs font-medium rounded-full">Planned</span>
				</div>
				<h3 class="text-white font-bold mb-1">Morphological Search</h3>
				<p class="text-slate-400 text-sm">Grammatical queries across Hebrew and Greek texts.</p>
			</div>

			<div class="bg-slate-900/50 rounded-xl p-5 border border-slate-800">
				<div class="flex items-center gap-2 mb-2">
					<span class="px-2 py-0.5 bg-slate-700 text-slate-400 text-xs font-medium rounded-full">Planned</span>
				</div>
				<h3 class="text-white font-bold mb-1">REST &amp; MCP API</h3>
				<p class="text-slate-400 text-sm">API access for developers and AI assistants.</p>
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
				We're building in the open. Check our <a href={SOURCE_REPO_URL_CHIRHO} class="text-amber-400 hover:underline">GitHub</a> to see progress and contribute.
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
						href={SOURCE_REPO_URL_CHIRHO}
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
