# 🚀 Commitizen 二进制版本

[![GitHub release](https://img.shields.io/github/v/release/hi-dka/commitizen_bin)](https://github.com/hi-dka/commitizen_bin/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[English](./README.en.md) | 中文

<p align="center">
  <img src="https://raw.githubusercontent.com/commitizen/cz-cli/master/meta/screenshots/add-commit.png" alt="Commitizen CLI" width="600">
</p>

## 📑 目录

- [📖 项目介绍](#-项目介绍)
- [🔧 安装](#-安装)
  - [Linux 预编译二进制文件](#linux-预编译二进制文件)
  - [从源码构建](#从源码构建-macos-windows-以及其他平台)
  - [构建配置说明](#构建配置说明)
- [🚀 使用方法](#-使用方法)
  - [直接使用](#直接使用)
  - [通过 Git Hooks 使用](#通过-git-hooks-使用)
- [✨ 特性与优势](#-特性与优势)
- [📄 许可证](#-许可证)

## 📖 项目介绍

这是 [commitizen](https://github.com/commitizen/cz-cli) 项目的二进制版本。Commitizen 是一个用于标准化提交信息的工具，帮助团队遵循统一的提交规范，如 [Conventional Commits](https://www.conventionalcommits.org/)。

**为什么使用这个二进制版本？**
- 🚫 无需 Node.js/npm 依赖链
- ⚡ 启动更快
- 🔄 与原版相同的可靠体验
- 🐧 预编译发布版仅支持 Linux 平台（其他平台可自行构建）

## 🔧 安装

### Linux 预编译二进制文件

```bash
# Linux (x64)
curl -LO https://github.com/hi-dka/commitizen_bin/releases/latest/download/cz-bin-linux-x64
chmod +x cz-bin-linux-x64
sudo mv cz-bin-linux-x64 /usr/local/bin/cz
```

### 从源码构建 (macOS, Windows 以及其他平台)

1. 克隆仓库:

```bash
git clone https://github.com/hi-dka/commitizen_bin.git
cd commitizen_bin
```

2. 安装依赖并构建:

```bash
# 使用 npm
npm install
npm run build

# 或使用 yarn
yarn install
yarn build
```

3. 安装编译后的二进制文件:

```bash
# 二进制文件将生成在 dist/ 目录
chmod +x dist/cz-bin
sudo mv dist/cz-bin /usr/local/bin/cz  # Linux/macOS
# Windows: 将 dist/cz-bin.exe 复制到 PATH 中的某个位置
```

### 构建配置说明

如果你需要为其他平台构建二进制文件，需要修改 `package.json` 中的 `pkg.targets` 字段。可选的目标平台有：

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

你可以根据需要选择一个或多个目标平台。构建完成后，二进制文件将生成在 `dist/` 目录中。

## 🚀 使用方法

### 直接使用

```bash
# 代替 git commit
cz
```

### 通过 Git Hooks 使用

1. 创建 `.git/hooks/prepare-commit-msg` 文件：

```bash
#!/bin/sh
exec < /dev/tty && cz --hook || true
```

2. 添加执行权限：

```bash
chmod +x .git/hooks/prepare-commit-msg
```

这样每次执行 `git commit` 时会自动调用 commitizen。

## ✨ 特性与优势

- 🔋 **零依赖** - 无需 Node.js 运行时
- 🚀 **高性能** - 即时启动，无 JS 引擎预热时间
- 🔄 **完全兼容** - 保留原版 commitizen 的所有功能
- 📝 **标准化提交** - 强制实施约定式提交格式
- 🌐 **跨平台** - 支持 macOS、Linux 和 Windows
- 🔧 **CI/CD 集成** - 完美适配自动化工作流
- 🧩 **可扩展性** - 支持自定义适配器

## 📄 许可证

本项目基于 [MIT 许可证](./LICENSE) 发布。

基于 [commitizen](https://github.com/commitizen/cz-cli) 开发，并遵循其许可证。

---

<p align="center">
  用 ❤️ 打造，为开发者体验而生
</p>
