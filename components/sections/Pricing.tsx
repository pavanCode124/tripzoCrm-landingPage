'use client';

import { CheckIcon } from '@/components/ui/icons';

import { Button } from '@/components/ui/Button';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { APP_URL, PRICING } from '@/lib/content';

/**
 * Three plans, with the middle one raised.
 *
 * The featured card inverts to near-black rather than merely gaining a border:
 * on a white page that is the strongest available emphasis, and it means an
 * agency owner scanning the row does not have to compare three columns of ticks
 * to work out which plan they are meant to pick.
 */
export function Pricing() {
  return (
    <section id="pricing" className="relative bg-canvas-2/60 py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow={PRICING.eyebrow}
          title={PRICING.title}
          accent={PRICING.accent}
          sub={PRICING.sub}
        />

        <RevealGroup className="mt-16 grid items-start gap-6 lg:grid-cols-3" stagger={0.1}>
          {PRICING.plans.map((plan) => (
            <RevealItem key={plan.name}>
              <article
                className={`relative mx-auto h-full w-full max-w-[560px] overflow-hidden rounded-[12px] p-8 transition-colors duration-200 lg:max-w-none ${
                  plan.featured
                    ? 'border border-dark-hairline bg-dark lg:-mt-6 lg:pt-11 lg:pb-11'
                    : 'card-edge hover:border-brand/40'
                }`}>
                {plan.featured ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-32 left-1/2 h-64 w-80 -translate-x-1/2 rounded-full bg-brand/40 blur-3xl"
                    />
                    <span className="relative mb-6 inline-flex rounded-[6px] bg-brand px-3 py-1.5 text-[0.6875rem] font-extrabold tracking-[0.14em] text-white uppercase">
                      Most popular
                    </span>
                  </>
                ) : null}

                <h3
                  className={`relative text-[1.0625rem] font-bold tracking-[0.06em] uppercase ${
                    plan.featured ? 'text-chalk-muted' : 'text-ink-muted'
                  }`}>
                  {plan.name}
                </h3>

                <div className="relative mt-4 flex items-baseline gap-2.5">
                  <span
                    className={`text-[clamp(2.25rem,3.4vw,3rem)] leading-none font-extrabold tracking-[-0.035em] ${
                      plan.featured ? 'text-chalk' : 'text-ink'
                    }`}>
                    {plan.price}
                  </span>
                  <span
                    className={`text-[0.875rem] ${plan.featured ? 'text-chalk-faint' : 'text-ink-faint'}`}>
                    {plan.note}
                  </span>
                </div>

                <p
                  className={`text-body-lg relative mt-4 ${
                    plan.featured ? 'text-chalk-muted' : 'text-ink-muted'
                  }`}>
                  {plan.blurb}
                </p>

                <div className={`relative my-7 ${plan.featured ? 'rule-fade-dark' : 'rule-fade'}`} />

                <ul className="relative space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <CheckIcon
                        className={`mt-0.5 size-[17px] shrink-0 ${plan.featured ? 'text-brand-lift' : 'text-accent'}`}
                      />
                      <span
                        className={`text-body-lg ${plan.featured ? 'text-chalk-muted' : 'text-ink-muted'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={`${APP_URL}/login`}
                  variant={plan.featured ? 'onDark' : 'secondary'}
                  size="lg"
                  className="relative mt-9 w-full">
                  {plan.cta}
                </Button>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-10 text-center text-[0.9375rem] text-ink-faint">
          All plans include onboarding, data migration and WhatsApp Business API setup.
        </p>
      </div>
    </section>
  );
}
