import { SkelonNode } from './types';

/**
 * Stage 2: Geometry Mapping
 * Calculates spatial relationships, bounding boxes, and alignment data.
 */
export function mapGeometry(node: SkelonNode): SkelonNode {
    // In a robust implementation, this would compute spacing patterns,
    // relative positioning, and flex alignment gaps.
    // For now, we ensure basic normalization of coordinates.
    const normalizedNode: SkelonNode = {
        ...node,
        x: Math.max(0, node.x),
        y: Math.max(0, node.y),
        width: Math.max(0, node.width),
        height: Math.max(0, node.height),
        children: node.children.map(mapGeometry),
    };

    return normalizedNode;
}
