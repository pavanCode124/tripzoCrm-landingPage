'use client';

import { PhotoIcon } from '@/components/ui/icons';
import { useEffect, useRef, useState } from 'react';

/**
 * A product screenshot, framed.
 *
 * Three jobs, and each one is why this is a component rather than an <img>:
 *
 *   1. CLIPPING. Screenshots arrive at whatever aspect ratio the window happened
 *      to be. Forcing a fixed ratio and cropping from the top-left keeps a grid
 *      of six cards even, and the top-left is where a CRM puts the part worth
 *      seeing — headings, totals, the first rows.
 *   2. A FALLBACK. The files live outside the repo until someone exports them.
 *      A missing one renders a designed placeholder rather than the browser's
 *      broken-image glyph and a paragraph of alt text.
 *   3. THE FRAME. Rounded corners, a hairline, and a shadow, so the shot reads
 *      as a window floating on the tile instead of a rectangle pasted onto it.
 *
 * WHY THE onError HANDLER IS NOT ENOUGH, and the bug that taught us:
 *
 * This markup is server-rendered. The browser starts fetching the <img> while
 * parsing the HTML — long before React hydrates and attaches any listener. A
 * 404 therefore fires its error event into a void, `onError` never runs, and the
 * page sits there showing the broken-image glyph forever. That is exactly what
 * happened.
 *
 * So the mount effect below re-checks the DOM node directly: an <img> that has
 * finished loading (`complete`) with a zero `naturalWidth` has failed, whenever
 * that failure happened. onError is kept as well, for images that are still
 * in flight when hydration completes.
 */
export function Shot({
  src,
  alt,
  ratio = '16 / 10',
  className = '',
  position = 'left top',
  label,
}: {
  src: string;
  alt: string;
  /** CSS aspect-ratio for the crop box. */
  ratio?: string;
  className?: string;
  /** object-position — move the crop when the interesting part is not top-left. */
  position?: string;
  /** Shown on the placeholder so it is obvious which file is missing. */
  label?: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (!img) return;
    // Already finished and produced no pixels => it 404'd before hydration.
    if (img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden rounded-[8px] border border-black/[0.07] bg-white/70 shadow-[0_2px_8px_-3px_rgba(20,16,31,0.2)] ${className}`}
      style={{ aspectRatio: ratio }}>
      {failed ? (
        <Placeholder src={src} label={label} />
      ) : (
        <img
          ref={ref}
          src={src}
          alt={alt}
          decoding="async"
          onError={() => setFailed(true)}
          className="size-full object-cover"
          style={{ objectPosition: position }}
        />
      )}
    </div>
  );
}

/**
 * Shown until the real export is dropped into public/shots.
 *
 * Deliberately drawn rather than left to the browser: a designed empty state
 * reads as "not finished yet", while a broken-image glyph next to a wall of alt
 * text reads as "this site is broken". It also names the exact file it wants,
 * so whoever is collecting the assets does not have to cross-reference a table.
 */
function Placeholder({ src, label }: { src: string; label?: string }) {
  const name = src.split('/').pop();
  return (
    <div className="grid size-full place-items-center bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(255,255,255,0.4))]">
      {/* Faint UI skeleton, so the empty tile still has the shape of a screen. */}
      <div aria-hidden="true" className="absolute inset-0 p-[7%] opacity-40">
        <div className="h-[12%] w-1/3 rounded bg-ink/10" />
        <div className="mt-[5%] flex gap-[3%]">
          <div className="h-[16%] flex-1 rounded bg-ink/[0.07]" />
          <div className="h-[16%] flex-1 rounded bg-ink/[0.07]" />
          <div className="h-[16%] flex-1 rounded bg-ink/[0.07]" />
        </div>
        <div className="mt-[6%] h-[38%] w-full rounded bg-ink/[0.05]" />
      </div>

      <div className="relative flex flex-col items-center gap-1.5 px-4 text-center">
        <PhotoIcon className="size-5 text-ink/30" />
        <p className="text-[0.6875rem] font-bold tracking-wide text-ink/50">{name}</p>
        {label ? <p className="text-[0.625rem] text-ink/35">{label}</p> : null}
        <p className="text-[0.625rem] text-ink/30">add to public/shots</p>
      </div>
    </div>
  );
}
