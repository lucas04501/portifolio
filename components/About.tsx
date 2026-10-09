// components/About.tsx
// Secao "Sobre mim". Todo o texto vem de content/ (cada item tem fonte registrada).

import { site, workStyle } from "@/content";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="py-28">
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-24">
        <div className="scroll-reveal">
          <div className="section-label">
            <div className="section-label-line" />
            <span className="section-label-text">sobre mim</span>
          </div>

          <h2
            id="sobre-title"
            className="font-display text-[clamp(32px,5vw,60px)] font-light leading-[1.05] tracking-[-0.03em] mb-8"
          >
            Aprendendo na prática,{" "}
            <strong className="font-medium text-gradient">do planejamento à publicação</strong>.
          </h2>

          <div className="space-y-5 max-w-[620px]">
            {site.summary.map((p) => (
              <p key={p} className="text-[16px] md:text-[17px] text-text-2 leading-[1.75]">
                {p}
              </p>
            ))}
            <p className="text-[16px] md:text-[17px] text-text-2 leading-[1.75]">{site.story}</p>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-[12px] font-mono text-text-2">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent" />
            Procuro: {site.seeking}
          </p>
        </div>

        <div className="scroll-reveal lg:pt-[72px]">
          <h3 className="text-[12px] font-mono text-text-3 uppercase tracking-widest mb-6">
            Como eu trabalho
          </h3>
          <dl className="divide-y divide-border border-y border-border">
            {workStyle.map((item) => (
              <div key={item.title} className="py-5">
                <dt className="font-display text-[19px] font-medium text-text-1 tracking-tight">
                  {item.title}
                </dt>
                <dd className="mt-1.5 text-[15px] text-text-2 leading-relaxed">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
