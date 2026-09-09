import { profile } from '../data/profile'
import { useLanguage } from '../context/LanguageContext'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import './About.css'

export default function About() {
  const { t } = useLanguage()
  const about = t.about
  const paragraphs = about.paragraphs.map((p) => p.replace('{age}', profile.age))

  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeader
          eyebrow={about.eyebrow}
          title={about.title}
          subtitle={about.subtitle}
        />

        <div className="about-grid">
          <Reveal className="about-text">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            <div className="about-info">
              <span className="chip">
                <Icon name="location" size={14} />
                {profile.location}
              </span>
            </div>
          </Reveal>

          <div className="about-cards">
            <Reveal className="card about-card" delay={80}>
              <div className="about-card-icon">
                <Icon name="rocket" size={20} />
              </div>
              <h3>{about.objectivesTitle}</h3>
              <ul className="about-list">
                {about.objectives.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="card about-card" delay={160}>
              <div className="about-card-icon">
                <Icon name="sparkles" size={20} />
              </div>
              <h3>{about.interestsTitle}</h3>
              <div className="about-chips">
                {about.interests.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
