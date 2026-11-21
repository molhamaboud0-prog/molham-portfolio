# Clinic — Patient app (Figma blueprint)

**File name in Figma:** `Clinic — Patient (Mobile + Web)`  
**Audience:** Patient only · **Locale:** English LTR · **Platforms:** Mobile 390×844 + Web 1440×1024 (tablet 768 optional)

Use this document as the single source of truth when building pages, variables, components, frames, and prototypes. Do not use raw hex in components—bind to **Variables** or **Color styles** listed below.

---

## 1. Figma pages (create in this order)

| # | Page name | Contents |
|---|-----------|----------|
| 1 | `00 — Cover` | Title, v1.0, date, link to repo doc, changelog |
| 2 | `01 — Foundations` | Colors, type, spacing, grids, shadows, a11y notes |
| 3 | `02 — Icons & Illustrations` | Icon map + 3 empty-state illustrations |
| 4 | `03 — Components` | Library with variants |
| 5 | `04 — Mobile — Screens` | All mobile frames |
| 6 | `05 — Web — Screens` | Desktop (+ optional tablet) |
| 7 | `06 — Prototype` | Wired flows (or prototype from page 4) |
| 8 | `Archive` | Deprecated |

**Frame naming:** `Mobile / {Flow} / {Screen} / {State}`  
Example: `Mobile / Booking / SlotPicker / Default`

**Layer naming:** `ComponentName / Part / Variant` (PascalCase for components, sentence case for copy layers).

---

## 2. Figma Variables (collections)

Create **two modes** on color variables only if needed later: `Light` (default), `Dark` (phase 2).

### 2.1 Collection: `Primitives`

| Variable | Type | Value | Notes |
|----------|------|-------|-------|
| `primitive/white` | Color | `#FFFFFF` | |
| `primitive/black` | Color | `#0F172A` | Slate 900 |
| `primitive/gray-50` | Color | `#F8FAFC` | |
| `primitive/gray-100` | Color | `#F1F5F9` | |
| `primitive/gray-200` | Color | `#E2E8F0` | Borders |
| `primitive/gray-400` | Color | `#94A3B8` | Disabled text |
| `primitive/gray-500` | Color | `#64748B` | |
| `primitive/gray-600` | Color | `#475569` | Secondary text |
| `primitive/teal-50` | Color | `#F0FDFA` | Muted brand |
| `primitive/teal-500` | Color | `#14B8A6` | |
| `primitive/teal-600` | Color | `#0D9488` | Primary |
| `primitive/teal-700` | Color | `#0F766E` | Primary pressed |
| `primitive/green-500` | Color | `#22C55E` | Success |
| `primitive/green-600` | Color | `#16A34A` | |
| `primitive/amber-500` | Color | `#F59E0B` | Warning |
| `primitive/red-500` | Color | `#EF4444` | Error |
| `primitive/red-600` | Color | `#DC2626` | Danger button |
| `primitive/blue-500` | Color | `#3B82F6` | Info |

### 2.2 Collection: `Semantic`

Alias primitives where possible. Publish as **Color styles** with the same names.

| Style / Variable | Hex | Use |
|------------------|-----|-----|
| `brand/primary` | `#0D9488` | Primary buttons, links, selected tab |
| `brand/primary-hover` | `#0F766E` | Hover / pressed |
| `brand/primary-muted` | `#0D9488` @ 10% on white → `#E6F4F2` | Chip selected bg, tint banners |
| `surface/background` | `#F7F9FC` | App background |
| `surface/card` | `#FFFFFF` | Cards, sheets |
| `surface/elevated` | `#FFFFFF` | Modals (use shadow) |
| `surface/overlay` | `#0F172A` @ 40% | Scrim |
| `text/primary` | `#0F172A` | Body, headings |
| `text/secondary` | `#475569` | Meta, captions |
| `text/disabled` | `#94A3B8` | Disabled fields |
| `text/inverse` | `#FFFFFF` | On primary buttons |
| `text/link` | `#0D9488` | Tappable links |
| `border/default` | `#E2E8F0` | Inputs, dividers |
| `border/focus` | `#0D9488` | Focus ring 2px |
| `status/success` | `#16A34A` | Confirmed |
| `status/success-bg` | `#DCFCE7` | Chip bg |
| `status/warning` | `#D97706` | Pending insurance |
| `status/warning-bg` | `#FEF3C7` | Chip bg |
| `status/error` | `#DC2626` | Errors |
| `status/error-bg` | `#FEE2E2` | Chip / inline error bg |
| `status/info` | `#2563EB` | Reminders |
| `status/info-bg` | `#DBEAFE` | Chip bg |
| `status/neutral` | `#64748B` | Completed / cancelled label |

