'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Sparkles, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Logo } from '@/components/ui/Logo';
import { APP_URL, NAV_LINKS } from '@/lib/content';

/**
 * Header.
 *
 * Three zones, as in the reference: mark and strapline left, a floating pill of
 * links dead centre, sign-in and the dark CTA right. The pill is what keeps the
 * nav from reading as a plain bar — it is a component sitting ON the page
 * rather than a strip ruled across it.
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-hairline bg-canvas/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-canvas/60 backdrop-blur-sm'
      }`}>
      <nav className="shell relative flex h-[76px] items-center justify-between" aria-label="Main">
        <Link href="/" aria-label="TripzoCRM home">
          <Logo size={38} />
        </Link>

        {/* Centre pill */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-hairline bg-canvas px-2 py-1.5 shadow-[0_2px_14px_-6px_rgba(20,16,31,0.14)] lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[0.9375rem] font-semibold tracking-[0.03em] text-ink-muted uppercase transition-colors hover:bg-brand-wash hover:text-brand">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href={`${APP_URL}/login`}
            className="text-[0.9375rem] font-semibold tracking-[0.03em] text-ink uppercase transition-colors hover:text-brand">
            Sign in
          </Link>
          <Link
            href={`${APP_URL}/login`}
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[0.9375rem] font-bold tracking-[0.03em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand hover:shadow-[0_12px_28px_-10px_rgba(113,55,179,0.75)]">
            <Sparkles size={16} className="transition-transform duration-500 group-hover:rotate-90" />
            Start free
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 rounded-lg p-2 text-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="border-t border-hairline bg-canvas lg:hidden">
            <div className="shell flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3.5 text-lg font-semibold tracking-wide text-ink-muted uppercase transition-colors hover:bg-brand-wash hover:text-brand">
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href={`${APP_URL}/login`}
                  className="inline-flex h-13 items-center justify-center rounded-full border border-hairline-strong px-6 py-3.5 text-base font-bold tracking-wide text-ink uppercase">
                  Sign in
                </Link>
                <Link
                  href={`${APP_URL}/login`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-bold tracking-wide text-white uppercase">
                  <Sparkles size={17} />
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
