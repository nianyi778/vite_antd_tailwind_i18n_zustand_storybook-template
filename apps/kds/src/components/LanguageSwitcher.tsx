import React from 'react'
import { useTranslation } from 'react-i18next'

import { useLanguageStore } from '../stores/useLanguageStore'

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
    <button
      className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
      onClick={toggleLang}
    >
      {lang.startsWith('zh') ? '切换为 English' : 'Switch to 中文'}
    </button>
  )
}

export default LanguageSwitcher
