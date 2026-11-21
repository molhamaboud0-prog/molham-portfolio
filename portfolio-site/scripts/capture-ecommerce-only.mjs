import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(__dirname, "../assets/screenshots/ecommerce");
const staticDir =
  process.env.ECOMMERCE_STATIC ||
  path.resolve(__dirname, "../../Ecommerce/Mobile/web-dist");

const routes = [
  { name: "home", path: "/(drawer)/(tabs)" },
  { name: "categories", path: "/(drawer)/(tabs)/categories" },
  { name: "cart", path: "/(drawer)/(tabs)/cart" },
  { name: "product", path: "/product/prod-001" },
  { name: "profile", path: "/(drawer)/(tabs)/profile" },
  { name: "orders", path: "/orders" },
];

async function waitForContent(page) {
  await page.waitForFunction(
    () => {
      const text = document.body?.innerText ?? "";
      const hasApp =
        text.includes("Fresh groceries") ||
        text.includes("Home") ||
        text.includes("Categories") ||
        text.includes("Cart") ||
        text.includes("product");
      const root = document.getElementById("root");
      const tall = root && root.offsetHeight > 400;
      return hasApp && tall;
    },
    { timeout: 120000 },
  );
  await page.waitForTimeout(800);
}

async function capture(baseUrl, page) {
  fs.mkdirSync(out, { recursive: true });
  await page.setViewportSize({ width: 390, height: 844 });

  for (const route of routes) {
    const url = `${baseUrl}${route.path}`;
    console.log("→", url);
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 120000 });
    try {
      await waitForContent(page);
    } catch {
      await page.waitForTimeout(5000);
    }
    await page.screenshot({
      path: path.join(out, `${route.name}.png`),
      fullPage: false,
    });
    console.log("  saved", route.name);
  }
}

async function main() {
  const baseUrl = process.env.EXPO_WEB_URL || "http://127.0.0.1:8092";
  if (!fs.existsSync(staticDir)) {
    console.error("Missing web-dist. Run: cd Ecommerce/Mobile && npx expo export --platform web");
    process.exit(1);
  }
  console.log("Static files:", staticDir, "→", baseUrl);

  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 2 });
  await capture(baseUrl, page);
  await browser.close();
  console.log("Done:", out);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});