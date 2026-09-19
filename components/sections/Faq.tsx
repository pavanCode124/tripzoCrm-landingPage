'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { PlusIcon } from '@/components/ui/icons';
import { EASE_OUT, Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQS } from '@/lib/content';

/**
 * Questions, one open at a time.
 *
 * Heading on the left, held in place while the list scrolls past it on large
 * screens; the answers on the right. The icon rotates rather than swapping, so
 * the row never reflows by a pixel as it changes.
 */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-edge relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_55%_at_10%_30%,rgba(155,93,229,0.12),transparent_70%),radial-gradient(ellipse_40%_40%_at_95%_90%,rgba(245,163,199,0.12),transparent_70%)]"
      />
      <div className="relative shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading align="left" title="The things agencies" accent="always ask." />
        </div>

        <Reveal delay={0.08}>
          <div className="divide-y divide-line border-y border-line">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left">
                      <span
                        className={`text-[1.0625rem] font-semibold text-balance transition-colors duration-200 ${
                          isOpen ? 'text-ink' : 'text-ink-muted hover:text-ink'
                        }`}>
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: EASE_OUT }}
                        className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border ${
                          isOpen ? 'border-brand/40 text-brand' : 'border-line-strong text-ink-faint'
                        }`}>
                        <PlusIcon className="size-4" />
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`faq-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE_OUT }}
                        className="overflow-hidden">
                        <p className="text-body-lg max-w-[62ch] pr-12 pb-6 text-pretty text-ink-muted">{faq.a}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
