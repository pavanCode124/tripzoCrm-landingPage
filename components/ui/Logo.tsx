import Image from 'next/image';

import logoMark from '@/public/logo.png';

/**
 * The TripzoCRM mark: the globe-and-orbit app icon, white on brand purple.
 *
 * This is the real brand asset (`public/logo.png`), not a redrawn approximation.
 * The purple tile is part of the artwork, so the wrapper only supplies the corner
 * radius and the lift shadow. `priority` is set because the mark sits in the
 * header, inside the first viewport on every page.
 */
export function LogoMark({ size = 34, rounded = 11 }: { size?: number; rounded?: number }) {
  return (
    <span
      className="relative grid shrink-0 place-items-center overflow-hidden shadow-[0_6px_16px_-6px_rgba(113,55,179,0.6)]"
      style={{ width: size, height: size, borderRadius: rounded }}>
      <Image
        src={logoMark}
        alt=""
        width={size}
        height={size}
        sizes={`${size}px`}
        priority
        aria-hidden="true"
        className="h-full w-full object-cover"
      />
    </span>
  );
}

/**
 * Mark plus wordmark. "CRM" takes the green, as on the live site; the purple
 * stays on the mark.
 */
export function Logo({ size = 34, showStrapline = true }: { size?: number; showStrapline?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={size} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.3125rem] font-bold tracking-[-0.02em] text-ink">
          Tripzo<span className="text-accent">CRM</span>
        </span>
        {showStrapline ? (
          <span className="mt-1 text-[0.625rem] font-semibold tracking-[0.16em] text-ink-faint uppercase">
            Travel Agency Platform
          </span>
        ) : null}
      </span>
    </span>
  );
}
