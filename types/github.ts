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
  updated_at: string;
  created_at: string;
  open_issues_count: number;
  visibility: string;
}
