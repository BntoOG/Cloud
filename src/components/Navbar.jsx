import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { useLanguage } from '../context/LanguageContext'
import { useActiveSection } from '../hooks/useActiveSection'
import Icon from './ui/Icon'
import ThemeToggle from './ui/ThemeToggle'
import LangToggle from './ui/LangToggle'
import './Navbar.css'

export default function Navbar() {
  const { t } = useLanguage()
  const navLinks = t.nav
  const sectionIds = navLinks.map((l) => l.id)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloqueia o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const initials = profile.name
    .replace(/\[|\]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('') || 'DEV'

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="container navbar-inner" aria-label="Navegação principal">
        <a href="#home" className="navbar-brand" onClick={() => setMenuOpen(false)}>
          <span className="navbar-logo" aria-hidden="true">{initials}</span>
          <span className="navbar-brand-text">{profile.name}</span>
        </a>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'is-active' : ''}
                aria-current={active === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            className="navbar-burger"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`navbar-mobile ${menuOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'is-active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {menuOpen && <div className="navbar-overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  )
}
