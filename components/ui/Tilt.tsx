'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { ReactNode } from 'react';

import { useReducedMotionSafe } from '@/components/ui/useReducedMotionSafe';

/**
 * A surface that leans toward the pointer, with a light that follows it.
 *
 * Springs rather than direct mapping: a card that snaps to the cursor feels
 * like a hit-test, one that eases after it feels like an object with weight.
 * Children keep their own 3D (preserve-3d), so layers at different Z depths
 * inside move apart as it tilts. Mouse only; touch and reduced motion get the
 * resting angle.
 */
export function Tilt({
  children,
  className = '',
  max = 10,
  rest = { x: 0, y: 0 },
}: {
  children: ReactNode;
  className?: string;
  /** Maximum lean in degrees. */
  max?: number;
  /** Resting angle, in degrees. */
  rest?: { x: number; y: number };
}) {
  const reduce = useReducedMotionSafe();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 150, damping: 17, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [rest.x + max, rest.x - max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [rest.y - max, rest.y + max]), spring);
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(480px circle at ${gx} ${gy}, rgba(255,255,255,0.55), transparent 60%)`;

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }

  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div className={`[perspective:1200px] ${className}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      <motion.div
        style={
          reduce
            ? { transform: `rotateX(${rest.x}deg) rotateY(${rest.y}deg)`, transformStyle: 'preserve-3d' }
            : { rotateX, rotateY, transformStyle: 'preserve-3d' }
        }
        className="group/tilt relative">
        {children}
        {!reduce ? (
          <motion.div
            aria-hidden="true"
            style={{ background: glare, transform: 'translateZ(2px)' }}
            className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover/tilt:opacity-100"
          />
        ) : null}
      </motion.div>
    </div>
  );
}
