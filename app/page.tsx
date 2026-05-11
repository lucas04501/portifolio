// app/page.tsx
// Página principal — Server Component
// Busca dados do GitHub no servidor (SSR com cache) e passa para os componentes

import { getGitHubData } from "@/lib/github";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tech } from "@/components/Tech";
import { Projects } from "@/components/Projects";
import { GitHubSection } from "@/components/GitHubSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default async function Home() {
  // Busca dados do GitHub no servidor — sem loading state no cliente
  // Em caso de erro, retorna dados vazios e o site continua funcionando
  let githubData = null;
  try {
    githubData = await getGitHubData();
  } catch (error) {
    console.error("Failed to fetch GitHub data:", error);
  }

  return (
    <main>
      <Nav />
      <Hero
        totalRepos={githubData?.user.public_repos ?? 0}
        totalStars={githubData?.totalStars ?? 0}
      />
      <About />
      <Tech />
      <Projects repos={githubData?.repos ?? []} />
      <GitHubSection
        user={githubData?.user ?? null}
        languageStats={githubData?.languageStats ?? []}
      />
      <Contact />
      <Footer />
    </main>
  );
}
