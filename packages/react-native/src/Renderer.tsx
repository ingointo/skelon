import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { SkeletonNode } from '@skelon/core';

export const SkelonRenderer: React.FC<{ skeletonTree: SkeletonNode | null }> = ({ skeletonTree }) => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [animatedValue]);

    if (!skeletonTree) return null;

    const opacity = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0.3, 0.7, 0.3],
    });

    const renderNode = (node: SkeletonNode): React.ReactNode => {
        if (node.shape === 'group') {
            return (
                <View
                    key={node.id}
                    style={{
                        position: 'absolute',
                        left: node.x, top: node.y, width: node.width, height: node.height,
                    }}
                >
                    {node.children.map(renderNode)}
                </View>
            );
        }

        if (node.shape === 'text-lines' && node.lineCount && node.lineCount > 1) {
            const lines = [];
            const lh = node.lineHeight || 16;
            for (let i = 0; i < node.lineCount; i++) {
                lines.push(
                    <Animated.View
                        key={`${node.id}-line-${i}`}
                        style={[
                            styles.shimmerBase,
                            { opacity },
                            {
                                left: node.x,
                                top: node.y + (i * lh),
                                width: i === node.lineCount - 1 ? node.width * 0.6 : node.width,
                                height: lh - 6,
                                borderRadius: 4
                            }
                        ]}
                    />
                );
            }
            return <>{lines}</>;
        }

        return (
            <Animated.View
                key={node.id}
                style={[
                    styles.shimmerBase,
                    { opacity },
                    {
                        left: node.x,
                        top: node.y,
                        width: node.width,
                        height: node.height,
                        borderRadius: node.shape === 'circle' ? node.width / 2 : node.borderRadius || 4,
                    }
                ]}
            />
        );
    };

    return (
        <View style={{ position: 'relative', width: skeletonTree.width, height: skeletonTree.height }}>
            {renderNode(skeletonTree)}
        </View>
    );
};

const styles = StyleSheet.create({
    shimmerBase: {
        position: 'absolute',
        backgroundColor: '#E0E0E0',
    }
});
