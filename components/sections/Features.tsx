'use client';

import { BedDouble, CalendarCheck, Map, Users } from 'lucide-react';
import type { ReactNode } from 'react';

import { InstagramIcon, WhatsAppIcon } from '@/components/ui/BrandIcons';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Shot } from '@/components/ui/Shot';
import { FEATURES } from '@/lib/content';

/**
 * Icons.
 *
 * A plain map of ReactNode rather than of LucideIcon, because two of the six
 * are our own SVGs — lucide dropped brand marks at v1, so WhatsApp and
 * Instagram come from components/ui/BrandIcons.
 */
const ICONS: Record<string, ReactNode> = {
  leads: <Users size={22} strokeWidth={2} />,
  whatsapp: <WhatsAppIcon size={22} />,
  instagram: <InstagramIcon size={22} />,
  map: <Map size={22} strokeWidth={2} />,
  bookings: <CalendarCheck size={22} strokeWidth={2} />,
  hotel: <BedDouble size={22} strokeWidth={2} />,
};

/**
 * Per-card colour.
 *
 * `chip` is a saturated gradient with a white glyph — the solid rounded-square
 * icon tile from the reference. `tile` is the pale wash the screenshot sits on,
 * pitched much lighter than the chip on purpose: the chip is a 40px accent and
 * can afford full saturation, while the tile is a third of the card and would
 * fight the screenshot for attention if it matched.
 */
const TINTS: Record<
  string,
  { chip: string; tile: string; hover: string }
> = {
  emerald: {
    chip: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
    tile: 'bg-gradient-to-br from-[#d1fae5] via-[#ecfdf5] to-[#f0fdfa]',
    hover: 'hover:border-emerald-300/70',
  },
  green: {
    chip: 'bg-gradient-to-br from-[#4ade80] to-[#16a34a]',
    tile: 'bg-gradient-to-br from-[#dcfce7] via-[#f0fdf4] to-[#ecfdf5]',
    hover: 'hover:border-green-300/70',
  },
  pink: {
    chip: 'bg-gradient-to-br from-[#f9457f] to-[#c026d3]',
    tile: 'bg-gradient-to-br from-[#fce7f3] via-[#fae8ff] to-[#fdf2f8]',
    hover: 'hover:border-pink-300/70',
  },
  violet: {
    chip: 'bg-gradient-to-br from-[#a78bfa] to-[#7137b3]',
    tile: 'bg-gradient-to-br from-[#ede9fe] via-[#f3e8ff] to-[#faf5ff]',
    hover: 'hover:border-violet-300/70',
  },
  amber: {
    chip: 'bg-gradient-to-br from-[#fbbf24] to-[#f97316]',
    tile: 'bg-gradient-to-br from-[#fef3c7] via-[#fef9c3] to-[#fffbeb]',
    hover: 'hover:border-amber-300/70',
  },
  blue: {
    chip: 'bg-gradient-to-br from-[#38bdf8] to-[#2563eb]',
    tile: 'bg-gradient-to-br from-[#dbeafe] via-[#e0f2fe] to-[#eff6ff]',
    hover: 'hover:border-blue-300/70',
  },
};

/**
 * The capability grid.
 *
 * Icon and title ABOVE the picture, body below it — the reading order the
 * reference uses, and the right one: the title says what you are about to look
 * at, so the screenshot is understood on sight rather than decoded and then
 * explained.
 *
 * Six cards, deliberately. Nine is a list nobody reads; three undersells a
 * product this broad.
 */
export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Everything you need"
          title="One platform."
          accent="Every channel."
          sub="Designed end to end for travel agencies — from the first unread message to the final settled invoice, with the workflows your team already uses."
        />

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const tint = TINTS[feature.tint] ?? TINTS.blue;

            return (
              <RevealItem key={feature.title}>
                <article
                  className={`card-edge group flex h-full flex-col p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_64px_-26px_rgba(20,16,31,0.22)] ${tint.hover}`}>
                  <span
                    className={`grid size-13 place-items-center rounded-2xl text-white shadow-[0_8px_20px_-8px_rgba(20,16,31,0.45)] transition-transform duration-500 group-hover:scale-105 ${tint.chip}`}>
                    {ICONS[feature.icon] ?? ICONS.leads}
                  </span>

                  <h3 className="mt-5 text-[1.25rem] font-bold tracking-tight text-ink">
                    {feature.title}
                  </h3>

                  {/* The tile. Overflow hidden so the shot's corners stay
                      clipped by the tile radius while it scales on hover. */}
                  <div className={`mt-5 overflow-hidden rounded-2xl p-4 sm:p-5 ${tint.tile}`}>
                    <Shot
                      src={feature.shot}
                      alt={feature.alt}
                      ratio="16 / 10"
                      position="left top"
                      label={feature.title}
                      className="transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <p className="text-body-lg mt-5 text-ink-muted text-pretty">{feature.body}</p>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
