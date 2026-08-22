'use client';

import { motion } from 'framer-motion';
import {
  BellIcon,
  CheckCircleIcon,
  InstagramIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
} from '@/components/ui/icons';

/**
 * The hero's product shot — drawn, not screenshotted.
 *
 * A real screenshot would be stale the day after the next release, would need a
 * 2x asset to survive a retina display, and would leak whichever agency's data
 * happened to be on screen. This is DOM: sharp at any size, weighs nothing, and
 * the live details (typing dots, pulsing badge) are what make a static page feel
 * like software.
 *
 * The two side panels drop away under `lg` rather than shrinking — a three-pane
 * CRM squeezed onto 380px reads as clutter, and the pipeline alone still tells
 * the story.
 */
export function AppMock() {
  return (
    <div className="relative mx-auto max-w-6xl">
      <div
        aria-hidden="true"
        className="absolute -inset-x-6 -top-6 -bottom-8 rounded-[28px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(155,93,229,0.14),transparent_62%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[14px] border border-hairline bg-canvas shadow-[0_2px_10px_-4px_rgba(20,16,31,0.18)]">
        <Chrome />

        <div className="grid grid-cols-1 lg:grid-cols-[60px_1fr_330px]">
          <Rail />
          <Pipeline />
          <ChatPanel />
        </div>
      </div>

    </div>
  );
}

function Chrome() {
  return (
    <div className="flex items-center gap-3 border-b border-hairline bg-surface-2 px-5 py-3.5">
      <div className="flex gap-2">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
      </div>
      <div className="mx-auto hidden items-center gap-2 rounded-lg border border-hairline bg-canvas px-4 py-1.5 text-[0.75rem] text-ink-faint sm:flex">
        <span className="size-1.5 rounded-full bg-accent" />
        app.tripzocrm.com
      </div>
      <div className="ml-auto flex items-center gap-3.5 lg:ml-0">
        <MagnifyingGlassIcon className="size-4 text-ink-faint" />
        <span className="relative">
          <BellIcon className="size-4 text-ink-faint" />
          <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-brand" />
        </span>
      </div>
    </div>
  );
}

/** Left icon rail — abstract on purpose; it is texture, not a menu. */
function Rail() {
  return (
    <div className="hidden flex-col items-center gap-4 border-r border-hairline bg-surface-2 py-6 lg:flex">
      <span className="size-8 rounded-[8px] bg-brand" />
      <span className="mt-1 h-px w-7 bg-hairline-strong" />
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={`size-6 rounded-lg ${i === 1 ? 'bg-brand/15 ring-1 ring-brand/30' : 'bg-ink/[0.06]'}`}
        />
      ))}
    </div>
  );
}

const STAGES = [
  { name: 'New Enquiry', count: 18, width: '86%', tone: 'from-indigo-400 to-indigo-500' },
  { name: 'Qualified', count: 12, width: '62%', tone: 'from-brand-lift to-brand' },
  { name: 'Quote Sent', count: 8, width: '44%', tone: 'from-amber-400 to-amber-500' },
  { name: 'Negotiating', count: 6, width: '32%', tone: 'from-sky-400 to-sky-500' },
  { name: 'Booked', count: 5, width: '26%', tone: 'from-emerald-400 to-emerald-500' },
];

function Pipeline() {
  return (
    <div className="border-hairline p-6 lg:border-r">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-[0.75rem] font-bold tracking-[0.14em] text-ink-faint uppercase">
            Lead pipeline
          </p>
          <p className="mt-1.5 text-xl font-bold text-ink">This week</p>
        </div>
        <span className="rounded-[6px] border border-accent/25 bg-accent-soft px-3 py-1.5 text-[0.75rem] font-bold text-accent">
          +24 new
        </span>
      </div>

      <div className="mt-6 space-y-3.5">
        {STAGES.map((stage, i) => (
          <div key={stage.name}>
            <div className="mb-2 flex items-center justify-between text-[0.8125rem]">
              <span className="font-medium text-ink-muted">{stage.name}</span>
              <span className="font-semibold text-ink tabular-nums">{stage.count}</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-surface-2">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${stage.tone}`}
                initial={{ width: 0 }}
                whileInView={{ width: stage.width }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.35 + i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="rule-fade my-6" />

      <div className="grid grid-cols-3 gap-3">
        {[
          { k: 'WhatsApp', v: '14', c: 'text-wa' },
          { k: 'Instagram', v: '7', c: 'text-ig' },
          { k: 'Website', v: '3', c: 'text-ink-muted' },
        ].map((s) => (
          <div key={s.k} className="rounded-[8px] border border-hairline bg-surface-2 p-4">
            <p className={`text-2xl font-bold tabular-nums ${s.c}`}>{s.v}</p>
            <p className="mt-1 text-[0.75rem] font-medium text-ink-faint">{s.k}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatPanel() {
  return (
    <div className="hidden flex-col lg:flex">
      <div className="flex items-center gap-3 border-b border-hairline px-5 py-3.5">
        <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-ig to-brand text-[0.75rem] font-bold text-white">
          AR
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[0.875rem] font-semibold text-ink">Ananya R.</p>
          <p className="flex items-center gap-1 text-[0.75rem] text-ink-faint">
            <InstagramIcon size={10} /> @ananya.travels
          </p>
        </div>
        <span className="rounded-[5px] bg-amber-100 px-2.5 py-1 text-[0.6875rem] font-bold text-amber-700">
          Bot
        </span>
      </div>

      <div className="flex-1 space-y-3 bg-surface-2/60 px-5 py-5">
        <Bubble side="in">Hi! Saw your Bali reel — is it available in July?</Bubble>
        <Bubble side="out">
          Yes! Bali Honeymoon, 6 nights from ₹64,500 pp. Shall I send the day-wise plan?
        </Bubble>
        <Bubble side="in">Yes please, for 2 adults</Bubble>
        <Typing />
      </div>

      <div className="border-t border-hairline px-5 py-3.5">
        <div className="flex items-center gap-2 rounded-[8px] border border-hairline bg-surface-2 py-2 pr-1.5 pl-4">
          <span className="flex-1 text-[0.8125rem] text-ink-faint">Type a message…</span>
          <span className="grid size-8 place-items-center rounded-[6px] bg-brand text-white">
            <PaperAirplaneIcon className="size-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

function Bubble({ side, children }: { side: 'in' | 'out'; children: React.ReactNode }) {
  const out = side === 'out';
  return (
    <div className={`flex ${out ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[86%] rounded-2xl px-3.5 py-2.5 text-[0.8125rem] leading-snug ${
          out
            ? 'rounded-br-sm bg-gradient-to-br from-brand to-brand-deep text-white'
            : 'rounded-bl-sm border border-hairline bg-canvas text-ink-muted'
        }`}>
        {children}
        {out ? (
          <span className="mt-1.5 flex items-center justify-end gap-1 text-[0.625rem] text-white/65">
            12:04 <CheckCircleIcon className="size-3 text-sky-300" />
          </span>
        ) : null}
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div className="flex justify-start">
      <div className="flex gap-1.5 rounded-2xl rounded-bl-sm border border-hairline bg-canvas px-3.5 py-3">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="size-1.5 rounded-full bg-ink-faint"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
            transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }}
          />
        ))}
      </div>
    </div>
  );
}

