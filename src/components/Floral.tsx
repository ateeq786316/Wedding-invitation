/**
 * Baby's-breath (gypsophila) ornaments — branching sage stems carrying
 * clusters of tiny white blossoms, like the dried flowers on the card.
 */
import { BigFlower, SmallFlower, VineLeaf } from './VineScroll'

function TinyFlower({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <circle
          key={a}
          cx={Math.cos((a * Math.PI) / 180) * 1.7}
          cy={Math.sin((a * Math.PI) / 180) * 1.7}
          r="1.15"
          fill="#faf6ec"
        />
      ))}
      <circle r="0.7" fill="#c9a24b" />
    </g>
  )
}

/** A cluster of tiny blossoms around a point. */
function Cluster({
  x,
  y,
  s = 1,
}: {
  x: number
  y: number
  s?: number
}) {
  const pts: [number, number][] = [
    [0, 0],
    [5.5, -4],
    [7, 3],
    [2.5, 6.5],
    [-4, 5.5],
    [-6.5, -1],
    [-3, -6],
    [4.5, -8],
  ]
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {pts.map(([px, py], i) => (
        <TinyFlower key={i} x={px} y={py} />
      ))}
    </g>
  )
}

/**
 * Corner spray — a baby's-breath branch growing diagonally out of the
 * top-left corner. Mirror with `-scale-x-100` for the top-right.
 */
export function FloralSpray({ className = '' }: { className?: string }) {
  const stem = '#a9b894'
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" aria-hidden="true">
      {/* main stem + side branches */}
      <g stroke={stem} strokeOpacity="0.8" strokeWidth="1" fill="none">
        <path d="M0 0 C34 30 68 62 112 104" />
        <path d="M36 30 C48 24 60 22 74 24" />
        <path d="M62 58 C74 52 88 50 102 52" />
        <path d="M18 14 C30 8 44 6 58 8" />
        <path d="M0 0 C40 14 84 24 130 28" strokeWidth="0.9" />
        <path d="M50 18 C56 14 62 12 70 12" strokeWidth="0.8" />
        <path d="M86 80 C96 74 106 72 118 74" strokeWidth="0.8" />
      </g>
      {/* blossom clusters at branch tips and along stems */}
      <Cluster x={112} y={104} s={1.15} />
      <Cluster x={74} y={24} s={1} />
      <Cluster x={102} y={52} s={1.05} />
      <Cluster x={58} y={8} s={0.9} />
      <Cluster x={130} y={28} s={0.95} />
      <Cluster x={70} y={12} s={0.7} />
      <Cluster x={118} y={74} s={0.8} />
      <Cluster x={86} y={86} s={0.9} />
      <Cluster x={44} y={40} s={0.85} />
      <Cluster x={26} y={20} s={0.7} />
    </svg>
  )
}

/** Small baby's-breath posy — sits at the apex of arch cards. */
export function BlossomCluster({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 34" className={className} fill="none" aria-hidden="true">
      <g stroke="#a9b894" strokeOpacity="0.8" strokeWidth="0.9" fill="none">
        <path d="M32 30 C32 24 32 20 32 14" />
        <path d="M32 26 C26 22 20 20 14 19" />
        <path d="M32 26 C38 22 44 20 50 19" />
      </g>
      <Cluster x={32} y={11} s={0.85} />
      <Cluster x={14} y={18} s={0.65} />
      <Cluster x={50} y={18} s={0.65} />
    </svg>
  )
}

/**
 * Lush corner bouquet — big roses, small blossoms and baby's-breath
 * spilling out of a corner. Drawn for TOP-LEFT; flip for other corners.
 */
export function CornerBouquet({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 170" className={className} fill="none" aria-hidden="true">
      {/* branching stems out of the corner */}
      <g stroke="#a9b894" strokeOpacity="0.8" strokeWidth="1.1" fill="none">
        <path d="M0 0 C30 26 56 46 92 74 C112 88 132 100 156 108" />
        <path d="M0 0 C34 12 72 20 116 26 C136 28 152 32 164 38" />
        <path d="M0 0 C12 34 20 72 26 116 C28 136 32 152 38 164" />
        <path d="M60 56 C74 50 88 48 104 50" strokeWidth="0.9" />
        <path d="M50 60 C50 74 48 88 50 104" strokeWidth="0.9" />
      </g>
      {/* leaves */}
      <VineLeaf x={34} y={22} r={35} s={1.2} />
      <VineLeaf x={58} y={18} r={10} />
      <VineLeaf x={22} y={34} r={125} s={1.2} />
      <VineLeaf x={18} y={58} r={170} />
      <VineLeaf x={76} y={50} r={20} />
      <VineLeaf x={50} y={76} r={160} />
      <VineLeaf x={110} y={22} r={8} />
      <VineLeaf x={22} y={110} r={172} />
      {/* big flowers */}
      <BigFlower x={44} y={44} s={1.5} />
      <BigFlower x={98} y={30} s={1.1} />
      <BigFlower x={30} y={98} s={1.15} />
      {/* small flowers */}
      <SmallFlower x={76} y={66} s={0.9} />
      <SmallFlower x={128} y={34} s={0.8} />
      <SmallFlower x={34} y={128} s={0.8} />
      <SmallFlower x={62} y={96} s={0.75} />
      <SmallFlower x={96} y={62} s={0.75} />
      {/* baby's-breath clusters at the tips */}
      <Cluster x={154} y={108} s={1.05} />
      <Cluster x={164} y={40} s={0.9} />
      <Cluster x={40} y={164} s={0.9} />
      <Cluster x={116} y={84} s={0.8} />
      <Cluster x={84} y={116} s={0.8} />
      {/* gold buds */}
      <g fill="#c9a24b" fillOpacity="0.8">
        <circle cx="142" cy="70" r="2.2" />
        <circle cx="70" cy="142" r="2.2" />
        <circle cx="120" cy="52" r="1.8" />
        <circle cx="52" cy="120" r="1.8" />
      </g>
    </svg>
  )
}
