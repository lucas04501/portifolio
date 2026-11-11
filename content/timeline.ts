// content/timeline.ts
// Formação, cursos e idiomas. Somente o que consta no currículo ou foi confirmado.
// Experiência profissional: nenhuma até o momento; não inventar. Projetos próprios ficam em projects.ts.

import type { Course, Education, JourneyStep, Language } from "./types"

// Jornada, na ordem em que aconteceu (contada pelo Lucas em 2026-11-10; datas dos repositorios no GitHub)
export const journey: readonly JourneyStep[] = [
  {
    when: "2025",
    title: "Primeiros passos em TI",
    text: "Comecei a estudar tecnologia por conta própria e a publicar os primeiros projetos feitos à mão: uma calculadora e um agregador de links em HTML, CSS e JavaScript.",
    source: ["confirmado-2026-11", "repositorio"],
  },
  {
    when: "2026",
    title: "1º período na UGB, em Volta Redonda",
    text: "Entrei na faculdade e cursei o primeiro período no Centro Universitário Geraldo Di Biase.",
    source: ["confirmado-2026-11", "curriculo"],
  },
  {
    when: "2026",
    title: "Transferência para a Universidade de Vassouras",
    text: "Depois do primeiro período, me transferi para a Engenharia de Software da Univassouras, onde sigo no 2º período.",
    source: ["confirmado-2026-11", "curriculo"],
  },
  {
    when: "2026",
    title: "Software em uso de verdade",
    text: "Passei dos estudos para sistemas usados no dia a dia: o Rumo, o painel de encomendas da Brandão Delícias e a gestão de rotina do Brandão Gestão.",
    source: ["confirmado-2026-11"],
  },
  {
    when: "Hoje",
    title: "RIZZEVO, a minha startup",
    text: "Estou construindo a RIZZEVO e o RIZZEVO Hub, a plataforma interna que organiza a operação comercial dela.",
    source: ["confirmado-2026-11"],
  },
]

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
