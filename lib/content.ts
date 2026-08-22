/**
 * Every string on the page lives here.
 *
 * Copy changes far more often than layout does, and a marketing page whose
 * wording is scattered across a dozen JSX files is one nobody edits. Sections
 * import from here and render; none of them hardcode a sentence.
 */

export const APP_URL = 'https://www.tripzocrm.com';

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
];

export const HERO = {
  headlinePlain: 'Turn every travel inquiry',
  headlineAccent: 'into a booking.',
  sub: 'TripzoCRM brings your leads, WhatsApp, Instagram, packages, itineraries, invoices and trip profitability into one place — so your agency stops losing inquiries in a thousand unread chats and starts closing them.',
  primaryCta: 'Get started free',
  assurances: ['No credit card required', 'Secure & role-based', 'Built for global agencies'],
};

/**
 * The headline strip.
 *
 * These are the figures the live site already publishes, kept word for word so
 * the two pages do not contradict each other. "10x faster lead response" is a
 * performance claim rather than a capability fact — make sure you can stand
 * behind it, since it is the one number on the page a prospect might ask about.
 */
export const STATS = [
  { value: '10x', label: 'Faster lead response' },
  { value: '1', label: 'Inbox for every channel' },
  { value: '24/7', label: 'Bot-assisted replies' },
  { value: '100%', label: 'Built for travel agencies' },
];

/**
 * The showcase — one full-width look at the actual admin panel.
 *
 * Its own section rather than another card, because a product this broad is
 * best argued by simply showing all of it at once.
 */
export const SHOWCASE = {
  eyebrow: 'The platform',
  title: 'Everything your agency runs on,',
  accent: 'on one screen.',
  sub: 'Leads, bookings, WhatsApp, Instagram, bot flows, packages and reports — live numbers, one login, no tab-hopping between four different tools.',
  shot: '/shots/1.png',
  alt: 'The TripzoCRM admin dashboard, showing tasks due, new leads today, total leads, a lead-sources breakdown and the day’s pulse',
};

/**
 * Feature cards.
 *
 * Titles and copy match the live site's feature grid, so a visitor who has seen
 * one recognises the other. The last card is the exception — "Team Insights"
 * became "Hotels & rates", because that is what the screenshot we have actually
 * shows, and a card whose picture contradicts its heading is worse than no card.
 *
 * `shot` is a numbered file in public/shots. The numbering is positional and
 * matches the order of this array: 1.png is the dashboard in the showcase above,
 * so the cards run 2 through 7. Renaming these to semantic names would read
 * better in code but would break the one-command re-import, which is the thing
 * that actually gets done repeatedly.
 */
export const FEATURES = [
  {
    icon: 'leads',
    tint: 'emerald',
    title: 'Lead Pipeline',
    shot: '/shots/2.png',
    alt: 'The leads table with the pipeline stage rail across the top and per-lead quick actions',
    body: 'Capture every inquiry, assign to agents, and move leads through stages with notes, tags and reminders.',
  },
  {
    icon: 'whatsapp',
    tint: 'green',
    title: 'WhatsApp Inbox',
    shot: '/shots/3.png',
    alt: 'The WhatsApp inbox: chat list, an open conversation, and a scrollable package carousel sent to the customer',
    body: 'Two-way WhatsApp Business conversations attached to each lead, with bot flows for first response.',
  },
  {
    icon: 'instagram',
    tint: 'pink',
    title: 'Instagram DMs',
    shot: '/shots/4.png',
    alt: 'The Instagram inbox with an open DM thread showing a two-card package carousel',
    body: 'Reply to Instagram messages inside the CRM and turn social conversations into qualified leads.',
  },
  {
    icon: 'map',
    tint: 'violet',
    title: 'Packages & Itineraries',
    shot: '/shots/5.png',
    alt: 'A rendered 21-page itinerary document showing a day-by-day timeline with photographs',
    body: 'Build rich packages with day-wise itineraries, hotels, sightseeing and pricing — share a public link.',
  },
  {
    icon: 'bookings',
    tint: 'amber',
    title: 'Bookings & Bills',
    shot: '/shots/6.png',
    alt: 'An invoice on the agency letterhead with billing details and line items',
    body: 'Convert leads into bookings, generate invoices, and track payments from a single timeline.',
  },
  {
    icon: 'hotel',
    tint: 'blue',
    title: 'Hotels & rates',
    shot: '/shots/7.png',
    alt: 'The property list beside a room-rates grid with single, double, triple and child rates',
    body: 'Your own property list with per-room-type rates — single, double, triple, child with and without bed — feeding straight into every quote you build.',
  },
];

