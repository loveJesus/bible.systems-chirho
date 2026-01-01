<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. — John 3:16 -->

<script lang="ts">
	// Planned features from AGENTS.md
	const plannedFeaturesChirho = [
		{
			id: 1,
			title: 'Multiple Bible Versions',
			description: 'Access to KJV, ESV, NIV, NASB and more with parallel passage display',
			status: 'planned',
			votes: 42,
			icon: '📚'
		},
		{
			id: 2,
			title: 'Cross-Reference System',
			description: 'Treasury of Scripture Knowledge integration with visual cross-reference explorer',
			status: 'planned',
			votes: 38,
			icon: '🔗'
		},
		{
			id: 3,
			title: 'Original Languages',
			description: 'Hebrew, Greek, and Aramaic support with interlinear display and morphological parsing',
			status: 'planned',
			votes: 35,
			icon: '📜'
		},
		{
			id: 4,
			title: 'REST & MCP API',
			description: 'Full API access for third-party apps and AI assistant integration',
			status: 'in-progress',
			votes: 31,
			icon: '🔌'
		},
		{
			id: 5,
			title: 'Commentaries',
			description: 'Matthew Henry, Gill, and other trusted historical commentaries',
			status: 'planned',
			votes: 28,
			icon: '💬'
		},
		{
			id: 6,
			title: 'Word Studies',
			description: "Strong's concordance, etymology, word frequency, and lexicon lookups",
			status: 'planned',
			votes: 25,
			icon: '🔍'
		},
		{
			id: 7,
			title: 'Desktop App',
			description: 'Offline-capable native application using Tauri',
			status: 'planned',
			votes: 22,
			icon: '💻'
		},
		{
			id: 8,
			title: 'Topic/Theme Finder',
			description: 'Search by topic, theme, or biblical concept across all Scripture',
			status: 'planned',
			votes: 19,
			icon: '🏷️'
		}
	];

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
	const totalCountChirho = plannedFeaturesChirho.length;
	const inProgressCountChirho = plannedFeaturesChirho.filter((f) => f.status === 'in-progress').length;
	const completedCountChirho = plannedFeaturesChirho.filter((f) => f.status === 'completed').length;
</script>

<svelte:head>
	<title>Feature Roadmap - Bible.Systems</title>
	<meta name="description" content="View the Bible.Systems feature roadmap - Planned features include cross-references, original languages, commentaries, and API access." />
	<link rel="canonical" href="https://bible.systems/features-fe" />
</svelte:head>

<div class="max-w-6xl mx-auto px-4 py-16">
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-white mb-4">Feature Roadmap</h1>
		<p class="text-slate-400 text-lg max-w-2xl mx-auto">
			Help shape the future of Bible.Systems. See what's planned and suggest new features using the feedback button.
		</p>
	</div>

	<!-- Stats -->
	<div class="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto">
		<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
			<p class="text-3xl font-bold text-amber-400">{totalCountChirho}</p>
			<p class="text-slate-400 text-sm">Planned</p>
		</div>
		<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
			<p class="text-3xl font-bold text-amber-400">{inProgressCountChirho}</p>
			<p class="text-slate-400 text-sm">In Progress</p>
		</div>
		<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
			<p class="text-3xl font-bold text-amber-400">{completedCountChirho}</p>
			<p class="text-slate-400 text-sm">Completed</p>
		</div>
	</div>

	<!-- Feature List -->
	<div class="space-y-4">
		{#each plannedFeaturesChirho as featureChirho}
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
