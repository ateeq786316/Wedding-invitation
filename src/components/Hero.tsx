import { motion, useScroll, useTransform } from 'motion/react'
import { wedding } from '../config/wedding'
import { Divider, Eyebrow } from './Ornament'
import { FloralSpray } from './Floral'

export function Hero() {
  // Corner sprays drift slightly slower than the scroll — gentle depth.
  const { scrollY } = useScroll()
  const sprayY = useTransform(scrollY, [0, 500], [0, 70])
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center px-6 py-20 text-center">
      {/* white floral corner sprays with parallax drift */}
      <motion.div style={{ y: sprayY }} className="absolute left-5 top-5 sm:left-8 sm:top-8">
        <FloralSpray className="h-24 w-24 opacity-80 sm:h-36 sm:w-36" />
      </motion.div>
      <motion.div style={{ y: sprayY }} className="absolute right-5 top-5 sm:right-8 sm:top-8">
        <FloralSpray className="h-24 w-24 -scale-x-100 opacity-80 sm:h-36 sm:w-36" />
      </motion.div>

      <motion.p {...rise(0.15)} className="font-arabic text-3xl sm:text-5xl gold-text leading-relaxed">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </motion.p>
      <motion.p {...rise(0.3)} className="mt-2 text-[0.75rem] sm:text-xs italic tracking-wide text-ivory-dim">
        In the name of Allah, the Most Gracious, the Most Merciful
      </motion.p>

      <motion.div {...rise(0.45)}>
        <Divider className="my-8 sm:my-10" />
      </motion.div>

      <motion.div {...rise(0.55)}>
        <Eyebrow>Together with their families</Eyebrow>
      </motion.div>

      {/* Urdu names — Nastaliq stacked */}
      <motion.p {...rise(0.7)} className="font-urdu mt-6 text-4xl sm:text-6xl leading-[2] text-ivory">
        {wedding.bride.nameUrdu}
      </motion.p>
      <motion.div {...rise(0.8)} className="my-1 flex items-center gap-3 text-gold">
        <span className="h-px w-10 bg-gold-dim" />
        <span className="font-serif text-2xl sm:text-3xl italic gold-text">&amp;</span>
        <span className="h-px w-10 bg-gold-dim" />
      </motion.div>
      <motion.p {...rise(0.9)} className="font-urdu text-4xl sm:text-6xl leading-[2] text-ivory">
        {wedding.groom.nameUrdu}
      </motion.p>

      {/* English names — script calligraphy like the printed card */}
      <motion.h1
        {...rise(1.05)}
        className="mt-4 font-script text-5xl sm:text-7xl gold-text"
      >
        {wedding.coupleNames}
      </motion.h1>

      <motion.p {...rise(1.2)} className="mt-4 text-sm sm:text-base tracking-[0.2em] uppercase text-ivory-dim">
        Daughter of {wedding.bride.father}
      </motion.p>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-gold"
        aria-hidden="true"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.4em] text-ivory-dim">Scroll</span>
        <motion.svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </motion.div>
    </section>
  )
}
