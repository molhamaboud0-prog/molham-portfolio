# Molham Aboud — Portfolio site

Dark, dense gallery: **Resume first**, then E‑commerce (full React Native app), FlavorHub & CareVisit (UI/UX only).

## Run locally

```bash
cd portfolio-site
npm install
npm run serve
```

Open **http://localhost:3456/portfolio-site/** (serves the whole `portfolio` folder so preview links work).

## Refresh screenshots

```bash
cd portfolio-site
npm run capture          # FlavorHub + CareVisit + ecommerce
npm run capture:ecommerce # ecommerce only (UI frames from app design)
```

E-commerce gallery images are generated from `tools/ecommerce-showcase.html` (same catalog, colors, and copy as the React Native app). Expo Web often stays on the loading spinner until Dubai fonts load — use the APK or a device for live demos.

Screenshots are written to `assets/screenshots/{ecommerce,flavorhub,carevisit}/`.