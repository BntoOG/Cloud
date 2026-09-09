import { useMemo, useState } from 'react'
import { certificates, certificateThemes } from '../data/certificates'
import { useLanguage } from '../context/LanguageContext'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import './Certificates.css'

const INITIAL_VISIBLE = 12

export default function Certificates() {
  const { t } = useLanguage()
  const ui = t.certificates
  const ALL = ui.all

  const [active, setActive] = useState(ALL)
  const [expanded, setExpanded] = useState(false)

  // Ordena os temas por quantidade (mais certificados primeiro)
  const themes = useMemo(() => {
    const counts = certificates.reduce((acc, c) => {
      acc[c.theme] = (acc[c.theme] || 0) + 1
      return acc
    }, {})
    const ordered = [...certificateThemes].sort((a, b) => (counts[b] || 0) - (counts[a] || 0))
    return [ALL, ...ordered]
  }, [ALL])

  const activeTheme = themes.includes(active) ? active : ALL
  const filtered = useMemo(
    () => (activeTheme === ALL ? certificates : certificates.filter((c) => c.theme === activeTheme)),
    [activeTheme, ALL]
  )

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_VISIBLE)

  const selectTheme = (theme) => {
    setActive(theme)
    setExpanded(false)
  }

  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <SectionHeader
          eyebrow={ui.eyebrow}
          title={ui.title}
          subtitle={ui.subtitle.replace('{count}', certificates.length)}
        />

        <Reveal className="cert-filters" role="tablist" aria-label={ui.eyebrow}>
          {themes.map((theme) => {
            const count = theme === ALL
              ? certificates.length
              : certificates.filter((c) => c.theme === theme).length
            return (
              <button
                key={theme}
                type="button"
                role="tab"
                aria-selected={activeTheme === theme}
                className={`cert-filter ${activeTheme === theme ? 'is-active' : ''}`}
                onClick={() => selectTheme(theme)}
              >
                {theme}
                <span className="cert-filter-count">{count}</span>
              </button>
            )
          })}
        </Reveal>

        <div className="cert-grid">
          {visible.map((cert, index) => (
            <Reveal
              as="a"
              key={cert.file}
              href={`certificados/${cert.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card cert-card"
              delay={Math.min(index, 8) * 40}
              aria-label={cert.title}
            >
              <span className="cert-icon">
                <Icon name="award" size={20} />
              </span>
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-theme">{cert.theme}</span>
              </div>
              <Icon name="external" size={16} className="cert-open" />
            </Reveal>
          ))}
        </div>

        {filtered.length > INITIAL_VISIBLE && (
          <div className="cert-more">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? ui.showLess : ui.showAll.replace('{count}', filtered.length)}
              <Icon name={expanded ? 'close' : 'arrowRight'} size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
