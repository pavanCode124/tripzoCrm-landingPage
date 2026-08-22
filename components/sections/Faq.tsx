'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from '@/components/ui/icons';
import { useState } from 'react';

import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQS } from '@/lib/content';

/**
 * Accordion.
 *
 * One open at a time — with a long answer expanded, a second one pushes the
 * first off screen and the reader loses their place. The icon rotates rather
 * than swapping between plus and minus, which keeps the row from reflowing by a
 * pixel as it changes.
 *
 * Built on buttons with aria-expanded rather than <details>, because the height
 * animation needs a measured value and `open` gives no way to tween it.
 */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-edge relative py-24 sm:py-32">
      <div className="shell">
        <SectionHeading eyebrow="Questions" title="The things agencies" accent="always ask." />

        <div className="mx-auto mt-14 max-w-3xl">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 0.04}>
                <div
                  className={`mb-3 overflow-hidden rounded-[10px] border transition-colors duration-200 ${
                    isOpen
                      ? 'border-brand/25 bg-brand-wash/45'
                      : 'border-hairline bg-canvas hover:border-hairline-strong'
                  }`}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left">
                    <span
                      className={`text-[1.0625rem] font-semibold text-balance transition-colors ${
                        isOpen ? 'text-brand' : 'text-ink'
                      }`}>
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`mt-1 shrink-0 ${isOpen ? 'text-brand' : 'text-ink-faint'}`}>
                      <PlusIcon className="size-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="overflow-hidden">
                        <p className="text-body-lg px-6 pr-12 pb-6 text-ink-muted text-pretty">
                          {faq.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
