'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Play, Sparkles } from 'lucide-react';

import { AppMock } from '@/components/sections/AppMock';
import { Button } from '@/components/ui/Button';
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

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[136px] pb-20 sm:pt-[160px] md:pb-28">
      <Backdrop />

      <motion.div
        className="shell relative z-10"
        variants={container}
        initial="hidden"
        animate="show">
        <motion.div variants={item} className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-wash px-4 py-2 text-[0.8125rem] font-semibold tracking-[0.06em] text-brand uppercase">
            <Sparkles size={14} />
            {HERO.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-hero mx-auto mt-8 max-w-5xl text-center font-bold text-balance text-ink">
          {HERO.headlinePlain}{' '}
          <span className="font-display gradient-text italic">{HERO.headlineAccent}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lede mx-auto mt-7 max-w-2xl text-center text-ink-muted text-pretty">
          {HERO.sub}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Button href={`${APP_URL}/login`} variant="primary" size="lg" className="w-full sm:w-auto">
            {HERO.primaryCta}
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
          <Button href="#workflow" variant="secondary" size="lg" className="w-full sm:w-auto">
            <Play size={14} className="fill-current" />
            {HERO.secondaryCta}
          </Button>
        </motion.div>

        <motion.ul
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {HERO.assurances.map((line) => (
            <li key={line} className="flex items-center gap-2 text-[0.875rem] text-ink-faint">
              <span className="grid size-[18px] place-items-center rounded-full bg-accent-soft">
                <Check size={11} className="text-accent" strokeWidth={3.5} />
              </span>
              {line}
            </li>
          ))}
        </motion.ul>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 44, scale: 0.97 },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 1.05, ease: EASE, delay: 0.2 },
            },
          }}
          className="mt-18 sm:mt-24">
          <AppMock />
        </motion.div>
      </motion.div>
    </section>
  );
}

/**
 * Hero backdrop.
 *
 * On white the bloom has to be far subtler than it was on black — a strong
 * purple wash on a light ground reads as a stain rather than as light. So: a
 * pale tint from the top, a faint grid that fades out radially, and nothing
 * else. All CSS, no image request.
 */
function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[720px] bg-gradient-to-b from-brand-wash via-canvas-2 to-canvas" />

      <div className="absolute -top-[420px] left-1/2 h-[820px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(155,93,229,0.16),transparent_66%)] blur-[20px]" />

      <div
        className="absolute inset-x-0 top-0 h-[900px] opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #e6dff5 1px, transparent 1px), linear-gradient(to bottom, #e6dff5 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 72% 52% at 50% 26%, #000 30%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 72% 52% at 50% 26%, #000 30%, transparent 100%)',
        }}
      />
    </div>
  );
}
