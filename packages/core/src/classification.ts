import { SkelonNode } from './types';

export type SemanticRole = 'avatar' | 'button' | 'text-lines' | 'image' | 'container' | 'list-item' | 'card';

/**
 * Stage 3: Semantic Element Classification
 */
export function classifyNode(node: SkelonNode): SemanticRole {
    const { width, height, borderRadius, elementType, textContentLength, accessibilityRole, children } = node;

    // 1. Image Classification
    if (['img', 'image', 'svg', 'picture', 'video'].includes(elementType.toLowerCase())) return 'image';

    // 2. Avatar Classification
    const isCircle = Math.abs(width - height) < 5 && borderRadius && borderRadius >= Math.floor(width / 2.5);
    if (isCircle && width >= 16 && width <= 150) return 'avatar';

    // 3. Button Classification
    const isWideShort = width > 40 && height >= 24 && height <= 64;
    if (isWideShort && (elementType === 'button' || accessibilityRole === 'button')) return 'button';

    // 4. Explicit Text Elements
    if (['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'strong', 'em', 'label', 'a'].includes(elementType.toLowerCase())) {
        return 'text-lines';
    }

    // 5. Container Heuristics
    if (children.length > 0) {
        if (elementType.toLowerCase() === 'li' || accessibilityRole === 'listitem') return 'list-item';

        // Check if it looks like a card (moderate to large size with mixed text/image children)
        if (width > 200 && height > 100) return 'card';

        return 'container';
    }

    // Default fallback for leaf nodes
    if ((textContentLength && textContentLength > 0) || height <= 40) return 'text-lines';

    return 'image';
}
