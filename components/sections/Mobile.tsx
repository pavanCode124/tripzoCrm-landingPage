'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { BellIcon, CheckIcon, InstagramIcon, WalletIcon, WhatsAppIcon } from '@/components/ui/icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useReducedMotionSafe } from '@/components/ui/useReducedMotionSafe';
import { MOBILE } from '@/lib/content';

/**
 * The mobile app.
 *
 * The phone turns toward the reader as the section scrolls into view: it
 * arrives angled away, like a device picked up off a desk, and squares up by
 * the time the copy beside it is readable. Tied to scroll through a spring, so
 * it keeps a little weight instead of tracking the scrollbar rigidly.
 */
export function Mobile() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const eased = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.6 });
  const rotateY = useTransform(eased, [0, 1], [32, 12]);
  const rotateX = useTransform(eased, [0, 1], [14, 4]);
  const y = useTransform(eased, [0, 1], [60, 0]);

  return (
    <section ref={ref} id="mobile" className="section-edge relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-40 size-[680px] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(155,93,229,0.16),transparent)] blur-2xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[10%] -right-40 size-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(245,163,199,0.16),transparent)] blur-2xl"
      />

      <div className="shell relative grid items-center gap-16 lg:grid-cols-[440px_1fr] lg:gap-24">
        <div className="order-2 [perspective:1400px] lg:order-1">
          <motion.div
            style={
              reduce
                ? { transform: 'rotateY(12deg) rotateX(4deg)' }
                : { rotateY, rotateX, y, transformStyle: 'preserve-3d' }
            }>
            <PhoneMock />
          </motion.div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading align="left" title={MOBILE.title} accent={MOBILE.accent} sub={MOBILE.body} />

          <Reveal delay={0.14}>
            <div className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {MOBILE.points.map((point) => (
                <div key={point.title}>
                  <div className="flex items-center gap-2.5">
                    <CheckIcon className="size-4 text-brand" />
                    <h3 className="text-[1.0625rem] font-semibold text-ink">{point.title}</h3>
                  </div>
                  <p className="text-body-lg mt-1.5 pl-6.5 text-ink-muted">{point.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto w-[290px] [transform-style:preserve-3d] sm:w-[330px]">
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-[64px] bg-[radial-gradient(closest-side,rgba(155,93,229,0.3),transparent)] blur-2xl"
        style={{ transform: 'translateZ(-80px)' }}
      />

      {/* Side of the device, so the turned phone has thickness */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[48px] bg-[#0f0c18]"
        style={{ transform: 'translateZ(-12px)' }}
      />

      <div className="relative rounded-[48px] border border-[#2b2440] bg-gradient-to-b from-[#2b2440] to-[#15111f] p-3 shadow-[0_60px_120px_-40px_rgba(63,29,107,0.55),inset_0_1px_0_rgba(255,255,255,0.12)]">
        <div className="relative overflow-hidden rounded-[38px] bg-[#f7f5fb]">
          <div className="absolute top-2.5 left-1/2 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />

          <div className="relative bg-gradient-to-br from-[#8a52d0] to-brand px-6 pt-12 pb-8">
            <div className="flex items-center justify-between text-[0.6875rem] font-medium text-white/80">
              <span>9:41</span>
              <span>Live</span>
            </div>
            <p className="mt-5 text-[0.75rem] text-white/75">Good morning,</p>
            <p className="text-2xl font-bold text-white">Priya</p>
          </div>

          <div className="space-y-3 p-4">
            <div className="grid grid-cols-2 gap-3">
              <Tile icon={<WhatsAppIcon size={17} />} label="WhatsApp" badge="14" color="#1daa61" />
              <Tile icon={<InstagramIcon size={17} />} label="Instagram" badge="7" color="#e1306c" />
            </div>

            <div className="rounded-[12px] border border-[#e9e5f1] bg-white p-4">
              <div className="flex items-center gap-2">
                <BellIcon className="size-3.5 text-brand" />
                <p className="text-[0.8125rem] font-bold text-ink">New lead assigned</p>
              </div>
              <p className="mt-1.5 text-[0.75rem] leading-relaxed text-ink-muted">
                Ananya R., Bali honeymoon, via Instagram ad
              </p>
            </div>

            <div className="flex items-center gap-3.5 rounded-[12px] border border-[#e9e5f1] bg-white p-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-[9px] bg-[#e8f8f1] text-accent-deep">
                <WalletIcon className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.8125rem] font-bold text-ink">Expense logged</p>
                <p className="truncate text-[0.75rem] text-ink-muted">₹8,400, hotel advance, Manali</p>
              </div>
            </div>
          </div>

          <div className="mx-auto mb-3 h-1 w-32 rounded-full bg-ink/15" />
        </div>
      </div>
    </div>
  );
}

function Tile({ icon, label, badge, color }: { icon: React.ReactNode; label: string; badge: string; color: string }) {
  return (
    <div className="rounded-[12px] border border-[#e9e5f1] bg-white p-3.5">
      <div className="flex items-start justify-between">
        <span className="grid size-9 place-items-center rounded-[9px]" style={{ color, backgroundColor: `${color}1a` }}>
          {icon}
        </span>
        <span className="rounded-[6px] bg-[#f3f0f8] px-2 py-0.5 text-[0.625rem] font-bold text-ink-muted">{badge}</span>
      </div>
      <p className="mt-3 text-[0.8125rem] font-bold text-ink">{label}</p>
    </div>
  );
}
