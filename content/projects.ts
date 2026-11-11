// content/projects.ts
// Projetos exibidos, curados à mão. A API do GitHub só complementa (lib/projects.ts).
// Vire a Chave: página pública aberta e conferida em 2026-10-09 ("demo-publica").
// RIZZEVO Hub, Brandão Delícias e Brandão Gestão: projetos privados, descritos pelo que o Lucas confirmou em 2026-11-10.
// LENS saiu do site em 2026-11-10 (o Lucas parou de usar).
// Dos READMEs públicos: reconferir no código antes de publicar.
// Fora do site por decisão do Lucas: ReputaçãoAI, Ritmo e os repositórios de estudo.

import type { Project } from "./types"

export const projects: readonly Project[] = [
  {
    slug: "rumo",
    name: "Rumo",
    kind: "PWA de metas e hábitos",
    featured: 1,
    status: "publicado",
    visible: true,
    image: {
      src: "/projects/rumo.png",
      alt: "Tela Hoje do Rumo no celular, com dados de exemplo: saudação, meta em andamento desenhada como uma rota de barco, hábitos do dia e tarefas.",
      width: 390,
      height: 844,
    },
    summary:
      "PWA de metas, hábitos, planejamento e treinos, com a vida tratada como uma viagem. Multiusuário, instalável e funciona offline. É o meu projeto mais consolidado.",
    problem:
      "Planejar o mês e manter hábitos em um aplicativo que abre na hora, funciona sem internet e guarda os dados de cada pessoa em separado.",
    highlights: [
      "Offline de verdade: cada mudança entra numa fila local e sincroniza quando a internet volta",
      "Contas separadas com duas travas: toda rota filtra pelo usuário e o banco recusa dado de outra pessoa (RLS)",
      "Assinatura mensal pela Stripe, com período de teste; o app nunca vê dado de cartão",
      "XP, sequências e estatísticas calculados a partir dos dados, em funções puras com testes",
      "No ar na Netlify, com banco PostgreSQL e nenhum custo fixo de infraestrutura",
    ],
    stack: ["TypeScript", "React", "Vite", "Hono", "Drizzle", "PostgreSQL", "Stripe", "PWA", "Netlify"],
    links: { demo: "https://rumo-app.netlify.app/", repo: "https://github.com/lucas04501/rumo" },
    repoName: "rumo",
    pending: [],
    source: ["repositorio", "confirmado-2026-11"],
  },
  {
    slug: "rizzevo-hub",
    name: "RIZZEVO Hub",
    kind: "Plataforma da minha startup",
    featured: 2,
    status: "em-desenvolvimento",
    visible: true,
    image: {
      src: "/projects/rizzevo-hub.png",
      alt: "Tela Financeiro do RIZZEVO Hub: cartões de receita, lançamentos e lucro, gráfico de receita e despesas por mês e despesas por categoria.",
      width: 480,
      height: 272,
    },
    summary:
      "Plataforma interna da RIZZEVO, a startup que estou criando: gestão comercial, ativos NFC, relacionamento com clientes e identificação de oportunidades.",
    problem:
      "Transformar uma primeira venda pequena em relacionamento de longo prazo: acompanhar cada cliente, cada ativo entregue e cada oportunidade em um só lugar.",
    highlights: [
      "Front-end em React e API em Fastify, tudo em TypeScript",
      "Banco PostgreSQL com Drizzle; PGlite em desenvolvimento e testes, sem depender de Docker",
      "Valores em centavos inteiros e fuso horário fixo, para não errar conta nem data",
      "Lint, checagem de tipos e testes (Vitest) verdes antes de cada entrega",
    ],
    stack: ["TypeScript", "React", "Vite", "Fastify", "Drizzle", "PostgreSQL", "Tailwind CSS", "Vitest"],
    links: {},
    pending: ["Sem repositório público nem demo", "Captura enviada pelo Lucas em 2026-11-10 (480 px de largura; trocar por uma maior quando houver)"],
    source: ["confirmado-2026-11"],
  },
  {
    slug: "brandao-delicias",
    name: "Brandão Delícias",
    kind: "PWA de gestão de encomendas",
    featured: 3,
    status: "publicado",
    visible: true,
    image: {
      src: "/projects/brandao-delicias.jpg",
      alt: "Página inicial do site da Brandão Delícias: título \"Feito com muito carinho para adoçar seus momentos\" e botões para chamar no WhatsApp e conhecer as delícias.",
      width: 800,
      height: 500,
    },
    summary:
      "Painel de gestão (PWA pensado para o celular) e site de uma confeitaria artesanal sob encomenda. O painel está em uso no dia a dia do negócio.",
    problem:
      "A proprietária toca tudo sozinha. Era preciso organizar encomendas, clientes, pagamentos e a produção do dia direto no celular.",
    highlights: [
      "Painel publicado no Cloudflare Pages, com banco e autenticação no Supabase",
      "Regras de acesso no próprio banco (RLS), migrações versionadas e testes de banco",
      "Projeto Supabase separado para desenvolvimento, sem tocar nos dados de produção",
      "Integração contínua no GitHub Actions; mudanças entram por Pull Request",
    ],
    stack: ["TypeScript", "React", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL", "Cloudflare Pages", "GitHub Actions"],
    links: {},
    pending: ["Repositório privado; nunca exibir telas com dados reais"],
    source: ["confirmado-2026-11"],
  },
  {
    slug: "brandao-gestao",
    name: "Brandão Gestão",
    kind: "Aplicativo web de gestão",
    featured: 4,
    status: "em-desenvolvimento",
    visible: true,
    image: {
      src: "/projects/brandao-gestao.png",
      alt: "Apresentação do Brandão Gestão com dados fictícios: telas do Painel Hoje, empresas, quadro de tarefas, fechamento do mês, pendências, vencimentos, honorários e a versão para celular.",
      width: 773,
      height: 730,
    },
    summary:
      "Gestão da rotina de um escritório de contabilidade: o que fazer hoje, o que vence, o que espera o cliente e o que precisa ser enviado.",
    problem:
      "Tirar a rotina mensal de planilhas e da memória, com as obrigações de cada cliente geradas e acompanhadas em um quadro.",
    highlights: [
      "Ficha do cliente com busca de dados pelo CNPJ (integração com API externa) e linha do tempo",
      "Quadro de tarefas em colunas, com arrastar e filtros",
      "Motor que gera as obrigações do mês considerando feriados",
      "Login com controle de permissões e registro de auditoria; testes de ponta a ponta com Playwright e CI no GitHub Actions",
    ],
    stack: ["TypeScript", "React", "Vite", "Fastify", "Drizzle", "PostgreSQL", "Playwright", "GitHub Actions"],
    links: {},
    pending: ["Repositório privado; capturas só com dados de demonstração"],
    source: ["confirmado-2026-11"],
  },
  {
    slug: "vire-a-chave",
    name: "Vire a Chave",
    kind: "Produto digital",
    featured: 5,
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
    ],
    stack: ["Página de venda", "Kiwify", "Vercel"],
    links: { demo: "https://vire-a-chave.vercel.app" },
    pending: [
      "Corrigir no currículo a frase sobre 'sistema de pagamento próprio' (é o Kiwify)",
      "Preço, garantia e promessas comerciais ficam fora do portfólio",
    ],
    source: ["curriculo", "demo-publica", "confirmado"],
  },
  {
    slug: "link-aggregator",
    name: "Agregador de links",
    kind: "Feito à mão · HTML e CSS",
    status: "publicado",
    visible: true,
    summary:
      "Página que reúne links e redes em um só lugar. Um dos meus primeiros projetos, escrito à mão e publicado no GitHub Pages.",
    problem: "Praticar HTML e CSS do zero e aprender a publicar um site.",
    highlights: ["HTML e CSS escritos à mão", "Publicado no GitHub Pages"],
    stack: ["HTML", "CSS", "GitHub Pages"],
    links: { demo: "https://lucas04501.github.io/link-aggregator/", repo: "https://github.com/lucas04501/link-aggregator" },
    repoName: "link-aggregator",
    pending: [],
    source: ["repositorio", "confirmado-2026-11"],
  },
  {
    slug: "functional-calculator",
    name: "Calculadora",
    kind: "Feito à mão · JavaScript",
    status: "so-codigo",
    visible: true,
    summary:
      "Calculadora web em HTML, CSS e JavaScript puro, com suporte a teclado e histórico de operações.",
    problem: "Treinar lógica e manipulação da página com JavaScript, sem bibliotecas.",
    highlights: ["JavaScript puro", "Suporte a teclado e histórico"],
    stack: ["HTML", "CSS", "JavaScript"],
    links: { repo: "https://github.com/lucas04501/functional-calculator" },
    repoName: "functional-calculator",
    pending: [],
    source: ["repositorio", "confirmado-2026-11"],
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
