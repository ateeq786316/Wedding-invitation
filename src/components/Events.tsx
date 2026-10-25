import QRCode from 'react-qr-code'
import { gcalLink, wedding } from '../config/wedding'
import { ArchCard, Eyebrow, Medallion, Reveal } from './Ornament'
import { IconArch, SwashDivider } from './Flourish'

function MapPin({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 21s-7-5.6-7-11a7 7 0 1 1 14 0c0 5.4-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function CalendarIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  )
}

export function Events() {
  return (
    <section className="px-8 py-16 sm:py-20">
      <Reveal>
        <Medallion>
          <IconArch className="h-6 w-6" />
        </Medallion>
        <Eyebrow>Wedding Festivities</Eyebrow>
        <h2 className="mt-3 text-center font-serif text-3xl sm:text-5xl gold-text">
          The Celebrations
        </h2>
        <p className="mt-3 text-center font-urdu text-xl text-ivory-dim">تقاریبِ شادی</p>
        <SwashDivider className="mx-auto my-10 h-5 w-56 sm:w-72" />
      </Reveal>

      <div className="mx-auto grid max-w-4xl gap-10 sm:gap-8 md:grid-cols-2">
        {wedding.events.map((event, i) => (
          <Reveal key={event.id} delay={0.15 * i}>
            <ArchCard className="flex h-full flex-col items-center text-center">
              <p className="font-urdu text-2xl text-gold-soft">{event.nameUrdu}</p>
              <h3 className="mt-1 font-serif text-2xl sm:text-3xl uppercase tracking-[0.2em] text-ivory">
                {event.name}
              </h3>

              <div className="my-5 h-px w-20 bg-gold-dim" />

              <p className="font-serif text-lg sm:text-xl text-ivory">
                {event.weekday}, {event.displayDate}
              </p>
              <p className="mt-1 text-sm sm:text-base tracking-[0.15em] uppercase text-gold-soft">
                {event.time}
              </p>

              <p className="mt-5 flex items-center justify-center gap-2 text-center font-serif text-base sm:text-lg text-ivory">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                {event.venue}
              </p>
              <p className="text-sm tracking-[0.25em] uppercase text-ivory-dim">
                {event.city}
              </p>

              <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-gold px-6 py-2.5 text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-gold-soft transition-all hover:bg-gold hover:text-bg-deep active:scale-95"
                >
                  <MapPin className="h-4 w-4" />
                  Directions
                </a>
                <a
                  href={gcalLink(event.calendar)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-gold-dim px-6 py-2.5 text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-ivory-dim transition-all hover:border-gold hover:text-gold-soft active:scale-95"
                >
                  <CalendarIcon className="h-4 w-4" />
                  Add to Calendar
                </a>
              </div>

              {/* QR — scan for the venue location, like the printed card */}
              <div className="mt-6 flex flex-col items-center gap-1.5">
                <div className="rounded-lg border border-gold-dim/70 bg-bg-deep/50 p-2">
                  <QRCode
                    value={event.mapsUrl}
                    size={72}
                    fgColor="#e9d6a4"
                    bgColor="transparent"
                  />
                </div>
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-ivory-dim">
                  Scan for location
                </span>
              </div>
            </ArchCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
