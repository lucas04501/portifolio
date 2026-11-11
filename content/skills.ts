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
      { name: "TypeScript", level: "projetos", evidence: "RIZZEVO Hub, Brandão Gestão e Brandão Delícias", source: ["confirmado-2026-11"] },
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
      { name: "React", level: "projetos", evidence: "Front-end dos meus projetos; curso Fundamentos do React", source: ["repositorio", "curriculo"] },
      { name: "Tailwind CSS", level: "projetos", evidence: "Meus projetos e este portfólio", source: ["repositorio"] },
    ],
  },
  {
    id: "backend",
    label: "Back-end e dados",
    items: [
      { name: "Node.js", level: "projetos", evidence: "APIs em JavaScript", source: ["curriculo", "confirmado"] },
      { name: "PostgreSQL", level: "projetos", evidence: "Brandão Gestão, RIZZEVO Hub e Rumo", source: ["curriculo", "repositorio"] },
      { name: "Supabase", level: "projetos", evidence: "Banco, login e regras de acesso da Brandão Delícias", source: ["confirmado-2026-11"] },
      { name: "Fastify", level: "projetos", evidence: "APIs do RIZZEVO Hub e do Brandão Gestão", source: ["confirmado-2026-11"] },
      { name: "Drizzle e Prisma", level: "projetos", evidence: "Acesso ao banco nos meus projetos", source: ["repositorio", "confirmado-2026-11"] },
      { name: "Integração de APIs", level: "projetos", evidence: "APIs externas com chaves em variáveis de ambiente (ex.: busca por CNPJ)", source: ["confirmado-2026-11"] },
      { name: "Flask", level: "projetos", evidence: "API de e-commerce; curso de Python com Flask", source: ["curriculo", "repositorio"] },
    ],
  },
  {
    id: "pagamentos",
    label: "Pagamentos",
    items: [
      { name: "Kiwify", level: "projetos", evidence: "Venda do e-book Vire a Chave", source: ["confirmado"] },
      { name: "Stripe", level: "projetos", evidence: "Assinatura mensal do Rumo", source: ["repositorio", "confirmado"] },
    ],
  },
  {
    id: "deploy",
    label: "Deploy e infraestrutura",
    items: [
      { name: "Vercel", level: "projetos", evidence: "Este portfólio e o Vire a Chave", source: ["curriculo", "repositorio"] },
      { name: "Cloudflare Pages", level: "projetos", evidence: "Painel da Brandão Delícias", source: ["confirmado-2026-11"] },
      { name: "Netlify", level: "projetos", evidence: "Rumo", source: ["repositorio"] },
      { name: "GitHub Pages", level: "projetos", evidence: "Agregador de links", source: ["repositorio"] },
      { name: "GitHub Actions", level: "projetos", evidence: "Integração contínua (testes a cada mudança)", source: ["confirmado-2026-11"] },
      { name: "Docker", level: "projetos", evidence: "Ambientes locais de desenvolvimento", source: ["confirmado-2026-11"] },
    ],
  },
  {
    id: "ferramentas",
    label: "Ferramentas e IA",
    items: [
      { name: "Git e GitHub", level: "projetos", evidence: "Controle de versão de todos os projetos", source: ["curriculo"] },
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
