import type { ReactNode } from 'react';

import { Footer } from '@/components/sections/Footer';
import { Nav } from '@/components/sections/Nav';
import { SUBPAGE_FOOTER_COLUMN, SUBPAGE_LINKS } from '@/lib/content';

/**
 * The frame for every page that is not the landing page: About, Contact and the
 * two legal documents. The same header and footer as the landing page, with the
 * menu swapped for About / Pricing / Contact, since these pages have no landing
 * sections of their own to jump between.
 */
export function SubPage({ children }: { children: ReactNode }) {
  // The wrapper is load-bearing. On navigation Next.js scrolls the new page's
  // first element into view, but skips that entirely when the element is fixed
  // or sticky, which the header is. Without a plain element first, a link
  // clicked in the footer opens the next page at its footer.
  return (
    <div>
      <Nav links={SUBPAGE_LINKS} />
      <main>{children}</main>
      <Footer primaryColumn={SUBPAGE_FOOTER_COLUMN} />
    </div>
  );
}

/**
 * The band a sub-page opens with: a small kicker, the page's headline with an
 * optional brand-coloured clause, and a standfirst.
 *
 * It borrows the landing page's aurora wash at a fraction of its strength,
 * which says "same site" without competing with what comes under it.
 */
export function PageHeader({
  kicker,
  title,
  accent,
  lede,
  children,
}: {
  kicker?: string;
  title: string;
  accent?: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-canvas-2">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_70%_at_12%_0%,rgba(155,93,229,0.14),transparent_70%),radial-gradient(ellipse_35%_60%_at_92%_100%,rgba(245,163,199,0.12),transparent_70%)]"
      />
      <div className="shell relative pt-32 pb-12 sm:pt-36 sm:pb-16">
        {kicker ? (
          <p className="mb-4 text-[0.6875rem] font-semibold tracking-[0.16em] text-brand uppercase">{kicker}</p>
        ) : null}
        <h1 className="font-display text-hero max-w-4xl font-semibold text-balance text-ink">
          {title}
          {accent ? (
            <>
              {' '}
              <span className="text-brand">{accent}</span>
            </>
          ) : null}
        </h1>
        <p className="text-lede mt-5 max-w-2xl text-pretty text-ink-muted">{lede}</p>
        {children}
      </div>
    </header>
  );
}
