import { profile } from '../data/profile'
import { useLanguage } from '../context/LanguageContext'
import Icon from './ui/Icon'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()
  const hero = t.hero
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow hero-glow--1" />
        <div className="hero-glow hero-glow--2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          {profile.available && (
            <span className="hero-badge">
              <span className="hero-badge-dot" />
              {hero.badge}
            </span>
          )}

          <h1 className="hero-title">
            {profile.name}
          </h1>

          <p className="hero-role">
            <Icon name="code" size={18} />
            {hero.role}
          </p>

          <p className="hero-tagline text-gradient">{hero.tagline}</p>

          <p className="hero-bio">{hero.shortBio}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              {hero.ctaProjects}
              <Icon name="arrowRight" size={18} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              {hero.ctaContact}
              <Icon name="mail" size={18} />
            </a>
          </div>

          {hero.stats?.length > 0 && (
            <dl className="hero-stats">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="hero-stat">
                  <dt className="hero-stat-value text-gradient">{stat.value}</dt>
                  <dd className="hero-stat-label">{stat.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {/* Elemento visual: janela de código com fluxo de integração */}
        <div className="hero-visual" aria-hidden="true">
          <div className="code-window">
            <div className="code-window-bar">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
              <span className="code-window-title">integracao.js</span>
            </div>
            <pre className="code-window-body">
              <code>
                <span className="tok-comment">// pipeline de dados</span>{'\n'}
                <span className="tok-key">const</span> dados = <span className="tok-fn">await</span> api.<span className="tok-fn">get</span>(<span className="tok-str">'/clientes'</span>){'\n'}
                {'\n'}
                <span className="tok-key">const</span> tratados = dados{'\n'}
                {'  '}.<span className="tok-fn">filter</span>(c =&gt; c.ativo){'\n'}
                {'  '}.<span className="tok-fn">map</span>(normalizar){'\n'}
                {'\n'}
                <span className="tok-fn">await</span> db.<span className="tok-fn">salvar</span>(tratados){'\n'}
                <span className="tok-comment">// ✓ sincronizado</span>
              </code>
            </pre>
          </div>

          <div className="hero-flow">
            {['REST', 'JSON', 'XML', 'SQL'].map((t, i) => (
              <span key={t} className="hero-flow-node" style={{ '--i': i }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Rolar para a próxima seção">
        <span className="hero-scroll-mouse" />
      </a>
    </section>
  )
}
