"use client";
// components/Hero.tsx
// Seção principal com headline animada, CTA e estatísticas do GitHub

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

interface HeroProps {
  totalRepos: number;
  totalStars: number;
}

// Variante de animação reutilizável para os elementos do Hero
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero({ totalRepos, totalStars }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Glows de fundo */}
      <div className="absolute -top-48 -right-24 w-[600px] h-[600px] rounded-full bg-accent/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-36 w-[500px] h-[500px] rounded-full bg-blue/[0.05] blur-3xl pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-6 relative z-10 w-full py-32">
        {/* Badge de disponibilidade */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 bg-bg-3 border border-border-2 rounded-full px-3 py-1.5 mb-8"
        >
          <span
            className="w-2 h-2 rounded-full bg-accent"
            style={{ animation: "pulse-dot 2s infinite" }}
          />
          <span className="text-xs text-text-2 font-mono">
            {siteConfig.available ? "disponível para projetos" : "não disponível no momento"}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-[clamp(44px,7vw,76px)] font-light leading-[1.06] tracking-[-2.5px] mb-6"
        >
          Construindo
          <br />
          <strong className="font-semibold text-text-1">experiências</strong>
          <br />
          <span className="text-accent">digitais</span> com
          <br />
          propósito.
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-[17px] text-text-2 max-w-[480px] leading-[1.7] mb-10 font-light"
        >
          {siteConfig.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="flex items-center gap-3 flex-wrap"
        >
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 bg-accent text-bg text-sm font-semibold px-6 py-3 rounded-full no-underline hover:bg-[#c4e550] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,245,100,0.2)] transition-all duration-200"
          >
            Ver projetos →
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-transparent text-text-2 text-sm px-6 py-3 rounded-full border border-border-2 no-underline hover:text-text-1 hover:border-border hover:bg-bg-3 transition-all duration-200"
          >
            Entrar em contato
          </a>
        </motion.div>

        {/* Stats do GitHub */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="flex items-center gap-8 flex-wrap mt-16 pt-12 border-t border-border"
        >
          <Stat value={totalRepos} label="repositórios" />
          <Stat value={totalStars} label="stars no GitHub" />
          <Stat value={siteConfig.yearsOfExperience} label="anos de experiência" />
        </motion.div>
      </div>
    </section>
  );
}

// Componente auxiliar para as estatísticas
function Stat({ value, label }: { value: number | string; label: string }) {
  return (
    <div>
      <div className="text-[28px] font-medium text-text-1 tracking-[-1px]">
        {value}
      </div>
      <div className="text-xs text-text-3 mt-0.5 font-mono">{label}</div>
    </div>
  );
}
