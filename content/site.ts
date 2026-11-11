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
      "Estudante de Engenharia de Software (Univassouras) e desenvolvedor full stack em formação. Criador da RIZZEVO. Busco estágio em tecnologia.",
  },
  // Hero: saudacao acima do nome e palavra gigante atras da foto
  heroGreeting: "Olá, eu sou",
  heroWord: "Portfólio",
  heroPhotoAlt: "Retrato de Lucas Pereira, de terno azul-marinho e camisa branca.",
  heroLead:
    "Estudante de Engenharia de Software e desenvolvedor full stack em formação. Crio software para organizar, planejar e executar, e uso IA em automações para mim e para quem precisa de ajuda.",
  summary: [
    "Estudo Engenharia de Software na Univassouras e estou me formando como desenvolvedor full stack.",
    "Gosto de criar software para a minha própria produção, organização, planejamento e execução, e de usar o que aprendo para ajudar outras pessoas com isso: PWAs, SaaS e automações com IA.",
  ],
  story:
    "Hoje divido o tempo entre a faculdade, a RIZZEVO (a startup que estou criando) e sistemas que já rodam no dia a dia de negócios reais, como o painel de encomendas da Brandão Delícias e a gestão de rotina do Brandão Gestão.",
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
  {
    title: "Do código ao ar",
    text: "Faço o deploy e coloco o site no ar: Vercel, Cloudflare Pages, Netlify e GitHub Pages, com banco no Supabase ou em PostgreSQL.",
    source: ["confirmado-2026-11"],
  },
  {
    title: "Integrações",
    text: "Conecto APIs externas com chaves guardadas em variáveis de ambiente e integro pagamentos (Stripe e Kiwify).",
    source: ["confirmado-2026-11"],
  },
  {
    title: "Segurança e registro",
    text: "Segredos fora do repositório, regras de acesso no banco, mudanças por Pull Request e decisões documentadas.",
    source: ["confirmado-2026-11"],
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
    title: "Rumo",
    text: "PWA de metas e hábitos · no ar",
    source: ["repositorio"],
  },
  {
    title: "Brandão Delícias",
    text: "Painel de encomendas em uso real",
    source: ["confirmado-2026-11"],
  },
  {
    title: "Univassouras",
    text: "Engenharia de Software · 2º período",
    source: ["curriculo", "confirmado"],
  },
]
