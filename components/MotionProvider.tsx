"use client";
// components/MotionProvider.tsx
// Faz todas as animacoes do Framer Motion respeitarem prefers-reduced-motion do sistema.

import { MotionConfig } from "framer-motion";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
