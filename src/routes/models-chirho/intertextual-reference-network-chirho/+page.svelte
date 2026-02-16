<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. — John 3:16 -->

<script>
	let activeTabChirho = $state('demo');

	const modelsChirho = [
		{
			nameChirho: 'Embedder',
			modelIdChirho: 'LoveJesus/intertextual-embedder-chirho',
			architectureChirho: 'MiniLM-L12-v2 (33M params)',
			taskChirho: 'Verse similarity embeddings',
			metricChirho: 'Ranking accuracy: 86.75%',
			descriptionChirho: 'Produces 384-dim embeddings for biblical verses. Trained on 344,798 triplets from the Treasury of Scripture Knowledge. Places semantically related verses close together for cross-reference discovery.',
			colorChirho: 'sky',
		},
		{
			nameChirho: 'Classifier',
			modelIdChirho: 'LoveJesus/intertextual-classifier-chirho',
			architectureChirho: 'RoBERTa-base (125M params)',
			taskChirho: 'Connection type classification',
			metricChirho: 'Macro F1: 0.761',
			descriptionChirho: 'Classifies the type of connection between verse pairs into 7 categories: direct quote, allusion, thematic parallel, typological, prophecy fulfillment, parallel narrative, and contrast.',
			colorChirho: 'emerald',
		},
	];

	const connectionTypesChirho = [
		{ nameChirho: 'Direct Quote', descChirho: 'NT directly quotes OT', exampleChirho: 'Mt 1:23 quotes Is 7:14' },
		{ nameChirho: 'Allusion', descChirho: 'Clear reference without direct quotation', exampleChirho: 'Rev 5:5 alludes to Gen 49:9' },
		{ nameChirho: 'Thematic Parallel', descChirho: 'Shared theme or motif', exampleChirho: 'Ps 23 parallels Jn 10' },
		{ nameChirho: 'Typological', descChirho: 'OT type foreshadows NT antitype', exampleChirho: 'Isaac sacrifice prefigures Christ' },
		{ nameChirho: 'Prophecy Fulfillment', descChirho: 'OT prophecy fulfilled in NT', exampleChirho: 'Is 53 in Passion narratives' },
		{ nameChirho: 'Parallel Narrative', descChirho: 'Same event in parallel accounts', exampleChirho: 'Synoptic gospel parallels' },
		{ nameChirho: 'Contrast', descChirho: 'Deliberate theological contrast', exampleChirho: 'Adam vs Christ (Rom 5)' },
	];

	const statsChirho = [
		{ labelChirho: 'Cross-Ref Pairs', valueChirho: '344,799' },
		{ labelChirho: 'KJV Verses Indexed', valueChirho: '31,102' },
		{ labelChirho: 'Labeled Pairs', valueChirho: '28,612' },
		{ labelChirho: 'Connection Types', valueChirho: '7' },
	];
</script>

<svelte:head>
	<title>Intertextual Reference Network - AI Models - Bible.Systems</title>
	<meta name="description" content="AI pipeline for discovering biblical cross-references and classifying connection types. Two models: verse embedder and connection classifier." />
	<meta property="og:title" content="Intertextual Reference Network - Bible.Systems" />
	<meta property="og:description" content="Discover cross-references between Bible verses and classify their connection types with AI. Trained on 344,799 pairs from the Treasury of Scripture Knowledge." />
	<link rel="canonical" href="https://bible.systems/models-chirho/intertextual-reference-network-chirho" />
</svelte:head>

