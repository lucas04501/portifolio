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
  summary: [
    "Estudo Engenharia de Software na Univassouras e estou me formando como desenvolvedor full stack.",
    "Gosto de criar software para a minha própria produção, organização, planejamento e execução, e de usar o que aprendo para ajudar outras pessoas com isso: PWAs, SaaS e automações com IA.",
  ],
  source: ["curriculo", "confirmado"] as Sources,
} as const

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
