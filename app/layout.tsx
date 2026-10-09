// app/layout.tsx
// Layout raiz — define fontes, metadata e estrutura base da página

import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// DM Sans — elegante, moderna, levemente geométrica
const dmSans = DM_Sans({
  subsets: ["latin"],
  // fonte variavel: sem `weight` o Next baixa um unico arquivo com todos os pesos
  variable: "--font-dm-sans",
  display: "swap",
});

// DM Mono — para labels técnicos e detalhes
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

// Space Grotesk — display largo e geometrico, so para titulos (alternativas: Sora, Geist)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  // fonte variavel (um arquivo, pesos 300 a 700)
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.description,
  keywords: ["desenvolvedor", "fullstack", "next.js", "react", "typescript", "portfolio"],
  authors: [{ name: siteConfig.fullName }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${dmSans.variable} ${dmMono.variable} ${spaceGrotesk.variable} font-sans`}
      >
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
