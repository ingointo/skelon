import { SkelonNode, SkeletonShapeType, SkeletonNode } from './types';
import { SemanticRole } from './classification';

/**
 * Stage 5: Skeleton Shape Inference
 */
export function inferShape(node: SkelonNode, role: SemanticRole): SkeletonNode {
    let shape: SkeletonShapeType = 'rounded-rect';
    let lineCount = undefined;
    let lineHeight = undefined;

    switch (role) {
        case 'avatar':
            shape = 'circle';
            break;
        case 'button':
            shape = 'rounded-rect';
            break;
        case 'image':
            shape = 'image';
            break;
        case 'text-lines':
            shape = 'text-lines';
            if (node.height < 32) {
                lineCount = 1;
                lineHeight = node.height;
            } else {
                lineCount = Math.max(1, Math.round(node.height / 24));
                lineHeight = node.height / lineCount;
            }
            break;
        case 'list-item':
        case 'card':
        case 'container':
            shape = 'group';
            break;
    }

    return {
        id: `skeleton-${node.id}`,
        shape,
        x: node.x,
        y: node.y,
        width: node.width,
        height: node.height,
        borderRadius: role === 'avatar' ? node.width / 2 : (node.borderRadius || 4),
        lineCount,
        lineHeight,
        children: [], // Populated during synthesis
    };
}
