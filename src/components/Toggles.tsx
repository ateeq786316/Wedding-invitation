import { useEffect, useRef, useState } from 'react'

export type Theme = 'emerald' | 'maroon'

const themes: { id: Theme; label: string; swatch: string }[] = [
  { id: 'emerald', label: 'Emerald', swatch: '#0b3d2e' },
  { id: 'maroon', label: 'Maroon', swatch: '#55101c' },
]

export function ThemeToggle({
  theme,
  onChange,
}: {
  theme: Theme
  onChange: (t: Theme) => void
}) {
  return (
    <div
      className="fixed bottom-5 left-4 z-40 flex items-center gap-1 rounded-full border border-gold-dim bg-bg-deep/70 p-1 backdrop-blur-md"
      role="group"
      aria-label="Colour theme"
    >
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          aria-pressed={theme === t.id}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.68rem] sm:text-[0.7rem] uppercase tracking-[0.15em] transition-colors cursor-pointer ${
            theme === t.id
              ? 'bg-gold text-bg-deep font-semibold'
              : 'text-ivory-dim hover:text-ivory'
          }`}
        >
          <span
            className="h-2.5 w-2.5 rounded-full border border-white/30"
            style={{ background: t.swatch }}
          />
          {t.label}
        </button>
      ))}
    </div>
  )
}

function MusicIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="18.5" cy="16" r="2.5" />
    </svg>
  )
}

function PauseIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M8 5v14M16 5v14" strokeLinecap="round" />
    </svg>
  )
}

/**
 * Ambient audio toggle. Looks for /audio/ambient.mp3 —
 * drop a Frozen Silence track there and the button appears.
 */
export function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [available, setAvailable] = useState(false)

  useEffect(() => {
    // Dev/SPA servers return index.html for missing files — verify the
    // response is actually audio, not just a 200.
    fetch('/audio/ambient.mp3', { method: 'HEAD' })
      .then((r) => {
        const type = r.headers.get('content-type') ?? ''
        setAvailable(r.ok && (type.startsWith('audio') || type.includes('octet-stream')))
      })
      .catch(() => setAvailable(false))
  }, [])

  const toggle = () => {
    const el = audioRef.current
    if (!el) return
    if (playing) {
      el.pause()
      setPlaying(false)
    } else {
      el.play()
        .then(() => setPlaying(true))
        .catch(() => setAvailable(false))
    }
  }

  if (!available) return null

  return (
    <>
      <audio ref={audioRef} src="/audio/ambient.mp3" loop preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? 'Pause ambient music' : 'Play ambient music'}
        className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold-dim bg-bg-deep/70 text-gold-soft backdrop-blur-md transition-colors hover:border-gold cursor-pointer"
      >
        {playing ? <PauseIcon className="h-4 w-4" /> : <MusicIcon className="h-5 w-5" />}
      </button>
    </>
  )
}
