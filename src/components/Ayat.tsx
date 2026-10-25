import { ArchCard, Divider, Reveal } from './Ornament'

export function Ayat() {
  return (
    <section className="px-8 py-20 sm:py-24">
      <Reveal className="mx-auto max-w-2xl">
        <ArchCard>
          <p className="font-arabic text-center text-xl sm:text-3xl leading-[2.2] text-ivory" dir="rtl" lang="ar">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
            لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>
          <Divider className="my-6" />
          <p className="text-center font-serif text-sm sm:text-lg italic leading-relaxed text-ivory-dim">
            "And among His signs is that He created for you spouses from among
            yourselves, that you may find comfort in them — and He placed between
            you affection and mercy."
          </p>
          <p className="mt-4 text-center text-[0.7rem] sm:text-xs uppercase tracking-[0.4em] text-gold-soft">
            Surah Ar-Rūm · 30:21
          </p>
        </ArchCard>
      </Reveal>
    </section>
  )
}
