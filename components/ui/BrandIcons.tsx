import type { SVGProps } from 'react';

/**
 * Channel marks, drawn here rather than imported.
 *
 * lucide-react dropped its brand icons at v1 (trademark), so WhatsApp and
 * Instagram have to come from somewhere. These are simple geometric glyphs used
 * purely to label which inbox a thing belongs to — the same job the icons do in
 * the product itself.
 *
 * `currentColor` throughout, so a caller tints them by setting text colour and
 * the same glyph works on a dark card, a cream panel and a coloured chip.
 */

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function WhatsAppIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...rest}>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 18.14h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.18 8.18 0 0 1-1.26-4.39c0-4.54 3.7-8.23 8.23-8.23 2.2 0 4.26.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Z" />
      <path d="M16.56 14.05c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.16 0-.43.06-.65.31-.22.25-.85.84-.85 2.03 0 1.2.87 2.35.99 2.51.12.17 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Generic web/globe mark, so the three channel cards share one visual family. */
export function WebIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19" />
      <path d="M12 2.5c2.4 2.6 3.7 6 3.7 9.5s-1.3 6.9-3.7 9.5c-2.4-2.6-3.7-6-3.7-9.5S9.6 5.1 12 2.5Z" />
    </svg>
  );
}

/**
 * Store marks for the app badges.
 *
 * Apple's mark is a single filled path so it tints with `currentColor` like the
 * channel glyphs above. Google Play is four flat triangular facets and cannot
 * be recoloured — its brand colours ARE the mark — so it ignores currentColor.
 */
export function AppleIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M16.37 12.78c-.02-2.2 1.79-3.26 1.87-3.31-1.02-1.49-2.6-1.7-3.17-1.72-1.35-.14-2.63.79-3.32.79-.68 0-1.73-.77-2.85-.75-1.47.02-2.82.85-3.58 2.16-1.52 2.65-.39 6.57 1.1 8.72.73 1.05 1.6 2.23 2.74 2.19 1.1-.05 1.52-.71 2.85-.71 1.33 0 1.71.71 2.87.69 1.19-.02 1.94-1.07 2.66-2.13.84-1.22 1.19-2.4 1.21-2.46-.03-.01-2.32-.89-2.34-3.53ZM14.2 6.24c.6-.74 1.01-1.75.9-2.77-.87.04-1.93.58-2.56 1.31-.56.65-1.05 1.69-.92 2.68.97.08 1.96-.49 2.58-1.22Z" />
    </svg>
  );
}

export function GooglePlayIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...rest}>
      <path d="M3.6 2.4a1.1 1.1 0 0 0-.5.93v17.34c0 .38.19.72.5.93l9.2-9.6-9.2-9.6Z" fill="#00d2ff" />
      <path d="M16.44 8.65 5.02 2.2l-.2-.11a1.1 1.1 0 0 0-1.22.31l9.2 9.6 3.64-3.35Z" fill="#00e07b" />
      <path d="M20.44 10.9l-4-2.25-3.64 3.35 3.64 3.35 4-2.26a1.36 1.36 0 0 0 0-2.19Z" fill="#ffc400" />
      <path d="M3.6 21.6a1.1 1.1 0 0 0 1.22.31l.2-.11 11.42-6.45-3.64-3.35-9.2 9.6Z" fill="#ff3a44" />
    </svg>
  );
}

/** Meta's infinity mark, credited in the footer as the messaging tech provider. */
export function MetaIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M6.3 6c-1.9 0-3.3 1.4-4 3.3A11 11 0 0 0 1.7 13c0 1.5.3 2.7.9 3.5.6.8 1.4 1.2 2.4 1.2 1.2 0 2.1-.5 2.9-1.4.8-1 1.5-2.2 2.4-3.9l1-1.9c.2-.4.4-.8.7-1.2l1.3 2.2 1 1.7c1 1.7 1.7 2.9 2.5 3.7.8.6 1.6 1 2.6 1s1.9-.4 2.4-1.2c.6-.8.9-2 .9-3.5 0-1.3-.2-2.6-.6-3.7C21.4 7.4 20 6 18.1 6c-1.1 0-2.1.4-3 1.2-.7.6-1.4 1.4-2.1 2.4l-.5.8-.6-1c-.7-1-1.3-1.7-2-2.3C9.1 6.4 8.1 6 7 6h-.7Zm.3 2.1c.6 0 1.2.2 1.8.7.4.4 1 1 1.5 1.8l.5.8-1 1.7c-.7 1.3-1.3 2.2-1.7 2.7-.5.5-.9.7-1.4.7-.4 0-.8-.2-1-.6-.3-.5-.5-1.2-.5-2.2 0-1 .2-2 .5-2.8.4-1.1 1-1.8 1.8-1.8h-.5Zm11.2 0c.9 0 1.5.7 1.9 1.8.3.9.5 1.8.5 2.8 0 1-.2 1.7-.5 2.2-.2.4-.6.6-1 .6-.5 0-.9-.2-1.4-.8-.5-.5-1.1-1.5-1.8-2.7l-1-1.7.5-.8c.6-.8 1.1-1.4 1.6-1.8.4-.4.8-.6 1.2-.6Z" />
    </svg>
  );
}
