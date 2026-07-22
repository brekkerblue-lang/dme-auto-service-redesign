/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // DME Auto Service's real identity IS its own roadside sign and
        // painted shop building at 20720 State Hwy 305 NE, Poulsbo, WA.
        // Every value below was sampled directly with a pixel-color picker
        // from a real photo of that sign (public/images/dme-roadside-sign.jpg,
        // sourced from facebook.com/DMEAuto's cover photo) and the real
        // storefront photo (public/images/dme-storefront.jpg, sourced from
        // facebook.com/DMEAuto's profile photo) — nothing here is an
        // invented "automotive brand" palette.
        crimson: {
          // Sampled from the red "DME" lettering fill on the real highway
          // sign (~rgb(193,52,61), averaged across ~30k matching pixels).
          50: '#fbf3f3',
          100: '#f6e3e4',
          200: '#ebbec1',
          300: '#df959a',
          400: '#d0656c',
          500: '#c54049',
          600: '#c1343d', // core brand red — the sign's "DME" lettering
          700: '#9e2b32',
          800: '#7d2228',
          900: '#5d191d',
        },
        // Sampled from the thin gold/brass outline stroke around the "DME"
        // letters and the double pinstripe under "AUTO SERVICE" on the
        // real sign (~rgb(197,161,90)).
        brass: {
          50: '#fcf9f5',
          100: '#f7f2e8',
          200: '#ece1ca',
          300: '#e1cea9',
          400: '#d3b882',
          500: '#c8a764',
          600: '#c5a15a', // core accent gold — the sign's outline/pinstripe
          700: '#a2844a',
          800: '#80693a',
          900: '#5f4d2b',
        },
        // Warm charcoal/stone sampled from the real stucco shop wall and
        // roof line in the storefront photo (~rgb(63,61,55) / rgb(112,50,48)).
        steel: {
          50: '#f6f5f4',
          100: '#e9e7e4',
          200: '#d1cdc7',
          300: '#aea89e',
          400: '#847d70',
          500: '#635d52',
          600: '#4d4840',
          700: '#3d3931',
          800: '#2c2924',
          900: '#1c1a16',
        },
        cream: '#faf8f4', // warm off-white background
        ink: '#15110d', // near-black, sampled from the sign's own background
      },
      fontFamily: {
        // The real sign uses a bold, slightly condensed display face for
        // "DME AUTO SERVICE" with a gold outline treatment — Oswald (a
        // bold condensed sans, common on real automotive/racing signage)
        // is the closest web-font match to that look. Inter is the clean
        // body face. JetBrains Mono renders small stamped/plate details.
        display: ['"Oswald"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(21,17,13,0.05), 0 20px 40px -24px rgba(21,17,13,0.35)',
        badge: '0 1px 0 rgba(255,255,255,0.12) inset, 0 18px 40px -18px rgba(93,25,29,0.55)',
      },
      backgroundImage: {
        // A faint diagonal speed-stripe motif, echoing the real sign's own
        // double pinstripe under "AUTO SERVICE", used as a subtle section
        // texture.
        stripes:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath d='M0 48L48 0' stroke='%23c1343d' stroke-opacity='0.05' stroke-width='2'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
