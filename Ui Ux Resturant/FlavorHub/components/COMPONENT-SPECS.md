# Component Specifications (Figma)

Frame width for components page: 360 (content) inside 393 device.

## Button

**Variants property:** `Type` = Primary | Secondary | Ghost  
**State:** Default | Pressed | Disabled

| Type | Fill | Text |
|------|------|------|
| Primary | primary | on-primary |
| Secondary | secondary 20% + border outline | on-surface |
| Ghost | transparent | primary |

- Height **48**, min width 120, padding H 24, radius `button`
- Auto Layout: horizontal, center, gap 8

## Input

- Height **52**, fill `surface-elevated`, border `outline` 1px, radius `input`
- Label `Label/Small` above 4px gap
- States: Default, Focused (border secondary 2px), Error (border error + helper text)

## Chip / Filter

- Property `Selected`: Yes | No
- Height **36**, min touch padding to **44** hit area
- Selected: fill secondary, text on-secondary
- Default: fill surface-elevated, border outline

## Restaurant Card

- Variant `Layout`: Horizontal | Featured
- Image 96×96 radius 12 (horizontal) or full width 160 height (featured)
- Badge variants: Delivery | Booking | Both

## Dish Card

- Image top 140h, body padding 12
- Title + 2-line `Body/Small` description
- Badges: Spicy (error tint), Veg (success tint), Halal (secondary tint)
- Price `Title/Medium` primary color
- Quick add: 44×44 circle primary

## Menu category chips (horizontal scroll)

- 10 categories: Popular, Burgers, Pizza, Shawarma, Bowls, Starters, Desserts, Drinks, Breakfast, Kids
- Sticky below header on Menu screen
- Variant `Selected` per category; content list filters below

## Dish customization sheet

- Size chips: Regular / Large / Meal
- Spice: Mild / Medium / Hot
- Sauces, sides, drinks — multi/single select chips
- Check modifiers (extra cheese, no onion)
- Quantity stepper 44×44

## Promo Banner

- Fill gradient optional: accent → accent 80%
- Icon % in circle on-accent
- CTA text Button/Ghost on dark text

## Rating

- Star row + `Body/Small` on-surface-variant
- Numeric bold `on-surface`

## Cart Badge

- 20×20 min on tab icon, fill error, text 10px white

## Tab Bar

- 5 items: Home, Search, Orders, Bookings, Profile
- Height 49 + safe 34
- Active icon+label primary

## Reservation Slot Picker

- Horizontal scroll time pills 72×44
- Calendar row: 7 day cells 44×56
- Stepper guests: - / count / + (44 each)

## Bottom Sheet

- Top radius `sheet`, handle 36×4 outline
- Use for modifiers on dish detail