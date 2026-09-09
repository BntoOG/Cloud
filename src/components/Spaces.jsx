import { useLanguage } from '../context/LanguageContext'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import './Spaces.css'

export default function Spaces() {
  const { t } = useLanguage()
  const sp = t.spaces
  const spaces = sp.items

  return (
    <section id="spaces" className="section spaces">
      <div className="container">
        <SectionHeader
          eyebrow={sp.eyebrow}
          title={sp.title}
          subtitle={sp.subtitle}
        />

        <div className="spaces-grid">
          {spaces.map((space, index) => (
            <Reveal
              as="a"
              key={space.id}
              href={space.link}
              className="card space-card"
              delay={index * 80}
              {...(space.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              aria-label={`Abrir espaço ${space.title}`}
            >
              <span className="space-icon">
                <Icon name={space.icon} size={30} />
              </span>

              <div className="space-body">
                <div className="space-head">
                  <h3>{space.title}</h3>
                  <span className="space-tag">{space.tag}</span>
                </div>
                <p>{space.description}</p>
              </div>

              <span className="space-go" aria-hidden="true">
                {sp.access}
                <Icon name={space.external ? 'external' : 'arrowRight'} size={18} />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
