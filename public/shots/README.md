# Product screenshots

Numbered, and the number is positional: `1.png` is the showcase, then the six
feature cards run `2.png` to `7.png` in the order they appear in `FEATURES` in
`lib/content.ts`.

| File | What it shows | Where it appears |
| --- | --- | --- |
| `1.png` | Admin dashboard — KPI cards, lead sources, Today's Pulse | Showcase (full width) |
| `2.png` | Leads table with the pipeline stage rail | Lead Pipeline |
| `3.png` | WhatsApp inbox — chat list, thread, package carousel | WhatsApp Inbox |
| `4.png` | Instagram DM thread with a package carousel | Instagram DMs |
| `5.png` | Rendered itinerary document, contents rail + days | Packages & Itineraries |
| `6.png` | Invoice on the agency letterhead | Bookings & Bills |
| `7.png` | Property list + Room Rates grid | Hotels & rates |

Replace them in one command:

```bash
npm run import-shots -- "C:/path/to/folder"     # takes images in name order
npm run import-shots -- 6="C:/path/bill.png"    # or one at a time
```

Add `--force` to overwrite files already here.

## Tips

- **Crop to content.** Each shot is cropped from the TOP-LEFT
  (`components/ui/Shot.tsx`), so keep the meaningful part up there and trim dead
  browser chrome. The feature tiles are 16:10 — a tall screenshot loses its
  bottom.
- **2x if you can.** The showcase renders ~1040px wide; a 2000px+ export stays
  sharp on a retina screen.
- **Scrub real customer data** before exporting. These go on a public page.
