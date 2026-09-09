/**
 * Dados pessoais e de apresentação.
 *
 * A idade é calculada automaticamente a partir de "birthDate", então
 * não precisa ser atualizada na mão — ela acompanha o passar dos anos.
 */
export const profile = {
  name: 'Eduardo Bento da Silva',
  role: 'Analista de Integração · Integrações & Banco de Dados',
  location: 'São Paulo - SP',
  available: false, // true = mostra o selo "Disponível para oportunidades"

  // Ano e mês de nascimento (a idade é calculada a partir daqui).
  // Por privacidade, NÃO guardamos o dia exato do nascimento.
  birthYear: 2003,
  birthMonth: 7, // 1-12

  // Idade calculada em tempo real — sempre atualizada.
  get age() {
    return calcularIdade(this.birthYear, this.birthMonth)
  },

  // Frase de destaque exibida no topo (Hero)
  tagline: 'Faço sistemas diferentes conversarem entre si.',

  // Apresentação curta (Hero)
  shortBio:
    'Analista de integração. Trabalho com APIs REST e SOAP (Postman), JSON, XML, Base64, SFTP, SQL e automações em PowerShell e scripts .bat.',

  // Texto da seção "Sobre mim" (cada item vira um parágrafo).
  // Usa a idade dinâmica, então nunca fica desatualizado.
  get about() {
    return [
      `Tenho ${this.age} anos, sou de São Paulo e gosto de entender como os sistemas se conectam por trás das telas.`,
      'Hoje trabalho na Apdata dando suporte às integrações do Global Antares (G.A.): testo APIs REST e SOAP no Postman, valido JSON e XML, trato dados em Base64, acompanho transactions e cuido de transferências de arquivos via SFTP. Uso SQL para achar onde os dados saíram do lugar e automatizo o que é repetitivo com PowerShell e scripts .bat.',
      'Estou terminando a graduação em Análise e Desenvolvimento de Sistemas e quero crescer em integração, desenvolvimento e banco de dados.',
    ]
  },

  // Objetivos e interesses (usados na seção Sobre)
  objectives: [
    'Crescer como analista de integrações e em desenvolvimento.',
    'Me aprofundar em APIs, banco de dados e automação.',
    'Entregar soluções que resolvam o problema de quem usa o sistema.',
  ],
  interests: [
    'Integração entre sistemas',
    'APIs REST e SOAP (Postman)',
    'Transferência de arquivos (SFTP)',
    'Banco de dados e SQL',
    'Automação com PowerShell e .bat',
    'Análise e validação de dados',
  ],

  // Estatísticas rápidas exibidas no Hero (edite livremente ou deixe vazio [])
  stats: [
    { value: 'Apdata', label: 'Analista de Integração' },
    { value: 'API', label: 'Integração entre sistemas' },
    { value: 'ADS', label: 'Graduação em andamento' },
  ],
}

/**
 * Calcula a idade a partir do ano e mês de nascimento.
 * Não usa o dia exato (privacidade); a idade só pode ficar "1 a mais"
 * durante o mês do aniversário, o que é aceitável e não vaza a data completa.
 */
function calcularIdade(ano, mes) {
  const hoje = new Date()
  let idade = hoje.getFullYear() - ano
  // getMonth() é 0-11; "mes" recebido é 1-12.
  if (hoje.getMonth() + 1 < mes) {
    idade -= 1
  }
  return idade
}
