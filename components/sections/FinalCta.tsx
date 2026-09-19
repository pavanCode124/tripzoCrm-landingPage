import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { ArrowRightIcon } from '@/components/ui/icons';
import { Reveal } from '@/components/ui/Reveal';
import { CTA, FINAL_CTA, SIGNUP_URL } from '@/lib/content';
import { IMAGES } from '@/lib/images';

/**
 * Closing call to action.
 *
 * A slab set into the page, with the sunset from the original hero behind a
 * brand-purple grade: the trip the whole pipeline exists to book, as the last
 * thing on the page. The grade is heaviest on the left where the copy sits.
 */
export function FinalCta() {
  return (
    <section className="relative px-4 pt-8 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto max-w-[1320px]">
        <div className="relative isolate overflow-hidden rounded-[28px] border border-white/12 px-6 py-20 shadow-[0_40px_90px_-60px_rgba(125,66,196,0.7)] sm:px-14 sm:py-28">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <Image
              src={IMAGES.sunset}
              alt=""
              fill
              sizes="(min-width: 1320px) 1320px, 100vw"
              placeholder="blur"
              className="object-cover object-[center_40%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(26,12,48,0.94)_0%,rgba(63,29,107,0.82)_45%,rgba(113,55,179,0.35)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(9,7,15,0.7),transparent_60%)]" />
          </div>

          <div className="relative max-w-2xl">
            <Reveal>
              <h2 className="font-display text-section font-semibold text-balance text-white">
                {FINAL_CTA.title} <span className="text-brand-soft">{FINAL_CTA.titleAccent}</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-lede mt-6 max-w-xl text-pretty text-white/80">{FINAL_CTA.sub}</p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href={SIGNUP_URL} variant="light" size="lg">
                  {CTA.signup}
                  <ArrowRightIcon className="size-[18px] transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                </Button>
                <Button href={SIGNUP_URL} variant="glass" size="lg">
                  {CTA.demo}
                </Button>
              </div>
              <p className="mt-6 text-[0.875rem] text-white/65">{FINAL_CTA.fineprint}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