### 2.3 Collection: `Spacing` (Float)

| Variable | px |
|----------|-----|
| `space/0` | 0 |
| `space/1` | 4 |
| `space/2` | 8 |
| `space/3` | 12 |
| `space/4` | 16 |
| `space/5` | 20 |
| `space/6` | 24 |
| `space/8` | 32 |
| `space/10` | 40 |
| `space/12` | 48 |

### 2.4 Collection: `Radius` (Float)

| Variable | px |
|----------|-----|
| `radius/sm` | 8 |
| `radius/md` | 12 |
| `radius/lg` | 16 |
| `radius/xl` | 24 |
| `radius/pill` | 999 |

### 2.5 Collection: `Size` (component sizing)

| Variable | px | Use |
|----------|-----|-----|
| `size/tap-min` | 44 | Min touch target |
| `size/icon-sm` | 20 | Inline icons |
| `size/icon-md` | 24 | List rows, app bar |
| `size/avatar-sm` | 40 | List |
| `size/avatar-md` | 56 | Cards |
| `size/avatar-lg` | 80 | Profile header |
| `size/button-h-l` | 52 | Primary CTA |
| `size/button-h-m` | 44 | Secondary |
| `size/input-h` | 48 | Text fields |

### 2.6 Typography (Text styles — font **Inter**)

Create **Text styles** in Figma; bind font size/line via variables if your workflow supports typography variables.

| Text style | Weight | Size | Line | Letter | Color style |
|------------|--------|------|------|--------|-------------|
| `Display/L` | Semibold 600 | 28 | 34 | -0.5 | text/primary |
| `Display/L-Web` | Semibold 600 | 32 | 40 | -0.5 | text/primary |
| `Heading/M` | Semibold 600 | 20 | 28 | 0 | text/primary |
| `Heading/M-Web` | Semibold 600 | 24 | 32 | 0 | text/primary |
| `Heading/S` | Semibold 600 | 17 | 24 | 0 | text/primary |
| `Body/M` | Regular 400 | 15 | 22 | 0 | text/primary |
| `Body/M-Web` | Regular 400 | 16 | 24 | 0 | text/primary |
| `Body/S` | Regular 400 | 13 | 18 | 0 | text/secondary |
| `Label/M` | Medium 500 | 13 | 18 | 0.2 | text/primary or inverse on button |
| `Label/S` | Medium 500 | 11 | 16 | 0.3 | text/secondary |
| `Caption` | Regular 400 | 11 | 16 | 0 | text/secondary |
| `Button/L` | Semibold 600 | 16 | 20 | 0 | text/inverse |
| `Button/M` | Semibold 600 | 15 | 20 | 0 | text/inverse |

### 2.7 Elevation (Effect styles)

| Style | Definition |
|-------|------------|
| `shadow/sm` | Y 1, blur 3, spread 0, `#0F172A` 8% |
| `shadow/md` | Y 4, blur 12, spread -2, `#0F172A` 12% |
| `shadow/lg` | Y 12, blur 24, spread -4, `#0F172A` 14% |

### 2.8 Layout grids

**Mobile frame:** 390 × 844  
- Layout grid: **4 columns**, margin **16**, gutter **8** (optional; margin-only is fine).

**Web frame:** 1440 × 1024  
- **12 columns**, margin **80**, gutter **24**, stretch.  
- **Content max width:** 1120 px centered (columns 2–11 for main).  
- **Sidebar:** fixed **240 px** (columns 1–2 visually); main content starts at 272 px from left.

