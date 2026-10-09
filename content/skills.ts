// content/skills.ts
// Tecnologias por nível de evidência:
//   projetos  = usei em projeto meu (evidência no repositório ou confirmado por mim)
//   estudando = estudei ou estou aprendendo
// Não entram: OpenAI (sem evidência), Data Science e Machine Learning (sem evidência), Linux (sem evidência).

import type { SkillGroup } from "./types"

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "linguagens",
    label: "Linguagens",
    items: [
      { name: "TypeScript", level: "projetos", evidence: "LENS", source: ["repositorio", "confirmado"] },
      { name: "JavaScript", level: "projetos", evidence: "FlowFin e APIs", source: ["curriculo", "confirmado"] },
      { name: "Python", level: "projetos", evidence: "API de e-commerce", source: ["curriculo", "repositorio"] },
      { name: "SQL", level: "projetos", evidence: "PostgreSQL nos projetos", source: ["curriculo", "confirmado"] },
      { name: "HTML e CSS", level: "projetos", evidence: "Páginas e interfaces web", source: ["curriculo"] },
      { name: "C", level: "estudando", evidence: "Curso Introdução ao C (Rocketseat)", source: ["curriculo"] },
    ],
  },
  {
    id: "web",
    label: "Interface e aplicações web",
    items: [
      { name: "React", level: "projetos", evidence: "LENS; curso Fundamentos do React", source: ["repositorio", "curriculo"] },
      { name: "Tailwind CSS", level: "projetos", evidence: "LENS e este portfólio", source: ["repositorio"] },
    ],
  },
  {
    id: "backend",
    label: "Back-end e dados",
    items: [
      { name: "Node.js", level: "projetos", evidence: "APIs em JavaScript", source: ["curriculo", "confirmado"] },
      { name: "PostgreSQL", level: "projetos", evidence: "LENS", source: ["curriculo", "repositorio"] },
      { name: "Prisma", level: "projetos", evidence: "LENS", source: ["repositorio"] },
      { name: "Supabase", level: "projetos", evidence: "Usado em projetos próprios", source: ["confirmado"] },
      { name: "Flask", level: "projetos", evidence: "API de e-commerce; curso de Python com Flask", source: ["curriculo", "repositorio"] },
      { name: "Fastify", level: "estudando", evidence: "SaaS de barbearia (não publicado)", source: ["confirmado"] },
    ],
  },
  {
    id: "pagamentos",
    label: "Pagamentos",
    items: [
      { name: "Kiwify", level: "projetos", evidence: "Venda do e-book Vire a Chave", source: ["confirmado"] },
      { name: "Stripe", level: "projetos", evidence: "Integração de pagamentos em projeto próprio", source: ["confirmado"] },
    ],
  },
  {
    id: "ferramentas",
    label: "Ferramentas e IA",
    items: [
      { name: "Git e GitHub", level: "projetos", evidence: "Controle de versão de todos os projetos", source: ["curriculo"] },
      { name: "Vercel", level: "projetos", evidence: "Publicação dos projetos", source: ["curriculo", "repositorio"] },
      { name: "Kanban", level: "projetos", evidence: "Organização do trabalho em etapas", source: ["curriculo"] },
      {
        name: "Ferramentas de IA (Claude, Gemini)",
        level: "projetos",
        evidence: "Uso no desenvolvimento e em automações para mim e para outras pessoas",
        source: ["confirmado"],
      },
    ],
  },
]
