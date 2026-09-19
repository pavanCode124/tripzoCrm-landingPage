'use client';

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@/components/ui/icons';
import { Logo } from '@/components/ui/Logo';
import { CTA, NAV_LINKS, SIGNUP_URL } from '@/lib/content';

/**
 * Header.
 *
 * Transparent over the hero, frosted once the page moves under it. The scroll
 * position comes from Motion's `useScroll`, which batches reads, instead of a
 * raw scroll listener setting state on every frame.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 12));

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        open
          ? 'border-b border-line bg-white'
          : scrolled
            ? 'border-b border-line bg-white/80 backdrop-blur-xl backdrop-saturate-150'
            : 'border-b border-transparent'
      }`}>
      <nav className="shell relative flex h-[72px] items-center justify-between" aria-label="Main">
        <Link href="/" aria-label="TripzoCRM home" className="rounded-[10px]">
          <Logo size={36} />
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-[10px] px-3.5 py-2 text-[0.9375rem] font-medium text-ink-muted transition-colors duration-200 hover:bg-canvas-3 hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={SIGNUP_URL}
            className="rounded-[10px] px-3.5 py-2 text-[0.9375rem] font-medium text-ink-muted transition-colors hover:text-ink">
            {CTA.signin}
          </Link>
          <Link
            href={SIGNUP_URL}
            className="btn-primary inline-flex h-10 items-center rounded-[11px] px-5 text-[0.9375rem] font-semibold">
            {CTA.signup}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 rounded-lg p-2 text-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}>
          {open ? <XMarkIcon className="size-6" /> : <Bars3Icon className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6, transition: { duration: 0.15 } }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="h-[calc(100svh-72px)] border-t border-line lg:hidden">
            <div className="shell flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display rounded-[12px] px-3 py-3 text-2xl font-semibold text-ink transition-colors hover:bg-canvas-3">
                  {link.label}
                </a>
              ))}
              <div className="mt-6 grid gap-3">
                <Link
                  href={SIGNUP_URL}
                  className="btn-press inline-flex h-12 items-center justify-center rounded-[12px] border border-line-strong text-base font-semibold text-ink">
                  {CTA.signin}
                </Link>
                <Link
                  href={SIGNUP_URL}
                  className="btn-primary inline-flex h-12 items-center justify-center rounded-[12px] text-base font-semibold">
                  {CTA.signup}
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
