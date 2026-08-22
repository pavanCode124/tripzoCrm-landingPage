'use client';

import {
  BellIcon,
  CheckIcon,
  InstagramIcon,
  WalletIcon,
  WhatsAppIcon,
} from '@/components/ui/icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MOBILE } from '@/lib/content';

/**
 * The mobile app section.
 *
 * Worth its own section rather than a line in the feature grid: most CRMs in
 * this category offer a responsive web page and call it mobile. A real app with
 * push notifications is the difference between an agent finding out about a
 * lead and being told about one.
 */
export function Mobile() {
  return (
    <section id="mobile" className="relative overflow-hidden bg-canvas-2/60 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-40 size-[620px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(155,93,229,0.12),transparent_65%)] blur-2xl"
      />

      <div className="shell relative">
        <div className="grid items-center gap-16 lg:grid-cols-[400px_1fr] lg:gap-24">
          <Reveal y={30} className="order-2 lg:order-1">
            <PhoneMock />
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow={MOBILE.eyebrow}
              title={MOBILE.title}
              accent={MOBILE.accent}
              sub={MOBILE.body}
            />

            <Reveal delay={0.18}>
              <div className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                {MOBILE.points.map((point) => (
                  <div key={point.title}>
                    <div className="flex items-center gap-2.5">
                      <span className="grid size-6 place-items-center rounded-[6px] bg-brand-wash">
                        <CheckIcon className="size-3.5 text-brand" />
                      </span>
                      <h3 className="text-[1.0625rem] font-bold text-ink">{point.title}</h3>
                    </div>
                    <p className="text-body-lg mt-2 pl-8.5 text-ink-muted">{point.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[340px]">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[56px] bg-[radial-gradient(ellipse_at_50%_25%,rgba(155,93,229,0.22),transparent_65%)] blur-2xl"
      />

      <div className="relative rounded-[46px] border border-hairline-strong bg-gradient-to-b from-[#2a2334] to-[#14101f] p-3 shadow-[0_50px_100px_-30px_rgba(20,16,31,0.5)]">
        <div className="relative overflow-hidden rounded-[36px] bg-canvas">
          <div className="absolute top-2.5 left-1/2 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black/85" />

          {/* Branded hero, mirroring the app's own home screen */}
          <div className="relative bg-gradient-to-br from-brand to-brand-deep px-6 pt-12 pb-8">
            <div className="flex items-center justify-between text-[0.6875rem] font-medium text-white/75">
              <span>9:41</span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-400" /> Live
              </span>
            </div>
            <p className="mt-5 text-[0.75rem] text-white/70">Good morning,</p>
            <p className="text-2xl font-bold text-white">Hey Priya 👋</p>
          </div>

          <div className="space-y-3 bg-surface-2/50 p-4">
            <div className="grid grid-cols-2 gap-3">
              <Tile
                icon={<WhatsAppIcon size={17} />}
                label="WhatsApp"
                badge="14"
                tone="text-wa bg-wa/10"
              />
              <Tile
                icon={<InstagramIcon size={17} />}
                label="Instagram"
                badge="7"
                tone="text-ig bg-ig/10"
              />
            </div>

            <div className="rounded-[10px] border border-hairline bg-canvas p-4">
              <div className="flex items-center gap-2">
                <BellIcon className="size-3.5 text-brand" />
                <p className="text-[0.8125rem] font-bold text-ink">New lead assigned</p>
              </div>
              <p className="mt-1.5 text-[0.75rem] leading-relaxed text-ink-faint">
                Ananya R. · Bali Honeymoon · via Instagram ad
              </p>
            </div>

            <div className="flex items-center gap-3.5 rounded-[10px] border border-hairline bg-canvas p-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-[8px] bg-accent-soft text-accent">
                <WalletIcon className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.8125rem] font-bold text-ink">Expense logged</p>
                <p className="truncate text-[0.75rem] text-ink-faint">
                  ₹8,400 · Hotel advance · Manali
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mb-3 h-1 w-32 rounded-full bg-ink/15" />
        </div>
      </div>
    </div>
  );
}

function Tile({
  icon,
  label,
  badge,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  badge: string;
  tone: string;
}) {
  return (
    <div className="rounded-[10px] border border-hairline bg-canvas p-3.5">
      <div className="flex items-start justify-between">
        <span className={`grid size-9 place-items-center rounded-[8px] ${tone}`}>{icon}</span>
        <span className="rounded-[5px] bg-surface-2 px-2 py-0.5 text-[0.625rem] font-bold text-ink-muted">
          {badge}
        </span>
      </div>
      <p className="mt-3 text-[0.8125rem] font-bold text-ink">{label}</p>
    </div>
  );
}
