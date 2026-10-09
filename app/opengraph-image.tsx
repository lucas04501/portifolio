import { ImageResponse } from "next/og";
import { site } from "@/content";

// Imagem de compartilhamento (WhatsApp, LinkedIn, X...). Gerada no build; sem fonte externa.
export const alt = site.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const accent = "#8DB4E8";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0B0D10 0%, #12151A 60%, #1A2433 100%)",
          color: "#E8EAED",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 64, color: accent, lineHeight: 1 }}>+</div>
          <div style={{ display: "flex", fontSize: 28, color: "#9AA3AF" }}>{site.seeking}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 112, fontWeight: 300, letterSpacing: -4, lineHeight: 1 }}>
            {site.name}
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 44, color: accent }}>
            Desenvolvedor full stack em formação
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#9AA3AF" }}>
          Estudante de Engenharia de Software · Univassouras
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            right: 70,
            top: 40,
            fontSize: 420,
            color: accent,
            opacity: 0.14,
            lineHeight: 1,
          }}
        >
          +
        </div>
      </div>
    ),
    size
  );
}
