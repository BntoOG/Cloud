import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { pt } from '../i18n/pt'
import { en } from '../i18n/en'

const bundles = { pt, en }
const STORAGE_KEY = 'portfolio-lang'

const LanguageContext = createContext({ lang: 'pt', t: pt, setLang: () => {}, toggleLang: () => {} })

function getInitialLang() {
  if (typeof window === 'undefined') return 'pt'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'pt' || stored === 'en') return stored
  // Usa o idioma do navegador; padrão PT.
  const nav = (window.navigator.language || 'pt').toLowerCase()
  return nav.startsWith('en') ? 'en' : 'pt'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR')
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      t: bundles[lang],
      setLang,
      toggleLang: () => setLang((prev) => (prev === 'pt' ? 'en' : 'pt')),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  return useContext(LanguageContext)
}
