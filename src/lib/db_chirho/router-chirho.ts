// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

/**
 * Database Shard Router for Bible.Systems
 *
 * Implements dynamic D1 sharding with:
 * - Catalog database for shard registry and resource locations
 * - 16 initial resource shards (expandable)
 * - Least-full allocation strategy for new resources
 */

import type { D1Database } from '@cloudflare/workers-types';

// Environment bindings for D1 databases
export interface EnvBindingsChirho {
	CATALOG_DB_CHIRHO: D1Database;
	FEEDBACK_DB_CHIRHO: D1Database;
	RES_00_CHIRHO: D1Database;
	RES_01_CHIRHO: D1Database;
	RES_02_CHIRHO: D1Database;
	RES_03_CHIRHO: D1Database;
	RES_04_CHIRHO: D1Database;
	RES_05_CHIRHO: D1Database;
	RES_06_CHIRHO: D1Database;
	RES_07_CHIRHO: D1Database;
	RES_08_CHIRHO: D1Database;
	RES_09_CHIRHO: D1Database;
	RES_0A_CHIRHO: D1Database;
	RES_0B_CHIRHO: D1Database;
	RES_0C_CHIRHO: D1Database;
	RES_0D_CHIRHO: D1Database;
	RES_0E_CHIRHO: D1Database;
	RES_0F_CHIRHO: D1Database;
	[key: string]: D1Database | undefined;
}

// Shard information from catalog
export interface ShardInfoChirho {
	shardIndexChirho: number;
	databaseNameChirho: string;
	bindingNameChirho: string;
	statusChirho: 'active' | 'full' | 'maintenance';
	currentSizeChirho: number;
	maxSizeChirho: number;
}

// Resource location from catalog
export interface ResourceLocationChirho {
	resourceIdChirho: string;
	shardIndexChirho: number;
	resourceTypeChirho: string;
	sizeEstimateChirho: number;
}

// Resource types we support
export type ResourceTypeChirho =
	| 'bible'
	| 'crossref'
	| 'commentary'
	| 'lexicon'
	| 'morphology'
	| 'devotional';

// Maximum shard size before considering it full (8GB with 2GB buffer)
const MAX_SHARD_SIZE_CHIRHO = 8 * 1024 * 1024 * 1024; // 8GB

/**
 * Get all active shards from the catalog
 */
export async function getActiveShardsChirho(
	catalogDbChirho: D1Database
): Promise<ShardInfoChirho[]> {
	const resultChirho = await catalogDbChirho
		.prepare(
			`
			SELECT
				shard_index_chirho,
				database_name_chirho,
				binding_name_chirho,
				status_chirho,
				current_size_chirho,
				max_size_chirho
			FROM shards_chirho
			WHERE status_chirho = 'active'
			ORDER BY shard_index_chirho
		`
		)
		.all();

	return (resultChirho.results as Record<string, unknown>[]).map((rowChirho) => ({
		shardIndexChirho: rowChirho.shard_index_chirho as number,
		databaseNameChirho: rowChirho.database_name_chirho as string,
		bindingNameChirho: rowChirho.binding_name_chirho as string,
		statusChirho: rowChirho.status_chirho as 'active' | 'full' | 'maintenance',
		currentSizeChirho: rowChirho.current_size_chirho as number,
		maxSizeChirho: rowChirho.max_size_chirho as number
	}));
}

/**
 * Get the shard index for a resource from the catalog
 */
export async function getResourceShardChirho(
	catalogDbChirho: D1Database,
	resourceIdChirho: string
): Promise<number | null> {
	const resultChirho = await catalogDbChirho
		.prepare(
			`
			SELECT shard_index_chirho
			FROM resource_locations_chirho
			WHERE resource_id_chirho = ?
		`
		)
		.bind(resourceIdChirho)
		.first();

	if (!resultChirho) {
		return null;
	}

	return resultChirho.shard_index_chirho as number;
}

/**
 * Get the D1 database binding for a resource
 */
export async function getResourceDbChirho(
	envChirho: EnvBindingsChirho,
	resourceIdChirho: string
): Promise<D1Database | null> {
	const shardIndexChirho = await getResourceShardChirho(envChirho.CATALOG_DB_CHIRHO, resourceIdChirho);

	if (shardIndexChirho === null) {
		return null;
	}

	return getShardDbChirho(envChirho, shardIndexChirho);
}

/**
 * Get the D1 database binding for a shard index
 */
export function getShardDbChirho(envChirho: EnvBindingsChirho, shardIndexChirho: number): D1Database {
	const bindingNameChirho = `RES_${shardIndexChirho.toString(16).toUpperCase().padStart(2, '0')}_CHIRHO`;
	const dbChirho = envChirho[bindingNameChirho];

	if (!dbChirho) {
		throw new Error(`Shard ${shardIndexChirho} (${bindingNameChirho}) not found in environment bindings`);
	}

	return dbChirho;
}

/**
 * Find the least-full shard that can accommodate a new resource
 */
