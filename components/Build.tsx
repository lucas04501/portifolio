"use client";
// components/Build.tsx
// Bloco "construido por agentes": nasce como wireframe (CSS [data-build="wire"] em globals.css,
// que desenha o layout REAL em contornos) e vira conteudo quando entra na tela.
// O conteudo ja esta no HTML; aqui so trocamos o estado.

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

type Phase = "wire" | "out" | "done";

export function Build({
  label,
  className,
  children,
}: {
  /** Etiqueta do blueprint (ex.: "content/projects.ts") */
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px 15% 0px" });
  const [phase, setPhase] = useState<Phase>("wire");
  const reduce = useReducedMotion();
  const [run, setRun] = useState(0); // "Reconstruir" (Nav) repete a construcao

  useEffect(() => {
    const replay = () => {
      setPhase("wire");
      setRun((n) => n + 1);
    };
    window.addEventListener("agents:replay", replay);
    return () => window.removeEventListener("agents:replay", replay);
  }, []);

  useEffect(() => {
    if (!inView) return;
    const a = setTimeout(() => setPhase("out"), 180);
    const b = setTimeout(() => setPhase("done"), 800);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [inView, run]);

  return (
    <motion.div
      ref={ref}
      data-build={phase}
      data-label={label}
      className={className}
      initial={false}
      animate={phase === "wire" && !reduce ? { rotateX: 7, y: 20, scale: 0.985 } : { rotateX: 0, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      style={{ transformPerspective: 1200 }}
    >
      {children}
    </motion.div>
  );
}
