// lib/github.ts
// Funções para buscar dados da GitHub API
// Os dados são cacheados pelo Next.js (revalidate a cada hora)

import type { GitHubUser, GitHubRepo, GitHubData, LanguageStat } from "@/types/github";

const GITHUB_USERNAME = "lucas04501";

// Mapeamento de cores por linguagem (igual ao GitHub)
export const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Vue: "#41b883",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  "C#": "#178600",
  "C++": "#f34b7d",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
};

function getLanguageColor(lang: string): string {
  return LANGUAGE_COLORS[lang] ?? "#888888";
}

// Busca dados do usuário GitHub
async function fetchUser(): Promise<GitHubUser> {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
    next: { revalidate: 3600 }, // Cache por 1 hora
    headers: {
      Accept: "application/vnd.github.v3+json",
      // Adicione seu token aqui se quiser mais rate limit:
      // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!res.ok) throw new Error(`GitHub user fetch failed: ${res.status}`);
  return res.json();
}

// Busca repositórios públicos
async function fetchRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50&type=public`,
    {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github.v3+json",
        // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  if (!res.ok) throw new Error(`GitHub repos fetch failed: ${res.status}`);
  return res.json();
}

// Calcula estatísticas de linguagens
function calculateLanguageStats(repos: GitHubRepo[]): LanguageStat[] {
  const counts: Record<string, number> = {};

  repos.forEach((repo) => {
    if (repo.language && !repo.fork) {
      counts[repo.language] = (counts[repo.language] ?? 0) + 1;
    }
  });

  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  if (total === 0) return [];

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => ({
      name,
      count,
      percentage: Math.round((count / total) * 100),
      color: getLanguageColor(name),
    }));
}

// Função principal — busca todos os dados do GitHub de uma vez
export async function getGitHubData(): Promise<GitHubData> {
  const [user, allRepos] = await Promise.all([fetchUser(), fetchRepos()]);

  // Filtra forks e repos arquivados
  const HIDDEN_REPOS = ["https---github.com-lucas04501-MyProductivityAPP", "lucas04501", "WebAPP", "MyProductivityAPP", "pytraining"];

  const repos = allRepos
  .filter((r) => !r.fork && !r.archived)
  .filter((r) => !HIDDEN_REPOS.includes(r.name))  // ← Esconde repos específicos
  .sort((a, b) => b.stargazers_count - a.stargazers_count);

  const totalStars = repos.reduce((a, r) => a + r.stargazers_count, 0);
  const languageStats = calculateLanguageStats(repos);

  return { user, repos, languageStats, totalStars };
}

// Ícone baseado no nome/tópicos do repo
export function getRepoIcon(name: string, topics: string[]): string {
  const n = name.toLowerCase();
  const t = topics.join(" ").toLowerCase();
  const all = `${n} ${t}`;

  if (all.includes("api") || all.includes("server") || all.includes("back")) return "⚙️";
  if (all.includes("bot") || all.includes("discord") || all.includes("telegram")) return "🤖";
  if (all.includes("mobile") || all.includes("app") || all.includes("react-native")) return "📱";
  if (all.includes("cli") || all.includes("terminal") || all.includes("shell")) return "⌨️";
  if (all.includes("portfolio") || all.includes("personal") || all.includes("site")) return "🎨";
  if (all.includes("game") || all.includes("pygame")) return "🎮";
  if (all.includes("web") || all.includes("front") || all.includes("next")) return "🌐";
  if (all.includes("data") || all.includes("analytics") || all.includes("ml")) return "📊";
  return "⚡";
}
