<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. — John 3:16 -->

<script>
	let activeTabChirho = $state('demo');

	const modelsChirho = [
		{
			nameChirho: 'Classifier',
			modelIdChirho: 'LoveJesus/theologian-classifier-chirho',
			architectureChirho: 'RoBERTa-large (355M params)',
			taskChirho: 'Multi-label heresy classification',
			metricChirho: 'F1 macro: 0.9971',
			descriptionChirho: 'Classifies theological statements across 13 labels: orthodox + 12 heresy types. Uses sigmoid activation for multi-label detection.',
			colorChirho: 'sky',
		},
		{
			nameChirho: 'Embedder',
			modelIdChirho: 'LoveJesus/theologian-embedder-chirho',
			architectureChirho: 'MiniLM-L12-v2 (33M params)',
			taskChirho: 'Theological embedding space',
			metricChirho: 'Separation gap: 1.6055',
			descriptionChirho: 'Produces embeddings where orthodox statements cluster together and heterodox statements are separated. Enables zero-shot detection.',
			colorChirho: 'emerald',
		},
		{
			nameChirho: 'Explainer',
			modelIdChirho: 'LoveJesus/theologian-explainer-chirho',
			architectureChirho: 'Flan-T5-base (248M params)',
			taskChirho: 'Natural language explanations',
			metricChirho: 'Eval loss: 0.0567',
			descriptionChirho: 'Generates human-readable explanations citing relevant creeds, councils, and scripture for why a statement is classified a certain way.',
			colorChirho: 'amber',
		},
	];

	const heresiesChirho = [
		{ nameChirho: 'Arianism', councilChirho: 'Nicaea (325)', descChirho: 'Christ is created, not God' },
		{ nameChirho: 'Pelagianism', councilChirho: 'Ephesus (431)', descChirho: 'No original sin, salvation by works' },
		{ nameChirho: 'Gnosticism', councilChirho: 'Early church', descChirho: 'Material world is evil, secret knowledge saves' },
		{ nameChirho: 'Modalism', councilChirho: 'Constantinople I (381)', descChirho: 'God is one person in three modes' },
		{ nameChirho: 'Docetism', councilChirho: 'Chalcedon (451)', descChirho: 'Christ only appeared human' },
		{ nameChirho: 'Nestorianism', councilChirho: 'Ephesus (431)', descChirho: 'Two persons in Christ' },
		{ nameChirho: 'Marcionism', councilChirho: 'Early church', descChirho: 'OT God is evil, reject OT' },
		{ nameChirho: 'Apollinarianism', councilChirho: 'Constantinople I (381)', descChirho: 'Christ lacks human mind' },
		{ nameChirho: 'Monothelitism', councilChirho: 'Constantinople III (681)', descChirho: 'Christ has only one will' },
		{ nameChirho: 'Semi-Pelagianism', councilChirho: 'Orange (529)', descChirho: 'Humans initiate salvation' },
		{ nameChirho: 'Adoptionism', councilChirho: 'Multiple synods', descChirho: 'Jesus adopted as Son' },
		{ nameChirho: 'Patripassianism', councilChirho: 'Early church', descChirho: 'Father suffered on cross' },
	];

	const councilsChirho = [
		{ nameChirho: 'Nicaea I', yearChirho: '325 AD', definitionChirho: 'Christ is God, consubstantial with the Father' },
		{ nameChirho: 'Constantinople I', yearChirho: '381 AD', definitionChirho: 'Holy Spirit is God, full Trinitarian doctrine' },
		{ nameChirho: 'Ephesus', yearChirho: '431 AD', definitionChirho: 'Christ is one person, Mary is Theotokos' },
		{ nameChirho: 'Chalcedon', yearChirho: '451 AD', definitionChirho: 'Two natures, fully God and fully man' },
		{ nameChirho: 'Constantinople II', yearChirho: '553 AD', definitionChirho: 'Reinforces Chalcedon' },
		{ nameChirho: 'Constantinople III', yearChirho: '681 AD', definitionChirho: 'Two wills in Christ' },
	];
</script>

