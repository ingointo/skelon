<div align="center">
  <h1>⚡ @skelon/core</h1>
  <p><strong>The Intelligent Layout Inference & Skeleton Generation Engine</strong></p>

  <p>
    <a href="https://www.npmjs.com/package/@skelon/core"><img src="https://img.shields.io/npm/v/@skelon/core.svg?style=for-the-badge&logo=npm&color=CB3837" alt="NPM Version" /></a>
    <a href="https://github.com/ingointo/skelon"><img src="https://img.shields.io/github/actions/workflow/status/ingointo/skelon/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
    <img src="https://img.shields.io/badge/License-MIT-gray.svg?style=for-the-badge" alt="License" />
  </p>
</div>

---

## 📖 Introduction

`@skelon/core` is the framework-agnostic heart of the Skelon ecosystem. It provides the heavy-lifting logic for **structural UI analysis**, **semantic classification**, and **skeleton shape synthesis**.

Whether you are building a custom adapter or using Skelon in a vanilla environment, the Core engine provides the 10-stage geometry pipeline required to transform real layouts into beautiful, shimmering placeholders.

## 🚀 Installation

```bash
pnpm add @skelon/core
# or
npm install @skelon/core
```

## ⚡ Quick Example

```typescript
import { SkelonEngine } from '@skelon/core';

// 1. Initialize the engine
const engine = new SkelonEngine();

// 2. Analyze a raw layout tree (Geometry + Metadata)
const layoutTree = engine.analyze(rootNode);

// 3. Synthesize the skeleton representation
const skeletonData = engine.synthesize(layoutTree);

console.log(skeletonData.shapes); // [{ type: 'avatar', x: 10, y: 10, radius: 25 }, ...]
```

## ✨ Features

- **Geometric Precision**: Calculates absolute and relative coordinates to ensure zero layout shift.
- **Semantic Heuristics**: Automatically distinguishes between text lines, avatars, buttons, and block images.
- **Layout Clustering**: Detects repeating patterns in lists and grids for optimized rendering.
- **Highly Extensible**: Easily define custom classification rules for proprietary UI components.

## 📦 Skelon Ecosystem

| Package | Role |
| :--- | :--- |
| **@skelon/react** | Official React & Next.js Adapter |
| **@skelon/react-native** | Official React Native & Expo Adapter |
| **@skelon/cli** | Static analysis and preset generation tool |

---

## 🔗 Links

- **Documentation**: [skelon.js.org](https://skelon.js.org)
- **Repository**: [github.com/ingointo/skelon](https://github.com/ingointo/skelon)
- **Issues**: [Report a Bug](https://github.com/ingointo/skelon/issues)

## 📄 License

MIT © [ingointo](https://github.com/ingointo)
