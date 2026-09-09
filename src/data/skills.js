/**
 * Tecnologias e conhecimentos, organizados por categoria.
 *
 * COMO EDITAR:
 * - "level" (0 a 100) é uma auto-avaliação e controla a barra de proficiência.
 *   Ajuste os valores como preferir, ou remova o campo para ocultar a barra.
 */
export const skillCategories = [
  {
    id: 'integrations',
    title: 'Integrações & APIs',
    icon: 'plug',
    items: [
      { name: 'Integração entre sistemas', level: 75 },
      { name: 'APIs REST', level: 75 },
      { name: 'APIs SOAP', level: 70 },
      { name: 'JSON', level: 80 },
      { name: 'XML', level: 75 },
      { name: 'Transactions', level: 70 },
      { name: 'Análise de logs de integração', level: 75 },
    ],
  },
  {
    id: 'database',
    title: 'Banco de Dados',
    icon: 'database',
    items: [
      { name: 'SQL', level: 78 },
      { name: 'SQL Server', level: 75 },
      { name: 'Oracle', level: 65 },
      { name: 'Elaboração de queries', level: 78 },
    ],
  },
  {
    id: 'automation',
    title: 'Automação & Scripts',
    icon: 'code',
    items: [
      { name: 'PowerShell', level: 70 },
      { name: 'Automação de verificações', level: 68 },
    ],
  },
  {
    id: 'data',
    title: 'Análise de Dados',
    icon: 'transform',
    items: [
      { name: 'Validação de dados', level: 75 },
      { name: 'Investigação de inconsistências', level: 75 },
      { name: 'Verificação de informações', level: 72 },
    ],
  },
  {
    id: 'tools',
    title: 'Ferramentas',
    icon: 'tool',
    items: [
      { name: 'Postman', level: 72 },
      { name: 'ServiceNow', level: 70 },
      { name: 'Jira Service Desk', level: 65 },
      { name: 'Microsoft 365', level: 70 },
      { name: 'Windows 10/11', level: 80 },
    ],
  },
  {
    id: 'methodologies',
    title: 'Metodologias & Boas Práticas',
    icon: 'award',
    items: [
      { name: 'ITIL 4', level: 65 },
      { name: 'Suporte técnico N2', level: 78 },
    ],
  },
  {
    id: 'others',
    title: 'Idiomas & Formação',
    icon: 'sparkles',
    items: [
      { name: 'Inglês intermediário', level: 60 },
      { name: 'Análise e Desenv. de Sistemas (cursando)' },
    ],
  },
]
