import { SkelonNode, SkeletonNode } from './types';
import { mapGeometry } from './geometry';
import { clusterLayout } from './clustering';
import { synthesizeSkeleton } from './synthesis';

// Stage 10: Performance Optimization - Memoization Cache
const skeletonCache = new Map<string, SkeletonNode>();

/**
 * Stage 8: Adaptive Learning Heuristics
 * Allows passing an optional ruleset or manual overrides.
 */
export interface GenerateOptions {
    cacheKey?: string;
    forceRegenerate?: boolean;
    overrides?: Record<string, 'circle' | 'rounded-rect' | 'text-lines' | 'image' | 'group'>;
}

/**
 * Primary entry point for the Skelon Layout Engine pipeline.
 * Runs all layout analysis stages to produce a final Skeleton Tree.
 */
export function generateSkeletonTree(rootNode: SkelonNode, options: GenerateOptions = {}): SkeletonNode {
    // Check cache
    if (options.cacheKey && !options.forceRegenerate && skeletonCache.has(options.cacheKey)) {
        return skeletonCache.get(options.cacheKey)!;
    }

    // Stage 2: Geometry Mapping
    const mappedTree = mapGeometry(rootNode);

    // Stage 4: Layout Clustering
    const clusteredTree = clusterLayout(mappedTree);

    // Stages 3, 5, 6: Classification, Shape Inference, and Synthesis
    const finalSkeleton = synthesizeSkeleton(clusteredTree);

    // Apply Stage 8 overrides if present
    if (options.overrides) {
        applyOverrides(finalSkeleton, options.overrides);
    }

    // Save to cache
    if (options.cacheKey) {
        skeletonCache.set(options.cacheKey, finalSkeleton);
    }

    return finalSkeleton;
}

function applyOverrides(node: SkeletonNode, overrides: Record<string, any>) {
    if (overrides[node.id]) {
        node.shape = overrides[node.id];
    }
    node.children.forEach(child => applyOverrides(child, overrides));
}
