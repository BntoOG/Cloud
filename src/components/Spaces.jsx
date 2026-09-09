import { spaces } from '../data/spaces'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import './Spaces.css'

export default function Spaces() {
  return (
    <section id="spaces" className="section spaces">
      <div className="container">
        <SectionHeader
          eyebrow="Espaços"
          title="Áreas de projetos"
          subtitle="Atalhos para os espaços onde desenvolvo experimentos: jogos simples e ferramentas do dia a dia."
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
                Acessar
                <Icon name={space.external ? 'external' : 'arrowRight'} size={18} />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
