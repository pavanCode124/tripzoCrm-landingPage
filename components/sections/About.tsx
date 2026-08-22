import { Button } from '@/components/ui/Button';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ABOUT, APP_URL } from '@/lib/content';

/**
 * Why Tripzo — the positioning section the nav's "About" link points at.
 *
 * Deliberately three claims and no more, each one a thing a generic CRM cannot
 * say. This is the section a prospect reads when they are already convinced the
 * features work and are deciding whether to trust the company behind them, so
 * it argues rather than lists.
 */
export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow={ABOUT.eyebrow}
          title={ABOUT.title}
          accent={ABOUT.accent}
          sub={ABOUT.body}
        />

        <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {ABOUT.pillars.map((pillar, i) => (
            <RevealItem key={pillar.title}>
              <article className="relative h-full rounded-[22px] border border-hairline bg-canvas-2/70 p-8 transition-colors duration-500 hover:border-brand/25 hover:bg-brand-wash/50">
                <span className="font-display text-3xl text-brand/35">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-ink">{pillar.title}</h3>
                <p className="text-body-lg mt-3 text-ink-muted text-pretty">{pillar.body}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
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
