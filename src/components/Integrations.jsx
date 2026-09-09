import { codeSnippet } from '../data/integrations'
import { useLanguage } from '../context/LanguageContext'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import './Integrations.css'

export default function Integrations() {
  const { t } = useLanguage()
  const int = t.integrations
  const dataFlow = int.dataFlow
  const integrationConcepts = int.concepts

  return (
    <section id="integrations" className="section integrations">
      <div className="container">
        <SectionHeader
          eyebrow={int.eyebrow}
          title={int.title}
          subtitle={int.subtitle}
        />

        {/* Diagrama de fluxo: Sistema A → API → Tratamento → Banco → Sistema B */}
        <Reveal className="flow">
          <div className="flow-track">
            {dataFlow.map((node, index) => (
              <div className="flow-step" key={node.id}>
                <div className="flow-node">
                  <span className="flow-node-icon">
                    <Icon name={node.icon} size={22} />
                  </span>
                  <span className="flow-node-label">{node.label}</span>
                  <span className="flow-node-sub">{node.sub}</span>
                </div>
                {index < dataFlow.length - 1 && (
                  <span className="flow-arrow" aria-hidden="true">
                    <Icon name="arrowRight" size={20} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="integrations-body">
          {/* Cards de conceitos */}
          <div className="concepts-grid">
            {integrationConcepts.map((concept, index) => (
              <Reveal
                key={concept.id}
                className="card concept-card"
                delay={index * 60}
              >
                <span className="concept-icon">
                  <Icon name={concept.icon} size={18} />
                </span>
                <h3>{concept.title}</h3>
                <p>{concept.text}</p>
              </Reveal>
            ))}
          </div>

          {/* Janela de código ilustrativa */}
          <Reveal className="code-block" delay={120}>
            <div className="code-block-bar">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
              <span className="code-block-title">{int.codeTitle}</span>
            </div>
            <pre className="code-block-body">
              <code>{codeSnippet}</code>
            </pre>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
