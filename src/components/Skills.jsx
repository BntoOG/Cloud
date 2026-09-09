import { useLanguage } from '../context/LanguageContext'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import './Skills.css'

export default function Skills() {
  const { t } = useLanguage()
  const skills = t.skills

  // Mapeia o rótulo de nível (localizado) para a quantidade de segmentos.
  const stepsByLevel = {
    [skills.levels.basico]: 1,
    [skills.levels.intermediario]: 2,
    [skills.levels.avancado]: 3,
  }

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeader
          eyebrow={skills.eyebrow}
          title={skills.title}
          subtitle={skills.subtitle}
        />

        <div className="skills-grid">
          {skills.categories.map((category, index) => (
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
                  const steps = stepsByLevel[item.level]
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
                          aria-label={`${item.name}: ${item.level}`}
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
