import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { wedding } from '../config/wedding'
import { WaxSeal } from './WaxSeal'
import { BlossomCluster, CornerBouquet, FloralSpray } from './Floral'
import { ArchMotif, IconCrown, WreathRing } from './Flourish'

/**
 * Full-screen gate: palace doors sealed with a wax monogram.
 * Tap → seal breaks, doors swing open toward the viewer, invitation revealed.
 */
export function IntroGate({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false)
  const reduce = useReducedMotion()

  const handleOpen = () => {
    if (opening) return
    if (reduce) {
      onOpen()
      return
    }
    setOpening(true)
  }

  const doorTransition = {
    duration: 1.35,
    ease: [0.7, 0, 0.2, 1] as const,
    delay: 0.4,
  }

  return (
    <motion.div
      className="fixed inset-0 z-50"
      style={{ perspective: 1400 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-label="Wedding invitation — tap the seal to open"
    >
      {/* Left door — hinged on the left edge, swings toward viewer */}
      <motion.div
        className="door-left absolute inset-y-0 left-0 w-1/2 border-r border-gold-dim"
        style={{
          transformOrigin: 'left center',
        }}
        animate={opening ? { rotateY: -102 } : { rotateY: 0 }}
        transition={doorTransition}
        onAnimationComplete={opening ? onOpen : undefined}
      >
        {/* inset gold card frame + bottom band + mehrab medallion */}
        <div className="absolute inset-4 border border-gold-dim/70 sm:inset-6" />
        <div className="absolute inset-[22px] border border-gold-dim/40 sm:inset-[30px]" />
        <div className="pattern-band absolute inset-x-8 bottom-8 h-2.5 sm:inset-x-10" />
        <ArchMotif className="absolute left-1/2 top-[36%] h-28 w-20 -translate-x-1/2 -translate-y-1/2 text-gold/70 sm:h-40 sm:w-28" />
        <ArchMotif className="absolute left-1/2 top-[68%] h-20 w-14 -translate-x-1/2 -translate-y-1/2 text-gold/50 sm:h-28 sm:w-20" />
        {/* white floral corner spray + lush bouquet at the base */}
        <FloralSpray className="absolute left-2 top-2 h-28 w-28 opacity-90 sm:h-40 sm:w-40" />
        <CornerBouquet className="absolute bottom-3 left-3 h-24 w-24 -scale-y-100 sm:h-36 sm:w-36" />
      </motion.div>

      {/* Right door — hinged on the right edge */}
      <motion.div
        className="door-right absolute inset-y-0 right-0 w-1/2 border-l border-gold-dim"
        style={{
          transformOrigin: 'right center',
        }}
        animate={opening ? { rotateY: 102 } : { rotateY: 0 }}
        transition={doorTransition}
      >
        {/* inset gold card frame + bottom band + mehrab medallion */}
        <div className="absolute inset-4 border border-gold-dim/70 sm:inset-6" />
        <div className="absolute inset-[22px] border border-gold-dim/40 sm:inset-[30px]" />
        <div className="pattern-band absolute inset-x-8 bottom-8 h-2.5 sm:inset-x-10" />
        <ArchMotif className="absolute left-1/2 top-[36%] h-28 w-20 -translate-x-1/2 -translate-y-1/2 text-gold/70 sm:h-40 sm:w-28" />
        <ArchMotif className="absolute left-1/2 top-[68%] h-20 w-14 -translate-x-1/2 -translate-y-1/2 text-gold/50 sm:h-28 sm:w-20" />
        {/* white floral corner spray + lush bouquet at the base — mirrored */}
        <FloralSpray className="absolute right-2 top-2 h-28 w-28 -scale-x-100 opacity-90 sm:h-40 sm:w-40" />
        <CornerBouquet className="absolute bottom-3 right-3 h-24 w-24 -scale-x-100 -scale-y-100 sm:h-36 sm:w-36" />
      </motion.div>

      {/* Center stile — a narrow panel owning the door seam, so text
          never collides with the line where the doors meet */}
      <motion.div
        className="absolute inset-0 z-10 flex justify-center"
        animate={opening ? { opacity: 0, scale: 0.94 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="relative flex h-full w-60 sm:w-72 flex-col items-center justify-center gap-4 border-x border-gold-dim bg-bg-deep/85 px-4 text-center">
          {/* tiny posies framing the stile top and bottom */}
          <BlossomCluster className="absolute left-1/2 top-3 h-6 w-12 -translate-x-1/2 opacity-80" />
          <BlossomCluster className="absolute bottom-3 left-1/2 h-6 w-12 -translate-x-1/2 rotate-180 opacity-80" />
          <IconCrown className="h-6 w-6 text-gold" />
          <p className="font-arabic text-xl sm:text-2xl gold-text">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="text-[0.72rem] sm:text-sm uppercase tracking-[0.45em] text-gold-soft">
            The Wedding
            <br />
            Invitation of
          </p>

          <p className="font-urdu text-2xl sm:text-3xl leading-[2.1] text-ivory">
            {wedding.bride.nameUrdu}
          </p>
          <p className="font-urdu -my-3 text-xl text-gold">۝</p>
          <p className="font-urdu text-2xl sm:text-3xl leading-[2.1] text-ivory">
            {wedding.groom.nameUrdu}
          </p>

          <h1 className="font-script text-4xl sm:text-5xl gold-text">
            {wedding.coupleNames}
          </h1>

          {/* Twisted cords wrapped around the card, gold wax seal on top */}
          <div className="relative mt-4">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 flex w-[76vw] max-w-md -translate-x-1/2 -translate-y-1/2 flex-col gap-[7px]"
            >
              <div className="cord" />
              <div className="cord" />
              <div className="cord" />
            </div>
            {/* laurel wreath behind the seal */}
            <WreathRing className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 sm:h-44 sm:w-44" />
            <motion.button
              onClick={handleOpen}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              animate={opening ? { scale: 0.4, rotate: 25, opacity: 0 } : {}}
              transition={{ duration: 0.4, ease: 'easeIn' }}
              className="seal-pulse relative z-10 cursor-pointer rounded-full"
              style={{ filter: 'drop-shadow(0 14px 26px rgba(0,0,0,0.55))' }}
              aria-label="Open invitation"
            >
              <WaxSeal monogram={wedding.monogram} className="h-28 w-28 sm:h-32 sm:w-32" />
            </motion.button>
          </div>

          <p className="mt-2 text-sm sm:text-base tracking-[0.35em] uppercase text-ivory-dim">
            Tap the seal to open
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
