import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Gambar pratinjau saat tautan dibagikan (WhatsApp, Instagram, dll). Dibuat saat build, tanpa font eksternal.
export const alt = `${site.name} - ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#16191f",
          color: "#fcfcfd",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="110" height="110" viewBox="0 0 64 64" fill="none">
            <path
              d="M18 4H46A14 14 0 0 1 60 18V38A14 14 0 0 1 46 52H30L18 62V52A14 14 0 0 1 4 38V18A14 14 0 0 1 18 4Z"
              fill="#074ce0"
            />
            <path
              d="M23 15V41M23 15H33A6.5 6.5 0 0 1 33 28H23M23 28H35A6.5 6.5 0 0 1 35 41H23"
              stroke="#ffffff"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ marginLeft: 28, fontSize: 56, fontWeight: 700 }}>{site.name}</div>
        </div>
        <div style={{ marginTop: 56, fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>{site.tagline}</div>
        <div style={{ marginTop: 32, fontSize: 34, color: "#d0d4dd" }}>Akademik, desain, media belajar, dan website.</div>
      </div>
    ),
    size,
  );
}