export async function findLeastFullShardChirho(
	catalogDbChirho: D1Database,
	estimatedSizeChirho: number
): Promise<number> {
	// Get current shard sizes
	const resultChirho = await catalogDbChirho
		.prepare(
			`
			SELECT
				s.shard_index_chirho,
				s.current_size_chirho,
				s.max_size_chirho,
				COALESCE(SUM(rl.size_estimate_chirho), 0) as allocated_size_chirho
			FROM shards_chirho s
			LEFT JOIN resource_locations_chirho rl ON s.shard_index_chirho = rl.shard_index_chirho
			WHERE s.status_chirho = 'active'
			GROUP BY s.shard_index_chirho
			ORDER BY allocated_size_chirho ASC
		`
		)
		.all();

	const shardsChirho = resultChirho.results as Record<string, unknown>[];

	// Find first shard that can fit the resource
	for (const shardChirho of shardsChirho) {
		const allocatedSizeChirho = shardChirho.allocated_size_chirho as number;
		if (allocatedSizeChirho + estimatedSizeChirho < MAX_SHARD_SIZE_CHIRHO) {
			return shardChirho.shard_index_chirho as number;
		}
	}

	// If all shards are near capacity, return the least full one anyway
	// (admin should add more shards)
	if (shardsChirho.length > 0) {
		return shardsChirho[0].shard_index_chirho as number;
	}

	// Default to shard 0 if no shards found (shouldn't happen)
	return 0;
}

/**
 * Allocate a new resource to a shard
 */
export async function allocateResourceChirho(
	catalogDbChirho: D1Database,
	resourceIdChirho: string,
	resourceTypeChirho: ResourceTypeChirho,
	estimatedSizeChirho: number
): Promise<number> {
	// Find the best shard for this resource
	const targetShardChirho = await findLeastFullShardChirho(catalogDbChirho, estimatedSizeChirho);

	// Record the location in the catalog
	await catalogDbChirho
		.prepare(
			`
			INSERT INTO resource_locations_chirho (
				resource_id_chirho,
				shard_index_chirho,
				resource_type_chirho,
				size_estimate_chirho,
				created_at_chirho
			) VALUES (?, ?, ?, ?, unixepoch())
		`
		)
		.bind(resourceIdChirho, targetShardChirho, resourceTypeChirho, estimatedSizeChirho)
		.run();

	return targetShardChirho;
}

/**
 * Register a new resource in the catalog
 */
export async function registerResourceChirho(
	catalogDbChirho: D1Database,
	resourceIdChirho: string,
	nameChirho: string,
	resourceTypeChirho: ResourceTypeChirho,
	optionsChirho?: {
		descriptionChirho?: string;
		languageCodeChirho?: string;
		versionChirho?: string;
		licenseChirho?: string;
		publisherIdChirho?: string;
		hasStrongsChirho?: boolean;
		hasMorphologyChirho?: boolean;
		bookCountChirho?: number;
		verseCountChirho?: number;
		wordCountChirho?: number;
	}
): Promise<void> {
	const optsChirho = optionsChirho || {};

	await catalogDbChirho
		.prepare(
			`
			INSERT INTO resources_chirho (
				resource_id_chirho,
				name_chirho,
				description_chirho,
				resource_type_chirho,
				language_code_chirho,
				version_chirho,
				license_chirho,
				publisher_id_chirho,
				has_strongs_chirho,
				has_morphology_chirho,
				book_count_chirho,
				verse_count_chirho,
				word_count_chirho,
				created_at_chirho,
				updated_at_chirho
			) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, unixepoch(), unixepoch())
		`
		)
		.bind(
			resourceIdChirho,
			nameChirho,
			optsChirho.descriptionChirho || null,
			resourceTypeChirho,
			optsChirho.languageCodeChirho || null,
			optsChirho.versionChirho || null,
			optsChirho.licenseChirho || 'public_domain',
			optsChirho.publisherIdChirho || null,
			optsChirho.hasStrongsChirho ? 1 : 0,
			optsChirho.hasMorphologyChirho ? 1 : 0,
			optsChirho.bookCountChirho || null,
			optsChirho.verseCountChirho || null,
			optsChirho.wordCountChirho || null
		)
		.run();
}

/**
 * Get resource metadata from catalog
 */
export async function getResourceMetadataChirho(
	catalogDbChirho: D1Database,
	resourceIdChirho: string
): Promise<Record<string, unknown> | null> {
	return await catalogDbChirho
		.prepare(
			`
			SELECT *
			FROM resources_chirho
			WHERE resource_id_chirho = ?
		`
		)
		.bind(resourceIdChirho)
		.first();
}

/**
 * List all resources of a type
 */
export async function listResourcesChirho(
	catalogDbChirho: D1Database,
	resourceTypeChirho?: ResourceTypeChirho
): Promise<Record<string, unknown>[]> {
	let queryChirho = 'SELECT * FROM resources_chirho';
	const paramsChirho: string[] = [];

	if (resourceTypeChirho) {
		queryChirho += ' WHERE resource_type_chirho = ?';
		paramsChirho.push(resourceTypeChirho);
	}

	queryChirho += ' ORDER BY name_chirho';

	const stmtChirho = catalogDbChirho.prepare(queryChirho);
	const resultChirho = paramsChirho.length > 0 ? await stmtChirho.bind(...paramsChirho).all() : await stmtChirho.all();

	return resultChirho.results as Record<string, unknown>[];
}

/**
 * Update shard size estimate
 */
export async function updateShardSizeChirho(
	catalogDbChirho: D1Database,
	shardIndexChirho: number,
	newSizeChirho: number
): Promise<void> {
	await catalogDbChirho
		.prepare(
			`
			UPDATE shards_chirho
			SET current_size_chirho = ?, updated_at_chirho = unixepoch()
			WHERE shard_index_chirho = ?
		`
		)
		.bind(newSizeChirho, shardIndexChirho)
		.run();
}

// JESUS CHRIST IS LORD
