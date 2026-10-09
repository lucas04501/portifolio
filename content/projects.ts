// content/projects.ts
// Projetos exibidos, curados à mão. A API do GitHub só complementa (lib/projects.ts).
// LENS e Vire a Chave: páginas públicas abertas e conferidas em 2026-10-09 ("demo-publica").
// Dos READMEs públicos: reconferir no código antes de publicar.
// Fora do site por decisão do Lucas: ReputaçãoAI, Ritmo e os repositórios de estudo.

import type { Project } from "./types"

export const projects: readonly Project[] = [
  {
    slug: "lens",
    name: "LENS",
    kind: "Aplicativo web",
    featured: 1,
    status: "publicado",
    visible: true,
    image: {
      src: "/projects/lens.jpg",
      alt: "Página inicial do LENS: título \"Master Your Mind\" e um painel de exemplo com sequência de dias, XP, hábitos do dia e desempenho semanal.",
      width: 1440,
      height: 900,
    },
    summary:
      "Sistema de produtividade que reúne hábitos, tarefas em quadro Kanban, rotina semanal, metas e foco, com gamificação.",
    problem:
      "Transformar disciplina em um sistema diário mensurável. Eu uso o LENS para mim e quero abri-lo para outras pessoas que também querem organizar a vida.",
    highlights: [
      "Hábitos com check-in diário, sequência (streak) e mapa de calor mensal",
      "Quadro Kanban com tarefas arrastáveis e checklists",
      "Rotina semanal em blocos de tempo e metas no sistema dos 90 dias",
      "Timer de foco (Pomodoro, 90 minutos ou Flow) que gera XP, e 7 níveis de INITIATE a TRANSCENDENT",
      "Cadastro de usuários e banco de dados próprios; planejamento, desenvolvimento, testes e publicação feitos por mim",
    ],
    stack: [
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Zustand",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
    ],
    links: {
      demo: "https://lens-two-xi.vercel.app",
      repo: "https://github.com/lucas04501/LENSAPP",
    },
    repoName: "LENSAPP",
    pending: ["Confirmar que o roadmap do README reflete o estado real", "Capturas das telas internas (hoje só a página inicial)"],
    source: ["curriculo", "repositorio", "demo-publica", "confirmado"],
  },
  {
    slug: "vire-a-chave",
    name: "Vire a Chave",
    kind: "Produto digital",
    featured: 2,
    status: "publicado",
    visible: true,
    image: {
      src: "/projects/vire-a-chave.jpg",
      alt: "Página de venda do e-book Vire a Chave: título em serifa, chamada para o e-book e números de capítulos e gráficos.",
      width: 1440,
      height: 900,
    },
    summary:
      "E-book de autodesenvolvimento com página própria de apresentação e venda, e pagamento pelo Kiwify.",
    problem:
      "Reunir em um material só o que aprendi em livros, hábitos que funcionaram e estudos de neurociência, para ajudar outras pessoas a sair do loop e organizar a vida.",
    highlights: [
      "9 capítulos, de clareza e neurociência dos hábitos a rotina, ferramentas e metas de 90 dias",
      "6 gráficos e diagramas e exercícios práticos",
      "Página de venda com compra direta pelo cliente e integração de pagamentos (Kiwify)",
      "Em desenvolvimento: ligar o e-book ao LENS, para viver o método no aplicativo e compartilhar a experiência",
    ],
    stack: ["Página de venda", "Kiwify", "Vercel"],
    links: { demo: "https://vire-a-chave.vercel.app" },
    pending: [
      "Corrigir no currículo a frase sobre 'sistema de pagamento próprio' (é o Kiwify)",
      "Integração com o LENS: exibir sempre como objetivo, nunca como pronto",
      "Preço, garantia e promessas comerciais ficam fora do portfólio",
    ],
    source: ["curriculo", "demo-publica", "confirmado"],
  },
  {
    slug: "flowfin",
    name: "FlowFin",
    kind: "Back-end em Node.js",
    status: "em-desenvolvimento",
    visible: true, // README publicado em 2026-10-09 (PR #1 do repositório)
    summary:
      "Aplicação de controle financeiro pessoal, em desenvolvimento. Hoje existe a base do back-end em Node.js com PostgreSQL.",
    problem: "Organizar finanças pessoais e adicionar as ferramentas que eu sinto falta.",
    highlights: [
      "Servidor Express 5 conectado ao PostgreSQL (pg e dotenv)",
      "Rota de teste que confirma a conversa entre servidor e banco",
      "Construído do zero, sem frameworks de front-end, para aprender os fundamentos antes de partir para eles",
    ],
    stack: ["JavaScript", "Node.js", "Express", "PostgreSQL"],
    links: { repo: "https://github.com/lucas04501/FlowFin" },
    repoName: "FlowFin",
    pending: [
      "Cadastro de despesas (a rota POST /despesas está só no computador do Lucas, ainda não commitada)",
      "Front-end e gráficos: o curriculo fala em gráficos, mas ainda não existem no repositório",
    ],
    source: ["repositorio", "perfil-github", "curriculo"],
  },
  {
    slug: "e-commerce",
    name: "API de e-commerce",
    kind: "API em Python",
    status: "so-codigo",
    visible: true,
    summary:
      "API de uma loja virtual em Python e Flask, em construção: login, catálogo de produtos e carrinho.",
    problem:
      "Praticar o desenho de uma API do cadastro de produtos ao carrinho. Busca, finalização da compra e documentação ainda estão por fazer.",
    highlights: [
      "Login e logout com sessão (Flask-Login)",
      "CRUD de produtos protegido por login, e listagem pública",
      "Adicionar produtos ao carrinho do usuário logado",
      "Modelos de usuário, produto e item de carrinho com SQLAlchemy (SQLite)",
    ],
    stack: ["Python", "Flask", "SQLAlchemy", "Flask-Login"],
    links: { repo: "https://github.com/lucas04501/E-commerce" },
    repoName: "E-commerce",
    pending: [
      "Busca, ver e remover itens do carrinho, checkout, hash de senha e Swagger: previstos no README do repositório, ainda não implementados",
      "Sem integração de pagamento",
    ],
    source: ["repositorio", "confirmado"],
  },
  {
    slug: "barbearia",
    name: "SaaS de barbearia",
    kind: "Estudo em Fastify",
    status: "estudo-nao-publicado",
    visible: true,
    summary:
      "Estudo de um SaaS de gestão para barbearias, feito do zero com Fastify. Não foi ao ar.",
    problem: "Aprender uma stack de back-end específica construindo um produto completo.",
    highlights: ["Back-end com Fastify em Node.js, usado como estudo"],
    stack: ["Node.js", "Fastify"],
    links: {},
    pending: ["Sem repositório público; exibir só como menção, sem link"],
    source: ["confirmado"],
  },
]
