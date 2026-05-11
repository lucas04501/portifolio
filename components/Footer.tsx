// components/Footer.tsx
// Footer simples e limpo

import { siteConfig } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-[900px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[13px] text-text-3 font-mono text-center sm:text-left">
          © {year}{" "}
          <span className="text-text-2">{siteConfig.fullName}</span>
          {" "}— {siteConfig.title}
        </div>

        <div className="flex items-center gap-1">
          {[
            { label: "início", href: "#hero" },
            { label: "projetos", href: "#projetos" },
            { label: "github ↗", href: siteConfig.githubUrl, external: true },
            { label: "linkedin ↗", href: siteConfig.linkedinUrl, external: true },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-[12px] text-text-3 no-underline px-2.5 py-1.5 rounded-full hover:text-text-2 hover:bg-bg-3 transition-all duration-200 font-mono"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
