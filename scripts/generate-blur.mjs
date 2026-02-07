import sharp from "sharp";
import { readdir, writeFile } from "fs/promises";
import { join, relative } from "path";

const PUBLIC_DIR = join(process.cwd(), "public");
const IMAGES_DIR = join(PUBLIC_DIR, "images");
const OUTPUT_FILE = join(process.cwd(), "src", "data", "blur-data.json");

async function getImageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getImageFiles(fullPath)));
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function generateBlurDataURL(imagePath) {
  try {
    const buffer = await sharp(imagePath)
      .resize(20) // Tiny 20px wide thumbnail
      .blur() // Apply slight blur
      .toBuffer();

    const base64 = buffer.toString("base64");
    const mimeType = imagePath.toLowerCase().endsWith(".png")
      ? "image/png"
      : "image/jpeg";

    return `data:${mimeType};base64,${base64}`;
  } catch (err) {
    console.error(`  Failed: ${imagePath} - ${err.message}`);
    return null;
  }
}

async function main() {
  console.log("Scanning images...");
  const imageFiles = await getImageFiles(IMAGES_DIR);
  console.log(`Found ${imageFiles.length} images\n`);

  const blurMap = {};
  let processed = 0;

  for (const imagePath of imageFiles) {
    // Convert to the public URL path (e.g. /images/1. sunny hill.../COVER.jpg)
    const relativePath = "/" + relative(PUBLIC_DIR, imagePath).replace(/\\/g, "/");
    const blurDataURL = await generateBlurDataURL(imagePath);

    if (blurDataURL) {
      blurMap[relativePath] = blurDataURL;
      processed++;
      process.stdout.write(`\r  Processing: ${processed}/${imageFiles.length}`);
    }
  }

  console.log(`\n\nGenerated blur data for ${processed} images`);
  await writeFile(OUTPUT_FILE, JSON.stringify(blurMap, null, 2));
  console.log(`Written to ${OUTPUT_FILE}`);
}

main().catch(console.error);
