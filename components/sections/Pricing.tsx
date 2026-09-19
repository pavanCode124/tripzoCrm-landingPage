'use client';

import { Button } from '@/components/ui/Button';
import { CheckIcon } from '@/components/ui/icons';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PRICING, SIGNUP_URL } from '@/lib/content';

/**
 * Three plans, the middle one brought forward.
 *
 * The featured plan is the one surface filled with brand purple and raised
 * above the row on large screens, so an owner scanning the row does not have to
 * compare three columns of ticks to find the plan they are meant to pick.
 */
export function Pricing() {
  return (
    <section id="pricing" className="section-edge relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f7f2fe_60%,#ffffff_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute top-[40%] left-1/2 h-[60%] w-[55%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(155,93,229,0.22),transparent)] blur-2xl" />
      <div className="shell relative">
        <SectionHeading title={PRICING.title} accent={PRICING.accent} sub={PRICING.sub} />

        <RevealGroup className="mt-16 grid items-stretch gap-6 lg:grid-cols-3 lg:items-center">
          {PRICING.plans.map((plan) => {
            const f = plan.featured;
            return (
              <RevealItem key={plan.name} className="h-full lg:h-auto">
                <article
                  className={`relative mx-auto flex h-full w-full max-w-[560px] flex-col overflow-hidden rounded-[22px] p-8 lg:max-w-none ${
                    f
                      ? 'bg-[linear-gradient(160deg,#8446c9_0%,#7137b3_45%,#4b2380_100%)] text-white shadow-[0_2px_4px_rgba(63,29,107,0.2),0_40px_80px_-30px_rgba(113,55,179,0.7)] lg:py-11'
                      : 'card'
                  }`}>
                  {f ? (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-24 -right-20 size-72 rounded-full bg-white/15 blur-3xl"
                    />
                  ) : null}

                  <div className="relative flex items-center justify-between">
                    <h3 className={`font-display text-[1.25rem] font-semibold ${f ? 'text-white' : 'text-ink'}`}>{plan.name}</h3>
                    {f ? (
                      <span className="rounded-[8px] bg-white/15 px-2.5 py-1 text-[0.75rem] font-semibold text-white">
                        Most popular
                      </span>
                    ) : null}
                  </div>

                  <div className="relative mt-5 flex items-baseline gap-2.5">
                    <span
                      className={`font-display text-[clamp(2.25rem,3.2vw,2.875rem)] leading-none font-semibold tracking-[-0.035em] ${
                        f ? 'text-white' : 'text-ink'
                      }`}>
                      {plan.price}
                    </span>
                    <span className={`text-[0.875rem] ${f ? 'text-white/70' : 'text-ink-faint'}`}>{plan.note}</span>
                  </div>

                  <p className={`text-body-lg relative mt-3 ${f ? 'text-white/80' : 'text-ink-muted'}`}>{plan.blurb}</p>

                  <ul className={`relative mt-7 flex-1 space-y-3.5 border-t pt-7 ${f ? 'border-white/20' : 'border-line'}`}>
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <CheckIcon className={`mt-0.5 size-[17px] shrink-0 ${f ? 'text-white' : 'text-brand'}`} />
                        <span className={`text-body-lg ${f ? 'text-white/90' : 'text-ink-muted'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={SIGNUP_URL}
                    variant={f ? 'light' : 'secondary'}
                    size="lg"
                    className="relative mt-9 w-full">
                    {plan.cta}
                  </Button>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <p className="mt-10 text-center text-[0.9375rem] text-ink-faint">{PRICING.footnote}</p>
      </div>
    </section>
  );
}
