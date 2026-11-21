# Prototype Flows (Figma)

## Flow A — Order (target ~3 min demo)

```
splash → onboard-1 → (skip) → home → restaurant-detail → menu → dish-detail → cart → checkout → payment → order-success → track
```

| Hotspot | Action | Destination | Animation |
|---------|--------|-------------|-----------|
| Splash CTA | Tap | home | Dissolve 200ms |
| Home search bar | Tap | search | Push |
| Home restaurant card | Tap | restaurant-detail | Smart animate |
| Menu item | Tap | dish-detail | Push |
| Add to cart | Tap | cart overlay badge++ | None |
| Cart checkout | Tap | checkout | Push |
| Pay | Tap | order-success | Replace |
| Track | Tap | track | Push |

## Flow B — Booking

```
home → (Book table) → booking-branch → booking-slots → booking-success
```

## Flow C — Offer

```
home → promo bento card → coupon → back → home
```

## Flow D — Empty states (dev menu / separate start points)

- `empty-cart` from tab Orders when cart=0
- `empty-search` from search with active filters
- `empty-booking` from booking-slots

## RTL demo

Start frame: `AR / home` — Profile → Settings → Language (hotspot to `EN / settings` optional).

## Prototype settings

- Device: iPhone 15 Pro
- Overflow: vertical scroll where noted
- Starting frame EN: `splash` or `home` for stakeholder demos