/**
 * Every string on the page lives here.
 *
 * Copy changes far more often than layout does, and a marketing page whose
 * wording is scattered across a dozen JSX files is one nobody edits. Sections
 * import from here and render; none of them hardcode a sentence.
 */

export const APP_URL = 'https://www.tripzocrm.com';
export const SIGNUP_URL = `${APP_URL}/login`;

/** One label per intent, used everywhere on the page. */
export const CTA = {
  signup: 'Start free',
  demo: 'Book a demo',
  signin: 'Sign in',
};

export const NAV_LINKS = [
  { label: 'Pipeline', href: '#pipeline' },
  { label: 'Features', href: '#features' },
  { label: 'Channels', href: '#channels' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

/** The product section under the hero: the dashboard, with its own heading. */
export const SHOWCASE = {
  title: 'Your whole agency,',
  accent: 'on one screen.',
  sub: 'Tasks due, new leads, sources, conversions and today’s pulse, live the moment you log in.',
  points: ['Live lead counts', 'Source breakdown', 'Today’s pulse'],
};

export const HERO = {
  headlinePlain: 'Turn every travel inquiry',
  headlineAccent: 'into a booking.',
  sub: 'Leads, WhatsApp, Instagram, itineraries and invoices in one CRM built for travel agencies. No inquiry lost again.',
  secondaryCta: 'See the pipeline',
  shot: '/shots/1.png',
  w: 1891,
  h: 864,
  alt: 'The TripzoCRM admin dashboard: tasks due, new leads today, total leads, lead sources and the day’s pulse',
};

/**
 * The headline strip.
 *
 * These are the figures the live site already publishes, kept word for word so
 * the two pages do not contradict each other. "10x faster lead response" is a
 * performance claim rather than a capability fact; make sure you can stand
 * behind it, since it is the one number a prospect might ask about.
 */
export const STATS = [
  { value: '10x', label: 'Faster lead response' },
  { value: '1', label: 'Inbox for every channel' },
  { value: '24/7', label: 'Bot-assisted replies' },
  { value: '100%', label: 'Built for travel agencies' },
];

/**
 * The pipeline, as the product defines it.
 *
 * Stage names and order come from LEAD_STATUSES in tripzo-crm-mobile
 * (src/lib/leads.ts), which mirrors lead_stage_config on the web. The colours
 * are the product's own: `wash` and `ink` are the chip background and text from
 * STATUS_COLORS, `color` is the saturated tone for dots and the route. The eight here are the path from inquiry to booking; the three side
 * statuses are named in `FLOW.aside` so nobody thinks they are missing.
 *
 * `event` is what the animation shows happening at that stage. The lead and
 * package are taken from the demo data in the product screenshots.
 */
export const FLOW = {
  title: 'From first message',
  accent: 'to booked.',
  sub: 'Every inquiry travels the same eight stages. Click any stop to see what TripzoCRM does there.',
  aside: 'Call Not Picked, Future Prospect and Lost & Closed keep every other lead on the board.',
  lead: {
    name: 'Rohan Deshmukh',
    initials: 'RD',
    tag: 'Adventure',
    package: 'Ladakh & Kashmir Explorer 9D/8N',
  },
  stages: [
    {
      key: 'new',
      name: 'New Enquiry',
      color: '#6366f1',
      wash: '#E0E7FF',
      ink: '#4338CA',
      body: 'A message lands on WhatsApp. The bot answers in seconds, day or night, with the trips that match.',
      event: { kind: 'whatsapp', title: 'Hi! Ladakh in June for 4 of us?', meta: 'Auto-reply sent in 6s' },
    },
    {
      key: 'contacted',
      name: 'Contacted',
      color: '#a855f7',
      wash: '#F3E8FF',
      ink: '#7E22CE',
      body: 'Auto-assigned to the right agent, who calls from the lead card. The outcome is logged with the call.',
      event: { kind: 'call', title: 'Call answered, 4m 12s', meta: 'Logged by Risha' },
    },
    {
      key: 'qualified',
      name: 'Qualified',
      color: '#ec4899',
      wash: '#FCE7F3',
      ink: '#BE185D',
      body: 'Tag the trip, the group and the budget, so the whole team knows what this lead is worth.',
      event: { kind: 'tags', title: 'Adventure, 4 pax, June', meta: 'Budget noted on the lead' },
    },
    {
      key: 'quote',
      name: 'Plan & Quote Sent',
      color: '#f97316',
      wash: '#FFEDD5',
      ink: '#C2410C',
      body: 'Pick a package or build a day-wise itinerary, then send it as a link branded to your agency.',
      event: { kind: 'quote', title: 'Itinerary sent', meta: 'Opened 3 times' },
    },
    {
      key: 'pipeline',
      name: 'In Pipeline',
      color: '#0ea5e9',
      wash: '#E0F2FE',
      ink: '#0369A1',
      body: 'Follow-up reminders fire on schedule, so a quote never goes cold because someone forgot.',
      event: { kind: 'reminder', title: 'Follow up tomorrow, 11:00', meta: 'Reminder set for Risha' },
    },
    {
      key: 'negotiating',
      name: 'Negotiating',
      color: '#f59e0b',
      wash: '#FEF3C7',
      ink: '#B45309',
      body: 'Revise hotels or price without starting over. Every version stays on the lead’s timeline.',
      event: { kind: 'revise', title: 'Quote v2, hotel upgraded', meta: '₹1,84,000 for 4' },
    },
    {
      key: 'payment',
      name: 'Awaiting Payment',
      color: '#eab308',
      wash: '#FEF9C3',
      ink: '#A16207',
      body: 'Send the payment link and let the reminders chase the advance for you.',
      event: { kind: 'payment', title: 'Advance ₹50,000 received', meta: 'via payment link' },
    },
    {
      key: 'booked',
      name: 'Booked',
      color: '#22c55e',
      wash: '#DCFCE7',
      ink: '#15803D',
      body: 'The invoice goes out and the trip moves to operations with its whole history attached.',
      event: { kind: 'booked', title: 'Booked. Invoice sent.', meta: 'Handed to operations' },
    },
  ],
} as const;

export type FlowStage = (typeof FLOW.stages)[number];

/**
 * Feature tiles.
 *
 * `shot` is a numbered file in public/shots; the numbering is positional and
 * matches the order of this array (1.png is the dashboard in the hero).
 */
export const FEATURES = [
  {
    icon: 'leads',
    title: 'Lead pipeline',
    shot: '/shots/2.png',
    w: 1470,
    h: 703,
    alt: 'The leads table with the pipeline stage rail across the top and per-lead quick actions',
    body: 'Capture every inquiry, assign it to an agent, and move it through stages with notes, tags and reminders.',
  },
  {
    icon: 'whatsapp',
    title: 'WhatsApp inbox',
    shot: '/shots/3.png',
    w: 1583,
    h: 540,
    alt: 'The WhatsApp inbox: chat list, an open conversation, and a package carousel sent to the customer',
    body: 'Two-way WhatsApp Business chats attached to each lead, with bot flows for the first reply.',
  },
  {
    icon: 'instagram',
    title: 'Instagram DMs',
    shot: '/shots/4.png',
    w: 1536,
    h: 502,
    alt: 'The Instagram inbox with an open DM thread showing a two-card package carousel',
    body: 'Reply to DMs inside the CRM and turn social conversations into qualified leads.',
  },
  {
    icon: 'map',
    title: 'Packages & itineraries',
    shot: '/shots/5.png',
    w: 1509,
    h: 783,
    alt: 'A rendered itinerary document showing a day-by-day timeline with photographs',
    body: 'Day-wise itineraries with hotels, sightseeing and pricing, shared as a public link.',
  },
  {
    icon: 'bookings',
    title: 'Bookings & invoices',
    shot: '/shots/6.png',
    w: 1292,
    h: 868,
    alt: 'An invoice on the agency letterhead with billing details and line items',
    body: 'Convert a lead into a booking, raise the invoice and track payments on one timeline.',
  },
  {
    icon: 'hotel',
    title: 'Hotels & rates',
    shot: '/shots/7.png',
    w: 1481,
    h: 675,
    alt: 'The property list beside a room-rates grid with single, double, triple and child rates',
    body: 'Your own properties with per-room rates, feeding straight into every quote you build.',
  },
];

export const CHANNELS = {
  title: 'WhatsApp and Instagram,',
  accent: 'one inbox.',
  sub: 'Most travel inquiries arrive as a chat. TripzoCRM puts every one in the same pipeline and answers the first message for you.',
  meta: {
    title: 'Powered by Meta',
    body: 'Connected through Meta’s official WhatsApp Business Platform and Instagram Messaging API, so every message, media file and read receipt arrives exactly as your customer sent it.',
  },
  items: [
    {
      key: 'whatsapp',
      name: 'WhatsApp',
      tagline: 'Where your customers already are',
      shot: '/shots/3.png',
      w: 1583,
      h: 540,
      alt: 'The WhatsApp inbox inside TripzoCRM',
      points: [
        'Two-way Business API conversations, attached to the lead',
        'Instant first reply, then handover the moment an agent types',
        'The 24-hour reply window tracked and flagged before you send',
        'Packages, brochures and your contact card sent in-chat',
      ],
    },
    {
      key: 'instagram',
      name: 'Instagram',
      tagline: 'Turn every reel into a lead',
      shot: '/shots/4.png',
      w: 1536,
      h: 502,
      alt: 'An Instagram DM thread inside TripzoCRM',
      points: [
        'DM automations for every inbound inquiry',
        'Ad keywords route each campaign to the right packages',
        'Shared reels and stories captured with caption and link',
        'Carousels and quick replies shown as the customer saw them',
      ],
    },
  ],
};

/**
 * The automation marquee. Two rails, opposite directions: WhatsApp left,
 * Instagram right. Each row is rendered twice for the loop, so keep copy short.
 */
export const AUTOMATIONS = {
  title: 'Conversations that keep going',
  accent: 'without you.',
  sub: 'The bot sends the messages an agent would send anyway, then steps aside the moment a human starts typing.',
  whatsapp: [
    { title: 'Instant first reply', body: 'Answers within seconds of the first message, with the trips that match the question.' },
    { title: 'Quote follow-up', body: 'Nudges a customer who opened the itinerary and went quiet, without an agent remembering.' },
    { title: 'Payment reminder', body: 'Chases the balance before departure with the amount, due date and a link to pay.' },
    { title: 'Booking confirmation', body: 'Sends trip details, inclusions and cancellation policy the moment payment lands.' },
    { title: 'Departure countdown', body: 'What to pack, where to reach and who to call, a few days before the trip.' },
    { title: 'Seats running out', body: 'Tells everyone who viewed a departure when only a handful of seats are left.' },
    { title: 'Document collection', body: 'Chases IDs, passports and permits on a schedule, and stops once they arrive.' },
    { title: 'Post-trip feedback', body: 'Asks for the review and shares the photo drive once they are home.' },
  ],
  instagram: [
    { title: 'Reel reply', body: 'Every DM from a reel gets answered with the trip that reel was about.' },
    { title: 'Ad keyword match', body: 'Reads the phrase from your campaign and sends the packages assigned to it.' },
    { title: 'Story reply capture', body: 'A story reaction becomes a lead, with the conversation already attached.' },
    { title: 'Package carousel', body: 'A swipeable set of trips with prices and a View Itinerary button on each.' },
    { title: 'Handover to agent', body: 'The bot goes silent the moment your team starts typing. Nobody talks over anyone.' },
    { title: 'Window warning', body: 'Flags the 24-hour reply window before it closes on an unanswered DM.' },
    { title: 'Needs-review escalation', body: 'Anything the bot cannot answer safely goes to a human queue, with the reason.' },
    { title: 'Profile-aware greeting', body: 'Greets by name and puts their handle and follower count on the agent’s screen.' },
  ],
};

export const REPORTS = {
  title: 'The number every owner',
  accent: 'actually asks for.',
  body: 'Every night, three figures per agent: what they closed, what they still owe an answer, and what they never touched. Most CRMs show a pipeline. This one shows who worked it.',
  metrics: [
    { label: 'Closed', hint: 'Booked or lost. An outcome either way.', tone: 'good' },
    { label: 'Pending', hint: 'Still open, still owed an answer.', tone: 'warn' },
    { label: 'Missed', hint: 'Theirs, and untouched all day.', tone: 'bad' },
  ],
};

export const MOBILE = {
  title: 'Your agency,',
  accent: 'in your pocket.',
  body: 'The same inbox, pipeline and catalogue as the desktop, for the half of the job that happens away from a desk.',
  points: [
    { title: 'Push notifications', body: 'A new lead buzzes the right agent, not the whole team.' },
    { title: 'Reply anywhere', body: 'Full WhatsApp and Instagram threads, with takeover.' },
    { title: 'Log expenses on the spot', body: 'At the hotel desk, before the receipt is lost.' },
    { title: 'Instant updates', body: 'Improvements arrive over the air. No store, no waiting.' },
  ],
};

export const ABOUT = {
  title: 'Built for travel,',
  accent: 'not bent into shape.',
  body: 'Every feature, from WhatsApp threads to day-wise itineraries to trip-level profit, exists because a real agency asked for it.',
  pillars: [
    {
      title: 'Travel-native records',
      body: 'Packages, departures, seats, itineraries and per-trip margin are first-class records, not custom fields on a deals table.',
    },
    {
      title: 'The inbox is the product',
      body: 'Your customers message on WhatsApp and Instagram, so the inbox is built in, not sold as an add-on.',
    },
    {
      title: 'Priced for agencies',
      body: 'Start free, pay when your pipeline grows, and keep every feature on every plan that needs it.',
    },
  ],
};

export const PRICING = {
  title: 'Simple pricing',
  accent: 'for agencies.',
  sub: 'Start free. Upgrade when your pipeline grows, not before.',
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
      cta: CTA.signup,
      featured: false,
    },
    {
      name: 'Growth',
      price: 'Let’s talk',
      note: 'billed monthly',
      blurb: 'For growing agencies running several channels.',
      features: [
        'Unlimited team members',
        'WhatsApp + Instagram channels',
        'Itinerary builder & departures',
        'Invoices, payments & reminders',
        'Daily performance reports',
        'Mobile app for the whole team',
      ],
      cta: CTA.demo,
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
      cta: CTA.demo,
      featured: false,
    },
  ],
  footnote: 'Every plan includes onboarding, data migration and WhatsApp Business API setup.',
};

