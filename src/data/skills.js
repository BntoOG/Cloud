/**
 * Tecnologias e conhecimentos, organizados por categoria.
 *
 * COMO EDITAR:
 * - "level" define o nível e controla o indicador de proficiência.
 *   Valores aceitos: 'Básico' | 'Intermediário' | 'Avançado'.
 *   Remova o campo "level" para ocultar o indicador (ex.: item em andamento).
 */
export const skillCategories = [
  {
    id: 'integrations',
    title: 'Integrações & APIs',
    icon: 'plug',
    items: [
      { name: 'Integração entre sistemas', level: 'Intermediário' },
      { name: 'APIs REST', level: 'Intermediário' },
      { name: 'APIs SOAP', level: 'Intermediário' },
      { name: 'JSON', level: 'Avançado' },
      { name: 'XML', level: 'Intermediário' },
      { name: 'Transactions', level: 'Intermediário' },
      { name: 'Análise de logs de integração', level: 'Intermediário' },
    ],
  },
  {
    id: 'database',
    title: 'Banco de Dados',
    icon: 'database',
    items: [
      { name: 'SQL', level: 'Avançado' },
      { name: 'SQL Server', level: 'Intermediário' },
      { name: 'Oracle', level: 'Básico' },
      { name: 'Elaboração de queries', level: 'Avançado' },
    ],
  },
  {
    id: 'automation',
    title: 'Automação & Scripts',
    icon: 'code',
    items: [
      { name: 'PowerShell', level: 'Intermediário' },
      { name: 'Automação de verificações', level: 'Intermediário' },
    ],
  },
  {
    id: 'data',
    title: 'Análise de Dados',
    icon: 'transform',
    items: [
      { name: 'Validação de dados', level: 'Intermediário' },
      { name: 'Investigação de inconsistências', level: 'Intermediário' },
      { name: 'Verificação de informações', level: 'Intermediário' },
    ],
  },
  {
    id: 'tools',
    title: 'Ferramentas',
    icon: 'tool',
    items: [
      { name: 'Postman', level: 'Intermediário' },
      { name: 'ServiceNow', level: 'Intermediário' },
      { name: 'Jira Service Desk', level: 'Básico' },
      { name: 'Microsoft 365', level: 'Intermediário' },
      { name: 'Windows 10/11', level: 'Avançado' },
    ],
  },
  {
    id: 'methodologies',
    title: 'Metodologias & Boas Práticas',
    icon: 'award',
    items: [
      { name: 'ITIL 4', level: 'Básico' },
      { name: 'Suporte técnico N2', level: 'Avançado' },
    ],
  },
  {
    id: 'others',
    title: 'Idiomas & Formação',
    icon: 'sparkles',
    items: [
      { name: 'Inglês intermediário', level: 'Intermediário' },
      { name: 'Análise e Desenv. de Sistemas (cursando)' },
    ],
  },
]
