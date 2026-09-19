'use client';

import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion';
import type { ReactNode } from 'react';

import { Button } from '@/components/ui/Button';
import { ArrowRightIcon } from '@/components/ui/icons';
import { EASE_OUT, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import {
  BookedCard,
  InstagramBubble,
  NewLeadCard,
  PaymentCard,
  StatusCard,
  WhatsAppBubble,
} from '@/components/ui/SignalCards';
import { useReducedMotionSafe } from '@/components/ui/useReducedMotionSafe';
import { CTA, HERO, SIGNUP_URL, STATS } from '@/lib/content';

const copy = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const line = {
  hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE_OUT } },
};

/**
 * Where each floating card sits (percent of the hero), how deep it is, and the
 * curve that carries it into the centre. Inquiries arrive on the left; the
 * outcomes (status, payment, booking) come out on the right.
 */
const SIGNALS: {
  key: string;
  node: ReactNode;
  side: 'left' | 'right';
  top: string;
  inset: string;
  depth: number;
  delay: number;
  path: string;
}[] = [
  { key: 'wa', node: <WhatsAppBubble />, side: 'left', top: '20%', inset: '0%', depth: 1.2, delay: 0.5, path: 'M 20 27 C 32 27, 36 38, 46 42' },
  { key: 'lead', node: <NewLeadCard />, side: 'left', top: '45%', inset: '4%', depth: 0.7, delay: 0.65, path: 'M 22 50 C 32 50, 36 46, 46 45' },
  { key: 'ig', node: <InstagramBubble />, side: 'left', top: '64%', inset: '-1%', depth: 1, delay: 0.8, path: 'M 19 71 C 30 71, 36 56, 46 48' },
  { key: 'status', node: <StatusCard />, side: 'right', top: '18%', inset: '0%', depth: 1.1, delay: 0.55, path: 'M 81 25 C 69 25, 64 38, 54 42' },
  { key: 'pay', node: <PaymentCard />, side: 'right', top: '45%', inset: '3%', depth: 0.7, delay: 0.7, path: 'M 78 50 C 68 50, 64 46, 54 45' },
  { key: 'booked', node: <BookedCard />, side: 'right', top: '64%', inset: '-1%', depth: 1.2, delay: 0.85, path: 'M 80 71 C 70 71, 64 56, 54 48' },
];

/**
 * The hero.
 *
 * The idea is the product in one picture: conversations come in from the
 * left, outcomes go out on the right, and TripzoCRM is the thing in the middle
 * they all flow through. Six cards float in 3D around the headline, each
 * turned slightly toward it and set at its own depth, and faint lines stream
 * from each one into the centre. The whole field drifts with the pointer on a
 * spring, nearer cards more than farther ones, so it reads as real space.
 *
 * Behind it, an aurora of the brand's colours moves very slowly, so the white
 * page has light in it rather than nothing. The four figures close the hero
 * on the same screen as the claim they support.
 */
