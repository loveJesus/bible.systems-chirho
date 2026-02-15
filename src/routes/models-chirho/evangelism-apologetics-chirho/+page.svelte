<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. — John 3:16 -->

<script>
	let activeTabChirho = $state('demo');

	const modelsChirho = [
		{
			nameChirho: 'Intent Classifier',
			modelIdChirho: 'LoveJesus/evangelism-intent-classifier-chirho',
			architectureChirho: 'RoBERTa-base (125M params)',
			taskChirho: 'Question routing',
			metricChirho: 'Weighted F1: 0.83',
			descriptionChirho: 'Routes incoming questions to the appropriate pipeline: evangelism dialogue, apologetics Q&A, creation science, historical evidence, or miracle testimony.',
			colorChirho: 'sky',
		},
		{
			nameChirho: 'Apologetics Retriever',
			modelIdChirho: 'LoveJesus/evangelism-retriever-chirho',
			architectureChirho: 'MiniLM-L12-v2 (33M params)',
			taskChirho: 'Passage retrieval',
			metricChirho: 'Pearson: 0.90',
			descriptionChirho: 'Retrieves the most relevant apologetics passages from a 16,000+ entry corpus spanning creation science, historical evidence, church fathers, and miracle testimonies.',
			colorChirho: 'emerald',
		},
		{
			nameChirho: 'Generator',
			modelIdChirho: 'LoveJesus/evangelism-generator-chirho',
			architectureChirho: 'Qwen3-14B + LoRA (64M trainable)',
			taskChirho: 'Response generation',
			metricChirho: 'Training on RunPod H200',
			descriptionChirho: 'Generates contextual, Scripture-grounded responses using retrieved passages. Fine-tuned with LoRA on 15K+ instruction pairs covering evangelism, apologetics, and creation science.',
			colorChirho: 'amber',
		},
	];

	const categoriesChirho = [
		{
			nameChirho: 'Evangelism Dialogue',
			iconChirho: '💬',
			descChirho: 'Multi-turn conversations using the Law-then-Grace method. Based on Ray Comfort / Living Waters methodology with 10,000+ dialogue pairs.',
			examplesChirho: ['How can I share my faith?', 'What do I say when someone says "I\'m a good person"?', 'How do I witness to an atheist?'],
		},
		{
			nameChirho: 'Apologetics Q&A',
			iconChirho: '📖',
			descChirho: 'Evidence-based answers to common objections. Covers reliability of Scripture, problem of evil, resurrection evidence, and more.',
			examplesChirho: ['How do we know the Bible is reliable?', 'Why does God allow suffering?', 'Did Jesus really rise from the dead?'],
		},
		{
			nameChirho: 'Creation Science',
			iconChirho: '🔬',
			descChirho: 'Scientific evidence examined through the lens of Scripture. Soft tissue in dinosaur bones, radiometric dating anomalies, fine-tuning constants, and more.',
			examplesChirho: ['What about dinosaur soft tissue?', 'How old is the earth?', 'Is evolution compatible with the Bible?'],
		},
		{
			nameChirho: 'Historical Evidence',
			iconChirho: '📜',
			descChirho: 'Non-biblical attestation for Jesus, manuscript reliability, archaeological confirmations, Dead Sea Scrolls, and early church testimony.',
			examplesChirho: ['Do secular historians mention Jesus?', 'How reliable are the New Testament manuscripts?', 'What did the early church believe?'],
		},
		{
			nameChirho: 'Miracle Testimony',
			iconChirho: '✨',
			descChirho: 'Documented modern miracles, George Muller\'s 50,000 answered prayers, Craig Keener\'s academic research, and peer-reviewed healing studies.',
			examplesChirho: ['Are miracles still happening today?', 'Who was George Muller?', 'Is there medical evidence for healing miracles?'],
		},
	];

	const corpusStatsChirho = [
		{ labelChirho: 'Total Corpus Entries', valueChirho: '16,000+' },
		{ labelChirho: 'Training Pairs (Generator)', valueChirho: '15,000+' },
		{ labelChirho: 'Intent Categories', valueChirho: '5' },
		{ labelChirho: 'Source Types', valueChirho: '12' },
	];

	const sourcesChirho = [
		{ nameChirho: 'Spurgeon Sermons', countChirho: '3,500+', typeChirho: 'Public Domain' },
		{ nameChirho: 'GotQuestions Q&A', countChirho: '9,530', typeChirho: 'HuggingFace' },
		{ nameChirho: 'Church Fathers', countChirho: '1,200+', typeChirho: 'CCEL / Public Domain' },
		{ nameChirho: 'Creation Science Evidence', countChirho: '500+', typeChirho: 'Peer-reviewed' },
		{ nameChirho: 'Historical Evidence', countChirho: '300+', typeChirho: 'Academic' },
		{ nameChirho: 'Miracle Testimonies', countChirho: '200+', typeChirho: 'Documented' },
		{ nameChirho: 'Evangelism Dialogues', countChirho: '10,000+', typeChirho: 'Generated + Living Waters' },
		{ nameChirho: 'Apologetics Articles', countChirho: '800+', typeChirho: 'Probe / AP' },
	];
