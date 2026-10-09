// components/Tech.tsx
// Tecnologias por nivel de evidencia: o que ja usei em projetos x o que estou estudando.
// Tudo vem de content/skills.ts (cada item tem fonte). Sem icones: nada de marca aproximada.

import { skillGroups } from "@/content";

export function Tech() {
  return (
    <section id="tech" aria-labelledby="tech-title" className="py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="scroll-reveal max-w-[720px]">
          <div className="section-label">
            <div className="section-label-line" />
            <span className="section-label-text">tecnologias</span>
          </div>
          <h2
            id="tech-title"
            className="font-display text-[clamp(32px,5vw,60px)] font-light leading-[1.05] tracking-[-0.03em]"
          >
            Tecnologias, por <strong className="font-medium text-gradient">evidência</strong>
          </h2>
          <p className="mt-5 text-[16px] md:text-[17px] text-text-2 leading-relaxed">
            Separo o que já usei nos meus projetos do que ainda estou estudando, e digo onde usei.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-14">
          {skillGroups.map((group) => (
            <div key={group.id} className="scroll-reveal">
              <h3 className="text-[12px] font-mono text-text-3 uppercase tracking-widest mb-4">
                {group.label}
              </h3>
              <ul className="divide-y divide-border border-y border-border">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="py-3.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                  >
                    <span className="flex items-center gap-2.5 text-[16px] text-text-1">
                      <span
                        aria-hidden="true"
                        className={
                          item.level === "projetos"
                            ? "w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                            : "w-1.5 h-1.5 rounded-full border border-accent-dim shrink-0"
                        }
                      />
                      {item.name}
                      {item.level === "estudando" && (
                        <span className="text-[11px] font-mono text-accent border border-accent-dim/60 rounded-full px-2 py-0.5">
                          estudando
                        </span>
                      )}
                    </span>
                    <span className="text-[13px] text-text-3 leading-snug">{item.evidence}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="scroll-reveal mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-text-3">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent" />
            usei em projetos
          </span>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full border border-accent-dim" />
            estou estudando
          </span>
        </p>
      </div>
    </section>
  );
}