export const FAQS = [
  {
    q: 'Do we need a WhatsApp Business API account?',
    a: 'Yes, and we set it up with you during onboarding. Once connected, every conversation flows into TripzoCRM automatically and your existing number keeps working as before.',
  },
  {
    q: 'How long does it take to get up and running?',
    a: 'Most agencies are live within a day. Account setup and your package catalogue take an afternoon; connecting WhatsApp depends on Meta approval, and we handle that with you.',
  },
  {
    q: 'Can our whole team work from their phones?',
    a: 'Yes. There is a full app for Android and an installable app for iPhone, with the same inbox, pipeline and catalogue as the desktop, and push notifications for new leads.',
  },
  {
    q: 'Will this work for a single-person agency?',
    a: 'Yes. The pipeline, the inbox and the itinerary builder are useful on day one with one person. Auto-assignment and team reports simply wait until you hire.',
  },
  {
    q: 'Can we import our existing leads and packages?',
    a: 'Yes. We handle the migration with you during onboarding, including your package catalogue and any lead history you want to keep.',
  },
  {
    q: 'Is our customer data isolated from other agencies?',
    a: 'Completely. Every record is scoped to your organization at the database level, and access inside your team is controlled by role.',
  },
];

export const FINAL_CTA = {
  title: 'Stop losing bookings',
  titleAccent: 'to unread messages.',
  sub: 'Set TripzoCRM up in an afternoon and watch the next inquiry land where you can act on it.',
  fineprint: 'Free for 14 days. No credit card.',
};

export const FOOTER = {
  blurb: 'The CRM for travel agencies: capture every inquiry, qualify every lead and close every booking in one place.',
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Pipeline', href: '#pipeline' },
        { label: 'Features', href: '#features' },
        { label: 'Channels', href: '#channels' },
        { label: 'Pricing', href: '#pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: CTA.signin, href: SIGNUP_URL },
        { label: CTA.demo, href: SIGNUP_URL },
        { label: 'Contact', href: SIGNUP_URL },
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
