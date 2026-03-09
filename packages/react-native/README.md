<div align="center">
  <h1>⚡ @skelon/react-native</h1>
  <p><strong>Automatic skeleton loading for React Native and Expo apps.</strong></p>

  <p>
    <a href="https://www.npmjs.com/package/@skelon/react-native"><img src="https://img.shields.io/npm/v/@skelon/react-native.svg?style=for-the-badge&logo=react&color=61DAFB" alt="NPM Version" /></a>
    <a href="https://github.com/ingointo/skelon"><img src="https://img.shields.io/github/actions/workflow/status/ingointo/skelon/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
    <img src="https://img.shields.io/badge/License-MIT-gray.svg?style=for-the-badge" alt="License" />
  </p>
</div>

---

## 📖 Introduction

`@skelon/react-native` brings the power of intelligent layout inference to mobile development. It automatically maps your `View`, `Text`, and `Image` components to high-performance native skeleton placeholders.

Powered by the `@skelon/core` engine, it ensures your mobile loading states match your design system perfectly without manual trial-and-error.

## 🚀 Installation

```bash
pnpm add @skelon/core @skelon/react-native
# or
npm install @skelon/core @skelon/react-native
```

## ⚡ Quick Example

```tsx
import { View, Text, Image } from 'react-native';
import { Skelon } from '@skelon/react-native';

export const MovieCard = ({ movie, isLoading }) => {
  return (
    <Skelon loading={isLoading}>
      <View style={{ padding: 16 }}>
        <Image source={{ uri: movie.poster }} style={{ width: 100, height: 150 }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{movie.title}</Text>
        <Text>{movie.year}</Text>
      </View>
    </Skelon>
  );
};
```

## ✨ Features

- **Native Performance**: Uses `Animated.View` for buttery smooth 60fps shimmer effects.
- **Expo Compatible**: Works out of the box with Expo projects without extra configuration.
- **Adaptive Sizing**: Skeletons automatically resize based on device screen dimensions and flexbox rules.
- **Complex UI Support**: Handles nested layouts, margins, and absolute positioning with ease.

## 📦 Skelon Ecosystem

| Package | Role |
| :--- | :--- |
| **@skelon/core** | Core Layout Inference Engine |
| **@skelon/react** | Official React (Web) Adapter |
| **@skelon/cli** | CLI tool for static layout generation |

---

## 🔗 Links

- **Documentation**: [skelon.js.org](https://skelon.js.org)
- **Repository**: [github.com/ingointo/skelon](https://github.com/ingointo/skelon)
- **Issues**: [Report a Bug](https://github.com/ingointo/skelon/issues)

## 📄 License

MIT © [ingointo](https://github.com/ingointo)
