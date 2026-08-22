/**
 * A photograph behind a section, treated so text stays readable on top of it.
 *
 * Dropping a photo straight behind near-black copy is the fastest way to make a
 * page look amateur — the text fights the image and both lose. Four layers fix
 * that, and all four are needed:
 *
 *   1. THE IMAGE, desaturated and very slightly blurred. It becomes atmosphere
 *      rather than a picture demanding to be looked at. The blur also hides that
 *      Home_background.png is only 768px wide and is being upscaled past 1480.
 *   2. A WHITE WASH, heavy enough that body copy clears AA contrast. Tunable per
 *      section via `wash`, because a bright sky needs more than a dusk skyline.
 *   3. A VIGNETTE — brightest in the middle, where the words are.
 *   4. AN EDGE FADE to solid canvas top and bottom, so the section dissolves
 *      into the page instead of ending on a hard horizontal seam. This is the
 *      layer people skip, and its absence is what makes a photo section look
 *      pasted in.
 *
 * `position` matters: why_tripzo.png has "TIME TO TRAVEL" baked into the lower
 * third, which would sit under our own heading. Cropping to the upper part of
 * the frame avoids showing two headlines at once.
 */
export function PhotoBackdrop({
  src,
  position = 'center',
  wash = 0.82,
  scale = 1,
}: {
  src: string;
  /** object-position for the crop. */
  position?: string;
  /** 0–1. How much white sits over the photo. Higher = quieter image. */
  wash?: number;
  /** Zoom, for pushing a small source past its natural size deliberately. */
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
          filter: 'saturate(0.72) blur(1.5px)',
        }}
      />

      {/* White wash */}
      <div className="absolute inset-0" style={{ backgroundColor: `rgba(255,255,255,${wash})` }} />

      {/* Vignette — clearest where the copy sits */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_45%,rgba(255,255,255,0.55),transparent_75%)]" />

      {/* Dissolve into the page at both edges */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-canvas to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-canvas via-canvas/70 to-transparent" />
    </div>
  );
}
