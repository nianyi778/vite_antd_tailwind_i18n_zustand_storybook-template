import { Button } from '@elestyle/ui'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { useLanguageStore } from '@/stores/useLanguageStore'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()
  const lang = useLanguageStore((state) => state.lang)
  const setLang = useLanguageStore((state) => state.setLang)

  const toggleLang = () => {
    const next = lang.startsWith('zh') ? 'en' : 'zh'
    setLang(next)
    i18n.changeLanguage(next)
  }

  return (
    <Button onClick={toggleLang} variant="secondary">
      {lang.startsWith('zh') ? '切换为 English' : 'Switch to 中文'}
    </Button>
  )
}

export default LanguageSwitcher
