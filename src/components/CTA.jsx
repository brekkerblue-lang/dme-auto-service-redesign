import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

export default function CTA() {
  return (
    <section className="bg-crimson-600 py-16 text-white">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
          Ready for honest, experienced repair?
        </h2>
        <p className="max-w-lg normal-case text-crimson-50/90">
          Give {business.ownerName}&rsquo;s team a call, or stop by {business.addressFull} &mdash; Monday through
          Friday, 8 AM to 5 PM.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-crimson-700 shadow-card transition-transform hover:-translate-y-0.5"
          >
            <Icon name="phone" className="h-4 w-4" />
            {business.phone}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
          >
            Send a Message
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
