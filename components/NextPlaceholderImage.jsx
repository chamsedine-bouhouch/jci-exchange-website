// components/NextPlaceholderImage.jsx
import React from "react";
import Image from "next/image";

export default function NextPlaceholderImage({
  width = 600,
  height = 500,
  text = "Placeholder",
  alt = "placeholder",
  bg = "#e5e7eb",      // background color
  fg = "#6b7280",      // text / icon color
  fontSize = 20,
  className = "",
  useNextImage = true, // set false to render <img> instead of next/image
  rounded = true,
}) {
  const radius = rounded ? 12 : 0;
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'>
      <rect width='100%' height='100%' rx='${radius}' ry='${radius}' fill='${bg}'/>
      <g transform='translate(${width / 2}, ${height / 2})'>
        <text x='0' y='0' font-family='Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial'
              font-size='${fontSize}' fill='${fg}' text-anchor='middle' dominant-baseline='middle'>
          ${escapeXml(text)}
        </text>
      </g>
    </svg>
  `;
  const dataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  // next/image can handle data URLs, but if you prefer simple img, set useNextImage=false
  if (useNextImage) {
    return (
      <div className={className} style={{ width, height, borderRadius: radius, overflow: "hidden" }}>
        <Image
          src={dataUrl}
          alt={alt}
          width={width}
          height={height}
          style={{ objectFit: "cover" }}
          unoptimized // optional: skip Next.js optimization for data urls
        />
      </div>
    );
  }

  return (
    <img
      src={dataUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ display: "block", width, height, borderRadius: radius }}
    />
  );
}

// small helper to avoid raw XML injection
function escapeXml(unsafe) {
  return String(unsafe)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