<svelte:head>
	<title>Theological Guardrails - AI Models - Bible.Systems</title>
	<meta name="description" content="AI pipeline for classifying theological statements as orthodox, heterodox, or denominational distinctive. Three models: classifier, embedder, and explainer." />
	<meta property="og:title" content="Theological Guardrails AI Pipeline - Bible.Systems" />
	<meta property="og:description" content="Classify theological statements with AI. Detects 12 historical heresies based on the first six ecumenical councils." />
	<link rel="canonical" href="https://bible.systems/models-chirho/theological-guardrails-chirho" />
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
				<li class="text-slate-300">Theological Guardrails</li>
			</ol>
		</nav>

		<div class="text-center">
			<div class="mb-6 flex flex-wrap items-center justify-center gap-3">
				<span class="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-sm font-medium">
					Live on HuggingFace
				</span>
				<span class="inline-block bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-1.5 text-sky-400 text-sm font-medium">
					3-Model Pipeline
				</span>
				<span class="inline-block bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-amber-400 text-sm font-medium">
					MIT License
				</span>
			</div>

			<h1 class="text-4xl md:text-6xl font-black mb-6 leading-tight">
				<span class="text-gradient-gold">Theological</span><br />
				<span class="text-white">Guardrails</span>
			</h1>

			<p class="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
				A three-model AI pipeline for classifying theological statements as
				<span class="text-green-400 font-medium">orthodox</span>,
				<span class="text-red-400 font-medium">heterodox</span>, or
				<span class="text-amber-400 font-medium">denominational distinctive</span>
				based on the first six ecumenical councils.
			</p>

			<!-- Quick Links -->
			<div class="flex flex-wrap items-center justify-center gap-3 mb-6">
				<a
					href="https://huggingface.co/spaces/LoveJesus/theological-guardrails-chirho"
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
					href="https://huggingface.co/LoveJesus/theologian-classifier-chirho"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full px-6 py-2.5 text-slate-300 font-medium text-sm transition-colors"
				>
					View on HuggingFace
				</a>
				<a
					href="https://huggingface.co/datasets/LoveJesus/theologian-dataset-chirho"
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
				class="px-4 py-3 text-sm font-medium transition-colors {activeTabChirho === 'heresies' ? 'text-sky-400 border-b-2 border-sky-400' : 'text-slate-400 hover:text-slate-300'}"
				onclick={() => activeTabChirho = 'heresies'}
			>
				Heresies Detected
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
						href="https://huggingface.co/spaces/LoveJesus/theological-guardrails-chirho"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sky-400 hover:text-sky-300 text-xs font-medium"
					>
						Open in new tab →
					</a>
				</div>
				<iframe
					src="https://lovejesus-theological-guardrails-chirho.hf.space"
					title="Theological Guardrails Demo"
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
								<span class="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">~22,500 examples</span>
							</div>
							<p class="text-slate-400 text-sm mb-3">
								Curated theological statements labeled as orthodox, heterodox, or denominational distinctive.
								Built from 500 manually curated seeds expanded via LLM-assisted generation.
							</p>
							<div class="flex flex-wrap gap-3 text-xs">
								<span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full">JSONL format</span>
								<span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full">Train: 17,554</span>
								<span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full">Val: 2,240</span>
								<span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full">Test: 2,241</span>
							</div>
						</div>
						<a
							href="https://huggingface.co/datasets/LoveJesus/theologian-dataset-chirho"
							target="_blank"
							rel="noopener noreferrer"
							class="text-amber-400 hover:text-amber-300 text-sm font-medium flex-shrink-0"
						>
							HuggingFace →
						</a>
					</div>
				</div>
			</div>

			<!-- Orthodoxy Basis -->
			<div class="mt-8">
				<h3 class="text-lg font-bold text-white mb-4">Orthodoxy Basis: First Six Ecumenical Councils</h3>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
					{#each councilsChirho as councilChirho, indexChirho}
						<div class="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
							<div class="flex items-center gap-2 mb-1">
								<span class="text-sky-400 font-bold text-sm">{indexChirho + 1}.</span>
								<span class="text-white font-medium text-sm">{councilChirho.nameChirho}</span>
								<span class="text-slate-600 text-xs">({councilChirho.yearChirho})</span>
							</div>
							<p class="text-slate-400 text-xs">{councilChirho.definitionChirho}</p>
						</div>
					{/each}
				</div>
				<p class="text-slate-500 text-xs mt-3">
					Intra-Christian disagreements (predestination, baptism mode, spiritual gifts, eucharistic theology) are labeled as
					<span class="text-amber-400">denominational distinctives</span>, not heresy.
				</p>
			</div>

		<!-- Heresies Tab -->
		{:else if activeTabChirho === 'heresies'}
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each heresiesChirho as heresyChirho}
					<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-red-500/30 transition-colors">
						<h3 class="text-white font-bold mb-1">{heresyChirho.nameChirho}</h3>
						<p class="text-slate-500 text-xs mb-2">{heresyChirho.councilChirho}</p>
						<p class="text-slate-400 text-sm">{heresyChirho.descChirho}</p>
					</div>
				{/each}
			</div>

		<!-- Usage Tab -->
		{:else if activeTabChirho === 'usage'}
			<div class="space-y-6">
				<!-- Classifier -->
				<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
					<h3 class="text-white font-bold mb-1">Classifier: Detect Heresy</h3>
					<p class="text-slate-400 text-sm mb-4">Multi-label classification with confidence scores for each heresy type.</p>
					<pre class="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm"><code class="text-slate-300">{`from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

tokenizer = AutoTokenizer.from_pretrained("LoveJesus/theologian-classifier-chirho")
model = AutoModelForSequenceClassification.from_pretrained("LoveJesus/theologian-classifier-chirho")

text = "Jesus was a created being, the first and greatest of God's creations."
inputs = tokenizer(text, return_tensors="pt", truncation=True, max_length=256)

with torch.no_grad():
    scores = torch.sigmoid(model(**inputs).logits)[0]

labels = ["orthodox", "arianism", "pelagianism", "gnosticism", "modalism",
          "docetism", "nestorianism", "marcionism", "apollinarianism",
          "monothelitism", "semi_pelagianism", "adoptionism", "patripassianism"]

for label, score in zip(labels, scores):
    if score > 0.3:
        print(f"  {label}: {score:.3f}")
# Output: arianism: 0.98`}</code></pre>
				</div>

				<!-- Embedder -->
				<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
					<h3 class="text-white font-bold mb-1">Embedder: Theological Similarity</h3>
					<p class="text-slate-400 text-sm mb-4">Compare statements against orthodox embeddings for zero-shot detection.</p>
					<pre class="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm"><code class="text-slate-300">{`from sentence_transformers import SentenceTransformer
import numpy as np

model = SentenceTransformer("LoveJesus/theologian-embedder-chirho")

orthodox = model.encode("Christ is fully God and fully man, two natures in one person.")
statement = model.encode("Jesus was merely a good moral teacher.")

similarity = np.dot(orthodox, statement) / (np.linalg.norm(orthodox) * np.linalg.norm(statement))
print(f"Similarity to orthodoxy: {similarity:.3f}")  # Low = far from orthodox`}</code></pre>
				</div>

				<!-- Explainer -->
				<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
					<h3 class="text-white font-bold mb-1">Explainer: Why Is It Heretical?</h3>
					<p class="text-slate-400 text-sm mb-4">Generate human-readable explanations citing creeds, councils, and scripture.</p>
					<pre class="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm"><code class="text-slate-300">{`from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

tokenizer = AutoTokenizer.from_pretrained("LoveJesus/theologian-explainer-chirho")
model = AutoModelForSeq2SeqLM.from_pretrained("LoveJesus/theologian-explainer-chirho")

input_text = ("explain theological classification: Jesus is a created being. "
              "| label: heterodox | heresy types: arianism")
inputs = tokenizer(input_text, return_tensors="pt", max_length=512, truncation=True)
outputs = model.generate(**inputs, max_length=256, num_beams=4, early_stopping=True)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))`}</code></pre>
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
