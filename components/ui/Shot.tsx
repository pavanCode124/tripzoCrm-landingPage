import Image, { type StaticImageData } from 'next/image';

/**
 * A product screenshot in a browser frame, shown whole.
 *
 * next/image with a static import: the intrinsic size fixes the aspect ratio
 * (nothing is cropped, nothing shifts while loading), a blurred placeholder
 * fills the frame until the file arrives, and the optimiser serves AVIF or WebP
 * at the width the layout actually needs, set by `sizes`.
 *
 * Quality 85 rather than the default 75: these are UI screenshots full of small
 * text, and 75 softens it visibly. The photographs elsewhere stay at 75.
 */
export function Shot({
  src,
  alt,
  sizes,
  chrome = true,
  url = 'app.tripzocrm.com',
  className = '',
  preload = false,
}: {
  src: StaticImageData;
  alt: string;
  /** How wide the frame renders at each breakpoint, so the right file is picked. */
  sizes: string;
  chrome?: boolean;
  url?: string;
  className?: string;
  /** Above-the-fold only: preload instead of lazy-loading. */
  preload?: boolean;
}) {
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

      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        quality={85}
        placeholder="blur"
        preload={preload}
        className="block h-auto w-full"
      />
    </figure>
  );
}
