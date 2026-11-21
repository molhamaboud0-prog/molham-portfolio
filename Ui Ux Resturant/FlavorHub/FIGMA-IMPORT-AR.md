# فتح FlavorHub داخل Figma (3 دقائق)

Cursor **لا ينشئ** ملف `.fig` على حسابك تلقائياً. الطريقة الأسرع لـ «فتح» التصميم في Figma كطبقات قابلة للتعديل:

## الطريقة 1 — html.to.design (موصى بها)

1. **ملف Figma جديد** — يجب أن يكون مفتوحاً (تم فتحه من المتصفح / تطبيق Figma).
2. في Figma: **Plugins → html.to.design** (ثبّته من Community إن لم يكن موجوداً).
3. في Chrome: ثبّت [امتداد html.to.design](https://chromewebstore.google.com/detail/html.to.design) وفعّل **Allow access to file URLs** من `chrome://extensions` إن استخدمت ملفاً محلياً.
4. افتح المعاينة: **http://127.0.0.1:8765/index.html** (السيرفر يعمل من مجلد `preview`).
5. اضغط أيقونة الامتداد → **Capture Full Page** → **Send to Figma plugin**.
6. في Figma داخل البلجن: تبويب **Extension** → **Import**.

كرر الالتقاط بعد تغيير الشاشة (مثلاً Home ثم Cart) أو التقاط عدة viewports إن احتجت.

## الطريقة 2 — رفع ZIP في البلجن

1. Plugins → **html.to.design** → تبويب **File**.
2. اسحب الملف: `FlavorHub-preview-for-figma.zip` (في جذر مجلد FlavorHub).

## الطريقة 3 — بناء يدوي احترافي (الأفضل للتسليم)

اتبع [`FIGMA-SETUP.md`](FIGMA-SETUP.md) وانسخ Variables من `design-system/tokens.json` — المعاينة مرجع بصري فقط.

## تشغيل السيرفر لاحقاً

```bash
cd "/Users/sif/Desktop/Ui Ux Projects/FlavorHub/preview"
python3 -m http.server 8765
```

ثم افتح: http://127.0.0.1:8765/index.html