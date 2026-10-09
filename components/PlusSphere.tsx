"use client";
// components/PlusSphere.tsx
// Objeto central do hero: esfera de cruzes "+" projetada em canvas 2D (sem three.js).
// Decorativo (aria-hidden). Respeita prefers-reduced-motion (desenha um quadro estatico),
// pausa fora da tela e com a aba oculta, e limita o devicePixelRatio a 2.

import { useEffect, useRef } from "react";

const ACCENT = "141,180,232"; // #8DB4E8
const BUCKETS = 6;

export function PlusSphere({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let w = 0;
    let h = 0;
    let raf = 0;
    let onScreen = true;
    let rotY = 0.6;
    let rotX = -0.28;
    let targetX = -0.28;
    let targetYOffset = 0;
    let yOffset = 0;
    let pts = new Float32Array(0);

    const build = (n: number) => {
      pts = new Float32Array(n * 3);
      const golden = Math.PI * (3 - Math.sqrt(5)); // espiral de Fibonacci: pontos uniformes
      for (let i = 0; i < n; i++) {
        const y = 1 - (i / (n - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const t = golden * i;
        pts[i * 3] = Math.cos(t) * r;
        pts[i * 3 + 1] = y;
        pts[i * 3 + 2] = Math.sin(t) * r;
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build(w < 480 ? 300 : 720);
      draw();
    };

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.42;

      // brilho suave atras da esfera
      const glow = ctx!.createRadialGradient(cx, cy, radius * 0.1, cx, cy, radius * 1.15);
      glow.addColorStop(0, `rgba(${ACCENT},0.14)`);
      glow.addColorStop(1, `rgba(${ACCENT},0)`);
      ctx!.fillStyle = glow;
      ctx!.fillRect(0, 0, w, h);

      const ry = rotY + yOffset;
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // agrupa as cruzes por faixa de profundidade para reduzir chamadas de stroke
      const paths: Path2D[] = Array.from({ length: BUCKETS }, () => new Path2D());
      for (let i = 0; i < pts.length; i += 3) {
        const x = pts[i];
        const y = pts[i + 1];
        const z = pts[i + 2];
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const depth = (z2 + 1) / 2; // 0 = fundo, 1 = frente
        const scale = 0.82 + depth * 0.36;
        const px = cx + x1 * radius * scale;
        const py = cy + y2 * radius * scale;
        const size = (1.6 + depth * 4.4) * (radius / 260);
        const b = Math.min(BUCKETS - 1, Math.floor(depth * BUCKETS));
        paths[b].moveTo(px - size, py);
        paths[b].lineTo(px + size, py);
        paths[b].moveTo(px, py - size);
        paths[b].lineTo(px, py + size);
      }
      ctx!.lineCap = "round";
      for (let b = 0; b < BUCKETS; b++) {
        const d = (b + 0.5) / BUCKETS;
        ctx!.strokeStyle = `rgba(${ACCENT},${(0.1 + d * 0.78).toFixed(3)})`;
        ctx!.lineWidth = 0.8 + d * 1.1;
        ctx!.stroke(paths[b]);
      }
    }

    const loop = () => {
      raf = 0;
      if (reduce.matches || !onScreen || document.hidden) return;
      rotY += 0.0032;
      rotX += (targetX - rotX) * 0.05;
      yOffset += (targetYOffset - yOffset) * 0.05;
      draw();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!raf && !reduce.matches) raf = requestAnimationFrame(loop);
    };

    const onPointer = (e: PointerEvent) => {
      targetX = -0.28 + (e.clientY / window.innerHeight - 0.5) * 0.45;
      targetYOffset = (e.clientX / window.innerWidth - 0.5) * 0.9;
    };
    const onVisibility = () => (document.hidden ? undefined : start());
    const onMotionChange = () => (reduce.matches ? draw() : start());

    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) start();
    });
    const ro = new ResizeObserver(resize);

    io.observe(canvas);
    ro.observe(canvas);
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    reduce.addEventListener("change", onMotionChange);
    resize();
    start();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
      reduce.removeEventListener("change", onMotionChange);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
