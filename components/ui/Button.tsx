import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'light' | 'glass';

/**
 * Buttons.
 *
 * Every pressable scales to 0.97 on :active, so the page confirms the click
 * before the navigation does. Hover only changes colour and light, never
 * position: a button that jumps away from the cursor feels unsure of itself.
 */
const BASE =
  'btn-press group inline-flex items-center justify-center gap-2 rounded-[12px] font-semibold ' +
  'whitespace-nowrap transition-[background-color,border-color,color,transform] duration-200 ease-out';

const SIZES = {
  md: 'h-11 px-5 text-[0.9375rem]',
  lg: 'h-[52px] px-7 text-[1rem]',
} as const;

const VARIANTS: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'border border-line-strong bg-canvas text-ink shadow-[0_1px_2px_rgba(18,15,28,0.04)] hover:border-ink/20 hover:bg-canvas-2',
  light: 'bg-white text-ink hover:bg-brand-wash',
  glass: 'border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20',
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

  /*
   * In-page anchors get a plain <a>, never next/link: the App Router treats a
   * hash link as a client navigation, writes the URL and then does not scroll.
   */
  if (href.startsWith('#')) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
