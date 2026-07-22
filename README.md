# DME Auto Service — Website Redesign

A brand-new website for DME Auto Service, built with React + Vite +
Tailwind CSS, pulling real colors, photos, and copy from the business's
Google Business Profile, Facebook page, and Yelp listing.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Why this business

DME Auto Service (20720 State Hwy 305 NE, Poulsbo, WA) was found following
the standing rule for new redesigns in this series: find a business with a
listed email and no website; if that's impossible, find one with a
genuinely broken/non-functional site.

This business's old domain, **dmeauto.com, has expired** — it now resolves
to a GoDaddy "domain for sale" parking page (confirmed 2026-07-22), not a
live business site. Google Maps itself shows no website on file for this
listing (an "Add website" prompt appears where a link would be). It's a
strong, well-established shop whose site simply lapsed: 4.8 stars across
106 Google reviews, over three decades of the owner's hands-on experience,
a real physical highway sign, and a real family-run story — the exact kind
of business this redesign series exists to help.

**No public email address exists anywhere for this business** — checked
Google Maps, Facebook (About → Contact Info, which lists only a phone
number and Messenger), Yelp, and the Poulsbo Chamber of Commerce listing.
Per the user's explicit decision, outreach for this business goes through
**Facebook Messenger** (facebook.com/DMEAuto) instead of email, and the
site's own Contact section offers phone + Messenger rather than a
fabricated email address.

## Sourcing — what's real vs. what was designed

Every fact, photo, and color in this project is sourced from a real,
verifiable place:

- **Business facts** (name, address, phone, hours, rating, review count)
  — Google Maps business listing and Yelp's "Location & Hours" panel,
  both confirmed 2026-07-22.
- **Bio/tagline** — verbatim from the shop's own Facebook "Intro" line:
  *"We're a local Poulsbo business off the 305 right before bond. Our
  owner Doug has over 3 decades of experience working on old school
  classics, business fleets, and your regular commuter. We love what we
  do and that's keeping your vehicle in tip top shape!"*
- **Owner/staff names** — Doug (owner) is named on the shop's own
  Facebook bio. Tim (technician) is named independently across multiple
  real Google and Yelp reviews (Curtis V., Jason B., Mike V.) as the
  team's other named team member.
- **Services** — Yelp's own "Services Offered" panel (marked "Verified by
  Business"), cross-referenced with specific repair jobs named in real
  reviews (alternator replacement, water pump replacement, brake service,
  headlamp installation).
- **Review content** — six real, verbatim review excerpts from Google
  Maps and Yelp (Andrew Dickson, Dave Marchetti, brenda toth, Bartt C.,
  Jason B., Mike V.), plus Google's own real topic-tag counts (e.g.
  "headlight replacement" ×4, "truck repair" ×3). Only positive,
  verifiable reviews are featured — DME's Yelp page also carries some
  negative reviews from a smaller, more mixed 22-review sample, which is
  why Google's 4.8-star/106-review average (the platform most of their
  customers actually use) is the site's primary trust signal rather than
  Yelp's.
- **Photos** — two real photos, downloaded with the user's explicit
  per-photo permission (filename, source, and size stated before
  download):
  - `public/images/dme-storefront.jpg` — the shop's real building at
    20720 State Hwy 305 NE, from facebook.com/DMEAuto's profile photo.
  - `public/images/dme-roadside-sign.jpg` — the shop's real highway sign
    ("DME AUTO SERVICE, 20720 State Hwy 305 Poulsbo, WA 98370"), from
    facebook.com/DMEAuto's cover photo.
- **Colors** — every value in `tailwind.config.js`'s `crimson` and
  `brass` palettes was sampled with a pixel color-picker directly from
  `dme-roadside-sign.jpg` (the red "DME" lettering fill and its gold
  outline/pinstripe), and the `steel` palette from the real stucco wall
  and roofline in `dme-storefront.jpg` — not an invented "automotive"
  brand palette.

No AI-generated imagery is used anywhere in this project.

## Design system — "The Highway Sign"

DME's own real roadside sign IS its brand identity: bold red "DME"
lettering with a gold outline on black, mounted on an arrow-shaped panel
right off Highway 305. Rather than design around a generic "auto repair"
look, this system takes that literal sign as its throughline:

- **A bolted "sign plate" frame** (`.sign-plate` in `index.css`) presents
  the real sign photo like a mounted roadside panel, with a thick black
  border.
- **Gold-outlined badge tags** (`.badge-sign` / `.badge-sign-light`) echo
  the sign's own gold pinstripe/outline treatment around "DME".
- **Oswald**, a bold condensed sans, stands in for the sign's own bold
  display lettering; Inter is the clean body face; JetBrains Mono renders
  small stamped details like hours and phone numbers.
- Section headings are set in uppercase with tight tracking, echoing the
  sign's own all-caps "DME AUTO SERVICE" treatment.
- A faint diagonal speed-stripe texture (`bg-stripes` in the Tailwind
  config) appears behind the hero section.
- The header uses a stylized text wordmark rather than an image logo,
  because DME has never had a standalone vector logo — their real brand
  mark is the painted lettering on the building and sign themselves.

This is the ninth redesign in this portfolio. Prior entries have each
built a distinct visual system tied to that specific business's own real
assets. This one continues that pattern: the sign-plate/badge concept
comes directly from the fact that DME's real, physical highway sign
already *is* their brand mark.

## Verification note

This project's dependencies were **not installed and the dev server was
not run** in the sandbox that produced this code — outbound network
access to the npm registry (`registry.npmjs.org`) returned 403 Forbidden
for this session, consistent with every prior redesign in this
portfolio. Every `.jsx`/`.js` file was instead syntax- and import-checked
with the TypeScript compiler
(`tsc --jsx react-jsx --noEmit --allowJs --skipLibCheck`) as a stand-in
— clean, zero errors — and every icon name imported from `react-icons/lu`
in `src/components/icons.jsx` was cross-checked against its usage across
every component to confirm each referenced icon is actually registered.
Every Tailwind color/utility class used across the project was also
cross-checked against the tokens defined in `tailwind.config.js`.

## File structure

```
src/
  main.jsx           Entry point
  App.jsx             Page composition
  index.css           Tailwind layers + shared component classes
  components/
    Header.jsx         Sticky nav with status strip + text wordmark
    Hero.jsx            Hero section with real sign photo
    Services.jsx        Real, Yelp-verified service list
    WhyChooseUs.jsx      Trust points, drawn from real review language
    About.jsx            Doug's story, real Facebook bio
    Reviews.jsx           Real verbatim review quotes + topic tags
    Gallery.jsx           The two real shop photos
    CTA.jsx               Conversion band
    Contact.jsx            Address/phone/Messenger/hours/form/map
    Footer.jsx
    SectionHeading.jsx    Shared eyebrow/title/description block
    icons.jsx              react-icons/lu registry
  data/
    business.js         Core business facts
    services.js          Service list + mission line
    testimonials.js       Real review quotes + topic tag counts
public/
  images/                dme-storefront.jpg, dme-roadside-sign.jpg
```
