import type { ReactNode } from 'react';

import { isPlaceholder } from '@/lib/legal';

/**
 * The typographic kit the two legal documents are written in.
 *
 * A legal page is read, not scanned, so everything here serves a long column of
 * text: a measure near 70 characters, generous leading, and just three kinds of
 * emphasis. Notes carry an obligation, Src names the rule behind a sentence, and
 * Fill marks a value the business still has to supply.
 */

/** One numbered section. `id` is the anchor the contents list links to. */
export function Section({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line pt-10 first:border-t-0 first:pt-0">
      <h2 className="font-display flex items-baseline gap-3.5 text-[1.625rem] leading-tight font-semibold tracking-[-0.02em] text-balance text-ink sm:text-[1.875rem]">
        <span className="font-sans text-[0.875rem] font-semibold tracking-normal text-brand tabular-nums">
          {String(n).padStart(2, '0')}
        </span>
        <span>{title}</span>
      </h2>
      <div className="legal-prose mt-5">{children}</div>
    </section>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-8 mb-2 text-[1rem] font-semibold text-ink">{children}</h3>;
}

/**
 * A value from `lib/legal.ts`. Still bracketed means still unfilled, and it is
 * drawn as an amber chip so it cannot slip onto the live site unnoticed.
 */
export function Fill({ children }: { children: string }) {
  if (!isPlaceholder(children)) return <>{children}</>;
  return (
    <span className="rounded-md border border-dashed border-amber-400 bg-amber-50 px-1.5 py-px font-sans text-[0.9em] font-semibold text-amber-800 [box-decoration-break:clone]">
      {children}
    </span>
  );
}

/** A callout: the obligation a section turns on. `tone="warn"` for a hard limit. */
export function Note({
  label,
  tone = 'brand',
  children,
}: {
  label: string;
  tone?: 'brand' | 'meta' | 'warn';
  children: ReactNode;
}) {
  const tones = {
    brand: 'border-l-brand bg-brand-wash/60',
    meta: 'border-l-[#0866ff] bg-[#f1f6ff]',
    warn: 'border-l-[#c2410c] bg-[#fff6ef]',
  } as const;
  const labels = {
    brand: 'text-brand',
    meta: 'text-[#0a58d6]',
    warn: 'text-[#b13a0a]',
  } as const;
  return (
    <div className={`my-6 rounded-r-2xl border border-l-[3px] border-line px-5 py-4 ${tones[tone]}`}>
      <p className={`mb-2 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase ${labels[tone]}`}>{label}</p>
      <div className="legal-note">{children}</div>
    </div>
  );
}

/** The rule a sentence rests on. Small, quiet, but always there. */
export function Src({ children }: { children: ReactNode }) {
  return <p className="!mt-2 text-[0.8125rem] leading-relaxed text-ink-faint">{children}</p>;
}

/** A table that scrolls on its own at phone width instead of the page. */
export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="card my-6 overflow-x-auto !rounded-2xl">
      <table className="w-full min-w-[520px] border-collapse text-left text-[0.9375rem]">
        <thead>
          <tr className="bg-canvas-2">
            {head.map((h) => (
              <th
                key={h}
                className="border-b border-line-strong px-4 py-3 text-[0.6875rem] font-semibold tracking-[0.12em] text-ink-faint uppercase">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-line last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top text-ink-muted [&_b]:font-semibold [&_b]:text-ink">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** The secondary line under a table cell's lead. */
export function Sub({ children }: { children: ReactNode }) {
  return <span className="mt-0.5 block text-[0.8125rem] text-ink-faint">{children}</span>;
}

/** A contact card grid, used once per document. */
export function ContactGrid({ items }: { items: { title: string; lines: ReactNode[] }[] }) {
  return (
    <div className="card my-6 grid overflow-hidden !rounded-2xl sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="border-t border-line p-5 first:border-t-0 sm:border-t-0 sm:border-l sm:first:border-l-0">
          <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-ink-faint uppercase">{item.title}</p>
          <div className="mt-2.5 space-y-1 text-[0.9375rem] text-ink [overflow-wrap:anywhere]">
            {item.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Warranty and liability text, set apart the way contracts conventionally do. */
export function Caps({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-line bg-canvas-2 px-5 py-4 text-[0.8125rem] leading-relaxed tracking-[0.01em] text-ink-muted uppercase [&_p+p]:mt-3">
      {children}
    </div>
  );
}

export function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
