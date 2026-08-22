import { Button } from '@/components/ui/Button';
import { PhotoBackdrop } from '@/components/ui/PhotoBackdrop';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ABOUT, APP_URL } from '@/lib/content';

/**
 * Why Tripzo — the positioning section the nav's "About" link points at.
 *
 * Deliberately three claims and no more, each one a thing a generic CRM cannot
 * say. This is the section a prospect reads once they already believe the
 * features work and are deciding whether to trust the company behind them, so
 * it argues rather than lists.
 *
 * The photograph earns its place here specifically: this is the only section
 * about the business rather than the software, so it is the one place a travel
 * image adds meaning instead of decoration.
 */
export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      {/*
       * A heavier scrim than the hero gets, and measured the same way: the
       * water this copy sits on is luma 161 against the hero's 189, so it needs
       * roughly half again as much wash to bring body text over 4.5:1. Still
       * light enough that the reef and the diver stay saturated.
       */}
      <PhotoBackdrop src="/shots/why_tripzo.png" position="center 40%" spotlight={0.54} veil={0.08} />

      <div className="shell relative z-10">
        <SectionHeading
          eyebrow={ABOUT.eyebrow}
          title={ABOUT.title}
          accent={ABOUT.accent}
          sub={ABOUT.body}
          onPhoto
        />

        <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {ABOUT.pillars.map((pillar, i) => (
            <RevealItem key={pillar.title}>
              {/* Slightly translucent so the photograph reads through the card —
                  the one place on the page where that is wanted. */}
              <article className="relative h-full rounded-[12px] border border-hairline bg-white/85 p-8 backdrop-blur-sm transition-colors duration-200 hover:border-brand/30">
                <span className="font-display text-3xl text-brand/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-ink">{pillar.title}</h3>
                <p className="text-body-lg mt-3 text-ink-muted text-pretty">{pillar.body}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={`${APP_URL}/login`} variant="primary" size="lg">
              Start free
            </Button>
            <Button href={`${APP_URL}/login`} variant="secondary" size="lg">
              Sign in
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
