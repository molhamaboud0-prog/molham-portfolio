# Accessibility — Contrast & Touch

Verified pairs (WCAG AA body text ≥ 4.5:1 on Light mode):

| Foreground | Background | Ratio (approx.) | Pass |
|------------|------------|-----------------|------|
| `#2D2420` (on-surface) | `#FFF8F0` (surface) | ~12.5:1 | Yes |
| `#2D2420` | `#FFFFFF` (elevated) | ~14:1 | Yes |
| `#FFFFFF` | `#FF6B35` (primary) | ~3.2:1 large text only | Large UI OK |
| `#FFFFFF` | `#2EC4B6` (secondary) | ~2.8:1 | Use for chips with dark label `#1A1412` on secondary |
| `#2D2420` | `#FFD166` (accent promo) | ~10:1 | Yes |

**Figma:** run plugin **Stark** on `Body/Medium` over `surface` and `surface-elevated`.

## Touch targets

- Minimum **44×44** for buttons, chips, tab bar items, icon buttons.
- Cart stepper: +/- buttons 44×44.

## Non-color states

- Success: check icon + green text `success`
- Error: warning icon + `error` text
- Offers: percent icon + `accent` background

## Skeleton (Home)

- 3 rounded rects for bento (heights 120, 88, 88)
- 4 pill chips 64×32
- 2 restaurant card placeholders 100% × 140

## Empty / Error screens

| ID | Screen | Message EN | Message AR |
|----|--------|------------|------------|
| E1 | Search | No restaurants found | لا توجد مطاعم مطابقة |
| E2 | Cart | Your cart is empty | سلتك فارغة |
| E3 | Network | Check connection | تحقق من الاتصال |
| E4 | Booking | No slots available | لا مواعيد متاحة اليوم |