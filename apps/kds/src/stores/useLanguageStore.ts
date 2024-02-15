import { createStore } from './createStore'

interface LanguageState {
  lang: string
  setLang: (lang: string) => void
}

export const useLanguageStore = createStore<LanguageState>(
  (set) => ({
    lang: 'zh',
    setLang: (lang) => set({ lang }),
  }),
  'LanguageStore',
)
