"use client";
// components/Nav.tsx
// Navegacao fixa: marca, links com secao ativa, CTA e menu acessivel no mobile.

import { useEffect, useRef, useState } from "react";
import { site } from "@/content";

// Ordem igual a da pagina (Sobre, Projetos, Tecnologias, Trajetoria, ..., Contato)
const links = [
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "tech", label: "Tecnologias" },
  { id: "trajetoria", label: "Trajetória" },
] as const;

const observed = ["sobre", "projetos", "tech", "trajetoria", "contato"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Marca a secao que ocupa a faixa central da tela
  useEffect(() => {
    const sections = observed
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    // Guarda quais secoes estao na faixa central; sem nenhuma (hero, vaos), nao ha secao ativa
    const inBand = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) =>
          e.isIntersecting ? inBand.add(e.target.id) : inBand.delete(e.target.id)
        );
        setActive(observed.find((id) => inBand.has(id)) ?? null);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Esc fecha o menu e devolve o foco ao botao
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = (id: string) =>
    `text-[13px] no-underline px-3 py-2 rounded-full transition-colors duration-200 font-mono ${
      active === id ? "text-text-1 bg-bg-3" : "text-text-2 hover:text-text-1 hover:bg-bg-3"
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-bg/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav aria-label="Principal" className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="inline-flex items-center gap-2.5 text-[15px] font-medium text-text-1 no-underline tracking-tight font-display"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5 text-accent" fill="none">
            <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          {site.name}
        </a>

        <div className="flex items-center gap-1">
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={active === l.id ? "location" : undefined}
                className={linkClass(l.id)}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contato"
            className="hidden md:inline-flex text-[13px] font-semibold text-bg bg-accent px-4 py-2 rounded-full no-underline hover:bg-accent-hover transition-colors duration-200 ml-2"
          >
            Contato
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-text-1 border border-border-2 bg-bg-3"
            aria-expanded={open}
            aria-controls={open ? "menu-mobile" : undefined}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-mobile" className="md:hidden border-t border-border px-6 pb-5 pt-3 flex flex-col gap-1">
          {[...links, { id: "contato", label: "Contato" }].map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              aria-current={active === l.id ? "location" : undefined}
              className={`${linkClass(l.id)} text-[15px] py-3`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
