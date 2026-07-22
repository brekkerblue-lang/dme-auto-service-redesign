import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream bg-stripes">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-24">
        <div>
          <span className="badge-sign-light">
            <Icon name="flag" className="h-3.5 w-3.5" />
            Locally Owned · Poulsbo, WA
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Keeping your vehicle in <span className="text-crimson-600">tip top shape.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg normal-case leading-relaxed text-steel-600">
            Owner {business.ownerName} brings over three decades of experience to every job &mdash; old school
            classics, business fleets, and everyday commuters, all serviced right off Highway 305 in Poulsbo.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Schedule a Repair
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a href={business.phoneHref} className="btn-outline">
              <Icon name="phone" className="h-4 w-4" />
              {business.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-steel-200 pt-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4 fill-crimson-600 text-crimson-600" />
                ))}
              </div>
              <span className="font-display text-sm font-semibold text-ink">
                {business.rating.toFixed(1)} · {business.reviewCount} Google reviews
              </span>
            </div>
            <div className="h-6 w-px bg-steel-300" />
            <p className="font-mono text-xs uppercase tracking-widest text-steel-500">3+ decades of experience</p>
          </div>
        </div>

        <div className="relative">
          <div className="sign-plate">
            <img
              src={business.signPhotoSrc}
              alt="DME Auto Service's real highway sign at 20720 State Hwy 305 NE, Poulsbo, WA"
              className="aspect-[4/3] w-full rounded object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden sm:block">
            <span className="badge-sign">
              <Icon name="shield" className="h-3.5 w-3.5" />
              Honest, Fair-Priced Repair
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
