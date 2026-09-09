import { skillCategories } from '../data/skills'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeader
          eyebrow="Tecnologias & Conhecimentos"
          title="Ferramentas com as quais trabalho e estudo"
          subtitle="Conhecimentos organizados por área. Itens marcados como [preencher] são espaços reservados para atualização."
        />

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Reveal
              key={category.id}
              className="card skill-card"
              delay={index * 70}
            >
              <div className="skill-card-head">
                <span className="skill-card-icon">
                  <Icon name={category.icon} size={20} />
                </span>
                <h3>{category.title}</h3>
              </div>

              <ul className="skill-items">
                {category.items.map((item) => (
                  <li key={item.name} className="skill-item">
                    <div className="skill-item-top">
                      <span className="skill-name">{item.name}</span>
                      {typeof item.level === 'number' && (
                        <span className="skill-percent">{item.level}%</span>
                      )}
                    </div>
                    {typeof item.level === 'number' && (
                      <div
                        className="skill-bar"
                        role="progressbar"
                        aria-valuenow={item.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={item.name}
                      >
                        <span
                          className="skill-bar-fill"
                          style={{ '--level': `${item.level}%` }}
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
