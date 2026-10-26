# Bible.Systems

> *"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."* — John 3:16 (KJV)

Source for [bible.systems](https://bible.systems): free, open-source Bible study tools. The site links the interlinear readers and PDF Bibles published at [global-tools.bible.systems](https://global-tools.bible.systems), and hosts a KJV reader, Treasury of Scripture Knowledge cross-references, pages for our AI models, and a feedback form.

## Stack

SvelteKit 2 and Svelte 5 on Cloudflare Workers (`@sveltejs/adapter-cloudflare`), Tailwind CSS 4, and Cloudflare D1 for feedback, the catalog, sharded Bible resources and app data. Bun runs the scripts and manages packages.

## Develop

```sh
bun install
cp .env.example .env   # add a Turnstile secret for the feedback form
bun run dev
```

## Check and test

```sh
bun run check            # svelte-check
bun run test-chirho      # unit tests (Vitest)
bun run test-e2e-chirho  # end-to-end tests (Playwright)
```

## Deploy

`bun run deploy-chirho` runs the unit tests, builds, and deploys with Wrangler (Cloudflare credentials required). Routes live in `wrangler.toml`: `bible.systems` is a custom domain, and `www.bible.systems` redirects to it.

## Naming

Identifiers we create carry a Chirho suffix (`userTotalChirho`, `READER_LANGUAGE_COUNT_CHIRHO`, `/read-chirho` routes). See `AGENTS.md`.

## License

MIT; see [LICENSE](LICENSE). Bible texts and data keep their own licenses: the KJV and the Treasury of Scripture Knowledge are public domain.