**Tablet (optional):** 768 × 1024  
- 8 columns, margin 24, gutter 16; collapse sidebar to icon rail **72 px**.

---

## 3. Icons & illustrations (`02`)

**Icon plugin suggestion:** Phosphor Icons or Feather — 24 px default, 1.5 px stroke, color `text/secondary` or `brand/primary`.

| UI area | Icons (Phosphor names) |
|---------|-------------------------|
| Tab Home | `house` |
| Tab Appointments | `calendar` |
| Tab Records | `file-text` |
| Tab Profile | `user` |
| Search | `magnifying-glass` |
| Notifications | `bell` |
| Back | `caret-left` |
| Chevron | `caret-right` |
| Location | `map-pin` |
| Phone | `phone` |
| Time | `clock` |
| Star rating | `star` |
| Filter | `funnel` |
| Add calendar | `calendar-plus` |
| Document | `file-pdf` |
| Success | `check-circle` |
| Warning | `warning` |
| Error | `x-circle` |

**Empty states (custom illustration slots):**  
- No appointments · No search results · No records  

---

## 4. Components matrix & auto-layout rules (`03`)

Build all components as **top-level** on `03 — Components`. Use **clip content** on cards; **fill container** width where noted.

### 4.1 Navigation

#### `AppBar/Mobile`

| Property | Values |
|----------|--------|
| Variant | `Type=Default\|WithSearch\|Transparent` |
| Boolean | `showBack`, `showActions` |

| Auto-layout | Value |
|-------------|--------|
| Direction | Horizontal |
| Height | 56 (safe area +56 top on frame, not in component) |
| Padding | 16 H, 12 V |
| Gap | 12 |
| Align | Center |

Children: `IconButton/Back` (optional) · `Title/Heading-S` (fill) · slot `Actions` (max 2 icon buttons).

#### `TabBar/Mobile`

| Property | Values |
|----------|--------|
| Tab | `Home\|Appointments\|Records\|Profile` |
| State | `Default\|Selected` |

| Auto-layout | Value |
|-------------|--------|
| Direction | Horizontal, space between |
| Width | Fill 390 |
| Height | 64 + home indicator 34 in frame |
| Padding | 8 top, 16 sides |

Each tab: vertical stack, gap 4, icon 24 + `Label/S`.

#### `Sidebar/Web`

| Property | Values |
|----------|--------|
| State | `Expanded\|Collapsed` |

| Auto-layout | Value |
|-------------|--------|
| Width | 240 expanded / 72 collapsed |
| Direction | Vertical |
| Padding | 16 |
| Gap | 8 |

Nav items: height 44, radius `md`, padding 12 H, gap 12 icon + label.

#### `TopNav/Web`

Height 64, horizontal, padding 24, gap 16: logo · `SearchField` (max 480) · `IconButton` bell · avatar 40.

---

### 4.2 Inputs

#### `TextField`

| Property | Values |
|----------|--------|
| State | `Default\|Focused\|Error\|Disabled` |
| Boolean | `hasLabel`, `hasHelper`, `hasLeftIcon` |

| Auto-layout | Vertical, gap 6 |
| Input row | Horizontal, height `size/input-h`, padding 12 H, gap 8, radius `md`, stroke 1px `border/default` (2px `border/focus` when Focused) |
| Width | Fill parent (min 280) |

#### `SearchField`

Same as TextField `Default` + left search icon + optional filter `IconButton` embedded right inside field (padding swap).

#### `Select`

Row 48 height, label + value + chevron; used inside `BottomSheet` lists.

#### `DatePickerTrigger`

Button-like row: calendar icon + date text + chevron.

#### `OTPInput`

Horizontal gap 8, 6 cells 44×48, radius `md`, centered digit `Heading/S`.

---

### 4.3 Actions

#### `Button/Primary` (also pattern for Secondary, Ghost, Danger)

