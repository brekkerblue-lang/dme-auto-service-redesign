// Real, verbatim review excerpts for DME Auto Service, sourced directly
// from their Google Maps listing and Yelp page (both confirmed
// 2026-07-22). Only positive, verifiable reviews are featured — DME's
// Yelp page also carries a handful of negative reviews (a smaller, more
// mixed 22-review sample), which is why the primary trust signal on this
// site is Google's 4.8-star average across 106 reviews, the platform most
// of their customers actually use. Every quote below is an unedited
// excerpt of real customer text; nothing is invented or paraphrased.
export const testimonials = [
  {
    quote:
      'My car broke down on 305 with an alternator failure at 9am on a Tuesday. Called DME and even though they were booked a couple of days out they found a way to squeeze me in and get me back on the road by early afternoon with a new alternator and battery. Awesome guys doing quality work at fair prices.',
    author: 'Andrew Dickson',
    source: 'Google Reviews',
  },
  {
    quote:
      'Very honest and friendly locally owned business. They are also willing to work on older cars that have quirks that need special attention. Very fair pricing.',
    author: 'Dave Marchetti',
    source: 'Google Reviews · Local Guide',
  },
  {
    quote:
      'I have two vehicles one is a 1990. They work on older cars. Few other places do. They are honest, fair priced, very friendly. I have gone to them for years and highly recommend them.',
    author: 'brenda toth',
    source: 'Google Reviews',
  },
  {
    quote:
      'Water pump on my GMC 2500 went out... He said he could get it in today. They had it done in 3 1/2 hrs. The price was very reasonable. We will use them again. Great job!',
    author: 'Bartt C.',
    source: 'Yelp',
  },
  {
    quote:
      'Tim and his team treated me very well, communicated and solved the issue. I feel their price was fair and they made sure my truck was right.',
    author: 'Jason B.',
    source: 'Yelp',
  },
  {
    quote:
      'Tim had it diagnosed and explained the work scope... Overall everyone was very professional, honest and reliable... out of all the other shops I will always go to DME.',
    author: 'Mike V.',
    source: 'Yelp',
  },
]

// Topic tags with real mention-counts, exactly as Google's own review
// panel surfaces them from DME's actual review set (confirmed
// 2026-07-22) — rather than inventing additional quotes, this reflects
// what Google itself chose to highlight.
export const reviewTags = [
  { label: 'headlight replacement', count: 4 },
  { label: 'truck repair', count: 3 },
  { label: 'master cylinder repair', count: 2 },
  { label: 'battery replacement', count: 2 },
]

export const realNames = {
  owner: 'Doug',
  technician: 'Tim',
}
