// app/page.tsx
// Pagina principal — Server Component.
// O conteudo vem de content/ (curado). O GitHub so complementa os projetos.

import { getRepos } from "@/lib/github";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Tech } from "@/components/Tech";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default async function Home() {
  const repos = await getRepos();

  return (
    <main id="conteudo">
      <Nav />
      <Hero />
      <About />
      <Projects repos={repos} />
      <Tech />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
