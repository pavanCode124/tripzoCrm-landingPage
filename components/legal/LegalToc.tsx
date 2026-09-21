'use client';

import { useEffect, useState } from 'react';

/**
 * The contents rail. It marks the section being read, so a long document keeps
 * telling you where you are without a progress bar.
 *
 * IntersectionObserver rather than a scroll listener: it fires only when a
 * section crosses the reading line, not on every frame.
 */
export function LegalToc({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-15% 0px -75% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Contents">
      <p className="mb-3 border-b border-line pb-3 text-[0.6875rem] font-semibold tracking-[0.16em] text-ink-faint uppercase">
        Contents
      </p>
      <ol className="space-y-0.5">
        {items.map((item, i) => {
          const on = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={on ? 'location' : undefined}
                className={`grid grid-cols-[1.5rem_1fr] items-baseline gap-1.5 border-l-2 py-1.5 pr-2 pl-3 text-[0.8125rem] leading-snug transition-colors duration-200 ${
                  on
                    ? 'border-brand font-medium text-brand'
                    : 'border-transparent text-ink-muted hover:text-ink'
                }`}>
                <span className={`text-[0.75rem] tabular-nums ${on ? 'text-brand' : 'text-ink-faint'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
