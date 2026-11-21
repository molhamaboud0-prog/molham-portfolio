# إنشاء ملف Figma — FlavorHub

## 1. Cover

- عنوان: **FlavorHub — Mobile UI v1.0**
- وصف قصير: Hybrid restaurant app (delivery, booking, offers) · EN + AR RTL
- تاريخ واسم المصمم

## 2. Research & Moodboard

أضف إطارات للروابط من `research/SOURCES.md` + 6–8 صور طعام (Unsplash).

## 3. Design System page

### Variables (Local)

Collection: `FlavorHub / Color` → modes **Light**, **Dark**

انسخ القيم من `design-system/tokens.json` لكل token.

Optional: `FlavorHub / Radius` (Number): card 12, sheet 24, chip 999.

### Text styles

أنشئ الأنماط من `design-system/typography.md`.

### Effects

- `Shadow/Card`: Y 4, blur 16, `#2D2420` 8%
- `Border/Dark`: inside 1px `#F5EDE8` 12% (Dark mode cards)

### Layout grid على Frame الجهاز

4 columns, margin 20, gutter 16.

## 4. Components page

ابنِ المكونات حسب `components/COMPONENT-SPECS.md` مع **Auto Layout** و **Variants**.

## 5. Screens

- **Screens — LTR (EN):** استخدم `content/en.json`
- **Screens — RTL (AR):** duplicate + mirror + `content/ar.json`

## 6. Prototype

اتبع `prototype/FLOWS.md` — interaction: Smart animate 300ms ease-out.

## 7. Handoff

Annotate spacing 4pt؛ export icons @1x @2x @3x.