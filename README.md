# Wedding Invitation — Firdous & Hudail

A one-page, mobile-first digital wedding invitation (Mehndi & Baraat, Lahore).
Guests open a link, tap the gold wax seal, palace doors part, and scroll through
the invitation.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- motion/react — scroll-driven vine, doors animation, reveals
- No backend — RSVP & duas via WhatsApp (`wa.me`) links

## All wedding details live in one file

`src/config/wedding.ts` — names, dates, venues, map links, WhatsApp numbers,
wording. Edit it and the whole site updates.

## Commands

```bash
npm install
npm run dev       # dev server
npm run build     # production build → dist/
```

## Optional ambient audio

Drop an mp3 at `public/audio/ambient.mp3` — a small music toggle appears
automatically. Without the file the button stays hidden.
