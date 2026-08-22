'use client';

import type { ReactNode } from 'react';

import { CheckIcon, InstagramIcon, WebIcon, WhatsAppIcon } from '@/components/ui/icons';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CHANNELS } from '@/lib/content';

/**
 * Where the leads come from.
 *
 * Each card keeps its own channel colour — WhatsApp green, Instagram pink — the
 * same convention the product uses, where the header tint alone tells an agent
 * which inbox they are in. Carrying it onto the marketing page means the app
 * looks familiar the first time they open it.
 */
const LOOKS: Record<
  string,
  { icon: ReactNode; border: string; text: string; wash: string }
> = {
  whatsapp: {
    icon: <WhatsAppIcon size={24} />,
    border: 'hover:border-wa/60',
    text: 'text-wa',
    wash: 'bg-wa/10',
  },
  instagram: {
    icon: <InstagramIcon size={24} />,
    border: 'hover:border-ig/60',
    text: 'text-ig',
    wash: 'bg-ig/10',
  },
  web: {
    icon: <WebIcon size={24} />,
    border: 'hover:border-brand/60',
    text: 'text-brand',
    wash: 'bg-brand-wash',
  },
};

export function Channels() {
  return (
    <section id="channels" className="section-edge relative bg-canvas-2/60 py-24 sm:py-32">
      <div className="shell relative">
        <SectionHeading
          eyebrow="Launch on every channel"
          title="Your customers are already messaging."
          accent="Now you'll see it."
          sub="Ninety per cent of travel enquiries arrive as a chat. TripzoCRM puts all of them in one place, attaches each to a lead, and answers the first message before anyone on your team has read it."
        />

        <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {CHANNELS.map((channel) => {
            const look = LOOKS[channel.key];
            return (
              <RevealItem key={channel.key}>
                <article
                  className={`card-edge relative mx-auto h-full w-full max-w-[560px] overflow-hidden p-8 transition-colors duration-200 lg:max-w-none ${look.border}`}>
                  <div className="flex items-center gap-4">
                    <span
                      className={`grid size-14 place-items-center rounded-[10px] ${look.wash} ${look.text}`}>
                      {look.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-ink">{channel.name}</h3>
                      <p className="text-[0.875rem] text-ink-faint">{channel.tagline}</p>
                    </div>
                  </div>

                  <ul className="mt-7 space-y-3.5">
                    {channel.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <CheckIcon className={`mt-0.5 size-[17px] shrink-0 ${look.text}`} />
                        <span className="text-body-lg text-ink-muted">{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
