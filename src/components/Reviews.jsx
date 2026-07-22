import SectionHeading from './SectionHeading.jsx'
import { Icon } from './icons.jsx'
import { business } from '../data/business.js'
import { testimonials, reviewTags } from '../data/testimonials.js'

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="What Customers Say" title="Trusted by Poulsbo drivers">
            {business.reviewCount} real reviews on Google Maps, averaging {business.rating.toFixed(1)} stars.
          </SectionHeading>
          <div className="flex items-center gap-1 rounded-full border border-steel-200 bg-steel-50 px-4 py-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" className="h-4 w-4 fill-crimson-600 text-crimson-600" />
            ))}
            <span className="ml-2 font-display text-sm font-semibold text-ink">
              {business.rating.toFixed(1)} · {business.reviewCount} reviews
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author} className="panel flex h-full flex-col p-6">
              <Icon name="quote" className="h-7 w-7 text-crimson-200" />
              <blockquote className="mt-3 flex-1 text-sm normal-case leading-relaxed text-steel-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-steel-200 pt-4">
                <p className="font-display text-sm font-semibold uppercase tracking-tight text-ink">{t.author}</p>
                <p className="font-mono text-xs text-steel-500">{t.source}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 panel p-7">
          <p className="font-mono text-xs uppercase tracking-widest text-steel-500">
            Most-mentioned topics on Google
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {reviewTags.map((tag) => (
              <li
                key={tag.label}
                className="flex items-center gap-2 rounded-full bg-crimson-600/10 px-4 py-1.5 text-sm normal-case font-medium text-crimson-700"
              >
                {tag.label}
                <span className="rounded-full bg-crimson-600 px-1.5 py-0.5 font-mono text-[10px] text-white">
                  {tag.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
