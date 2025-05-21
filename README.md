# Matchapp - 交友配對應用

這是一個使用 Vue 3 + TypeScript 開發的現代交友配對應用。

## 功能特色

- 💘 配對系統

  - 卡片式使用者介面
  - 左右滑動配對機制
  - 即時動畫效果

- 💬 即時聊天
  - 已配對用戶列表
  - 即時訊息交換
  - 未讀訊息提醒

## 技術棧

- 前端框架：Vue 3 + TypeScript
- UI 框架：Tailwind CSS + shadcn/ui
- 狀態管理：Pinia
- 路由：Vue Router
- 圖標：Iconify

## 開發環境設置

1. 安裝 [Bun](https://bun.sh)：

```bash
brew tap oven-sh/bun
brew install bun
```

2. 安裝依賴：

```bash
bun install
```

3. 啟動開發伺服器：

```bash
bun dev
```

4. 建置生產版本：

```bash
bun run build
```

## 專案結構

```
src/
├── assets/        # 靜態資源
├── components/    # 共用元件
│   ├── layout/   # 布局元件
│   └── match/    # 配對相關元件
├── composables/  # 組合式函數
├── stores/       # Pinia 狀態管理
├── views/        # 頁面元件
└── router/       # 路由配置
```

## 代碼規範

- 組件使用 `<script setup lang="ts">`
- 使用 TypeScript 進行類型檢查
- 使用 ESLint 進行代碼檢查

## 測試

```bash
# 運行端對端測試
bun test:e2e

# 運行 lint 檢查
bun lint
```

## UI 設計規範

- 主色：#FF5A5F（Airbnb 紅）
- 次要色：#484848（深灰）
- 背景色：#FFFFFF（白色）
- 文字色：#484848（深灰）
- 邊框色：#DDDDDD（淺灰）

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Type-Check, Compile and Minify for Production

```sh
bun run build
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
bun run build

# Runs the end-to-end tests
bun test:e2e
# Runs the tests only on Chromium
bun test:e2e --project=chromium
# Runs the tests of a specific file
bun test:e2e tests/example.spec.ts
# Runs the tests in debug mode
bun test:e2e --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
bun lint
```
