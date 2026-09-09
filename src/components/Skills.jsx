import { skillCategories } from '../data/skills'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import './Skills.css'

// Quantos segmentos preencher por nível (de 3).
const levelSteps = {
  'Básico': 1,
  'Intermediário': 2,
  'Avançado': 3,
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeader
          eyebrow="Tecnologias & Conhecimentos"
          title="Ferramentas com as quais trabalho e estudo"
          subtitle="Conhecimentos organizados por área, com o nível de proficiência em cada um."
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
                {category.items.map((item) => {
                  const steps = levelSteps[item.level]
                  return (
                    <li key={item.name} className="skill-item">
                      <div className="skill-item-top">
                        <span className="skill-name">{item.name}</span>
                        {item.level && (
                          <span className="skill-level">{item.level}</span>
                        )}
                      </div>
                      {steps && (
                        <div
                          className="skill-segments"
                          role="img"
                          aria-label={`${item.name}: nível ${item.level}`}
                        >
                          {[1, 2, 3].map((n) => (
                            <span
                              key={n}
                              className={`skill-segment ${n <= steps ? 'is-filled' : ''}`}
                            />
                          ))}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
