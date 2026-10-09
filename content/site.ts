// content/site.ts
// Identidade, posicionamento e contatos. Substitui, aos poucos, lib/config.ts
// (os componentes migram nas etapas 7 a 10 do plano).

import type { Contact, Sources } from "./types"

export const site = {
  name: "Lucas Pereira",
  shortName: "Lucas",
  role: "Estudante de Engenharia de Software · Full stack em formação",
  seeking: "Estágio em tecnologia",
  location: "Volta Redonda, RJ", // currículo; GitHub e site antigo dizem Rio de Janeiro
  locale: "pt-BR",
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
    status: "a-validar",
    source: ["curriculo"],
  },
]
