// types/github.ts
// Tipo da resposta da GitHub API usado para enriquecer os projetos curados

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
  archived: boolean;
  /** Muda com estrelas, descricao e configuracoes: nao use como data do codigo */
  updated_at: string;
  /** Data do ultimo push, ou seja, do ultimo envio de codigo */
  pushed_at: string | null;
  created_at: string;
  open_issues_count: number;
  visibility: string;
}
