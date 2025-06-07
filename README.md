# 🚀 Commitizen Binary

[![GitHub release](https://img.shields.io/github/v/release/hi-dka/commitizen_bin)](https://github.com/hi-dka/commitizen_bin/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[中文](./README.zh.md) | English

<p align="center">
  <img src="https://raw.githubusercontent.com/commitizen/cz-cli/master/meta/screenshots/add-commit.png" alt="Commitizen CLI" width="600">
</p>

## 📑 Table of Contents

- [📖 Project Introduction](#-project-introduction)
- [🔧 Installation](#-installation)
  - [Linux Prebuilt Binary](#linux-prebuilt-binary)
  - [Building from Source](#building-from-source-macos-windows-and-other-platforms)
  - [Build Configuration](#build-configuration)
- [🚀 Usage](#-usage)
  - [Direct Usage](#direct-usage)
  - [Using with Git Hooks](#using-with-git-hooks)
- [✨ Features](#-features)
- [📄 License](#-license)

## 📖 Project Introduction

This is a binary version of the [commitizen](https://github.com/commitizen/cz-cli) project. Commitizen is a tool designed to standardize commit messages, helping teams follow a consistent commit convention such as [Conventional Commits](https://www.conventionalcommits.org/).

**Why use this binary version?**
- 🚫 No Node.js/npm dependency chain
- ⚡ Faster startup time
- 🔄 Same reliable experience as the original
- 🐧 Prebuilt releases available for Linux only (other platforms require building from source)

## 🔧 Installation

### Linux Prebuilt Binary

```bash
# Linux (x64)
curl -LO https://github.com/hi-dka/commitizen_bin/releases/latest/download/cz-bin-linux-x64
chmod +x cz-bin-linux-x64
sudo mv cz-bin-linux-x64 /usr/local/bin/cz
```

### Building from Source (macOS, Windows and other platforms)

1. Clone the repository:

```bash
git clone https://github.com/hi-dka/commitizen_bin.git
cd commitizen_bin
```

2. Install dependencies and build:

```bash
# Using npm
npm install
npm run build

# Or using yarn
yarn install
yarn build
```

3. Install the compiled binary:

```bash
# Binary will be generated in the dist/ directory
chmod +x dist/cz-bin
sudo mv dist/cz-bin /usr/local/bin/cz  # Linux/macOS
# Windows: Copy dist/cz-bin.exe to a location in your PATH
```

### Build Configuration

If you need to build a binary for other platforms, you'll need to modify the `pkg.targets` field in `package.json`. Available target platforms include:

```json
{
  "pkg": {
    "targets": [
      "node16-linux-x64",    // Linux x64
      "node16-macos-x64",    // macOS Intel
      "node16-macos-arm64",  // macOS Apple Silicon
      "node16-win-x64"       // Windows x64
    ]
  }
}
```

You can choose one or more target platforms as needed. After building, the binary files will be generated in the `dist/` directory.

## 🚀 Usage

### Direct Usage

```bash
# Use instead of git commit
cz
```

### Using with Git Hooks

1. Create a `.git/hooks/prepare-commit-msg` file:

```bash
#!/bin/sh
exec < /dev/tty && cz --hook || true
```

2. Add execution permission:

```bash
chmod +x .git/hooks/prepare-commit-msg
```

This will automatically invoke commitizen whenever you run `git commit`.

## ✨ Features

- 🔋 **No Dependencies** - No Node.js runtime required
- 🚀 **High Performance** - Instant startup, no JS engine warm-up time
- 🔄 **Full Compatibility** - Retains all features of the original commitizen
- 📝 **Standardized Commits** - Enforces conventional commit format
- 🌐 **Cross-Platform** - Works on macOS, Linux and Windows
- 🔧 **CI/CD Integration** - Perfect for automated workflows
- 🧩 **Extensible** - Works with custom adapters

## 📄 License

This project is released under the [MIT License](./LICENSE).

Based on [commitizen](https://github.com/commitizen/cz-cli) and follows its license.

---

<p align="center">
  Made with ❤️ for developer experience
</p>
