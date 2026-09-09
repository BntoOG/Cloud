import { profile } from '../data/profile'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeader
          eyebrow="Sobre mim"
          title="Quem sou e para onde caminho"
          subtitle="Um pouco de quem eu sou e do que me move na tecnologia."
        />

        <div className="about-grid">
          <Reveal className="about-text">
            {profile.about.map((paragraph, i) => (
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
              <h3>Objetivos profissionais</h3>
              <ul className="about-list">
                {profile.objectives.map((item) => (
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
              <h3>Interesses em tecnologia</h3>
              <div className="about-chips">
                {profile.interests.map((item) => (
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
