import sharp from "sharp";
import { mkdir, readdir } from "node:fs/promises";
await mkdir("public/images", { recursive: true });
for (const file of await readdir("src/assets")) {
  if (!file.endsWith(".png")) continue;
  const name = file.slice(0, -4);
  const original = sharp(`src/assets/${file}`);
  for (const width of [640, 1200]) {
    const out = `public/images/${name}${width === 640 ? "-640" : ""}.webp`;
    const info = await original
      .clone()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(out);
    console.log(`${out}: ${info.width} × ${info.height}, ${info.size} bytes`);
  }
}
