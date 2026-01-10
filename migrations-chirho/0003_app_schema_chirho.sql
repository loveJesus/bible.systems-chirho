-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life. — John 3:16

-- App Database Schema (app-chirho)
-- This migration creates application-level tables for user data, sessions, etc.

-- User Accounts (future, when auth is implemented)
CREATE TABLE IF NOT EXISTS users_chirho (
    user_id_chirho TEXT PRIMARY KEY,
    email_chirho TEXT UNIQUE,
    display_name_chirho TEXT,
    avatar_url_chirho TEXT,
    auth_provider_chirho TEXT NOT NULL DEFAULT 'passkey' CHECK (auth_provider_chirho IN ('passkey', 'google', 'apple', 'email')),
    is_verified_chirho INTEGER NOT NULL DEFAULT 0,
    is_admin_chirho INTEGER NOT NULL DEFAULT 0,
    preferences_chirho TEXT, -- JSON blob
    created_at_chirho INTEGER,
    updated_at_chirho INTEGER,
    last_login_chirho INTEGER
);

CREATE INDEX IF NOT EXISTS idx_user_email_chirho ON users_chirho(email_chirho);

-- User Sessions
CREATE TABLE IF NOT EXISTS sessions_chirho (
    session_id_chirho TEXT PRIMARY KEY,
    user_id_chirho TEXT REFERENCES users_chirho(user_id_chirho),
    token_hash_chirho TEXT NOT NULL,
    user_agent_chirho TEXT,
    ip_address_chirho TEXT,
    created_at_chirho INTEGER,
    expires_at_chirho INTEGER,
    last_active_chirho INTEGER
);

CREATE INDEX IF NOT EXISTS idx_session_user_chirho ON sessions_chirho(user_id_chirho);
CREATE INDEX IF NOT EXISTS idx_session_expires_chirho ON sessions_chirho(expires_at_chirho);

-- User Bookmarks
CREATE TABLE IF NOT EXISTS bookmarks_chirho (
    bookmark_id_chirho TEXT PRIMARY KEY,
    user_id_chirho TEXT NOT NULL REFERENCES users_chirho(user_id_chirho),
    verse_ref_chirho TEXT NOT NULL, -- e.g., "kjv:jhn:3:16"
    title_chirho TEXT,
    notes_chirho TEXT,
    color_chirho TEXT DEFAULT '#ffd700',
    folder_chirho TEXT,
    created_at_chirho INTEGER
);

CREATE INDEX IF NOT EXISTS idx_bookmark_user_chirho ON bookmarks_chirho(user_id_chirho);
CREATE INDEX IF NOT EXISTS idx_bookmark_verse_chirho ON bookmarks_chirho(verse_ref_chirho);

-- User Notes
CREATE TABLE IF NOT EXISTS notes_chirho (
    note_id_chirho TEXT PRIMARY KEY,
    user_id_chirho TEXT NOT NULL REFERENCES users_chirho(user_id_chirho),
    verse_ref_chirho TEXT, -- Optional verse reference
    title_chirho TEXT,
    content_chirho TEXT NOT NULL,
    tags_chirho TEXT, -- Comma-separated
    is_sermon_chirho INTEGER DEFAULT 0,
    sermon_date_chirho TEXT,
    created_at_chirho INTEGER,
    updated_at_chirho INTEGER
);

CREATE INDEX IF NOT EXISTS idx_note_user_chirho ON notes_chirho(user_id_chirho);
CREATE INDEX IF NOT EXISTS idx_note_verse_chirho ON notes_chirho(verse_ref_chirho);

-- Reading Plans
CREATE TABLE IF NOT EXISTS reading_plans_chirho (
    plan_id_chirho TEXT PRIMARY KEY,
    name_chirho TEXT NOT NULL,
    description_chirho TEXT,
    duration_days_chirho INTEGER NOT NULL,
    schedule_chirho TEXT NOT NULL, -- JSON array of daily readings
    is_public_chirho INTEGER DEFAULT 1,
    author_id_chirho TEXT REFERENCES users_chirho(user_id_chirho),
    created_at_chirho INTEGER
);

-- User Reading Progress
CREATE TABLE IF NOT EXISTS reading_progress_chirho (
    progress_id_chirho TEXT PRIMARY KEY,
    user_id_chirho TEXT NOT NULL REFERENCES users_chirho(user_id_chirho),
    plan_id_chirho TEXT NOT NULL REFERENCES reading_plans_chirho(plan_id_chirho),
    start_date_chirho TEXT NOT NULL,
    current_day_chirho INTEGER DEFAULT 1,
    completed_days_chirho TEXT, -- Comma-separated list of completed day numbers
    is_complete_chirho INTEGER DEFAULT 0,
    created_at_chirho INTEGER,
    updated_at_chirho INTEGER
);

CREATE INDEX IF NOT EXISTS idx_progress_user_chirho ON reading_progress_chirho(user_id_chirho);

-- Feedback (existing, moved from KV to D1 for better querying)
-- Note: This complements the existing feedback-db-chirho
CREATE TABLE IF NOT EXISTS app_feedback_chirho (
    feedback_id_chirho TEXT PRIMARY KEY,
    type_chirho TEXT NOT NULL CHECK (type_chirho IN ('bug', 'feature', 'general', 'testimonial')),
    message_chirho TEXT NOT NULL,
    email_chirho TEXT,
    page_url_chirho TEXT,
    user_agent_chirho TEXT,
    user_id_chirho TEXT REFERENCES users_chirho(user_id_chirho),
    status_chirho TEXT DEFAULT 'pending' CHECK (status_chirho IN ('pending', 'reviewed', 'resolved', 'archived')),
    admin_notes_chirho TEXT,
    is_featured_chirho INTEGER DEFAULT 0, -- For testimonials
    created_at_chirho INTEGER,
    updated_at_chirho INTEGER
);

CREATE INDEX IF NOT EXISTS idx_feedback_type_chirho ON app_feedback_chirho(type_chirho);
CREATE INDEX IF NOT EXISTS idx_feedback_status_chirho ON app_feedback_chirho(status_chirho);

-- Feature Votes (for feature request prioritization)
CREATE TABLE IF NOT EXISTS feature_votes_chirho (
    vote_id_chirho TEXT PRIMARY KEY,
    feedback_id_chirho TEXT NOT NULL REFERENCES app_feedback_chirho(feedback_id_chirho),
    user_id_chirho TEXT REFERENCES users_chirho(user_id_chirho),
    ip_hash_chirho TEXT, -- For anonymous voting
    created_at_chirho INTEGER
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_vote_unique_chirho ON feature_votes_chirho(feedback_id_chirho, COALESCE(user_id_chirho, ip_hash_chirho));

-- JESUS CHRIST IS LORD
