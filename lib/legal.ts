/**
 * The facts the legal, About and Contact pages depend on, in one place.
 *
 * Any value still written in [square brackets] is a placeholder, and the pages
 * draw it as an amber chip so it cannot go live unnoticed. Replace the bracketed
 * text with the real value and the chip turns into ordinary text on its own.
 */

export const LEGAL = {
  /** Shown in the page header and the footer line of each legal document. */
  effectiveDate: '22 September 2026',

  /** About and Contact pages only. */
  entityName: '[Legal Entity Name]',
  registeredAddress: '[Registered Office Address]',

  supportEmail: 'support@tripzocrm.com',

  /** Contact page only. */
  grievanceOfficer: {
    name: '[Grievance Officer name]',
    email: '[Grievance email]',
    phone: '[Grievance phone]',
  },
} as const;

/** True while a value is still an unfilled placeholder. */
export function isPlaceholder(value: string): boolean {
  return value.startsWith('[') && value.includes(']');
}
