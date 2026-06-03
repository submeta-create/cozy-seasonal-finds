import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#fbf7f0",
          color: "#70422f",
          display: "flex",
          fontFamily: "Georgia, serif",
          fontSize: 24,
          height: "100%",
          justifyContent: "center",
          width: "100%"
        }}
      >
        C
      </div>
    ),
    size
  );
}
