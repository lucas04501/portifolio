// components/Contact.tsx
// Contato: e-mail e links. Sem formulario (decisao do projeto): nada simulado,
// nenhum servico externo e nenhum dado coletado.

import { site, contacts, socialLinks } from "@/content";

const email = contacts.find((c) => c.label === "E-mail");

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="relative isolate overflow-hidden py-28 md:py-36 border-t border-border bg-bg-2/60"
    >
      <div aria-hidden="true" className="plus-grid absolute inset-0 -z-10 opacity-60" />

      <div className="max-w-[1280px] mx-auto px-6">
        <div className="scroll-reveal">
          <div className="section-label">
            <div className="section-label-line" />
            <span className="section-label-text">contato</span>
          </div>

          <h2
            id="contato-title"
            className="font-display text-[clamp(36px,6vw,84px)] font-light leading-[1] tracking-[-0.035em]"
          >
            Vamos <strong className="font-medium text-gradient">conversar</strong>?
          </h2>

          <p className="mt-6 max-w-[560px] text-[16px] md:text-[17px] text-text-2 leading-relaxed">
            Estou buscando {site.seeking.toLowerCase()}. Se você tem uma oportunidade ou quer
            conversar sobre software, escreva para mim.
          </p>

          {email && (
            <a
              href={email.href}
              className="mt-10 inline-block font-display text-[clamp(20px,4.2vw,56px)] font-light tracking-[-0.03em] text-text-1 no-underline border-b border-accent/50 hover:text-accent hover:border-accent pb-1 break-all"
            >
              {email.href.replace("mailto:", "")}
            </a>
          )}

          <ul className="mt-10 flex flex-wrap items-center gap-3">
            {socialLinks.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-text-1 no-underline px-5 py-3 rounded-full border border-border-2 bg-bg-3 hover:bg-bg-4 hover:border-accent/50 transition-colors duration-200"
                >
                  {c.label}
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-[14px] text-text-3">{site.location}</p>
        </div>
      </div>
    </section>
  );
}
