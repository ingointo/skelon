import React from 'react';
import { SkeletonNode } from '@skelon/core';

const shimmerStyles = `
  @keyframes skelon-shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  .skelon-shimmer-base {
    position: absolute;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 40%, #f0f0f0 55%);
    background-size: 200% 100%;
    animation: skelon-shimmer 1.5s infinite linear;
  }
  
  .skelon-group {
    position: absolute;
  }
`;

export const SkelonRenderer: React.FC<{ skeletonTree: SkeletonNode | null }> = ({ skeletonTree }) => {
    if (!skeletonTree) return null;

    const renderNode = (node: SkeletonNode): React.ReactNode => {
        if (node.shape === 'group' || node.shape === 'image') {
            return (
                <div
                    key={node.id}
                    className={node.shape === 'image' ? 'skelon-shimmer-base' : 'skelon-group'}
                    style={{
                        left: node.x, top: node.y, width: node.width, height: node.height,
                        borderRadius: node.borderRadius || 4
                    }}
                >
                    {node.shape === 'group' && node.children.map(renderNode)}
                </div>
            );
        }

        // For text-lines, we render multiple bars
        if (node.shape === 'text-lines' && node.lineCount && node.lineCount >= 1) {
            const lines = [];
            const lh = node.lineHeight || 16;
            for (let i = 0; i < node.lineCount; i++) {
                const isLastLine = i === node.lineCount - 1 && node.lineCount > 1;
                const lineThickness = Math.min(lh * 0.7, 20); // Scale thickness, max 20px
                const topOffset = node.y + (i * lh) + (lh - lineThickness) / 2;

                lines.push(
                    <div
                        key={`${node.id}-line-${i}`}
                        className="skelon-shimmer-base"
                        style={{
                            left: node.x,
                            top: topOffset,
                            width: isLastLine ? node.width * 0.6 : node.width,
                            height: lineThickness,
                            borderRadius: 4
                        }}
                    />
                );
            }
            return <>{lines}</>;
        }

        return (
            <div
                key={node.id}
                className="skelon-shimmer-base"
                style={{
                    left: node.x,
                    top: node.y,
                    width: node.width,
                    height: node.height,
                    borderRadius: node.shape === 'circle' ? '50%' : node.borderRadius || 4,
                }}
            />
        );
    };

    return (
        <>
            <style>{shimmerStyles}</style>
            <div style={{ position: 'relative', width: skeletonTree.width, height: skeletonTree.height }}>
                {renderNode(skeletonTree)}
            </div>
        </>
    );
};
