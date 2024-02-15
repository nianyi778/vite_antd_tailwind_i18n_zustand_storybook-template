import { Button, SegmentedControl } from '@elestyle/ui'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import LanguageSwitcher from './components/LanguageSwitcher'
import i18n from './i18n'
import { useLanguageStore } from './stores/useLanguageStore'
import { useThemeStore } from './stores/useThemeStore'
import { useUserStore } from './stores/useUserStore'

const Home = () => {
  const { t } = useTranslation()
  const { theme, setTheme } = useThemeStore()
  const setLang = useLanguageStore((s) => s.setLang)
  const setCookie = () => {
    useUserStore.getState().setToken(Date.now().toString())
  }
  useEffect(() => {
    setLang(i18n.language)
  }, [setLang])

  return (
    <div className="p-4 text-center">
      <SegmentedControl
        options={['default', 'light', 'dark']}
        value={theme}
        onChange={(value) => setTheme(value)}
      />
      <Button>Hello from UI</Button>
      <LanguageSwitcher />
      <h1 className="text-2xl font-bold text-amber-900">{t('welcome')}</h1>
      <button onClick={setCookie}>set cookie</button>
    </div>
  )
}

export default Home
