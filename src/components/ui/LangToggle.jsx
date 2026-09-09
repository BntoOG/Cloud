import { useLanguage } from '../../context/LanguageContext'

/**
 * Botão de alternância de idioma PT / EN.
 */
export default function LangToggle() {
  const { lang, toggleLang, t } = useLanguage()

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={t.a11y.langToggle}
      title={t.a11y.langToggle}
    >
      <span className={lang === 'pt' ? 'is-active' : ''}>PT</span>
      <span className="lang-sep" aria-hidden="true">/</span>
      <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
    </button>
  )
}
