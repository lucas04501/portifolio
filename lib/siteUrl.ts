// lib/siteUrl.ts
// URL publica do site (usada em canonical, Open Graph, sitemap e dados estruturados).
// Defina NEXT_PUBLIC_SITE_URL ao trocar de dominio; sem ela (ou vazia, como no
// .env.example) vale o endereco atual na Vercel.

const fallback = "https://portifolio-nine-livid-23.vercel.app";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallback).replace(/\/$/, "");