export const CHANNELS = [
  {
    key: 'whatsapp',
    name: 'WhatsApp',
    tagline: 'Where your customers already are',
    points: [
      'Two-way Business API conversations, attached to the lead',
      'Instant first reply, then handover the moment an agent types',
      'The 24-hour reply window tracked and flagged before you send',
      'Send packages, brochures and your sales contact card in-chat',
    ],
  },
  {
    key: 'instagram',
    name: 'Instagram',
    tagline: 'Turn every reel into a lead',
    points: [
      'DM automations for every inbound inquiry',
      'Ad keywords route each campaign to the right packages',
      'Shared reels and stories captured with their caption and link',
      'Carousels and quick replies rendered as the customer saw them',
    ],
  },
  {
    key: 'web',
    name: 'Web & forms',
    tagline: 'Nothing arrives without a home',
    points: [
      'Website enquiries land in the same pipeline as chats',
      'Public itinerary and package links, branded to your agency',
      'Manual and referral leads added in seconds',
      'Every source labelled, so you know what your ad spend bought',
    ],
  },
];

/** Wording taken from the live site, so both pages tell the same story. */
export const WORKFLOW = {
  eyebrow: 'The Tripzo flow',
  title: 'From inquiry to itinerary,',
  accent: 'in four clean steps.',
  sub: 'No more sticky notes, Excel sheets and lost WhatsApp threads. Tripzo keeps every conversation, lead and booking in flow.',
  steps: [
    {
      step: '01',
      title: 'Capture',
      body: 'Inquiries from WhatsApp, Instagram, web forms and referrals flow into one inbox.',
    },
    {
      step: '02',
      title: 'Qualify',
      body: 'Agents tag, note, and assign leads. Reminders and tasks keep follow-ups on track.',
    },
    {
      step: '03',
      title: 'Quote',
      body: 'Build a tailored package or pick from your library. Share a beautiful public itinerary link.',
    },
    {
      step: '04',
      title: 'Close',
      body: 'Confirm the booking, capture payments, and hand off to operations — without losing context.',
    },
  ],
};

/**
 * The automation marquee.
 *
 * Two rows running in opposite directions — WhatsApp left, Instagram right.
 * Opposite is the point: two rails moving the same way read as one broken
 * scroll, while counter-motion reads as deliberate and holds the eye without
 * anything having to blink.
 *
 * Eight per row. The row is duplicated in the DOM to make the loop seamless, so
 * every card here is rendered twice — keep the copy short.
 */
