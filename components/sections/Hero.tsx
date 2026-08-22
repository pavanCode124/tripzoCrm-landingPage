'use client';

import { motion } from 'framer-motion';

import { AppMock } from '@/components/sections/AppMock';
import { Button } from '@/components/ui/Button';
import { PhotoBackdrop } from '@/components/ui/PhotoBackdrop';
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
      {/* The photograph. `scale` pushes a 768px-wide source past the container
          width on purpose — combined with the blur it reads as depth of field
          rather than as an upscaled image. */}
      <PhotoBackdrop src="/shots/Home_background.png" position="center 38%" wash={0.84} scale={1.08} />
      <GridOverlay />

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
          className="mt-18 sm:mt-24">
          <AppMock />
        </motion.div>
      </motion.div>
    </section>
  );
}

/**
 * Faint grid over the photograph.
 *
 * Keeps the section related to the rest of the page, which is a white product
 * page rather than a travel brochure — without it the hero reads as a different
 * site to everything below it.
 */
function GridOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-[860px] opacity-40"
      style={{
        backgroundImage:
          'linear-gradient(to right, #d9d2ea 1px, transparent 1px), linear-gradient(to bottom, #d9d2ea 1px, transparent 1px)',
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse 72% 52% at 50% 26%, #000 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 72% 52% at 50% 26%, #000 30%, transparent 100%)',
      }}
    />
  );
}
