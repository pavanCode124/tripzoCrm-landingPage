'use client';

import type { ReactNode } from 'react';

import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  InstagramIcon,
  MapIcon,
  UsersIcon,
  WhatsAppIcon,
} from '@/components/ui/icons';
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
  leads: <UsersIcon className="size-[19px]" />,
  whatsapp: <WhatsAppIcon size={19} />,
  instagram: <InstagramIcon size={19} />,
  map: <MapIcon className="size-[19px]" />,
  bookings: <CalendarDaysIcon className="size-[19px]" />,
  hotel: <BuildingOffice2Icon className="size-[19px]" />,
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
    chip: 'bg-emerald-600',
    tile: 'bg-gradient-to-br from-[#d1fae5] via-[#ecfdf5] to-[#f0fdfa]',
    hover: 'hover:border-emerald-500/60',
  },
  green: {
    chip: 'bg-[#16a34a]',
    tile: 'bg-gradient-to-br from-[#dcfce7] via-[#f0fdf4] to-[#ecfdf5]',
    hover: 'hover:border-green-500/60',
  },
  pink: {
    chip: 'bg-[#d6296b]',
    tile: 'bg-gradient-to-br from-[#fce7f3] via-[#fae8ff] to-[#fdf2f8]',
    hover: 'hover:border-pink-500/60',
  },
  violet: {
    chip: 'bg-brand',
    tile: 'bg-gradient-to-br from-[#ede9fe] via-[#f3e8ff] to-[#faf5ff]',
    hover: 'hover:border-violet-500/60',
  },
  amber: {
    chip: 'bg-[#ea8b12]',
    tile: 'bg-gradient-to-br from-[#fef3c7] via-[#fef9c3] to-[#fffbeb]',
    hover: 'hover:border-amber-500/60',
  },
  blue: {
    chip: 'bg-[#2563eb]',
    tile: 'bg-gradient-to-br from-[#dbeafe] via-[#e0f2fe] to-[#eff6ff]',
    hover: 'hover:border-blue-500/60',
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

        {/*
         * The grid sits inside a glass panel rather than floating on the page.
         * Six white cards on a white ground have nothing to belong to — the
         * container gives them an edge to sit within, and the faint tint behind
         * separates card from page without adding another border weight.
         */}
        <div className="mt-16 rounded-[18px] border border-hairline bg-white/50 p-4 shadow-[0_1px_2px_rgba(20,16,31,0.04)] backdrop-blur-xl backdrop-saturate-150 sm:p-6">
          <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const tint = TINTS[feature.tint] ?? TINTS.blue;

            return (
              <RevealItem key={feature.title}>
                <article
                  className={`card-edge mx-auto flex h-full w-full max-w-[520px] flex-col p-5 transition-colors duration-200 md:max-w-none ${tint.hover}`}>
                  <span
                    className={`grid size-10 place-items-center rounded-[8px] text-white ${tint.chip}`}>
                    {ICONS[feature.icon] ?? ICONS.leads}
                  </span>

                  <h3 className="mt-4 text-[1.0625rem] font-bold tracking-tight text-ink">
                    {feature.title}
                  </h3>

                  {/* The tile. Overflow hidden so the shot's corners stay
                      clipped by the tile radius while it scales on hover. */}
                  <div className={`mt-4 overflow-hidden rounded-[8px] p-3 ${tint.tile}`}>
                    <Shot
                      src={feature.shot}
                      alt={feature.alt}
                      ratio="16 / 10"
                      position="left top"
                      label={feature.title}
                      className=""
                    />
                  </div>

                  <p className="mt-4 text-[0.875rem] leading-relaxed text-ink-muted text-pretty">{feature.body}</p>
                </article>
              </RevealItem>
            );
          })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
