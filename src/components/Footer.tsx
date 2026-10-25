import { wedding } from '../config/wedding'
import { Reveal } from './Ornament'
import { IconRings, SwashDivider } from './Flourish'

export function Footer() {
  return (
    <footer className="px-8 pb-16 pt-10 text-center">
      <Reveal>
        <IconRings className="mx-auto h-7 w-7 text-gold" />
        <p className="mt-6 font-script text-4xl sm:text-5xl gold-text">
          {wedding.footer.line1}
        </p>
        <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-ivory">
          {wedding.footer.line2}
        </p>
        <p className="mt-6 text-sm italic text-ivory-dim">
          {wedding.footer.note}
        </p>
        <SwashDivider className="mx-auto my-8 h-5 w-56 sm:w-72" />
        <p className="font-serif text-sm tracking-[0.2em] text-gold-soft">
          {wedding.hashtag}
        </p>
        <p className="mt-2 text-[0.7rem] uppercase tracking-[0.3em] text-ivory-dim">
          14 · 15 November 2026 — Lahore
        </p>
      </Reveal>
    </footer>
  )
}
