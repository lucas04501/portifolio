"use client";
// components/Tech.tsx

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/config";

type TechItem = { name: string; icon: string };

function TechItemCard({ tech, delay }: { tech: TechItem; delay: number }) {
  const isSvg = tech.icon.trimStart().startsWith("<svg");

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-bg-3 border border-border rounded-xl px-3 py-4 text-center hover:bg-bg-4 hover:border-border-2 hover:-translate-y-0.5 transition-all duration-200 cursor-default group flex flex-col items-center gap-2"
    >
      {isSvg ? (
        <div
          className="w-6 h-6 [&>svg]:w-full [&>svg]:h-full"
          dangerouslySetInnerHTML={{ __html: tech.icon }}
        />
      ) : (
        <span className="text-xl leading-none">{tech.icon}</span>
      )}
      <span className="text-[11px] text-text-3 font-mono group-hover:text-text-2 transition-colors leading-tight">
        {tech.name}
      </span>
    </motion.div>
  );
}

function TechCategory({
  title,
  items,
  baseDelay = 0,
}: {
  title: string;
  items: readonly TechItem[];
  baseDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div ref={ref}>
      <p className="text-[13px] font-medium text-text-2 mb-3 font-mono tracking-widest uppercase">
        {title}
      </p>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2">
        {items.map((tech, i) =>
          isInView ? (
            <TechItemCard key={tech.name} tech={tech} delay={baseDelay + i * 0.05} />
          ) : (
            <div key={tech.name} className="bg-bg-3 border border-border rounded-xl h-[84px]" />
          )
        )}
      </div>
    </div>
  );
}

export function Tech() {
  return (
    <section id="tech" className="py-28 bg-bg-2 border-y border-border">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text">stack técnica</span>
        </div>
        <div className="flex flex-col gap-10">
          <TechCategory title="Frontend"              items={siteConfig.tech.frontend} baseDelay={0}    />
          <TechCategory title="Backend"               items={siteConfig.tech.backend}  baseDelay={0.05} />
          <TechCategory title="IA & Automação"        items={siteConfig.tech.ai}       baseDelay={0.1}  />
          <TechCategory title="Infra & DevOps"        items={siteConfig.tech.devops}   baseDelay={0.15} />
          <TechCategory title="Pagamentos & Serviços" items={siteConfig.tech.services} baseDelay={0.2}  />
        </div>
      </div>
    </section>
  );
}