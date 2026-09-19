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
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Shot } from '@/components/ui/Shot';
import { FEATURES } from '@/lib/content';

type Feature = (typeof FEATURES)[number];

const ICONS: Record<string, ReactNode> = {
  leads: <UsersIcon className="size-5" />,
  whatsapp: <WhatsAppIcon size={20} />,
  instagram: <InstagramIcon size={20} />,
  map: <MapIcon className="size-5" />,
  bookings: <CalendarDaysIcon className="size-5" />,
  hotel: <BuildingOffice2Icon className="size-5" />,
};

/**
 * Chip colour and the soft stage the screenshot sits on. Brand purple for the
 * modules; the two channels keep their own colour, as they do in the product.
 */
const LOOK: Record<string, { chip: string; stage: string }> = {
  leads: { chip: 'bg-brand-wash text-brand', stage: 'from-[#efe6fd] via-[#f6f2fd] to-[#fbfaff]' },
  whatsapp: { chip: 'bg-[#e7f8ee] text-wa', stage: 'from-[#e3f6ea] via-[#f1fbf5] to-[#fafdfb]' },
  instagram: { chip: 'bg-[#fde8ef] text-ig', stage: 'from-[#fde7ef] via-[#fdf2f6] to-[#fffafc]' },
  map: { chip: 'bg-brand-wash text-brand', stage: 'from-[#efe6fd] via-[#f6f2fd] to-[#fbfaff]' },
  bookings: { chip: 'bg-[#fff1e3] text-[#c2410c]', stage: 'from-[#fff0e1] via-[#fff7ef] to-[#fffcf8]' },
  hotel: { chip: 'bg-[#e3f2fd] text-[#0369a1]', stage: 'from-[#e2f1fd] via-[#f0f8fe] to-[#fafdff]' },
};

/**
 * The six modules, each with its real screenshot shown whole.
 *
 * Three rhythms: a wide feature, a two-by-two grid, and a second wide feature
 * with the picture on the other side. Every screenshot keeps its own aspect
 * ratio inside a browser frame, so nothing is cropped mid-table.
 */
export function Features() {
  const [lead, wa, ig, map, bookings, hotel] = FEATURES;

  return (
    <section id="features" className="section-edge relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_35%_at_15%_20%,rgba(155,93,229,0.10),transparent_70%),radial-gradient(ellipse_50%_30%_at_90%_55%,rgba(37,211,102,0.08),transparent_70%),radial-gradient(ellipse_55%_30%_at_20%_90%,rgba(255,196,150,0.14),transparent_70%)]"
      />
      <div className="shell relative">
        <SectionHeading
          title="One platform."
          accent="Every part of the trip."
          sub="From the first unread message to the settled invoice, built around the way travel agencies already work."
        />

        <div className="mt-16 space-y-6">
          <Reveal y={24}>
            <WideCard feature={lead} />
          </Reveal>

          <RevealGroup className="grid gap-6 md:grid-cols-2">
            {[wa, ig, bookings, hotel].map((f) => (
              <RevealItem key={f.title} className="h-full">
                <GridCard feature={f} />
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal y={24}>
            <WideCard feature={map} flip />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Heading({ feature, large = false }: { feature: Feature; large?: boolean }) {
  const look = LOOK[feature.icon];
  return (
    <>
      <span className={`grid size-11 place-items-center rounded-[12px] ${look.chip}`}>{ICONS[feature.icon]}</span>
      <h3
        className={`font-display mt-5 font-semibold tracking-[-0.02em] text-ink ${
          large ? 'text-[clamp(1.6rem,2.4vw,2rem)] leading-tight' : 'text-[1.375rem]'
        }`}>
        {feature.title}
      </h3>
      <p className="text-body-lg mt-2.5 max-w-[48ch] text-pretty text-ink-muted">{feature.body}</p>
    </>
  );
}

function ShotStage({ feature, className = '' }: { feature: Feature; className?: string }) {
  return (
    <div className={`rounded-[18px] bg-gradient-to-br p-4 sm:p-6 ${LOOK[feature.icon].stage} ${className}`}>
      <Shot src={feature.shot} alt={feature.alt} w={feature.w} h={feature.h} className="w-full" />
    </div>
  );
}

function WideCard({ feature, flip = false }: { feature: Feature; flip?: boolean }) {
  return (
    <article className="card grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.35fr)] lg:gap-12 lg:p-10">
      <div className={flip ? 'lg:order-2' : ''}>
        <Heading feature={feature} large />
      </div>
      <ShotStage feature={feature} className={flip ? 'lg:order-1' : ''} />
    </article>
  );
}

function GridCard({ feature }: { feature: Feature }) {
  return (
    <article className="card flex h-full flex-col p-6 sm:p-8">
      <Heading feature={feature} />
      <ShotStage feature={feature} className="mt-7 flex w-full flex-1 items-center" />
    </article>
  );
}
