"use client";
// components/Tilt.tsx
// Movimento 3D: Tilt inclina o conteudo conforme o mouse (camadas internas com translateZ
// ganham profundidade real) e Drift desloca um elemento conforme a rolagem da pagina.

import { useEffect } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

const spring = { stiffness: 160, damping: 18 };

export function Tilt({
  children,
  className,
  max = 9,
}: {
  children: React.ReactNode;
  className?: string;
  /** Inclinacao maxima, em graus */
  max?: number;
}) {
  const rx = useSpring(0, spring);
  const ry = useSpring(0, spring);
  const reduce = useReducedMotion();

  return (
    <div
      className={className}
      style={{ perspective: 1100 }}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse") return; // no toque nao ha "hover" para inclinar
        const r = e.currentTarget.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 2 * max);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 2 * max);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}>
        {children}
      </motion.div>
    </div>
  );
}

// Luz azul suave que segue o ponteiro do mouse (nao existe no toque nem com movimento reduzido)
export function Spotlight() {
  const x = useSpring(-600, { stiffness: 120, damping: 20 });
  const y = useSpring(-600, { stiffness: 120, damping: 20 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX - 260);
      y.set(e.clientY - 260);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(79,140,255,0.13),transparent)]"
      style={{ x, y }}
    />
  );
}

// Barra fina no topo que acompanha o quanto da pagina ja foi rolado
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-hot"
      style={{ scaleX }}
    />
  );
}

export function Drift({
  children,
  className,
  x = 0,
  y = 0,
}: {
  children: React.ReactNode;
  className?: string;
  /** Deslocamento total (px) ao rolar uma altura de tela */
  x?: number;
  y?: number;
}) {
  const { scrollY } = useScroll();
  const k = useReducedMotion() ? 0 : 1;
  const dx = useTransform(scrollY, [0, 900], [0, x * k]);
  const dy = useTransform(scrollY, [0, 900], [0, y * k]);
  return (
    <motion.div className={className} style={{ x: dx, y: dy }}>
      {children}
    </motion.div>
  );
}
