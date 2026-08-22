'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Scroll-reveal wrapper.
 *
 * One component rather than motion props scattered across every section, so the
 * whole page shares a single easing and distance and reads as one piece of
 * choreography instead of a dozen different opinions.
 *
 * `once` is on deliberately: elements that re-animate every time they scroll
 * back into view feel restless on a long marketing page, and on a phone the
 * user passes each section several times while thumbing up and down.
 *
 * Motion is skipped entirely for anyone who asked the OS to reduce it — the CSS
 * in globals.css collapses transition durations, and `useReducedMotion` here
 * stops framer from setting the initial hidden state at all, which would
 * otherwise leave content invisible.
 */
const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: EASE },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}>
      {children}
    </motion.div>
  );
}

/**
 * Staggered container — children reveal in sequence rather than together.
 * Used for the feature grid and the pricing row, where a single simultaneous
 * fade wastes the one chance the page has to direct the eye.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}>
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}>
      {children}
    </motion.div>
  );
}
