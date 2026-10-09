// components/Projects.tsx
// Projetos como estudos de caso. O que aparece vem de content/projects.ts (curado);
// o GitHub so complementa com a data da ultima atualizacao (lib/projects.ts).

import Image from "next/image";
import { getVisibleProjects } from "@/lib/projects";
import type { ProjectView } from "@/lib/projects";
import type { GitHubRepo } from "@/types/github";

const statusLabel: Record<ProjectView["status"], string> = {
  publicado: "Publicado",
  "em-desenvolvimento": "Em desenvolvimento",
  "so-codigo": "Só código, sem demo",
  "estudo-nao-publicado": "Estudo, não publicado",
};

const eyebrow = "text-[12px] font-mono text-text-3 uppercase tracking-widest";

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-[14px] font-medium text-text-1 no-underline px-4 py-2 rounded-full border border-border-2 hover:bg-bg-4 hover:border-accent/50 transition-colors duration-200"
    >
      {children}
      <span aria-hidden="true">↗</span>
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}

function Stack({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tecnologias usadas">
      {items.map((s) => (
        <li
          key={s}
          className="text-[12px] font-mono text-text-2 border border-border-2 rounded-full px-3 py-1"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

function Updated({ iso }: { iso?: string }) {
  if (!iso) return null;
  const label = new Date(iso).toLocaleDateString("pt-BR", { month: "short", year: "numeric" });
  return (
    <p className="text-[12px] font-mono text-text-3">
      Código atualizado em <time dateTime={iso}>{label}</time>
    </p>
  );
}

function Frame({ p }: { p: ProjectView }) {
  return (
    <div className="relative rounded-2xl border border-border-2 bg-bg-2 overflow-hidden shadow-[0_30px_80px_-30px_rgba(141,180,232,0.18)]">
      <div aria-hidden="true" className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-bg-3">
        <span className="w-2.5 h-2.5 rounded-full bg-border-2" />
        <span className="w-2.5 h-2.5 rounded-full bg-border-2" />
        <span className="w-2.5 h-2.5 rounded-full bg-border-2" />
      </div>
      {p.image ? (
        <Image
          src={p.image.src}
          alt={p.image.alt}
          width={p.image.width}
          height={p.image.height}
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="w-full h-auto"
        />
      ) : (
        <div className="plus-grid aspect-[16/10] flex items-center justify-center font-display text-3xl text-text-2">
          {p.name}
        </div>
      )}
    </div>
  );
}

function CaseStudy({ p, flip }: { p: ProjectView; flip: boolean }) {
  return (
    <article
      aria-labelledby={`proj-${p.slug}`}
      className="scroll-reveal grid lg:grid-cols-12 gap-8 lg:gap-14 lg:items-start"
    >
      <div className={`lg:col-span-7 lg:sticky lg:top-28 ${flip ? "lg:order-2" : ""}`}>
        <Frame p={p} />
      </div>

      <div className="lg:col-span-5">
        <p className="flex flex-wrap items-center gap-3">
          <span className={eyebrow}>{p.kind}</span>
          <span className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-[12px] font-mono text-text-2">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent" />
            {statusLabel[p.status]}
          </span>
        </p>

        <h3
          id={`proj-${p.slug}`}
          className="mt-4 font-display text-[clamp(30px,4vw,46px)] font-light leading-[1.05] tracking-[-0.03em]"
        >
          {p.name}
        </h3>
        <p className="mt-4 text-[16px] text-text-2 leading-relaxed">{p.summary}</p>

        <h4 className={`${eyebrow} mt-7 mb-2`}>O problema</h4>
        <p className="text-[15px] text-text-2 leading-relaxed">{p.problem}</p>

        <h4 className={`${eyebrow} mt-7 mb-3`}>O que há por trás</h4>
        <ul className="space-y-2.5">
          {p.highlights.map((h) => (
            <li key={h} className="relative pl-6 text-[15px] text-text-2 leading-relaxed">
              <span aria-hidden="true" className="absolute left-0 top-0 font-mono text-accent">
                +
              </span>
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-7">
          <Stack items={p.stack} />
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          {p.links.demo && <External href={p.links.demo}>Ver no ar</External>}
          {p.links.repo && <External href={p.links.repo}>Código</External>}
        </div>
        <div className="mt-4">
          <Updated iso={p.updatedAt} />
        </div>
      </div>
    </article>
  );
}

function Secondary({ p }: { p: ProjectView }) {
  return (
    <article
      aria-labelledby={`proj-${p.slug}`}
      className="scroll-reveal rounded-2xl border border-border bg-bg-2 p-6 md:p-7 flex flex-col"
    >
      <p className="flex flex-wrap items-center gap-3">
        <span className={eyebrow}>{p.kind}</span>
        <span aria-hidden="true" className="text-text-3">·</span>
        <span className="text-[12px] font-mono text-text-3">{statusLabel[p.status]}</span>
      </p>
      <h3 id={`proj-${p.slug}`} className="mt-3 font-display text-[24px] font-medium tracking-tight text-text-1">
        {p.name}
      </h3>
      <p className="mt-3 text-[15px] text-text-2 leading-relaxed">{p.summary}</p>
      <div className="mt-5">
        <Stack items={p.stack} />
      </div>
      <div className="mt-auto pt-6 flex flex-wrap items-center gap-3">
        {p.links.repo ? (
          <External href={p.links.repo}>Código</External>
        ) : (
          <span className="text-[13px] text-text-3">Sem link público</span>
        )}
        <Updated iso={p.updatedAt} />
      </div>
    </article>
  );
}

export function Projects({ repos = [] }: { repos?: GitHubRepo[] }) {
  const projects = getVisibleProjects(repos);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" aria-labelledby="projetos-title" className="py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="scroll-reveal max-w-[720px]">
          <div className="section-label">
            <div className="section-label-line" />
            <span className="section-label-text">projetos</span>
          </div>
          <h2
            id="projetos-title"
            className="font-display text-[clamp(32px,5vw,60px)] font-light leading-[1.05] tracking-[-0.03em]"
          >
            Projetos que <strong className="font-medium text-gradient">construí</strong>
          </h2>
          <p className="mt-5 text-[16px] md:text-[17px] text-text-2 leading-relaxed">
            Cada um com o problema que resolve, o que há de técnico por trás e onde ver.
          </p>
        </div>

        <div className="mt-16 space-y-24 md:space-y-32">
          {featured.map((p, i) => (
            <CaseStudy key={p.slug} p={p} flip={i % 2 === 1} />
          ))}
        </div>

        {others.length > 0 && (
          <div className="mt-24 md:mt-32">
            <h3 className={`${eyebrow} mb-6`}>Outros projetos e estudos</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {others.map((p) => (
                <Secondary key={p.slug} p={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
