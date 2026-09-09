import { timeline } from '../data/experience'
import Icon, { timelineIconMap } from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import './Experience.css'

const typeLabels = {
  work: 'Experiência',
  education: 'Formação',
  course: 'Curso',
  certification: 'Certificação',
  project: 'Projeto',
}

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeader
          eyebrow="Experiência & Formação"
          title="Minha trajetória"
          subtitle="Formação, certificações e experiências profissionais."
        />

        <div className="timeline">
          {timeline.map((item, index) => (
            <Reveal key={item.id} as="div" className="timeline-item" delay={index * 60}>
              <div className="timeline-marker">
                <Icon name={timelineIconMap[item.type] || 'rocket'} size={18} />
              </div>

              <div className="card timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-type">{typeLabels[item.type] || 'Item'}</span>
                  <span className="timeline-period">{item.period}</span>
                </div>

                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-place">{item.place}</p>
                <p className="timeline-description">{item.description}</p>

                {item.tags?.length > 0 && (
                  <div className="timeline-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="chip">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