| Property | Values |
|----------|--------|
| Size | `L\|M` |
| State | `Default\|Hover\|Pressed\|Disabled\|Loading` |

| Size L | H 52, padding 24 H, radius `md`, fill `brand/primary` |
| Size M | H 44, padding 16 H |
| Disabled | Fill gray-200, text disabled |
| Loading | Replace label with spinner 20 px |

**Secondary:** fill white, stroke `border/default`, text `text/primary`.  
**Ghost:** no fill, text `brand/primary`.  
**Danger:** fill `status/error`, text inverse.

#### `IconButton`

44×44, radius `md`, centered icon 24.

#### `FAB`

56×56, radius `pill`, shadow `md`, icon plus, bottom-right offset 16.

---

### 4.4 Content cards

#### `DoctorCard`

| Auto-layout | Vertical, gap 12, padding 16, radius `lg`, fill `surface/card`, shadow `sm` |
| Width | Fill (358 in mobile content) |

Content: row (avatar 56 + column name/specialty) · row rating + next slot · `Button/Secondary` M "View profile" or ghost "Book".

#### `ClinicCard`

Image 16:9 top (radius top `lg`) · body padding 16 · title `Heading/S` · meta row distance + hours chip open/closed.

#### `AppointmentCard`

Date block left (month/day) · column doctor, time, location · `Chip/Status` · row actions Ghost "Reschedule" + Ghost "Details".

#### `ListRow`

H min 56, padding 16 H, gap 12, icon 24 · column title `Body/M` + subtitle `Body/S` · chevron.

#### `EmptyState`

Vertical center, padding 32, gap 16: illustration 160 h · `Heading/M` · `Body/M` center · `Button/Primary` L.

#### `Banner/Inline`

Hug, padding 12, gap 8, radius `md`, fill `status/info-bg` or `brand/primary-muted`, icon + `Body/S`.

---

### 4.5 Feedback

#### `Chip/Status`

| Property | Values |
|----------|--------|
| Status | `Confirmed\|Pending\|Completed\|Cancelled` |

Padding 8 H 4 V, radius `pill`, `Label/S` + optional dot 6 px.

#### `Toast`

Max width 358, padding 16, radius `md`, shadow `md`, row icon + message + dismiss.

#### `Modal/Confirm`

Width 320 mobile / 400 web, padding 24, gap 16, title + body + row buttons (Ghost cancel + Primary/Danger confirm).

#### `BottomSheet`

Top radius `xl`, handle 36×4, padding 16, max height 90% screen; header title + drag handle.

#### `Skeleton`

Variants: `DoctorCard\|ListRow\|AppointmentCard` — gray-100 shapes, no auto-layout animation in Figma.

---

### 4.6 Booking

#### `TimeSlotChip`

| Property | Values |
|----------|--------|
| State | `Available\|Selected\|Unavailable` |

Min width 88, H 40, padding 12 H, radius `md`. Unavailable: strikethrough + disabled colors.

#### `Calendar/Month`

7-column grid, cell 44×44, gap 4; nav row month title + prev/next.

#### `StepIndicator`

3 steps horizontal: labels "Time" · "Details" · "Confirm" (or Doctor → Time → Confirm on profile flow).  
States: complete (check), current (filled circle), upcoming (outline).

---

## 5. Mobile frame checklist (`04`)

**Device:** iPhone 14 logical 390×844 unless noted.  
Include **TabBar** on main tabs only (not on auth/booking sub-flow).

States: build **Default** for all; add **Loading**, **Empty**, **Error** where the table says yes.

