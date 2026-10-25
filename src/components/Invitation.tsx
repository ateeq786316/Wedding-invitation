import { motion } from 'motion/react'
import { wedding } from '../config/wedding'
import { ArchCard, Reveal } from './Ornament'

/** Word-by-word rising reveal for the formal wording lines. */
function WordReveal({
  text,
  className = '',
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: delay } } }}
    >
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {word}
          {i < text.split(' ').length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </motion.p>
  )
}

/**
 * The dawatnama — formal request wording, typeset like the inner card:
 * letterspaced caps for the hosts, script calligraphy for the couple.
 */
export function Invitation() {
  const { invitation, bride, groom } = wedding

  return (
    <section className="px-8 py-10 sm:py-14">
      <Reveal className="mx-auto max-w-2xl">
        <ArchCard className="text-center">
          <p className="text-[0.72rem] sm:text-xs uppercase tracking-[0.45em] text-gold-soft">
            {invitation.host}
          </p>
          <WordReveal
            text={invitation.request}
            delay={0.2}
            className="mt-4 font-serif text-sm sm:text-base uppercase tracking-[0.3em] leading-relaxed text-ivory"
          />
          <WordReveal
            text={invitation.occasion}
            delay={0.7}
            className="mt-2 font-serif text-xs sm:text-sm uppercase tracking-[0.25em] leading-relaxed text-ivory-dim"
          />

          <p className="mt-7 font-script text-4xl sm:text-5xl leading-tight gold-text">
            {bride.name}
          </p>
          <p className="my-1 font-serif text-sm sm:text-base italic text-ivory-dim">
            {invitation.conjunction}
          </p>
          <p className="font-script text-4xl sm:text-5xl leading-tight gold-text">
            {groom.name}
          </p>
        </ArchCard>
      </Reveal>
    </section>
  )
}
