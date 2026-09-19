'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Scroll reveal.
 *
 * One component so the page shares a single curve and distance. The curve is a
 * strong ease-out: movement starts immediately, which is the moment the eye is
 * watching, and settles slowly. A slight blur on the way in bridges the gap
 * between "not there" and "there" so the fade reads as one object arriving.
 *
 * `once`: sections that re-animate every time they pass feel restless.
 */
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y, filter: 'blur(6px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, delay, ease: EASE_OUT },
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

/** Staggered container: children reveal in sequence, 70ms apart. */
export function RevealGroup({
  children,
  className,
  stagger = 0.07,
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
  y = 18,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, filter: 'blur(6px)' },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.7, ease: EASE_OUT },
        },
      }}>
      {children}
    </motion.div>
  );
}
