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
      'Garanto que o Global Antares (sistema de RH da Apdata) troque dados com os sistemas dos clientes sem falhas. Analiso APIs REST e SOAP, valido JSON e XML e acompanho transactions ponta a ponta — quando um dado não bate, uso SQL para achar a causa e PowerShell para automatizar as checagens que antes eram manuais.',
    tags: ['REST / SOAP', 'JSON', 'XML', 'PowerShell', 'SQL', 'Transactions', 'Integrações'],
  },
  {
    id: 'exp-telematica',
    type: 'work',
    title: 'Analista de Suporte Técnico Jr (N2)',
    place: 'Telemática Sistemas Inteligentes',
    period: '03/2025 - 2025',
    description:
      'Atuei no suporte N2 investigando inconsistências de dados em SQL Server. Elaborei queries e analisei logs de integração para chegar à raiz de incidentes críticos e apoiar a correção dos registros afetados.',
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
      'Trajetória anterior à TI. Rotina de processos com atenção a detalhe e organização — controle de inventário e separação de pedidos para envio nacional, mantendo o estoque e a logística em dia.',
    tags: [],
  },
  {
    id: 'exp-allox',
    type: 'work',
    title: 'Supervisor Pleno',
    place: 'Allox Teleatendimento LTDA',
    period: '05/2022 - 11/2022',
    description:
      'Trajetória anterior à TI. Liderei uma equipe orientada a metas, acompanhando indicadores de performance — base para o trabalho analítico e sob pressão que faço hoje.',
    tags: [],
  },
]
