import { ArrowRightIcon } from '@/components/ui/icons';

import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WORKFLOW } from '@/lib/content';

/**
 * The four-step story — the page's one full tonal inversion.
 *
 * A white page with no dark section reads flat however good the type is, and a
 * page that inverts three times reads as stripes. Once, in the middle, at the
 * moment the argument turns from "what it is" to "how it works", is the whole
 * trick.
 *
 * No `scroll-mt` here (or on any other section): the single anchor offset lives
 * in `scroll-padding-top` on <html>. Setting both made them add up, which is
 * what left the previous section half on screen after a nav click.
 */
export function Workflow() {
  return (
    <section id="workflow" className="grain relative overflow-hidden bg-dark py-24 sm:py-32">
      {/* Two blooms, kept low-opacity: on near-black these carry the depth that
          a shadow would carry on white. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(113,55,179,0.3),transparent_65%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -bottom-40 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(14,166,114,0.14),transparent_65%)] blur-2xl"
      />

      <div className="shell relative">
        <SectionHeading
          tone="dark"
          eyebrow={WORKFLOW.eyebrow}
          title={WORKFLOW.title}
          accent={WORKFLOW.accent}
          sub={WORKFLOW.sub}
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {WORKFLOW.steps.map((step, i) => (
            <RevealItem key={step.step}>
              <article className="card-edge-dark group relative h-full overflow-hidden p-7 transition-colors duration-200 hover:border-brand-lift/50">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 -right-16 size-48 rounded-full bg-brand-lift/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex items-start justify-between">
                  <span className="text-[2.75rem] leading-none font-extrabold tracking-[-0.04em] text-chalk/15 transition-colors duration-500 group-hover:text-brand-lift/45">
                    {step.step}
                  </span>
                  {/* The last card has nothing to point at, so it loses the arrow. */}
                  {i < WORKFLOW.steps.length - 1 ? (
                    <ArrowRightIcon className="mt-2 size-[18px] text-chalk-faint transition-colors duration-200 group-hover:text-brand-lift" />
                  ) : null}
                </div>

                <h3 className="relative mt-6 text-xl font-bold tracking-tight text-chalk">
                  {step.title}
                </h3>
                <p className="text-body-lg relative mt-3 text-chalk-muted text-pretty">
                  {step.body}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
