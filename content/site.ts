// content/site.ts
// Identidade, posicionamento, SEO e contatos.

import type { Contact, Sources } from "./types"

export const site = {
  name: "Lucas Pereira",
  shortName: "Lucas",
  role: "Estudante de Engenharia de Software · Full stack em formação",
  seeking: "Estágio em tecnologia",
  location: "Volta Redonda, RJ", // currículo; GitHub e site antigo dizem Rio de Janeiro
  locale: "pt-BR",
  // SEO: titulo ate ~60 caracteres e descricao ate ~160
  seo: {
    title: "Lucas Pereira — Desenvolvedor full stack em formação",
    description:
      "Estudante de Engenharia de Software (Univassouras) e desenvolvedor full stack em formação. Projetos: LENS e Vire a Chave. Busco estágio em tecnologia.",
  },
  heroLead:
    "Estudante de Engenharia de Software e desenvolvedor full stack em formação. Crio software para organizar, planejar e executar, e uso IA em automações para mim e para quem precisa de ajuda.",
  summary: [
    "Estudo Engenharia de Software na Univassouras e estou me formando como desenvolvedor full stack.",
    "Gosto de criar software para a minha própria produção, organização, planejamento e execução, e de usar o que aprendo para ajudar outras pessoas com isso: PWAs, SaaS e automações com IA.",
  ],
  story:
    "Meu projeto mais completo é o LENS, um aplicativo de produtividade que uso para mim e quero abrir para outras pessoas. Ele nasceu do Vire a Chave, um e-book de autodesenvolvimento que escrevi a partir de livros, hábitos e estudos de neurociência.",
  source: ["curriculo", "confirmado"] as Sources,
} as const

export const workStyle: readonly { title: string; text: string; source: Sources }[] = [
  {
    title: "Do começo ao fim",
    text: "Cuido de todas as etapas dos meus projetos: planejamento, desenvolvimento, testes e publicação.",
    source: ["curriculo"],
  },
  {
    title: "Em etapas, com Kanban",
    text: "Organizo as tarefas em fluxo de trabalho e em etapas, no método Kanban.",
    source: ["curriculo"],
  },
  {
    title: "Aprendendo com autonomia",
    text: "Aprendo ferramentas novas por conta própria e procuro sempre melhorar os processos.",
    source: ["curriculo"],
  },
  {
    title: "IA como aliada",
    text: "Uso IA para criar automações para mim e para pessoas que precisam de ajuda.",
    source: ["confirmado"],
  },
]

export const contacts: readonly Contact[] = [
  {
    label: "GitHub",
    href: "https://github.com/lucas04501",
    status: "confirmado",
    source: ["curriculo", "perfil-github"],
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lucaspds9/",
    status: "confirmado",
    source: ["curriculo", "perfil-github"],
  },
  {
    label: "E-mail",
    href: "mailto:lucaspds9@hotmail.com",
    status: "confirmado",
    source: ["curriculo", "confirmado"],
  },
]

// Links externos (GitHub, LinkedIn): usados no hero, no contato e no rodape
export const socialLinks: readonly Contact[] = contacts.filter((c) => c.href.startsWith("http"))

// Rotulos flutuantes do hero: fatos curtos sobre os projetos e a formacao
export const heroLabels: readonly { title: string; text: string; source: Sources }[] = [
  {
    title: "LENS",
    text: "Produtividade, hábitos e foco · publicado",
    source: ["curriculo", "demo-publica"],
  },
  {
    title: "Vire a Chave",
    text: "E-book de autodesenvolvimento · Kiwify",
    source: ["curriculo", "demo-publica", "confirmado"],
  },
  {
    title: "Univassouras",
    text: "Engenharia de Software · 2º período",
    source: ["curriculo", "confirmado"],
  },
]

// Textos dos cartoes de base do hero
export const heroCards = {
  about: {
    label: "Sobre",
    text: "Software para a minha própria produção e para ajudar outras pessoas: PWAs, SaaS e automações com IA.",
    linkLabel: "Conhecer a trajetória →",
  },
  cta: {
    title: "Do planejamento à publicação",
    text: "Aplicações web com banco de dados, usuários e pagamentos, feitas por mim em todas as etapas.",
  },
  find: { label: "Onde me encontrar" },
  source: ["curriculo", "confirmado"] as Sources,
} as const
