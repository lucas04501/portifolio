// components/Hero.tsx
// Hero: a foto e o fundo da tela (sem moldura), desbotando no escuro; por cima, saudacao,
// nome, papel e CTAs. A palavra gigante fica em contorno na base. Todo texto vem de content/.

import Image from "next/image";
import { Drift } from "@/components/Tilt";
import { site, heroLabels } from "@/content";

// Atraso de entrada por elemento (CSS .reveal em globals.css)
const delay = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-24 md:min-h-[100svh] md:flex md:items-center"
    >
      {/* Foto de fundo: ocupa o topo no celular e o lado direito no desktop */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[78svh] md:inset-y-0 md:left-auto md:right-0 md:h-auto md:w-[54%]">
        <Drift y={70} className="h-full w-full">
          <Image
            src="/lucas.jpg"
            alt={site.heroPhotoAlt}
            width={1254}
            height={1254}
            priority
            sizes="(min-width: 768px) 54vw, 100vw"
            className="hero-photo h-full w-full object-cover object-[50%_22%]"
          />
        </Drift>
        {/* A base da foto some no fundo (so desktop; no celular a mascara ja faz isso) */}
        <div aria-hidden="true" className="hidden md:block absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Brilho azul que respira devagar atras do texto */}
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute -left-40 top-1/4 -z-10 h-[520px] w-[520px] rounded-full" />

      {/* Palavra gigante em contorno, na base */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 overflow-hidden">
        <Drift x={-160}>
          <p
            style={delay(0.4)}
            className="word-rise word-outline font-display font-bold uppercase whitespace-nowrap text-center leading-[0.8] tracking-[-0.04em] text-[clamp(56px,16vw,250px)] select-none"
          >
            {site.heroWord}
          </p>
        </Drift>
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto px-6 pt-[46svh] pb-28 md:py-24">
        <div className="max-w-[620px]">
          <h1 id="hero-title" className="rise">
            <span className="block font-mono text-[14px] font-normal text-text-2">{site.heroGreeting}</span>
            <span className="mt-1 block font-display font-bold uppercase leading-[0.92] tracking-[-0.03em] text-[clamp(46px,7vw,104px)]">
              {site.name}
            </span>
          </h1>

          <p className="rise mt-4 font-mono text-[13px] uppercase tracking-widest text-accent">{site.role}</p>

          <p style={delay(0.3)} className="reveal mt-5 max-w-[520px] text-[16px] md:text-[17px] leading-relaxed text-text-2">
            {site.heroLead}
          </p>

          <div style={delay(0.6)} className="reveal mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 bg-hot text-bg text-sm font-semibold px-6 py-3 rounded-full no-underline hover:bg-hot-hover hover:-translate-y-0.5 transition-all duration-150"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-text-1 text-sm font-medium px-6 py-3 rounded-full no-underline border border-border-2 bg-bg/40 hover:bg-bg-4 transition-colors duration-200"
            >
              Contato
            </a>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {heroLabels.map((l, i) => (
              <li key={l.title} style={delay(0.8 + i * 0.1)} className="reveal glass rounded-xl px-4 py-3">
                <p className="font-display text-[14px] font-medium text-text-1">{l.title}</p>
                <p className="mt-0.5 text-[12px] leading-snug text-text-2">{l.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
