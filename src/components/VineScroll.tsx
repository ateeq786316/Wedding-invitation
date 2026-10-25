import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react'

/**
 * A flowering bel (vine) that grows from the bottom of the screen upward
 * as the guest scrolls — big roses and small blossoms bloom open the
 * moment the stem reaches them.
 */

const GOLD = '#c9a24b'
const IVORY = '#faf6ec'
const IVORY_EDGE = '#e0d4b4'
const SAGE = '#a9b894'

/** Big layered flower — outer + inner petals, gold heart. */
export function BigFlower({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <ellipse
          key={`o${a}`}
          cx="0"
          cy="-9"
          rx="4"
          ry="9"
          transform={`rotate(${a})`}
          fill={IVORY}
          stroke={IVORY_EDGE}
          strokeWidth="0.5"
        />
      ))}
      {[36, 108, 180, 252, 324].map((a) => (
        <ellipse
          key={`i${a}`}
          cx="0"
          cy="-5"
          rx="2.4"
          ry="5"
          transform={`rotate(${a})`}
          fill="#f2ead6"
        />
      ))}
      <circle r="3" fill={GOLD} />
      <circle r="1.2" fill="#8f6f2a" />
    </g>
  )
}

/** Small five-petal blossom. */
export function SmallFlower({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
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
          fill={IVORY}
          stroke={IVORY_EDGE}
          strokeWidth="0.5"
        />
      ))}
      <circle r="1.9" fill={GOLD} />
    </g>
  )
}

export function VineLeaf({ x, y, r = 0, s = 1 }: { x: number; y: number; r?: number; s?: number }) {
  return (
    <path
      d="M0 0 C3 -5 9 -5 12 0 C9 5 3 5 0 0 Z"
      fill={SAGE}
      opacity="0.9"
      transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}
    />
  )
}

/** A bloom that pops open (springy scale) when the stem reaches `at`. */
function Bloom({
  p,
  at,
  children,
}: {
  p: MotionValue<number>
  at: number
  children: React.ReactNode
}) {
  const t = useTransform(p, [Math.max(0, at - 0.04), at], [0, 1])
  const scale = useSpring(t, { stiffness: 300, damping: 16 })
  const opacity = useTransform(p, [Math.max(0, at - 0.05), at], [0, 1])
  return (
    <motion.g
      style={{
        scale,
        opacity,
        transformBox: 'fill-box',
        transformOrigin: 'center',
      }}
    >
      {children}
    </motion.g>
  )
}

