import { useCallback, useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { useLanguage } from '../context/LanguageContext'
import './IntroSplash.css'

/**
 * Animação de abertura exibida a cada acesso ao portfólio.
 * - Simula um terminal (CMD) "rodando o código" do portfólio em linhas verdes.
 * - As linhas aparecem uma a uma, como um log de build/boot, até a página carregar.
 * - Some sozinha quando o "carregamento" termina; pode ser pulada (clique/tecla/botão).
 * - Respeita "prefers-reduced-motion" (mostra tudo de uma vez, transição curta).
 * - Trava o scroll enquanto está visível.
 */

// Linhas do "log" de inicialização. `tag` é destacado (ex.: OK) e `kind`
// controla a cor: 'cmd' (comando digitado), 'ok', 'info' e 'done' (final).
const BOOT_LINES = [
  { kind: 'cmd', text: 'C:\\portfolio> node iniciar-portfolio.js' },
  { kind: 'info', text: 'Inicializando ambiente...' },
  { kind: 'ok', tag: 'OK', text: 'Carregando modulos de integracao' },
  { kind: 'ok', tag: 'OK', text: 'Conectando APIs REST / SOAP (Postman)' },
  { kind: 'ok', tag: 'OK', text: 'Validando JSON / XML / Base64' },
  { kind: 'ok', tag: 'OK', text: 'Estabelecendo tunel SFTP' },
  { kind: 'ok', tag: 'OK', text: 'Executando queries SQL' },
  { kind: 'ok', tag: 'OK', text: 'Compilando interface React' },
  { kind: 'ok', tag: 'OK', text: 'Otimizando assets e cache' },
  { kind: 'done', text: 'Build concluida. Iniciando portfolio...' },
]

export default function IntroSplash() {
  const { t } = useLanguage()
  const [phase, setPhase] = useState('show') // 'show' | 'leaving' | 'done'
  const [visible, setVisible] = useState(0) // quantas linhas já foram "impressas"
  const timers = useRef([])

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Ritmo de impressão das linhas e tempos de saída.
  const STEP = reduced ? 0 : 260 // intervalo entre linhas
  const END_HOLD = reduced ? 500 : 700 // pausa após a última linha
  const FADE = reduced ? 300 : 600 // duração do fade de saída

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

  // Impressão das linhas, uma a uma. Ao terminar, aguarda e sai sozinha.
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    if (reduced) {
      setVisible(BOOT_LINES.length)
      const auto = setTimeout(leave, END_HOLD)
      timers.current.push(auto)
    } else {
      BOOT_LINES.forEach((_, i) => {
        const id = setTimeout(() => setVisible(i + 1), STEP * (i + 1))
        timers.current.push(id)
      })
      const auto = setTimeout(leave, STEP * BOOT_LINES.length + END_HOLD)
      timers.current.push(auto)
    }

    const onKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') leave()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      timers.current.forEach(clearTimeout)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leave])

  if (phase === 'done') return null

  const lines = BOOT_LINES.slice(0, visible)
  const running = visible < BOOT_LINES.length

  return (
    <div
      className={`intro ${phase === 'leaving' ? 'is-leaving' : ''}`}
      role="presentation"
      onClick={leave}
    >
      <div className="term" role="img" aria-label={`${profile.name} — carregando portfólio`}>
        <div className="term-bar">
          <span className="term-dot red" />
          <span className="term-dot yellow" />
          <span className="term-dot green" />
          <span className="term-title">cmd.exe — {profile.name}</span>
        </div>

        <div className="term-body">
          {lines.map((l, i) => (
            <div key={i} className={`term-line ${l.kind}`}>
              {l.kind === 'cmd' && <span className="term-prompt">&gt;</span>}
              {l.tag && <span className="term-tag">[ {l.tag} ]</span>}
              <span className="term-text">{l.text}</span>
              {/* Cursor pisca na última linha enquanto ainda está "rodando" */}
              {i === lines.length - 1 && running && <span className="term-cursor" />}
            </div>
          ))}
          {/* Linha de prompt final com cursor quando termina de "rodar" */}
          {!running && (
            <div className="term-line cmd">
              <span className="term-prompt">&gt;</span>
              <span className="term-cursor" />
            </div>
          )}
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
