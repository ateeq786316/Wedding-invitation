import { waLink, wedding } from '../config/wedding'
import { ArchCard, Eyebrow, Medallion, Reveal } from './Ornament'
import { IconEnvelope, SwashDivider } from './Flourish'

function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

export function Rsvp() {
  return (
    <section className="px-8 py-16 sm:py-20">
      <Reveal>
        <Medallion>
          <IconEnvelope className="h-6 w-6" />
        </Medallion>
        <Eyebrow>Kindly Respond</Eyebrow>
        <h2 className="mt-3 text-center font-serif text-3xl sm:text-5xl gold-text">
          RSVP &amp; Duas
        </h2>
        <SwashDivider className="mx-auto my-10 h-5 w-56 sm:w-72" />
      </Reveal>

      <Reveal className="mx-auto max-w-2xl" delay={0.1}>
        <ArchCard className="text-center">
          <p className="font-serif text-base sm:text-lg italic leading-relaxed text-ivory-dim">
            Your presence is the greatest gift. Kindly confirm your attendance
            with the bride's family on WhatsApp.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {wedding.rsvp.map((r) => (
              <a
                key={r.phone}
                href={waLink(r.phone, r.message)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-bg-deep transition-transform hover:scale-[1.03] active:scale-95"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {r.label}
              </a>
            ))}
          </div>

          <a
            href={waLink(wedding.dua.phone, wedding.dua.message)}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-gold-dim px-7 py-3 text-xs sm:text-sm uppercase tracking-[0.15em] text-gold-soft transition-all hover:border-gold active:scale-95"
          >
            Send your Dua for the couple
          </a>

          <p className="mt-7 text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] leading-relaxed text-ivory-dim">
            Replies go to the bride's brothers on WhatsApp
          </p>
        </ArchCard>
      </Reveal>
    </section>
  )
}
