import { SkelonNode, SkeletonNode } from './types';
import { classifyNode } from './classification';
import { inferShape } from './shapeInference';

/**
 * Stage 6: Skeleton Layout Synthesis
 * Converts the processed layout tree into the final Skeleton tree.
 */
export function synthesizeSkeleton(node: SkelonNode): SkeletonNode {
    const role = classifyNode(node);
    const skeletonNode = inferShape(node, role);

    // Recursively synthesize children, unless this node is classified as a leaf 
    // shape like 'avatar', 'button', or 'text-lines' which shouldn't have internal skeletons.
    if (skeletonNode.shape === 'group' || skeletonNode.shape === 'image') {
        skeletonNode.children = node.children.map(synthesizeSkeleton);
    }

    return skeletonNode;
}
