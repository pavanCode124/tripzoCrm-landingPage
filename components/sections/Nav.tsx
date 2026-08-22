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
    /*
     * Frosted glass.
     *
     * Three ingredients, and it looks cheap without all three:
     *   - translucency, so the page genuinely shows through;
     *   - `backdrop-blur`, which is the glass itself;
     *   - `backdrop-saturate`, the one people skip. Blurring alone washes the
     *     colour out of whatever is behind it and the bar goes grey and dead.
     *     Pushing saturation back up is what makes a purple hero read as purple
     *     through the glass.
     *
     * The inset white highlight along the top edge is the last touch — real
     * glass catches light on its lip, and a flat translucent panel does not.
     */
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-2xl backdrop-saturate-[180%] transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/50 bg-white/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_10px_30px_-14px_rgba(20,16,31,0.22)]'
          : 'border-b border-white/30 bg-white/40'
      }`}>
      <nav className="shell relative flex h-[76px] items-center justify-between" aria-label="Main">
        <Link href="/" aria-label="TripzoCRM home">
          <Logo size={38} />
        </Link>

        {/* Centre pill — glass too, or it reads as a solid chip stuck on glass. */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/60 bg-white/55 px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_16px_-8px_rgba(20,16,31,0.16)] backdrop-blur-xl lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-[0.8125rem] font-semibold tracking-[0.03em] text-ink-muted uppercase transition-colors hover:bg-brand-wash hover:text-brand xl:px-4 xl:text-[0.9375rem]">
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
          {/*
           * Brand purple, and raised off the glass.
           *
           * The elevation is two shadows, not one: a tight neutral drop that
           * separates the button from the bar, and a wide purple glow that makes
           * it look lit from within. A single grey shadow under a saturated
           * button reads as dirt beneath it rather than light around it.
           */}
          <Link
            href={`${APP_URL}/login`}
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-b from-brand-lift to-brand px-4 text-[0.8125rem] font-bold tracking-[0.03em] text-white uppercase shadow-[0_2px_6px_-1px_rgba(20,16,31,0.18),0_12px_28px_-10px_rgba(113,55,179,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_3px_8px_-1px_rgba(20,16,31,0.2),0_18px_38px_-12px_rgba(113,55,179,0.9)] xl:h-12 xl:px-6 xl:text-[0.9375rem]">
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
            className="border-t border-white/40 bg-white/80 backdrop-blur-2xl backdrop-saturate-[180%] lg:hidden">
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
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-brand-lift to-brand px-6 py-3.5 text-base font-bold tracking-wide text-white uppercase shadow-[0_2px_6px_-1px_rgba(20,16,31,0.18),0_12px_28px_-10px_rgba(113,55,179,0.75)]">
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
