import Link from 'next/link';

import { MetaIcon } from '@/components/ui/icons';
import { Logo } from '@/components/ui/Logo';
import { StoreBadges } from '@/components/ui/StoreBadges';
import { FOOTER, MOBILE } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-edge bg-canvas-2">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Logo size={38} />
            <p className="text-body-lg mt-5 text-pretty text-ink-muted">{FOOTER.blurb}</p>

            <p className="mt-6 text-[0.6875rem] font-semibold tracking-[0.16em] text-ink-faint uppercase">
              {MOBILE.storesLabel}
            </p>
            <StoreBadges className="mt-3" />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER.columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[0.875rem] font-semibold text-ink">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => {
                    const style = 'text-[0.9375rem] text-ink-muted transition-colors hover:text-ink';
                    // In-page hashes need a plain <a>; next/link would not scroll.
                    return (
                      <li key={link.label}>
                        {link.href.startsWith('#') ? (
                          <a href={link.href} className={style}>
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href} className={style}>
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-7 text-[0.875rem] text-ink-faint">
          <p className="flex items-center justify-center gap-1.5 text-center sm:justify-start sm:text-left">
            <MetaIcon size={16} className="shrink-0 text-ink-faint" />
            <span>
              {FOOTER.techProvider.prefix}{' '}
              <span className="font-semibold text-ink-muted">{FOOTER.techProvider.name}</span>{' '}
              {FOOTER.techProvider.suffix}
            </span>
          </p>

          <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>© {year} TripzoCRM. All rights reserved.</p>
            <p>Built for travel agencies, in India.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