</script>

<svelte:head>
	<title>Evangelism & Apologetics - AI Models - Bible.Systems</title>
	<meta name="description" content="AI-powered evangelism and apologetics pipeline. Intent classification, passage retrieval, and response generation grounded in Scripture and evidence." />
	<meta property="og:title" content="Evangelism & Apologetics AI Pipeline - Bible.Systems" />
	<meta property="og:description" content="RAG-powered system for evangelism dialogues, apologetics Q&A, creation science, historical evidence, and miracle testimonies." />
	<link rel="canonical" href="https://bible.systems/models-chirho/evangelism-apologetics-chirho" />
</svelte:head>

<div class="bg-gradient-bible min-h-screen">
	<!-- Breadcrumb + Hero -->
	<section class="max-w-7xl mx-auto px-4 pt-20 pb-8">
		<nav class="mb-8" aria-label="Breadcrumb">
			<ol class="flex items-center gap-2 text-sm text-slate-500">
				<li><a href="/" class="hover:text-amber-400 transition-colors">Home</a></li>
				<li>/</li>
				<li><a href="/models-chirho" class="hover:text-amber-400 transition-colors">AI Models</a></li>
				<li>/</li>
				<li class="text-slate-300">Evangelism & Apologetics</li>
			</ol>
		</nav>

		<div class="text-center">
			<div class="mb-6 flex flex-wrap items-center justify-center gap-3">
				<span class="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-sm font-medium">
					Live on HuggingFace
				</span>
				<span class="inline-block bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-1.5 text-sky-400 text-sm font-medium">
					3-Model RAG Pipeline
				</span>
				<span class="inline-block bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-1.5 text-purple-400 text-sm font-medium">
					16,000+ Corpus Entries
				</span>
			</div>

			<h1 class="text-4xl md:text-6xl font-black mb-6 leading-tight">
				<span class="text-gradient-gold">Evangelism</span><br />
				<span class="text-white">& Apologetics</span>
			</h1>

			<p class="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
				A RAG-powered AI system for
				<span class="text-sky-400 font-medium">evangelism dialogues</span>,
				<span class="text-emerald-400 font-medium">apologetics Q&A</span>,
				<span class="text-purple-400 font-medium">creation science</span>,
				<span class="text-amber-400 font-medium">historical evidence</span>, and
				<span class="text-rose-400 font-medium">miracle testimonies</span>
				— all grounded in Scripture.
			</p>

			<div class="flex flex-wrap items-center justify-center gap-3 mb-6">
				<a
					href="https://huggingface.co/spaces/LoveJesus/evangelism-apologetics-chirho"
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
					href="https://huggingface.co/LoveJesus/evangelism-intent-classifier-chirho"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full px-6 py-2.5 text-slate-300 font-medium text-sm transition-colors"
				>
					View on HuggingFace
				</a>
				<a
					href="https://huggingface.co/datasets/LoveJesus/evangelism-dataset-chirho"
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
		<div class="flex items-center gap-1 border-b border-slate-800 mb-0 overflow-x-auto">
			<button
				class="px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap {activeTabChirho === 'demo' ? 'text-sky-400 border-b-2 border-sky-400' : 'text-slate-400 hover:text-slate-300'}"
				onclick={() => activeTabChirho = 'demo'}
			>
				Live Demo
			</button>
			<button
				class="px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap {activeTabChirho === 'models' ? 'text-sky-400 border-b-2 border-sky-400' : 'text-slate-400 hover:text-slate-300'}"
				onclick={() => activeTabChirho = 'models'}
			>
				Models
			</button>
			<button
				class="px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap {activeTabChirho === 'categories' ? 'text-sky-400 border-b-2 border-sky-400' : 'text-slate-400 hover:text-slate-300'}"
				onclick={() => activeTabChirho = 'categories'}
			>
				Categories
			</button>
			<button
				class="px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap {activeTabChirho === 'corpus' ? 'text-sky-400 border-b-2 border-sky-400' : 'text-slate-400 hover:text-slate-300'}"
				onclick={() => activeTabChirho = 'corpus'}
			>
				Corpus
			</button>
			<button
				class="px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap {activeTabChirho === 'usage' ? 'text-sky-400 border-b-2 border-sky-400' : 'text-slate-400 hover:text-slate-300'}"
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
						href="https://huggingface.co/spaces/LoveJesus/evangelism-apologetics-chirho"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sky-400 hover:text-sky-300 text-xs font-medium"
					>
						Open in new tab →
					</a>
				</div>
				<iframe
					src="https://lovejesus-evangelism-apologetics-chirho.hf.space"
					title="Evangelism & Apologetics Demo"
					class="w-full border-0"
					style="height: 800px;"
					loading="lazy"
					allow="clipboard-write"
				></iframe>
			</div>

		<!-- Models Tab -->
		{:else if activeTabChirho === 'models'}
			<div class="space-y-6">
				<!-- Architecture Diagram -->
				<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
					<h3 class="text-lg font-bold text-white mb-4">Pipeline Architecture</h3>
					<div class="flex flex-col items-center gap-3 text-sm">
						<div class="bg-slate-800 border border-slate-700 rounded-lg px-6 py-3 text-white font-medium">
							User Question
						</div>
						<div class="text-slate-600">↓</div>
						<div class="bg-sky-500/20 border border-sky-500/40 rounded-lg px-6 py-3 text-sky-400 font-medium">
							Intent Classifier (RoBERTa-base)
						</div>
						<div class="text-slate-600">↓</div>
						<div class="bg-emerald-500/20 border border-emerald-500/40 rounded-lg px-6 py-3 text-emerald-400 font-medium">
							Apologetics Retriever (MiniLM-L12) → 16K+ Corpus
						</div>
						<div class="text-slate-600">↓</div>
						<div class="bg-amber-500/20 border border-amber-500/40 rounded-lg px-6 py-3 text-amber-400 font-medium">
							Generator (Qwen3-14B + LoRA)
						</div>
						<div class="text-slate-600">↓</div>
						<div class="bg-green-500/20 border border-green-500/40 rounded-lg px-6 py-3 text-green-400 font-medium">
							Theological Guardrails (F1: 0.997)
						</div>
						<div class="text-slate-600">↓</div>
						<div class="bg-slate-800 border border-slate-700 rounded-lg px-6 py-3 text-white font-medium">
							Scripture-Grounded Response
						</div>
					</div>
				</div>

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
								<h3 class="text-xl font-bold text-white">Training Dataset & Corpus</h3>
								<span class="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">16,000+ entries</span>
							</div>
							<p class="text-slate-400 text-sm mb-3">
								Comprehensive apologetics corpus spanning 12 source types. Includes Spurgeon sermons, church fathers,
								creation science evidence, historical attestation, miracle testimonies, and evangelism dialogues.
							</p>
							<div class="flex flex-wrap gap-3 text-xs">
								<span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full">JSONL format</span>
								<span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full">5 intent categories</span>
								<span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full">12 source types</span>
							</div>
						</div>
						<a
							href="https://huggingface.co/datasets/LoveJesus/evangelism-dataset-chirho"
							target="_blank"
							rel="noopener noreferrer"
							class="text-amber-400 hover:text-amber-300 text-sm font-medium flex-shrink-0"
						>
							HuggingFace →
						</a>
					</div>
				</div>
			</div>

		<!-- Categories Tab -->
		{:else if activeTabChirho === 'categories'}
			<div class="space-y-6">
				{#each categoriesChirho as categoryChirho}
					<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-sky-500/30 transition-colors">
						<div class="flex items-start gap-4">
							<span class="text-3xl">{categoryChirho.iconChirho}</span>
							<div class="flex-1">
								<h3 class="text-lg font-bold text-white mb-2">{categoryChirho.nameChirho}</h3>
								<p class="text-slate-400 text-sm mb-4">{categoryChirho.descChirho}</p>
								<div class="flex flex-wrap gap-2">
									{#each categoryChirho.examplesChirho as exampleChirho}
										<span class="px-3 py-1.5 bg-slate-800 text-slate-300 text-xs rounded-full">
											"{exampleChirho}"
										</span>
									{/each}
								</div>
							</div>
						</div>
					</div>
				{/each}

				<div class="bg-slate-900/50 border border-amber-500/20 rounded-xl p-6 mt-6">
					<p class="text-amber-400 text-sm font-medium mb-2">Scripture Authority</p>
					<p class="text-slate-400 text-sm">
						All responses are grounded in Scripture as the final authority. Secondary sources (church fathers, scientific evidence,
						historical attestation) support and illustrate biblical truth but never supersede it. Every response includes relevant
						Scripture references.
					</p>
				</div>
			</div>

		<!-- Corpus Tab -->
		{:else if activeTabChirho === 'corpus'}
			<div class="space-y-6">
				<!-- Stats -->
				<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
					{#each corpusStatsChirho as statChirho}
						<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
							<div class="text-2xl font-black text-white">{statChirho.valueChirho}</div>
							<div class="text-slate-500 text-xs mt-1">{statChirho.labelChirho}</div>
						</div>
					{/each}
				</div>

				<!-- Sources -->
				<div class="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
					<div class="p-4 border-b border-slate-800">
						<h3 class="text-white font-bold">Corpus Sources</h3>
					</div>
					<div class="divide-y divide-slate-800">
						{#each sourcesChirho as sourceChirho}
							<div class="flex items-center justify-between px-4 py-3">
								<div>
									<span class="text-white text-sm font-medium">{sourceChirho.nameChirho}</span>
									<span class="text-slate-600 text-xs ml-2">({sourceChirho.typeChirho})</span>
								</div>
								<span class="text-sky-400 text-sm font-mono">{sourceChirho.countChirho}</span>
							</div>
						{/each}
					</div>
				</div>

				<!-- Evidence Structure -->
				<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
					<h3 class="text-white font-bold mb-3">Evidence Entry Structure</h3>
					<p class="text-slate-400 text-sm mb-4">Each evidence entry includes structured fields for claims, citations, counter-arguments, and Scripture references.</p>
					<pre class="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm"><code class="text-slate-300">{`{
  "claim": "Soft tissue found in T. Rex fossils",
  "evidence": "Mary Schweitzer (2005) discovered flexible blood vessels...",
  "citations": ["doi:10.1126/science.1108397"],
  "counter_arguments": "Iron preservation hypothesis",
  "rebuttal": "NC State 2025 confirmation, no iron detected...",
  "scripture": ["Genesis 1:24-25", "Job 40:15-24"],
  "confidence": "high",
  "category": "creation_science"
}`}</code></pre>
				</div>
			</div>

		<!-- Usage Tab -->
		{:else if activeTabChirho === 'usage'}
			<div class="space-y-6">
				<!-- Full Pipeline -->
				<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
					<h3 class="text-white font-bold mb-1">Full Pipeline: Ask a Question</h3>
					<p class="text-slate-400 text-sm mb-4">Classify intent, retrieve relevant passages, and generate a response.</p>
					<pre class="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm"><code class="text-slate-300">{`from transformers import AutoTokenizer, AutoModelForSequenceClassification
from sentence_transformers import SentenceTransformer
import torch, numpy as np

# 1. Classify intent
cls_tok = AutoTokenizer.from_pretrained("LoveJesus/evangelism-intent-classifier-chirho")
cls_model = AutoModelForSequenceClassification.from_pretrained(
    "LoveJesus/evangelism-intent-classifier-chirho"
)

question = "How do we know the Bible is reliable?"
inputs = cls_tok(question, return_tensors="pt", truncation=True, max_length=256)
with torch.no_grad():
    logits = cls_model(**inputs).logits
    intent = ["apologetics_qa", "creation_science", "evangelism_dialogue",
              "historical_evidence", "miracle_testimony"][logits.argmax()]
print(f"Intent: {intent}")  # apologetics_qa

# 2. Retrieve passages
retriever = SentenceTransformer("LoveJesus/evangelism-retriever-chirho")
query_emb = retriever.encode(question)
# Compare against corpus embeddings for top-k passages

# 3. Generate response (requires GPU for Qwen3-14B)
# See HuggingFace model card for generator usage`}</code></pre>
				</div>

				<!-- Intent Classifier Only -->
				<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
					<h3 class="text-white font-bold mb-1">Intent Classifier Only</h3>
					<p class="text-slate-400 text-sm mb-4">Route questions to the right category.</p>
					<pre class="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm"><code class="text-slate-300">{`from transformers import pipeline

classifier = pipeline(
    "text-classification",
    model="LoveJesus/evangelism-intent-classifier-chirho"
)

results = classifier([
    "What about dinosaur soft tissue?",
    "How can I share my faith at work?",
    "Did Jesus really exist historically?",
])
for r in results:
    print(f"  {r['label']}: {r['score']:.3f}")
# creation_science: 0.95
# evangelism_dialogue: 0.91
# historical_evidence: 0.88`}</code></pre>
				</div>

				<!-- Retriever Only -->
				<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
					<h3 class="text-white font-bold mb-1">Passage Retriever Only</h3>
					<p class="text-slate-400 text-sm mb-4">Search the apologetics corpus by semantic similarity.</p>
					<pre class="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm"><code class="text-slate-300">{`from sentence_transformers import SentenceTransformer
from datasets import load_dataset
import numpy as np

retriever = SentenceTransformer("LoveJesus/evangelism-retriever-chirho")
corpus = load_dataset("LoveJesus/evangelism-dataset-chirho", split="train")

# Encode corpus (do once, cache results)
corpus_embs = retriever.encode(corpus["text"], show_progress_bar=True)

# Query
query = "evidence for the resurrection"
query_emb = retriever.encode(query)

scores = np.dot(corpus_embs, query_emb)
top_k = np.argsort(scores)[-5:][::-1]
for idx in top_k:
    print(f"  [{scores[idx]:.3f}] {corpus[int(idx)]['text'][:100]}...")`}</code></pre>
				</div>

				<!-- Install -->
				<div class="bg-slate-900/50 border border-sky-500/20 rounded-xl p-6">
					<h3 class="text-white font-bold mb-1">Install Dependencies</h3>
					<pre class="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto text-sm"><code class="text-slate-300">pip install transformers torch sentence-transformers datasets</code></pre>
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
