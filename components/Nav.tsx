"use client";
// components/Nav.tsx
// Navbar fixa com efeito de blur ao fazer scroll

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[900px] mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-[15px] font-medium text-text-1 no-underline tracking-tight"
        >
          {siteConfig.github}
          <span className="text-accent">.</span>dev
        </a>

        {/* Links */}
        <div className="flex items-center gap-2">
          {[
            { label: "sobre", href: "#sobre" },
            { label: "stack", href: "#tech" },
            { label: "projetos", href: "#projetos" },
            { label: "contato", href: "#contato" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden sm:block text-[13px] text-text-2 no-underline px-3 py-1.5 rounded-full hover:text-text-1 hover:bg-bg-3 transition-all duration-200 font-mono"
            >
              {link.label}
            </a>
          ))}

          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-semibold text-bg bg-accent px-4 py-1.5 rounded-full no-underline hover:bg-[#c4e550] hover:-translate-y-px transition-all duration-200 ml-2"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
