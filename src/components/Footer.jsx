import { contact } from '../data/contact'
import { navLinks } from '../data/navigation'
import { profile } from '../data/profile'
import Icon from './ui/Icon'
import './Footer.css'

const isValidLink = (url) => Boolean(url) && !url.startsWith('[')

export default function Footer() {
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
          <p>{profile.role}</p>
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
          © {year} {profile.name}. Desenvolvido com React.
        </p>
        <a href="#home" className="footer-top" aria-label="Voltar ao topo">
          Voltar ao topo
          <Icon name="arrowRight" size={14} style={{ transform: 'rotate(-90deg)' }} />
        </a>
      </div>
    </footer>
  )
}
