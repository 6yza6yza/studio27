import sharp from "sharp";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

const PUBLIC_DIR = join(process.cwd(), "public");
const LOGO_PATH = join(PUBLIC_DIR, "images", "logo.svg");

async function main() {
  const svgContent = await readFile(LOGO_PATH, "utf-8");

  // Extract all <path> elements with their fill info
  const pathRegex = /<path\s([^>]*?)\/>/g;
  const paths = [];
  let match;
  while ((match = pathRegex.exec(svgContent)) !== null) {
    const attrs = match[1];
    const isCutout = attrs.includes("var(--color-bg-primary");
    const dMatch = attrs.match(/d="([^"]*)"/);
    if (dMatch) {
      paths.push({ d: dMatch[1], isCutout });
    }
  }

  console.log(
    `Found ${paths.length} paths (${paths.filter((p) => p.isCutout).length} cutouts)`
  );

  // SVG with all paths in solid dark color
  const allPathsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 1339">${paths.map((p) => `<path fill="#1a1a1a" d="${p.d}"/>`).join("")}</svg>`;

  // SVG with only cutout paths (used for dest-out compositing)
  const cutoutPathsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 1339">${paths.filter((p) => p.isCutout).map((p) => `<path fill="#1a1a1a" d="${p.d}"/>`).join("")}</svg>`;

  const sizes = [
    { name: "favicon-16x16.png", size: 16 },
    { name: "favicon-32x32.png", size: 32 },
    { name: "apple-touch-icon.png", size: 180 },
  ];

  const pngBuffers = {};

  for (const { name, size } of sizes) {
    // Higher density for better SVG rasterization quality (capped to avoid pixel limit)
    const density = Math.min(300, Math.max(144, Math.ceil(72 * (size / 16))));

    const allBuffer = await sharp(Buffer.from(allPathsSvg), { density })
      .resize(size, size, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();

    const cutoutBuffer = await sharp(Buffer.from(cutoutPathsSvg), { density })
      .resize(size, size, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();

    // Use dest-out blend to subtract cutout areas from the full shape
    const result = await sharp(allBuffer)
      .composite([
        {
          input: cutoutBuffer,
          blend: "dest-out",
        },
      ])
      .png()
      .toBuffer();

    await writeFile(join(PUBLIC_DIR, name), result);
    pngBuffers[size] = result;
    console.log(`Generated ${name} (${result.length} bytes)`);
  }

  // Generate favicon.ico (ICO format with embedded PNGs)
  const ico16 = pngBuffers[16];
  const ico32 = pngBuffers[32];
  const numImages = 2;
  const headerSize = 6 + 16 * numImages;

  const icoBuffer = Buffer.alloc(headerSize + ico16.length + ico32.length);

  // ICO header
  icoBuffer.writeUInt16LE(0, 0); // Reserved
  icoBuffer.writeUInt16LE(1, 2); // Type: ICO
  icoBuffer.writeUInt16LE(numImages, 4);

  // Entry 1: 16x16
  let offset = headerSize;
  icoBuffer.writeUInt8(16, 6);
  icoBuffer.writeUInt8(16, 7);
  icoBuffer.writeUInt8(0, 8);
  icoBuffer.writeUInt8(0, 9);
  icoBuffer.writeUInt16LE(1, 10);
  icoBuffer.writeUInt16LE(32, 12);
  icoBuffer.writeUInt32LE(ico16.length, 14);
  icoBuffer.writeUInt32LE(offset, 18);

  // Entry 2: 32x32
  icoBuffer.writeUInt8(32, 22);
  icoBuffer.writeUInt8(32, 23);
  icoBuffer.writeUInt8(0, 24);
  icoBuffer.writeUInt8(0, 25);
  icoBuffer.writeUInt16LE(1, 26);
  icoBuffer.writeUInt16LE(32, 28);
  icoBuffer.writeUInt32LE(ico32.length, 30);
  icoBuffer.writeUInt32LE(headerSize + ico16.length, 34);

  // Copy PNG data
  ico16.copy(icoBuffer, headerSize);
  ico32.copy(icoBuffer, headerSize + ico16.length);

  await writeFile(join(PUBLIC_DIR, "favicon.ico"), icoBuffer);
  console.log(`Generated favicon.ico (${icoBuffer.length} bytes)`);

  console.log("\nAll favicons generated with transparent backgrounds!");
}

main().catch(console.error);
