import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'ua' | 'pl'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const STORAGE_KEY = 'site-lang'

const VALID_LANGS: Lang[] = ['en', 'ua', 'pl']

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return VALID_LANGS.includes(stored as Lang) ? (stored as Lang) : 'en'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    const htmlLang = lang === 'ua' ? 'uk' : lang === 'pl' ? 'pl' : 'en'
    document.documentElement.lang = htmlLang
  }, [lang])

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
