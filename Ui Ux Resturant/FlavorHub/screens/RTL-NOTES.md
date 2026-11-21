# RTL / Arabic — FlavorHub

## Frames في Figma

- Duplicate صفحة `Screens — LTR (EN)` إلى `Screens — RTL (AR)`.
- Prefix لكل frame: `AR /` + نفس `SCREEN-INVENTORY` ID.

## Mirroring checklist

| Element | LTR | RTL |
|---------|-----|-----|
| Back chevron | ← | → |
| Horizontal chip scroll | start left | start right |
| Restaurant card thumb | leading | trailing |
| Cart price column | trailing | leading |
| Timeline border | left | right |
| Tab bar order | same icon order (platform convention) | |

## Typography

- Font: **Tajawal** لكل النصوص العربية.
- محاذاة: يمين للفقرات والعناوين.

## Numbers

معيار المشروع: **أرقام عربية-هندية** في واجهة AR (١٢٣٤، ٣٨ ر.س) — Western في EN.

## Copy source

استخدم المفاتيح من [`content/ar.json`](../content/ar.json) — لا تترجم حرفياً من EN.

## Preview

في `preview/index.html` اضغط **AR RTL** لمعاينة كل الشاشات قبل نسخها إلى Figma.