import { useCallback, useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { useLanguage } from '../context/LanguageContext'
import './IntroSplash.css'

/**
 * Animação de abertura exibida a cada acesso ao portfólio.
 * - Mostra a marca (iniciais), o nome e a tagline.
 * - Some sozinha após alguns segundos; pode ser pulada (clique/tecla/botão).
 * - Respeita "prefers-reduced-motion" (transição curta, sem movimento).
 * - Trava o scroll enquanto está visível.
 */
export default function IntroSplash() {
  const { t } = useLanguage()
  const [phase, setPhase] = useState('show') // 'show' | 'leaving' | 'done'
  const timers = useRef([])

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const HOLD = reduced ? 500 : 2000
  const FADE = reduced ? 300 : 650

  const finish = useCallback(() => {
    document.body.style.overflow = ''
  }, [])

  const leave = useCallback(() => {
    setPhase((p) => {
      if (p !== 'show') return p
      const id = setTimeout(() => {
        setPhase('done')
        finish()
      }, FADE)
      timers.current.push(id)
      return 'leaving'
    })
  }, [FADE, finish])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const auto = setTimeout(leave, HOLD)
    timers.current.push(auto)

    const onKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') leave()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      timers.current.forEach(clearTimeout)
      document.body.style.overflow = ''
    }
  }, [leave, HOLD])

  if (phase === 'done') return null

  const initials =
    profile.name
      .replace(/\[|\]/g, '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase())
      .join('') || 'EB'

  return (
    <div
      className={`intro ${phase === 'leaving' ? 'is-leaving' : ''}`}
      role="presentation"
      onClick={leave}
    >
      <div className="intro-inner">
        <span className="intro-logo" aria-hidden="true">
          {initials}
        </span>
        <h1 className="intro-name">{profile.name}</h1>

        {/* Cobrinha perseguindo a maçã (loop) */}
        <div className="snake-scene" aria-hidden="true">
          <div className="snake-orbit">
            <span className="apple" />
            <span className="seg head" />
            <span className="seg s1" />
            <span className="seg s2" />
            <span className="seg s3" />
            <span className="seg s4" />
          </div>
        </div>
      </div>

      <button
        type="button"
        className="intro-skip"
        onClick={(e) => {
          e.stopPropagation()
          leave()
        }}
      >
        {t.a11y.skip}
      </button>
    </div>
  )
}
