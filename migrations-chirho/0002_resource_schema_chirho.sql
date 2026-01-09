-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life. — John 3:16

-- Resource Shard Database Schema (bible-res-XX-chirho)
-- Apply this migration to each resource shard

-- Bible Verses
CREATE TABLE IF NOT EXISTS verses_chirho (
    id_chirho TEXT PRIMARY KEY,
    version_id_chirho TEXT NOT NULL,
    book_id_chirho TEXT NOT NULL,
    chapter_chirho INTEGER NOT NULL,
    verse_chirho INTEGER NOT NULL,
    text_chirho TEXT NOT NULL,
    text_original_chirho TEXT,
    word_count_chirho INTEGER
);

CREATE INDEX IF NOT EXISTS idx_verse_version_chirho ON verses_chirho(version_id_chirho);
CREATE INDEX IF NOT EXISTS idx_verse_book_chirho ON verses_chirho(book_id_chirho);
CREATE INDEX IF NOT EXISTS idx_verse_ref_chirho ON verses_chirho(version_id_chirho, book_id_chirho, chapter_chirho);

-- Word Instances (word-level data)
CREATE TABLE IF NOT EXISTS word_instances_chirho (
    id_chirho TEXT PRIMARY KEY,
    verse_id_chirho TEXT NOT NULL REFERENCES verses_chirho(id_chirho),
    position_chirho INTEGER NOT NULL,
    text_chirho TEXT NOT NULL,
    lemma_chirho TEXT,
    original_text_chirho TEXT,
    transliteration_chirho TEXT,
    strongs_chirho TEXT,
    morphology_chirho TEXT,
    louw_nida_chirho TEXT
);

CREATE INDEX IF NOT EXISTS idx_word_verse_chirho ON word_instances_chirho(verse_id_chirho);
CREATE INDEX IF NOT EXISTS idx_word_strongs_chirho ON word_instances_chirho(strongs_chirho);
CREATE INDEX IF NOT EXISTS idx_word_lemma_chirho ON word_instances_chirho(lemma_chirho);

-- Cross-References
CREATE TABLE IF NOT EXISTS cross_references_chirho (
    id_chirho TEXT PRIMARY KEY,
    from_verse_chirho TEXT NOT NULL,
    to_verse_chirho TEXT NOT NULL,
    source_chirho TEXT NOT NULL CHECK (source_chirho IN ('tsk', 'scripture_quotation', 'allusion', 'parallel', 'typology', 'commentary', 'user')),
    type_chirho TEXT CHECK (type_chirho IN ('direct_quote', 'allusion', 'parallel', 'thematic', 'typological', 'contrast')),
    confidence_chirho REAL DEFAULT 1.0,
    attribution_chirho TEXT
);

CREATE INDEX IF NOT EXISTS idx_xref_from_chirho ON cross_references_chirho(from_verse_chirho);
CREATE INDEX IF NOT EXISTS idx_xref_to_chirho ON cross_references_chirho(to_verse_chirho);

-- Lexicon Entries
CREATE TABLE IF NOT EXISTS lexicon_entries_chirho (
    id_chirho TEXT PRIMARY KEY,
    lexicon_id_chirho TEXT NOT NULL,
    entry_key_chirho TEXT NOT NULL,
    original_word_chirho TEXT,
    transliteration_chirho TEXT,
    pronunciation_chirho TEXT,
    short_def_chirho TEXT,
    full_def_chirho TEXT,
    etymology_chirho TEXT,
    language_chirho TEXT CHECK (language_chirho IN ('greek', 'hebrew', 'aramaic')),
    louw_nida_domains_chirho TEXT,
    related_entries_chirho TEXT
);

CREATE INDEX IF NOT EXISTS idx_lex_key_chirho ON lexicon_entries_chirho(entry_key_chirho);
CREATE INDEX IF NOT EXISTS idx_lex_lexicon_chirho ON lexicon_entries_chirho(lexicon_id_chirho);

-- Commentary Sections
CREATE TABLE IF NOT EXISTS commentary_sections_chirho (
    id_chirho TEXT PRIMARY KEY,
    commentary_id_chirho TEXT NOT NULL,
    book_id_chirho TEXT NOT NULL,
    chapter_chirho INTEGER NOT NULL,
    verse_start_chirho INTEGER,
    verse_end_chirho INTEGER,
    content_chirho TEXT NOT NULL,
    author_chirho TEXT
);

CREATE INDEX IF NOT EXISTS idx_comm_ref_chirho ON commentary_sections_chirho(commentary_id_chirho, book_id_chirho, chapter_chirho);

-- Louw-Nida Domains
CREATE TABLE IF NOT EXISTS louw_nida_domains_chirho (
    domain_id_chirho TEXT PRIMARY KEY,
    name_chirho TEXT NOT NULL,
    category_chirho TEXT,
    description_chirho TEXT
);

-- Strong's to Louw-Nida Mappings
CREATE TABLE IF NOT EXISTS strongs_louw_nida_chirho (
    id_chirho TEXT PRIMARY KEY,
    strongs_chirho TEXT NOT NULL,
    louw_nida_number_chirho TEXT NOT NULL,
    domain_id_chirho TEXT NOT NULL REFERENCES louw_nida_domains_chirho(domain_id_chirho),
    gloss_chirho TEXT NOT NULL,
    definition_chirho TEXT
);

CREATE INDEX IF NOT EXISTS idx_sln_strongs_chirho ON strongs_louw_nida_chirho(strongs_chirho);
CREATE INDEX IF NOT EXISTS idx_sln_domain_chirho ON strongs_louw_nida_chirho(domain_id_chirho);

-- JESUS CHRIST IS LORD
