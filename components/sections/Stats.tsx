import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { STATS } from '@/lib/content';

/**
 * The headline strip, directly under the hero.
 *
 * Four figures, nothing else — no icons, no cards, no borders between them.
 * Whitespace does the separating, which is what lets numbers this large read as
 * confidence rather than as a dashboard.
 *
 * Set in the bold sans rather than the display serif: these are data, and the
 * serif is reserved for voice.
 */
export function Stats() {
  return (
    <section className="relative border-y border-hairline bg-canvas-2/60">
      <div className="shell">
        <RevealGroup className="grid grid-cols-2 gap-y-12 py-16 sm:py-20 lg:grid-cols-4" stagger={0.09}>
          {STATS.map((stat) => (
            <RevealItem key={stat.label} className="px-2 text-center lg:px-6" y={16}>
              <p className="text-[clamp(2.5rem,5vw,3.75rem)] leading-none font-extrabold tracking-[-0.04em] text-ink">
                {stat.value}
              </p>
              <p className="mx-auto mt-4 max-w-[200px] text-[0.8125rem] font-bold tracking-[0.13em] text-ink-muted uppercase">
                {stat.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
