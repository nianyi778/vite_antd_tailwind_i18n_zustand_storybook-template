import { cn } from '@elestyle/utils'
import { useEffect } from 'react'
import { useState } from 'react'

import LanguageSwitcher from '@/components/LanguageSwitcher'
import { themeList } from '@/constants/theme'
import i18n from '@/i18n'
import { useLanguageStore } from '@/stores/useLanguageStore'
import { useThemeStore } from '@/stores/useThemeStore'

export default function DebugPanel() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useThemeStore()
  const setLang = useLanguageStore((s) => s.setLang)
  useEffect(() => {
    setLang(i18n.language)
  }, [setLang])

  return (
    <div className="fixed bottom-6 right-6 z-[9999] text-sm">
      <div
        className={cn(
          'rounded-lg bg-muted text-muted-foreground shadow-lg transition-all duration-300',
          open ? 'h-auto w-48 p-4' : 'h-10 w-10 p-2',
        )}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <div className="flex flex-col gap-3">
            <div>
              <div className="mb-1 text-xs text-muted-foreground">语言切换</div>
              <div className="flex flex-wrap gap-1">
                <LanguageSwitcher className="text-xs" />
              </div>
            </div>
            <div>
              <div className="mb-1 text-xs text-muted-foreground">主题切换</div>
              <div className="flex flex-wrap gap-1">
                {themeList.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setTheme(t)
                    }}
                    className={cn(
                      'rounded bg-accent px-2 py-1 text-xs',
                      t === theme && 'bg-primary text-primary-foreground',
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <span className="block h-6 w-6 rounded-full bg-primary"></span>
        )}
      </div>
    </div>
  )
}
