import { ReactNode, useEffect } from 'react'

import { useThemeStore } from '@/stores'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme } = useThemeStore()

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('theme-default', 'theme-light', 'theme-dark')
    root.classList.add(`theme-${theme}`)
  }, [theme])

  return <>{children}</>
}
