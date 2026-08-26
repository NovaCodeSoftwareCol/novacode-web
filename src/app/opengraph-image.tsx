import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.tagline;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0B1016",
          color: "#E8EDF4",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#E07A4A" }}>NOVACODE</div>
        <div style={{ marginTop: 24, fontSize: 48, lineHeight: 1.2, maxWidth: 900 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ marginTop: 28, fontSize: 22, color: "#9AA3AD" }}>
          Legacy → Modern → Future
        </div>
      </div>
    ),
    size,
  );
}
