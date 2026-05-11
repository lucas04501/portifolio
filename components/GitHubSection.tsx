"use client";
// components/GitHubSection.tsx

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import type { GitHubUser, LanguageStat } from "@/types/github";

interface GitHubSectionProps {
  user: GitHubUser | null;
  languageStats: LanguageStat[];
}

export function GitHubSection({ user, languageStats }: GitHubSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="github" className="py-28 bg-bg-2 border-y border-border">
      <div className="max-w-[900px] mx-auto px-6" ref={ref}>
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text">github</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Perfil */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            {/* Avatar */}
            <div className="relative w-fit">
              <div className="w-20 h-20 rounded-full border-2 border-border-2 overflow-hidden bg-bg-4 flex items-center justify-center text-3xl">
                {user?.avatar_url ? (
                  <Image
                    src={user.avatar_url}
                    alt={user.name ?? siteConfig.github}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                ) : (
                  <span>👨‍💻</span>
                )}
              </div>
              <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-accent border-2 border-bg-2 rounded-full" />
            </div>

            {/* Info */}
            <div>
              <div className="text-xl font-medium text-text-1 tracking-tight">
                {user?.name ?? siteConfig.fullName}
              </div>
              <div className="text-sm text-text-2 mt-0.5">
                {user?.bio ?? `${siteConfig.title} • GitHub`}
              </div>
              {user?.location && (
                <div className="text-[13px] text-text-3 font-mono mt-1">
                  📍 {user.location}
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: user?.public_repos ?? 0, label: "repos" },
                { value: user?.followers ?? 0, label: "seguidores" },
                { value: user?.following ?? 0, label: "seguindo" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-bg-3 border border-border rounded-lg p-3 text-center"
                >
                  <div className="text-[22px] font-medium text-text-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-text-3 font-mono mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit inline-flex items-center gap-2 bg-transparent text-text-2 text-sm px-5 py-2.5 rounded-full border border-border-2 no-underline hover:text-text-1 hover:border-border hover:bg-bg-3 transition-all duration-200"
            >
              Ver perfil completo ↗
            </a>
          </motion.div>

          {/* Linguagens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-sm font-medium text-text-1 mb-5">
              Linguagens mais usadas
            </div>
            {languageStats.length > 0 ? (
              <div className="flex flex-col gap-4">
                {languageStats.map((lang, i) => (
                  <LanguageBar
                    key={lang.name}
                    lang={lang}
                    index={i}
                    isInView={isInView}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {[60, 45, 30, 20, 15].map((w, i) => (
                  <div key={i} className="skeleton h-10 rounded-lg" style={{ width: `${w}%` }} />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LanguageBar({
  lang,
  index,
  isInView,
}: {
  lang: LanguageStat;
  index: number;
  isInView: boolean;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setWidth(lang.percentage), 200 + index * 80);
      return () => clearTimeout(timer);
    }
  }, [isInView, lang.percentage, index]);

  return (
    <div>
      <div className="flex justify-between mb-1.5 text-[12px] font-mono">
        <span className="text-text-2">{lang.name}</span>
        <span className="text-text-3">{lang.percentage}%</span>
      </div>
      <div className="h-[3px] bg-bg-4 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-[1200ms]"
          style={{
            width: `${width}%`,
            background: lang.color,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </div>
    </div>
  );
}
