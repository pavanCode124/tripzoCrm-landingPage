import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { Fill } from '@/components/legal/prose';
import { PageHeader, SubPage } from '@/components/page/SubPage';
import { Button } from '@/components/ui/Button';
import {
  ArrowRightIcon,
  ClockIcon,
  EnvelopeIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  WhatsAppIcon,
} from '@/components/ui/icons';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CONTACT } from '@/lib/company';
import { CTA, SIGNUP_URL } from '@/lib/content';
import { isPlaceholder, LEGAL } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Reach the TripzoCRM team for a demo, help with your account, or questions about privacy and billing.',
  alternates: { canonical: '/contact' },
};

/**
 * One way to reach us: an icon, what it is, and the value. The value becomes a
 * link only once it is real, so a visitor never taps a mailto: that goes nowhere.
 */
function Line({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href?: string }) {
  const filled = !isPlaceholder(value);
  return (
    <li className="flex gap-3.5">
      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-[10px] bg-canvas-3 text-ink-muted">{icon}</span>
      <div className="min-w-0">
        <p className="text-[0.75rem] font-semibold tracking-[0.12em] text-ink-faint uppercase">{label}</p>
        <p className="mt-0.5 text-[0.9375rem] font-medium text-ink [overflow-wrap:anywhere]">
          {filled && href ? (
            <a href={href} className="text-brand hover:text-brand-hover" target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
              {value}
            </a>
          ) : (
            <Fill>{value}</Fill>
          )}
        </p>
      </div>
    </li>
  );
}

function Card({ title, sub, children }: { title: string; sub: string; children: ReactNode }) {
  return (
    <div className="card flex h-full flex-col p-7">
      <h2 className="font-display text-[1.375rem] font-semibold text-ink">{title}</h2>
      <p className="text-body-lg mt-1.5 text-pretty text-ink-muted">{sub}</p>
      <div className="mt-6 flex flex-1 flex-col">{children}</div>
    </div>
  );
}

const telHref = (v: string) => `tel:${v.replace(/[^\d+]/g, '')}`;

export default function ContactPage() {
  return (
    <SubPage>
      <PageHeader
        kicker="Contact"
        title="Talk to"
        accent="the TripzoCRM team."
        lede="A demo for your agency, help with your account, or a question about privacy or billing. Here is who to reach and how."
      />

      <section className="py-16 sm:py-24">
        <div className="shell">
          <RevealGroup className="grid gap-5 lg:grid-cols-3">
            <RevealItem>
              <Card title="Sales and demos" sub="See TripzoCRM on your own enquiries, or talk through plans for your team.">
                <ul className="space-y-5">
                  <Line icon={<EnvelopeIcon className="size-[18px]" />} label="Email" value={CONTACT.salesEmail} href={`mailto:${CONTACT.salesEmail}`} />
                  <Line icon={<PhoneIcon className="size-[18px]" />} label="Phone" value={CONTACT.salesPhone} href={telHref(CONTACT.salesPhone)} />
                  <Line icon={<WhatsAppIcon size={18} />} label="WhatsApp" value={CONTACT.whatsappNumber} href={`https://wa.me/${CONTACT.whatsappNumber}`} />
                </ul>
                <div className="mt-auto pt-7">
                  <Button href={SIGNUP_URL} size="md">
                    {CTA.demo}
                    <ArrowRightIcon className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </Card>
            </RevealItem>

            <RevealItem>
              <Card title="Support" sub="Already using TripzoCRM? Tell us your agency name and what you were trying to do.">
                <ul className="space-y-5">
                  <Line icon={<EnvelopeIcon className="size-[18px]" />} label="Email" value={LEGAL.supportEmail} href={`mailto:${LEGAL.supportEmail}`} />
                  <Line icon={<PhoneIcon className="size-[18px]" />} label="Phone" value={CONTACT.supportPhone} href={telHref(CONTACT.supportPhone)} />
                  <Line icon={<ClockIcon className="size-[18px]" />} label="Hours" value={CONTACT.hours} />
                </ul>
              </Card>
            </RevealItem>

            <RevealItem>
              <Card title="Office" sub="Where to find us.">
                <ul className="space-y-5">
                  <Line icon={<MapPinIcon className="size-[18px]" />} label="Address" value={CONTACT.officeAddress} />
                  <Line icon={<MapIcon className="size-[18px]" />} label="Map" value={CONTACT.mapUrl} href={CONTACT.mapUrl} />
                </ul>
              </Card>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="mt-5">
            <RevealItem>
              <div className="card grid gap-6 p-7 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center">
                <span className="grid size-11 place-items-center rounded-[12px] bg-brand-wash text-brand">
                  <ShieldCheckIcon className="size-5" />
                </span>
                <div>
                  <h2 className="font-display text-[1.25rem] font-semibold text-ink">Privacy, legal and grievances</h2>
                  <p className="text-body-lg mt-1 text-pretty text-ink-muted">
                    For a data request or a complaint about how personal data is handled, write to our Grievance Officer at{' '}
                    {isPlaceholder(LEGAL.grievanceOfficer.email) ? (
                      <Fill>{LEGAL.grievanceOfficer.email}</Fill>
                    ) : (
                      <a href={`mailto:${LEGAL.grievanceOfficer.email}`} className="font-semibold text-brand hover:text-brand-hover">
                        {LEGAL.grievanceOfficer.email}
                      </a>
                    )}
                    . Travellers should first contact the agency they booked with.
                  </p>
                  <p className="mt-2 text-[0.875rem] text-ink-faint">
                    <Fill>{LEGAL.entityName}</Fill> · <Fill>{LEGAL.registeredAddress}</Fill>
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.9375rem] font-semibold">
                  <Link href="/privacy-policy" className="text-brand hover:text-brand-hover">
                    Privacy Policy
                  </Link>
                  <Link href="/terms-of-service" className="text-brand hover:text-brand-hover">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>
    </SubPage>
  );
}
