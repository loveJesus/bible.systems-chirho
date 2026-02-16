<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. — John 3:16 -->

<script>
	const modelsChirho = [
		{
			idChirho: 'theological-guardrails-chirho',
			nameChirho: 'Theological Guardrails',
			descriptionChirho: 'Three-model pipeline for classifying theological statements as orthodox, heterodox, or denominational distinctive based on the first six ecumenical councils.',
			statusChirho: 'live',
			architectureChirho: 'RoBERTa-large + MiniLM-L12 + Flan-T5-base',
			metricsChirho: 'F1: 0.9971',
			hfUrlChirho: 'https://huggingface.co/spaces/LoveJesus/theological-guardrails-chirho',
			detailUrlChirho: '/models-chirho/theological-guardrails-chirho',
			tagsChirho: ['Classification', 'Embeddings', 'Explanation'],
		},
		{
			idChirho: 'intertextual-reference-network-chirho',
			nameChirho: 'Intertextual Reference Network',
			descriptionChirho: 'Two-model pipeline for discovering biblical cross-references and classifying connection types (direct quote, allusion, typology, prophecy fulfillment, and more) across 31,102 KJV verses.',
			statusChirho: 'live',
			architectureChirho: 'MiniLM-L12 + RoBERTa-base',
			metricsChirho: 'Ranking: 86.75% | Macro F1: 0.761',
			hfUrlChirho: 'https://huggingface.co/spaces/LoveJesus/intertextual-reference-network-chirho',
			detailUrlChirho: '/models-chirho/intertextual-reference-network-chirho',
			tagsChirho: ['Cross-References', 'Typology', 'Embeddings', 'Classification'],
		},
		{
			idChirho: 'biblical-language-tutor-chirho',
			nameChirho: 'Biblical Language Tutor',
			descriptionChirho: 'Two-model seq2seq pipeline for morphological parsing and interlinear glossing of biblical Hebrew and Greek. Parses word-level grammar and generates word-by-word English translations from Macula data.',
			statusChirho: 'live',
			architectureChirho: 'mT5-small (Parser + Glosser)',
			metricsChirho: 'Tag F1: 0.886 | BLEU: 22.06',
			hfUrlChirho: 'https://huggingface.co/spaces/LoveJesus/biblical-language-tutor-chirho',
			detailUrlChirho: '/models-chirho/biblical-language-tutor-chirho',
			tagsChirho: ['Hebrew', 'Greek', 'Morphology', 'Interlinear'],
		},
		{
			idChirho: 'manuscript-variant-analyzer-chirho',
			nameChirho: 'Manuscript Variant Analyzer',
			descriptionChirho: 'Seq2seq classifier for textual criticism — analyzes Greek NT manuscript variants across 6 critical editions (NA28, SBL, RP, ST, WH, Treg) to identify omissions, substitutions, and spelling differences.',
			statusChirho: 'live',
			architectureChirho: 'mT5-small (Seq2Seq Classifier)',
			metricsChirho: 'Type Accuracy: 98.87% (v2)',
			hfUrlChirho: 'https://huggingface.co/spaces/LoveJesus/biblical-variant-analyzer-chirho',
			detailUrlChirho: '/models-chirho/manuscript-variant-analyzer-chirho',
			tagsChirho: ['Textual Criticism', 'Manuscripts', 'Greek NT'],
		},
		{
			idChirho: 'cross-translation-semantic-chirho',
			nameChirho: 'Cross-Translation Semantic',
			descriptionChirho: 'Sentence embedding model for comparing how 5 English Bible translations (KJV, ASV, YLT, Darby, AKJV) render the same verse. Detects semantic similarity and translation divergences across 31,103 verses.',
			statusChirho: 'live',
			architectureChirho: 'paraphrase-multilingual-MiniLM-L12-v2',
			metricsChirho: 'Pearson: 0.986 | Spearman: 0.492',
			hfUrlChirho: 'https://huggingface.co/spaces/LoveJesus/biblical-cross-translation-chirho',
			detailUrlChirho: '/models-chirho/biblical-cross-translation-chirho',
			tagsChirho: ['Translation', 'Embeddings', 'Comparison'],
		},
		{
			idChirho: 'biblical-entity-recognizer-chirho',
			nameChirho: 'Biblical Entity Recognizer',
			descriptionChirho: 'Named entity recognition model for identifying people, places, groups, divine beings, and artifacts in biblical text. Trained on KJV with entity spans and types.',
			statusChirho: 'live',
			architectureChirho: 'mT5-small (NER Seq2Seq)',
			metricsChirho: 'Entity F1: 0.9786',
			hfUrlChirho: 'https://huggingface.co/spaces/LoveJesus/biblical-entity-recognizer-chirho',
			detailUrlChirho: '/models-chirho/biblical-entity-recognizer-chirho',
			tagsChirho: ['NER', 'People', 'Places', 'Entities'],
		},
		{
			idChirho: 'topical-passage-classifier-chirho',
			nameChirho: 'Topical Passage Classifier',
			descriptionChirho: 'Semantic search model for finding biblical passages by topic. Fine-tuned on Nave\'s Topical Bible and TSK cross-references to retrieve relevant verses for any theological query across all 66 books.',
			statusChirho: 'live',
			architectureChirho: 'MiniLM-L12-v2 (Semantic Search)',
			metricsChirho: 'NDCG@10: 0.1831',
			hfUrlChirho: 'https://huggingface.co/spaces/LoveJesus/biblical-topical-search-chirho',
			detailUrlChirho: '/models-chirho/topical-passage-classifier-chirho',
			tagsChirho: ['Topics', 'Theology', 'Semantic Search'],
		},
		{
			idChirho: 'passage-difficulty-simplifier-chirho',
			nameChirho: 'Passage Difficulty Simplifier',
			descriptionChirho: 'Rates biblical passage reading difficulty and generates simplified paraphrases for complex verses. Helps new readers and children access challenging Scripture passages.',
			statusChirho: 'live',
			architectureChirho: 'Flan-T5-base (Difficulty + Simplification)',
			metricsChirho: 'Difficulty Accuracy: retraining...',
			hfUrlChirho: 'https://huggingface.co/spaces/LoveJesus/biblical-simplifier-chirho',
			detailUrlChirho: '/models-chirho/passage-difficulty-simplifier-chirho',
			tagsChirho: ['Simplification', 'Accessibility', 'Readability'],
		},
		{
			idChirho: 'evangelism-apologetics-chirho',
			nameChirho: 'Evangelism & Apologetics',
			descriptionChirho: 'Three-model RAG pipeline for answering apologetics questions with Scripture. Intent classifier routes questions through 5 categories, retriever fetches from 16K+ passages (Spurgeon, GotQuestions, church fathers, creation science, miracles), and Qwen3-14B LoRA generator (perplexity 4.08) produces grounded responses.',
			statusChirho: 'live',
			architectureChirho: 'RoBERTa-base + MiniLM-L12 + Qwen3-14B LoRA',
			metricsChirho: 'Intent F1: 0.83 | Retriever Pearson: 0.90 | Generator PPL: 4.08',
			hfUrlChirho: 'https://huggingface.co/spaces/LoveJesus/evangelism-apologetics-chirho',
			detailUrlChirho: '/models-chirho/evangelism-apologetics-chirho',
			tagsChirho: ['Apologetics', 'Evangelism', 'RAG', 'Generation'],
		},
	];

	const liveCountChirho = modelsChirho.filter(m => m.statusChirho === 'live').length;
	const plannedCountChirho = modelsChirho.filter(m => m.statusChirho === 'planned').length;
