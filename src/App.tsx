import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { IntroGate } from './components/IntroGate'
import { Hero } from './components/Hero'
import { Ayat } from './components/Ayat'
import { Invitation } from './components/Invitation'
import { Events } from './components/Events'
import { Countdown } from './components/Countdown'
import { Rsvp } from './components/Rsvp'
import { Footer } from './components/Footer'
import { AudioToggle, ThemeToggle, type Theme } from './components/Toggles'
import { PatternBand } from './components/Ornament'
import { CornerFlourish } from './components/Flourish'
import { VineScroll } from './components/VineScroll'
import { CornerBouquet } from './components/Floral'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('invitation-theme')
    return saved === 'emerald' ? 'emerald' : 'maroon'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('invitation-theme', theme)
  }, [theme])

  // Lock scroll while the gate is closed.
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [opened])

  return (
    <div className="jali vignette min-h-screen bg-bg-deep font-serif text-ivory">
      <AnimatePresence>
        {!opened && <IntroGate onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      <ThemeToggle theme={theme} onChange={setTheme} />

      {/* Gold double-line frame with royal corner flourishes */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-2 sm:inset-4 z-30">
        <div className="absolute inset-0 border border-gold-dim" />
        <div className="absolute inset-1.5 border border-gold-dim/60" />
        <CornerFlourish className="absolute -left-1.5 -top-1.5 h-14 w-14 sm:h-20 sm:w-20 opacity-90" />
        <CornerFlourish className="absolute -right-1.5 -top-1.5 h-14 w-14 -scale-x-100 sm:h-20 sm:w-20 opacity-90" />
        <CornerFlourish className="absolute -bottom-1.5 -left-1.5 h-14 w-14 -scale-y-100 sm:h-20 sm:w-20 opacity-90" />
        <CornerFlourish className="absolute -bottom-1.5 -right-1.5 h-14 w-14 -scale-x-100 -scale-y-100 sm:h-20 sm:w-20 opacity-90" />
      </div>

      {/* Flowering bel climbing both edges, grows as you scroll */}
      <VineScroll />

      {/* Big flower bouquets tucked into all four corners */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[32]">
        <CornerBouquet className="absolute left-0 top-0 h-28 w-28 sm:h-40 sm:w-40" />
        <CornerBouquet className="absolute right-0 top-0 h-28 w-28 -scale-x-100 sm:h-40 sm:w-40" />
        <CornerBouquet className="absolute bottom-0 left-0 h-28 w-28 -scale-y-100 sm:h-40 sm:w-40" />
        <CornerBouquet className="absolute bottom-0 right-0 h-28 w-28 -scale-x-100 -scale-y-100 sm:h-40 sm:w-40" />
      </div>

      <main className="relative z-20">
        <Hero />
        <PatternBand className="max-w-3xl" />
        <Ayat />
        <Invitation />
        <PatternBand className="max-w-3xl" />
        <Events />
        <PatternBand className="max-w-3xl" />
        <Countdown />
        <PatternBand className="max-w-3xl" />
        <Rsvp />
      </main>
      <Footer />

      <AudioToggle />
    </div>
  )
}
