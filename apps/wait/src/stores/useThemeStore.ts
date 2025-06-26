import { createPersistentStore } from './createStore'

type Theme = 'default' | 'light' | 'dark'

export const useThemeStore = createPersistentStore<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>(
  (set) => ({
    theme: 'default',
    setTheme: (theme) => {
      const root = document.documentElement
      root.classList.remove('theme-default', 'theme-light', 'theme-dark')
      root.classList.add(`theme-${theme}`)
      set({ theme })
    },
  }),
  'theme',
)
