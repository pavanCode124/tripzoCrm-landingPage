'use client';

import { motion } from 'framer-motion';

import { AppMock } from '@/components/sections/AppMock';
import { Button } from '@/components/ui/Button';
import { PhotoBackdrop } from '@/components/ui/PhotoBackdrop';
import { HeroStats } from '@/components/sections/Stats';
import { ArrowRightIcon, CheckIcon } from '@/components/ui/icons';
import { APP_URL, HERO } from '@/lib/content';

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/**
 * The hero.
 *
 * No eyebrow badge above the headline any more: on a photographic background a
 * small floating pill is the first thing that reads as clutter, and the headline
 * says what the product is perfectly well on its own. The top padding absorbs
 * what the badge was occupying, so the headline sits where the badge used to
 * start rather than jumping up and crowding the header.
 *
 * One call to action, not two. A secondary button beside the primary splits the
 * decision at exactly the moment it should be single.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[150px] pb-20 sm:pt-[176px] md:pb-28">
      {/* No `scale` here: the source is 768px wide and already stretched ~2.5x
          to cover the page, so any extra zoom is pure additional softness. */}
      <PhotoBackdrop src="/shots/Home_background.png" position="center 42%" spotlight={0.44} veil={0.06} />

      <motion.div
        className="shell relative z-10"
        variants={container}
        initial="hidden"
        animate="show">
        <motion.h1
          variants={item}
          className="text-hero mx-auto max-w-5xl text-center font-bold text-balance text-ink">
          {HERO.headlinePlain}{' '}
          <span className="font-display gradient-text italic">{HERO.headlineAccent}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lede mx-auto mt-7 max-w-2xl text-center text-ink-muted text-pretty">
          {HERO.sub}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex justify-center">
          <Button
            href={`${APP_URL}/login`}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto">
            {HERO.primaryCta}
            <ArrowRightIcon className="size-[18px]" />
          </Button>
        </motion.div>

        <motion.ul
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {HERO.assurances.map((line) => (
            <li key={line} className="flex items-center gap-2 text-[0.875rem] text-ink-muted">
              <CheckIcon className="size-4 text-accent" />
              {line}
            </li>
          ))}
        </motion.ul>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 44 },
            show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE, delay: 0.2 } },
          }}
          className="mt-16 sm:mt-20">
          <AppMock />
        </motion.div>

        {/* The figures close the hero rather than starting a new section. They
            are the proof for the claim directly above them, so a section break
            between the two was separating an argument from its evidence. */}
        <motion.div variants={item} className="mt-20 sm:mt-24">
          <HeroStats />
        </motion.div>
      </motion.div>
    </section>
  );
}

