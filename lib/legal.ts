/**
 * The facts both legal pages depend on, in one place.
 *
 * Any value still written in [square brackets] is a placeholder, and the pages
 * draw it as an amber chip so it cannot go live unnoticed. Replace the bracketed
 * text with the real value and the chip turns into ordinary text on its own.
 *
 * The few placeholders that are a decision about the product rather than a
 * value (does the bot use an AI service, what happens when a customer deletes a
 * message) live in the page files themselves, each marked `PLACEHOLDER:`.
 */

export const LEGAL = {
  /** Shown in the page header and the footer line of each document. */
  effectiveDate: '21 September 2026',
  version: '2.1',

  entityName: '[Legal Entity Name]',
  cin: '[CIN]',
  gstin: '[GSTIN]',
  registeredAddress: '[Registered Office Address]',
  /** Seat of arbitration and the courts with jurisdiction. */
  jurisdictionCity: '[City]',
  phone: '[Phone]',

  supportEmail: 'support@tripzocrm.com',
  privacyEmail: '[Privacy email]',
  securityEmail: '[Security email]',
  billingEmail: '[Billing email]',
  legalEmail: '[Legal email]',

  grievanceOfficer: {
    name: '[Grievance Officer name]',
    email: '[Grievance email]',
    phone: '[Grievance phone]',
  },

  /** Where the database and servers run. CERT-In expects logs kept in India. */
  dataRegion: '[Region]',
  hostingProvider: '[Hosting provider]',
  paymentProcessor: '[Payment processor]',
  /** Product-diagnostics retention in months. */
  telemetryRetention: '[12 or 24] months',

  billing: {
    frequency: '[monthly / quarterly / yearly]',
    dueDays: '[7]',
    suspendAfterDays: '[15]',
    liabilityCapMonths: '[12]',
  },
} as const;

/** True while a value is still an unfilled placeholder. */
export function isPlaceholder(value: string): boolean {
  return value.startsWith('[') && value.includes(']');
}
