-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life. — John 3:16

-- Catalog Database Schema (catalog-chirho)
-- This migration creates the central catalog for shard management

-- Shard Registry
CREATE TABLE IF NOT EXISTS shards_chirho (
    shard_index_chirho INTEGER PRIMARY KEY,
    database_name_chirho TEXT NOT NULL,
    binding_name_chirho TEXT NOT NULL,
    status_chirho TEXT NOT NULL DEFAULT 'active' CHECK (status_chirho IN ('active', 'full', 'maintenance')),
    current_size_chirho INTEGER NOT NULL DEFAULT 0,
    max_size_chirho INTEGER NOT NULL DEFAULT 8589934592,
    created_at_chirho INTEGER,
    updated_at_chirho INTEGER
);

-- Resource Locations (which shard has what)
CREATE TABLE IF NOT EXISTS resource_locations_chirho (
    resource_id_chirho TEXT PRIMARY KEY,
    shard_index_chirho INTEGER NOT NULL REFERENCES shards_chirho(shard_index_chirho),
    resource_type_chirho TEXT NOT NULL CHECK (resource_type_chirho IN ('bible', 'crossref', 'commentary', 'lexicon', 'morphology', 'devotional')),
    size_estimate_chirho INTEGER NOT NULL,
    created_at_chirho INTEGER
);

-- Resource Metadata
CREATE TABLE IF NOT EXISTS resources_chirho (
    resource_id_chirho TEXT PRIMARY KEY,
    name_chirho TEXT NOT NULL,
    description_chirho TEXT,
    resource_type_chirho TEXT NOT NULL,
    language_code_chirho TEXT,
    version_chirho TEXT,
    license_chirho TEXT NOT NULL DEFAULT 'public_domain' CHECK (license_chirho IN ('public_domain', 'cc_by', 'cc_by_sa', 'cc_by_nc', 'freemium', 'subscription', 'per_use')),
    publisher_id_chirho TEXT,
    has_strongs_chirho INTEGER DEFAULT 0,
    has_morphology_chirho INTEGER DEFAULT 0,
    book_count_chirho INTEGER,
    verse_count_chirho INTEGER,
    word_count_chirho INTEGER,
    created_at_chirho INTEGER,
    updated_at_chirho INTEGER
);

-- Publisher Registry
CREATE TABLE IF NOT EXISTS publishers_chirho (
    publisher_id_chirho TEXT PRIMARY KEY,
    name_chirho TEXT NOT NULL,
    email_chirho TEXT,
    website_chirho TEXT,
    stripe_account_id_chirho TEXT,
    revenue_split_chirho REAL DEFAULT 0.7,
    status_chirho TEXT NOT NULL DEFAULT 'pending' CHECK (status_chirho IN ('pending', 'active', 'suspended')),
    created_at_chirho INTEGER
);

-- Initial shard registry (16 shards)
INSERT OR IGNORE INTO shards_chirho (shard_index_chirho, database_name_chirho, binding_name_chirho, status_chirho, created_at_chirho) VALUES
    (0, 'bible-res-00-chirho', 'RES_00_CHIRHO', 'active', unixepoch()),
    (1, 'bible-res-01-chirho', 'RES_01_CHIRHO', 'active', unixepoch()),
    (2, 'bible-res-02-chirho', 'RES_02_CHIRHO', 'active', unixepoch()),
    (3, 'bible-res-03-chirho', 'RES_03_CHIRHO', 'active', unixepoch()),
    (4, 'bible-res-04-chirho', 'RES_04_CHIRHO', 'active', unixepoch()),
    (5, 'bible-res-05-chirho', 'RES_05_CHIRHO', 'active', unixepoch()),
    (6, 'bible-res-06-chirho', 'RES_06_CHIRHO', 'active', unixepoch()),
    (7, 'bible-res-07-chirho', 'RES_07_CHIRHO', 'active', unixepoch()),
    (8, 'bible-res-08-chirho', 'RES_08_CHIRHO', 'active', unixepoch()),
    (9, 'bible-res-09-chirho', 'RES_09_CHIRHO', 'active', unixepoch()),
    (10, 'bible-res-0a-chirho', 'RES_0A_CHIRHO', 'active', unixepoch()),
    (11, 'bible-res-0b-chirho', 'RES_0B_CHIRHO', 'active', unixepoch()),
    (12, 'bible-res-0c-chirho', 'RES_0C_CHIRHO', 'active', unixepoch()),
    (13, 'bible-res-0d-chirho', 'RES_0D_CHIRHO', 'active', unixepoch()),
    (14, 'bible-res-0e-chirho', 'RES_0E_CHIRHO', 'active', unixepoch()),
    (15, 'bible-res-0f-chirho', 'RES_0F_CHIRHO', 'active', unixepoch());

-- JESUS CHRIST IS LORD
