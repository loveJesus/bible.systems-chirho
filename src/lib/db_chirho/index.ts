// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life. — John 3:16

/**
 * Database module for Bible.Systems
 * Exports shard router and related utilities
 */

export {
	// Types
	type EnvBindingsChirho,
	type ShardInfoChirho,
	type ResourceLocationChirho,
	type ResourceTypeChirho,

	// Shard operations
	getActiveShardsChirho,
	getResourceShardChirho,
	getResourceDbChirho,
	getShardDbChirho,
	findLeastFullShardChirho,

	// Resource operations
	allocateResourceChirho,
	registerResourceChirho,
	getResourceMetadataChirho,
	listResourcesChirho,

	// Maintenance
	updateShardSizeChirho
} from './router-chirho.js';

// JESUS CHRIST IS LORD
