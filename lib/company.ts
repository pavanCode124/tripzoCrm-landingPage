/**
 * The facts the About and Contact pages need, in one place.
 *
 * Same convention as lib/legal.ts: anything still written in [square brackets]
 * is a placeholder, drawn as an amber chip until it is replaced. A contact line
 * whose value is still a placeholder is also not turned into a link, so no
 * visitor can tap a mailto: or tel: that goes nowhere.
 *
 * The registered company name, address and CIN are NOT repeated here; both
 * pages read them from lib/legal.ts so the two can never disagree.
 */

export const COMPANY = {
  /** About page, "At a glance". */
  founded: '[Year founded]',
  headquarters: '[City, State]',
  /**
   * About page, "Our story": two or three sentences, in your own words, on who
   * started TripzoCRM, when, and what made you build it.
   */
  story: '[Your founding story: who started TripzoCRM, when, and what made you build it. Two or three sentences.]',
};

export const CONTACT = {
  salesEmail: '[Sales email]',
  salesPhone: '[Sales phone, e.g. +91 98765 43210]',
  /** Digits only, with country code and no "+", e.g. 919876543210. Builds the wa.me link. */
  whatsappNumber: '[WhatsApp number, digits only, e.g. 919876543210]',
  supportPhone: '[Support phone]',
  /** Shown under Support. */
  hours: '[Business hours, e.g. Mon–Sat, 10:00–19:00 IST]',
  /** Where visitors can meet you. May differ from the registered office. */
  officeAddress: '[Office address]',
  /** A Google Maps share link for the office. */
  mapUrl: '[Google Maps link]',
};
