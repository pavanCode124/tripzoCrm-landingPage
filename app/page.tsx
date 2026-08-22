import { About } from '@/components/sections/About';
import { Automations } from '@/components/sections/Automations';
import { Channels } from '@/components/sections/Channels';
import { Faq } from '@/components/sections/Faq';
import { Features } from '@/components/sections/Features';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/Hero';
import { Mobile } from '@/components/sections/Mobile';
import { Nav } from '@/components/sections/Nav';
import { Pricing } from '@/components/sections/Pricing';
import { Reports } from '@/components/sections/Reports';
import { Showcase } from '@/components/sections/Showcase';
import { Stats } from '@/components/sections/Stats';
import { Workflow } from '@/components/sections/Workflow';

/**
 * The landing page.
 *
 * Order is an argument, not a menu:
 *
 *   Hero        what this is, and the product on screen immediately
 *   Stats       the headline figures
 *   Showcase    the whole admin panel, once, full width
 *   Features    what you get — each card carrying its own screenshot
 *   Channels    where the leads come from — the reader's actual problem
 *   Workflow    how it works — the first of two dark bands
 *   Reports     the sharpest differentiator, once they believe the basics
 *   Automations what runs without anyone — the page's second dark band
 *   Mobile      the second differentiator
 *   Pricing     the ask, only after all of the above
 *   About       who is behind it, for the reader still deciding on trust
 *   FAQ         the objections that survive the pitch
 *   CTA         one clear exit
 *
 * Tonal rhythm matters as much as the order. The two DARK bands (Workflow and
 * Automations) are deliberately kept apart by the white Reports section — put
 * them adjacent and they merge into one long unlit stretch, which is the single
 * easiest way to make a light page look unfinished.
 */
export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Showcase />
        <Features />
        <Channels />
        <Workflow />
        <Reports />
        <Automations />
        <Mobile />
        <Pricing />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
