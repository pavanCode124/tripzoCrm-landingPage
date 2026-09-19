import { About } from '@/components/sections/About';
import { Automations } from '@/components/sections/Automations';
import { Channels } from '@/components/sections/Channels';
import { Faq } from '@/components/sections/Faq';
import { Features } from '@/components/sections/Features';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/Hero';
import { LeadFlow } from '@/components/sections/LeadFlow';
import { Mobile } from '@/components/sections/Mobile';
import { Nav } from '@/components/sections/Nav';
import { Pricing } from '@/components/sections/Pricing';
import { Reports } from '@/components/sections/Reports';
import { Showcase } from '@/components/sections/Showcase';

/**
 * The landing page. Order is an argument, not a menu:
 *
 *   Hero         the claim, the four figures behind it, conversations flowing in
 *   Showcase     the real dashboard, standing up on scroll
 *   LeadFlow     how a lead becomes a booking: the page's one big moment
 *   Features     the six modules, each with its real screenshot
 *   Channels     where the leads come from, one channel at a time
 *   Automations  what runs without anyone
 *   Reports      the owner's differentiator
 *   Mobile       the agent's differentiator
 *   Pricing      the ask, after all of the above
 *   About        why a travel-only CRM, for the reader deciding on trust
 *   FAQ          the objections that survive the pitch
 *   FinalCta     one clear exit
 *
 * Every section uses a different layout family (split, strip, pinned board,
 * bento, tabs, marquee, split, split, tiers, photo band, two-column list,
 * slab), so the page never repeats a shape back to back more than twice.
 */
export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Showcase />
        <LeadFlow />
        <Features />
        <Channels />
        <Automations />
        <Reports />
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
