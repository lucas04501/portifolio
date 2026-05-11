"use client";
// components/About.tsx
// Seção "Sobre mim" com cards de diferenciais e animações de scroll

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/config";

// Hook reutilizável para animação ao entrar na viewport
function useFadeUp(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}

const differentials = [
  {
    icon: "⚡",
    title: "Performance First",
    desc: "Código otimizado, builds rápidos e experiências que não frustram o usuário.",
  },
  {
    icon: "🎨",
    title: "UI com cuidado",
    desc: "Detalhes que fazem diferença: tipografia, espaçamento, motion bem dosado.",
  },
  {
    icon: "🏗️",
    title: "Arquitetura sólida",
    desc: "Backend estruturado, APIs claras e código que escala com o produto.",
  },
];

export function About() {
  const { ref: sectionRef, isInView } = useFadeUp();

  return (
    <section id="sobre" className="py-28">
      <div className="max-w-[900px] mx-auto px-6" ref={sectionRef}>
        {/* Label */}
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text">sobre mim</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[clamp(28px,4vw,42px)] font-light leading-[1.15] tracking-[-1.5px] mb-5">
              Olá, sou{" "}
              <strong className="font-semibold">{siteConfig.name}</strong> —
              <br />
              {siteConfig.title}
            </h2>

            {siteConfig.about.map((paragraph, i) => (
              <p key={i} className="text-[15px] text-text-2 leading-[1.75] mb-4">
                {paragraph}
              </p>
            ))}

            <div className="mt-6">
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent text-text-2 text-sm px-5 py-2.5 rounded-full border border-border-2 no-underline hover:text-text-1 hover:border-border hover:bg-bg-3 transition-all duration-200"
              >
                github.com/{siteConfig.github} ↗
              </a>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="flex flex-col gap-3">
            {differentials.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-bg-2 border border-border rounded-xl p-5 hover:border-border-2 transition-colors duration-200"
              >
                <div className="text-xl mb-2.5">{item.icon}</div>
                <div className="text-sm font-medium text-text-1 mb-1">
                  {item.title}
                </div>
                <div className="text-[13px] text-text-3 leading-relaxed">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
