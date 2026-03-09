<div align="center">
  <h1>⚡ @skelon/cli</h1>
  <p><strong>Codebase analysis and static skeleton generation for enterprise apps.</strong></p>

  <p>
    <a href="https://www.npmjs.com/package/@skelon/cli"><img src="https://img.shields.io/npm/v/@skelon/cli.svg?style=for-the-badge&logo=npm&color=CB3837" alt="NPM Version" /></a>
    <a href="https://github.com/ingointo/skelon"><img src="https://img.shields.io/github/actions/workflow/status/ingointo/skelon/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
    <img src="https://img.shields.io/badge/License-MIT-gray.svg?style=for-the-badge" alt="License" />
  </p>
</div>

---

## 📖 Introduction

`@skelon/cli` is a powerful developer tool for high-performance applications. While Skelon can analyze layouts at runtime, the CLI allows you to scan your codebase, identify structural UI habits, and **pre-generate static skeleton presets**.

This is ideal for large-scale enterprise applications where you want to eliminate the runtime overhead of DOM/Native node measurement.

## 🚀 Installation

```bash
# Global installation
npm install -g @skelon/cli

# Or run via npx
npx @skelon/cli --help
```

## ⚡ Quick Usage

### Scan your components
Scan a directory to identify repeating layout patterns that could be converted into static skeletons.

```bash
skelon scan --dir ./src/components --output patterns.json
```

### Generate static presets
Create a reusable TypeScript preset file based on your UI structures.

```bash
skelon generate --preset patterns.json --out ./src/skeletons.ts
```

## ✨ Features

- **Static Analysis**: Identifies layout geometry without running the browser.
- **Enterprise Ready**: Perfect for large monorepos with hundreds of unique components.
- **Performance Boost**: Reduces runtime CPU usage by moving measurement logic to the build step.
- **CI/CD Integrated**: Automatically update your skeleton presets as part of your build pipeline.

## 📦 Skelon Ecosystem

| Package | Role |
| :--- | :--- |
| **@skelon/core** | The Inference Intelligence Engine |
| **@skelon/react** | Web / Next.js Rendering Adapter |
| **@skelon/react-native** | Mobile / Expo Rendering Adapter |

---

## 🔗 Links

- **Documentation**: [skelon.js.org/cli](https://skelon.js.org/cli)
- **Repository**: [github.com/ingointo/skelon](https://github.com/ingointo/skelon)
- **Contributing**: [Join the project](https://github.com/ingointo/skelon/blob/main/CONTRIBUTING.md)

## 📄 License

MIT © [ingointo](https://github.com/ingointo)
