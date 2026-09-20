import { AppleIcon, GooglePlayIcon } from '@/components/ui/icons';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/content';

/**
 * The two app-store buttons.
 *
 * Drawn here rather than using the official PNG badges: those ship as fixed
 * raster art in their own two typefaces, and dropped next to this page's
 * buttons they read as borrowed furniture. The mark is the recognisable part,
 * so the mark is kept and the frame is ours — same height and hit area as a
 * real badge, so the pairing still scans as "get it on the stores".
 *
 * The full URLs live in content.ts; only the marks are visible.
 */
export function StoreBadges({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Badge
        href={APP_STORE_URL}
        label="Download TripzoCRM on the App Store"
        eyebrow="Download on the"
        name="App Store"
        icon={<AppleIcon size={26} className="-mt-0.5" />}
      />
      <Badge
        href={PLAY_STORE_URL}
        label="Get TripzoCRM on Google Play"
        eyebrow="Get it on"
        name="Google Play"
        icon={<GooglePlayIcon size={24} />}
      />
    </div>
  );
}

function Badge({
  href,
  label,
  eyebrow,
  name,
  icon,
}: {
  href: string;
  label: string;
  eyebrow: string;
  name: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group inline-flex items-center gap-3 rounded-[14px] border border-line-strong bg-canvas px-4 py-2.5 text-ink shadow-[0_10px_24px_-18px_rgba(63,29,107,0.55)] transition-[transform,border-color,box-shadow] hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_16px_30px_-18px_rgba(63,29,107,0.6)]">
      <span className="grid shrink-0 place-items-center">{icon}</span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.625rem] tracking-[0.08em] text-ink-faint uppercase">{eyebrow}</span>
        <span className="mt-1 text-[0.9375rem] font-semibold tracking-[-0.01em]">{name}</span>
      </span>
    </a>
  );
}
