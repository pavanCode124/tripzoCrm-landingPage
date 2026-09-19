'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { CheckIcon } from '@/components/ui/icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Shot } from '@/components/ui/Shot';
import { useReducedMotionSafe } from '@/components/ui/useReducedMotionSafe';
import { HERO, SHOWCASE } from '@/lib/content';

/**
 * The product, right under the hero.
 *
 * The real admin dashboard arrives tipped back on its lower edge and stands up
 * as it scrolls into view, like a laptop lid opening toward the reader. It sits
 * in a frosted frame on a lavender band, lit from behind, so the section has
 * colour rather than a screenshot floating on white.
 */
export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.35'] });
  const eased = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.5 });
  const rotateX = useTransform(eased, [0, 1], [26, 0]);
  const scale = useTransform(eased, [0, 1], [0.9, 1]);
  const y = useTransform(eased, [0, 1], [40, 0]);

  return (
    <section id="platform" className="section-edge relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f5f0fe_45%,#f3eefd_70%,#ffffff_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute top-[38%] left-1/2 h-[60%] w-[85%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(155,93,229,0.30),rgba(245,163,199,0.14)_55%,transparent)] blur-2xl" />

      <div className="shell relative">
        <SectionHeading title={SHOWCASE.title} accent={SHOWCASE.accent} sub={SHOWCASE.sub} />

        <Reveal delay={0.12}>
          <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
            {SHOWCASE.points.map((p) => (
              <li
                key={p}
                className="inline-flex items-center gap-2 rounded-full border border-white bg-white/75 px-3.5 py-1.5 text-[0.875rem] font-medium text-ink-muted shadow-[0_1px_2px_rgba(18,15,28,0.04)] backdrop-blur">
                <CheckIcon className="size-3.5 text-brand" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <div ref={ref} className="relative mx-auto mt-14 max-w-[1100px] [perspective:2000px]">
          <motion.div
            style={reduce ? undefined : { rotateX, scale, y, transformOrigin: '50% 100%' }}
            className="relative rounded-[24px] border border-white/80 bg-white/55 p-2 shadow-[0_2px_4px_rgba(18,15,28,0.04),0_60px_120px_-40px_rgba(63,29,107,0.5)] backdrop-blur-md sm:p-3">
            <Shot src={HERO.shot} alt={HERO.alt} w={HERO.w} h={HERO.h} className="!shadow-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
