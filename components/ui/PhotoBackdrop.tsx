/**
 * A photograph behind a section.
 *
 * FIRST ATTEMPT WAS WRONG, and the fix is worth recording. The original put a
 * heavy flat white wash over the whole frame plus a blur, which did guarantee
 * text contrast — and left the photo a pale grey smear nobody could make out.
 * Washing the entire image to protect text that occupies a third of it trades
 * the whole picture for a problem that only exists in the middle.
 *
 * So the scrim is now LOCAL, not global:
 *
 *   1. The image runs near full strength — no blur, barely any desaturation.
 *      It should look like a photograph, because that is the point of it.
 *   2. A soft white ELLIPSE sits behind the text column only. Opaque at the
 *      centre where the words are, gone by the edges, so the mountains and sky
 *      stay vivid in the corners.
 *   3. A light overall veil takes the edge off contrast without flattening it.
 *   4. Edge fades top and bottom dissolve the section into the page, so it does
 *      not end on a hard horizontal seam.
 *
 * `position` matters: why_tripzo.png has "TIME TO TRAVEL" baked into its lower
 * third, which would sit under our own heading. Cropping high avoids showing
 * two headlines at once.
 */
export function PhotoBackdrop({
  src,
  position = 'center',
  /** The soft ellipse behind the copy. Raise it only if text lands on a busy
      part of the photograph — it is also the knob that hides the subject. */
  spotlight = 0.6,
  /** Light overall veil. Keep low — this is what flattened the picture before. */
  veil = 0.1,
  scale = 1,
}: {
  src: string;
  position?: string;
  spotlight?: number;
  veil?: number;
  scale?: number;
}) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <img
        src={src}
        alt=""
        className="size-full object-cover"
        style={{
          objectPosition: position,
          transform: scale === 1 ? undefined : `scale(${scale})`,
          /*
           * Both sources are small and are being upscaled well past their native
           * width, which reads as mush. Nothing in CSS adds detail back, but
           * lifting local contrast and saturation makes the edges that DO exist
           * assert themselves, and that is most of what "sharp" looks like.
           */
          filter: 'saturate(1.14) contrast(1.16) brightness(1.02)',
        }}
      />

      {/* Light overall veil */}
      <div className="absolute inset-0" style={{ backgroundColor: `rgba(255,255,255,${veil})` }} />

      {/*
       * The local scrim.
       *
       * Tuned narrow and low on purpose. The first version was a 58%-wide
       * ellipse at 0.92 opacity, which did protect the text — and painted out
       * the paraglider, the one thing in the photograph worth seeing. The text
       * column is only ~40% of the page width, so the scrim has no business
       * being wider than that, and the sky behind the copy is already bright
       * enough that it does not need to be near-opaque either.
       */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 42% 34% at 50% 34%, rgba(255,255,255,${spotlight}) 0%, rgba(255,255,255,${spotlight * 0.7}) 55%, rgba(255,255,255,0) 82%)`,
        }}
      />

      {/* Dissolve into the page */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-canvas via-canvas/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-canvas via-canvas/85 to-transparent" />
    </div>
  );
}
