// content/types.ts
// Tipos da camada de conteúdo curado. Regra do projeto: nada sem fonte.
// Todo item exibível declara de onde veio a informação (`source`, obrigatório e não vazio).

export type Source =
  | "curriculo" // currículo do Lucas
  | "repositorio" // README/código de repositório público dele
  | "perfil-github" // README do perfil lucas04501/lucas04501
  | "confirmado" // confirmado por ele em conversa (2026-10-09)
  | "demo-publica" // site publicado do projeto, aberto e conferido em 2026-10-09

export type Sources = readonly [Source, ...Source[]]

export type ProjectStatus =
  | "publicado"
  | "em-desenvolvimento"
  | "so-codigo" // repositorio publico, sem demonstracao no ar
  | "estudo-nao-publicado"

export interface ProjectImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface Project {
  slug: string
  name: string
  /** Tipo de projeto, em poucas palavras (ex.: "Aplicativo web") */
  kind: string
  image?: ProjectImage
  /** Posição no destaque do site; ausente = projeto secundário */
  featured?: 1 | 2 | 3
  status: ProjectStatus
  /** Só `true` quando há informação suficiente e confirmada para exibir */
  visible: boolean
  /** Uma frase: o que é */
  summary: string
  /** O problema que resolve */
  problem: string
  /** Decisões técnicas e funcionalidades que merecem destaque (somente as comprovadas) */
  highlights: readonly string[]
  stack: readonly string[]
  links: { demo?: string; repo?: string }
  /** Nome do repositório no GitHub, usado só para enriquecer (estrelas, data) */
  repoName?: string
  /** Anotações internas do que ainda falta confirmar; não são exibidas no site */
  pending: readonly string[]
  source: Sources
}

export type SkillLevel = "projetos" | "estudando"

export interface Skill {
  name: string
  level: SkillLevel
  /** Onde foi usado ou estudado, em poucas palavras */
  evidence: string
  source: Sources
}

export interface SkillGroup {
  id: string
  label: string
  items: readonly Skill[]
}

export interface Education {
  institution: string
  course: string
  period: string
  status: string
  source: Sources
}

export interface Course {
  name: string
  provider: string
  source: Sources
}

export interface Language {
  name: string
  level: string
  source: Sources
}

export interface Contact {
  label: string
  href: string
  /** Registro de validação (anotação interna, não altera o que é exibido) */
  status: "confirmado" | "a-validar"
  source: Sources
}
