/**
 * Seção "Espaços" — atalhos (cards de ícone) que direcionam para áreas
 * de projetos com página própria.
 *
 * Cada item aponta para uma página em /public (servida junto do site):
 *  - Atari       -> public/atari/index.html         (link: 'atari/')
 *  - Ferramentas -> public/ferramentas/index.html   (link: 'ferramentas/')
 *
 * Para adicionar uma nova área, crie a pasta em /public com um index.html
 * e adicione um novo objeto aqui.
 *
 * Campos:
 *  - icon: nome do ícone (ver src/components/ui/Icon.jsx)
 *  - link: caminho relativo (mantém funcionando no GitHub Pages, base './')
 *  - external: true abre em nova aba (para links fora do portfólio)
 */
export const spaces = [
  {
    id: 'atari',
    icon: 'pencil',
    title: 'Atari',
    tag: 'Jogos',
    description:
      'Espaço criativo para jogos simples feitos para exposição. Protótipos, pixel art e experimentos jogáveis direto no navegador.',
    link: 'atari/',
    external: false,
  },
  {
    id: 'ferramentas',
    icon: 'gear',
    title: 'Ferramentas',
    tag: 'Utilitários',
    description:
      'Desenvolvimentos gerais: pequenas ferramentas, automações e utilitários que resolvem problemas do dia a dia.',
    link: 'ferramentas/',
    external: false,
  },
]
