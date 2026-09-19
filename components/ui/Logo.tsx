/**
 * The TripzoCRM mark : a globe inside an orbit ring, white on brand purple.
 *
 * Redrawn as SVG rather than shipped as a PNG: it is used at 34px in the header
 * and 40px in the footer, needs to stay crisp on every density, and an inline
 * mark costs no request. Swap in the real asset later by replacing the body of
 * `LogoMark` — nothing else imports the geometry.
 *
 * The orbit is dashed on purpose. A continuous ellipse over the globe reads as
 * a flat ring drawn on top; breaking it where it would pass BEHIND the sphere is
 * what makes it read as three-dimensional.
 */
export function LogoMark({ size = 34, rounded = 11 }: { size?: number; rounded?: number }) {
  return (
    <span
      className="relative grid shrink-0 place-items-center overflow-hidden bg-gradient-to-br from-brand-lift to-brand shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_6px_16px_-6px_rgba(113,55,179,0.6)]"
      style={{ width: size, height: size, borderRadius: rounded }}>
      <svg
        width={size * 0.78}
        height={size * 0.78}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true">
        <g
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke">
          {/* Sphere */}
          <circle cx="24" cy="24" r="13.5" />
          {/* Meridians */}
          <ellipse cx="24" cy="24" rx="5.6" ry="13.5" />
          {/* Latitudes */}
          <path d="M11.6 18.6h24.8M11.6 29.4h24.8" />
        </g>

        {/* Orbit — broken where it passes behind the globe. */}
        <ellipse
          cx="24"
          cy="24"
          rx="22"
          ry="9"
          transform="rotate(-28 24 24)"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="30 12 46 12"
          strokeDashoffset="8"
        />
      </svg>
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
