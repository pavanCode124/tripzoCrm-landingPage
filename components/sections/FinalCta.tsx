import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { APP_URL, FINAL_CTA } from '@/lib/content';

/**
 * Closing call to action.
 *
 * A contained slab rather than a full-bleed band — inset from the page edges
 * with a large radius, so it reads as an object placed on the page at the end
 * rather than as the page changing colour one last time. It is the only surface
 * where brand purple fills an area this big, which is what makes it land.
 */
export function FinalCta() {
  return (
    <section className="relative px-6 pb-24 sm:pb-32">
      <div className="mx-auto max-w-[1480px]">
        <div className="grain relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand-deep via-brand to-brand-lift px-6 py-20 text-center sm:px-12 sm:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(255,255,255,0.25),transparent_58%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '64px 64px',
              maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000, transparent 75%)',
            }}
          />

          <div className="relative">
            <Reveal>
              <h2 className="text-section mx-auto max-w-3xl font-bold text-balance text-white">
                {FINAL_CTA.title}{' '}
                <span className="font-display text-white/85 italic">{FINAL_CTA.titleAccent}</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-lede mx-auto mt-6 max-w-xl text-white/80 text-pretty">
                {FINAL_CTA.sub}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <Button
                  href={`${APP_URL}/login`}
                  variant="onDark"
                  size="lg"
                  className="w-full sm:w-auto">
                  {FINAL_CTA.primary}
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>
                <Button
                  href={`${APP_URL}/login`}
                  variant="onDarkGhost"
                  size="lg"
                  className="w-full sm:w-auto">
                  {FINAL_CTA.secondary}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-7 text-[0.875rem] text-white/65">
                Free for 14 days · No credit card · Cancel anytime
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
