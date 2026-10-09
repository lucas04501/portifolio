// components/Footer.tsx
// Rodape enxuto, com dados de content/.

import { site, socialLinks } from "@/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-text-3 font-mono text-center sm:text-left">
          © {year} <span className="text-text-2">{site.name}</span>
        </p>

        <nav aria-label="Rodapé" className="flex flex-wrap items-center justify-center gap-1">
          <a
            href="#hero"
            className="text-[13px] text-text-2 no-underline px-3 py-2 rounded-full hover:text-text-1 hover:bg-bg-3 transition-colors duration-200 font-mono"
          >
            início
          </a>
          <a
            href="#projetos"
            className="text-[13px] text-text-2 no-underline px-3 py-2 rounded-full hover:text-text-1 hover:bg-bg-3 transition-colors duration-200 font-mono"
          >
            projetos
          </a>
          {socialLinks.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-text-2 no-underline px-3 py-2 rounded-full hover:text-text-1 hover:bg-bg-3 transition-colors duration-200 font-mono"
            >
              {c.label.toLowerCase()} ↗<span className="sr-only"> (abre em nova aba)</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