<div class="bg-gradient-bible min-h-screen">
	<!-- Breadcrumb + Hero -->
	<section class="max-w-7xl mx-auto px-4 pt-20 pb-8">
		<!-- Breadcrumb -->
		<nav class="mb-8" aria-label="Breadcrumb">
			<ol class="flex items-center gap-2 text-sm text-slate-500">
				<li><a href="/" class="hover:text-amber-400 transition-colors">Home</a></li>
				<li>/</li>
				<li><a href="/models-chirho" class="hover:text-amber-400 transition-colors">AI Models</a></li>
				<li>/</li>
				<li class="text-slate-300">Intertextual Reference Network</li>
			</ol>
		</nav>

		<div class="text-center">
			<div class="mb-6 flex flex-wrap items-center justify-center gap-3">
				<span class="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-sm font-medium">
					Live on HuggingFace
				</span>
				<span class="inline-block bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-1.5 text-sky-400 text-sm font-medium">
					2-Model Pipeline
				</span>
				<span class="inline-block bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-amber-400 text-sm font-medium">
					MIT License
				</span>
			</div>

			<h1 class="text-4xl md:text-6xl font-black mb-6 leading-tight">
				<span class="text-gradient-gold">Intertextual</span><br />
				<span class="text-white">Reference Network</span>
			</h1>

			<p class="text-xl text-slate-300 max-w-3xl mx-auto mb-6">
				A two-model AI pipeline for discovering
				<span class="text-sky-400 font-medium">cross-references</span> between Bible verses
				and classifying their
				<span class="text-emerald-400 font-medium">connection types</span> —
				trained on 344,799 pairs from the Treasury of Scripture Knowledge.
			</p>

			<!-- Stats -->
			<div class="flex flex-wrap items-center justify-center gap-4 mb-6">
				{#each statsChirho as statChirho}
					<div class="bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-3">
						<span class="text-xl font-bold text-sky-400">{statChirho.valueChirho}</span>
						<span class="text-slate-400 text-sm ml-2">{statChirho.labelChirho}</span>
					</div>
				{/each}
			</div>

			<!-- Quick Links -->
			<div class="flex flex-wrap items-center justify-center gap-3 mb-6">
				<a
					href="https://huggingface.co/spaces/LoveJesus/intertextual-reference-network-chirho"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 rounded-full px-6 py-2.5 text-white font-bold text-sm transition-colors"
				>
					Try Live Demo
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
					</svg>
				</a>
				<a
					href="https://huggingface.co/LoveJesus/intertextual-embedder-chirho"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full px-6 py-2.5 text-slate-300 font-medium text-sm transition-colors"
				>
					View on HuggingFace
				</a>
				<a
					href="https://huggingface.co/datasets/LoveJesus/intertextual-dataset-chirho"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full px-6 py-2.5 text-slate-300 font-medium text-sm transition-colors"
				>
					Dataset
				</a>
			</div>
		</div>
	</section>

	<!-- Tab Navigation -->
	<section class="max-w-6xl mx-auto px-4">
		<div class="flex items-center gap-1 border-b border-slate-800 mb-0">
			<button
				class="px-4 py-3 text-sm font-medium transition-colors {activeTabChirho === 'demo' ? 'text-sky-400 border-b-2 border-sky-400' : 'text-slate-400 hover:text-slate-300'}"
				onclick={() => activeTabChirho = 'demo'}
			>
				Live Demo
			</button>
			<button
				class="px-4 py-3 text-sm font-medium transition-colors {activeTabChirho === 'models' ? 'text-sky-400 border-b-2 border-sky-400' : 'text-slate-400 hover:text-slate-300'}"
				onclick={() => activeTabChirho = 'models'}
			>
				Models
			</button>
			<button
				class="px-4 py-3 text-sm font-medium transition-colors {activeTabChirho === 'connections' ? 'text-sky-400 border-b-2 border-sky-400' : 'text-slate-400 hover:text-slate-300'}"
				onclick={() => activeTabChirho = 'connections'}
			>
				Connection Types
			</button>
			<button
				class="px-4 py-3 text-sm font-medium transition-colors {activeTabChirho === 'usage' ? 'text-sky-400 border-b-2 border-sky-400' : 'text-slate-400 hover:text-slate-300'}"
				onclick={() => activeTabChirho = 'usage'}
			>
				Usage
			</button>
		</div>
	</section>

	<!-- Tab Content -->
	<section class="max-w-6xl mx-auto px-4 py-8">
		<!-- Demo Tab -->
		{#if activeTabChirho === 'demo'}
			<div class="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
				<div class="p-4 border-b border-slate-800 flex items-center justify-between">
					<div class="flex items-center gap-3">
						<div class="w-3 h-3 rounded-full bg-green-500"></div>
						<span class="text-white font-medium text-sm">Interactive Demo</span>
					</div>
					<a
						href="https://huggingface.co/spaces/LoveJesus/intertextual-reference-network-chirho"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sky-400 hover:text-sky-300 text-xs font-medium"
					>
						Open in new tab →
					</a>
				</div>
				<iframe
					src="https://lovejesus-intertextual-reference-network-chirho.hf.space"
					title="Intertextual Reference Network Demo"
					class="w-full border-0"
					style="height: 800px;"
					loading="lazy"
					allow="clipboard-write"
				></iframe>
			</div>

		<!-- Models Tab -->
		{:else if activeTabChirho === 'models'}
			<div class="space-y-6">
				{#each modelsChirho as modelChirho}
					<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
						<div class="flex flex-col md:flex-row md:items-start gap-4">
							<div class="flex-1">
								<div class="flex items-center gap-3 mb-2">
									<h3 class="text-xl font-bold text-white">{modelChirho.nameChirho}</h3>
									<span class="px-2 py-0.5 bg-{modelChirho.colorChirho}-500/20 text-{modelChirho.colorChirho}-400 text-xs font-medium rounded-full">
										{modelChirho.taskChirho}
									</span>
								</div>
								<p class="text-slate-400 text-sm mb-3">{modelChirho.descriptionChirho}</p>
								<div class="flex flex-wrap gap-3 text-xs">
									<span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full">{modelChirho.architectureChirho}</span>
									<span class="px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full">{modelChirho.metricChirho}</span>
								</div>
							</div>
							<a
								href="https://huggingface.co/{modelChirho.modelIdChirho}"
								target="_blank"
								rel="noopener noreferrer"
								class="text-sky-400 hover:text-sky-300 text-sm font-medium flex-shrink-0"
							>
								HuggingFace →
							</a>
						</div>
					</div>
				{/each}

				<!-- Dataset -->
				<div class="bg-slate-900/50 border border-amber-500/20 rounded-xl p-6">
					<div class="flex flex-col md:flex-row md:items-start gap-4">
						<div class="flex-1">
							<div class="flex items-center gap-3 mb-2">
								<h3 class="text-xl font-bold text-white">Training Dataset</h3>
								<span class="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">~373K examples</span>
							</div>
							<p class="text-slate-400 text-sm mb-3">
								Two datasets: 344,798 triplets from the Treasury of Scripture Knowledge for embedder training,
								and 28,612 Grok-labeled pairs for connection type classification.
							</p>
							<div class="flex flex-wrap gap-3 text-xs">
								<span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full">JSONL format</span>
								<span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full">Embedder: 275K train</span>
								<span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full">Classifier: 22,889 train</span>
								<span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full">31,102 verse map</span>
							</div>
						</div>
						<a
							href="https://huggingface.co/datasets/LoveJesus/intertextual-dataset-chirho"
							target="_blank"
							rel="noopener noreferrer"
							class="text-amber-400 hover:text-amber-300 text-sm font-medium flex-shrink-0"
						>
							HuggingFace →
						</a>
					</div>
				</div>
			</div>

			<!-- Evaluation Results -->
			<div class="mt-8">
				<h3 class="text-lg font-bold text-white mb-4">Evaluation Results</h3>
				<div class="grid md:grid-cols-2 gap-4">
					<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
						<h4 class="text-white font-bold mb-3">Embedder</h4>
						<div class="space-y-2 text-sm">
							<div class="flex justify-between"><span class="text-slate-400">Triplet ranking accuracy</span><span class="text-sky-400 font-medium">86.75%</span></div>
							<div class="flex justify-between"><span class="text-slate-400">Separation gap</span><span class="text-sky-400 font-medium">0.4213</span></div>
							<div class="flex justify-between"><span class="text-slate-400">Pearson cosine</span><span class="text-sky-400 font-medium">0.6271</span></div>
							<div class="flex justify-between"><span class="text-slate-400">Spearman cosine</span><span class="text-sky-400 font-medium">0.6326</span></div>
						</div>
					</div>
					<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
						<h4 class="text-white font-bold mb-3">Classifier</h4>
						<div class="space-y-2 text-sm">
							<div class="flex justify-between"><span class="text-slate-400">Macro F1</span><span class="text-emerald-400 font-medium">0.761</span></div>
							<div class="flex justify-between"><span class="text-slate-400">Micro F1</span><span class="text-emerald-400 font-medium">0.853</span></div>
							<div class="flex justify-between"><span class="text-slate-400">Precision</span><span class="text-emerald-400 font-medium">0.665</span></div>
							<div class="flex justify-between"><span class="text-slate-400">Recall</span><span class="text-emerald-400 font-medium">0.939</span></div>
						</div>
					</div>
				</div>
				<p class="text-slate-500 text-xs mt-3">
					v2 classifier retrained with balanced data and inverse-frequency class weights. Macro F1 improved from 0.42 to 0.761 (+81%).
				</p>
			</div>

		<!-- Connection Types Tab -->
		{:else if activeTabChirho === 'connections'}
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each connectionTypesChirho as connectionChirho}
					<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-sky-500/30 transition-colors">
						<h3 class="text-white font-bold mb-1">{connectionChirho.nameChirho}</h3>
						<p class="text-slate-400 text-sm mb-2">{connectionChirho.descChirho}</p>
						<p class="text-slate-500 text-xs italic">{connectionChirho.exampleChirho}</p>
					</div>
				{/each}
			</div>

		<!-- Usage Tab -->
		{:else if activeTabChirho === 'usage'}
			<div class="space-y-6">
				<!-- Embedder -->
				<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
					<h3 class="text-white font-bold mb-1">Embedder: Find Cross-References</h3>
					<p class="text-slate-400 text-sm mb-4">Encode verses into semantic space and find similar passages.</p>
					<pre class="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm"><code class="text-slate-300">{`from sentence_transformers import SentenceTransformer

model = SentenceTransformer("LoveJesus/intertextual-embedder-chirho")

verses = [
    "In the beginning God created the heaven and the earth.",
    "In the beginning was the Word, and the Word was with God, and the Word was God.",
    "And the children of Israel went into the midst of the sea upon the dry ground.",
]

embeddings = model.encode(verses)
# embeddings[0] will be closest to embeddings[1] (Gen 1:1 <-> John 1:1)`}</code></pre>
				</div>

				<!-- Classifier -->
				<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
					<h3 class="text-white font-bold mb-1">Classifier: Identify Connection Type</h3>
					<p class="text-slate-400 text-sm mb-4">Classify the relationship between two Bible verses.</p>
					<pre class="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm"><code class="text-slate-300">{`from transformers import pipeline

classifier = pipeline("text-classification",
    model="LoveJesus/intertextual-classifier-chirho")

result = classifier({
    "text": "Therefore the Lord himself shall give you a sign; "
            "Behold, a virgin shall conceive",
    "text_pair": "Now all this was done, that it might be fulfilled "
                 "which was spoken of the Lord by the prophet"
})
# -> prophecy_fulfillment`}</code></pre>
				</div>

				<!-- Install -->
				<div class="bg-slate-900/50 border border-sky-500/20 rounded-xl p-6">
					<h3 class="text-white font-bold mb-1">Install Dependencies</h3>
					<pre class="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm"><code class="text-slate-300">pip install transformers torch sentence-transformers</code></pre>
				</div>
			</div>
		{/if}
	</section>

	<!-- Back to Models -->
	<section class="max-w-6xl mx-auto px-4 py-8 text-center">
		<a href="/models-chirho" class="text-slate-400 hover:text-amber-400 text-sm font-medium transition-colors">
			← Back to All Models
		</a>
	</section>
</div>
