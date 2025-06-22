import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Michał Paśko - Portfolio";
  const description =
    searchParams.get("description") ||
    "Tworzenie stron internetowych i aplikacji webowych";
  const type = searchParams.get("type") || "website";

  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1a1a1a",
            fontFamily: "SF Pro",
            padding: "40px 60px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <h1
              style={{
                fontSize: 64,
                fontWeight: 700,
                color: "#ffffff",
                margin: 0,
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 32,
                color: "#666666",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {description}
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "calc(100% - 120px)",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 24,
                color: "#666666",
              }}
            >
              paskomichal.pl · {type}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch {
    return new Response("Failed to generate image", { status: 500 });
  }
}
