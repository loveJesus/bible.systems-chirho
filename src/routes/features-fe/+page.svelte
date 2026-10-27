<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. — John 3:16 -->

<script lang="ts">
	import {
		INTERLINEAR_PDF_COUNT_CHIRHO,
		READER_LANGUAGE_COUNT_CHIRHO,
		SWORD_MODULE_LANGUAGE_COUNT_CHIRHO
	} from '$lib/data_chirho/global-tools-catalog-chirho';

	const completedFeaturesChirho = [
		{
			title: `Interlinear Bible — ${READER_LANGUAGE_COUNT_CHIRHO} Languages`,
			description: `Online readers with Hebrew/Greek text, Strong's numbers, and glosses. Plus ${INTERLINEAR_PDF_COUNT_CHIRHO} downloadable interlinear PDFs.`,
			status: 'completed',
			icon: '📜',
			link: 'https://global-tools.bible.systems/read-chirho/eng'
		},
		{
			title: 'Hebrew Bible with Cantillation',
			description: 'Mikra according to the Masora accents mapped onto the Solid Rock Hebrew Bible. 305,000+ words color-coded by match quality.',
			status: 'completed',
			icon: '🕎',
			link: 'https://solid-rock-accents-chirho.bible.systems/'
		},
		{
			title: 'SWORD Module Repository',
			description: `Interlinear Bible modules for SWORD-compatible apps. ${SWORD_MODULE_LANGUAGE_COUNT_CHIRHO} languages with AI-assisted glosses, Strong's numbers, and morphology.`,
			status: 'completed',
			icon: '⚔️',
			link: 'https://sword-modules-chirho.bible.systems/'
		},
		{
			title: 'RSword — Rust SWORD Library',
			description: 'Pure Rust port of the SWORD Bible software library. Read and process SWORD modules programmatically.',
			status: 'completed',
			icon: '🦀',
			link: 'https://rsword-chirho.bible.systems/'
		},
		{
			title: 'Codex Lux Desktop App',
			description: 'Cross-platform Bible study application built in Rust. Multiple translations, search, interlinear, commentary, and personal study tools.',
			status: 'completed',
			icon: '💻',
			link: 'https://codex-lux-chirho.bible.systems/'
		},
		{
			title: 'KJV Full Bible on D1',
			description: 'All 31,102 KJV verses stored in Cloudflare D1 with 16-shard architecture. Online reader at bible.systems.',
			status: 'completed',
			icon: '🗄️',
			link: '/read-chirho'
		},
		{
			title: 'Biblical Semantic Lexicon',
			description: '14,884 Hebrew/Aramaic/Greek lemmas mapped to 20,143 senses across a 3-level domain hierarchy. Browse by concept, lemma, or scripture passage.',
			status: 'completed',
			icon: '🧠',
			link: 'https://lexicon-chirho.bible.systems/'
		}
	] as const;

	const inProgressFeaturesChirho = [
		{
			title: 'Cross-Reference Provenance',
			description: 'TSK import (340K+ refs) with tracking of WHO linked passages and WHY. Theological traditions tracked separately.',
			status: 'in-progress',
			icon: '🔗'
		},
		{
			title: 'REST & MCP APIs',
			description: 'Full API for apps and an MCP server for Claude, ChatGPT, and AI assistants. Basic Bible endpoints working.',
			status: 'in-progress',
			icon: '🔌'
		}
	] as const;

	const plannedFeaturesChirho = [
		{
			title: 'Morphological Search',
			description: 'Query like Logos: "genitive nouns within 3 words of this verb in Pauline epistles." Grammatical search across Hebrew and Greek.',
			status: 'planned',
			icon: '🔬'
		},
		{
			title: 'Publisher Portal',
			description: 'Publishers upload content with flexible licensing — free, subscription, or per-API-call pricing.',
			status: 'planned',
			icon: '📤'
		},
		{
			title: 'Commentaries',
			description: 'Matthew Henry, Gill, Calvin, and other public domain scholarly works integrated with verse display.',
			status: 'planned',
			icon: '💬'
		},
		{
			title: 'Word Usage Graphs',
			description: 'Visualize word frequency across books, authors, and time periods.',
			status: 'planned',
			icon: '📈'
		}
	] as const;

	const completedCountChirho = completedFeaturesChirho.length;
	const inProgressCountChirho = inProgressFeaturesChirho.length;
	const plannedCountChirho = plannedFeaturesChirho.length;

	const statusColorsChirho = {
		'planned': 'bg-blue-500/20 text-blue-400 border-blue-500/50',
		'in-progress': 'bg-amber-500/20 text-amber-400 border-amber-500/50',
		'completed': 'bg-green-500/20 text-green-400 border-green-500/50'
	} as const;

	const statusLabelsChirho = {
		'planned': 'Planned',
		'in-progress': 'In Progress',
		'completed': 'Shipped'
	} as const;
</script>

