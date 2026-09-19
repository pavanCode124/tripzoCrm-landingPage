import Link from 'next/link';

import { Logo } from '@/components/ui/Logo';
import { FOOTER } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-edge bg-canvas-2">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Logo size={38} />
            <p className="text-body-lg mt-5 text-pretty text-ink-muted">{FOOTER.blurb}</p>
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

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-7 text-[0.875rem] text-ink-faint sm:flex-row">
          <p>© {year} TripzoCRM. All rights reserved.</p>
          <p>Built for travel agencies, in India.</p>
        </div>
      </div>
    </footer>
  );
}
