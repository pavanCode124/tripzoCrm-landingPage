'use client';

import { motion } from 'framer-motion';

import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { REPORTS } from '@/lib/content';

/**
 * The accountability section — the page's sharpest claim, so it gets a
 * two-column layout rather than another card grid.
 *
 * "Missed" is the number this section exists for: every CRM shows a pipeline,
 * almost none will tell an owner which leads nobody touched today. The mock is
 * built to make that one row impossible to miss.
 */
const TONE = {
  good: { dot: 'bg-accent', text: 'text-accent', chip: 'bg-accent-soft' },
  warn: { dot: 'bg-amber-500', text: 'text-amber-600', chip: 'bg-amber-50' },
  bad: { dot: 'bg-rose-500', text: 'text-rose-600', chip: 'bg-rose-50' },
} as const;

const AGENTS = [
  { name: 'Priya Nair', closed: 6, pending: 4, missed: 0 },
  { name: 'Rahul Mehta', closed: 4, pending: 7, missed: 1 },
  { name: 'Sana Qureshi', closed: 5, pending: 3, missed: 0 },
  { name: 'Arjun Rao', closed: 1, pending: 5, missed: 6 },
];

export function Reports() {
  return (
    <section className="section-edge relative py-24 sm:py-32">
      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow={REPORTS.eyebrow}
              title={REPORTS.title}
              accent={REPORTS.accent}
              sub={REPORTS.body}
            />

            <Reveal delay={0.18}>
              <dl className="mt-10 space-y-5">
                {REPORTS.metrics.map((metric) => {
                  const tone = TONE[metric.tone as keyof typeof TONE];
                  return (
                    <div key={metric.label} className="flex items-start gap-4">
                      <span
                        className={`mt-1 grid size-6 shrink-0 place-items-center rounded-full ${tone.chip}`}>
                        <span className={`size-2 rounded-full ${tone.dot}`} />
                      </span>
                      <div>
                        <dt className={`text-[1.0625rem] font-bold ${tone.text}`}>
                          {metric.label}
                        </dt>
                        <dd className="text-body-lg text-ink-muted">{metric.hint}</dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={30}>
            <ReportMock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ReportMock() {
  return (
    <div className="card-edge relative overflow-hidden p-7">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="eyebrow">Daily report</p>
          <p className="mt-2 text-xl font-bold text-ink">Yesterday · 42 leads</p>
        </div>
        <span className="rounded-[6px] border border-hairline bg-surface-2 px-3 py-1.5 text-[0.75rem] font-medium text-ink-faint">
          Auto-sent 9:00 PM
        </span>
      </div>

      <div className="mt-7 grid grid-cols-3 gap-3 text-center">
        {[
          { k: 'Closed', v: 16, c: 'text-accent', bg: 'bg-accent-soft' },
          { k: 'Pending', v: 19, c: 'text-amber-600', bg: 'bg-amber-50' },
          { k: 'Missed', v: 7, c: 'text-rose-600', bg: 'bg-rose-50' },
        ].map((s) => (
          <div key={s.k} className={`rounded-[10px] py-5 ${s.bg}`}>
            <p className={`text-4xl leading-none font-extrabold tracking-tight ${s.c}`}>{s.v}</p>
            <p className="mt-2 text-[0.75rem] font-bold tracking-[0.1em] text-ink-muted uppercase">
              {s.k}
            </p>
          </div>
        ))}
      </div>

      <div className="rule-fade my-6" />

      <ul className="space-y-1.5">
        {AGENTS.map((agent, i) => {
          const flagged = agent.missed >= 3;
          return (
            <motion.li
              key={agent.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.09, duration: 0.5 }}
              className={`flex items-center gap-3.5 rounded-[8px] px-3.5 py-3 transition-colors ${
                flagged ? 'bg-rose-50 ring-1 ring-rose-200' : ''
              }`}>
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-surface-2 text-[0.6875rem] font-bold text-ink-muted">
                {agent.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </span>
              <span className="flex-1 truncate text-[0.875rem] font-medium text-ink">
                {agent.name}
              </span>
              <span className="w-8 text-right text-[0.875rem] font-semibold text-accent tabular-nums">
                {agent.closed}
              </span>
              <span className="w-8 text-right text-[0.875rem] font-semibold text-amber-600 tabular-nums">
                {agent.pending}
              </span>
              <span
                className={`w-8 text-right text-[0.875rem] font-bold tabular-nums ${
                  agent.missed > 0 ? 'text-rose-600' : 'text-ink-faint'
                }`}>
                {agent.missed}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
