import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import zh from './zh.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'zh',
    resources: {
      en: { translation: en },
      zh: { translation: zh },
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
