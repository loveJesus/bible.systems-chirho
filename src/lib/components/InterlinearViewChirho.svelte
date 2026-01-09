<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. - John 3:16 -->

<script>
	import { getLouwNidaForStrongsChirho } from '$lib/data_chirho/strongs-louw-nida-mapping-chirho';
	import { LOUW_NIDA_DOMAINS_CHIRHO } from '$lib/types_chirho/louw-nida-chirho';

	let {
		blocksChirho,
		originalLanguageChirho = 'greek',
		showMorphologyChirho = true,
		showLouwNidaChirho = true,
		primaryTranslationChirho = 'en',
	} = $props();

	let hoveredIndexChirho = $state(null);

	function getTranslationWordsChirho(blockChirho) {
		const translationChirho = blockChirho.translationsChirho.find(
			(tChirho) => tChirho.languageCodeChirho === primaryTranslationChirho
		);
		return translationChirho?.wordsChirho.join(' ') ?? '-';
	}

	function getDomainInfoChirho(domainNumberChirho) {
		const domainIdChirho = domainNumberChirho.split('.')[0];
		const domainChirho = LOUW_NIDA_DOMAINS_CHIRHO[domainIdChirho];
		return domainChirho?.nameChirho ?? 'Unknown domain';
	}

	function getStrongsDetailsChirho(strongsChirho) {
		return getLouwNidaForStrongsChirho(strongsChirho);
	}
</script>

