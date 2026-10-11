import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";
import { mkdir, writeFile } from "node:fs/promises";
const origin = process.env.QA_URL || "http://127.0.0.1:4173";
await mkdir("artifacts/lighthouse", { recursive: true });
const chrome = await launch({
  chromeFlags: ["--headless", "--no-sandbox", "--disable-gpu"],
});
const results = [];
try {
  const runs = [
    ["home-mobile", "/", "mobile"],
    ["home-desktop", "/", "desktop"],
    ...[
      "patient-journey",
      "invoice-auditor",
      "live-quiz",
      "rapidraw",
      "corenote",
    ].map((slug) => [slug, `/work/${slug}`, "mobile"]),
  ];
  for (const [name, path, formFactor] of runs) {
    const settings =
      formFactor === "desktop"
        ? {
            extends: "lighthouse:default",
            settings: {
              formFactor: "desktop",
              screenEmulation: {
                mobile: false,
                width: 1440,
                height: 1000,
                deviceScaleFactor: 1,
                disabled: false,
              },
              throttling: {
                rttMs: 40,
                throughputKbps: 10240,
                cpuSlowdownMultiplier: 1,
              },
            },
          }
        : undefined;
    const result = await lighthouse(
      `${origin}${path}`,
      {
        port: chrome.port,
        output: ["html", "json"],
        logLevel: "error",
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
        ],
      },
      settings,
    );
    await writeFile(`artifacts/lighthouse/${name}.html`, result.report[0]);
    await writeFile(`artifacts/lighthouse/${name}.json`, result.report[1]);
    const lhr = result.lhr;
    const scores = Object.fromEntries(
      Object.entries(lhr.categories).map(([key, value]) => [
        key,
        Math.round(value.score * 100),
      ]),
    );
    const failures = Object.entries(lhr.audits)
      .filter(
        ([, audit]) =>
          audit.score !== null &&
          audit.score < 1 &&
          ["binary", "numeric"].includes(audit.scoreDisplayMode),
      )
      .map(([id, audit]) => ({
        id,
        title: audit.title,
        value: audit.displayValue,
      }));
    const row = {
      name,
      ...scores,
      LCP: lhr.audits["largest-contentful-paint"].displayValue,
      CLS: lhr.audits["cumulative-layout-shift"].numericValue,
      failures,
    };
    results.push(row);
    console.log(JSON.stringify(row));
  }
} finally {
  await chrome.kill();
}
await writeFile(
  "artifacts/lighthouse/summary.json",
  JSON.stringify(results, null, 2),
);
if (
  results.some((result) =>
    ["performance", "accessibility", "best-practices", "seo"].some(
      (key) => result[key] < 90,
    ),
  )
)
  process.exitCode = 1;
