import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { generateSkeletonTree, SkeletonNode } from '@skelon/core';
import { extractNativeTree } from './extractor';
import { SkelonRenderer } from './Renderer';

export interface SkelonProps {
    loading: boolean;
    children: React.ReactNode;
}

export const Skelon: React.FC<SkelonProps> = ({ loading, children }) => {
    const containerRef = useRef<View>(null);
    const [skeletonTree, setSkeletonTree] = useState<SkeletonNode | null>(null);

    useEffect(() => {
        if (loading && containerRef.current) {
            extractNativeTree(containerRef.current).then(tree => {
                const result = generateSkeletonTree(tree);
                // We override width/height manually since extraction is stubbed for MVP
                if (result.width === 0) result.width = 300;
                if (result.height === 0) result.height = 100;

                setSkeletonTree(result);
            });
        }
    }, [loading]);

    return (
        <View style={styles.wrapper}>
            <View
                ref={containerRef}
                style={[
                    styles.hiddenContainer,
                    loading && styles.hiddenContent
                ]}
                collapsable={false}
            >
                {children}
            </View>

            {loading && skeletonTree && (
                <View style={StyleSheet.absoluteFill}>
                    <SkelonRenderer skeletonTree={skeletonTree} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
    },
    hiddenContainer: {
        opacity: 1,
    },
    hiddenContent: {
        opacity: 0,
    }
});
