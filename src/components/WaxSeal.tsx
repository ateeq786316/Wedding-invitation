/**
 * Realistic gold wax seal — irregular wax pool with drips (feTurbulence-
 * displaced edges), glossy highlight, and a debossed script monogram.
 */
export function WaxSeal({
  monogram,
  className = '',
}: {
  monogram: string
  className?: string
}) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="wax-body" cx="38%" cy="30%" r="78%">
          <stop offset="0%" stopColor="#f3dfa0" />
          <stop offset="42%" stopColor="#d9b25f" />
          <stop offset="78%" stopColor="#a8792f" />
          <stop offset="100%" stopColor="#6f4d14" />
        </radialGradient>
        <filter id="wax-rough" x="-25%" y="-25%" width="150%" height="150%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.085"
            numOctaves="3"
            seed="11"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
        </filter>
      </defs>

      {/* irregular wax pool + drips */}
      <g filter="url(#wax-rough)">
        <circle cx="60" cy="60" r="44" fill="url(#wax-body)" />
        <ellipse cx="26" cy="84" rx="10" ry="15" fill="url(#wax-body)" />
        <ellipse cx="94" cy="42" rx="12" ry="9" fill="url(#wax-body)" />
        <ellipse cx="72" cy="98" rx="12" ry="8" fill="url(#wax-body)" />
        <ellipse cx="18" cy="46" rx="7" ry="10" fill="url(#wax-body)" />
      </g>

      {/* glossy highlight + lower shadow */}
      <ellipse
        cx="44"
        cy="36"
        rx="15"
        ry="8"
        fill="#ffffff"
        opacity="0.3"
        transform="rotate(-28 44 36)"
      />
      <ellipse cx="82" cy="80" rx="9" ry="5" fill="#4a3108" opacity="0.3" transform="rotate(-20 82 80)" />

      {/* embossed stamp ring — dark press, light lower lip */}
      <circle cx="60" cy="59" r="32" fill="none" stroke="#f7ecc9" strokeWidth="1" opacity="0.45" />
      <circle cx="60" cy="60" r="32" fill="none" stroke="#5d3f10" strokeWidth="2.2" opacity="0.65" />
      <circle cx="60" cy="60" r="27" fill="none" stroke="#5d3f10" strokeWidth="0.8" opacity="0.4" />

      {/* debossed script monogram: light lip beneath, dark press on top */}
      <text
        x="60"
        y="71"
        textAnchor="middle"
        fontFamily="'Great Vibes', cursive"
        fontSize="30"
        fill="#f7ecc9"
        opacity="0.45"
      >
        {monogram}
      </text>
      <text
        x="60"
        y="69.6"
        textAnchor="middle"
        fontFamily="'Great Vibes', cursive"
        fontSize="30"
        fill="#54380b"
      >
        {monogram}
      </text>
    </svg>
  )
}
