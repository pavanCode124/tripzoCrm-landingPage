'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { BanknotesIcon, CheckIcon, InstagramIcon, UsersIcon, WhatsAppIcon } from '@/components/ui/icons';
import { EASE_OUT } from '@/components/ui/Reveal';
import { useReducedMotionSafe } from '@/components/ui/useReducedMotionSafe';
import { FLOW } from '@/lib/content';

/**
 * Small product fragments that float around the hero: the things a travel CRM
 * handles all day, from the inquiry arriving to the booking landing.
 * Sample data, drawn from the demo leads in the product screenshots.
 */

export function WhatsAppBubble() {
  return (
    <div className="card-float w-[236px] p-3.5">
      <div className="flex items-center gap-2.5">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#e7f8ee] text-wa">
          <WhatsAppIcon size={16} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[0.8125rem] font-semibold text-ink">Rohan Deshmukh</p>
          <p className="text-[0.6875rem] text-ink-faint">WhatsApp, just now</p>
        </div>
      </div>
      <p className="mt-3 rounded-[10px] rounded-tl-[3px] bg-[#e7f8ee] px-3 py-2 text-[0.8125rem] leading-snug text-ink">
        Hi! Ladakh in June for 4 of us?
      </p>
    </div>
  );
}

export function InstagramBubble() {
  return (
    <div className="card-float w-[228px] p-3.5">
      <div className="flex items-center gap-2.5">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white">
          <InstagramIcon size={15} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[0.8125rem] font-semibold text-ink">karan.malhotra</p>
          <p className="text-[0.6875rem] text-ink-faint">Replied to your reel</p>
        </div>
      </div>
      <p className="mt-3 rounded-[10px] rounded-tl-[3px] bg-[#fdeef4] px-3 py-2 text-[0.8125rem] leading-snug text-ink">
        Price for the Andaman trip?
      </p>
    </div>
  );
}

export function NewLeadCard() {
  return (
    <div className="card-float flex w-[214px] items-center gap-3 p-3">
      <span className="grid size-9 shrink-0 place-items-center rounded-[10px] bg-brand-wash text-brand">
        <UsersIcon className="size-[18px]" />
      </span>
      <div className="min-w-0">
        <p className="text-[0.8125rem] font-semibold text-ink">New lead assigned</p>
        <p className="truncate text-[0.6875rem] text-ink-faint">to Risha, auto-routed</p>
      </div>
    </div>
  );
}

/** A status chip that walks the real pipeline, on a loop. */
export function StatusCard() {
  const reduce = useReducedMotionSafe();
  const stages = FLOW.stages;
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % stages.length), 1600);
    return () => window.clearInterval(id);
  }, [reduce, stages.length]);

  const current = reduce ? stages.length - 1 : i;
  const stage = stages[current];

  return (
    <div className="card-float w-[224px] p-3.5">
      <p className="text-[0.6875rem] font-medium text-ink-faint">Lead status</p>
      <div className="relative mt-2 h-7 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={stage.key}
            initial={{ y: 18, opacity: 0, filter: 'blur(4px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: -18, opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="absolute inset-y-0 left-0 inline-flex items-center rounded-[7px] px-2.5 text-[0.75rem] font-bold whitespace-nowrap"
            style={{ color: stage.ink, backgroundColor: stage.wash }}>
            {stage.name}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="mt-3 flex gap-1">
        {stages.map((s, idx) => (
          <span
            key={s.key}
            className="h-1 flex-1 rounded-full transition-colors duration-300"
            style={{ backgroundColor: idx <= current ? s.color : 'var(--color-line)' }}
          />
        ))}
      </div>
    </div>
  );
}

export function PaymentCard() {
  return (
    <div className="card-float flex w-[230px] items-center gap-3 p-3">
      <span className="grid size-9 shrink-0 place-items-center rounded-[10px] bg-[#fef9c3] text-[#a16207]">
        <BanknotesIcon className="size-[18px]" />
      </span>
      <div className="min-w-0">
        <p className="text-[0.8125rem] font-semibold text-ink">Advance received</p>
        <p className="truncate text-[0.6875rem] text-ink-faint">₹50,000 via payment link</p>
      </div>
    </div>
  );
}

export function BookedCard() {
  return (
    <div className="card-float flex w-[248px] items-center gap-3 p-3.5">
      <span className="grid size-9 shrink-0 place-items-center rounded-[10px] bg-accent-wash text-accent">
        <CheckIcon className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="truncate text-[0.8125rem] font-semibold text-ink">Booked: Ladakh 9D/8N</p>
        <p className="text-[0.6875rem] text-ink-faint">₹1,84,000, invoice sent</p>
      </div>
    </div>
  );
}
