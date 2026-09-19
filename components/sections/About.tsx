import { CheckIcon } from '@/components/ui/icons';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ABOUT } from '@/lib/content';

/**
 * Why a travel-only CRM.
 *
 * The reef runs full-bleed behind the section. A light scrim sits only where
 * the copy is, on the left, and clears toward the right, so the diver and the
 * turtle stay vivid while the text keeps AA contrast. The top and bottom edges
 * fade into the page instead of ending on a hard seam.
 */
export function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden py-28 sm:py-36">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img
          src="/shots/why_tripzo.png"
          alt=""
          loading="lazy"
          className="size-full object-cover object-[70%_40%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,249,253,0.97)_0%,rgba(250,249,253,0.92)_34%,rgba(250,249,253,0.45)_58%,rgba(250,249,253,0)_78%)] max-lg:bg-white/80" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="shell">
        <div className="max-w-xl">
          <SectionHeading align="left" title={ABOUT.title} accent={ABOUT.accent} sub={ABOUT.body} />

          <RevealGroup className="mt-10 space-y-6">
            {ABOUT.pillars.map((pillar) => (
              <RevealItem key={pillar.title}>
                <div className="flex gap-4">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-brand text-white shadow-[0_6px_14px_-6px_rgba(113,55,179,0.7)]">
                    <CheckIcon className="size-4" />
                  </span>
                  <div>
                    <h3 className="text-[1.0625rem] font-semibold text-ink">{pillar.title}</h3>
                    <p className="text-body-lg mt-1 text-pretty text-ink-muted">{pillar.body}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
