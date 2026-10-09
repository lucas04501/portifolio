// app/layout.tsx
// Layout raiz: fontes, metadados (SEO), dados estruturados e estrutura base da pagina.

import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site, contacts, skillGroups, education } from "@/content";
import { siteUrl } from "@/lib/siteUrl";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// DM Sans: texto corrido. Fonte variavel (um unico arquivo, todos os pesos)
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// DM Mono: rotulos tecnicos e metadados
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

// Space Grotesk: titulos (alternativas avaliadas: Sora, Geist). Fonte variavel
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.seo.title,
  description: site.seo.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0D10",
  colorScheme: "dark",
};

// Dados estruturados (schema.org/Person), so com informacao ja publica no site e com fonte
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: siteUrl,
  description: site.seo.description,
  homeLocation: { "@type": "Place", name: site.location },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: education[0].institution,
  },
  sameAs: contacts.filter((c) => c.href.startsWith("http")).map((c) => c.href),
  knowsAbout: skillGroups
    .flatMap((g) => g.items)
    .filter((s) => s.level === "projetos")
    .map((s) => s.name),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${dmSans.variable} ${dmMono.variable} ${spaceGrotesk.variable} font-sans`}
      >
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          // "<" escapado para o JSON nunca fechar a tag <script>
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
