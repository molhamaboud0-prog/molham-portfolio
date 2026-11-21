# FlavorHub — Restaurant Mobile App UI/UX

تصميم تطبيق موبايل هجين للمطاعم: **توصيل + حجز طاولة + عروض**، ثنائي اللغة (EN / AR + RTL).

## محتويات الحزمة (نسخ إلى Figma)

| مسار | الغرض |
|------|--------|
| [FIGMA-SETUP.md](./FIGMA-SETUP.md) | خطوات إنشاء ملف Figma من الصفر (صفحات، Variables، Grid) |
| [design-system/tokens.json](./design-system/tokens.json) | ألوان Light/Dark — استورد أو انسخ إلى Figma Variables |
| [design-system/typography.md](./design-system/typography.md) | Tajawal + Plus Jakarta Sans |
| [design-system/spacing-grid.md](./design-system/spacing-grid.md) | شبكة 4px وهوامش |
| [design-system/contrast-a11y.md](./design-system/contrast-a11y.md) | نسب تباين ومعايير لمس |
| [components/COMPONENT-SPECS.md](./components/COMPONENT-SPECS.md) | مواصفات المكونات + Variants |
| [screens/SCREEN-INVENTORY.md](./screens/SCREEN-INVENTORY.md) | قائمة كل الشاشات وأبعادها |
| [content/en.json](./content/en.json) | نصوص واجهة إنجليزي |
| [content/ar.json](./content/ar.json) | نصوص واجهة عربي |
| [prototype/FLOWS.md](./prototype/FLOWS.md) | روابط النموذج الأولي |
| [research/SOURCES.md](./research/SOURCES.md) | Figma Community، GitHub، MD3 |
| [preview/index.html](./preview/index.html) | معاينة عالية الدقة لكل الشاشات (393×852) |

## بدء سريع في Figma

1. ملف جديد → iPhone 15 Pro `393 × 852`.
2. أنشئ Collection Variables: **FlavorHub / Color** مع modes `Light`, `Dark` (قيم من `tokens.json`).
3. أنشئ Text styles من `typography.md`.
4. صفحة **Components** — ابنِ حسب `COMPONENT-SPECS.md`.
5. صفحة **Screens — LTR** — طبّق من `preview/index.html` أو من مواصفات `SCREEN-INVENTORY.md`.
6. انسخ إلى **Screens — RTL** واستبدل النص من `content/ar.json`.

## الاسم والإصدار

- **Product:** FlavorHub  
- **Version:** 1.0.0  
- **Frame:** Mobile iOS baseline 393×852  
- **Date:** 2026