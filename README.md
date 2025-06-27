# OneQR KDS · Frontend Monorepo ss

[🇨🇳 中文 README](./README.zh-CN.md) | [🇬🇧 English README](./README.md)

> A modern mobile-first frontend project built with **pnpm monorepo**, powered by **React + TypeScript + Vite + TailwindCSS**. Designed for scalable component reuse, theming, and performance optimization.

---

## ✨ Tech Stack

- 📦 Monorepo: `pnpm workspaces` + `TurboRepo`
- 🧩 Core: `React 19` + `TypeScript`
- ⚡️ Build: `Vite 6`
- 💅 Styling: `TailwindCSS 3.4` + Custom Theme System
- 📏 Code Quality: `ESLint (Flat Config)` + `Prettier` (both modularized)
- 🧪 UI Dev: `Storybook`
- 📱 Mobile Adaptation: `postcss-px-to-viewport` + Chrome 66+/Android 8+ compatibility

---

## 📁 Project Structure

```bash
.
├── apps/
│   └── kds/               # Mobile frontend app
├── packages/
│   ├── ui/                # Reusable UI components
│   ├── tailwind-config/   # Tailwind config module
│   ├── eslint-config/     # ESLint Flat config
│   ├── prettier-config/   # Prettier config
│   ├── typescript-config/
│   └── utils/             # Shared utilities
└── turbo.json
```


---

## 📦 Install Dependencies

```bash
pnpm install
```

---

## 🚀 Start Development

```bash
pnpm dev        # Start apps/kds
```

---

## 📚 Storybook for UI Components

```bash
pnpm storybook
```

---

## 🧹 Lint & Format

```bash
pnpm lint       # ESLint check
pnpm format     # Prettier formatting
```

---

## 🎨 Theming System

The project supports **three themes**:

- `theme-default`: Default UI scheme
- `theme-light`: Light mode
- `theme-dark`: Dark mode

### 🧭 Switch Theme (With Zustand + Tailwind)

Use the built-in `ThemeToggleButton` component to change the theme globally:

```tsx
import { ThemeToggleButton } from "@elestyle/ui";

export function Header() {
  return <ThemeToggleButton />;
}
```

Under the hood:

- Zustand manages the `theme` state
- Class is applied to `<html>` as `theme-default`, `theme-light`, or `theme-dark`
- Tailwind uses `:root` CSS variables to adjust colors dynamically

---

## 🧪 Testing

> Not configured yet, but can be extended using Vitest/Jest easily.

---

## 🌍 Browser Compatibility

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

## ✅ Future Improvements

- [ ] Add GitHub Actions CI
- [ ] Improve performance in low-end Android devices
- [ ] Integrate unit testing
- [ ] Finish component docs via Storybook

---

## 📄 License

MIT

