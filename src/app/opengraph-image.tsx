import { ImageResponse } from "next/og";
import { OG_IMAGE_ALT } from "@/lib/site";

// Default social preview for every page (a route segment can add its own
// opengraph-image to override it).
export const alt = OG_IMAGE_ALT;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #ffffff 0%, #eef2ff 55%, #f5e8ff 100%)",
          color: "#18181b",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, color: "#4f46e5" }}>StandIn</div>
        <div style={{ marginTop: 28, fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
          When an AI interviews you,
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.1,
            backgroundImage: "linear-gradient(90deg, #4f46e5, #7c3aed, #c026d3)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          send an AI that actually knows you.
        </div>
        <div style={{ marginTop: 36, fontSize: 30, color: "#52525b" }}>
          A phone-callable AI representative, grounded in your resume and your own words.
        </div>
      </div>
    ),
    size,
  );
}