| # | Frame name | Size | States (D/L/E/Err) | Notes |
|---|------------|------|---------------------|-------|
| 1 | `Mobile / Auth / Splash / Default` | 390×844 | D | Logo centered, brand teal |
| 2 | `Mobile / Auth / Welcome / Default` | 390×844 | D | 3 value props, Sign in + Create account |
| 3 | `Mobile / Auth / SignIn / Default` | 390×844 | D, Err | Keyboard optional variant |
| 4 | `Mobile / Auth / SignIn / Error` | 390×844 | Err | Invalid credentials |
| 5 | `Mobile / Auth / SignUp / Default` | 390×844 | D, Err | Terms checkbox |
| 6 | `Mobile / Auth / Verify / Default` | 390×844 | D, Err | OTP 6 digit |
| 7 | `Mobile / Auth / ForgotPassword / Default` | 390×844 | D | |
| 8 | `Mobile / Auth / ForgotPassword / Success` | 390×844 | D | Check email message |
| 9 | `Mobile / Home / Home / Default` | 390×844 | D, L | TabBar, upcoming hero |
| 10 | `Mobile / Home / Home / Loading` | 390×844 | L | Skeleton cards |
| 11 | `Mobile / Discovery / Search / Default` | 390×844 | D, E | Active search query |
| 12 | `Mobile / Discovery / Search / Empty` | 390×844 | E | No results |
| 13 | `Mobile / Discovery / Filters / Sheet` | 390×844 | D | Bottom sheet over search |
| 14 | `Mobile / Doctor / Profile / Default` | 390×844 | D, L | Sticky bottom CTA Book |
| 15 | `Mobile / Clinic / Detail / Default` | 390×844 | D | Hours, map thumb, doctors list |
| 16 | `Mobile / Booking / SlotPicker / Default` | 390×844 | D | Step 1–2, calendar + chips |
| 17 | `Mobile / Booking / SlotPicker / Empty` | 390×844 | E | No slots this week |
| 18 | `Mobile / Booking / Confirm / Default` | 390×844 | D | Summary card, reason textarea |
| 19 | `Mobile / Booking / Success / Default` | 390×844 | D | Confirmation #, add to calendar |
| 20 | `Mobile / Appointments / List / Default` | 390×844 | D, E | Tabs Upcoming \| Past |
| 21 | `Mobile / Appointments / List / Empty` | 390×844 | E | No upcoming |
| 22 | `Mobile / Appointments / Detail / Default` | 390×844 | D | Checklist, directions |
| 23 | `Mobile / Appointments / Reschedule / Default` | 390×844 | D | Banner "Rescheduling…" |
| 24 | `Mobile / Appointments / Cancel / Modal` | 390×844 | D | Scrim + Modal/Confirm |
| 25 | `Mobile / Records / Hub / Default` | 390×844 | D, E | 3 sections list rows |
| 26 | `Mobile / Records / Hub / Empty` | 390×844 | E | |
| 27 | `Mobile / Records / Prescription / Default` | 390×844 | D | Med list |
| 28 | `Mobile / Records / Document / Viewer` | 390×844 | D | PDF placeholder toolbar |
| 29 | `Mobile / Notifications / List / Default` | 390×844 | D, E | Grouped by Today/Yesterday |
| 30 | `Mobile / Profile / Profile / Default` | 390×844 | D | Insurance upload row |
| 31 | `Mobile / Profile / Edit / Default` | 390×844 | D | |
| 32 | `Mobile / Profile / ChangePassword / Default` | 390×844 | D | |
| 33 | `Mobile / Profile / NotificationPrefs / Default` | 390×844 | D | Toggles list |
| 34 | `Mobile / Support / Help / Default` | 390×844 | D | FAQ accordion |

**Mobile UX annotations (separate sticky layer):**  
- Booking steps 16–18: primary CTA fixed bottom safe area 16.  
- Tap targets ≥ 44.  
- Pull-to-refresh on lists 9, 20, 25, 29.

---

## 6. Web frame checklist (`05`)

**Base frame:** 1440×1024 with `Sidebar/Web` expanded + main scroll.

