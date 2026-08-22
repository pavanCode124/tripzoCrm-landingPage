import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { STATS } from '@/lib/content';

/**
 * The four headline figures, closing the hero.
 *
 * Not a section of its own any more: these numbers are the evidence for the
 * sentence above them, and putting a section boundary between a claim and its
 * proof was making the page argue less well than it reads.
 *
 * Sitting on the photograph, they need a surface — hence the glass panel. On
 * bare pixels the small caps underneath disappear into whatever cloud happens
 * to be behind them.
 *
 * `whitespace-nowrap` on the labels is load-bearing: "Inbox for every channel"
 * and "Built for travel agencies" both wrapped to two lines while their
 * neighbours stayed on one, which knocked the whole row out of alignment. They
 * shrink instead of wrapping.
 */
export function HeroStats() {
  return (
    <div className="rounded-[14px] border border-white/70 bg-white/55 px-4 py-8 shadow-[0_1px_2px_rgba(20,16,31,0.04)] backdrop-blur-xl backdrop-saturate-150 sm:px-8">
      <RevealGroup className="grid grid-cols-2 gap-y-10 lg:grid-cols-4" stagger={0.08}>
        {STATS.map((stat, i) => (
          <RevealItem
            key={stat.label}
            y={14}
            className={`px-2 text-center lg:px-6 ${i > 0 ? 'lg:border-l lg:border-hairline' : ''}`}>
            <p className="text-[clamp(2.25rem,3.6vw,3rem)] leading-none font-extrabold tracking-[-0.045em] text-ink">
              {stat.value}
            </p>
            <p className="mt-3 text-[clamp(0.625rem,0.78vw,0.75rem)] font-bold tracking-[0.12em] whitespace-nowrap text-ink-muted uppercase">
              {stat.label}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
