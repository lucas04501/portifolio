// components/Marquee.tsx
// Faixa de tecnologias rolando (CSS puro, .marquee em globals.css). Decorativa: repete o que
// ja esta na secao Tecnologias, por isso fica escondida de leitores de tela.

import { skillGroups } from "@/content";

const names = skillGroups.flatMap((g) => g.items).filter((s) => s.level === "projetos").map((s) => s.name);

export function Marquee() {
  return (
    <div aria-hidden="true" className="marquee overflow-hidden border-y border-border bg-bg-2/60 py-4">
      <div className="marquee-track flex w-max gap-10 font-mono text-[13px] uppercase tracking-widest text-text-3">
        {/* duas copias: a animacao anda -50% e recomeca sem salto */}
        {[...names, ...names].map((n, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            {n}
            <span className="text-accent">+</span>
          </span>
        ))}
      </div>
    </div>
  );
}
