<div align="center">
  <h1>⚡ @skelon/react</h1>
  <p><strong>Pixel-perfect skeleton loaders for React, generated automatically.</strong></p>

  <p>
    <a href="https://www.npmjs.com/package/@skelon/react"><img src="https://img.shields.io/npm/v/@skelon/react.svg?style=for-the-badge&logo=react&color=61DAFB" alt="NPM Version" /></a>
    <a href="https://github.com/ingointo/skelon"><img src="https://img.shields.io/github/actions/workflow/status/ingointo/skelon/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
    <img src="https://img.shields.io/badge/License-MIT-gray.svg?style=for-the-badge" alt="License" />
  </p>
</div>

---

## 📖 Introduction

`@skelon/react` is the official React adapter for Skelon. It allows you to transform your existing functional and class components into beautiful skeletons with **zero manual CSS**.

Simply wrap your components in the `<Skelon>` provider, and the library will use the `@skelon/core` engine to measure and mask your UI while data is fetching.

## 🚀 Installation

```bash
pnpm add @skelon/core @skelon/react
# or
npm install @skelon/core @skelon/react
```

## ⚡ Quick Example

```tsx
import { Skelon } from '@skelon/react';

export const UserProfile = ({ user, isLoading }) => {
  return (
    <Skelon loading={isLoading}>
      <div className="flex gap-4 p-4">
        <img className="rounded-full w-12 h-12" src={user.avatar} />
        <div>
          <h2 className="text-lg font-bold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>
    </Skelon>
  );
};
```

## ✨ Features

- **Zero Config**: No need to manually define widths and heights for your placeholders.
- **SSR Compatible**: Seamlessly works with Next.js (App Router) and standard SSR.
- **Layout Shift Protection**: Placeholders occupy the exact spatial coordinates of the final UI.
- **Custom Shimmers**: Fully customizable gradients and animation speeds via the `theme` prop.

## 📦 Skelon Ecosystem

| Package | Role |
| :--- | :--- |
| **@skelon/core** | Core Layout Inference Engine |
| **@skelon/react-native** | Official React Native Adapter |
| **@skelon/cli** | Codebase scanning and static presets |

---

## 🔗 Links

- **Documentation**: [skelon.js.org](https://skelon.js.org)
- **Repository**: [github.com/ingointo/skelon](https://github.com/ingointo/skelon)
- **Examples**: [React Web Demos](https://github.com/ingointo/skelon/tree/main/packages/example-react)

## 📄 License

MIT © [ingointo](https://github.com/ingointo)
