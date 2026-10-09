// lib/projects.ts
// Junta o conteúdo curado (content/projects.ts) com dados vivos do GitHub.
// A curadoria decide o QUE aparece; o GitHub só complementa (estrelas, última atualização).
// Se a API falhar, os projetos continuam sendo exibidos, sem os dados extras.

import { projects } from "@/content";
import type { Project } from "@/content";
import type { GitHubRepo } from "@/types/github";

export interface ProjectView extends Project {
  stars?: number;
  updatedAt?: string;
}

export function getVisibleProjects(repos: GitHubRepo[] = []): ProjectView[] {
  const byName = new Map(repos.map((r) => [r.name, r]));

  return projects
    .filter((p) => p.visible)
    .map((p) => {
      const repo = p.repoName ? byName.get(p.repoName) : undefined;
      // pushed_at = ultimo envio de codigo (updated_at tambem muda com estrelas e descricao)
      return {
        ...p,
        stars: repo?.stargazers_count,
        updatedAt: repo?.pushed_at ?? repo?.updated_at,
      };
    })
    .sort(
      (a, b) =>
        (a.featured ?? 99) - (b.featured ?? 99) // destaques primeiro, na ordem curada
    );
}
