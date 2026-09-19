'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, type ReactNode } from 'react';

import { CheckIcon, InstagramIcon, ShieldCheckIcon, WhatsAppIcon } from '@/components/ui/icons';
import { EASE_OUT, Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Shot } from '@/components/ui/Shot';
import { CHANNELS } from '@/lib/content';

/**
 * The two channels, one at a time.
 *
 * Tabs rather than side-by-side cards: each channel gets the full panel and
 * its real screenshot. Each keeps its own colour, the convention the product
 * uses, where the header tint alone tells an agent which inbox they are in.
 * Under the tabs, the note that both run on Meta's official APIs, which is the
 * answer to "is this a real WhatsApp integration or a workaround?".
 */
const LOOKS: Record<string, { icon: ReactNode; color: string; glow: string }> = {
  whatsapp: { icon: <WhatsAppIcon size={22} />, color: '#1fae5b', glow: 'rgba(37,211,102,0.16)' },
  instagram: { icon: <InstagramIcon size={22} />, color: '#e1306c', glow: 'rgba(225,48,108,0.14)' },
};

export function Channels() {
  const [active, setActive] = useState(0);
  const channel = CHANNELS.items[active];
  const look = LOOKS[channel.key];

  function onKey(e: React.KeyboardEvent) {
    const n = CHANNELS.items.length;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      setActive((v) => (v + 1) % n);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setActive((v) => (v - 1 + n) % n);
    }
  }

  return (
    <section id="channels" className="section-edge relative overflow-hidden py-24 sm:py-32">
      {/* Colour grade: the active channel's hue washes in from the right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-[background] duration-700"
        style={{
          background: `radial-gradient(ellipse 60% 70% at 85% 45%, ${look.glow}, transparent 70%), radial-gradient(ellipse 50% 60% at 0% 100%, rgba(155,93,229,0.10), transparent 70%)`,
        }}
      />

      <div className="shell relative grid gap-12 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-16">
        <div>
          <SectionHeading align="left" title={CHANNELS.title} accent={CHANNELS.accent} sub={CHANNELS.sub} />

          <Reveal delay={0.12}>
            <div role="tablist" aria-label="Channels" onKeyDown={onKey} className="mt-10 grid gap-2">
              {CHANNELS.items.map((item, i) => {
                const selected = i === active;
                const l = LOOKS[item.key];
                return (
                  <button
                    key={item.key}
                    role="tab"
                    id={`channel-tab-${item.key}`}
                    aria-selected={selected}
                    aria-controls="channel-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    className="btn-press relative flex items-center gap-4 rounded-[16px] px-4 py-3.5 text-left transition-colors duration-200 hover:bg-white/70">
                    {selected ? (
                      <motion.span
                        layoutId="channel-active"
                        transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
                        className="absolute inset-0 rounded-[16px] border border-line bg-white shadow-[0_1px_2px_rgba(18,15,28,0.04),0_12px_28px_-14px_rgba(63,29,107,0.25)]"
                      />
                    ) : null}
                    <span
                      className="relative grid size-11 shrink-0 place-items-center rounded-[12px]"
                      style={{ color: l.color, backgroundColor: `${l.color}17` }}>
                      {l.icon}
                    </span>
                    <span className="relative">
                      <span className={`block text-[1.0625rem] font-semibold ${selected ? 'text-ink' : 'text-ink-muted'}`}>
                        {item.name}
                      </span>
                      <span className="block text-[0.875rem] text-ink-faint">{item.tagline}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-6 flex gap-3.5 rounded-[16px] border border-[#d9e6ff] bg-gradient-to-br from-[#eef4ff] to-[#f7f3ff] p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-[11px] bg-[#0866ff] text-white shadow-[0_6px_14px_-6px_rgba(8,102,255,0.7)]">
                <ShieldCheckIcon className="size-5" />
              </span>
              <div>
                <p className="text-[0.9375rem] font-semibold text-ink">{CHANNELS.meta.title}</p>
                <p className="mt-0.5 text-[0.875rem] leading-relaxed text-ink-muted">{CHANNELS.meta.body}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={28}>
          <div id="channel-panel" role="tabpanel" aria-labelledby={`channel-tab-${channel.key}`} className="card overflow-hidden p-3 sm:p-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={channel.key}
                initial={{ opacity: 0, scale: 0.985, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.99, filter: 'blur(4px)', transition: { duration: 0.15 } }}
                transition={{ duration: 0.45, ease: EASE_OUT }}>
                <div className="rounded-[14px] p-3 sm:p-5" style={{ background: `linear-gradient(135deg, ${look.color}14, #f8f7fc)` }}>
                  <Shot src={channel.shot} alt={channel.alt} w={channel.w} h={channel.h} />
                </div>

                <ul className="grid gap-x-8 gap-y-4 px-2 pt-6 pb-3 sm:grid-cols-2">
                  {channel.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <CheckIcon className="mt-0.5 size-[17px] shrink-0" style={{ color: look.color }} />
                      <span className="text-body-lg text-ink-muted">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
