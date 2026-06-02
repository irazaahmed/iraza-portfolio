import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = "Ahmed Raza - Islamic Scholar & AI Solutions Expert";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 50% 35%, rgba(233,122,44,0.18), transparent 60%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 64,
            display: "flex",
            alignItems: "center",
            border: "2px solid #e97a2c",
            borderRadius: 16,
            width: 64,
            height: 64,
            justifyContent: "center",
            color: "#e97a2c",
            fontSize: 32,
            fontWeight: 800,
          }}
        >
          AR
        </div>

        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            letterSpacing: -2,
            color: "#ffffff",
            textShadow: "0 0 40px rgba(233,122,44,0.5)",
          }}
        >
          AHMED RAZA
        </div>
        <div style={{ fontSize: 34, color: "#e97a2c", marginTop: 12 }}>
          Islamic Scholar · AI Solutions Expert · Full Stack Developer
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#a0a0a0",
            marginTop: 28,
            maxWidth: 820,
            textAlign: "center",
          }}
        >
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
