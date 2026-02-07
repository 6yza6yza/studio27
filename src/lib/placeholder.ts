// Generates a shimmer SVG as a base64 data URL for image placeholders.
// This creates a subtle animated gradient that shows while the image loads.

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#d4c4b0" offset="20%" />
      <stop stop-color="#c9b89e" offset="50%" />
      <stop stop-color="#d4c4b0" offset="80%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#d4c4b0" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)">
    <animate attributeName="x" from="-${w}" to="${w}" dur="1.5s" repeatCount="indefinite" />
  </rect>
</svg>`;

function toBase64(str: string) {
  return typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
}

export function getBlurPlaceholder(width = 700, height = 475): string {
  return `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`;
}

export const blurDataURL = getBlurPlaceholder();
