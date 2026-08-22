import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'dark' | 'onDark' | 'onDarkGhost';

const BASE =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold ' +
  'transition-all duration-300 whitespace-nowrap ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand';

/** Sizes went up across the board — the previous scale read as a web app's UI. */
const SIZES = {
  md: 'h-12 px-6 text-[0.9375rem]',
  lg: 'h-14 px-8 text-[1.0625rem]',
} as const;

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-gradient-to-b from-brand-lift to-brand text-white ' +
    'shadow-[0_12px_30px_-10px_rgba(113,55,179,0.65)] ' +
    'hover:shadow-[0_18px_44px_-12px_rgba(113,55,179,0.8)] hover:-translate-y-0.5',
  secondary:
    'border border-hairline-strong bg-canvas text-ink ' +
    'shadow-[0_2px_10px_-4px_rgba(20,16,31,0.1)] ' +
    'hover:border-brand/35 hover:text-brand hover:-translate-y-0.5',
  dark: 'bg-ink text-white hover:bg-brand hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-12px_rgba(113,55,179,0.7)]',
  onDark: 'bg-white text-ink hover:-translate-y-0.5 hover:bg-brand-wash',
  onDarkGhost: 'border border-white/25 bg-white/10 text-white hover:bg-white/20 hover:-translate-y-0.5',
};

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...rest
}: {
  href: string;
  variant?: Variant;
  size?: keyof typeof SIZES;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, 'href' | 'className' | 'children'>) {
  const classes = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`;
  const external = href.startsWith('http');
  const inPage = href.startsWith('#');

  /**
   * In-page anchors get a PLAIN <a>, never next/link.
   *
   * This is not a style choice, it is a bug fix. In the App Router a
   * `<Link href="#workflow">` is treated as a client-side navigation: the router
   * writes the hash into the URL and then applies its own scroll handling, which
   * for a same-route navigation does nothing at all. The address bar changed and
   * the page sat still — exactly what "See how it works" did.
   *
   * A native anchor has no such opinion. The browser finds the target, honours
   * `scroll-padding-top` and `scroll-behavior: smooth` from globals.css, and
   * lands it under the header. The nav links have always been plain <a> for this
   * reason; this brings the button into line with them.
   */
  if (inPage) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}>
      {children}
    </Link>
  );
}
