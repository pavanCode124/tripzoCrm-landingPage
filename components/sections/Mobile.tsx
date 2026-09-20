'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

import {
  BellIcon,
  ChartBarIcon,
  CheckIcon,
  ClockIcon,
  Cog6ToothIcon,
  HomeIcon,
  InstagramIcon,
  MagnifyingGlassIcon,
  UsersIcon,
  WhatsAppIcon,
} from '@/components/ui/icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StoreBadges } from '@/components/ui/StoreBadges';
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

          <Reveal delay={0.2}>
            <div className="mt-11">
              <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-ink-faint uppercase">
                {MOBILE.storesLabel}
              </p>
              <StoreBadges className="mt-4" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/**
 * The phone, showing the app's actual home screen rather than a stand-in:
 * purple header, search, quick links, tab bar. Every number and label matches
 * a real screenshot, so what the page promises is what installs.
 */
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
        <div className="relative overflow-hidden rounded-[38px] bg-[#f4f2f9]">
          <div className="absolute top-2.5 left-1/2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />

          <AppHeader />
          <AppBody />
          <TabBar />
        </div>
      </div>
    </div>
  );
}

/**
 * The purple home header: brand row, clock, the greeting with the agency's own
 * avatar and its unread chips, then the three counters.
 */
function AppHeader() {
  return (
    <div className="relative overflow-hidden rounded-b-[26px] bg-gradient-to-br from-[#8a52d0] to-brand px-4 pt-11 pb-5">
      {/* The two soft discs the app paints behind the header content */}
      <div aria-hidden="true" className="absolute -top-20 -right-10 size-52 rounded-full bg-white/10" />
      <div aria-hidden="true" className="absolute -bottom-24 -left-6 size-44 rounded-full bg-white/[0.07]" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-[8px] border border-white/35 bg-white/15">
              <GlobeGlyph size={15} />
            </span>
            <span className="font-display text-[0.9375rem] font-bold tracking-[-0.01em] text-white">TripzoCRM</span>
          </div>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#4ade80]" />
            <span className="text-[0.6875rem] font-medium text-white/85">Live</span>
          </span>
        </div>

        <div className="mt-3 flex items-baseline gap-1.5">
          <ClockIcon className="size-3 translate-y-0.5 text-white/70" />
          <span className="text-[0.8125rem] font-bold text-white">11:40 am</span>
          <span className="text-[0.6875rem] text-white/70">Sun, 20 Sept</span>
        </div>

        <div className="mt-2.5 flex items-end justify-between">
          <div>
            <p className="text-[0.75rem] text-white/75">Good morning,</p>
            <p className="text-[1.375rem] leading-tight font-bold text-white">Priya</p>
          </div>

          <div className="flex items-center gap-2">
            <HeaderChip badge="5">
              <ChartBarIcon className="size-3.5" />
            </HeaderChip>
            <HeaderChip badge="8">
              <BellIcon className="size-3.5" />
            </HeaderChip>
            <span className="grid size-8 place-items-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
              <GlobeGlyph size={17} className="text-brand" />
            </span>
          </div>
        </div>

        <div className="mt-3.5 grid grid-cols-3 gap-2">
          <Stat value="0" label="New today" />
          <Stat value="8" label="Unread chats" />
          <Stat value="24" label="Open tasks" />
        </div>
      </div>
    </div>
  );
}

function AppBody() {
  return (
    <div className="px-4 pt-4 pb-3">
      <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2.5 shadow-[0_2px_8px_rgba(63,29,107,0.06)]">
        <MagnifyingGlassIcon className="size-3.5 shrink-0 text-ink-faint" />
        <span className="truncate text-[0.6875rem] text-ink-faint">Search the app — chats, leads, invoices…</span>
      </div>

      <p className="mt-4 text-[0.625rem] font-semibold tracking-[0.12em] text-ink-muted uppercase">Quick links</p>

      <div className="mt-2.5 grid grid-cols-2 gap-2.5">
        <QuickLink icon={<WhatsAppIcon size={15} />} color="#1daa61" title="WhatsApp" sub="Customer chats" />
        <QuickLink icon={<InstagramIcon size={15} />} color="#e1306c" title="Instagram" sub="DMs & reels" badge="8" />
        <QuickLink icon={<UsersIcon className="size-4" />} color="#7137b3" title="Leads" sub="Pipeline & follow-ups" />
        <QuickLink
          icon={<Cog6ToothIcon className="size-4" />}
          color="#767089"
          title="Settings"
          sub="Profile & appearance"
        />
      </div>
    </div>
  );
}

function TabBar() {
  return (
    <div className="border-t border-[#ece9f3] bg-white px-2 pt-2 pb-2.5">
      <div className="flex items-end justify-between">
        <Tab icon={<HomeIcon className="size-4" />} label="Home" active />
        <Tab icon={<WhatsAppIcon size={15} />} label="WhatsApp" />
        <Tab icon={<InstagramIcon size={15} />} label="Instagram" />
        <Tab icon={<UsersIcon className="size-4" />} label="Leads" />
        <Tab icon={<Cog6ToothIcon className="size-4" />} label="Settings" />
      </div>
      <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-ink/20" />
    </div>
  );
}

function HeaderChip({ children, badge }: { children: React.ReactNode; badge: string }) {
  return (
    <span className="relative grid size-8 place-items-center rounded-full bg-white/20 text-white">
      {children}
      <span className="absolute -top-1 -right-1 grid size-3.5 place-items-center rounded-full bg-[#e5326b] text-[0.5rem] font-bold text-white">
        {badge}
      </span>
    </span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[12px] bg-white/[0.18] px-2 py-2.5 text-center">
      <p className="text-[1.0625rem] leading-none font-bold text-white">{value}</p>
      <p className="mt-1 text-[0.5625rem] text-white/80">{label}</p>
    </div>
  );
}

function QuickLink({
  icon,
  color,
  title,
  sub,
  badge,
}: {
  icon: React.ReactNode;
  color: string;
  title: string;
  sub: string;
  badge?: string;
}) {
  return (
    <div className="relative rounded-[12px] bg-white p-3 shadow-[0_2px_8px_rgba(63,29,107,0.05)]">
      <span className="grid size-8 place-items-center rounded-[9px]" style={{ color, backgroundColor: `${color}1a` }}>
        {icon}
      </span>
      <p className="mt-2.5 text-[0.75rem] font-bold text-ink">{title}</p>
      <p className="mt-0.5 truncate text-[0.625rem] text-ink-muted">{sub}</p>
      {badge ? (
        <span className="absolute top-2.5 right-2.5 grid size-4 place-items-center rounded-full bg-[#e5326b] text-[0.5rem] font-bold text-white">
          {badge}
        </span>
      ) : null}
    </div>
  );
}

function Tab({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <span className={`flex flex-1 flex-col items-center gap-1 ${active ? 'text-brand' : 'text-ink-faint'}`}>
      {icon}
      <span className={`text-[0.5rem] ${active ? 'font-bold' : 'font-medium'}`}>{label}</span>
    </span>
  );
}

/** The globe from the TripzoCRM mark, stroked in currentColor. */
function GlobeGlyph({ size = 16, className = 'text-white' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <circle cx="24" cy="24" r="13.5" />
        <ellipse cx="24" cy="24" rx="5.6" ry="13.5" />
        <path d="M11.6 18.6h24.8M11.6 29.4h24.8" />
      </g>
      <ellipse
        cx="24"
        cy="24"
        rx="22"
        ry="9"
        transform="rotate(-28 24 24)"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="30 12 46 12"
        strokeDashoffset="8"
      />
    </svg>
  );
}
