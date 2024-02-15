# OneQR KDS · Frontend Monorepo

[🇨🇳 中文 README](./README.zh-CN.md) | [🇬🇧 English README](./README.md)

> 一个基于 **pnpm monorepo** 的现代前端项目，采用 **React + TypeScript + Vite + TailwindCSS** 技术栈，适配移动端设备，支持多主题切换与组件复用开发。

---

## ✨ 技术栈

- 📦 Monorepo 管理：`pnpm workspaces` + `TurboRepo`
- 🧩 框架核心：`React 19` + `TypeScript`
- ⚡️ 构建工具：`Vite 6`
- 💅 样式系统：`TailwindCSS 3.4` + 自定义主题支持
- 📏 代码规范：`ESLint (Flat Config)` + `Prettier`（均封装为内部模块）
- 🧪 UI组件开发：`Storybook`
- 📱 移动端适配：`postcss-px-to-viewport` + 浏览器兼容配置（Chrome 66+、Android 8+）

---

## 📁 项目结构

```bash
.
├── apps/               # 应用主入口（如 kds）
│   └── kds/            # 移动端应用
├── packages/           # 公共包
│   ├── ui/             # UI 组件库（移动端）
│   ├── tailwind-config # Tailwind 配置模块
│   ├── typescript-config
│   ├── eslint-config   # ESLint 配置（Flat Config）
│   ├── prettier-config
│   └── utils/          # 通用工具函数
└── turbo.json          # TurboRepo 配置
```



---

## 📦 安装依赖

```bash
pnpm install
```

---

## 🚀 启动项目

```bash
pnpm dev # 启动 apps/kds
```

---

## 📚 组件文档

```bash
pnpm storybook
```

---

## 🔬 代码检查

```bash
pnpm lint     # ESLint 检查
pnpm format   # Prettier 格式化
```

---

## 🧪 单元测试（可选）

> 如需添加 Vitest/Jest 等，请自定义配置

---

## 🧩 Tailwind 主题配置

- 支持多主题切换（默认 / 深色 / 自定义蓝色）
- 使用 CSS Variables 和 `Zustand` 状态管理
- 可通过 `theme-default`, `theme-dark`, `theme-light` 进行切换

---

## 🛠 浏览器兼容性

```json
"browserslist": [
  "Chrome >= 66",
  "Safari >= 13",
  "iOS >= 12",
  "Android >= 8",
  "last 2 ChromeAndroid versions"
]
```

---

## ✅ TODO（建议）

- [ ] 完善 UI 组件 Storybook 文档
- [ ] 添加 GitHub Actions 自动 CI
- [ ] 接入 Vitest 单元测试
- [ ] 优化首屏加载性能

---

## 📄 License

MIT

