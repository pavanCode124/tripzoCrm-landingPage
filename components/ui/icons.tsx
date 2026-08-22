/**
 * Every icon on the page, re-exported from ONE place.
 *
 * The set is Heroicons v2 (by the Tailwind team), which replaced lucide. Routing
 * them through this module rather than importing from `@heroicons/react/...`
 * across a dozen files is the whole point: swapping icon libraries again becomes
 * an edit to this file instead of a search-and-replace across the codebase — a
 * lesson from the lucide swap, which touched twelve files.
 *
 * Outline is the default. Heroicons' outline is drawn on a 24px grid at 1.5
 * stroke, which is lighter and more composed than a solid glyph at these sizes;
 * solid is reserved for the tick, where a 14px outline check reads as a smudge.
 *
 * The two brand marks are ours — no icon library ships WhatsApp or Instagram
 * any more, for trademark reasons.
 */
export {
  ArrowRightIcon,
  ArrowUpRightIcon,
  Bars3Icon,
  BellIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  DocumentTextIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  MapIcon,
  PaperAirplaneIcon,
  PhotoIcon,
  PlusIcon,
  Squares2X2Icon,
  UsersIcon,
  WalletIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

// Solid, deliberately: a tick is small and needs the weight to register.
export { CheckIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

export { InstagramIcon, WebIcon, WhatsAppIcon } from '@/components/ui/BrandIcons';
