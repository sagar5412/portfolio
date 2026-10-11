import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const baseUrl = process.env.QA_URL || "http://127.0.0.1:5173";
const folder = `artifacts/${process.argv[2] || "05-cases"}`;
await mkdir(folder, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const checks = [];
try {
  for (const slug of [
    "patient-journey",
    "invoice-auditor",
    "live-quiz",
    "rapidraw",
    "corenote",
  ]) {
    for (const width of [375, 768, 1440]) {
      const page = await browser.newPage({
        viewport: { width, height: 1000 },
        reducedMotion: "reduce",
      });
      const errors = [];
      page.on("pageerror", (error) => errors.push(error.message));
      await page.goto(`${baseUrl}/work/${slug}`, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      for (const img of await page.locator("img").all())
        await img.scrollIntoViewIfNeeded();
      await page.waitForFunction(() =>
        [...document.images].every(
          (img) => img.complete && img.naturalWidth > 0,
        ),
      );
      await page.evaluate(() =>
        window.scrollTo({ top: 0, behavior: "instant" }),
      );
      await page.screenshot({
        path: `${folder}/${slug}-${width}.png`,
        fullPage: true,
      });
      await page
        .locator(".case-main-visual")
        .screenshot({ path: `${folder}/${slug}-visual-${width}.png` });
      checks.push({
        slug,
        width,
        title: await page.title(),
        ...(await page.evaluate(() => ({
          viewport: innerWidth,
          content: document.documentElement.scrollWidth,
          h1: document.querySelectorAll("h1").length,
        }))),
        errors,
      });
      await page.close();
    }
  }
} finally {
  await browser.close();
}
await writeFile(`${folder}/checks.json`, JSON.stringify(checks, null, 2));
console.log(JSON.stringify(checks));
if (
  checks.some(
    (check) =>
      check.content > check.viewport || check.errors.length || check.h1 !== 1,
  )
)
  process.exitCode = 1;
