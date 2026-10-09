import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/siteUrl";

// Pagina unica: o sitemap lista apenas a raiz.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
