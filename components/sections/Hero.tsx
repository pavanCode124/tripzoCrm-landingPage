'use client';

import { motion } from 'framer-motion';

import { HeroStats } from '@/components/sections/Stats';
import { Button } from '@/components/ui/Button';
import { PhotoBackdrop } from '@/components/ui/PhotoBackdrop';
import { ArrowRightIcon, CheckIcon } from '@/components/ui/icons';
import { APP_URL, HERO } from '@/lib/content';

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

/**
 * The hero — one screen, nothing below the fold.
 *
 * The product mock that used to sit here is gone. It pushed the figures onto a
 * second screen, and a hero whose own proof needs scrolling to reach has not
 * finished making its point. The dashboard still appears further down in the
 * Showcase section at a size where it can be read; here it was a thumbnail of
 * a screenshot.
 *
 * `min-h-svh` rather than `100vh`: on mobile browsers the URL bar collapses on
 * scroll, so `vh` measures the LARGE viewport and a 100vh hero is always taller
 * than what you can actually see. `svh` is the small viewport — the honest one.
 *
 * Spacing is tighter below `lg` on purpose. A 1366x768 laptop has roughly 690px
 * under the header, and the desktop rhythm does not fit in it.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-[100px] pb-8 lg:pt-[108px] lg:pb-10">
      {/*
       * Scrim kept low, and the number comes from measuring the file rather
       * than guessing. The centre of this photograph — the golden cloud band
       * the copy sits on — is luma 189, which already gives near-black text
       * about 10:1 unaided. Only the muted body copy needs a nudge. Anything
       * heavier turns the sunset grey, which is what went wrong twice before.
       */}
      <PhotoBackdrop
        src="/shots/Home_background.png"
        position="center 46%"
        spotlight={0.40}
        veil={0.05}
      />

      <motion.div
        className="shell relative z-10 flex w-full flex-col items-center"
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
          className="text-lede mx-auto mt-5 max-w-2xl text-center text-ink-photo text-pretty lg:mt-6">
          {HERO.sub}
        </motion.p>

        <motion.div variants={item} className="mt-7 lg:mt-9">
          <Button href={`${APP_URL}/login`} variant="primary" size="lg">
            {HERO.primaryCta}
            <ArrowRightIcon className="size-[18px]" />
          </Button>
        </motion.div>

        <motion.ul
          variants={item}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 lg:mt-7">
          {HERO.assurances.map((line) => (
            <li
              key={line}
              className="flex items-center gap-2 text-[0.875rem] font-semibold text-ink-photo">
              <CheckIcon className="size-4 text-accent" />
              {line}
            </li>
          ))}
        </motion.ul>

        {/* The figures close the hero on the same screen as the claim they are
            evidence for. That is the whole reason the mock had to go. */}
        <motion.div variants={item} className="mt-9 w-full lg:mt-12">
          <HeroStats />
        </motion.div>
      </motion.div>
    </section>
  );
}