export function Hero() {
  const reduce = useReducedMotionSafe();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.8 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.8 });

  function onMove(e: React.PointerEvent<HTMLElement>) {
    if (reduce || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  }

  return (
    <section
      onPointerMove={onMove}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-[112px] pb-16 lg:pt-[104px]">
      <Aurora />

      <div className="shell relative w-full">
        <Streams />

        {SIGNALS.map((s) => (
          <Signal key={s.key} signal={s} sx={sx} sy={sy} />
        ))}

        <motion.div variants={copy} initial="hidden" animate="show" className="relative z-10 mx-auto max-w-[780px] text-center">
          <motion.h1 variants={line} className="font-display text-hero pb-1 font-semibold text-balance text-ink">
            {HERO.headlinePlain} <span className="text-brand">{HERO.headlineAccent}</span>
          </motion.h1>

          <motion.p variants={line} className="text-lede mx-auto mt-6 max-w-[46ch] text-pretty text-ink-muted">
            {HERO.sub}
          </motion.p>

          <motion.div variants={line} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={SIGNUP_URL} size="lg">
              {CTA.signup}
              <ArrowRightIcon className="size-[18px] transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
            </Button>
            <Button href="#pipeline" variant="secondary" size="lg">
              {HERO.secondaryCta}
            </Button>
          </motion.div>

          <motion.div variants={line} className="mx-auto mt-14 max-w-[720px]">
            <RevealGroup className="grid grid-cols-2 gap-y-6 rounded-[22px] border border-white/80 bg-white/65 px-4 py-6 shadow-[0_1px_2px_rgba(18,15,28,0.04),0_20px_50px_-24px_rgba(63,29,107,0.3)] backdrop-blur-xl backdrop-saturate-150 sm:grid-cols-4 sm:px-2">
              {STATS.map((stat, i) => (
                <RevealItem
                  key={stat.label}
                  y={10}
                  className={`border-line px-3 text-center ${i % 2 === 1 ? 'border-l' : ''} ${i === 2 ? 'sm:border-l' : ''}`}>
                  <p className="font-display text-[clamp(1.75rem,2.6vw,2.25rem)] leading-none font-semibold tracking-[-0.035em] text-ink">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[0.8125rem] leading-snug font-medium text-ink-muted">{stat.label}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/** Slow-moving colour, so the white has light in it. */
function Aurora() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#fbf9ff]">
      <div className="aurora-blob absolute -top-[18%] -left-[8%] h-[62%] w-[52%] bg-[#b98cf0] opacity-45 [--drift-x:6%] [--drift-y:8%]" />
      <div className="aurora-blob absolute -top-[12%] right-[-10%] h-[58%] w-[48%] bg-[#f5a3c7] opacity-40 [--drift-x:-7%] [--drift-y:6%] [animation-delay:-6s]" />
      <div className="aurora-blob absolute bottom-[-20%] right-[8%] h-[55%] w-[46%] bg-[#ffc49a] opacity-40 [--drift-x:-5%] [--drift-y:-6%] [animation-delay:-12s]" />
      <div className="aurora-blob absolute bottom-[-22%] left-[-6%] h-[55%] w-[44%] bg-[#8ee6c3] opacity-35 [--drift-x:6%] [--drift-y:-5%] [animation-delay:-3s]" />
      <div className="aurora-blob absolute top-[20%] left-[30%] h-[45%] w-[40%] bg-[#a9c4ff] opacity-25 [--drift-x:-4%] [--drift-y:5%] [animation-delay:-9s]" />
      {/* A clear centre, so the headline sits on light rather than on colour */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_42%_46%_at_50%_46%,rgba(255,255,255,0.92),rgba(255,255,255,0.55)_55%,transparent_80%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

/** Faint lines streaming from each card into the centre. */
function Streams() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 hidden size-full xl:block"
      style={{
        maskImage: 'radial-gradient(ellipse 30% 40% at 50% 45%, transparent 35%, #000 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse 30% 40% at 50% 45%, transparent 35%, #000 75%)',
      }}>
      <defs>
        <linearGradient id="stream-in" x1="0" x2="1">
          <stop offset="0%" stopColor="#1fae5b" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7137b3" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="stream-out" x1="1" x2="0">
          <stop offset="0%" stopColor="#0ea672" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7137b3" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      {SIGNALS.map((s) => (
        <g key={s.key}>
          <path d={s.path} pathLength={100} fill="none" stroke="#7137b3" strokeOpacity={0.1} strokeWidth={1} vectorEffect="non-scaling-stroke" />
          <path
            d={s.path}
            pathLength={100}
            fill="none"
            stroke={`url(#${s.side === 'left' ? 'stream-in' : 'stream-out'})`}
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeDasharray="6 14"
            vectorEffect="non-scaling-stroke"
            className={s.side === 'left' ? 'stream-flow' : 'stream-flow-out'}
          />
        </g>
      ))}
    </svg>
  );
}

function Signal({
  signal,
  sx,
  sy,
}: {
  signal: (typeof SIGNALS)[number];
  sx: MotionValue<number>;
  sy: MotionValue<number>;
}) {
  const x = useTransform(sx, (v) => v * 18 * signal.depth);
  const y = useTransform(sy, (v) => v * 12 * signal.depth);
  const turn = signal.side === 'left' ? 14 : -14;

  return (
    <motion.div
      className="absolute hidden xl:block"
      style={{ top: signal.top, [signal.side]: signal.inset, x, y }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', duration: 0.9, bounce: 0.2, delay: signal.delay }}>
        {/* perspective() inside the transform, so the lean needs no 3D parent */}
        <div style={{ transform: `perspective(900px) rotateY(${turn}deg) translateZ(${signal.depth * 30}px)` }}>
          <div className={signal.depth > 1 ? 'animate-float' : 'animate-float-late'}>{signal.node}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
