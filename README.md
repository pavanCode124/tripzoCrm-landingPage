# TripzoCRM landing page

Marketing site for [TripzoCRM](https://www.tripzocrm.com), the travel agency
operating system. Next.js 16 (App Router) + React 19 + Tailwind CSS v4.

Separate from the product repos (`tripzo-crm-next`, `tripzo-crm-node`,
`tripzo-crm-mobile`) on purpose: a marketing page changes weekly and should
never be able to break the app, or wait on its deploy.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static production build
```

## Design system

Tokens are declared in `app/globals.css` under `@theme` (Tailwind v4 is CSS-first).

The page is **light**: white ground, a lavender-grey second tone (`canvas-2`)
for alternating bands, and brand purple as the single accent.

| Token | Value | Used for |
| --- | --- | --- |
| `canvas` / `canvas-2` / `canvas-3` | `#ffffff` / `#f8f7fc` / `#f2f0f8` | Page, bands, insets |
| `line` / `line-strong` | `#ebe8f2` / `#dcd7e8` | Hairlines |
| `ink` / `ink-muted` / `ink-faint` | `#120f1c` / `#575170` / `#767089` | Text |
| `brand` / `brand-hover` / `brand-wash` | `#7137b3` / `#5f2c9a` / `#f4effc` | Accent, hover, tints |
| `accent` | `#0ea672` | Success, booked, the "CRM" in the wordmark |
| `wa` / `ig` | `#1fae5b` / `#e1306c` | Channel identity |

Pipeline stage colours live with the stage data in `lib/content.ts` (`FLOW`):
`wash` and `ink` are the product's own chip colours from `STATUS_COLORS` in
`tripzo-crm-mobile/src/lib/leads.ts`.

**Type.** Bricolage Grotesque for headings, Plus Jakarta Sans (the app's own UI
face) for everything else. Both self-hosted by `next/font`.

**Screenshots** render through `components/ui/Shot.tsx`, which takes the file's
natural `w`/`h` and never crops. When you replace a file in `public/shots`,
update its `w`/`h` in `lib/content.ts`.

**Hero.** Headline, CTAs and the four stats over a slow aurora of the brand
colours (`.aurora-blob` in `globals.css`). Six product cards float in 3D around
it (`components/ui/SignalCards.tsx`): inquiries on the left, outcomes on the
right, with dashed streams flowing into the centre. Cards show from `xl` up.

**Showcase.** The real dashboard in its own section under the hero, standing up
from a tilt as it scrolls in.

**Pipeline** (`components/sections/LeadFlow.tsx`). A normal-height section that
scrolls like any other. While on screen it plays through the eight stages; a
plane flies the route between stops and the lead card's status and activity log
update. Clicking a stop, or prev/next, jumps there and pauses the tour.

**Channels** are WhatsApp and Instagram only, with a note that both run on
Meta's official WhatsApp Business Platform and Instagram Messaging API.

**Motion** respects `prefers-reduced-motion` through
`components/ui/useReducedMotionSafe.ts`, which avoids hydration mismatches.

## Structure

```
app/
  layout.tsx          fonts, metadata, OG tags
  page.tsx            section order — the argument the page makes
  globals.css         design tokens + custom utilities
components/
  sections/           one file per section
  ui/                 Button, Logo, Reveal, SectionHeading, BrandIcons, Shot
lib/
  content.ts          ALL copy lives here
public/
  shots/              product screenshots — see the README in there
```

### Editing copy

Change `lib/content.ts`. No section hardcodes a sentence.

## Things worth knowing

**Anchor scrolling has exactly one offset.** `scroll-padding-top: 76px` on
`<html>`, matching the header height, and **nothing else**. Sections must not
carry `scroll-mt-*`: scroll-padding on the scrollport and scroll-margin on the
target *add up*, which lands anchors ~190px high and leaves the bottom of the
previous section on screen. If you add a section, do not give it a scroll
margin.

**The logo is SVG, not an image** (`components/ui/Logo.tsx`). It is used at 38px
in the header and 40px in the footer and has to stay crisp at every density.
Replacing it with the real asset means swapping the body of `LogoMark` — nothing
else imports the geometry.

**`lucide-react` v1 dropped brand icons** (trademark). WhatsApp, Instagram and
Web marks are hand-drawn in `components/ui/BrandIcons.tsx`.

**Real screenshots live in `public/shots/`**, numbered `1.png`–`7.png`. The
number is positional: `1.png` is the showcase, and `2`–`7` are the six feature
cards in the order they appear in `FEATURES`. Full table in
`public/shots/README.md`; replace them with `npm run import-shots`.

They render through `components/ui/Shot.tsx`, which crops to a fixed aspect from
the top-left and shows a labelled placeholder for any file that is missing.

`Shot` deliberately uses `<img>`, not `next/image`, and checks `naturalWidth` on
mount rather than trusting `onError`: the markup is server-rendered, so a 404
fires its error event before React hydrates and the handler never runs. That bug
put raw alt text across every card. Switching to `next/image` later is a two-line
change and buys AVIF/WebP conversion — worth doing, these files are ~100–330KB
each.

**The mock-ups in `AppMock.tsx`, `Mobile.tsx` and `Reports.tsx` are DOM, not
images.** Sharp at any density, weigh nothing, never go stale against the real
UI, and leak no customer data. They are illustrations, not literal renderings —
unlike the shots above, which are the product.

**`devIndicators: false`** in `next.config.mjs` hides the floating Next.js dev
badge. Dev-only chrome — it never shipped to production, but it sat on the page
while reviewing.

**All motion respects `prefers-reduced-motion`.**

**`AGENTS.md` and `CLAUDE.md` are generated by `next dev`** and re-created every
run. Commit them rather than deleting them.

## Claims on this page

The stats strip (`10x faster lead response`, `1 inbox`, `24/7`, `100%`) is taken
word for word from the live site so the two do not contradict each other. `10x`
is a performance claim rather than a capability fact — make sure you can stand
behind it, since it is the one number a prospect might ask about.

There are still **no client logos, testimonials or customer counts**. Adding
real ones is the biggest single lift available to this page.

## Deploying

Static — no server needed. On Vercel it needs no configuration: framework
detection picks up Next.js and `npm run build` is the whole pipeline.

## Not done yet

- Client logos, testimonials, verified metrics
- OG share image (`app/opengraph-image.tsx` would generate one)
- Analytics
- A real contact/demo form — every CTA currently points at `/login`
