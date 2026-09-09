import { useEffect, useRef, useState } from 'react'
import {
  getAssistantReply,
  quickSuggestions,
  welcomeMessage,
} from '../lib/assistant'
import Icon from './ui/Icon'
import './ChatAssistant.css'

let idCounter = 0
const nextId = () => `msg-${++idCounter}`

/**
 * Assistente virtual do portfólio.
 * Botão flutuante que abre um mini chat. As respostas são geradas
 * localmente (sem API/backend) a partir dos dados do site — veja src/lib/assistant.js.
 */
export default function ChatAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: nextId(), from: 'bot', text: welcomeMessage },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)

  const messagesRef = useRef(null)
  const inputRef = useRef(null)
  const panelId = 'chat-assistant-panel'

  // Rola para a última mensagem sempre que algo muda
  useEffect(() => {
    const el = messagesRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, typing, open])

  // Foca o campo ao abrir; fecha com Esc
  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => inputRef.current?.focus(), 120)
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const sendMessage = (rawText) => {
    const text = rawText.trim()
    if (!text || typing) return

    const userMsg = { id: nextId(), from: 'user', text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTyping(true)

    // Pequeno atraso para simular "digitação" e deixar a experiência natural
    const reply = getAssistantReply(text)
    const delay = Math.min(500 + reply.length * 8, 1400)
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: nextId(), from: 'bot', text: reply }])
      setTyping(false)
    }, delay)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(input)
  }

  // Mostra sugestões só enquanto o usuário ainda não perguntou nada
  const showSuggestions = messages.filter((m) => m.from === 'user').length === 0

  return (
    <>
      {/* Botão flutuante */}
      <button
        type="button"
        className={`chat-fab ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Fechar assistente' : 'Abrir assistente virtual'}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <Icon name={open ? 'close' : 'chat'} size={24} />
        {!open && <span className="chat-fab-ping" aria-hidden="true" />}
      </button>

      {/* Painel do chat */}
      <div
        id={panelId}
        className={`chat-panel ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-label="Assistente virtual do portfólio"
        aria-hidden={!open}
      >
        <header className="chat-header">
          <span className="chat-header-avatar" aria-hidden="true">
            <Icon name="bot" size={22} />
          </span>
          <div className="chat-header-info">
            <strong>Assistente do Portfólio</strong>
            <span className="chat-header-status">
              <span className="chat-status-dot" />
              Online • responde sobre o site
            </span>
          </div>
          <button
            type="button"
            className="chat-close"
            onClick={() => setOpen(false)}
            aria-label="Fechar"
          >
            <Icon name="close" size={20} />
          </button>
        </header>

        <div className="chat-messages" ref={messagesRef} aria-live="polite">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-msg chat-msg--${msg.from}`}>
              {msg.from === 'bot' && (
                <span className="chat-msg-avatar" aria-hidden="true">
                  <Icon name="bot" size={16} />
                </span>
              )}
              <div className="chat-bubble">{msg.text}</div>
            </div>
          ))}

          {typing && (
            <div className="chat-msg chat-msg--bot">
              <span className="chat-msg-avatar" aria-hidden="true">
                <Icon name="bot" size={16} />
              </span>
              <div className="chat-bubble chat-typing" aria-label="Digitando">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          {showSuggestions && (
            <div className="chat-suggestions">
              {quickSuggestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  className="chat-suggestion"
                  onClick={() => sendMessage(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>

        <form className="chat-input" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escreva sua pergunta..."
            aria-label="Mensagem para o assistente"
          />
          <button
            type="submit"
            className="chat-send"
            disabled={!input.trim() || typing}
            aria-label="Enviar"
          >
            <Icon name="send" size={18} />
          </button>
        </form>
      </div>
    </>
  )
}