| # | Frame name | Layout (12-col) | States | Responsive notes |
|---|------------|-----------------|--------|------------------|
| 1 | `Web / Auth / SignIn / Default` | No sidebar; centered card span 4 cols (~440 px) | D, Err | Tablet: card full width −48 margin |
| 2 | `Web / Home / Dashboard / Default` | Col 1–2 sidebar; 3–9 main (search, upcoming, specialties); 10–12 right rail Quick book | D, L | Tablet: hide right rail; stack |
| 3 | `Web / Discovery / Search / Default` | Col 1–2 sidebar; 3–4 filters sticky; 5–12 results 2-col card grid | D, E | Filters → drawer at 768 |
| 4 | `Web / Doctor / Profile / Default` | Col 3–8 bio; col 9–11 sticky booking card 320 w | D | Booking card follows scroll until footer |
| 5 | `Web / Booking / SlotPicker / Default` | Top full-width stepper; col 3–6 calendar; col 7–10 slot grid | D, E | |
| 6 | `Web / Appointments / List / Default` | Table: Date, Doctor, Location, Status, Actions; or card grid 3 col | D, E | Sort dropdown in toolbar |
| 7 | `Web / Records / MasterDetail / Default` | Col 3–5 list 280–360; col 6–11 detail panel | D, E | Tablet: list only + navigate to detail |
| 8 | `Web / Profile / Settings / Default` | Sections: Personal, Security, Notifications, Insurance; max text width 640 | D | |

**Web grid math (1440):**  
- Usable width 1440 − 160 margin = 1280.  
- Column width = (1280 − 11×24) / 12 ≈ 84.67 px.  
- Sidebar 240 sits in margin+col1 area; content aligns to column 3.

**768 breakpoint:** Icon rail sidebar; single column content; `TopNav/Web` with hamburger if needed.

---

## 7. Prototype map (`06`)

Wire on mobile frames unless noted. **Flow starting point:** `Mobile / Auth / Welcome / Default`.

| # | Hotspot (layer / area) | Destination frame | Interaction | Transition | Duration |
|---|------------------------|-------------------|-------------|------------|----------|
| 1 | Welcome → "Sign in" | `Mobile / Auth / SignIn / Default` | On tap | Navigate | Instant |
| 2 | Welcome → "Create account" | `Mobile / Auth / SignUp / Default` | On tap | Navigate | Instant |
| 3 | SignIn → Primary "Sign in" | `Mobile / Home / Home / Default` | On tap | Navigate | Dissolve 200ms |
| 4 | Home → Search field | `Mobile / Discovery / Search / Default` | On tap | Navigate | Move in from right 300ms |
| 5 | Search → `DoctorCard` | `Mobile / Doctor / Profile / Default` | On tap | Navigate | Move in 300ms |
| 6 | Doctor → "Book appointment" | `Mobile / Booking / SlotPicker / Default` | On tap | Navigate | Move in 300ms |
| 7 | SlotPicker → time chip + "Continue" | `Mobile / Booking / Confirm / Default` | On tap | Navigate | Move in 300ms |
| 8 | Confirm → "Confirm booking" | `Mobile / Booking / Success / Default` | On tap | Navigate | Dissolve 200ms |
| 9 | Success → "View appointment" | `Mobile / Appointments / Detail / Default` | On tap | Navigate | Move in 300ms |
| 10 | TabBar → Appointments | `Mobile / Appointments / List / Default` | On tap | Navigate | Instant |
| 11 | Appointments → card | `Mobile / Appointments / Detail / Default` | On tap | Navigate | Move in 300ms |
| 12 | Detail → "Reschedule" | `Mobile / Appointments / Reschedule / Default` | On tap | Navigate | Move in 300ms |
| 13 | Reschedule → confirm slot | `Mobile / Appointments / List / Default` | On tap | Open overlay **Toast** "Rescheduled" | Smart animate 250ms |
| 14 | Detail → "Cancel appointment" | `Mobile / Appointments / Cancel / Modal` | On tap | Open overlay | Dissolve 150ms |
| 15 | Modal → "Yes, cancel" | `Mobile / Appointments / List / Default` (Past tab) | On tap | Swap variant Past + cancelled chip | Instant |
| 16 | Modal → "Keep appointment" | `Mobile / Appointments / Detail / Default` | On tap | Close overlay | Instant |
| 17 | TabBar → Records | `Mobile / Records / Hub / Default` | On tap | Navigate | Instant |
| 18 | Records → Prescription row | `Mobile / Records / Prescription / Default` | On tap | Navigate | Move in 300ms |
| 19 | Home → Upcoming hero | `Mobile / Appointments / Detail / Default` | On tap | Navigate | Move in 300ms |
| 20 | AppBar → Notifications icon | `Mobile / Notifications / List / Default` | On tap | Navigate | Move in 300ms |
| 21 | Discovery → Filter icon | `Mobile / Discovery / Filters / Sheet` | On tap | Open overlay | Move in from bottom 300ms |
| 22 | Filters → "Apply" | `Mobile / Discovery / Search / Default` | On tap | Close overlay | Move out bottom 250ms |

