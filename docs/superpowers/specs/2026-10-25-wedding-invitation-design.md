# Wedding Invitation — Design Doc

**Date:** 2026-10-25
**Type:** Small project, single-page frontend

## Intent

A one-page, mobile-first digital wedding invitation for **Firdous Seemab & Hudail**,
hosted by the bride's family (girl's side, Lahore, Pakistan). Guests open a link
shared on WhatsApp, tap to break a wax seal, and scroll through the invitation.
Frontend only — no backend.

## The couple & events

| Field | Value |
|---|---|
| Bride | Firdous Seemab — فردوس سیماب (daughter of Irshad Ali) |
| Groom | Hudail — ہُدیال (son of Dilawar Hussain) |
| Monogram | H & F (wax seal) |
| Mehndi | Sat 14 Nov 2026, 7:00 PM — Bride's Residence — maps.app.goo.gl/wUoYmseXPL4NL6sV8 |
| Baraat | Sun 15 Nov 2026, 1:00–4:00 PM — Varioline Le Grand, Lahore — share.google/ziac1lMWgO22cAQmX |
| RSVP/Duas | WhatsApp → +923125053926, +923065347311 (bride's brothers) |

All details live in **one config file** (`src/config/wedding.ts`) so anything can be
edited in seconds without touching components.

## Stack

- **Vite + React + TypeScript (strict)** — fast, portfolio-friendly, deploys free to
  Vercel/Netlify/GitHub Pages
- **Tailwind CSS** — styling
- **motion/react** — seal-break intro, scroll reveals, countdown (respects
  `prefers-reduced-motion`)
- **Fonts:** Amiri (Arabic), Noto Nastaliq Urdu (names/dawatnama), Cormorant
  Garamond (English) — via Google Fonts

## Design system

Two palettes, switchable at runtime via a small gold toggle (CSS variables,
persisted to localStorage):

- **Emerald & Gold (default):** deep emerald `#0B3D2E`, antique gold `#C9A24B`,
  ivory `#F6F1E6`
- **Royal Maroon & Gold (alternate):** deep maroon `#6B0F1A`, same gold, ivory

Motifs: Mughal mehrab arches, jali lattice borders, 8-point Islamic star, thin
gold linework. No photos — illustration/typography led.

## Page structure (top → bottom)

1. **Intro gate** — sealed card, "H & F" wax seal, "Tap to open" → seal breaks,
   panels part, invitation revealed
2. **Hero** — Bismillah calligraphy → فردوس سیماب & ہُدیال in Nastaliq →
   "Firdous & Hudail" in serif → dates → family lines
3. **Ayat** — Surah Ar-Rum 30:21, Arabic + translation
4. **Events** — Mehndi + Baraat cards: date, time, venue, Get Directions
   (Google Maps), Add to Calendar (`.ics`/Google Calendar link)
5. **Countdown** — live timer to Baraat
6. **RSVP & Duas** — "Confirm on WhatsApp" (sibling selector between the two
   numbers or both buttons) + "Send your Dua" → `wa.me` prefilled messages
7. **Footer** — "With love & blessings" + families' names

## Audio

Optional ambient toggle (fixed bottom-right). Plays `public/audio/ambient.mp3`
(Frozen Silence track, user drops the file in). If the file is absent the toggle
stays hidden.

## Non-goals

- No Walima card (groom's side event)
- No backend/RSVP database — WhatsApp links only
- No photo gallery, no guest-name personalization
- No nasheed — ambient tone only

## Approaches considered

| Approach | Verdict |
|---|---|
| **Vite + React + Tailwind (chosen)** | Portfolio-quality codebase, smooth motion, free deploy. Fits MERN background. |
| Single static HTML/CSS file | Simplest but weak animation control and no component structure — rejected. |
| Next.js | SSR/routing unneeded for one page — rejected as overhead. |

## Accessibility & performance

- `prefers-reduced-motion` → intro auto-opens, reveals become fades
- Semantic HTML, aria labels on buttons, contrast-checked gold-on-emerald
- Animate transform/opacity only; fonts preloaded; mobile-first
