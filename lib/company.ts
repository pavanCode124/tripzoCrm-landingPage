/**
 * The facts the Contact page needs, in one place.
 *
 * Same convention as lib/legal.ts: anything still written in [square brackets]
 * is a placeholder, drawn as an amber chip until it is replaced. A contact line
 * whose value is still a placeholder is also not turned into a link, so no
 * visitor can tap a mailto: or tel: that goes nowhere.
 *
 * The registered company name, address and CIN are NOT repeated here; the page
 * reads them from lib/legal.ts so the two can never disagree.
 */

export const CONTACT = {
  salesEmail: 'support@tripzocrm.com',
  salesPhone: '+91 63637 74150',
  /** Shown next to the WhatsApp icon. */
  whatsappDisplay: '+91 63637 74150',
  /** Digits only, with country code and no "+", e.g. 919876543210. Builds the wa.me link. */
  whatsappNumber: '916363774150',
  supportPhone: '+91 63637 74150',
  /** Shown under Support. */
  days: 'Mon–Sat',
};
