'use client';

import { animate, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { EASE_OUT, Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tilt } from '@/components/ui/Tilt';
import { useReducedMotionSafe } from '@/components/ui/useReducedMotionSafe';
import { REPORTS } from '@/lib/content';

const TONE = {
  good: '#15803d',
  warn: '#b45309',
  bad: '#dc2626',
} as const;

/** Sample data for the illustration. Not customer figures. */
const AGENTS = [
  { name: 'Priya Nair', closed: 6, pending: 4, missed: 0 },
  { name: 'Rahul Mehta', closed: 4, pending: 7, missed: 1 },
  { name: 'Sana Qureshi', closed: 5, pending: 3, missed: 0 },
  { name: 'Arjun Rao', closed: 1, pending: 5, missed: 6 },
];

/**
 * The accountability section: the page's sharpest claim.
 *
 * The report sits on a stack of the nights before it, each sheet a step
 * further back in Z, so the card reads as the latest of many rather than a
 * one-off. "Missed" is the number the section exists for, so the one agent
 * with a bad day is the row the eye lands on.
 */
export function Reports() {
  return (
    <section className="section-edge relative overflow-hidden py-24 sm:py-32">
      {/* Colour grade: a warm wash behind the report, cool lavender at the left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_65%_at_78%_50%,rgba(255,196,150,0.22),transparent_70%),radial-gradient(ellipse_45%_60%_at_5%_20%,rgba(155,93,229,0.10),transparent_70%)]"
      />
      <div className="shell relative grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading align="left" title={REPORTS.title} accent={REPORTS.accent} sub={REPORTS.body} />

          <Reveal delay={0.16}>
            <dl className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {REPORTS.metrics.map((metric) => (
                <div key={metric.label} className="border-t border-line pt-4">
                  <dt className="font-display text-[1.125rem] font-semibold" style={{ color: TONE[metric.tone as keyof typeof TONE] }}>
                    {metric.label}
                  </dt>
                  <dd className="mt-1 text-[0.9375rem] leading-relaxed text-ink-muted">{metric.hint}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={30}>
          <Tilt className="relative mx-auto max-w-[560px]" rest={{ x: 6, y: -10 }} max={9}>
            {/* The nights before */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[20px] border border-line bg-canvas-3"
              style={{ transform: 'translate3d(34px, -30px, -110px)' }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[20px] border border-line bg-canvas-2"
              style={{ transform: 'translate3d(17px, -15px, -55px)' }}
            />
            <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
              <ReportCard />
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}

function ReportCard() {
  return (
    <div className="card p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.8125rem] font-medium text-ink-faint">Daily report</p>
          <p className="font-display mt-1 text-xl font-semibold text-ink">Yesterday, 42 leads</p>
        </div>
        <span className="rounded-[8px] border border-line bg-canvas-2 px-2.5 py-1.5 text-[0.75rem] font-medium whitespace-nowrap text-ink-muted">
          Sent 9:00 PM
        </span>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2.5 text-center">
        {[
          { k: 'Closed', v: 16, c: TONE.good },
          { k: 'Pending', v: 19, c: TONE.warn },
          { k: 'Missed', v: 7, c: TONE.bad },
        ].map((s) => (
          <div key={s.k} className="rounded-[12px] py-4" style={{ backgroundColor: `${s.c}14` }}>
            <p className="font-display text-4xl leading-none font-semibold tracking-tight tabular-nums" style={{ color: s.c }}>
              <CountUp to={s.v} />
            </p>
            <p className="mt-2 text-[0.75rem] font-semibold text-ink-muted">{s.k}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-[1fr_repeat(3,2.25rem)] gap-x-2 px-3 text-right text-[0.6875rem] font-medium text-ink-faint">
        <span className="text-left">Agent</span>
        <span>Clsd</span>
        <span>Pend</span>
        <span>Miss</span>
      </div>

      <ul className="mt-2 space-y-1">
        {AGENTS.map((agent, i) => {
          const flagged = agent.missed >= 3;
          return (
            <motion.li
              key={agent.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.5, ease: EASE_OUT }}
              className="grid grid-cols-[1fr_repeat(3,2.25rem)] items-center gap-x-2 rounded-[10px] px-3 py-2.5 text-right"
              style={flagged ? { backgroundColor: `${TONE.bad}14`, boxShadow: `inset 0 0 0 1px ${TONE.bad}40` } : undefined}>
              <span className="flex min-w-0 items-center gap-3 text-left">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-canvas-3 text-[0.625rem] font-bold text-ink-muted">
                  {agent.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
                <span className="truncate text-[0.875rem] font-medium text-ink">{agent.name}</span>
              </span>
              <span className="text-[0.875rem] font-semibold tabular-nums" style={{ color: TONE.good }}>
                {agent.closed}
              </span>
              <span className="text-[0.875rem] font-semibold tabular-nums" style={{ color: TONE.warn }}>
                {agent.pending}
              </span>
              <span
                className="text-[0.875rem] font-bold tabular-nums"
                style={{ color: agent.missed > 0 ? TONE.bad : 'var(--color-ink-faint)' }}>
                {agent.missed}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

/** Counts up once, when the card first comes into view. */
function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduce = useReducedMotionSafe();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.2,
      ease: EASE_OUT,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return <span ref={ref}>{value}</span>;
}
