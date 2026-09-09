/**
 * Base de conhecimento das ferramentas e tecnologias que o Eduardo usa.
 *
 * Serve para o Assistente do Portfólio (src/lib/assistant.js) responder de
 * forma útil quando alguém pergunta sobre uma ferramenta específica —
 * por exemplo "o que é SQL?", "como você usa integração?" ou "fala de banco
 * de dados".
 *
 * COMO EDITAR:
 * - "label"    : nome exibido da ferramenta/conceito.
 * - "keywords" : termos (em minúsculas, SEM acento) que disparam a resposta.
 *                Podem ter mais de uma palavra ("banco de dados").
 * - "answer"   : o texto que o assistente responde. Escreva na 1ª pessoa,
 *                explicando o que é + como o Eduardo usa na prática.
 *
 * Dica: quanto mais específico o termo (ex.: "sql server"), maior a
 * prioridade dele na hora de casar com a pergunta.
 */
export const toolsKnowledge = [
  {
    id: 'integracao',
    label: 'Integração entre sistemas',
    keywords: ['integracao', 'integracoes', 'integrar', 'integra'],
    answer:
      'Integração é fazer dois sistemas diferentes trocarem dados entre si de forma automática. ' +
      'É o meu foco na Apdata: cuido das integrações de um sistema corporativo de RH com os sistemas dos clientes. ' +
      'Na prática, analiso o fluxo (Sistema A → API → tratamento dos dados → banco → Sistema B), ' +
      'testo as chamadas REST e SOAP, valido o que vai e volta em JSON/XML e acompanho as transactions ' +
      'para garantir que o dado chegou certo do outro lado. Quando algo falha, uso logs e SQL para achar a causa.',
  },
  {
    id: 'api',
    label: 'APIs',
    keywords: ['api', 'apis', 'endpoint', 'webhook', 'requisicao', 'requisicoes'],
    answer:
      'API é a "porta" por onde os sistemas conversam: um envia uma requisição e o outro responde com os dados. ' +
      'Trabalho com dois estilos: REST (mais moderno, geralmente em JSON) e SOAP (mais formal, em XML). ' +
      'Meu dia a dia envolve testar essas chamadas, conferir os retornos e usar ferramentas como o Postman ' +
      'para reproduzir e investigar as integrações.',
  },
  {
    id: 'rest',
    label: 'API REST',
    keywords: ['rest', 'restful'],
    answer:
      'REST é o estilo de API mais usado hoje, normalmente trocando dados em JSON via HTTP. ' +
      'Uso bastante para analisar e testar as integrações do dia a dia: acompanho as requisições, ' +
      'confiro os códigos de resposta e valido o conteúdo que é enviado e recebido.',
  },
  {
    id: 'soap',
    label: 'API SOAP',
    keywords: ['soap'],
    answer:
      'SOAP é um padrão de API mais antigo e formal, que troca mensagens em XML. ' +
      'Ainda é comum em integrações corporativas, e faz parte do meu dia a dia: analiso os envelopes XML, ' +
      'valido a estrutura das mensagens e investigo os erros quando a comunicação falha.',
  },
  {
    id: 'json',
    label: 'JSON',
    keywords: ['json'],
    answer:
      'JSON é o formato mais comum para trocar dados em APIs REST — leve e fácil de ler. ' +
      'No meu trabalho, leio e valido as mensagens JSON que passam entre os sistemas para garantir que ' +
      'os campos e valores estão corretos antes de o dado ser gravado.',
  },
  {
    id: 'xml',
    label: 'XML',
    keywords: ['xml'],
    answer:
      'XML é o formato usado principalmente nas integrações SOAP, com estrutura em tags. ' +
      'Faço a leitura e a validação dessas mensagens para conferir se a estrutura e o conteúdo estão de acordo ' +
      'com o esperado pela integração.',
  },
  {
    id: 'transactions',
    label: 'Transactions',
    keywords: ['transaction', 'transactions', 'transacao', 'transacoes'],
    answer:
      'Transactions são o acompanhamento de cada troca de dados de ponta a ponta entre os sistemas. ' +
      'Eu monitoro essas transações para saber exatamente onde o dado passou, se completou e, quando dá erro, ' +
      'em qual etapa ele parou — isso é chave para resolver a integração rápido.',
  },
  {
    id: 'banco-de-dados',
    label: 'Banco de dados',
    keywords: ['banco de dados', 'banco', 'database', 'bd'],
    answer:
      'Banco de dados é onde as informações ficam guardadas de forma organizada. ' +
      'Trabalho com SQL Server e Oracle, usando SQL para consultar, validar e investigar os dados. ' +
      'Quando um registro não bate ou uma integração gera inconsistência, é no banco que eu vou atrás da causa.',
  },
  {
    id: 'sql',
    label: 'SQL',
    keywords: ['sql', 'query', 'queries', 'consulta', 'consultas'],
    answer:
      'SQL é a linguagem que uso para conversar com o banco de dados: consultar, filtrar e validar informações. ' +
      'É uma das minhas ferramentas principais — escrevo queries para investigar inconsistências, conferir dados ' +
      'de integração e apoiar a correção de registros. Uso em SQL Server e Oracle.',
  },
  {
    id: 'sql-server',
    label: 'SQL Server',
    keywords: ['sql server', 'sqlserver', 'ms sql', 't-sql', 'tsql'],
    answer:
      'SQL Server é o banco de dados da Microsoft que uso no dia a dia. ' +
      'Foi com ele que trabalhei bastante na análise e validação de dados — investigando inconsistências, ' +
      'analisando logs de integração e escrevendo queries para resolver incidentes.',
  },
  {
    id: 'oracle',
    label: 'Oracle',
    keywords: ['oracle', 'pl/sql', 'plsql'],
    answer:
      'Oracle é outro banco de dados que uso para consultas e validação de dados, ' +
      'principalmente em investigações de inconsistências e verificação de registros nas integrações.',
  },
  {
    id: 'powershell',
    label: 'PowerShell',
    keywords: ['powershell', 'power shell', 'script', 'scripts', 'automacao', 'automatizar', 'automatiza'],
    answer:
      'PowerShell é o que uso para automatizar tarefas repetitivas do suporte. ' +
      'Criei scripts que validam retornos de integração e conferem dados automaticamente — ' +
      'o que antes era feito na mão virou um comando, economizando tempo e reduzindo erro humano.',
  },
  {
    id: 'logs',
    label: 'Análise de logs',
    keywords: ['log', 'logs', 'analise de logs'],
    answer:
      'Análise de logs é ler o "histórico" que os sistemas registram para entender o que aconteceu. ' +
      'Uso os logs de integração para investigar a causa dos erros — sigo o rastro da requisição até achar ' +
      'onde e por que a troca de dados falhou.',
  },
  {
    id: 'postman',
    label: 'Postman',
    keywords: ['postman'],
    answer:
      'Postman é a ferramenta que uso para testar APIs manualmente: monto uma requisição REST ou SOAP, ' +
      'envio e analiso a resposta. Ajuda muito a reproduzir e investigar um problema de integração fora do sistema.',
  },
  {
    id: 'servicenow',
    label: 'ServiceNow',
    keywords: ['servicenow', 'service now', 'jira', 'service desk', 'chamado', 'chamados', 'ticket', 'tickets'],
    answer:
      'ServiceNow e Jira Service Desk são as ferramentas de gestão de chamados que uso para organizar e ' +
      'acompanhar os atendimentos de suporte, seguindo boas práticas de ITIL.',
  },
  {
    id: 'etl',
    label: 'Tratamento de dados (ETL)',
    keywords: ['etl', 'tratamento de dados', 'tratamento', 'transformacao de dados'],
    answer:
      'Tratamento de dados (ETL) é a etapa em que os dados são validados e ajustados no meio do caminho de uma ' +
      'integração, antes de irem para o banco ou para o outro sistema. Confiro se estão no formato certo e ' +
      'consistentes para não gerar erro na ponta.',
  },
  {
    id: 'itil',
    label: 'ITIL',
    keywords: ['itil'],
    answer:
      'ITIL é o conjunto de boas práticas para gerenciamento de serviços de TI. ' +
      'Tenho a certificação ITIL 4 Foundation e aplico esses conceitos na organização e no atendimento dos chamados de suporte.',
  },
]
