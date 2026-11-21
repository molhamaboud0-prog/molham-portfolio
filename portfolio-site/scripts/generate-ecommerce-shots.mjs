import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const showcase = path.resolve(__dirname, "../tools/ecommerce-showcase.html");
const outDir = path.resolve(__dirname, "../assets/screenshots/ecommerce");

const screens = ["home", "categories", "cart", "product", "profile", "orders"];

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 500, height: 900 } });
  await page.goto(`file://${showcase}`, { waitUntil: "networkidle", timeout: 120000 });

  for (const id of screens) {
    await page.evaluate((shotId) => {
      document.querySelectorAll(".phone[data-shot]").forEach((el) => {
        el.dataset.active = el.dataset.shot === shotId ? "true" : "false";
      });
    }, id);
    await page.waitForTimeout(2500);
    const phone = page.locator(`.phone[data-shot="${id}"]`);
    await phone.screenshot({ path: path.join(outDir, `${id}.png`) });
    console.log("Wrote", id);
  }

  await browser.close();
  console.log("E-commerce screenshots updated in", outDir);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});