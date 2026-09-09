import { contact } from '../data/contact'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import './Contact.css'

export default function Contact() {
  const primary = contact.links[0]

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeader
          eyebrow="Contato"
          title="Vamos conversar"
          subtitle="Vamos trocar ideia sobre tecnologia, projetos e integrações. Me chame no LinkedIn."
          align="center"
        />

        <Reveal className="contact-info contact-info--center">
          <p className="contact-info-text">
            Prefiro concentrar o contato no LinkedIn. É só clicar abaixo:
          </p>

          <ul className="contact-links">
            {contact.links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-link-icon">
                    <Icon name={link.icon} size={20} />
                  </span>
                  <span className="contact-link-body">
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-handle">{link.handle}</span>
                  </span>
                  <Icon name="arrowRight" size={16} className="contact-link-arrow" />
                </a>
              </li>
            ))}
          </ul>

          {primary && (
            <a
              href={primary.href}
              className="btn btn-primary contact-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" size={18} />
              Conectar no LinkedIn
            </a>
          )}
        </Reveal>
      </div>
    </section>
  )
}
