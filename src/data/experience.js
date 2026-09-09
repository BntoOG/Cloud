/**
 * Timeline de Experiência / Formação.
 * Preenchido com base no currículo de Eduardo Bento da Silva.
 *
 * "type": 'education' | 'course' | 'certification' | 'work' | 'project'
 */
export const timeline = [
  {
    id: 'exp-apdata',
    type: 'work',
    title: 'Analista de Integração',
    place: 'Apdata',
    period: 'Atual',
    description:
      'Suporte às integrações do Global Antares (sistema de RH da Apdata) com os sistemas dos clientes. Analiso APIs REST e SOAP, valido JSON e XML, acompanho transactions e uso SQL e PowerShell para investigar e resolver os erros de integração.',
    tags: ['REST / SOAP', 'JSON', 'XML', 'PowerShell', 'SQL', 'Transactions', 'Integrações'],
  },
  {
    id: 'exp-telematica',
    type: 'work',
    title: 'Analista de Suporte Técnico Jr (N2)',
    place: 'Telemática Sistemas Inteligentes',
    period: '03/2025 - 2025',
    description:
      'Suporte N2 com foco em análise e validação de dados via SQL Server. Investiguei inconsistências, analisei logs de integração e elaborei queries para resolver incidentes críticos.',
    tags: ['SQL Server', 'Integrações', 'ServiceNow', 'Suporte N2'],
  },
  {
    id: 'edu-ads',
    type: 'education',
    title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    place: 'Universidade Cidade de São Paulo',
    period: '06/2024 - 06/2026',
    description:
      'Formação superior com foco em desenvolvimento de sistemas, banco de dados, lógica de programação e integração de aplicações.',
    tags: [],
  },
  {
    id: 'cert-itil',
    type: 'certification',
    title: 'ITIL® 4 Foundation',
    place: 'Certificação',
    period: '—',
    description:
      'Fundamentos de gerenciamento de serviços de TI e boas práticas ITIL.',
    tags: [],
  },
  {
    id: 'cert-ms900',
    type: 'certification',
    title: 'Microsoft 365 Fundamentals (MS-900)',
    place: 'Udemy',
    period: '—',
    description:
      'Fundamentos de serviços e soluções em nuvem da Microsoft 365.',
    tags: [],
  },
  {
    id: 'edu-radiologia',
    type: 'education',
    title: 'Técnico em Radiologia',
    place: 'Colégio Paschoal Dantas',
    period: '2024 - 2026',
    description: 'Formação técnica em radiologia.',
    tags: [],
  },
  {
    id: 'exp-decoratta',
    type: 'work',
    title: 'Auxiliar de Serviços Gerais Jr',
    place: 'Decoratta Comercial LTDA',
    period: '08/2023 - 03/2025',
    description:
      'Gestão de inventário, separação de pedidos para envio nacional e operação de máquinas, mantendo o estoque organizado e os processos logísticos em dia.',
    tags: [],
  },
  {
    id: 'exp-allox',
    type: 'work',
    title: 'Supervisor Pleno',
    place: 'Allox Teleatendimento LTDA',
    period: '05/2022 - 11/2022',
    description:
      'Liderança de equipe com foco em metas de vendas, acompanhando a performance do time para garantir os resultados.',
    tags: [],
  },
]
