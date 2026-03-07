import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { generateSkeletonTree, SkeletonNode } from '@skelon/core';
import { extractDOMTree } from './extractor';
import { SkelonRenderer } from './Renderer';

export interface SkelonProps {
    loading: boolean;
    children: React.ReactNode;
}

export const Skelon: React.FC<SkelonProps> = ({ loading, children }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [skeletonTree, setSkeletonTree] = useState<SkeletonNode | null>(null);

    // We measure in layout effect to prevent flash if we already have the DOM rendered
    useLayoutEffect(() => {
        if (loading && containerRef.current) {
            // Trigger extraction right away
            extractDOMTree(containerRef.current).then(tree => {
                const result = generateSkeletonTree(tree);
                setSkeletonTree(result);
            });
        }
    }, [loading]);

    return (
        <div style={{ position: 'relative' }}>
            {/* Layout container that stays in flow to maintain exact dimensions/margins */}
            <div
                ref={containerRef}
                style={{
                    opacity: loading ? 0 : 1,
                    pointerEvents: loading ? 'none' : 'auto',
                }}
                aria-hidden={loading}
            >
                {children}
            </div>

            {/* Skeleton overlay */}
            {loading && skeletonTree && (
                <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
                    <SkelonRenderer skeletonTree={skeletonTree} />
                </div>
            )}
        </div>
    );
};
