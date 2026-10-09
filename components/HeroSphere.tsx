"use client";
// components/HeroSphere.tsx
// Carrega a esfera depois da hidratacao: o canvas e decorativo e nao deve disputar
// o processamento inicial com o texto do hero (afeta TBT/LCP no celular).

import dynamic from "next/dynamic";

const PlusSphere = dynamic(() => import("@/components/PlusSphere").then((m) => m.PlusSphere), {
  ssr: false,
});

export function HeroSphere({ className }: { className?: string }) {
  return <PlusSphere className={className} />;
}
