import Link from 'next/link';
import type { ReactNode } from 'react';

import { LegalToc } from '@/components/legal/LegalToc';
import { PageHeader, SubPage } from '@/components/page/SubPage';
import { LEGAL } from '@/lib/legal';

/**
 * The frame both legal documents share: the sub-page header and footer, the
 * heading band with the document's dates, then a contents rail beside a single
 * reading column.
 */
export function LegalPage({
  title,
  lede,
  sibling,
  toc,
  children,
}: {
  title: string;
  lede: string;
  sibling: { label: string; href: string };
  toc: { id: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <SubPage>
      <PageHeader title={title} lede={lede}>
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-[0.875rem]">
          <div>
            <dt className="text-[0.6875rem] font-semibold tracking-[0.14em] text-ink-faint uppercase">Effective</dt>
            <dd className="mt-1 font-semibold text-ink tabular-nums">{LEGAL.effectiveDate}</dd>
          </div>
          <div>
            <dt className="text-[0.6875rem] font-semibold tracking-[0.14em] text-ink-faint uppercase">Applies to</dt>
            <dd className="mt-1 font-semibold text-ink">Web CRM · Mobile app · Public agency pages</dd>
          </div>
        </dl>
      </PageHeader>

      <div className="shell grid gap-10 py-14 sm:py-20 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto">
          <div className="card !rounded-2xl p-5 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
            <LegalToc items={toc} />
          </div>
        </aside>

        <article className="min-w-0 max-w-[72ch] space-y-12">
          {children}

          <div className="flex flex-col gap-4 border-t border-line pt-8 text-[0.875rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
            <p>
              {title} · effective {LEGAL.effectiveDate}
            </p>
            <Link href={sibling.href} className="font-semibold text-brand hover:text-brand-hover">
              Read the {sibling.label} →
            </Link>
          </div>
        </article>
      </div>
    </SubPage>
  );
}
