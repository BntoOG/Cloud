<div align="center">

# 💼 Portfólio Profissional — Eduardo Bento

**Analista de Integração · APIs, SQL, Dados & Integrações**

Portfólio pessoal moderno e responsivo, construído com React + Vite, com tema claro/escuro, animações sutis, acessibilidade e um assistente virtual (chat) que responde dúvidas sobre o próprio site.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Puro-1572B6?logo=css3&logoColor=white)
![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT-green)

</div>

---

## 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Demonstração](#-demonstração)
- [Como rodar localmente](#-como-rodar-localmente)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Onde editar o conteúdo](#-onde-editar-o-conteúdo)
- [Assistente virtual (chat)](#-assistente-virtual-chat)
- [Deploy](#-deploy)
- [Contato](#-contato)
- [Licença](#-licença)

---

## 📖 Sobre o projeto

Site de portfólio de **Eduardo Bento da Silva**, profissional de Tecnologia da Informação com foco em **SQL, análise e validação de dados e integração entre sistemas corporativos**.

O projeto foi construído para ser fácil de manter: **todo o conteúdo fica separado da interface**, em arquivos de dados na pasta `src/data/`. Para atualizar textos, projetos ou contatos, não é preciso mexer nos componentes.

---

## ✨ Funcionalidades

- 🎨 **Tema claro/escuro** — respeita a preferência do sistema e salva a escolha no navegador.
- 📱 **Layout responsivo** — adapta-se a celular, tablet e desktop.
- 💬 **Assistente virtual** — chat flutuante que responde sobre tecnologias, projetos, trajetória, integrações e contato.
- ⚡ **Animações sutis** — entrada de elementos via `IntersectionObserver` (respeita `prefers-reduced-motion`).
- ♿ **Acessibilidade** — navegação por teclado, `aria-labels`, foco visível e link de "pular para o conteúdo".
- 🔎 **SEO** — meta tags de título, descrição e autor no `index.html`.
- 🧩 **Conteúdo desacoplado** — dados em `src/data/`, sem tocar nos componentes.

---

## 🛠 Tecnologias

| Tecnologia | Uso |
| --- | --- |
| **React 18** | Biblioteca de interface (componentes). |
| **Vite 5** | Ambiente de desenvolvimento e build de produção. |
| **JavaScript (ES Modules)** | Lógica da aplicação. |
| **CSS puro + variáveis** | Estilos e design tokens (temas claro/escuro). |
| **SVG inline** | Ícones sem dependências externas. |

---

## 🖼 Demonstração

> 💡 Substitua os links abaixo pelas suas imagens/URL após publicar.

- 🌐 **Site online:** _[adicione o link do deploy aqui]_
- 🖼 **Prévia:**

```
docs/preview.png   ← adicione aqui uma captura de tela do portfólio
```

<!-- Exemplo depois de adicionar a imagem:
![Prévia do portfólio](docs/preview.png)
-->

---

## 🚀 Como rodar localmente

Pré-requisito: **[Node.js](https://nodejs.org) 18+** instalado.

```bash
# 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/portfolio.git

# 2. Entre na pasta
cd portfolio

# 3. Instale as dependências
npm install

# 4. Rode em modo de desenvolvimento
npm run dev        # abre em http://localhost:5173
```

Outros comandos:

```bash
npm run build      # gera a versão de produção em /dist
npm run preview    # visualiza localmente a build de produção
```

---

## 📂 Estrutura do projeto

```
portfolio/
├─ index.html                # SEO / meta tags / fontes
├─ public/favicon.svg
└─ src/
   ├─ main.jsx               # ponto de entrada (aplica o ThemeProvider)
   ├─ App.jsx                # monta as seções + assistente
   ├─ context/
   │  └─ ThemeContext.jsx    # modo claro/escuro
   ├─ hooks/
   │  ├─ useScrollReveal.js  # animação de entrada
   │  └─ useActiveSection.js # destaque do menu ativo
   ├─ lib/
   │  └─ assistant.js        # "cérebro" do chat (respostas locais)
   ├─ components/            # Navbar, Hero, About, Skills, Projects,
   │                         # Experience, Integrations, Contact,
   │                         # ChatAssistant, Footer + ui/
   ├─ data/                  # >>> EDITE AQUI o conteúdo <<<
   │  ├─ profile.js          # nome, cargo, bio, objetivos, stats
   │  ├─ skills.js           # tecnologias por categoria
   │  ├─ projects.js         # projetos / casos práticos
   │  ├─ experience.js       # timeline (formação/experiências)
   │  ├─ integrations.js     # fluxo de dados e conceitos
   │  ├─ contact.js          # LinkedIn (contato)
   │  └─ navigation.js       # itens do menu
   └─ styles/global.css      # design tokens e estilos globais
```

---

## ✏️ Onde editar o conteúdo

Todo o conteúdo fica em `src/data/`. Não é preciso mexer nos componentes.

| O que atualizar | Arquivo |
| --- | --- |
| Nome, cargo, bio, objetivos, estatísticas | `src/data/profile.js` |
| Tecnologias e níveis | `src/data/skills.js` |
| Projetos (nome, descrição, tech, links) | `src/data/projects.js` |
| Formação, cursos, certificações, experiências | `src/data/experience.js` |
| LinkedIn (contato) | `src/data/contact.js` |
| Conceitos e fluxo de integração | `src/data/integrations.js` |

> Lembre-se de atualizar também as meta tags de SEO em `index.html` (título, descrição e autor).

---

## 💬 Assistente virtual (chat)

O botão flutuante no canto inferior direito abre um mini chat que tira dúvidas sobre o portfólio.

- **100% local e gratuito:** as respostas são geradas em `src/lib/assistant.js`, lendo os mesmos arquivos de `src/data/`. Ao atualizar seus dados, o assistente responde com o conteúdo novo.
- **Sem chave de API e sem custo:** não depende de nenhum serviço externo.
- **Como personalizar:** edite `quickSuggestions`, `welcomeMessage` e as palavras-chave (intents) em `src/lib/assistant.js`.

> 🔮 **Evolução futura (opcional):** é possível conectar um modelo de linguagem real (ex.: Google Gemini) via função serverless, mantendo a chave protegida no backend. O ponto de integração é a função `getAssistantReply` em `src/lib/assistant.js`.

---

## ☁️ Deploy

Recomendado publicar na **[Vercel](https://vercel.com)** (grátis para projetos pessoais):

1. Suba o projeto para o GitHub.
2. Na Vercel: **Add New Project** → selecione o repositório.
3. Framework detectado automaticamente (**Vite**). Clique em **Deploy**.
4. Pronto: a Vercel gera uma URL pública em HTTPS.

Também é compatível com Netlify, GitHub Pages e qualquer hospedagem de site estático (a partir da pasta `/dist`).

---

## 📫 Contato

- **LinkedIn:** [linkedin.com/in/eduardobento269683326](https://www.linkedin.com/in/eduardobento269683326)

---

## 📄 Licença

Distribuído sob a licença **MIT**. Sinta-se à vontade para usar como base para o seu próprio portfólio.

<div align="center">

Feito com ☕ e React por **Eduardo Bento**

</div>
