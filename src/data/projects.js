/**
 * Seção "Projetos" — apresentada como CASOS PRÁTICOS / experiências reais.
 *
 * Como ainda não tenho projetos pessoais com repositório público, os cards
 * abaixo contam experiências reais do meu dia a dia (integrações, dados e SQL).
 * Quando eu criar projetos no GitHub, é só:
 *  - preencher "github" com a URL do repositório;
 *  - preencher "demo" com o link da demonstração (se houver);
 *  - ou adicionar novos objetos a esta lista.
 *
 * Enquanto "github"/"demo" estiverem vazios, o card mostra "Em breve".
 */
export const projects = [
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
    github: '',
    demo: '',
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
    github: '',
    demo: '',
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
    github: '',
    demo: '',
  },
]
