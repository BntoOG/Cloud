import { useScrollReveal } from '../../hooks/useScrollReveal'

/**
 * Wrapper de animação de entrada.
 * Aplica a classe .reveal e adiciona .is-visible quando entra na tela.
 *
 * Props:
 * - as: elemento/componente a renderizar (padrão 'div')
 * - delay: atraso em ms para efeito escalonado
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