</script>

<svelte:head>
	<title>AI Models - Bible.Systems</title>
	<meta name="description" content="Open-source AI models for biblical scholarship: theological classification, cross-reference detection, biblical language tools, and more." />
	<meta property="og:title" content="AI Models - Bible.Systems" />
	<meta property="og:description" content="Open-source AI/ML models for biblical scholarship. Trained on historical creeds, councils, and scripture." />
	<link rel="canonical" href="https://bible.systems/models-chirho" />
</svelte:head>

<div class="bg-gradient-bible min-h-screen">
	<!-- Hero -->
	<section class="max-w-7xl mx-auto px-4 pt-20 pb-12 text-center">
		<div class="mb-8 flex flex-wrap items-center justify-center gap-3">
			<span class="inline-block bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-1.5 text-sky-400 text-sm font-medium">
				AI / ML
			</span>
			<span class="inline-block bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-1.5 text-sky-400 text-sm font-medium">
				Open Source
			</span>
			<span class="inline-block bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-1.5 text-sky-400 text-sm font-medium">
				HuggingFace
			</span>
		</div>

		<h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight">
			<span class="text-gradient-gold">AI Models</span><br />
			<span class="text-white">for Scripture</span>
		</h1>

		<p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-6">
			Open-source machine learning models for biblical scholarship —
			theological classification, cross-reference detection, language tools, and more.
		</p>

		<blockquote class="text-amber-400 text-lg italic mb-10 max-w-2xl mx-auto">
			"The heavens declare the glory of God; and the firmament sheweth his handywork."
			<cite class="block text-amber-500/70 text-base mt-1 not-italic">— Psalm 19:1</cite>
		</blockquote>

		<!-- Stats -->
		<div class="flex items-center justify-center gap-6 mb-8">
			<div class="bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-3">
				<span class="text-2xl font-bold text-sky-400">{liveCountChirho}</span>
				<span class="text-slate-400 text-sm ml-2">Live</span>
			</div>
			<div class="bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-3">
				<span class="text-2xl font-bold text-slate-400">{plannedCountChirho}</span>
				<span class="text-slate-400 text-sm ml-2">Planned</span>
			</div>
			<div class="bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-3">
				<span class="text-2xl font-bold text-amber-400">{modelsChirho.length}</span>
				<span class="text-slate-400 text-sm ml-2">Total</span>
			</div>
		</div>
	</section>

	<!-- Live Models -->
	<section class="max-w-6xl mx-auto px-4 py-8">
		<div class="text-center mb-8">
			<span class="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-sm font-medium mb-4">
				Available Now
			</span>
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-3">Live Models</h2>
			<p class="text-slate-400 max-w-2xl mx-auto">
				Trained, evaluated, and deployed on HuggingFace. Try them now.
			</p>
		</div>

		{#each modelsChirho.filter(m => m.statusChirho === 'live') as modelChirho}
			<a
				href={modelChirho.detailUrlChirho}
				class="group block bg-gradient-to-br from-slate-900 via-sky-950/50 to-slate-900 border border-sky-500/30 hover:border-sky-500/60 rounded-2xl p-6 md:p-8 mb-6 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10"
			>
				<div class="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
					<div class="flex items-start gap-4 flex-1">
						<div class="w-14 h-14 bg-sky-500/20 rounded-xl flex items-center justify-center group-hover:bg-sky-500/30 transition-colors flex-shrink-0">
							<svg class="w-7 h-7 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<div>
							<div class="flex items-center gap-2 mb-2">
								<h3 class="text-xl font-bold text-white">{modelChirho.nameChirho}</h3>
								<span class="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">Live</span>
							</div>
							<p class="text-slate-400 text-sm mb-3">{modelChirho.descriptionChirho}</p>

							<!-- Architecture & Metrics -->
							<div class="flex flex-wrap gap-2 mb-3">
								<span class="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">{modelChirho.architectureChirho}</span>
								{#if modelChirho.metricsChirho}
									<span class="px-3 py-1 bg-sky-500/10 text-sky-400 text-xs rounded-full">{modelChirho.metricsChirho}</span>
								{/if}
							</div>

							<!-- Tags -->
							<div class="flex flex-wrap gap-2">
								{#each modelChirho.tagsChirho as tagChirho}
									<span class="px-2 py-0.5 bg-slate-800/50 text-slate-500 text-xs rounded">{tagChirho}</span>
								{/each}
							</div>
						</div>
					</div>

					<div class="flex flex-col items-end gap-2 flex-shrink-0">
						<span class="text-sky-400 text-sm font-medium group-hover:text-sky-300">View Details →</span>
						{#if modelChirho.hfUrlChirho}
							<span class="text-slate-500 text-xs">+ Live Demo</span>
						{/if}
					</div>
				</div>
			</a>
		{/each}
	</section>

	<!-- Planned Models -->
	<section class="max-w-6xl mx-auto px-4 py-8">
		<div class="text-center mb-8">
			<span class="inline-block bg-slate-700/50 border border-slate-600/50 rounded-full px-4 py-1.5 text-slate-400 text-sm font-medium mb-4">
				Coming Soon
			</span>
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-3">Planned Models</h2>
			<p class="text-slate-400 max-w-2xl mx-auto">
				Currently in research and development. Each model follows the same pipeline:
				research paper, dataset creation, training, evaluation, and HuggingFace deployment.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-4">
			{#each modelsChirho.filter(m => m.statusChirho === 'planned') as modelChirho}
				<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
					<div class="flex items-center gap-3 mb-3">
						<div class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<div>
							<h3 class="text-white font-bold">{modelChirho.nameChirho}</h3>
							<span class="text-slate-600 text-xs">{modelChirho.architectureChirho}</span>
						</div>
					</div>

					<p class="text-slate-400 text-sm mb-3">{modelChirho.descriptionChirho}</p>

					<div class="flex flex-wrap gap-2">
						{#each modelChirho.tagsChirho as tagChirho}
							<span class="px-2 py-0.5 bg-slate-800/50 text-slate-600 text-xs rounded">{tagChirho}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- How It Works -->
	<section class="max-w-5xl mx-auto px-4 py-12">
		<div class="text-center mb-8">
			<h2 class="text-2xl md:text-3xl font-bold text-white mb-3">How Our Models Are Built</h2>
			<p class="text-slate-400 max-w-2xl mx-auto text-sm">Every model follows a rigorous pipeline from research to deployment.</p>
		</div>

		<div class="grid md:grid-cols-4 gap-4">
			<div class="bg-slate-900/50 rounded-xl p-5 border border-slate-800 text-center">
				<div class="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
					<span class="text-sky-400 font-bold text-lg">1</span>
				</div>
				<h3 class="text-white font-bold mb-1 text-sm">Research</h3>
				<p class="text-slate-500 text-xs">Academic literature review and approach design</p>
			</div>
			<div class="bg-slate-900/50 rounded-xl p-5 border border-slate-800 text-center">
				<div class="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
					<span class="text-sky-400 font-bold text-lg">2</span>
				</div>
				<h3 class="text-white font-bold mb-1 text-sm">Dataset</h3>
				<p class="text-slate-500 text-xs">Curated seeds expanded with augmentation and validation</p>
			</div>
			<div class="bg-slate-900/50 rounded-xl p-5 border border-slate-800 text-center">
				<div class="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
					<span class="text-sky-400 font-bold text-lg">3</span>
				</div>
				<h3 class="text-white font-bold mb-1 text-sm">Training</h3>
				<p class="text-slate-500 text-xs">Fine-tuning on NVIDIA A100 80GB with bf16 precision</p>
			</div>
			<div class="bg-slate-900/50 rounded-xl p-5 border border-slate-800 text-center">
				<div class="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
					<span class="text-sky-400 font-bold text-lg">4</span>
				</div>
				<h3 class="text-white font-bold mb-1 text-sm">Deploy</h3>
				<p class="text-slate-500 text-xs">Published to HuggingFace with interactive Gradio demos</p>
			</div>
		</div>
	</section>

	<!-- HuggingFace CTA -->
	<section class="max-w-4xl mx-auto px-4 py-12">
		<div class="bg-gradient-to-r from-sky-500/5 to-sky-600/5 border border-sky-500/20 rounded-2xl p-8 md:p-10">
			<div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
				<div class="flex-shrink-0">
					<div class="w-16 h-16 bg-sky-500/20 rounded-2xl flex items-center justify-center">
						<svg class="w-8 h-8 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
						</svg>
					</div>
				</div>
				<div class="text-center md:text-left">
					<h3 class="text-2xl font-bold text-white mb-2">All Models on HuggingFace</h3>
					<p class="text-slate-300 mb-4">
						Every model is MIT licensed and free to use. Download weights, run inference,
						or integrate into your own applications.
					</p>
					<a
						href="https://huggingface.co/LoveJesus"
						class="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium transition-colors"
						target="_blank"
						rel="noopener noreferrer"
					>
						View on HuggingFace
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
