<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. — John 3:16 -->

<script lang="ts">
	// Core features - Logos-level deep Bible study
	const coreFeaturesChirho = [
		{
			id: 1,
			title: 'Morphological Search DSL',
			description: 'Query like Logos: "genitive nouns within 3 words of this verb in Pauline epistles"',
			status: 'in-progress',
			votes: 89,
			icon: '🔬'
		},
		{
			id: 2,
			title: 'Louw-Nida Semantic Domains',
			description: 'Find words by meaning across 93 domains. Connect ἀγάπη to all love-related concepts',
			status: 'in-progress',
			votes: 76,
			icon: '🧠'
		},
		{
			id: 3,
			title: 'Cross-Reference Provenance',
			description: 'Know WHO linked passages and WHY. TSK, Nestle-Aland, theological traditions tracked separately',
			status: 'in-progress',
			votes: 72,
			icon: '🔗'
		},
		{
			id: 4,
			title: 'Publisher Portal',
			description: 'Publishers upload content, set licensing & API pricing. Stripe Connect, 70/30 revenue split',
			status: 'planned',
			votes: 65,
			icon: '📤'
		},
		{
			id: 5,
			title: 'Interlinear Display',
			description: 'Hebrew/Greek/Aramaic with full morphological parsing. Hover for detailed analysis',
			status: 'planned',
			votes: 58,
			icon: '📜'
		},
		{
			id: 6,
			title: 'REST & MCP APIs',
			description: 'Full API for apps + MCP server for Claude, ChatGPT, and AI assistants',
			status: 'in-progress',
			votes: 54,
			icon: '🔌'
		}
	];

	// Architecture features
	const architectureFeaturesChirho = [
		{
			id: 7,
			title: 'Dynamic D1 Sharding',
			description: '16 databases with catalog-based allocation. Add more as we grow. 10GB per shard',
			status: 'in-progress',
			votes: 45,
			icon: '🗄️'
		},
		{
			id: 8,
			title: 'SWORD/Diatheke Integration',
			description: 'Import CrossWire Bible Society modules. Free access to hundreds of resources',
			status: 'planned',
			votes: 42,
			icon: '⚔️'
		},
		{
			id: 9,
			title: 'Word-Level Data Model',
			description: 'Every word position tracked with morphology, syntax trees, semantic tags',
			status: 'in-progress',
			votes: 38,
			icon: '📊'
		},
		{
			id: 10,
			title: 'Multi-Language Support',
			description: 'Not just English - Spanish, Portuguese, Chinese, Arabic interfaces',
			status: 'planned',
			votes: 35,
			icon: '🌍'
		}
	];

	// Study tools
	const studyToolsChirho = [
		{
			id: 11,
			title: 'Sermon Preparation',
			description: 'Outline builder, illustration finder, cross-reference chains for preaching',
			status: 'planned',
			votes: 48,
			icon: '🎤'
		},
		{
			id: 12,
			title: 'Word Usage Graphs',
			description: 'Visualize word frequency across books, authors, time periods',
			status: 'planned',
			votes: 41,
			icon: '📈'
		},
		{
			id: 13,
			title: 'Commentaries',
			description: 'Matthew Henry, Gill, Calvin, and public domain scholarly works',
			status: 'planned',
			votes: 39,
			icon: '💬'
		},
		{
			id: 14,
			title: 'Desktop App (Tauri)',
			description: 'Offline-capable native application for Windows, Mac, Linux',
			status: 'planned',
			votes: 32,
			icon: '💻'
		}
	];

	// Combine all for stats
	const allFeaturesChirho = [...coreFeaturesChirho, ...architectureFeaturesChirho, ...studyToolsChirho];

	const statusColorsChirho = {
		'planned': 'bg-blue-500/20 text-blue-400 border-blue-500/50',
		'in-progress': 'bg-amber-500/20 text-amber-400 border-amber-500/50',
		'completed': 'bg-green-500/20 text-green-400 border-green-500/50'
	} as const;

	const statusLabelsChirho = {
		'planned': 'Planned',
		'in-progress': 'In Progress',
		'completed': 'Completed'
	} as const;

	// Computed counts for stats
	const totalCountChirho = allFeaturesChirho.length;
	const inProgressCountChirho = allFeaturesChirho.filter((f) => f.status === 'in-progress').length;
	const plannedCountChirho = allFeaturesChirho.filter((f) => f.status === 'planned').length;
