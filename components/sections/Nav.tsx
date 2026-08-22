'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@/components/ui/icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Logo } from '@/components/ui/Logo';
import { APP_URL, NAV_LINKS } from '@/lib/content';

/**
 * Header.
 *
 * Three zones: mark and strapline left, a block of links dead centre, sign-in
 * and the CTA right. Every shape is a rectangle with a small radius — pills read
 * as consumer app, squared corners read as a tool.
 *
 * The centre pill is absolutely positioned rather than being the middle cell of
 * a flex row: the left and right groups have very different widths, so a flex
 * `justify-between` would push the links off-centre by the difference. Absolute
 * centring makes it independent of both.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    /*
     * Solid bar, lightly frosted.
     *
     * Mostly opaque white rather than heavy glass: the hero behind it is now a
     * photograph, and a very translucent bar over a busy image makes the
     * wordmark hard to read. Enough blur and saturation remain that the picture
     * is felt through it without competing.
     */
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl backdrop-saturate-[160%] transition-colors duration-200 ${
        scrolled
          ? 'border-b border-hairline bg-white/92'
          : 'border-b border-white/40 bg-white/75'
      }`}>
      <nav className="shell relative flex h-[76px] items-center justify-between" aria-label="Main">
        <Link href="/" aria-label="TripzoCRM home">
          <Logo size={38} />
        </Link>

        {/* Centre block. Squared to match the buttons either side of it. */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-[10px] border border-hairline bg-white/70 p-1 backdrop-blur-md lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-[7px] px-3 py-2 text-[0.8125rem] font-semibold tracking-[0.03em] text-ink-muted uppercase transition-colors duration-200 hover:bg-brand-wash hover:text-brand xl:px-4 xl:text-[0.9375rem]">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex xl:gap-5">
          <Link
            href={`${APP_URL}/login`}
            className="text-[0.8125rem] font-semibold tracking-[0.03em] text-ink uppercase transition-colors hover:text-brand xl:text-[0.9375rem]">
            Sign in
          </Link>
          {/* Flat brand fill, no icon, no lift. Hover darkens and nothing else. */}
          <Link
            href={`${APP_URL}/login`}
            className="inline-flex h-11 items-center rounded-[10px] bg-brand px-5 text-[0.8125rem] font-bold tracking-[0.04em] text-white uppercase transition-colors duration-200 hover:bg-brand-deep xl:px-6 xl:text-[0.875rem]">
            Start free
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
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="border-t border-hairline bg-white/95 backdrop-blur-xl lg:hidden">
            <div className="shell flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[10px] px-3 py-3.5 text-lg font-semibold tracking-wide text-ink-muted uppercase transition-colors duration-200 hover:bg-brand-wash hover:text-brand">
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href={`${APP_URL}/login`}
                  className="inline-flex h-13 items-center justify-center rounded-[10px] border border-hairline-strong px-6 py-3.5 text-base font-bold tracking-wide text-ink uppercase transition-colors duration-200 hover:bg-surface-2">
                  Sign in
                </Link>
                <Link
                  href={`${APP_URL}/login`}
                  className="inline-flex items-center justify-center rounded-[10px] bg-brand px-6 py-3.5 text-base font-bold tracking-wide text-white uppercase transition-colors duration-200 hover:bg-brand-deep">
                  Start free
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
