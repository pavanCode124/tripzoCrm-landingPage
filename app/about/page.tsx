import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { Fill } from '@/components/legal/prose';
import { PageHeader, SubPage } from '@/components/page/SubPage';
import { FinalCta } from '@/components/sections/FinalCta';
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  CheckIcon,
  InstagramIcon,
  MapIcon,
  MetaIcon,
  UsersIcon,
  WhatsAppIcon,
} from '@/components/ui/icons';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { COMPANY } from '@/lib/company';
import { ABOUT, FEATURES } from '@/lib/content';
import { LEGAL } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'About us',
  description:
    'TripzoCRM is a CRM built only for travel agencies: leads, WhatsApp, Instagram, packages, itineraries, invoices and trip profit in one place.',
  alternates: { canonical: '/about' },
};

/** Same icons and chip colours the landing page's Features section uses. */
const FEATURE_ICON: Record<string, { icon: ReactNode; chip: string }> = {
  leads: { icon: <UsersIcon className="size-5" />, chip: 'bg-brand-wash text-brand' },
  whatsapp: { icon: <WhatsAppIcon size={20} />, chip: 'bg-[#e7f8ee] text-wa' },
  instagram: { icon: <InstagramIcon size={20} />, chip: 'bg-[#fde8ef] text-ig' },
  map: { icon: <MapIcon className="size-5" />, chip: 'bg-brand-wash text-brand' },
  bookings: { icon: <CalendarDaysIcon className="size-5" />, chip: 'bg-[#fff1e3] text-[#c2410c]' },
  hotel: { icon: <BuildingOffice2Icon className="size-5" />, chip: 'bg-[#e3f2fd] text-[#0369a1]' },
};

