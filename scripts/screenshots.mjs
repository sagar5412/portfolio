import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const phase = process.argv[2] || "final";
const baseUrl = process.env.QA_URL || "http://127.0.0.1:5173";
const directory = `artifacts/${phase}`;
await mkdir(directory, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [];
try {
  for (const width of [375, 768, 1440]) {
    const page = await browser.newPage({
      viewport: { width, height: width === 375 ? 812 : 1000 },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(async () => {
      for (let top = 0; top < document.body.scrollHeight; top += 600) {
        window.scrollTo(0, top);
        await new Promise((resolve) => setTimeout(resolve, 80));
      }
      window.scrollTo(0, 0);
    });
    for (const img of await page.locator("img").all())
      await img.scrollIntoViewIfNeeded();
    await page.waitForFunction(() =>
      [...document.images].every((img) => img.complete && img.naturalWidth > 0),
    );
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(700);
    const dimensions = await page.evaluate(() => ({
      viewport: innerWidth,
      content: document.documentElement.scrollWidth,
    }));
    await page.screenshot({
      path: `${directory}/home-${width}.png`,
      fullPage: true,
    });
    for (const selector of [
      ".hero",
      ".work-featured",
      "#about",
      "#stack",
      "#experience",
      "#contact",
    ]) {
      const element = page.locator(selector);
      if (await element.count())
        await element.screenshot({
          path: `${directory}/${selector.replace(/[.#]/g, "")}-${width}.png`,
        });
    }
    results.push({ width, ...dimensions, errors });
    await page.close();
  }
} finally {
  await browser.close();
}
await writeFile(`${directory}/checks.json`, JSON.stringify(results, null, 2));
console.log(JSON.stringify(results));
if (
  results.some(
    (result) => result.errors.length || result.content > result.viewport,
  )
)
  process.exitCode = 1;
