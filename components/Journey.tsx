// components/Journey.tsx
// Secao "Trajetoria": formacao, cursos e idiomas. Somente o que consta no curriculo.
// Nao ha experiencia profissional listada: o que construi esta em Projetos.

import { Build } from "@/components/Build";
import { journey, education, courses, languages } from "@/content";

const heading = "text-[12px] font-mono text-text-3 uppercase tracking-widest mb-5";

export function Journey() {
  return (
    <section
      id="trajetoria"
      aria-labelledby="trajetoria-title"
      className="py-28 bg-bg-2/60 border-y border-border"
    >
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">
        <Build label="secao · trajetoria" className="lg:sticky lg:top-28 self-start">
          <div className="section-label">
            <div className="section-label-line" />
            <span className="section-label-text">trajetória</span>
          </div>
          <h2
            id="trajetoria-title"
            className="font-display text-[clamp(30px,4.5vw,52px)] font-bold uppercase leading-[0.95] tracking-[-0.03em]"
          >
            Jornada e <strong className="font-bold text-hot">formação</strong>
          </h2>
          <p className="mt-5 text-[15px] text-text-2 leading-relaxed max-w-[360px]">
            O que construí até aqui está em{" "}
            <a href="#projetos" className="text-accent hover:text-accent-hover">
              Projetos
            </a>
            .
          </p>
        </Build>

        <Build label="content/timeline.ts" className="space-y-14">
          <div>
            <h3 className={heading}>Jornada</h3>
            <ol className="ml-2 border-l border-border-2 space-y-8">
              {journey.map((j) => (
                <li key={j.title} className="relative pl-8">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-accent"
                  />
                  <p className="text-[12px] font-mono text-accent">{j.when}</p>
                  <p className="mt-1 font-display text-[20px] font-medium tracking-tight text-text-1">{j.title}</p>
                  <p className="mt-1 text-[15px] text-text-2 leading-relaxed">{j.text}</p>
                </li>
              ))}
            </ol>
          </div>

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
        </Build>
      </div>
    </section>
  );
}
