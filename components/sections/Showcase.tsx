import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Shot } from '@/components/ui/Shot';
import { SHOWCASE } from '@/lib/content';

/**
 * One full-width look at the real admin panel.
 *
 * The frame sits on a blurred colour mesh — the trick the reference site uses,
 * where a screenshot floats on an out-of-focus photograph. A photograph would
 * mean an asset, a licence and 400KB; four overlapping radial gradients under a
 * heavy blur read the same at a fraction of the cost, and they can be tuned to
 * the brand instead of fighting it.
 *
 * The window bleeds off the BOTTOM of its backdrop rather than being centred in
 * it. A screenshot with even margins reads as a slide; one that runs out of the
 * frame reads as a window onto something larger.
 */
export function Showcase() {
  return (
    <section id="platform" className="section-edge relative overflow-hidden py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow={SHOWCASE.eyebrow}
          title={SHOWCASE.title}
          accent={SHOWCASE.accent}
          sub={SHOWCASE.sub}
        />

        <Reveal delay={0.12} y={34}>
          {/* Narrower than the page gutter: at full width the mesh behind it
              became the loudest thing on the page, which is backwards. */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            {/* Blurred colour mesh */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden rounded-[16px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6] via-[#38bdf8] to-[#2dd4bf]" />
              <div className="absolute -top-1/4 -left-1/5 size-[70%] rounded-full bg-[#e879f9] opacity-70 blur-[90px]" />
              <div className="absolute top-1/3 -right-1/5 size-[65%] rounded-full bg-[#7137b3] opacity-75 blur-[90px]" />
              <div className="absolute -bottom-1/4 left-1/4 size-[60%] rounded-full bg-[#22d3ee] opacity-55 blur-[90px]" />
              {/* Darkened toward the bottom so the white window keeps contrast
                  where it overlaps the brightest part of the mesh. */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {/* The window. Padded on three sides, open at the bottom. */}
            <div className="relative px-4 pt-8 sm:px-8 sm:pt-12 lg:px-14 lg:pt-14">
              <div className="overflow-hidden rounded-t-[12px] border border-white/25 bg-canvas shadow-[0_20px_50px_-24px_rgba(10,8,20,0.5)]">
                <div className="flex items-center gap-2 border-b border-hairline bg-surface-2 px-4 py-3">
                  <span className="size-3 rounded-full bg-[#ff5f57]" />
                  <span className="size-3 rounded-full bg-[#febc2e]" />
                  <span className="size-3 rounded-full bg-[#28c840]" />
                  <span className="mx-auto hidden rounded-[6px] border border-hairline bg-canvas px-4 py-1 text-[0.75rem] text-ink-faint sm:block">
                    app.tripzocrm.com/admin
                  </span>
                </div>

                <Shot
                  src={SHOWCASE.shot}
                  alt={SHOWCASE.alt}
                  ratio="1900 / 860"
                  position="left top"
                  label="Admin dashboard"
                  className="!rounded-none !border-0 !shadow-none"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