<div class="interlinear-container-chirho" role="region" aria-label="Interlinear Bible text">
	<div class="interlinear-blocks-chirho">
		{#each blocksChirho as blockChirho, indexChirho}
			<button
				class="interlinear-block-chirho"
				class:hovered-chirho={hoveredIndexChirho === indexChirho}
				class:has-strongs-chirho={blockChirho.strongsChirho.length > 0}
				onmouseenter={() => (hoveredIndexChirho = indexChirho)}
				onmouseleave={() => (hoveredIndexChirho = null)}
				onfocus={() => (hoveredIndexChirho = indexChirho)}
				onblur={() => (hoveredIndexChirho = null)}
				type="button"
				aria-expanded={hoveredIndexChirho === indexChirho}
			>
				<!-- Original Language -->
				<span
					class="original-text-chirho"
					class:hebrew-chirho={originalLanguageChirho === 'hebrew'}
					class:greek-chirho={originalLanguageChirho === 'greek'}
				>
					{blockChirho.originalChirho}
				</span>

				<!-- Transliteration (if available) -->
				{#if blockChirho.transliterationChirho}
					<span class="transliteration-chirho">{blockChirho.transliterationChirho}</span>
				{/if}

				<!-- Strong's Number -->
				{#if blockChirho.strongsChirho.length > 0}
					<span class="strongs-chirho">{blockChirho.strongsChirho.join(', ')}</span>
				{/if}

				<!-- Translation -->
				<span class="translation-chirho">{getTranslationWordsChirho(blockChirho)}</span>

				<!-- Morphology (optional) -->
				{#if showMorphologyChirho && blockChirho.morphologyChirho}
					<span class="morphology-chirho">{blockChirho.morphologyChirho}</span>
				{/if}

				<!-- Tooltip on hover -->
				{#if hoveredIndexChirho === indexChirho && blockChirho.strongsChirho.length > 0}
					<div class="tooltip-chirho" role="tooltip">
						{#each blockChirho.strongsChirho as strongsChirho}
							{@const detailsChirho = getStrongsDetailsChirho(strongsChirho)}
							{#if detailsChirho}
								<div class="tooltip-entry-chirho">
									<div class="tooltip-header-chirho">
										<strong>{strongsChirho}</strong>
										<span class="greek-word-chirho">{detailsChirho.greekChirho}</span>
										<span class="translit-chirho">({detailsChirho.transliterationChirho})</span>
									</div>
									{#if showLouwNidaChirho}
										<div class="tooltip-domains-chirho">
											{#each detailsChirho.domainsChirho as domainChirho}
												<div class="domain-entry-chirho">
													<span class="domain-number-chirho">{domainChirho.louwNidaNumberChirho}</span>
													<span class="domain-gloss-chirho">{domainChirho.glossChirho}</span>
													<span class="domain-name-chirho">{getDomainInfoChirho(domainChirho.louwNidaNumberChirho)}</span>
												</div>
											{/each}
										</div>
									{/if}
								</div>
							{/if}
						{/each}
					</div>
				{/if}
			</button>
		{/each}
	</div>
</div>

<style>
	.interlinear-container-chirho {
		font-family: var(--font-serif-chirho, Georgia, serif);
		padding: 1rem;
		overflow-x: auto;
	}

	.interlinear-blocks-chirho {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: flex-start;
	}

	.interlinear-block-chirho {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.5rem 0.75rem;
		border-radius: 0.375rem;
		background: var(--bg-block-chirho, #f8f5f0);
		border: 1px solid transparent;
		cursor: pointer;
		position: relative;
		transition: all 0.2s ease;
		min-width: 3rem;
		text-align: center;
		font-family: inherit;
	}

	.interlinear-block-chirho:hover,
	.interlinear-block-chirho.hovered-chirho {
		background: var(--bg-block-hover-chirho, #f0ebe3);
		border-color: var(--border-hover-chirho, #c9a961);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.interlinear-block-chirho.has-strongs-chirho {
		background: var(--bg-strongs-chirho, #faf8f5);
	}

	.original-text-chirho {
		font-size: 1.25rem;
		font-weight: 500;
		color: var(--text-original-chirho, #2c1810);
		line-height: 1.4;
	}

	.original-text-chirho.greek-chirho {
		font-family: 'SBL Greek', 'Gentium Plus', 'Times New Roman', serif;
	}

	.original-text-chirho.hebrew-chirho {
		font-family: 'SBL Hebrew', 'Ezra SIL', 'Times New Roman', serif;
		direction: rtl;
		font-size: 1.4rem;
	}

	.transliteration-chirho {
		font-size: 0.75rem;
		color: var(--text-translit-chirho, #6b5b4f);
		font-style: italic;
		margin-top: 0.125rem;
	}

	.strongs-chirho {
		font-size: 0.625rem;
		color: var(--text-strongs-chirho, #8b7355);
		font-family: var(--font-mono-chirho, monospace);
		margin-top: 0.125rem;
	}

	.translation-chirho {
		font-size: 0.875rem;
		color: var(--text-translation-chirho, #1a1a1a);
		font-weight: 500;
		margin-top: 0.25rem;
		border-top: 1px solid var(--border-translation-chirho, #e0d8c8);
		padding-top: 0.25rem;
		width: 100%;
	}

	.morphology-chirho {
		font-size: 0.5rem;
		color: var(--text-morph-chirho, #999);
		font-family: var(--font-mono-chirho, monospace);
		margin-top: 0.125rem;
	}

	/* Tooltip */
	.tooltip-chirho {
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		background: var(--bg-tooltip-chirho, #2c1810);
		color: var(--text-tooltip-chirho, #f5f0e8);
		padding: 0.75rem 1rem;
		border-radius: 0.5rem;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
		z-index: 100;
		min-width: 200px;
		max-width: 300px;
		margin-bottom: 0.5rem;
		text-align: left;
	}

	.tooltip-chirho::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		border: 8px solid transparent;
		border-top-color: var(--bg-tooltip-chirho, #2c1810);
	}

	.tooltip-entry-chirho {
		margin-bottom: 0.5rem;
	}

	.tooltip-entry-chirho:last-child {
		margin-bottom: 0;
	}

	.tooltip-header-chirho {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-bottom: 0.375rem;
	}

	.tooltip-header-chirho strong {
		color: var(--gold-chirho, #c9a961);
		font-family: var(--font-mono-chirho, monospace);
	}

	.greek-word-chirho {
		font-family: 'SBL Greek', 'Gentium Plus', serif;
		font-size: 1.1rem;
	}

	.translit-chirho {
		font-style: italic;
		opacity: 0.8;
		font-size: 0.85rem;
	}

	.tooltip-domains-chirho {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-size: 0.75rem;
		padding-left: 0.5rem;
		border-left: 2px solid var(--gold-chirho, #c9a961);
	}

	.domain-entry-chirho {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}

	.domain-number-chirho {
		font-family: var(--font-mono-chirho, monospace);
		color: var(--gold-chirho, #c9a961);
		font-weight: 600;
	}

	.domain-gloss-chirho {
		font-weight: 500;
	}

	.domain-name-chirho {
		opacity: 0.7;
		font-size: 0.65rem;
	}

	/* Dark mode */
	@media (prefers-color-scheme: dark) {
		.interlinear-block-chirho {
			background: #2a2520;
		}

		.interlinear-block-chirho:hover,
		.interlinear-block-chirho.hovered-chirho {
			background: #3a3530;
			border-color: #c9a961;
		}

		.original-text-chirho {
			color: #f5f0e8;
		}

		.translation-chirho {
			color: #e0d8c8;
			border-top-color: #4a4540;
		}
	}

	/* Responsive */
	@media (max-width: 640px) {
		.interlinear-block-chirho {
			padding: 0.375rem 0.5rem;
			min-width: 2.5rem;
		}

		.original-text-chirho {
			font-size: 1.1rem;
		}

		.translation-chirho {
			font-size: 0.75rem;
		}

		.tooltip-chirho {
			min-width: 160px;
			max-width: 250px;
			font-size: 0.85rem;
		}
	}
</style>
