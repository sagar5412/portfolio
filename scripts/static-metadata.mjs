import { mkdir, readFile, writeFile } from "node:fs/promises";
import { loadEnv } from "vite";
import { projects } from "../src/data/projects.js";
import { profile } from "../src/data/profile.js";
const env = loadEnv("production", process.cwd(), "VITE_");
const origin = new URL(
  process.env.VITE_SITE_URL || env.VITE_SITE_URL || "https://gksagar.online",
).origin;
const template = await readFile("dist/index.html", "utf8");
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const routes = [
  {
    path: "/",
    title: `${profile.name} - ${profile.role}`,
    description: profile.description,
    file: "dist/index.html",
  },
  ...projects.map((project) => ({
    path: `/work/${project.slug}`,
    title: `${project.title} - ${profile.name}`,
    description: project.summary,
    file: `dist/work/${project.slug}.html`,
  })),
];
await mkdir("dist/work", { recursive: true });
for (const route of routes) {
  const title = escape(route.title);
  const description = escape(route.description);
  const tags = `\n    <title data-static-seo>${title}</title>
    <meta data-static-seo name="description" content="${description}" />
    <link data-static-seo rel="canonical" href="${origin}${route.path}" />
    <meta data-static-seo property="og:type" content="website" />
    <meta data-static-seo property="og:title" content="${title}" />
    <meta data-static-seo property="og:description" content="${description}" />
    <meta data-static-seo property="og:url" content="${origin}${route.path}" />
    <meta data-static-seo property="og:image" content="${origin}/og-image.webp" />
    <meta data-static-seo property="og:image:width" content="1200" />
    <meta data-static-seo property="og:image:height" content="630" />
    <meta data-static-seo property="og:image:alt" content="G K Sagar - Full Stack Developer. Reliable software. Real-world impact." />
    <meta data-static-seo name="twitter:card" content="summary_large_image" />
    <meta data-static-seo name="twitter:title" content="${title}" />
    <meta data-static-seo name="twitter:description" content="${description}" />
    <meta data-static-seo name="twitter:image" content="${origin}/og-image.webp" />\n`;
  await writeFile(route.file, template.replace("</head>", `${tags}  </head>`));
}
console.log(
  "Emitted static title, description, canonical and social metadata for all 6 public routes.",
);