export const AUTOMATIONS = {
  eyebrow: 'Automation',
  title: 'Conversations that keep going',
  accent: 'without you.',
  sub: 'The bot handles the messages an agent would send anyway — the first reply, the nudge, the reminder — and steps aside the moment a human starts typing.',
  cta: 'Book a demo',
  whatsapp: [
    {
      title: 'Instant First Reply',
      body: 'Answer within seconds of the first message, day or night, with the trips that match what they asked for.',
    },
    {
      title: 'Quote Follow-Up',
      body: 'Nudge a customer who opened the itinerary and went quiet, a day or two later, without an agent remembering.',
    },
    {
      title: 'Payment Reminder',
      body: 'Chase the balance before departure with the amount, the due date and a link to pay it.',
    },
    {
      title: 'Booking Confirmation',
      body: 'Send trip details, inclusions and cancellation policy the moment a payment lands.',
    },
    {
      title: 'Departure Countdown',
      body: 'What to pack, where to reach and who to call — a few days before the trip starts.',
    },
    {
      title: 'Seats Running Out',
      body: 'Tell everyone who viewed a departure when only a handful of seats are left on it.',
    },
    {
      title: 'Document Collection',
      body: 'Chase IDs, passports and permits on a schedule, and stop asking once they arrive.',
    },
    {
      title: 'Post-Trip Feedback',
      body: 'Ask for the review and share the photo drive once they are home and still glowing.',
    },
  ],
  instagram: [
    {
      title: 'Reel Reply',
      body: 'Every DM that arrives off a reel gets answered with the trip that reel was actually about.',
    },
    {
      title: 'Ad Keyword Match',
      body: 'Read the phrase from your campaign and send the packages assigned to it, instantly.',
    },
    {
      title: 'Story Reply Capture',
      body: 'A story reaction becomes a lead, with the conversation already attached to it.',
    },
    {
      title: 'Package Carousel',
      body: 'Send a swipeable set of trips with prices and a View Itinerary button on each card.',
    },
    {
      title: 'Handover to Agent',
      body: 'The bot goes silent the moment someone on your team starts typing. Nobody talks over anyone.',
    },
    {
      title: 'Window Warning',
      body: 'Flags the 24-hour reply window before it closes on a DM nobody has answered.',
    },
    {
      title: 'Needs-Review Escalation',
      body: 'Anything the bot cannot answer safely goes to a human queue with the reason attached.',
    },
    {
      title: 'Profile-Aware Greeting',
      body: 'Greets by name, and puts their handle and follower count on the agent’s screen.',
    },
  ],
};

export const MOBILE = {
  eyebrow: 'Android & iOS',
  title: 'Your agency,',
  accent: 'in your pocket.',
  body: 'Not a cut-down companion — the same inbox, the same pipeline, the same catalogue. Built for the half of the job that happens away from a desk: replying on the road, closing a lead after a call, and recording what you just spent at a hotel desk.',
  points: [
    { title: 'Push notifications', body: 'A new lead buzzes the right agent, not the whole team.' },
    { title: 'Reply anywhere', body: 'Full WhatsApp and Instagram threads, with takeover.' },
    { title: 'Log expenses on the spot', body: 'At the counter, before the receipt is lost.' },
    { title: 'Instant updates', body: 'Improvements ship over the air — no store, no waiting.' },
  ],
};

export const REPORTS = {
  eyebrow: 'Accountability',
  title: 'The number every owner',
  accent: 'actually asks for.',
  body: 'A report lands every night with three figures per agent: what they closed, what is still theirs to answer, and what they never touched all day. Most CRMs will show you a pipeline. This one tells you who worked it.',
  metrics: [
    { label: 'Closed', hint: 'Booked or lost — an outcome either way.', tone: 'good' },
    { label: 'Pending', hint: 'Still open, still owed an answer.', tone: 'warn' },
    { label: 'Missed', hint: 'Theirs, and untouched all day.', tone: 'bad' },
  ],
};

export const ABOUT = {
  eyebrow: 'Why Tripzo',
  title: "We're building the CRM travel agencies",
  accent: 'actually want to open every morning.',
  body: 'TripzoCRM is purpose-built for travel — not a generic sales tool we bent into shape. Every feature, from WhatsApp threads to day-wise itineraries to trip-level profit, exists because a real agency asked for it.',
  pillars: [
    {
      title: 'Travel-native, not adapted',
      body: 'Packages, departures, seats, itineraries and per-trip margin are first-class records — not custom fields bolted onto a deals table.',
    },
    {
      title: 'Built where the work happens',
      body: 'Your customers message on WhatsApp and Instagram. So the inbox is the product, not an integration sold as an add-on.',
    },
    {
      title: 'Priced for agencies, not enterprises',
      body: 'Start free, pay when your pipeline grows, and keep every feature on every plan that needs it. No per-seat surprises.',
    },
  ],
};

