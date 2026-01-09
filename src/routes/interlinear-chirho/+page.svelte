<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. - John 3:16 -->

<script>
	import InterlinearViewChirho from '$lib/components/InterlinearViewChirho.svelte';

	// Sample John 3:16 data with Greek/English/Spanish alignment
	const john316DataChirho = [
		{
			originalChirho: 'Οὕτως',
			transliterationChirho: 'houtōs',
			strongsChirho: ['G3779'],
			morphologyChirho: 'ADV',
			translationsChirho: [
				{ languageCodeChirho: 'en', wordsChirho: ['For', 'so'] },
				{ languageCodeChirho: 'es', wordsChirho: ['Porque', 'tanto'] }
			]
		},
		{
			originalChirho: 'γὰρ',
			transliterationChirho: 'gar',
			strongsChirho: ['G1063'],
			morphologyChirho: 'CONJ',
			translationsChirho: [
				{ languageCodeChirho: 'en', wordsChirho: ['for'] },
				{ languageCodeChirho: 'es', wordsChirho: [''] }
			]
		},
		{
			originalChirho: 'ἠγάπησεν',
			transliterationChirho: 'ēgapēsen',
			strongsChirho: ['G0025'],
			morphologyChirho: 'V-AAI-3S',
			translationsChirho: [
				{ languageCodeChirho: 'en', wordsChirho: ['loved'] },
				{ languageCodeChirho: 'es', wordsChirho: ['amó'] }
			]
		},
		{
			originalChirho: 'ὁ',
			transliterationChirho: 'ho',
			strongsChirho: ['G3588'],
			morphologyChirho: 'T-NSM',
			translationsChirho: [
				{ languageCodeChirho: 'en', wordsChirho: [] },
				{ languageCodeChirho: 'es', wordsChirho: [] }
			]
		},
		{
			originalChirho: 'θεὸς',
			transliterationChirho: 'theos',
			strongsChirho: ['G2316'],
			morphologyChirho: 'N-NSM',
			translationsChirho: [
				{ languageCodeChirho: 'en', wordsChirho: ['God'] },
				{ languageCodeChirho: 'es', wordsChirho: ['Dios'] }
			]
		},
		{
			originalChirho: 'τὸν',
			transliterationChirho: 'ton',
			strongsChirho: ['G3588'],
			morphologyChirho: 'T-ASM',
			translationsChirho: [
				{ languageCodeChirho: 'en', wordsChirho: ['the'] },
				{ languageCodeChirho: 'es', wordsChirho: ['al'] }
			]
		},
		{
			originalChirho: 'κόσμον',
			transliterationChirho: 'kosmon',
			strongsChirho: ['G2889'],
			morphologyChirho: 'N-ASM',
			translationsChirho: [
				{ languageCodeChirho: 'en', wordsChirho: ['world'] },
				{ languageCodeChirho: 'es', wordsChirho: ['mundo'] }
			]
		}
	];
</script>

<main class="interlinear-page-chirho">
	<h1>Interlinear Bible - John 3:16</h1>
	<p class="verse-ref-chirho">Greek (NA28) with English/Spanish alignment</p>

	<InterlinearViewChirho
		blocksChirho={john316DataChirho}
		originalLanguageChirho="greek"
		showMorphologyChirho={true}
		showLouwNidaChirho={true}
		primaryTranslationChirho="en"
	/>

	<div class="translation-toggle-chirho">
		<p>Hover over words to see Strong's numbers, morphology, and Louw-Nida semantic domains.</p>
	</div>
</main>

<style>
	.interlinear-page-chirho {
		padding: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	h1 {
		color: var(--text-primary-chirho, #2c1810);
		margin-bottom: 0.5rem;
	}

	.verse-ref-chirho {
		color: var(--text-secondary-chirho, #6b5b4f);
		font-style: italic;
		margin-bottom: 2rem;
	}

	.translation-toggle-chirho {
		margin-top: 2rem;
		padding: 1rem;
		background: var(--bg-muted-chirho, #f5f0e8);
		border-radius: 0.5rem;
		font-size: 0.875rem;
		color: var(--text-secondary-chirho, #6b5b4f);
	}
</style>
