/**
 * Seção "Integrações e Banco de Dados".
 * Conteúdo conceitual — edite os textos conforme seu foco.
 */

// Etapas do fluxo de dados exibidas no diagrama:
// Sistema A → API → Tratamento de dados → Banco de dados → Sistema B
export const dataFlow = [
  { id: 'sys-a', label: 'Sistema A', sub: 'Origem dos dados', icon: 'app' },
  { id: 'api', label: 'API', sub: 'Comunicação REST', icon: 'plug' },
  { id: 'transform', label: 'Tratamento', sub: 'Validação / ETL', icon: 'transform' },
  { id: 'db', label: 'Banco de Dados', sub: 'Persistência', icon: 'database' },
  { id: 'sys-b', label: 'Sistema B', sub: 'Destino dos dados', icon: 'app' },
]

// Conceitos/competências apresentados em cards
export const integrationConcepts = [
  {
    id: 'apis',
    title: 'APIs REST e SOAP',
    icon: 'plug',
    text: 'Análise e teste de integrações em REST (JSON) e SOAP (XML).',
  },
  {
    id: 'formats',
    title: 'JSON e XML',
    icon: 'code',
    text: 'Leitura e validação das mensagens trocadas entre os sistemas.',
  },
  {
    id: 'transactions',
    title: 'Transactions',
    icon: 'transform',
    text: 'Acompanhamento das transações de ponta a ponta.',
  },
  {
    id: 'logs',
    title: 'Análise de logs',
    icon: 'tool',
    text: 'Investigação da causa dos erros de integração até a solução.',
  },
  {
    id: 'sql',
    title: 'Investigação com SQL',
    icon: 'database',
    text: 'Consultas para achar inconsistências e validar os dados.',
  },
  {
    id: 'automation',
    title: 'Automação com PowerShell',
    icon: 'sparkles',
    text: 'Scripts que automatizam verificações repetitivas do suporte.',
  },
]

// Trecho de código ilustrativo (apenas visual/demonstrativo)
export const codeSnippet = `// Exemplo ilustrativo de integração via API
async function integrarDados() {
  const resposta = await fetch('https://api.sistema-a.com/dados')
  const dados = await resposta.json()

  const tratados = dados
    .filter((item) => item.ativo)
    .map((item) => ({
      id: item.id,
      nome: item.nome.trim(),
      atualizadoEm: new Date().toISOString(),
    }))

  await salvarNoBanco(tratados) // INSERT / UPDATE
  return tratados.length
}`
