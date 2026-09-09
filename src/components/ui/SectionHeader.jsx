import Reveal from './Reveal'

/**
 * Cabeçalho padrão de seção: eyebrow + título + subtítulo.
 */
export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <Reveal
      className="section-head"
      style={align === 'center' ? { marginInline: 'auto', textAlign: 'center' } : undefined}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  )
}
