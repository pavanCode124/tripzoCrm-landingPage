import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { InstagramIcon, WhatsAppIcon } from '@/components/ui/BrandIcons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { APP_URL, AUTOMATIONS } from '@/lib/content';

/**
 * The automation marquee.
 *
 * Two self-scrolling rails on a dark ground, WhatsApp running left and
 * Instagram running right.
 *
 * WHY A MARQUEE AND NOT A GRID. Sixteen automations in a grid is a wall nobody
 * reads; the same sixteen on a moving rail are understood as "there are lots of
 * these" in about a second, which is the actual message. Nobody has to read them
 * all, so none of them needs to fit on screen at once.
 *
 * CSS only — no JS, no scroll listener, no library. The track holds each list
 * twice and animates to exactly -50%, which puts copy two where copy one began.
 * That is the whole trick, and it is why the duplication below must stay exact.
 *
 * Accessibility: the duplicate is aria-hidden so a screen reader hears each card
 * once, hovering a rail pauses it so a card can be read, and the global
 * prefers-reduced-motion rule in globals.css freezes both rails for anyone who
 * asked the OS to stop things moving.
 */
export function Automations() {
  return (
    <section id="automations" className="grain relative overflow-hidden bg-dark py-24 sm:py-32">
      <Decor />

      <div className="relative">
        <div className="shell">
          <SectionHeading
            tone="dark"
            eyebrow={AUTOMATIONS.eyebrow}
            title={AUTOMATIONS.title}
            accent={AUTOMATIONS.accent}
            sub={AUTOMATIONS.sub}
          />
        </div>

        {/* Full-bleed: the rails run past the page gutter, which is what makes
            them read as continuous rather than as a widget in a box. */}
        <div className="mt-16 space-y-5">
          <Rail
            label="WhatsApp"
            icon={<WhatsAppIcon size={15} />}
            accent="text-wa"
            chip="bg-wa/12 border-wa/25"
            items={AUTOMATIONS.whatsapp}
            direction="left"
            duration="72s"
          />
          <Rail
            label="Instagram"
            icon={<InstagramIcon size={15} />}
            accent="text-ig"
            chip="bg-ig/12 border-ig/25"
            items={AUTOMATIONS.instagram}
            direction="right"
            duration="84s"
          />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center">
            <Link
              href={`${APP_URL}/login`}
              className="group inline-flex h-13 items-center gap-2 rounded-full bg-white px-7 text-[1rem] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-wash">
              {AUTOMATIONS.cta}
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Rail({
  label,
  icon,
  accent,
  chip,
  items,
  direction,
  duration,
}: {
  label: string;
  icon: ReactNode;
  accent: string;
  chip: string;
  items: { title: string; body: string }[];
  direction: 'left' | 'right';
  /** Deliberately different per rail — identical speeds make the two look
      mechanically linked, and the eye reads that as a loop rather than a flow. */
  duration: string;
}) {
  const animation = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className="marquee-hold marquee-mask relative overflow-hidden">
      {/*
       * NO `gap` on this track, and every card carries its own right margin
       * instead. That is not a style preference — it is what makes the loop
       * seamless.
       *
       * With `gap`, the space BETWEEN the two copies is one extra gap that
       * belongs to neither of them, so the track is (copy + gap + copy) while
       * translateX(-50%) moves by (copy + gap/2). The two disagree by half a
       * gap and the rail visibly jumps every lap. Folding the gap into each
       * card's own width makes each copy exactly half the track, which is the
       * only distance -50% can ever be right about.
       */}
      <div
        className={`flex w-max ${animation}`}
        style={{ ['--marquee-duration' as string]: duration }}>
        {/* Copy one — the real content. */}
        {items.map((item) => (
          <Card key={item.title} item={item} label={label} icon={icon} accent={accent} chip={chip} />
        ))}
        {/* Copy two — visual only, so the loop has somewhere to go. Hidden from
            assistive tech one card at a time rather than behind a wrapper, since
            a wrapper would reintroduce the uneven seam described above. */}
        {items.map((item) => (
          <Card
            key={`dup-${item.title}`}
            item={item}
            label={label}
            icon={icon}
            accent={accent}
            chip={chip}
            duplicate
          />
        ))}
      </div>
    </div>
  );
}

function Card({
  item,
  label,
  icon,
  accent,
  chip,
  duplicate = false,
}: {
  item: { title: string; body: string };
  label: string;
  icon: ReactNode;
  accent: string;
  chip: string;
  /** Part of the loop's second copy — present for the eye, hidden from readers. */
  duplicate?: boolean;
}) {
  return (
    <article
      aria-hidden={duplicate || undefined}
      className="mr-5 flex w-[300px] shrink-0 flex-col rounded-2xl bg-white p-6 shadow-[0_18px_44px_-20px_rgba(0,0,0,0.55)] sm:w-[340px]">
      <span
        className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.6875rem] font-bold tracking-[0.08em] uppercase ${chip} ${accent}`}>
        {icon}
        {label}
      </span>
      <h3 className="mt-4 text-[1.125rem] font-bold tracking-tight text-ink">{item.title}</h3>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted text-pretty">
        {item.body}
      </p>
    </article>
  );
}

/**
 * Thin diagonal strokes and two channel-coloured blooms.
 *
 * The diagonals are the reference's one piece of graphic texture, and on a large
 * flat dark area they matter — without them the band reads as an unlit gap
 * between two white sections rather than as a designed surface.
 */
function Decor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 left-1/4 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(37,211,102,0.16),transparent_65%)] blur-2xl" />
      <div className="absolute -right-24 -bottom-40 size-[560px] rounded-full bg-[radial-gradient(circle,rgba(225,48,108,0.16),transparent_65%)] blur-2xl" />

      <svg className="absolute inset-0 size-full opacity-[0.16]" preserveAspectRatio="none">
        <defs>
          <pattern
            id="automation-diagonals"
            width="220"
            height="220"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-24)">
            <line x1="0" y1="0" x2="0" y2="220" stroke="#4ade80" strokeWidth="1" />
            <line x1="110" y1="0" x2="110" y2="220" stroke="#ffffff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#automation-diagonals)" />
      </svg>
    </div>
  );
}
