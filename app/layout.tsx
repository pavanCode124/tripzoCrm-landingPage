import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google';

import './globals.css';

/**
 * Two faces, doing two jobs.
 *
 * Plus Jakarta Sans replaced Inter for the UI. Inter is the default of every
 * SaaS template on the internet, which is exactly the problem — it is
 * competent and completely anonymous. Jakarta is geometric with a taller
 * x-height and genuinely distinctive letterforms (the single-storey 'a' at
 * weight 800, the flat-sided 'o'), so headings set in it look designed rather
 * than typed. Its numerals are also better proportioned, which matters on a
 * page whose loudest elements are "10x" and "24/7".
 *
 * Instrument Serif still carries the italic display accents and nothing else.
 *
 * Both are self-hosted by next/font at build time: no render-blocking request
 * to Google, no layout shift, and `display: swap` so text paints immediately.
 */
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-custom',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-instrument',
});

const SITE = 'https://www.tripzocrm.com';
const TITLE = 'TripzoCRM — The Travel Agency Operating System';
const DESCRIPTION =
  'Leads, WhatsApp, Instagram, packages, itineraries, invoices and trip P&L in one place. Built end to end for travel agencies — so no inquiry is ever lost again.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: '%s · TripzoCRM',
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
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
