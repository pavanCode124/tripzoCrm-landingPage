import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'dark' | 'onDark' | 'onDarkGhost';

/**
 * Buttons.
 *
 * Rectangular with a slight radius, flat fills, and almost no hover movement.
 * That restraint IS the premium signal: a pill that lifts, glows and gains a
 * shadow on hover reads as a consumer app. A solid rectangle that darkens by a
 * few percent reads as software someone pays for.
 *
 * So: no translate, no scale, no shadow growth. Hover changes colour only, and
 * only slightly. The one thing kept is a focus ring, because that is
 * accessibility rather than decoration.
 */
const BASE =
  'group inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold ' +
  'transition-colors duration-200 whitespace-nowrap ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand';

const SIZES = {
  md: 'h-11 px-5 text-[0.9375rem]',
  lg: 'h-[52px] px-7 text-[1rem]',
} as const;

const VARIANTS: Record<Variant, string> = {
  // Flat brand fill. No gradient — a gradient on a rectangle reads as a bevel.
  primary: 'bg-brand text-white hover:bg-brand-deep',
  secondary: 'border border-hairline-strong bg-canvas text-ink hover:bg-surface-2',
  dark: 'bg-ink text-white hover:bg-dark-2',
  onDark: 'bg-white text-ink hover:bg-brand-wash',
  onDarkGhost: 'border border-white/25 bg-white/10 text-white hover:bg-white/20',
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
   * In the App Router a `<Link href="#workflow">` is treated as a client-side
   * navigation: the router writes the hash into the URL and then applies its own
   * scroll handling, which for a same-route navigation does nothing. The address
   * bar changed and the page sat still. A native anchor has no such opinion — it
   * honours `scroll-padding-top` and `scroll-behavior` from globals.css.
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
