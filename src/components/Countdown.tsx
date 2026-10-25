import { useEffect, useState } from 'react'
import { wedding } from '../config/wedding'
import { Eyebrow, Medallion, Reveal } from './Ornament'
import { IconClock, SwashDivider } from './Flourish'

function useCountdown(target: string) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = Math.max(0, new Date(target).getTime() - now)
  return {
    done: diff <= 0,
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  }
}

const pad = (n: number) => String(n).padStart(2, '0')

export function Countdown() {
  const { days, hours, minutes, seconds, done } = useCountdown(
    wedding.countdownTarget,
  )

  const units = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ]

  return (
    <section className="px-8 py-16 sm:py-20">
      <Reveal>
        <Medallion>
          <IconClock className="h-6 w-6" />
        </Medallion>
        <Eyebrow>Counting Down To</Eyebrow>
        <h2 className="mt-3 text-center font-serif text-3xl sm:text-5xl gold-text">
          The Baraat
        </h2>
        <SwashDivider className="mx-auto my-10 h-5 w-56 sm:w-72" />
      </Reveal>

      {done ? (
        <Reveal>
          <p className="text-center font-serif text-2xl italic text-ivory">
            Alhamdulillah — the celebration has begun.
          </p>
        </Reveal>
      ) : (
        <Reveal className="mx-auto grid max-w-lg grid-cols-4 gap-3 sm:gap-5">
          {units.map((u) => (
            <div
              key={u.label}
              className="flex flex-col items-center rounded-xl border border-gold-dim bg-card/40 px-2 py-4 sm:py-6"
            >
              <span className="font-serif text-3xl sm:text-5xl font-medium tabular-nums gold-text">
                {pad(u.value)}
              </span>
              <span className="mt-1 text-[0.68rem] sm:text-xs uppercase tracking-[0.25em] text-ivory-dim">
                {u.label}
              </span>
            </div>
          ))}
        </Reveal>
      )}
    </section>
  )
}
