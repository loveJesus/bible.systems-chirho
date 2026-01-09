// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

/**
 * D1 Catalog Database Schema
 *
 * This is the central catalog that tracks:
 * - Which resources are stored where (shard allocation)
 * - Available shards and their status
 * - Resource metadata for discovery
 */

import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

// ============================================================================
// SHARD REGISTRY
// ============================================================================

/**
 * Tracks all available D1 database shards
 */
export const shardsChirho = sqliteTable('shards_chirho', {
	shardIndexChirho: integer('shard_index_chirho').primaryKey(),
	databaseNameChirho: text('database_name_chirho').notNull(),
	bindingNameChirho: text('binding_name_chirho').notNull(),
	statusChirho: text('status_chirho', { enum: ['active', 'full', 'maintenance'] })
		.notNull()
		.default('active'),
	currentSizeChirho: integer('current_size_chirho').notNull().default(0), // bytes
	maxSizeChirho: integer('max_size_chirho').notNull().default(8589934592), // 8GB default
	createdAtChirho: integer('created_at_chirho', { mode: 'timestamp' }).$defaultFn(() => new Date()),
	updatedAtChirho: integer('updated_at_chirho', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

// ============================================================================
// RESOURCE LOCATIONS
// ============================================================================

/**
 * Maps resources to their storage shards
 */
export const resourceLocationsChirho = sqliteTable('resource_locations_chirho', {
	resourceIdChirho: text('resource_id_chirho').primaryKey(), // "kjv", "tsk", "mhenry:gen"
	shardIndexChirho: integer('shard_index_chirho')
		.notNull()
		.references(() => shardsChirho.shardIndexChirho),
	resourceTypeChirho: text('resource_type_chirho', {
		enum: ['bible', 'crossref', 'commentary', 'lexicon', 'morphology', 'devotional'],
	}).notNull(),
	sizeEstimateChirho: integer('size_estimate_chirho').notNull(), // bytes
	createdAtChirho: integer('created_at_chirho', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

// ============================================================================
// RESOURCE METADATA (Discovery)
// ============================================================================

/**
 * Resource metadata for browsing and discovery
 */
export const resourcesChirho = sqliteTable('resources_chirho', {
	resourceIdChirho: text('resource_id_chirho').primaryKey(),
	nameChirho: text('name_chirho').notNull(),
	descriptionChirho: text('description_chirho'),
	resourceTypeChirho: text('resource_type_chirho').notNull(),
	languageCodeChirho: text('language_code_chirho'), // ISO 639-1
	versionChirho: text('version_chirho'),
	licenseChirho: text('license_chirho', {
		enum: ['public_domain', 'cc_by', 'cc_by_sa', 'cc_by_nc', 'freemium', 'subscription', 'per_use'],
	})
		.notNull()
		.default('public_domain'),
	publisherIdChirho: text('publisher_id_chirho'),
	hasStrongsChirho: integer('has_strongs_chirho', { mode: 'boolean' }).default(false),
	hasMorphologyChirho: integer('has_morphology_chirho', { mode: 'boolean' }).default(false),
	bookCountChirho: integer('book_count_chirho'),
	verseCountChirho: integer('verse_count_chirho'),
	wordCountChirho: integer('word_count_chirho'),
	createdAtChirho: integer('created_at_chirho', { mode: 'timestamp' }).$defaultFn(() => new Date()),
	updatedAtChirho: integer('updated_at_chirho', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

// ============================================================================
// PUBLISHER REGISTRY
// ============================================================================

/**
 * Publishers who provide resources
 */
export const publishersChirho = sqliteTable('publishers_chirho', {
	publisherIdChirho: text('publisher_id_chirho').primaryKey(),
	nameChirho: text('name_chirho').notNull(),
	emailChirho: text('email_chirho'),
	websiteChirho: text('website_chirho'),
	stripeAccountIdChirho: text('stripe_account_id_chirho'), // For Stripe Connect
	revenueSplitChirho: real('revenue_split_chirho').default(0.7), // Publisher's share (70%)
	statusChirho: text('status_chirho', { enum: ['pending', 'active', 'suspended'] })
		.notNull()
		.default('pending'),
	createdAtChirho: integer('created_at_chirho', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

// ============================================================================
// TYPES
// ============================================================================

export type ShardChirho = typeof shardsChirho.$inferSelect;
export type NewShardChirho = typeof shardsChirho.$inferInsert;

export type ResourceLocationChirho = typeof resourceLocationsChirho.$inferSelect;
export type NewResourceLocationChirho = typeof resourceLocationsChirho.$inferInsert;

export type ResourceChirho = typeof resourcesChirho.$inferSelect;
export type NewResourceChirho = typeof resourcesChirho.$inferInsert;

export type PublisherChirho = typeof publishersChirho.$inferSelect;
export type NewPublisherChirho = typeof publishersChirho.$inferInsert;