function Vine({ grow, className = '' }: { grow: MotionValue<number>; className?: string }) {
  return (
    <div className={`pointer-events-none fixed inset-y-0 z-10 opacity-60 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 60 900"
        preserveAspectRatio="xMidYMax meet"
        className="h-full"
        fill="none"
      >
        {/* the growing stem — slim S-curve hugging the frame edge */}
        <motion.path
          d="M21 890 C11 800 33 758 21 690 C9 622 33 578 21 510 C9 442 33 398 21 330 C9 262 33 218 21 150 C13 105 27 62 21 14"
          stroke={GOLD}
          strokeOpacity="0.6"
          strokeWidth="1.6"
          strokeLinecap="round"
          style={{ pathLength: grow }}
        />

        {/* leaves along the climb */}
        <Bloom p={grow} at={0.14}><VineLeaf x={21} y={768} r={-140} s={1.1} /></Bloom>
        <Bloom p={grow} at={0.22}><VineLeaf x={26} y={700} r={30} /></Bloom>
        <Bloom p={grow} at={0.30}><VineLeaf x={17} y={622} r={-150} /></Bloom>
        <Bloom p={grow} at={0.38}><VineLeaf x={26} y={548} r={25} /></Bloom>
        <Bloom p={grow} at={0.48}><VineLeaf x={16} y={462} r={-155} s={1.1} /></Bloom>
        <Bloom p={grow} at={0.58}><VineLeaf x={26} y={372} r={30} /></Bloom>
        <Bloom p={grow} at={0.68}><VineLeaf x={16} y={282} r={-150} /></Bloom>
        <Bloom p={grow} at={0.78}><VineLeaf x={25} y={192} r={28} /></Bloom>
        <Bloom p={grow} at={0.88}><VineLeaf x={20} y={102} r={-160} /></Bloom>

        {/* big flowers */}
        <Bloom p={grow} at={0.14}><BigFlower x={25} y={764} s={1.15} /></Bloom>
        <Bloom p={grow} at={0.30}><BigFlower x={14} y={622} s={1} /></Bloom>
        <Bloom p={grow} at={0.46}><BigFlower x={26} y={478} s={1.25} /></Bloom>
        <Bloom p={grow} at={0.62}><BigFlower x={15} y={336} s={1.05} /></Bloom>
        <Bloom p={grow} at={0.80}><BigFlower x={26} y={172} s={1.15} /></Bloom>
        <Bloom p={grow} at={0.95}><BigFlower x={21} y={26} s={1.1} /></Bloom>

        {/* small flowers — pairs make fuller clusters */}
        <Bloom p={grow} at={0.06}><SmallFlower x={19} y={838} s={0.9} /></Bloom>
        <Bloom p={grow} at={0.09}><SmallFlower x={15} y={808} s={0.75} /></Bloom>
        <Bloom p={grow} at={0.11}><SmallFlower x={22} y={790} s={0.85} /></Bloom>
        <Bloom p={grow} at={0.20}><SmallFlower x={27} y={712} s={0.85} /></Bloom>
        <Bloom p={grow} at={0.24}><SmallFlower x={17} y={676} s={0.9} /></Bloom>
        <Bloom p={grow} at={0.27}><SmallFlower x={21} y={660} s={0.7} /></Bloom>
        <Bloom p={grow} at={0.36}><SmallFlower x={27} y={572} s={0.9} /></Bloom>
        <Bloom p={grow} at={0.40}><SmallFlower x={17} y={536} s={0.8} /></Bloom>
        <Bloom p={grow} at={0.52}><SmallFlower x={15} y={428} s={0.9} /></Bloom>
        <Bloom p={grow} at={0.55}><SmallFlower x={23} y={404} s={0.75} /></Bloom>
        <Bloom p={grow} at={0.66}><SmallFlower x={27} y={306} s={0.9} /></Bloom>
        <Bloom p={grow} at={0.70}><SmallFlower x={17} y={268} s={0.8} /></Bloom>
        <Bloom p={grow} at={0.76}><SmallFlower x={25} y={222} s={0.85} /></Bloom>
        <Bloom p={grow} at={0.86}><SmallFlower x={16} y={124} s={0.9} /></Bloom>
        <Bloom p={grow} at={0.90}><SmallFlower x={26} y={90} s={0.8} /></Bloom>
        <Bloom p={grow} at={0.93}><SmallFlower x={19} y={60} s={0.85} /></Bloom>

        {/* gold buds */}
        <Bloom p={grow} at={0.12}><circle cx="27" cy="782" r="2.4" fill={GOLD} /></Bloom>
        <Bloom p={grow} at={0.17}><circle cx="16" cy="742" r="2" fill={GOLD} /></Bloom>
        <Bloom p={grow} at={0.33}><circle cx="21" cy={598} r="2.2" fill={GOLD} /></Bloom>
        <Bloom p={grow} at={0.50}><circle cx="27" cy="448" r="2.4" fill={GOLD} /></Bloom>
        <Bloom p={grow} at={0.60}><circle cx="14" cy={358} r="2.2" fill={GOLD} /></Bloom>
        <Bloom p={grow} at={0.74}><circle cx="15" cy="252" r="2.4" fill={GOLD} /></Bloom>
        <Bloom p={grow} at={0.88}><circle cx="23" cy={108} r="2.2" fill={GOLD} /></Bloom>
      </svg>
    </div>
  )
}

/** Both edges — right vine is the mirror image of the left. */
export function VineScroll() {
  const { scrollYProgress } = useScroll()
  // Start ~7% grown so the base is already flowering when the page opens.
  const grow = useSpring(
    useTransform(scrollYProgress, [0, 0.9], [0.07, 1]),
    { stiffness: 55, damping: 18 },
  )

  return (
    <>
      <Vine grow={grow} className="left-0" />
      <Vine grow={grow} className="right-0 -scale-x-100" />
    </>
  )
}