export default function AboutPage() {
  const glance: { label: string; value: ReactNode }[] = [
    { label: 'Founded', value: <Fill>{COMPANY.founded}</Fill> },
    { label: 'Headquarters', value: <Fill>{COMPANY.headquarters}</Fill> },
    { label: 'Company', value: <Fill>{LEGAL.entityName}</Fill> },
    { label: 'Available on', value: 'Web, Android and iOS' },
    { label: 'Messaging', value: 'WhatsApp and Instagram, through Meta’s official business platforms' },
    { label: 'Built for', value: 'Travel agencies and tour operators, in India' },
  ];

  return (
    <SubPage>
      <PageHeader
        kicker="About TripzoCRM"
        title="Software made for"
        accent="the way agencies sell trips."
        lede="TripzoCRM brings a travel agency’s WhatsApp and Instagram enquiries, sales pipeline, itineraries, invoices and trip accounts into one system, on the web and on your phone. It is built for travel alone, so every screen speaks in trips, travellers and departures, not deals and contacts."
      />

      {/* Why: the problem, then the founders' own account of it. */}
      <section className="py-20 sm:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading align="left" title="Why we" accent="built it." />
          </div>
          <Reveal delay={0.08}>
            <div className="text-body-lg space-y-5 text-pretty text-ink-muted">
              <p>
                A travel agency gets enquiries all day. <em className="text-ink">&ldquo;Goa package for four people in
                December?&rdquo;</em> They arrive on WhatsApp, in Instagram DMs and from ads, and without a system they
                live in one person&rsquo;s phone. The busy weeks are exactly when they get forgotten, and a forgotten
                enquiry is a booking someone else makes.
              </p>
              <p>
                General-purpose CRMs were built to sell software, not trips. They have deals, not departures; contacts,
                not travellers; and no idea that a quote for Bali needs a day-by-day plan, hotel rates and a margin
                behind it. Agencies bent them into shape with custom fields, then went back to spreadsheets.
              </p>
              <p>
                TripzoCRM captures every enquiry as a lead, answers the routine ones automatically, hands the rest to a
                person, and follows each one until it becomes a booking or is closed for good. Along the way the same
                system builds the itinerary, raises the invoice and records what the trip made.
              </p>
              <div className="rounded-2xl border border-line bg-canvas-2 p-5 sm:p-6">
                <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-brand uppercase">Our story</p>
                <p className="mt-3 text-ink">
                  <Fill>{COMPANY.story}</Fill>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we believe: the three pillars the landing page's About section already states. */}
      <section className="section-edge bg-canvas-2 py-20 sm:py-28">
        <div className="shell">
          <SectionHeading title="What we" accent="believe." sub="Three decisions every part of the product follows." />
          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3">
            {ABOUT.pillars.map((pillar) => (
              <RevealItem key={pillar.title}>
                <div className="card h-full p-7">
                  <span className="grid size-9 place-items-center rounded-full bg-brand text-white shadow-[0_6px_14px_-6px_rgba(113,55,179,0.7)]">
                    <CheckIcon className="size-4" />
                  </span>
                  <h3 className="font-display mt-5 text-[1.25rem] font-semibold text-ink">{pillar.title}</h3>
                  <p className="text-body-lg mt-2 text-pretty text-ink-muted">{pillar.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* What it does: the six modules, without the screenshots the landing page already shows. */}
      <section className="section-edge py-20 sm:py-28">
        <div className="shell">
          <SectionHeading
            title="One system,"
            accent="enquiry to invoice."
            sub="What an agency runs on TripzoCRM, from the first message to the last payment."
          />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => {
              const look = FEATURE_ICON[feature.icon];
              return (
                <RevealItem key={feature.title}>
                  <div className="card h-full p-6">
                    <span className={`grid size-11 place-items-center rounded-[12px] ${look.chip}`}>{look.icon}</span>
                    <h3 className="mt-5 text-[1.0625rem] font-semibold text-ink">{feature.title}</h3>
                    <p className="text-body-lg mt-1.5 text-pretty text-ink-muted">{feature.body}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Meta: how the channels connect, and what that means for the agency. */}
      <section className="section-edge bg-canvas-2 py-20 sm:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20">
          <div>
            <SectionHeading align="left" title="Built on Meta’s" accent="official platforms." />
          </div>
          <Reveal delay={0.08}>
            <div className="card p-7 sm:p-8">
              <span className="grid size-11 place-items-center rounded-[12px] bg-[#e8f0ff] text-[#0866ff]">
                <MetaIcon size={22} />
              </span>
              <ul className="text-body-lg mt-6 space-y-4 text-pretty text-ink-muted">
                {[
                  <>TripzoCRM is a <strong className="font-semibold text-ink">Tech Provider on Meta&rsquo;s business messaging platform</strong>. Agencies connect their own WhatsApp Business number and Instagram professional account through Meta&rsquo;s official APIs, not an unofficial workaround.</>,
                  <>The number and the account stay the agency&rsquo;s own. We do not resell access to WhatsApp or Instagram; the subscription pays for the software.</>,
                  <>Messages received through Meta are processed only for the agency they belong to, and are never used for advertising or to train AI models.</>,
                ].map((line, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckIcon className="mt-1 size-4 shrink-0 text-brand" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.9375rem] text-ink-muted">
                The full detail is in our{' '}
                <Link href="/privacy-policy" className="font-semibold text-brand hover:text-brand-hover">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/terms-of-service" className="font-semibold text-brand hover:text-brand-hover">
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* At a glance: the company facts, several of which only the business can fill in. */}
      <section className="section-edge py-20 sm:py-28">
        <div className="shell">
          <SectionHeading title="At a" accent="glance." />
          <Reveal delay={0.08}>
            <dl className="card mx-auto mt-12 grid max-w-4xl overflow-hidden !rounded-2xl sm:grid-cols-2">
              {glance.map((item, i) => (
                <div
                  key={item.label}
                  className={`border-line p-6 ${i > 0 ? 'border-t' : ''} ${i === 1 ? 'sm:border-t-0' : ''} ${i % 2 === 1 ? 'sm:border-l' : ''}`}>
                  <dt className="text-[0.6875rem] font-semibold tracking-[0.16em] text-ink-faint uppercase">{item.label}</dt>
                  <dd className="mt-2 text-[1.0625rem] font-semibold text-pretty text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </SubPage>
  );
}
