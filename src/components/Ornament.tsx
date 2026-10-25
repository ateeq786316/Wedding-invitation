import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { BlossomCluster } from './Floral'
import { CornerFlourish } from './Flourish'

/** Scroll-triggered fade+rise reveal for sections. */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/** 8-point Islamic star. */
export function Star8({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      aria-hidden="true"
    >
      <rect x="6" y="6" width="12" height="12" />
      <rect x="6" y="6" width="12" height="12" transform="rotate(45 12 12)" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** line — star — line ornament divider. */
export function Divider({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-4 text-gold ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-16 sm:w-24 bg-gold-dim" />
      <Star8 className="h-4 w-4 shrink-0" />
      <span className="h-px w-16 sm:w-24 bg-gold-dim" />
    </div>
  )
}

/** Mughal horseshoe-arch card: double gold frame, pattern linings, blossom apex. */
export function ArchCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`arch relative border border-gold/60 bg-card/50 px-6 pb-10 pt-16 sm:px-10 ${className}`}
    >
      <div className="arch pointer-events-none absolute inset-2.5 border border-gold-dim/60" />
      {/* royal corner flourishes at the base */}
      <CornerFlourish className="pointer-events-none absolute bottom-2 left-2 h-10 w-10 -scale-y-100 opacity-60" />
      <CornerFlourish className="pointer-events-none absolute bottom-2 right-2 h-10 w-10 -scale-x-100 -scale-y-100 opacity-60" />
      {/* white blossom at the arch apex */}
      <BlossomCluster className="pointer-events-none absolute left-1/2 top-5 h-7 w-14 -translate-x-1/2" />
      <div className="relative">{children}</div>
    </div>
  )
}

/** Full-width repeating gold diamond band between sections. */
export function PatternBand({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pattern-band mx-auto h-3 w-full max-w-4xl ${className}`}
    />
  )
}

/** Small letterspaced eyebrow label. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-center text-[0.72rem] sm:text-xs font-medium uppercase tracking-[0.45em] text-gold-soft">
      {children}
    </p>
  )
}

/** Gold medallion coin holding a section icon. */
export function Medallion({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold-dim bg-card/50 text-gold shadow-[0_0_24px_rgba(201,162,75,0.15)] ${className}`}
    >
      {children}
    </div>
  )
}
