import { describe, it, expect } from 'vitest';
import { classifyNode } from '../src/classification';
import { SkelonNode } from '../src/types';

describe('Classification Heuristics', () => {
    it('classifies a circle as an avatar', () => {
        const node: SkelonNode = {
            id: 'test',
            elementType: 'div',
            x: 0, y: 0,
            width: 50, height: 50,
            borderRadius: 25,
            displayType: 'block',
            children: [],
        };

        expect(classifyNode(node)).toBe('avatar');
    });

    it('classifies an img element as an image', () => {
        const node: SkelonNode = {
            id: 'test-img',
            elementType: 'img',
            x: 0, y: 0,
            width: 300, height: 200,
            displayType: 'block',
            children: [],
        };

        expect(classifyNode(node)).toBe('image');
    });

    it('classifies a button element with correct dimensions as button', () => {
        const node: SkelonNode = {
            id: 'test-btn',
            elementType: 'button',
            x: 0, y: 0,
            width: 120, height: 40,
            displayType: 'flex',
            children: [],
        };

        expect(classifyNode(node)).toBe('button');
    });

    it('classifies a leaf node with text as text-lines', () => {
        const node: SkelonNode = {
            id: 'test-text',
            elementType: 'span',
            x: 0, y: 0,
            width: 200, height: 20,
            textContentLength: 150,
            displayType: 'inline',
            children: [],
        };

        expect(classifyNode(node)).toBe('text-lines');
    });

    it('classifies a large container as a card', () => {
        const node: SkelonNode = {
            id: 'test-card',
            elementType: 'div',
            x: 0, y: 0,
            width: 300, height: 400,
            displayType: 'flex',
            children: [
                { id: 'c1', elementType: 'img', x: 0, y: 0, width: 300, height: 200, displayType: 'block', children: [] }
            ],
        };

        expect(classifyNode(node)).toBe('card');
    });
});
