import { SkelonNode, DisplayType } from '@skelon/core';

let idCounter = 0;

export async function extractDOMTree(element: Element, containerRect?: DOMRect): Promise<SkelonNode> {
    const rect = element.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(element);

    // Calculate relative to the main container
    const x = containerRect ? rect.left - containerRect.left : 0;
    const y = containerRect ? rect.top - containerRect.top : 0;

    const node: SkelonNode = {
        id: `node-${idCounter++}`,
        elementType: element.tagName.toLowerCase(),
        x,
        y,
        width: rect.width,
        height: rect.height,
        borderRadius: parseFloat(computedStyle.borderRadius) || 0,
        displayType: computedStyle.display as DisplayType,
        flexDirection: computedStyle.flexDirection as any,
        accessibilityRole: element.getAttribute('role') || undefined,
        textContentLength: element.textContent?.trim().length || 0,
        children: [],
    };

    // Process children
    for (let i = 0; i < element.children.length; i++) {
        const childElement = element.children[i];
        // Skip hidden elements
        const childStyle = window.getComputedStyle(childElement);
        if (childStyle.display !== 'none' && childStyle.visibility !== 'hidden' && childStyle.opacity !== '0') {
            const childNode = await extractDOMTree(childElement, rect);
            node.children.push(childNode);
        }
    }

    return node;
}
