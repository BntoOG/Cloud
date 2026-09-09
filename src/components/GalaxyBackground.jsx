import { useEffect, useRef } from 'react'
import './GalaxyBackground.css'

/**
 * Fundo animado estilo galáxia (100% Canvas, sem libs).
 *
 * Versão "com mais movimento e definição":
 * - As estrelas orbitam o centro (rotação diferencial, tipo galáxia em espiral):
 *   as de dentro giram mais rápido que as de fora.
 * - Cada estrela é desenhada a partir de um sprite de brilho pré-renderizado
 *   (glow suave, sem serrilhado) — fica nítida em qualquer resolução.
 * - Piscam (twinkle) e têm parallax que segue o mouse.
 * - Estrelas cadentes cruzam a tela de tempos em tempos.
 * - Nebulosas nas cores do portfólio (índigo/roxo) que oscilam de posição.
 *
 * UX/performance:
 * - Fixo atrás de todo o conteúdo (z-index negativo), não captura clique.
 * - Adapta as cores ao tema claro/escuro (data-theme no <html>).
 * - Respeita "prefers-reduced-motion" (desenha um céu estático).
 * - DPR até 3 para nitidez; pausa quando a aba fica oculta.
 */
export default function GalaxyBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 3)
    let stars = []
    let nebulae = []
    let shootingStars = []
    let spriteCache = {}
    let rafId = 0
    let running = true
    let lastTime = 0
    let nextShootingAt = 0

    // Paleta por tema. Em tema claro, o "espaço" é bem mais sutil.
    const getPalette = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light'
      return isLight
        ? {
            starColors: ['99, 102, 241', '168, 85, 247', '79, 70, 229'],
            starAlpha: 0.55,
            nebulaAlpha: 0.1,
            spin: 0.6,
          }
        : {
            starColors: ['255, 255, 255', '199, 210, 254', '196, 181, 253', '165, 180, 252', '129, 140, 248'],
            starAlpha: 1,
            nebulaAlpha: 0.24,
            spin: 1,
          }
    }

    let palette = getPalette()

    const pointer = { x: 0, y: 0, tx: 0, ty: 0 }
    const rand = (min, max) => Math.random() * (max - min) + min

    /**
     * Cria (e guarda em cache) um sprite de estrela: um disco com brilho
     * radial na cor pedida. Desenhar esse sprite escalado é barato e nítido.
     */
    const getSprite = (color) => {
      if (spriteCache[color]) return spriteCache[color]
      const size = 64
      const off = document.createElement('canvas')
      off.width = size
      off.height = size
      const octx = off.getContext('2d')
      const c = size / 2
      const grad = octx.createRadialGradient(c, c, 0, c, c, c)
      grad.addColorStop(0, `rgba(${color}, 1)`)
      grad.addColorStop(0.25, `rgba(${color}, 0.85)`)
      grad.addColorStop(0.5, `rgba(${color}, 0.25)`)
      grad.addColorStop(1, `rgba(${color}, 0)`)
      octx.fillStyle = grad
      octx.beginPath()
      octx.arc(c, c, c, 0, Math.PI * 2)
      octx.fill()
      spriteCache[color] = off
      return off
    }

    const buildScene = () => {
      spriteCache = {}
      const area = width * height
      const starCount = Math.min(Math.round(area / 4200), 520)
      const cx = width / 2
      const cy = height / 2
      const maxR = Math.hypot(width, height) / 2

      stars = Array.from({ length: starCount }, () => {
        const depth = rand(0.15, 1)
        // Coordenadas polares em torno do centro (para a rotação da galáxia).
        const radius = Math.pow(Math.random(), 0.7) * maxR + 20
        const angle = rand(0, Math.PI * 2)
        // Velocidade angular: mais rápida perto do centro (rotação diferencial).
        const angularSpeed = ((0.06 + 0.5 / (radius * 0.02 + 1)) * (Math.random() * 0.5 + 0.75)) / 1000
        return {
          radius,
          angle,
          angularSpeed,
          depth,
          size: depth * rand(1.1, 3.2),
          color: palette.starColors[Math.floor(Math.random() * palette.starColors.length)],
          baseAlpha: rand(0.4, 1) * palette.starAlpha,
          twinkleSpeed: rand(0.5, 2.2),
          phase: rand(0, Math.PI * 2),
        }
      })

      nebulae = [
        { baseX: 0.22, baseY: 0.28, r: 0.55, color: '99, 102, 241', speed: 0.00009, phase: 0, amp: 0.07 },
        { baseX: 0.8, baseY: 0.3, r: 0.6, color: '168, 85, 247', speed: 0.00012, phase: 2, amp: 0.08 },
        { baseX: 0.5, baseY: 0.82, r: 0.65, color: '79, 70, 229', speed: 0.00007, phase: 4, amp: 0.06 },
        { baseX: 0.9, baseY: 0.78, r: 0.45, color: '147, 51, 234', speed: 0.00014, phase: 1, amp: 0.09 },
        { baseX: 0.12, baseY: 0.7, r: 0.4, color: '129, 140, 248', speed: 0.0001, phase: 3, amp: 0.07 },
      ]

      shootingStars = []
      nextShootingAt = 1500
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 3)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildScene()
    }

    const drawNebulae = (t) => {
      ctx.globalCompositeOperation = 'lighter'
      for (const n of nebulae) {
        const cx = (n.baseX + Math.sin(t * n.speed + n.phase) * n.amp) * width
        const cy = (n.baseY + Math.cos(t * n.speed + n.phase) * n.amp) * height
        const radius = n.r * Math.max(width, height)
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
        grad.addColorStop(0, `rgba(${n.color}, ${palette.nebulaAlpha})`)
        grad.addColorStop(0.5, `rgba(${n.color}, ${palette.nebulaAlpha * 0.35})`)
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, width, height)
      }
      ctx.globalCompositeOperation = 'source-over'
    }

    const spawnShootingStar = () => {
      const fromLeft = Math.random() > 0.5
      const startX = fromLeft ? rand(0, width * 0.3) : rand(width * 0.7, width)
      const startY = rand(0, height * 0.5)
      const angle = fromLeft ? rand(0.15, 0.5) : Math.PI - rand(0.15, 0.5)
      const speed = rand(0.7, 1.2)
      shootingStars.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: rand(120, 260),
        life: 0,
        maxLife: rand(700, 1100),
        color: palette.starColors[0],
      })
    }

    const drawShootingStars = (dt, t) => {
      if (t >= nextShootingAt) {
        spawnShootingStar()
        nextShootingAt = t + rand(2600, 6000)
      }
      ctx.globalCompositeOperation = 'lighter'
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i]
        s.life += dt
        s.x += s.vx * dt
        s.y += s.vy * dt
        const progress = s.life / s.maxLife
        if (progress >= 1) {
          shootingStars.splice(i, 1)
          continue
        }
        const fade = Math.sin(progress * Math.PI) // entra e sai suave
        const tailX = s.x - s.vx * s.len
        const tailY = s.y - s.vy * s.len
        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY)
        grad.addColorStop(0, `rgba(${s.color}, ${0.9 * fade})`)
        grad.addColorStop(1, `rgba(${s.color}, 0)`)
        ctx.strokeStyle = grad
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(tailX, tailY)
        ctx.stroke()
      }
      ctx.globalCompositeOperation = 'source-over'
    }

    const drawStars = (dt, t) => {
      pointer.x += (pointer.tx - pointer.x) * 0.04
      pointer.y += (pointer.ty - pointer.y) * 0.04

      const cx = width / 2
      const cy = height / 2

      ctx.globalCompositeOperation = 'lighter'
      for (const s of stars) {
        // Rotação da galáxia.
        s.angle += s.angularSpeed * palette.spin * dt

        const baseX = cx + Math.cos(s.angle) * s.radius
        const baseY = cy + Math.sin(s.angle) * s.radius * 0.82 // leve achatamento (perspectiva)

        const px = baseX + pointer.x * s.depth * 26
        const py = baseY + pointer.y * s.depth * 26

        const twinkle = 0.5 + 0.5 * Math.sin(s.phase + t * 0.001 * s.twinkleSpeed)
        const alpha = Math.max(0, Math.min(1, s.baseAlpha * twinkle))

        const sprite = getSprite(s.color)
        // O sprite tem glow, então desenhamos num raio ~3x o "core".
        const r = s.size * 3
        ctx.globalAlpha = alpha
        ctx.drawImage(sprite, px - r, py - r, r * 2, r * 2)
      }
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'
    }

    const render = (t) => {
      if (!running) return
      const dt = lastTime ? Math.min(t - lastTime, 50) : 16
      lastTime = t

      ctx.clearRect(0, 0, width, height)
      drawNebulae(t)
      drawStars(dt, t)
      drawShootingStars(dt, t)
      rafId = requestAnimationFrame(render)
    }

    const renderStatic = () => {
      ctx.clearRect(0, 0, width, height)
      drawNebulae(0)
      const cx = width / 2
      const cy = height / 2
      ctx.globalCompositeOperation = 'lighter'
      for (const s of stars) {
        const px = cx + Math.cos(s.angle) * s.radius
        const py = cy + Math.sin(s.angle) * s.radius * 0.82
        const sprite = getSprite(s.color)
        const r = s.size * 3
        ctx.globalAlpha = s.baseAlpha
        ctx.drawImage(sprite, px - r, py - r, r * 2, r * 2)
      }
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'
    }

    const onPointerMove = (e) => {
      pointer.tx = (e.clientX / width) * 2 - 1
      pointer.ty = (e.clientY / height) * 2 - 1
    }

    const onThemeChange = () => {
      palette = getPalette()
      buildScene()
      if (reduceMotion) renderStatic()
    }

    const themeObserver = new MutationObserver(onThemeChange)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    const onVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(rafId)
      } else if (!reduceMotion) {
        running = true
        lastTime = 0
        rafId = requestAnimationFrame(render)
      }
    }

    resize()
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)

    if (reduceMotion) {
      renderStatic()
    } else {
      window.addEventListener('pointermove', onPointerMove, { passive: true })
      rafId = requestAnimationFrame(render)
    }

    return () => {
      running = false
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibility)
      themeObserver.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="galaxy-bg" aria-hidden="true" />
}
