import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';

import './globals.css';

/**
 * Two faces, doing two jobs.
 *
 * Instrument Serif carries headlines only — it is the single strongest signal
 * that this is not a stock template, and it is what the reference site uses to
 * the same end. Inter does everything else, because a serif at 15px in a
 * feature card is unreadable.
 *
 * Both are self-hosted by next/font at build time: no render-blocking request
 * to Google, no layout shift, and `display: swap` so text paints immediately.
 */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