<svelte:head>
	<title>Features & Roadmap - Bible.Systems</title>
	<meta name="description" content="Bible.Systems features: interlinear Bibles in {READER_LANGUAGE_COUNT_CHIRHO} languages, Hebrew cantillation, SWORD modules, Codex Lux desktop app, and more. See what's shipped and what's next." />
	<link rel="canonical" href="https://bible.systems/features-fe" />
</svelte:head>

<div class="max-w-6xl mx-auto px-4 py-16">
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-white mb-4">Features &amp; Roadmap</h1>
		<p class="text-slate-400 text-lg max-w-2xl mx-auto">
			What we've shipped and what's coming next — open-source Bible study tools for everyone.
		</p>
	</div>

	<!-- Stats -->
	<div class="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto">
		<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
			<p class="text-3xl font-bold text-green-400">{completedCountChirho}</p>
			<p class="text-slate-400 text-sm">Shipped</p>
		</div>
		<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
			<p class="text-3xl font-bold text-amber-400">{inProgressCountChirho}</p>
			<p class="text-slate-400 text-sm">In Progress</p>
		</div>
		<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
			<p class="text-3xl font-bold text-blue-400">{plannedCountChirho}</p>
			<p class="text-slate-400 text-sm">Planned</p>
		</div>
	</div>

	<!-- Completed Features -->
	<div class="mb-12">
		<h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
			<span class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">{completedCountChirho}</span>
			Shipped
		</h2>
		<div class="space-y-4">
			{#each completedFeaturesChirho as featureChirho}
				<a
					href={featureChirho.link}
					target={featureChirho.link.startsWith('http') ? '_blank' : undefined}
					rel={featureChirho.link.startsWith('http') ? 'noopener noreferrer' : undefined}
					class="block bg-slate-900/50 border border-green-500/20 hover:border-green-500/40 rounded-xl p-6 transition-colors group"
				>
					<div class="flex items-start gap-4">
						<div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
							{featureChirho.icon}
						</div>
						<div class="flex-1 min-w-0">
							<div class="flex items-center gap-3 mb-2 flex-wrap">
								<h3 class="text-lg font-semibold text-white">{featureChirho.title}</h3>
								<span class="px-2 py-1 rounded-full text-xs font-medium border {statusColorsChirho[featureChirho.status]}">
									{statusLabelsChirho[featureChirho.status]}
								</span>
							</div>
							<p class="text-slate-400">{featureChirho.description}</p>
						</div>
						<span class="text-green-400 group-hover:text-green-300 flex-shrink-0 text-sm font-medium">Visit →</span>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<!-- In Progress -->
	<div class="mb-12">
		<h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
			<span class="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">{inProgressCountChirho}</span>
			In Progress
		</h2>
		<div class="space-y-4">
			{#each inProgressFeaturesChirho as featureChirho}
				<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
					<div class="flex items-start gap-4">
						<div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
							{featureChirho.icon}
						</div>
						<div class="flex-1 min-w-0">
							<div class="flex items-center gap-3 mb-2 flex-wrap">
								<h3 class="text-lg font-semibold text-white">{featureChirho.title}</h3>
								<span class="px-2 py-1 rounded-full text-xs font-medium border {statusColorsChirho[featureChirho.status]}">
									{statusLabelsChirho[featureChirho.status]}
								</span>
							</div>
							<p class="text-slate-400">{featureChirho.description}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Planned -->
	<div class="mb-12">
		<h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
			<span class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">{plannedCountChirho}</span>
			Planned
		</h2>
		<div class="space-y-4">
			{#each plannedFeaturesChirho as featureChirho}
				<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
					<div class="flex items-start gap-4">
						<div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
							{featureChirho.icon}
						</div>
						<div class="flex-1 min-w-0">
							<div class="flex items-center gap-3 mb-2 flex-wrap">
								<h3 class="text-lg font-semibold text-white">{featureChirho.title}</h3>
								<span class="px-2 py-1 rounded-full text-xs font-medium border {statusColorsChirho[featureChirho.status]}">
									{statusLabelsChirho[featureChirho.status]}
								</span>
							</div>
							<p class="text-slate-400">{featureChirho.description}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Suggest Feature CTA -->
	<div class="mt-12 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/30 rounded-xl p-8 text-center">
		<h2 class="text-2xl font-bold text-white mb-4">Have a Feature Idea?</h2>
		<p class="text-slate-400 mb-6 max-w-lg mx-auto">
			We'd love to hear your suggestions! Use the feedback button in the bottom-right corner to submit your feature request.
		</p>
		<div class="inline-flex items-center gap-3 bg-slate-800 rounded-lg px-4 py-3">
			<div class="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
				<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
				</svg>
			</div>
			<div class="text-left">
				<p class="text-white font-medium">Click the feedback button</p>
				<p class="text-slate-400 text-sm">Select "Feature Request"</p>
			</div>
		</div>
	</div>

	<div class="mt-12 text-center">
		<a href="/" class="text-amber-400 hover:underline">← Back to Home</a>
	</div>
</div>
