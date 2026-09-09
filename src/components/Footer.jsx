import { contact } from '../data/contact'
import { profile } from '../data/profile'
import { useLanguage } from '../context/LanguageContext'
import Icon from './ui/Icon'
import './Footer.css'

const isValidLink = (url) => Boolean(url) && !url.startsWith('[')

export default function Footer() {
  const { t } = useLanguage()
  const navLinks = t.nav
  const year = new Date().getFullYear()
  const socials = contact.links.filter((l) => l.icon !== 'mail' && isValidLink(l.href))

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span aria-hidden="true">{'</>'}</span>
            {profile.name}
          </a>
          <p>{t.hero.role}</p>
        </div>

        <nav className="footer-nav" aria-label="Rodapé">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>{link.label}</a>
          ))}
        </nav>

        <div className="footer-socials">
          {socials.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <Icon name={link.icon} size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {year} {profile.name}. {t.footer.madeWith}
        </p>
        <a href="#home" className="footer-top" aria-label={t.footer.backToTop}>
          {t.footer.backToTop}
          <Icon name="arrowRight" size={14} style={{ transform: 'rotate(-90deg)' }} />
        </a>
      </div>
    </footer>
  )
}
