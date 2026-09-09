/**
 * Conteúdo do site em Português (PT-BR).
 * É a fonte de conteúdo traduzível — o EN espelha esta estrutura em en.js.
 * Campos neutros (nome, links, ícones) ficam em src/data.
 */
export const pt = {
  nav: [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Tecnologias' },
    { id: 'projects', label: 'Projetos' },
    { id: 'experience', label: 'Experiência' },
    { id: 'integrations', label: 'Integrações' },
    { id: 'certificates', label: 'Certificados' },
    { id: 'spaces', label: 'Espaços' },
    { id: 'contact', label: 'Contato' },
  ],

  a11y: { skip: 'Pular para o conteúdo', langToggle: 'Switch to English' },

  hero: {
    badge: 'Disponível para oportunidades',
    role: 'Analista de Integração · Integrações & Banco de Dados',
    tagline: 'Faço sistemas diferentes conversarem entre si.',
    shortBio:
      'Analista de integração. Trabalho com APIs REST e SOAP (Postman), JSON, XML, Base64, SFTP, SQL e automações em PowerShell e scripts .bat.',
    ctaProjects: 'Ver projetos',
    ctaContact: 'Entre em contato',
    stats: [
      { value: 'Apdata', label: 'Analista de Integração' },
      { value: 'API', label: 'Integração entre sistemas' },
      { value: 'ADS', label: 'Graduação em andamento' },
    ],
  },

  about: {
    eyebrow: 'Sobre mim',
    title: 'Quem sou e para onde caminho',
    subtitle: 'Um pouco de quem eu sou e do que me move na tecnologia.',
    paragraphs: [
      'Tenho {age} anos, sou de São Paulo e gosto de entender como os sistemas se conectam por trás das telas.',
      'Hoje trabalho na Apdata dando suporte às integrações do Global Antares (G.A.): testo APIs REST e SOAP no Postman, valido JSON e XML, trato dados em Base64, acompanho transactions e cuido de transferências de arquivos via SFTP. Uso SQL para achar onde os dados saíram do lugar e automatizo o que é repetitivo com PowerShell e scripts .bat.',
      'Estou terminando a graduação em Análise e Desenvolvimento de Sistemas e quero crescer em integração, desenvolvimento e banco de dados.',
    ],
    objectivesTitle: 'Objetivos profissionais',
    objectives: [
      'Crescer como analista de integrações e em desenvolvimento.',
      'Me aprofundar em APIs, banco de dados e automação.',
      'Entregar soluções que resolvam o problema de quem usa o sistema.',
    ],
    interestsTitle: 'Interesses em tecnologia',
    interests: [
      'Integração entre sistemas',
      'APIs REST e SOAP (Postman)',
      'Transferência de arquivos (SFTP)',
      'Banco de dados e SQL',
      'Automação com PowerShell e .bat',
      'Análise e validação de dados',
    ],
  },

  skills: {
    eyebrow: 'Tecnologias & Conhecimentos',
    title: 'Ferramentas com as quais trabalho e estudo',
    subtitle: 'Conhecimentos organizados por área, com o nível de proficiência em cada um.',
    levels: { basico: 'Básico', intermediario: 'Intermediário', avancado: 'Avançado' },
    categories: [
      {
        id: 'integrations', title: 'Integrações & APIs', icon: 'plug',
        items: [
          { name: 'Integração entre sistemas', level: 'Intermediário' },
          { name: 'APIs REST', level: 'Intermediário' },
          { name: 'APIs SOAP', level: 'Intermediário' },
          { name: 'JSON', level: 'Avançado' },
          { name: 'XML', level: 'Intermediário' },
          { name: 'Base64', level: 'Intermediário' },
          { name: 'SFTP (transferência de arquivos)', level: 'Intermediário' },
          { name: 'Transactions', level: 'Intermediário' },
          { name: 'Análise de logs de integração', level: 'Intermediário' },
        ],
      },
      {
        id: 'database', title: 'Banco de Dados', icon: 'database',
        items: [
          { name: 'SQL', level: 'Avançado' },
          { name: 'SQL Server', level: 'Intermediário' },
          { name: 'Oracle', level: 'Básico' },
          { name: 'Elaboração de queries', level: 'Avançado' },
        ],
      },
      {
        id: 'automation', title: 'Automação & Scripts', icon: 'code',
        items: [
          { name: 'PowerShell', level: 'Intermediário' },
          { name: 'Scripts .bat (Batch)', level: 'Básico' },
          { name: 'Automação de verificações', level: 'Intermediário' },
        ],
      },
      {
        id: 'data', title: 'Análise de Dados', icon: 'transform',
        items: [
          { name: 'Validação de dados', level: 'Intermediário' },
          { name: 'Investigação de inconsistências', level: 'Intermediário' },
          { name: 'Verificação de informações', level: 'Intermediário' },
        ],
      },
      {
        id: 'tools', title: 'Ferramentas', icon: 'tool',
        items: [
          { name: 'Postman', level: 'Intermediário' },
          { name: 'ServiceNow', level: 'Intermediário' },
          { name: 'Jira Service Desk', level: 'Básico' },
          { name: 'Microsoft 365', level: 'Intermediário' },
          { name: 'Windows 10/11', level: 'Avançado' },
        ],
      },
      {
        id: 'methodologies', title: 'Metodologias & Boas Práticas', icon: 'award',
        items: [
          { name: 'ITIL 4', level: 'Básico' },
          { name: 'Suporte técnico N2', level: 'Avançado' },
        ],
      },
      {
        id: 'others', title: 'Idiomas & Formação', icon: 'sparkles',
        items: [
          { name: 'Inglês intermediário', level: 'Intermediário' },
          { name: 'Análise e Desenv. de Sistemas (cursando)' },
        ],
      },
    ],
  },

  projects: {
    eyebrow: 'Projetos',
    title: 'Casos práticos e experiências',
    subtitle: 'Casos reais do meu dia a dia com integrações, dados e SQL.',
    all: 'Todos',
    featured: 'Destaque',
    objectiveLabel: 'Objetivo',
    featuresLabel: 'Funcionalidades',
    viewCode: 'Ver código',
    soon: 'Em breve',
    demo: 'Demonstração',
    items: [
      {
        id: 'caso-integracoes-apdata',
        title: 'Suporte a Integrações entre Sistemas',
        category: 'Integração',
        featured: true,
        description:
          'Suporte às integrações do Global Antares (G.A.) com os sistemas dos clientes: teste de REST e SOAP no Postman, validação de JSON, XML e Base64, transferência de arquivos via SFTP e acompanhamento das transactions.',
        objective: 'Manter a troca de dados entre sistemas confiável e sem falhas.',
        features: [
          'Teste e análise de integrações REST e SOAP no Postman',
          'Leitura e validação de mensagens em JSON, XML e Base64',
          'Transferência de arquivos entre sistemas via SFTP',
          'Acompanhamento de transactions e análise de logs',
        ],
        tech: ['REST / SOAP', 'Postman', 'JSON', 'XML', 'Base64', 'SFTP', 'Transactions', 'Integrações'],
        github: '', demo: '',
      },
      {
        id: 'caso-automacao-powershell',
        title: 'Automação de Verificações com PowerShell',
        category: 'Automação',
        featured: true,
        description:
          'Scripts em PowerShell e .bat para automatizar checagens repetitivas do suporte, como validar retornos de integração, tratar dados em Base64 e conferir informações. O que era manual virou um comando.',
        objective: 'Ganhar tempo e reduzir erro humano nas tarefas repetitivas.',
        features: [
          'Automação de verificações de rotina',
          'Conferência de dados e retornos de integração',
          'Padronização de checagens do time de suporte',
        ],
        tech: ['PowerShell', 'Batch (.bat)', 'Base64', 'Automação', 'Integrações'],
        github: '', demo: '',
      },
      {
        id: 'caso-dados-sql',
        title: 'Investigação de Dados com SQL',
        category: 'Banco de Dados',
        featured: false,
        description:
          'SQL (SQL Server e Oracle) para investigar inconsistências, validar informações e apoiar a correção de registros. Quando um dado não bate, vou atrás do porquê.',
        objective: 'Achar a causa dos problemas nos dados e apoiar a correção.',
        features: [
          'Queries para extração e verificação de dados',
          'Investigação de inconsistências em banco de dados',
          'Apoio à correção de registros e resolução de incidentes',
        ],
        tech: ['SQL', 'SQL Server', 'Oracle'],
        github: '', demo: '',
      },
    ],
  },

  experience: {
    eyebrow: 'Experiência & Formação',
    title: 'Minha trajetória',
    subtitle: 'Formação, certificações e experiências profissionais.',
    typeLabels: { work: 'Experiência', education: 'Formação', course: 'Curso', certification: 'Certificação', project: 'Projeto' },
    items: [
      {
        id: 'exp-apdata', type: 'work', title: 'Analista de Integração', place: 'Apdata', period: 'Atual',
        description:
          'Atuo no suporte às integrações do Global Antares (G.A.), o sistema de RH da Apdata, garantindo que a troca de dados com os sistemas dos clientes aconteça sem falhas. Testo e analiso APIs REST e SOAP no Postman, valido payloads em JSON e XML, trato codificações em Base64 e acompanho transactions ponta a ponta. Cuido de transferências de arquivos via SFTP e, quando um dado não bate, investigo com SQL e automatizo as checagens repetitivas com scripts em PowerShell e .bat.',
        tags: ['Suporte a Integrações', 'REST / SOAP', 'Postman', 'JSON', 'XML', 'Base64', 'SFTP', 'Transactions', 'SQL', 'PowerShell', 'Batch (.bat)'],
      },
      {
        id: 'exp-telematica', type: 'work', title: 'Analista de Suporte Técnico Jr (N2)', place: 'Telemática Sistemas Inteligentes', period: '03/2025 - 2025',
        description:
          'Atuei no suporte N2 investigando inconsistências de dados em SQL Server. Elaborei queries e analisei logs de integração para chegar à raiz de incidentes críticos e apoiar a correção dos registros afetados.',
        tags: ['SQL Server', 'Integrações', 'ServiceNow', 'Suporte N2'],
      },
      {
        id: 'edu-ads', type: 'education', title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas', place: 'Universidade Cidade de São Paulo', period: '06/2024 - 06/2026',
        description: 'Formação superior com foco em desenvolvimento de sistemas, banco de dados, lógica de programação e integração de aplicações.',
        tags: [],
      },
      {
        id: 'cert-itil', type: 'certification', title: 'ITIL® 4 Foundation', place: 'Certificação', period: '—',
        description: 'Fundamentos de gerenciamento de serviços de TI e boas práticas ITIL.',
        tags: [],
      },
      {
        id: 'cert-ms900', type: 'certification', title: 'Microsoft 365 Fundamentals (MS-900)', place: 'Udemy', period: '—',
        description: 'Fundamentos de serviços e soluções em nuvem da Microsoft 365.',
        tags: [],
      },
      {
        id: 'edu-radiologia', type: 'education', title: 'Técnico em Radiologia', place: 'Colégio Paschoal Dantas', period: '2024 - 2026',
        description: 'Formação técnica em radiologia.',
        tags: [],
      },
      {
        id: 'exp-decoratta', type: 'work', title: 'Auxiliar de Serviços Gerais Jr', place: 'Decoratta Comercial LTDA', period: '08/2023 - 03/2025',
        description: 'Trajetória anterior à TI. Rotina de processos com atenção a detalhe e organização — controle de inventário e separação de pedidos para envio nacional, mantendo o estoque e a logística em dia.',
        tags: [],
      },
      {
        id: 'exp-allox', type: 'work', title: 'Supervisor Pleno', place: 'Allox Teleatendimento LTDA', period: '05/2022 - 11/2022',
        description: 'Trajetória anterior à TI. Liderei uma equipe orientada a metas, acompanhando indicadores de performance — base para o trabalho analítico e sob pressão que faço hoje.',
        tags: [],
      },
    ],
  },

  integrations: {
    eyebrow: 'Integrações & Banco de Dados',
    title: 'Conectando sistemas e dados',
    subtitle: 'Interesse e conhecimentos em APIs, integração entre sistemas, fluxo de dados e banco de dados.',
    codeTitle: 'pipeline.js',
    dataFlow: [
      { id: 'sys-a', label: 'Sistema A', sub: 'Origem dos dados', icon: 'app' },
      { id: 'api', label: 'API', sub: 'Comunicação REST', icon: 'plug' },
      { id: 'transform', label: 'Tratamento', sub: 'Validação / ETL', icon: 'transform' },
      { id: 'db', label: 'Banco de Dados', sub: 'Persistência', icon: 'database' },
      { id: 'sys-b', label: 'Sistema B', sub: 'Destino dos dados', icon: 'app' },
    ],
    concepts: [
      { id: 'apis', title: 'APIs REST e SOAP', icon: 'plug', text: 'Análise e teste de integrações em REST (JSON) e SOAP (XML).' },
      { id: 'formats', title: 'JSON e XML', icon: 'code', text: 'Leitura e validação das mensagens trocadas entre os sistemas.' },
      { id: 'transactions', title: 'Transactions', icon: 'transform', text: 'Acompanhamento das transações de ponta a ponta.' },
      { id: 'logs', title: 'Análise de logs', icon: 'tool', text: 'Investigação da causa dos erros de integração até a solução.' },
      { id: 'sql', title: 'Investigação com SQL', icon: 'database', text: 'Consultas para achar inconsistências e validar os dados.' },
      { id: 'automation', title: 'Automação com PowerShell', icon: 'sparkles', text: 'Scripts que automatizam verificações repetitivas do suporte.' },
    ],
  },

  certificates: {
    eyebrow: 'Certificados & Credenciais',
    title: 'Formação contínua',
    subtitle: '{count} certificados em tecnologia, dados, IA, comunicação e gestão. Filtre por tema e clique para abrir.',
    all: 'Todos',
    showAll: 'Ver todos ({count})',
    showLess: 'Mostrar menos',
  },

  spaces: {
    eyebrow: 'Espaços',
    title: 'Áreas de projetos',
    subtitle: 'Atalhos para os espaços onde desenvolvo experimentos: jogos simples e ferramentas do dia a dia.',
    access: 'Acessar',
    items: [
      {
        id: 'atari', icon: 'pencil', title: 'Atari', tag: 'Jogos',
        description: 'Espaço criativo para jogos simples feitos para exposição. Protótipos, pixel art e experimentos jogáveis direto no navegador.',
        link: 'atari/', external: false,
      },
      {
        id: 'ferramentas', icon: 'gear', title: 'Ferramentas', tag: 'Utilitários',
        description: 'Desenvolvimentos gerais: pequenas ferramentas, automações e utilitários que resolvem problemas do dia a dia.',
        link: 'ferramentas/', external: false,
      },
    ],
  },

  contact: {
    eyebrow: 'Contato',
    title: 'Vamos conversar',
    subtitle: 'Vamos trocar ideia sobre tecnologia, projetos e integrações. Me chame no LinkedIn.',
    text: 'Prefiro concentrar o contato no LinkedIn. É só clicar abaixo:',
    cta: 'Conectar no LinkedIn',
  },

  footer: { madeWith: 'Desenvolvido com React.', backToTop: 'Voltar ao topo' },
}
