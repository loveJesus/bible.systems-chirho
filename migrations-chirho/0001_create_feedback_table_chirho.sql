-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life. — John 3:16

-- Create feedback table for Bible.Systems
-- Migration: 0001_create_feedback_table_chirho

CREATE TABLE IF NOT EXISTS feedback_chirho (
    id_chirho TEXT PRIMARY KEY,
    type_chirho TEXT NOT NULL CHECK (type_chirho IN ('bug', 'feature', 'general')),
    message_chirho TEXT NOT NULL,
    email_chirho TEXT,
    rating_chirho INTEGER CHECK (rating_chirho IS NULL OR (rating_chirho >= 1 AND rating_chirho <= 5)),
    page_url_chirho TEXT,
    user_agent_chirho TEXT,
    ip_address_chirho TEXT,
    created_at_chirho TEXT NOT NULL DEFAULT (datetime('now')),
    resolved_chirho INTEGER NOT NULL DEFAULT 0,
    resolved_at_chirho TEXT,
    notes_chirho TEXT
);

-- Index for efficient queries
CREATE INDEX IF NOT EXISTS idx_feedback_type_chirho ON feedback_chirho(type_chirho);
CREATE INDEX IF NOT EXISTS idx_feedback_created_chirho ON feedback_chirho(created_at_chirho);
CREATE INDEX IF NOT EXISTS idx_feedback_resolved_chirho ON feedback_chirho(resolved_chirho);

-- JESUS CHRIST IS LORD
