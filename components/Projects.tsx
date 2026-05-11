"use client";
// components/Projects.tsx
// Seção de projetos com repos do GitHub + filtro por destaque
// Os dados já chegam prontos do servidor (sem fetch no cliente)

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { getRepoIcon, LANGUAGE_COLORS } from "@/lib/github";
import type { GitHubRepo } from "@/types/github";

interface ProjectsProps {
  repos: GitHubRepo[];
}

type Filter = "all" | "stars";

function ProjectCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const langColor = LANGUAGE_COLORS[repo.language ?? ""] ?? "#888";
  const icon = getRepoIcon(repo.name, repo.topics ?? []);
  const desc = repo.description ?? "Sem descrição disponível.";
  const topics = (repo.topics ?? []).slice(0, 3);

  return (
    <motion.a
      ref={ref}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-bg-2 border border-border rounded-xl p-6 no-underline text-inherit flex flex-col hover:border-border-2 hover:-translate-y-[3px] transition-all duration-250 relative overflow-hidden"
    >
      {/* Spotlight hover effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(212,245,100,0.04), transparent 60%)" }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.parentElement!.getBoundingClientRect();
          e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
        }}
      />

      {/* Topo do card */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-9 h-9 bg-bg-4 border border-border-2 rounded-lg flex items-center justify-center text-base flex-shrink-0">
          {icon}
        </div>
        <div className="flex gap-2">
          {repo.stargazers_count > 0 && (
            <span className="text-[11px] text-text-3 bg-bg-3 border border-border rounded-full px-2 py-1 font-mono">
              ⭐ {repo.stargazers_count}
            </span>
          )}
          <span className="text-[11px] text-text-3 bg-bg-3 border border-border rounded-full px-2 py-1 font-mono group-hover:text-text-2 transition-colors">
            ↗ GitHub
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="text-[15px] font-medium text-text-1 mb-1.5 tracking-tight">
        {repo.name}
      </div>
      <div className="text-[13px] text-text-3 leading-relaxed mb-4 flex-1">
        {desc.length > 100 ? `${desc.slice(0, 100)}...` : desc}
      </div>

      {/* Topics */}
      {topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {topics.map((t) => (
            <span
              key={t}
              className="text-[11px] text-text-3 bg-bg-3 border border-border rounded-full px-2 py-0.5 font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Rodapé */}
      <div className="flex items-center gap-3 pt-3.5 border-t border-border">
        {repo.language && (
          <div className="flex items-center gap-1.5 text-[11px] text-text-3 font-mono">
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: langColor }}
            />
            {repo.language}
          </div>
        )}
        <div className="text-[11px] text-text-3 font-mono ml-auto">
          {new Date(repo.updated_at).toLocaleDateString("pt-BR", {
            month: "short",
            year: "numeric",
          })}
        </div>
      </div>
    </motion.a>
  );
}

export function Projects({ repos }: ProjectsProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const displayed = filter === "stars"
    ? [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count).filter(r => r.stargazers_count > 0)
    : repos.slice(0, 9);

  return (
    <section id="projetos" className="py-28">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(24px,3.5vw,38px)] font-light tracking-[-1.2px]"
          >
            Projetos em <strong className="font-semibold">destaque</strong>
          </motion.h2>

          {/* Filtro */}
          <div className="flex gap-1.5 bg-bg-3 border border-border rounded-full p-1">
            {(["all", "stars"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-[12px] font-mono px-3.5 py-1.5 rounded-full transition-all duration-200 border-none cursor-pointer ${
                  filter === f
                    ? "bg-accent text-bg font-semibold"
                    : "bg-transparent text-text-3 hover:text-text-2"
                }`}
              >
                {f === "all" ? "Todos" : "Com estrelas ⭐"}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de projetos */}
        {repos.length === 0 ? (
          <EmptyState />
        ) : displayed.length === 0 ? (
          <p className="text-text-3 text-sm font-mono py-10">
            Nenhum repositório com estrelas ainda.
          </p>
        ) : (
          <AnimatePresence mode="wait">
            <div
              key={filter}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {displayed.map((repo, i) => (
                <ProjectCard key={repo.id} repo={repo} index={i} />
              ))}
            </div>
          </AnimatePresence>
        )}

        {/* Link para ver mais */}
        {repos.length > 9 && (
          <div className="mt-10 text-center">
            <a
              href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "lucas04401"}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-3 text-sm font-mono no-underline hover:text-text-2 transition-colors"
            >
              Ver todos os {repos.length} repositórios no GitHub ↗
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function EmptyState() {
  return (
    <div className="py-16 text-center">
      <div className="text-4xl mb-4">📭</div>
      <p className="text-text-3 text-sm font-mono">
        Não foi possível carregar os projetos.
      </p>
      <p className="text-text-3 text-xs font-mono mt-1">
        Verifique sua conexão ou tente novamente mais tarde.
      </p>
    </div>
  );
}
