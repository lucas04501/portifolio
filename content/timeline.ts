// content/timeline.ts
// Formação, cursos e idiomas. Somente o que consta no currículo ou foi confirmado.
// Experiência profissional: nenhuma até o momento; não inventar. Projetos próprios ficam em projects.ts.

import type { Course, Education, Language } from "./types"

export const education: readonly Education[] = [
  {
    institution: "Universidade Severino Sombra (Univassouras)",
    course: "Bacharelado em Engenharia de Software",
    period: "2026 – 2030",
    status: "Cursando o 2º período",
    source: ["curriculo", "confirmado"],
  },
]

export const courses: readonly Course[] = [
  { name: "Fundamentos de Desenvolvimento Web", provider: "Rocketseat", source: ["curriculo"] },
  { name: "Controle de Versão de Código (Git e GitHub)", provider: "Rocketseat", source: ["curriculo"] },
  { name: "Minicurso de Python com Flask", provider: "Rocketseat", source: ["curriculo"] },
  { name: "Introdução ao C", provider: "Rocketseat", source: ["curriculo"] },
  { name: "Fundamentos do React", provider: "Rocketseat", source: ["curriculo"] },
]

export const languages: readonly Language[] = [
  { name: "Português", level: "Nativo", source: ["curriculo"] },
  {
    name: "Inglês",
    level: "B2 (intermediário avançado): leitura técnica fluente, em aperfeiçoamento na fala",
    source: ["curriculo"],
  },
]

export const experience: readonly never[] = []
