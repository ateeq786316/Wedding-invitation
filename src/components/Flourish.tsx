/**
 * Royal ornament kit — elaborate gold corner flourishes, calligraphic
 * swash dividers, a laurel wreath ring, and a medallion icon set.
 * All stroke/fill work is hand-tuned SVG; transparent backgrounds.
 * Stems draw themselves in (pathLength 0→1) when scrolled into view.
 */
import { motion } from 'motion/react'

/** Small five-petal blossom used at flourish stem tips. */
function Blossom({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse
          key={a}
          cx="0"
          cy="-6"
          rx="2.6"
          ry="6"
          transform={`rotate(${a})`}
          fill="#faf6ec"
          stroke="#e0d4b4"
          strokeWidth="0.5"
        />
      ))}
      <circle r="1.9" fill="#c9a24b" />
    </g>
  )
}

/**
 * Ornate corner flourish — three curling stems with leaves, tendril
 * spirals and blossoms, drawn for the TOP-LEFT corner. Flip with
 * -scale-x-100 / -scale-y-100 for other corners.
 */
export function CornerFlourish({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
      <g stroke="#c9a24b" strokeWidth="1.1" strokeLinecap="round">
        <motion.path
          d="M3 3 C24 9 46 22 60 42"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
        <motion.path
          d="M3 3 C28 5 54 10 78 19"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
        />
        <motion.path
          d="M3 3 C5 28 10 54 19 78"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.35, ease: 'easeOut' }}
        />
        <motion.path
          d="M60 42 C68 52 72 62 71 73"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.9, ease: 'easeOut' }}
        />
        <path d="M78 19 c7 -1 12 3 10 8 c-2 5 -9 4 -9 -1" strokeWidth="0.9" />
        <path d="M19 78 c-1 7 3 12 8 10 c5 -2 4 -9 -1 -9" strokeWidth="0.9" />
      </g>
      {/* gold leaves along the stems */}
      <g fill="#c9a24b" fillOpacity="0.85">
        <path d="M18 9 q7 -4 11 0 q-5 5 -11 0 Z" />
        <path d="M34 14 q7 -3 10 1 q-5 4 -10 -1 Z" />
        <path d="M9 18 q-4 7 0 11 q5 -5 0 -11 Z" />
        <path d="M14 34 q-3 7 1 10 q4 -5 -1 -10 Z" />
        <path d="M40 24 q6 -4 10 -1 q-4 6 -10 1 Z" />
        <path d="M24 40 q-4 6 -1 10 q6 -4 1 -10 Z" />
        <path d="M55 36 q5 -4 9 -1 q-3 5 -9 1 Z" />
        <path d="M36 55 q-4 5 -1 9 q5 -3 1 -9 Z" />
      </g>
      {/* blossoms at the stem tips */}
      <Blossom x={71} y={73} s={0.9} />
      <Blossom x={88} y={24} s={0.7} />
      <Blossom x={24} y={88} s={0.7} />
      {/* scattered gold berries */}
      <g fill="#c9a24b" fillOpacity="0.6">
        <circle cx="50" cy="18" r="1.2" />
        <circle cx="18" cy="50" r="1.2" />
        <circle cx="64" cy="58" r="1.2" />
        <circle cx="58" cy="64" r="1.2" />
      </g>
    </svg>
  )
}

/** Symmetrical calligraphic swash with a center blossom. */
export function SwashDivider({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 24" className={className} fill="none" aria-hidden="true">
      <g stroke="#c9a24b" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.8">
        <motion.path
          d="M98 12 C80 12 64 5 46 9 C32 12 20 18 6 15"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        />
        <motion.path
          d="M102 12 C120 12 136 5 154 9 C168 12 180 18 194 15"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.15, ease: 'easeOut' }}
        />
      </g>
      <Blossom x={100} y={12} s={0.85} />
      <circle cx="6" cy="15" r="1.4" fill="#c9a24b" fillOpacity="0.8" />
      <circle cx="194" cy="15" r="1.4" fill="#c9a24b" fillOpacity="0.8" />
    </svg>
  )
}

/** Laurel-leaf wreath ring — frames the wax seal like a royal crest. */
export function WreathRing({ className = '' }: { className?: string }) {
  const leaves = Array.from({ length: 14 }, (_, i) => (i * 360) / 14)
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
      <motion.circle
        cx="50"
        cy="50"
        r="46"
        stroke="#c9a24b"
        strokeOpacity="0.45"
        strokeWidth="0.8"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
      />
      <circle cx="50" cy="50" r="42" stroke="#c9a24b" strokeOpacity="0.25" strokeWidth="0.6" />
      {leaves.map((a) => (
        <g key={a} transform={`rotate(${a} 50 50) translate(50 2)`}>
          <path
            d="M0 1 C2.5 -3 6.5 -3 9 1 C6.5 5 2.5 5 0 1 Z"
            fill="#c9a24b"
            fillOpacity="0.7"
            transform="rotate(96)"
          />
        </g>
      ))}
    </svg>
  )
}

/* ---------------- Medallion icon set (24×24 stroke icons) ---------------- */

type IconProps = { className?: string }

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function IconArch({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
      <path d="M5.5 21 V11 C5.5 7.2 8.6 5.2 12 2.8 C15.4 5.2 18.5 7.2 18.5 11 V21" />
      <path d="M3 21 h18" />
    </svg>
  )
}

export function IconRings({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
      <path d="M12 2.5 L15 6 L12 9 L9 6 Z" />
      <circle cx="8.5" cy="14.5" r="5.5" />
      <circle cx="15.5" cy="14.5" r="5.5" />
    </svg>
  )
}

export function IconClock({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7 v5 l3.5 2" />
    </svg>
  )
}

export function IconEnvelope({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.5 7 L12 13.5 L20.5 7" />
    </svg>
  )
}

export function IconHeart({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
      <path d="M12 20 C5.5 14.5 3.5 10 6.3 6.8 C8.8 4.1 12 6 12 8.6 C12 6 15.2 4.1 17.7 6.8 C20.5 10 18.5 14.5 12 20 Z" />
    </svg>
  )
}

export function IconCrown({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
      <path d="M4 17 L6 8 L10 12 L12 5 L14 12 L18 8 L20 17 Z" />
      <path d="M4 19.5 h16" />
      <circle cx="6" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="3.8" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="18" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Jharokha / mehrab medallion — the motif found on palace doors. */
export function ArchMotif({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 80" className={className} fill="none" aria-hidden="true">
      <g stroke="#c9a24b" strokeWidth="1.1" strokeLinecap="round">
        <path d="M30 5 C14 15 8 28 8 44 V75 H52 V44 C52 28 46 15 30 5 Z" />
        <path d="M30 13 C18 21 14 32 14 44 V69 H46 V44 C46 32 42 21 30 13 Z" strokeOpacity="0.55" />
      </g>
      <g stroke="#c9a24b" strokeWidth="0.9" fill="none">
        <rect x="22" y="36" width="16" height="16" />
        <rect x="22" y="36" width="16" height="16" transform="rotate(45 30 44)" />
      </g>
      <circle cx="30" cy="44" r="2" fill="#c9a24b" />
      <g fill="#c9a24b" fillOpacity="0.7">
        <circle cx="18" cy="72" r="1.1" />
        <circle cx="24" cy="72" r="1.1" />
        <circle cx="30" cy="72" r="1.1" />
        <circle cx="36" cy="72" r="1.1" />
        <circle cx="42" cy="72" r="1.1" />
      </g>
      <circle cx="30" cy="5" r="1.6" fill="#c9a24b" />
    </svg>
  )
}
