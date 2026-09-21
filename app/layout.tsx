import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google';

import './globals.css';

/**
 * Two faces, two jobs.
 *
 * Plus Jakarta Sans is the product's own UI face (the mobile app ships it), so
 * every sentence on this page is set in the same letters an agent will read in
 * the CRM on day one.
 *
 * Bricolage Grotesque carries the headings. It is a grotesque with an optical
 * size axis: at display sizes the counters tighten and the terminals sharpen, so
 * a 72px headline looks drawn rather than scaled up. It replaced a display serif,
 * which read editorial on a page that is selling software.
 */
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
});

const SITE = 'https://www.tripzocrm.com';
const TITLE = 'TripzoCRM | The CRM built for travel agencies';
const DESCRIPTION =
  'Leads, WhatsApp, Instagram, packages, itineraries, invoices and trip profit in one place. Built end to end for travel agencies, so no inquiry is ever lost again.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: '%s | TripzoCRM',
  },
  description: DESCRIPTION,
  keywords: [
    'travel agency CRM',
    'WhatsApp CRM',
    'Instagram DM CRM',
    'tour operator software',
    'travel booking software',
    'itinerary builder',
    'lead management for travel agencies',
  ],
  openGraph: {
    type: 'website',
    url: SITE,
    siteName: 'TripzoCRM',
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // data-scroll-behavior: the CSS makes in-page anchor jumps smooth; this tells
    // Next.js to suspend that during page navigation, so a new page opens at
    // its top instantly instead of gliding there (the Next 15 default, opt-in
    // since 16).
    <html lang="en" data-scroll-behavior="smooth" className={`${jakarta.variable} ${bricolage.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
