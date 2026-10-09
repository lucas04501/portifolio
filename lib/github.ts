// lib/github.ts
// Busca os repositorios publicos no GitHub. So enriquece os projetos curados
// (data da ultima atualizacao); quem decide o que aparece e content/projects.ts.
// Cacheado pelo Next.js (revalida a cada hora).

import type { GitHubRepo } from "@/types/github";

export const GITHUB_USERNAME = "lucas04501";

// Token e opcional: sem ele a API responde de forma anonima (60 req/h por IP),
// o que basta com o cache de 1h. Nunca enviar o header com valor vazio.
function githubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

// Repositorios publicos, sem forks nem arquivados. Se a API falhar, devolve lista vazia
// e o site continua exibindo os projetos (sem a data de atualizacao).
export async function getRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=public`,
      { next: { revalidate: 3600 }, headers: githubHeaders() }
    );
    if (!res.ok) throw new Error(`GitHub repos fetch failed: ${res.status}`);
    const repos: GitHubRepo[] = await res.json();
    return repos.filter((r) => !r.fork && !r.archived);
  } catch (error) {
    console.error("Failed to fetch GitHub data:", error);
    return [];
  }
}