**Web prototype (optional):** Duplicate flows 4–9 using Web frames with **Mouse enter** hover states on buttons only; main nav uses **Navigate** between sidebar items.

---

## 8. Microcopy (English UI strings)

### 8.1 App brand

- **App name:** CareVisit  
- **Tagline (Welcome):** Book care you can trust.

### 8.2 Auth

| Key | Copy |
|-----|------|
| Welcome title | Welcome to CareVisit |
| Value 1 | Find doctors and clinics near you |
| Value 2 | Book visits in minutes |
| Value 3 | Access prescriptions and results |
| Sign in CTA | Sign in |
| Create account CTA | Create account |
| Sign in title | Sign in |
| Email label | Email or phone |
| Password label | Password |
| Forgot password | Forgot password? |
| Sign in button | Sign in |
| Sign up title | Create your account |
| Name label | Full name |
| Phone label | Phone number |
| Terms | I agree to the Terms of Service and Privacy Policy |
| Sign up button | Create account |
| Verify title | Verify your phone |
| Verify subtitle | Enter the 6-digit code we sent to {phone} |
| Resend code | Resend code in {seconds}s |
| Forgot title | Reset password |
| Forgot subtitle | We'll email you a link to reset your password |
| Send reset | Send reset link |
| Forgot success | Check your email. We sent a link to {email}. |

### 8.3 Home & discovery

| Key | Copy |
|-----|------|
| Home greeting | Good morning, {firstName} |
| Search placeholder | Search doctors, clinics, specialties |
| Upcoming title | Upcoming visit |
| See all | See all |
| Specialties | Specialties |
| Nearby clinics | Nearby clinics |
| Featured doctors | Featured doctors |
| Book now | Book now |
| Open now | Open now |
| Closed | Closed |
| mi away | {n} mi away |
| Next available | Next: {day}, {time} |
| Filters title | Filters |
| Specialty | Specialty |
| Distance | Distance |
| Availability | Available this week |
| Apply filters | Apply filters |
| Clear all | Clear all |
| Results count | {n} results |
| Sort | Sort by: Recommended |

### 8.4 Doctor & clinic

| Key | Copy |
|-----|------|
| About | About |
| Languages | Languages spoken |
| Location | Location |
| Reviews | Reviews |
| Book appointment | Book appointment |
| View profile | View profile |
| Clinic hours | Hours |
| Doctors at clinic | Doctors at this clinic |

### 8.5 Booking

| Key | Copy |
|-----|------|
| Choose time | Choose a time |
| Step time | Time |
| Step details | Details |
| Step confirm | Confirm |
| Continue | Continue |
| Confirm title | Confirm your visit |
| Visit summary | Visit summary |
| Reason label | Reason for visit (optional) |
| Reason placeholder | Briefly describe your symptoms |
| Insurance toggle | I'm using insurance |
| Insurance note | Bring your card to the visit. Copay may apply. |
| Confirm booking | Confirm booking |
| Success title | You're booked |
| Confirmation code | Confirmation #{code} |
| Add to calendar | Add to calendar |
| View appointment | View appointment |
| Back to home | Back to home |
| No slots title | No times available |
| No slots body | Try another week or another doctor. |
| Change doctor | Change doctor |

### 8.6 Appointments

