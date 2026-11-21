import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const out = path.resolve(__dirname, "../assets/screenshots");

const flavorScreens = [
  "home",
  "menu",
  "cart",
  "checkout",
  "booking-slots",
  "profile",
];
const careScreens = [
  "welcome",
  "home",
  "search",
  "slots",
  "success",
  "appointments",
];

async function captureFlavorhub(page) {
  const base = `file://${root}/Ui Ux Resturant/FlavorHub/preview/index.html`;
  await page.goto(base, { waitUntil: "networkidle" });
  await page.setViewportSize({ width: 1400, height: 900 });
  const dir = path.join(out, "flavorhub");
  fs.mkdirSync(dir, { recursive: true });

  for (const id of flavorScreens) {
    const btn = page
      .locator(
        `#screen-nav button[data-screen="${id}"], nav button[data-screen="${id}"]`,
      )
      .first();
    if ((await btn.count()) === 0) {
      await page.evaluate((screenId) => {
        const nav = document.getElementById("screen-nav");
        const b = nav?.querySelector(`button[data-screen="${screenId}"]`);
        b?.click();
      }, id);
    } else {
      await btn.click();
    }
    await page.waitForTimeout(400);
    const phone = page.locator(".phone");
    await phone.screenshot({ path: path.join(dir, `${id}.png`) });
  }
}

async function captureCarevisit(page) {
  const base = `file://${root}/Ui Ux Clinecs/preview/index.html`;
  await page.goto(base, { waitUntil: "networkidle" });
  await page.setViewportSize({ width: 1400, height: 900 });
  const dir = path.join(out, "carevisit");
  fs.mkdirSync(dir, { recursive: true });

  for (const id of careScreens) {
    await page.locator(`button[data-screen="${id}"]`).click();
    await page.waitForTimeout(350);
    const device = page.locator("#device");
    await device.screenshot({ path: path.join(dir, `${id}.png`) });
  }
}

async function waitForExpoShell(page, readyText) {
  await page.waitForFunction(
    (needle) => {
      const body = document.body?.innerText ?? "";
      if (needle && body.includes(needle)) return true;
      return (
        body.includes("Fresh groceries") ||
        body.includes("Shop Now") ||
        body.includes("Categories") ||
        body.includes("Cart") ||
        body.length > 400
      );
    },
    readyText ?? null,
    { timeout: 120000 },
  );
  await page.waitForLoadState("networkidle", { timeout: 60000 }).catch(() => {});
  await page.evaluate(async () => {
    const imgs = Array.from(document.images);
    await Promise.all(
      imgs.map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) resolve();
            else {
              img.addEventListener("load", resolve, { once: true });
              img.addEventListener("error", resolve, { once: true });
            }
          }),
      ),
    );
  });
  await page.waitForTimeout(800);
}

async function captureEcommerce(page, baseUrl) {
  const routes = [
    { name: "home", path: "/", ready: "Fresh groceries" },
    { name: "categories", path: "/categories", ready: "Categories" },
    { name: "cart", path: "/cart", ready: "Cart" },
    { name: "product", path: "/product/1", ready: null },
    { name: "profile", path: "/profile", ready: "Profile" },
    { name: "orders", path: "/orders", ready: "Orders" },
  ];
  const dir = path.join(out, "ecommerce");
  fs.mkdirSync(dir, { recursive: true });
  await page.setViewportSize({ width: 430, height: 932 });

  await page.goto(baseUrl, {
    waitUntil: "domcontentloaded",
    timeout: 120000,
  });
  await waitForExpoShell(page, "Fresh groceries");
  await page.screenshot({ path: path.join(dir, "home.png") });

  for (const route of routes.slice(1)) {
    try {
      await page.goto(`${baseUrl}${route.path}`, {
        waitUntil: "domcontentloaded",
        timeout: 120000,
      });
      await waitForExpoShell(page, route.ready);
      await page.screenshot({
        path: path.join(dir, `${route.name}.png`),
        fullPage: false,
      });
    } catch (e) {
      console.warn("Ecommerce skip", route.name, e.message);
    }
  }
}

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  console.log("Capturing FlavorHub…");
  await captureFlavorhub(page);
  console.log("Capturing CareVisit…");
  await captureCarevisit(page);

  await browser.close();

  console.log("Generating E-commerce frames from showcase…");
  await import("./generate-ecommerce-shots.mjs");
  console.log("Done →", out);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});