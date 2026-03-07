import { describe, it, expect } from 'vitest';
import { synthesizeSkeleton, inferShape } from '../src/index';
import { SkelonNode } from '../src/types';

describe('Synthesis and Shape Inference', () => {
    it('infers text-lines with correct calculated line count', () => {
        const node: SkelonNode = {
            id: 'p-text',
            elementType: 'p',
            x: 0, y: 0,
            width: 400, height: 64, // 64 height / 16 line-height = 4 lines
            textContentLength: 500,
            displayType: 'block',
            children: [],
        };

        const shape = inferShape(node, 'text-lines');
        expect(shape.shape).toBe('text-lines');
        expect(shape.lineCount).toBe(3); // 64 height / 24 heuristic = 3 lines
    });

    it('synthesizes a full layout hierarchy', () => {
        const rootNode: SkelonNode = {
            id: 'root-card',
            elementType: 'div',
            x: 0, y: 0, width: 300, height: 200, displayType: 'block',
            children: [
                {
                    id: 'child-avatar',
                    elementType: 'img',
                    x: 10, y: 10, width: 40, height: 40, borderRadius: 20, displayType: 'block', children: []
                },
                {
                    id: 'child-text',
                    elementType: 'h1',
                    x: 60, y: 10, width: 200, height: 20, textContentLength: 10, displayType: 'block', children: []
                }
            ]
        };

        const tree = synthesizeSkeleton(rootNode);
        expect(tree.shape).toBe('group'); // Fallback for card
        expect(tree.children.length).toBe(2);
        expect(tree.children[0].shape).toBe('image'); // Note: 'image' role from 'img' tag beats avatar metric in current heuristic
        expect(tree.children[1].shape).toBe('text-lines');
        expect(tree.children[1].lineCount).toBe(1);
    });
});
