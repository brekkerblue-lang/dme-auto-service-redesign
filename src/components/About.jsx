import SectionHeading from './SectionHeading.jsx'
import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-2xl border-4 border-ink shadow-badge">
          <img
            src={business.storefrontPhotoSrc}
            alt="DME Auto Service's real shop building at 20720 State Hwy 305 NE, Poulsbo, WA"
            className="aspect-square w-full object-cover"
          />
        </div>

        <div>
          <SectionHeading eyebrow="Our Story" title={`Run by ${business.ownerName}, off Highway 305`}>
            {null}
          </SectionHeading>

          <p className="mt-6 text-base normal-case leading-relaxed text-steel-600">
            {business.facebookBio}
          </p>

          <p className="mt-4 text-base normal-case leading-relaxed text-steel-600">
            That&rsquo;s the shop&rsquo;s own description of itself, straight from their Facebook page. Customers
            back it up in their own words too &mdash; reviewers describe {business.ownerName} and technician Tim
            running full diagnostic checks and test drives before recommending any repair, and turning down payment
            entirely when a car didn&rsquo;t actually need one.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-steel-200 bg-white p-4 text-center shadow-card">
              <p className="font-display text-2xl font-bold text-crimson-600">3+</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-steel-500">
                Decades Experience
              </p>
            </div>
            <div className="rounded-xl border border-steel-200 bg-white p-4 text-center shadow-card">
              <p className="font-display text-2xl font-bold text-crimson-600">{business.rating.toFixed(1)}★</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-steel-500">
                {business.reviewCount} Reviews
              </p>
            </div>
            <div className="rounded-xl border border-steel-200 bg-white p-4 text-center shadow-card">
              <p className="font-display text-2xl font-bold text-crimson-600">305</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-steel-500">
                Highway Location
              </p>
            </div>
          </div>

          <a
            href={business.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-crimson-600 hover:text-crimson-700"
          >
            <Icon name="facebook" className="h-4 w-4" />
            Find us on Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
