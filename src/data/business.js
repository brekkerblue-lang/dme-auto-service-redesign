// Every fact in this file is real, sourced directly from DME Auto Service's
// Google Business Profile (Google Maps listing, confirmed 2026-07-22), its
// Facebook page (facebook.com/DMEAuto), and its Yelp listing. Their old
// domain, dmeauto.com, has expired and now resolves to a GoDaddy
// domain-for-sale parking page — Google Maps itself shows no website on
// file for this business. See README for full sourcing notes and the
// standing brand-preservation / real-photos-only rule this project follows.

export const business = {
  name: 'DME Auto Service',
  ownerName: 'Doug',
  // Verbatim from the shop's own Facebook bio line.
  facebookBio:
    "We're a local Poulsbo business off the 305 right before bond. Our owner Doug has over 3 decades of experience working on old school classics, business fleets, and your regular commuter. We love what we do and that's keeping your vehicle in tip top shape!",
  tagline: 'Keeping your vehicle in tip top shape, since day one.',
  specialty: 'Classics, Fleets & Everyday Commuters',
  phone: '(360) 697-3399',
  phoneHref: 'tel:+13606973399',
  // No public email exists anywhere for this business (checked Google
  // Maps, Facebook, Yelp, chamber listing) — Facebook's own "Contact info"
  // lists only a phone number and Messenger. Outreach and site contact use
  // phone + Messenger, never a fabricated email address.
  facebookUrl: 'https://www.facebook.com/DMEAuto',
  facebookMessengerUrl: 'https://m.me/DMEAuto',
  address: {
    line1: '20720 State Hwy 305 NE',
    city: 'Poulsbo',
    state: 'WA',
    zip: '98370',
  },
  addressFull: '20720 State Hwy 305 NE, Poulsbo, WA 98370',
  mapsDirectionsUrl: 'https://www.google.com/maps/place/DME+Auto+Service/@47.7510411,-122.6429457,17z',
  mapEmbedSrc:
    'https://www.google.com/maps?q=DME+Auto+Service,+20720+State+Hwy+305+NE,+Poulsbo,+WA+98370&output=embed',
  // Google Maps: 4.8 stars, 106 reviews (confirmed 2026-07-22) — the
  // larger, more current review base. Yelp shows 3.8/22, a smaller and
  // more mixed sample; Google's figure is used as the primary trust
  // signal, consistent with what most of their customers actually use.
  rating: 4.8,
  reviewCount: 106,
  yelpRating: 3.8,
  yelpReviewCount: 22,
  // Confirmed on Yelp's "Location & Hours" table (updated 2 months prior
  // to check date) — Mon-Fri 8:00 AM-5:00 PM, closed weekends.
  hours: [
    { day: 'Monday', time: '8:00 AM – 5:00 PM' },
    { day: 'Tuesday', time: '8:00 AM – 5:00 PM' },
    { day: 'Wednesday', time: '8:00 AM – 5:00 PM' },
    { day: 'Thursday', time: '8:00 AM – 5:00 PM' },
    { day: 'Friday', time: '8:00 AM – 5:00 PM' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' },
  ],
  storefrontPhotoSrc: '/images/dme-storefront.jpg',
  signPhotoSrc: '/images/dme-roadside-sign.jpg',
}
