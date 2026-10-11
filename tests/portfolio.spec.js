import { test, expect } from "@playwright/test";
const routes = [
  ["/", "G K Sagar - Full Stack Developer"],
  ["/work/patient-journey", "Patient Journey Analytics - G K Sagar"],
  ["/work/invoice-auditor", "Invoice Price Auditor - G K Sagar"],
  ["/work/live-quiz", "Live Event Quiz Platform - G K Sagar"],
  ["/work/rapidraw", "RapiDraw - G K Sagar"],
  ["/work/corenote", "CoreNote - G K Sagar"],
];
for (const width of [375, 768, 1440]) {
  test(`all routes: layout, metadata, assets at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1000 });
    const errors = [];
    const failedAssets = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("response", (response) => {
      if (
        response.url().startsWith("http://127.0.0.1:4173") &&
        response.status() >= 400
      )
        failedAssets.push(response.url());
    });
    for (const [route, title] of routes) {
      await page.goto(route, { waitUntil: "networkidle" });
      await expect(page).toHaveTitle(title);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("head title")).toHaveCount(1);
      await expect(page.locator('meta[name="description"]')).toHaveCount(1);
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
        "content",
        title,
      );
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        new RegExp(`${route.replaceAll("/", "\\/")}$`),
      );
      for (const img of await page.locator("img").all())
        await img.scrollIntoViewIfNeeded();
      await page.waitForFunction(() =>
        [...document.images].every(
          (img) => img.complete && img.naturalWidth > 0,
        ),
      );
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth),
      ).toBeLessThanOrEqual(width);
      const invalidImages = await page
        .locator("img")
        .evaluateAll((imgs) =>
          imgs
            .filter(
              (img) =>
                !img.alt || !img.width || !img.height || img.loading !== "lazy",
            )
            .map((img) => img.src),
        );
      expect(invalidImages).toEqual([]);
    }
    expect(errors).toEqual([]);
    expect(failedAssets).toEqual([]);
  });
}
test("case navigation, route focus, return to selected work, and browser back", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("link", { name: /Read case study.*Patient Journey Analytics/ })
    .click();
  await expect(page).toHaveURL(/\/work\/patient-journey$/);
  await expect(page.locator("#main-content")).toBeFocused();
  await page
    .getByRole("link", { name: "Invoice Price Auditor", exact: true })
    .click();
  await expect(page).toHaveTitle("Invoice Price Auditor - G K Sagar");
  await page.goBack();
  await expect(page).toHaveTitle("Patient Journey Analytics - G K Sagar");
  await page.getByRole("link", { name: "All selected work" }).click();
  await expect(page).toHaveURL(/\/#work$/);
  await expect(page.locator("#work")).toBeFocused();
  expect(
    await page
      .locator("#work")
      .evaluate((el) => Math.abs(el.getBoundingClientRect().top)),
  ).toBeLessThan(100);
});
test("keyboard skip link and visible focus", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#main-content")).toBeVisible();
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await expect(skip).toBeInViewport();
  expect(await skip.evaluate((el) => getComputedStyle(el).outlineStyle)).toBe(
    "solid",
  );
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Explore my work" }),
  ).toBeFocused();
});
test("contact email copy, mail link, and resume download", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/#contact");
  await page.getByRole("button", { name: "Copy email address" }).click();
  await expect(page.getByRole("status")).toHaveText("Email copied.");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "sagar.gk.bly@gmail.com",
  );
  await expect(
    page.getByRole("link", { name: "sagar.gk.bly@gmail.com" }),
  ).toHaveAttribute("href", "mailto:sagar.gk.bly@gmail.com");
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("link", { name: "Download resume" }).click(),
  ]);
  expect(download.suggestedFilename()).toBe("resume.docx");
});
test("reduced motion and unknown routes", async ({ page }) => {
  await page.goto("/");
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  await page.goto("/work/unknown-project");
  await expect(page).toHaveTitle("Page not found - G K Sagar");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, follow",
  );
  await page.getByRole("link", { name: "Back to portfolio" }).click();
  await expect(page).toHaveTitle("G K Sagar - Full Stack Developer");
  await page.goto("/unknown-page");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "This page hasmoved on.",
  );
});
test("sitemap, robots, favicon and share image are served", async ({
  request,
}) => {
  for (const path of [
    "/sitemap.xml",
    "/robots.txt",
    "/favicon.svg",
    "/og-image.webp",
    "/resume.docx",
  ])
    expect((await request.get(path)).status()).toBe(200);
  const sitemap = await (await request.get("/sitemap.xml")).text();
  for (const [path] of routes)
    expect(sitemap).toContain(`https://gksagar.online${path}</loc>`);
});
test("production HTML exposes route metadata without JavaScript", async ({
  request,
}) => {
  for (const [path, title] of routes) {
    const response = await request.get(path);
    expect(await response.text()).toContain(
      `<title data-static-seo>${title}</title>`,
    );
  }
});
