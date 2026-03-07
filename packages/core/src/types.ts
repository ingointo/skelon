export type DisplayType = 'flex' | 'block' | 'inline' | 'inline-block' | 'grid' | 'none' | string;

export interface SkelonNode {
    id: string;
    elementType: string;
    textContentLength?: number;

    // Layout Geometry
    x: number;
    y: number;
    width: number;
    height: number;
    borderRadius?: number;

    // Styling
    displayType: DisplayType;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';

    // Semantic hints
    accessibilityRole?: string;

    // Hierarchy
    children: SkelonNode[];
}

export type SkeletonShapeType = 'circle' | 'rounded-rect' | 'text-lines' | 'image' | 'group';

export interface SkeletonNode {
    id: string;
    shape: SkeletonShapeType;

    // Computed layout for the skeleton
    x: number;
    y: number;
    width: number;
    height: number;
    borderRadius?: number;

    // For text skeletons
    lineCount?: number;
    lineHeight?: number;

    children: SkeletonNode[];
}

export interface IPlatformAdapter {
    extractTree(root: any): Promise<SkelonNode>;
    renderSkeleton(skeletonTree: SkeletonNode): any;
}
