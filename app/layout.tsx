// app/layout.tsx
// Layout raiz — define fontes, metadata e estrutura base da página

import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

// DM Sans — elegante, moderna, levemente geométrica
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
      <body className={`${dmSans.variable} ${dmMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
