import { mkdir, writeFile } from "node:fs/promises";
import { loadEnv } from "vite";
import sharp from "sharp";
import { projects } from "../src/data/projects.js";
const env = loadEnv("production", process.cwd(), "VITE_");
const site = new URL(
  process.env.VITE_SITE_URL || env.VITE_SITE_URL || "https://gksagar.online",
).origin;
await mkdir("public", { recursive: true });
const urls = ["/", ...projects.map((project) => `/work/${project.slug}`)];
await writeFile(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((path) => `  <url><loc>${site}${path}</loc></url>`).join("\n")}\n</urlset>\n`,
);
await writeFile(
  "public/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`,
);
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#f5f3ed"/><path d="M60 109h1080M60 555h1080" stroke="#d6d2c9"/><rect x="60" y="40" width="44" height="44" fill="#b63824"/><text x="70" y="75" font-family="Georgia,serif" font-style="italic" font-size="38" fill="#f5f3ed">s.</text><text x="120" y="71" font-family="Arial,sans-serif" font-size="22" fill="#191919">G K Sagar</text><text x="1140" y="68" text-anchor="end" font-family="Arial,sans-serif" font-size="16" fill="#595953">FULL STACK DEVELOPER / BENGALURU</text><text x="60" y="253" font-family="Arial,sans-serif" font-size="105" letter-spacing="-6" fill="#191919">Reliable software.</text><text x="60" y="375" font-family="Georgia,serif" font-style="italic" font-size="104" letter-spacing="-4" fill="#191919">Real-world impact.</text><text x="60" y="476" font-family="Arial,sans-serif" font-size="24" fill="#595953">Production systems. Thoughtful interfaces. End-to-end ownership.</text><text x="60" y="591" font-family="Arial,sans-serif" font-size="18" fill="#595953">SELECTED WORK / PORTFOLIO</text><text x="1140" y="591" text-anchor="end" font-family="Arial,sans-serif" font-size="18" fill="#b63824">${new URL(site).hostname}</text></svg>`;
await sharp(Buffer.from(og))
  .webp({ quality: 90 })
  .toFile("public/og-image.webp");
console.log(
  `Generated sitemap, robots, and 1200 × 630 Open Graph image for ${site}`,
);