</script>

<svelte:head>
	<title>Feature Roadmap - Bible.Systems</title>
	<meta name="description" content="Bible.Systems roadmap: morphological search, Louw-Nida domains, cross-reference provenance, publisher portal, dynamic D1 sharding." />
	<link rel="canonical" href="https://bible.systems/features-fe" />
</svelte:head>

<div class="max-w-6xl mx-auto px-4 py-16">
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-white mb-4">Logos-Level Features</h1>
		<p class="text-slate-400 text-lg max-w-2xl mx-auto">
			Building the most powerful open Bible study platform. Deep morphological search, semantic domains, cross-reference provenance, and more.
		</p>
	</div>

	<!-- Stats -->
	<div class="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto">
		<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
			<p class="text-3xl font-bold text-amber-400">{totalCountChirho}</p>
			<p class="text-slate-400 text-sm">Total Features</p>
		</div>
		<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
			<p class="text-3xl font-bold text-green-400">{inProgressCountChirho}</p>
			<p class="text-slate-400 text-sm">In Progress</p>
		</div>
		<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
			<p class="text-3xl font-bold text-blue-400">{plannedCountChirho}</p>
			<p class="text-slate-400 text-sm">Planned</p>
		</div>
	</div>

	<!-- Core Features -->
	<div class="mb-12">
		<h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
			<span class="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white">C</span>
			Core Features
		</h2>
		<div class="space-y-4">
			{#each coreFeaturesChirho as featureChirho}
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
						<div class="flex flex-col items-center gap-1 flex-shrink-0">
							<button aria-label="Upvote this feature" class="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-amber-400 transition-colors">
								<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
								</svg>
							</button>
							<span class="text-lg font-semibold text-white">{featureChirho.votes}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Architecture Features -->
	<div class="mb-12">
		<h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
			<span class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white">A</span>
			Architecture
		</h2>
		<div class="space-y-4">
			{#each architectureFeaturesChirho as featureChirho}
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
						<div class="flex flex-col items-center gap-1 flex-shrink-0">
							<button aria-label="Upvote this feature" class="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-amber-400 transition-colors">
								<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
								</svg>
							</button>
							<span class="text-lg font-semibold text-white">{featureChirho.votes}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Study Tools -->
	<div class="mb-12">
		<h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
			<span class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white">S</span>
			Study Tools
		</h2>
		<div class="space-y-4">
			{#each studyToolsChirho as featureChirho}
			<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
				<div class="flex items-start gap-4">
					<!-- Icon -->
					<div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
						{featureChirho.icon}
					</div>

					<!-- Content -->
					<div class="flex-1 min-w-0">
						<div class="flex items-center gap-3 mb-2 flex-wrap">
							<h3 class="text-lg font-semibold text-white">{featureChirho.title}</h3>
							<span class="px-2 py-1 rounded-full text-xs font-medium border {statusColorsChirho[featureChirho.status]}">
								{statusLabelsChirho[featureChirho.status]}
							</span>
						</div>
						<p class="text-slate-400">{featureChirho.description}</p>
					</div>

					<!-- Votes -->
					<div class="flex flex-col items-center gap-1 flex-shrink-0">
						<button aria-label="Upvote this feature" class="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-amber-400 transition-colors">
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
							</svg>
						</button>
						<span class="text-lg font-semibold text-white">{featureChirho.votes}</span>
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
