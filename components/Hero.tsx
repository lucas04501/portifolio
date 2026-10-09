// components/Hero.tsx
// Hero: palavras gigantes atravessadas por um objeto central, rotulos de vidro com fatos
// verificaveis e cartoes sobrepostos na base. Todo texto vem de content/ (com fonte);
// aqui ficam so a apresentacao e as posicoes dos rotulos.

import { HeroSphere } from "@/components/HeroSphere";
import { site, socialLinks, heroLabels, heroCards } from "@/content";

// Atraso de entrada por elemento (CSS .reveal em globals.css)
const delay = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

// Posicao de cada rotulo no desktop, na mesma ordem de heroLabels
const labelLayout = [
  {
    pos: "md:left-[1%] md:top-[3%]",
    line: "md:left-full md:top-1/2 md:w-28",
  },
  {
    pos: "md:right-[1%] md:top-[3%]",
    line: "md:right-full md:top-1/2 md:w-28 md:rotate-180",
  },
  {
    pos: "md:left-[6%] md:bottom-[3%]",
    line: "md:left-full md:top-1/2 md:w-28",
  },
] as const;

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-24"
    >
      <div aria-hidden="true" className="plus-grid absolute inset-0 -z-10" />

      <div className="relative max-w-[1280px] mx-auto px-6 pt-8 md:pt-12">
        <p className="rise inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-[12px] font-mono text-text-2">
          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent" />
          {site.seeking}
        </p>

        {/* Palco: palavras gigantes + esfera + rotulos */}
        <div className="relative mt-6 md:mt-0">
          <div className="relative flex flex-col justify-center min-h-[min(100vw,400px)] md:min-h-[600px]">
            <h1
              id="hero-title"
              className="rise relative z-0 font-display uppercase font-light leading-[0.84] tracking-[-0.045em] text-[clamp(52px,13.2vw,208px)] select-none"
            >
              <span className="sr-only">
                {site.name}: {site.role}. Planejar e executar.
              </span>
              <span aria-hidden="true" className="block">
                Planejar
              </span>
              <span aria-hidden="true" className="block text-right text-gradient">
                Executar
              </span>
            </h1>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
            >
              <HeroSphere className="w-[min(92vw,640px)] aspect-square" />
            </div>
          </div>

          {/* Rotulos: lista simples no celular, flutuantes ligados ao objeto no desktop */}
          <ul className="z-20 mt-8 grid gap-3 sm:grid-cols-3 md:mt-0 md:block md:static">
            {heroLabels.map((l, i) => (
              <li
                key={l.title}
                style={delay(0.45 + i * 0.12)}
                className={`reveal glass rounded-2xl px-4 py-3 md:absolute md:w-[250px] ${labelLayout[i].pos}`}
              >
                <p className="font-display text-[15px] font-medium text-text-1">{l.title}</p>
                <p className="text-[12px] text-text-2 leading-snug mt-0.5">{l.text}</p>
                <span
                  aria-hidden="true"
                  className={`hidden md:block absolute h-px bg-gradient-to-r from-accent/60 to-transparent ${labelLayout[i].line}`}
                />
              </li>
            ))}
          </ul>
        </div>

        <p
          style={delay(0.3)}
          className="reveal relative z-20 max-w-[560px] mt-10 text-[16px] md:text-[17px] leading-relaxed text-text-2"
        >
          {site.heroLead}
        </p>
      </div>

      {/* Cartoes sobrepostos na base (borda superior inclinada no desktop) */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-6 mt-14 md:mt-16">
        <div className="grid md:grid-cols-[1fr_1.15fr_1fr] gap-3 md:gap-0 md:items-end">
          <div className="rounded-2xl md:rounded-none bg-bg-2 border border-border md:border-0 p-6 md:pt-14 md:pb-8 md:[clip-path:polygon(0_14%,100%_0,100%_100%,0_100%)]">
            <p className="text-[12px] font-mono text-text-3 uppercase tracking-widest">
              {heroCards.about.label}
            </p>
            <p className="mt-3 text-[15px] text-text-2 leading-relaxed">{heroCards.about.text}</p>
            <a
              href="#trajetoria"
              className="mt-4 inline-flex text-[13px] font-mono text-accent no-underline hover:text-accent-hover"
            >
              {heroCards.about.linkLabel}
            </a>
          </div>

          <div className="rounded-2xl md:rounded-none bg-bg-3 border border-border-2 md:border-0 p-6 md:pt-12 md:pb-10 text-center md:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
            <h2 className="font-display text-[22px] md:text-[26px] font-medium tracking-tight text-text-1">
              {heroCards.cta.title}
            </h2>
            <p className="mt-3 text-[14px] text-text-2 leading-relaxed max-w-[340px] mx-auto">
              {heroCards.cta.text}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 bg-accent text-bg text-sm font-semibold px-6 py-3 rounded-full no-underline hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(141,180,232,0.25)] transition-all duration-200"
              >
                Ver projetos
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-text-1 text-sm font-medium px-6 py-3 rounded-full no-underline border border-border-2 hover:bg-bg-4 transition-colors duration-200"
              >
                Contato
              </a>
            </div>
          </div>

          <div className="rounded-2xl md:rounded-none bg-bg-2 border border-border md:border-0 p-6 md:pt-14 md:pb-8 md:[clip-path:polygon(0_0,100%_14%,100%_100%,0_100%)]">
            <p className="text-[12px] font-mono text-text-3 uppercase tracking-widest">
              {heroCards.find.label}
            </p>
            <ul className="mt-3 flex flex-col gap-1">
              {socialLinks.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-1.5 text-[15px] text-text-1 no-underline hover:text-accent"
                  >
                    {c.label}
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[13px] text-text-2">{site.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
