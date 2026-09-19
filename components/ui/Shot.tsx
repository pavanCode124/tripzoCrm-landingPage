'use client';

import { useEffect, useRef, useState } from 'react';

import { PhotoIcon } from '@/components/ui/icons';

/**
 * A product screenshot in a browser frame, shown whole.
 *
 * The box takes the image's own aspect ratio (`w` / `h`), so nothing is ever
 * cropped or stretched: what the reader sees is exactly what was exported.
 * Cropping to a fixed ratio is what cut the tables and inboxes off mid-row.
 *
 * WHY THE MOUNT CHECK: the markup is server-rendered, so a 404 can fire its
 * error event before React hydrates and `onError` never runs. The effect
 * re-checks the node: finished loading with zero natural width means it failed.
 */
export function Shot({
  src,
  alt,
  w,
  h,
  chrome = true,
  url = 'app.tripzocrm.com',
  className = '',
  priority = false,
}: {
  src: string;
  alt: string;
  /** Natural pixel size of the file, which sets the frame's aspect ratio. */
  w: number;
  h: number;
  chrome?: boolean;
  url?: string;
  className?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  return (
    <figure
      className={`overflow-hidden rounded-[14px] border border-line bg-white shadow-[0_1px_2px_rgba(18,15,28,0.05),0_18px_40px_-22px_rgba(63,29,107,0.35)] ${className}`}>
      {chrome ? (
        <div className="flex items-center gap-1.5 border-b border-line bg-canvas-2 px-3.5 py-2">
          <span className="size-2 rounded-full bg-[#ff5f57]" />
          <span className="size-2 rounded-full bg-[#febc2e]" />
          <span className="size-2 rounded-full bg-[#28c840]" />
          <span className="mx-auto hidden rounded-[6px] border border-line bg-white px-3 py-0.5 text-[0.625rem] text-ink-faint sm:block">
            {url}
          </span>
        </div>
      ) : null}

      <div className="relative" style={{ aspectRatio: `${w} / ${h}` }}>
        {failed ? (
          <div className="grid size-full place-items-center bg-canvas-2 text-center">
            <div className="flex flex-col items-center gap-1.5">
              <PhotoIcon className="size-5 text-ink-faint" />
              <p className="text-[0.6875rem] font-semibold text-ink-faint">{src.split('/').pop()}</p>
            </div>
          </div>
        ) : (
          <img
            ref={ref}
            src={src}
            alt={alt}
            width={w}
            height={h}
            decoding="async"
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : undefined}
            onError={() => setFailed(true)}
            className="block size-full object-contain"
          />
        )}
      </div>
    </figure>
  );
}