export const PRICING = {
  eyebrow: 'Pricing',
  title: 'Simple, agency-friendly',
  accent: 'pricing.',
  sub: 'Start free. Upgrade when your pipeline grows — not before.',
  plans: [
    {
      name: 'Starter',
      price: 'Free',
      note: 'for 14 days',
      blurb: 'For small agencies trying the platform.',
      features: [
        'Up to 3 team members',
        'Lead pipeline & tasks',
        'WhatsApp inbox (single number)',
        'Packages & public booking pages',
      ],
      cta: 'Start free',
      featured: false,
    },
    {
      name: 'Growth',
      price: 'Contact us',
      note: 'per month',
      blurb: 'For growing agencies running multiple channels.',
      features: [
        'Unlimited team members',
        'WhatsApp + Instagram channels',
        'Itinerary builder & departures',
        'Invoices, payments & reminders',
        'Daily performance reports',
        'Mobile app for the whole team',
      ],
      cta: 'Talk to sales',
      featured: true,
    },
    {
      name: 'Scale',
      price: 'Custom',
      note: 'tailored',
      blurb: 'For multi-branch operators and DMCs.',
      features: [
        'Multi-organization support',
        'Master-admin controls',
        'Trip-level P&L and finance books',
        'Custom integrations & SLAs',
        'Priority onboarding',
      ],
      cta: 'Request a demo',
      featured: false,
    },
  ],
};

export const FAQS = [
  {
    q: 'Do we need a WhatsApp Business API account?',
    a: 'Yes, and we set it up with you during onboarding. Once connected, every conversation flows into TripzoCRM automatically and your existing number keeps working exactly as before.',
  },
  {
    q: 'How long does it take to get up and running?',
    a: 'Most agencies are live within a day. Account setup and your package catalogue take an afternoon; connecting WhatsApp is the only step that depends on Meta approval, and we handle that with you.',
  },
  {
    q: 'Can our whole team work from their phones?',
    a: 'Yes. There is a full mobile app for Android and an installable app for iPhone — the same inbox, pipeline and catalogue as the desktop, with push notifications so a new lead reaches the right agent immediately.',
  },
  {
    q: 'Will this work for a single-person agency?',
    a: 'Yes. The pipeline, the inbox and the itinerary builder are useful on day one with one person. Auto-assignment and the team reports simply have nothing to distribute until you hire.',
  },
  {
    q: 'Can we import our existing leads and packages?',
    a: 'Yes — we handle the migration with you during onboarding, including your package catalogue and any lead history you want to keep.',
  },
  {
    q: 'Is our customer data isolated from other agencies?',
    a: 'Completely. Every record is scoped to your organization at the database level, and access inside your team is controlled by role — an agent sees their work, an admin sees the agency.',
  },
];

export const FINAL_CTA = {
  title: 'Stop losing bookings',
  titleAccent: 'to unread messages.',
  sub: 'Set TripzoCRM up in an afternoon and watch the next inquiry land where you can actually act on it.',
  primary: 'Get started free',
  secondary: 'Book a demo',
};

export const FOOTER = {
  blurb:
    'The travel agency operating system — built to capture every inquiry, qualify every lead, and close every booking in one place.',
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Workflow', href: '#workflow' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'About', href: '#about' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Sign in', href: `${APP_URL}/login` },
        { label: 'Book a demo', href: `${APP_URL}/login` },
        { label: 'Contact', href: `${APP_URL}/login` },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: `${APP_URL}/privacy` },
        { label: 'Terms of Service', href: `${APP_URL}/terms` },
        { label: 'Data Deletion', href: `${APP_URL}/data-deletion` },
      ],
    },
  ],
};
