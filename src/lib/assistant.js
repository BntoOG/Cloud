/**
 * Cérebro do Assistente do Portfólio (100% local, gratuito, sem backend/API).
 *
 * Como funciona:
 * - Agrega o conteúdo dos arquivos de dados (perfil, skills, projetos, etc).
 * - Normaliza a pergunta do usuário (minúsculas, sem acentos).
 * - Pontua "intenções" por palavras-chave e responde com base nos dados reais.
 *
 * Assim, as respostas ficam sempre em sincronia com o conteúdo do site:
 * ao editar os arquivos em src/data, o assistente passa a responder atualizado.
 */
import { profile } from '../data/profile'
import { skillCategories } from '../data/skills'
import { projects } from '../data/projects'
import { timeline } from '../data/experience'
import { integrationConcepts } from '../data/integrations'
import { contact } from '../data/contact'
import { toolsKnowledge } from '../data/toolsKnowledge'

/* ------------------------------------------------------------------ */
/* Utilidades                                                          */
/* ------------------------------------------------------------------ */

/** Remove acentos, coloca em minúsculas e limpa espaços. */
export function normalize(text = '') {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Um valor é placeholder se estiver vazio ou entre colchetes ([ ... ]). */
function isPlaceholder(value) {
  return !value || /\[.*\]/.test(String(value))
}

/** Texto amigável para valores que ainda são placeholders. */
function orPending(value, fallback) {
  return isPlaceholder(value) ? fallback : value
}

/** Escapa caracteres especiais de regex em um termo de busca. */
function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Procura, na base de ferramentas, o item cuja palavra-chave aparece na
 * pergunta. Usa correspondência por "palavra inteira" (word boundary) e dá
 * preferência ao termo mais longo/específico (ex.: "sql server" antes de "sql").
 * Retorna a resposta detalhada da ferramenta, ou null se nada casar.
 */
function findToolAnswer(query) {
  let best = { length: 0, answer: null }

  for (const tool of toolsKnowledge) {
    for (const kw of tool.keywords) {
      const pattern = new RegExp(`\\b${escapeRegExp(kw)}\\b`)
      if (pattern.test(query) && kw.length > best.length) {
        best = { length: kw.length, answer: tool.answer }
      }
    }
  }

  return best.answer
}

/* ------------------------------------------------------------------ */
/* Base de conhecimento derivada dos dados                            */
/* ------------------------------------------------------------------ */

const displayName = orPending(profile.name, 'o profissional')
const displayRole = orPending(profile.role, 'profissional de Tecnologia da Informação')

// Lista achatada de tecnologias reais (ignora itens "[preencher]")
const allSkills = skillCategories.flatMap((cat) =>
  cat.items
    .filter((item) => !isPlaceholder(item.name))
    .map((item) => ({ ...item, category: cat.title, categoryId: cat.id })),
)

/* ------------------------------------------------------------------ */
/* Sugestões rápidas (chips exibidos no início da conversa)           */
/* ------------------------------------------------------------------ */

export const quickSuggestions = [
  'Com quais tecnologias você trabalha?',
  'O que é SQL e como você usa?',
  'Me explica sobre integração entre sistemas',
  'Como você trabalha com banco de dados?',
  'Quais casos você já resolveu?',
  'Como faço pra falar com você?',
]

export const welcomeMessage =
  `Oi! 👋 Sou o assistente deste portfólio. ` +
  `Posso explicar as ferramentas que o Eduardo usa (SQL, integração, banco de dados, ` +
  `APIs, PowerShell...), além de trajetória, projetos e contato. ` +
  `Pergunta o que quiser ou escolhe uma sugestão aqui embaixo.`

/* ------------------------------------------------------------------ */
/* Geradores de resposta por seção                                    */
/* ------------------------------------------------------------------ */

function answerAbout() {
  const paragraphs = profile.about.filter((p) => !isPlaceholder(p))
  const base = paragraphs.length
    ? paragraphs[0]
    : `${displayName} está em início de carreira na área de T.I., com foco em integração de sistemas, desenvolvimento e banco de dados.`

  const goals = (profile.objectives || []).filter((g) => !isPlaceholder(g))
  const goalsText = goals.length
    ? `\n\nObjetivos profissionais:\n${goals.map((g) => `• ${g}`).join('\n')}`
    : ''

  return `${base}${goalsText}\n\nQuer saber mais sobre a formação e experiências? É só perguntar. 🙂`
}

function answerSkills(query) {
  // Se o usuário citou uma tecnologia específica, responde direto sobre ela.
  const mentioned = allSkills.find((s) => query.includes(normalize(s.name)))
  if (mentioned) {
    const level =
      typeof mentioned.level === 'number' ? ` (nível de proficiência: ${mentioned.level}%)` : ''
    return `Sim! ${mentioned.name} faz parte dos conhecimentos, na categoria "${mentioned.category}"${level}.`
  }

  // Pergunta específica por linguagens
  if (/(linguagem|linguagens)/.test(query)) {
    const langs = allSkills.filter((s) => s.categoryId === 'languages')
    if (langs.length) {
      return `Linguagens de estudo/trabalho: ${langs.map((s) => s.name).join(', ')}.`
    }
  }

  // Visão geral por categoria
  const lines = skillCategories
    .map((cat) => {
      const items = cat.items.filter((i) => !isPlaceholder(i.name)).map((i) => i.name)
      return items.length ? `• ${cat.title}: ${items.join(', ')}` : null
    })
    .filter(Boolean)

  if (!lines.length) {
    return 'As tecnologias ainda estão sendo cadastradas. Volte em breve!'
  }

  return `Estas são as principais tecnologias e conhecimentos:\n\n${lines.join(
    '\n',
  )}\n\nQuer detalhes de alguma delas? Pode citar o nome. 😉`
}

function answerProjects(query) {
  // Filtra por categoria, se citada
  const categories = Array.from(new Set(projects.map((p) => p.category)))
  const matchedCategory = categories.find((c) => query.includes(normalize(c)))
  const list = matchedCategory
    ? projects.filter((p) => p.category === matchedCategory)
    : projects

  if (!list.length) {
    return 'Ainda não há projetos cadastrados nessa categoria.'
  }

  const intro = matchedCategory
    ? `Projetos na categoria "${matchedCategory}":`
    : `Alguns projetos do portfólio (${list.length} no total):`

  const lines = list.slice(0, 5).map((p) => {
    const name = orPending(p.title, 'Projeto')
    return `• ${name} — ${p.description} [${p.tech.join(', ')}]`
  })

  return `${intro}\n\n${lines.join(
    '\n',
  )}\n\nRole até a seção "Projetos" para ver todos os detalhes e links. 🚀`
}

function answerExperience() {
  const items = timeline.filter((t) => !isPlaceholder(t.title))
  if (!items.length) {
    return (
      'A trajetória (formação, cursos, certificações e experiências) está sendo ' +
      'atualizada. Confira em breve na seção "Experiência".'
    )
  }

  const typeLabels = {
    work: 'Experiência',
    education: 'Formação',
    course: 'Curso',
    certification: 'Certificação',
    project: 'Projeto',
  }

  const lines = items
    .slice(0, 6)
    .map((t) => `• [${typeLabels[t.type] || 'Item'}] ${t.title} — ${orPending(t.place, '')} (${orPending(t.period, 'período a definir')})`)

  return `Resumo da trajetória:\n\n${lines.join(
    '\n',
  )}\n\nA seção "Experiência" traz a linha do tempo completa.`
}

function answerIntegrations() {
  const concepts = integrationConcepts.map((c) => `• ${c.title}: ${c.text}`).join('\n')
  return (
    `Integrações são o meu foco: APIs REST e SOAP, JSON e XML, transactions e SQL.\n\n` +
    `${concepts}\n\n` +
    `Veja a seção "Integrações" para o diagrama e um exemplo de código. 🔌`
  )
}

function answerContact() {
  const links = contact.links
    .filter((l) => !isPlaceholder(l.href))
    .map((l) => `• ${l.label}: ${l.href}`)

  const email = isPlaceholder(contact.email) ? null : contact.email
  const parts = []

  if (email) parts.push(`• E-mail: ${email}`)
  parts.push(...links)

  if (!parts.length) {
    return (
      'Os dados de contato estão sendo preenchidos. Enquanto isso, use o ' +
      'formulário na seção "Contato" para enviar uma mensagem. ✉️'
    )
  }

  return `Você pode entrar em contato por aqui:\n\n${parts.join(
    '\n',
  )}\n\nTambém há um formulário na seção "Contato". ✉️`
}

function answerHelp() {
  return (
    'Posso ajudar com informações sobre:\n' +
    '• Ferramentas e tecnologias (ex.: SQL, integração, banco de dados, APIs REST/SOAP, JSON, XML, PowerShell) — pode perguntar "o que é X?"\n' +
    '• Trajetória, formação e experiências\n' +
    '• Projetos e casos práticos\n' +
    '• Como entrar em contato\n\n' +
    'É só perguntar! 🙂'
  )
}

/* ------------------------------------------------------------------ */
/* Definição das intenções (palavras-chave -> resposta)               */
/* ------------------------------------------------------------------ */

const intents = [
  {
    id: 'greeting',
    keywords: ['oi', 'ola', 'opa', 'eae', 'e ai', 'bom dia', 'boa tarde', 'boa noite', 'hello', 'hi'],
    respond: () =>
      `Olá! Que bom te ver por aqui. 👋 Posso falar sobre tecnologias, projetos, trajetória, integrações ou contato. O que você quer saber?`,
  },
  {
    id: 'thanks',
    keywords: ['obrigado', 'obrigada', 'valeu', 'vlw', 'agradeco', 'thanks', 'grato', 'grata'],
    respond: () => 'Por nada! Se tiver mais alguma dúvida sobre o portfólio, é só chamar. 😊',
  },
  {
    id: 'help',
    keywords: ['ajuda', 'ajudar', 'o que voce faz', 'o que voce pode', 'como funciona', 'menu', 'opcoes', 'duvida'],
    respond: answerHelp,
  },
  {
    id: 'skills',
    keywords: [
      'tecnologia', 'tecnologias', 'linguagem', 'linguagens', 'stack', 'conhece', 'sabe', 'domina',
      'habilidade', 'habilidades', 'skill', 'skills', 'ferramenta', 'ferramentas', 'javascript',
      'sql', 'react', 'html', 'css', 'git', 'github', 'postman', 'mysql', 'json', 'webhook', 'front',
      'frontend', 'front-end',
    ],
    respond: (q) => answerSkills(q),
  },
  {
    id: 'projects',
    keywords: [
      'projeto', 'projetos', 'portfolio de projetos', 'construiu', 'desenvolveu', 'fez', 'criou',
      'trabalhos', 'aplicacao', 'aplicacoes', 'app', 'automacao', 'sistema',
    ],
    respond: (q) => answerProjects(q),
  },
  {
    id: 'experience',
    keywords: [
      'experiencia', 'experiencias', 'formacao', 'trajetoria', 'historia', 'carreira', 'curso',
      'cursos', 'certificacao', 'certificacoes', 'certificado', 'certificados', 'faculdade',
      'graduacao', 'estudou', 'academico', 'timeline', 'linha do tempo', 'onde trabalhou',
    ],
    respond: answerExperience,
  },
  {
    id: 'about',
    keywords: [
      'sobre voce', 'sobre mim', 'quem e', 'quem voce e', 'quem e voce', 'apresenta', 'apresentacao',
      'objetivo', 'objetivos', 'interesse', 'interesses', 'perfil', 'me fale sobre',
    ],
    respond: answerAbout,
  },
  {
    id: 'integrations',
    keywords: [
      'integracao', 'integracoes', 'integrar', 'api', 'apis', 'rest', 'banco de dados', 'banco',
      'database', 'dados', 'etl', 'fluxo de dados', 'fluxo', 'consulta', 'query', 'comunicacao entre',
    ],
    respond: answerIntegrations,
  },
  {
    id: 'contact',
    keywords: [
      'contato', 'contatar', 'falar', 'email', 'e-mail', 'linkedin', 'github', 'rede', 'redes',
      'chamar', 'mensagem', 'curriculo', 'cv',
    ],
    respond: answerContact,
  },
]

/* ------------------------------------------------------------------ */
/* Motor principal                                                    */
/* ------------------------------------------------------------------ */

/**
 * Recebe a pergunta do usuário e devolve a melhor resposta (string).
 * Estratégia: pontua cada intenção pela quantidade de palavras-chave
 * encontradas; a de maior pontuação vence. Sem correspondência => fallback.
 */
export function getAssistantReply(rawInput) {
  const query = normalize(rawInput)

  if (!query) {
    return 'Pode escrever sua pergunta que eu ajudo. 🙂'
  }

  // Prioridade: se a pergunta cita uma ferramenta/tecnologia específica
  // (sql, integração, banco de dados, api, powershell...), responde com a
  // explicação detalhada da base de conhecimento.
  const toolAnswer = findToolAnswer(query)
  if (toolAnswer) {
    return toolAnswer
  }

  let best = { score: 0, intent: null }

  for (const intent of intents) {
    let score = 0
    for (const kw of intent.keywords) {
      if (query.includes(kw)) {
        // Palavras-chave mais longas/específicas valem um pouco mais.
        score += kw.includes(' ') ? 2 : 1
      }
    }
    if (score > best.score) best = { score, intent }
  }

  if (best.intent && best.score > 0) {
    return best.intent.respond(query)
  }

  // Fallback: não entendeu -> orienta o usuário.
  return (
    `Ainda não tenho uma resposta pronta para isso. 🤔 Posso ajudar com: ` +
    `tecnologias, projetos, trajetória, integrações/banco de dados e contato. ` +
    `Tente reformular ou escolha um desses temas.`
  )
}