| Key | Copy |
|-----|------|
| Screen title | Appointments |
| Tab upcoming | Upcoming |
| Tab past | Past |
| Empty upcoming title | No upcoming visits |
| Empty upcoming body | When you book a visit, it will show up here. |
| Book a visit | Book a visit |
| Reschedule | Reschedule |
| Cancel appointment | Cancel appointment |
| Get directions | Get directions |
| Contact clinic | Contact clinic |
| Prep title | Before your visit |
| Prep fasting | Fast for 8 hours before your lab work |
| Prep documents | Bring photo ID and insurance card |
| Reschedule banner | Rescheduling your visit on {date} |
| Cancel modal title | Cancel this appointment? |
| Cancel modal body | You can book again anytime. Cancellation fees may apply per clinic policy. |
| Keep appointment | Keep appointment |
| Yes cancel | Yes, cancel |
| Status confirmed | Confirmed |
| Status pending | Pending |
| Status completed | Completed |
| Status cancelled | Cancelled |

### 8.7 Records & notifications

| Key | Copy |
|-----|------|
| Records title | Medical records |
| Prescriptions | Prescriptions |
| Lab results | Lab results |
| Visit summaries | Visit summaries |
| Empty records title | No records yet |
| Empty records body | After your visits, documents will appear here. |
| Issued on | Issued {date} |
| Pharmacy note | Show this to your pharmacy |
| Notifications title | Notifications |
| Today | Today |
| Yesterday | Yesterday |
| Mark all read | Mark all as read |

### 8.8 Profile & support

| Key | Copy |
|-----|------|
| Profile title | Profile |
| Edit profile | Edit profile |
| Insurance card | Insurance card |
| Upload insurance | Upload or scan card |
| Change password | Change password |
| Notification preferences | Notification preferences |
| Help | Help & support |
| Sign out | Sign out |
| Save changes | Save changes |
| Push appointments | Appointment reminders |
| Push results | New lab results |
| Email updates | Email updates |
| FAQ booking | How do I reschedule? |
| FAQ insurance | Is my insurance accepted? |
| Contact support | Contact support |
| Support email CTA | Email support |

### 8.9 Errors & validation

| Key | Copy |
|-----|------|
| Error required | This field is required |
| Error email | Enter a valid email |
| Error phone | Enter a valid phone number |
| Error password weak | Use at least 8 characters |
| Error sign in | Email or password is incorrect. Try again or reset your password. |
| Error network | We couldn't connect. Check your internet and try again. |
| Error generic | Something went wrong. Please try again. |
| Error load appointments | Couldn't load appointments. Pull to refresh or try again. |
| Error booking failed | We couldn't complete your booking. Pick another time or try later. |
| Error otp | That code isn't right. Try again or resend. |

### 8.10 Toasts

| Key | Copy |
|-----|------|
| Toast rescheduled | Appointment rescheduled |
| Toast cancelled | Appointment cancelled |
| Toast saved | Changes saved |
| Toast calendar | Added to your calendar |

---

## 9. Build order (execution checklist)

1. Create file and pages (section 1).  
2. Add Variables + color/text/effect styles (section 2).  
3. Import icons (section 3).  
4. Build components in order: `Button/Primary` → `TextField` → `Chip/Status` → `DoctorCard` → `AppointmentCard` → navigation (section 4).  
5. Mobile vertical slice: frames 9 → 19 (section 5).  
6. Remaining mobile frames 1–8, 20–34.  
7. Web shell + frames 1–8 (section 6).  
8. Prototype connections (section 7).  
9. QA: contrast, 44 px taps, component instances only (no detached duplicates).  
10. Share view-only link; log v1.0 on Cover page.

---

## 10. Accessibility (annotate on `01 — Foundations`)

- Normal text on `surface/background` and `surface/card`: use `text/primary` and `text/secondary` only (contrast ≥ 4.5:1).  
- Status: never rely on color alone—pair `Chip/Status` with text label.  
- Web: document focus order 1–5 on Sign in; modal traps focus; Esc closes modal.  
- Error pattern: **what happened** + **what to do** (see section 8.9).  

---

*Document version: 1.0 · Matches plan: Clinic patient Figma UI/UX*