// content/projects.ts
// Projetos exibidos, curados à mão. A API do GitHub só complementa (lib/projects.ts).
// Dos READMEs públicos: reconferir no código antes de publicar.
// Fora do site por decisão do Lucas: ReputaçãoAI, Ritmo e os repositórios de estudo.

import type { Project } from "./types"

export const projects: readonly Project[] = [
  {
    slug: "lens",
    name: "LENS",
    featured: 1,
    status: "publicado",
    visible: true,
    summary:
      "Sistema de produtividade para organizar rotinas, hábitos e tarefas, com quadro Kanban, foco e gamificação.",
    problem:
      "Transformar hábitos e sessões de foco em um sistema diário mensurável, que eu uso para mim e quero abrir para outras pessoas.",
    highlights: [
      "Hábitos com sequência (streak), categorias e mapa de consistência do ano",
      "Gamificação por XP, com sete níveis",
      "Temporizador de foco com modos Deep Work, Pomodoro, Flow e Estudo",
      "Painel de análises com gráficos e paleta de comandos (Ctrl+K)",
      "Cadastro de usuários e banco de dados próprios; planejamento, desenvolvimento, testes e publicação feitos por mim",
    ],
    stack: [
      "Next.js 14",
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
    pending: ["Abrir e testar a demo", "Captura de tela", "Confirmar que o roadmap do README reflete o estado real"],
    source: ["curriculo", "repositorio", "confirmado"],
  },
  {
    slug: "vire-a-chave",
    name: "Vire a Chave",
    featured: 2,
    status: "publicado",
    visible: true,
    summary:
      "E-book de autodesenvolvimento, com página própria de apresentação e venda, pagamento via Kiwify.",
    problem:
      "Reunir o que aprendi em livros, hábitos que funcionaram e estudos de neurociência em um material que ajude outras pessoas a organizar a vida.",
    highlights: [
      "Conteúdo autoral baseado em livros lidos, hábitos e estudos de neurociência",
      "Página de venda com compra direta pelo cliente e integração de pagamentos (Kiwify)",
      "Objetivo em desenvolvimento: ligar o e-book ao aplicativo LENS, para viver e compartilhar o método",
    ],
    stack: ["Página de venda", "Kiwify", "Vercel"],
    links: { demo: "https://vire-a-chave.vercel.app" },
    pending: [
      "Abrir e testar a página de venda",
      "Corrigir no currículo a frase sobre 'sistema de pagamento próprio' (é o Kiwify)",
      "Integração com o LENS: exibir sempre como objetivo, nunca como pronto",
    ],
    source: ["curriculo", "confirmado"],
  },
  {
    slug: "flowfin",
    name: "FlowFin",
    featured: 3,
    status: "em-desenvolvimento",
    visible: false, // sem README no repositório; só aparece depois de documentado
    summary: "Aplicação de controle financeiro pessoal, com gráficos para acompanhar gastos e receitas.",
    problem: "Organizar finanças pessoais e adicionar as ferramentas que eu sinto falta.",
    highlights: ["Construído sem frameworks, para aprender os fundamentos antes de partir para eles"],
    stack: ["JavaScript", "Node.js", "Express", "PostgreSQL"],
    links: { repo: "https://github.com/lucas04501/FlowFin" },
    repoName: "FlowFin",
    pending: [
      "Escrever o README do repositório",
      "Confirmar a stack (Express e PostgreSQL vêm do README do perfil; o repositório só mostra server.js e db.js)",
      "Trocar `visible` para true depois disso",
    ],
    source: ["curriculo", "perfil-github"],
  },
  {
    slug: "e-commerce",
    name: "E-commerce (API)",
    status: "publicado",
    visible: true,
    summary: "API de uma loja virtual em Python e Flask: login, catálogo, carrinho e finalização de compra.",
    problem: "Praticar o desenho de uma API completa e documentada, do cadastro de produtos ao checkout.",
    highlights: [
      "Autenticação com controle de sessão",
      "CRUD de produtos para administradores e busca por palavra-chave",
      "Carrinho por usuário e finalização de compra",
      "API documentada com Swagger",
    ],
    stack: ["Python", "Flask", "Swagger"],
    links: { repo: "https://github.com/lucas04501/E-commerce" },
    repoName: "E-commerce",
    pending: [
      "Corrigir a descrição do repositório: o código não integra gateway de pagamento",
      "Remover __pycache__ e instance do repositório",
    ],
    source: ["repositorio", "confirmado"],
  },
  {
    slug: "barbearia",
    name: "SaaS de barbearia",
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
