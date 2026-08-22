import Link from 'next/link';

import { Logo } from '@/components/ui/Logo';
import { FOOTER } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-canvas-2/60">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Logo size={40} />
            <p className="text-body-lg mt-5 text-ink-muted text-pretty">{FOOTER.blurb}</p>
            <p className="mt-7 flex items-center gap-2.5 text-[0.8125rem] font-medium text-ink-faint">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
              </span>
              All systems operational
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER.columns.map((column) => (
              <div key={column.title}>
                <h3 className="eyebrow">{column.title}</h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => {
                    const style =
                      'text-[0.9375rem] text-ink-muted transition-colors hover:text-brand';
                    // Same reason as in components/ui/Button.tsx: an in-page hash
                    // through next/link updates the URL and never scrolls. The
                    // Product column here is all anchors, so it needs plain <a>.
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

        <div className="rule-fade mt-14" />

        <div className="mt-7 flex flex-col items-center justify-between gap-3 text-[0.875rem] text-ink-faint sm:flex-row">
          <p>© {year} TripzoCRM. All rights reserved.</p>
          <p>Built for travel agencies, in India.</p>
        </div>
      </div>
    </footer>
  );
}
