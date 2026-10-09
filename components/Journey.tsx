// components/Journey.tsx
// Secao "Trajetoria": formacao, cursos e idiomas. Somente o que consta no curriculo.
// Nao ha experiencia profissional listada: o que construi esta em Projetos.

import { education, courses, languages } from "@/content";

const heading = "text-[12px] font-mono text-text-3 uppercase tracking-widest mb-5";

export function Journey() {
  return (
    <section
      id="trajetoria"
      aria-labelledby="trajetoria-title"
      className="py-28 bg-bg-2/60 border-y border-border"
    >
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">
        <div className="scroll-reveal lg:sticky lg:top-28 self-start">
          <div className="section-label">
            <div className="section-label-line" />
            <span className="section-label-text">trajetória</span>
          </div>
          <h2
            id="trajetoria-title"
            className="font-display text-[clamp(30px,4.5vw,52px)] font-light leading-[1.08] tracking-[-0.03em]"
          >
            Formação e <strong className="font-medium text-gradient">aprendizado</strong>
          </h2>
          <p className="mt-5 text-[15px] text-text-2 leading-relaxed max-w-[360px]">
            O que construí até aqui está em{" "}
            <a href="#projetos" className="text-accent hover:text-accent-hover">
              Projetos
            </a>
            .
          </p>
        </div>

        <div className="scroll-reveal space-y-14">
          <div>
            <h3 className={heading}>Formação</h3>
            <ol className="ml-2 border-l border-border-2">
              {education.map((e) => (
                <li key={e.institution} className="relative pl-8 pb-2">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[9px] top-0 w-[17px] h-[17px] rounded-full bg-bg-2 text-accent font-mono text-[15px] leading-[15px] text-center"
                  >
                    +
                  </span>
                  <p className="text-[12px] font-mono text-accent">{e.period}</p>
                  <p className="mt-1 font-display text-[22px] font-medium tracking-tight text-text-1">
                    {e.course}
                  </p>
                  <p className="text-[15px] text-text-2">{e.institution}</p>
                  <p className="mt-1 text-[14px] text-text-3">{e.status}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className={heading}>Cursos complementares</h3>
            <ul className="divide-y divide-border border-y border-border">
              {courses.map((c) => (
                <li key={c.name} className="py-3.5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <span className="text-[16px] text-text-1">{c.name}</span>
                  <span className="text-[13px] font-mono text-text-3">{c.provider}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={heading}>Idiomas</h3>
            <dl className="space-y-4">
              {languages.map((l) => (
                <div key={l.name}>
                  <dt className="text-[16px] text-text-1">{l.name}</dt>
                  <dd className="text-[14px] text-text-2 leading-relaxed">{l.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
