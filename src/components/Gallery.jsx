import SectionHeading from './SectionHeading.jsx'
import { business } from '../data/business.js'

const photos = [
  {
    src: business.signPhotoSrc,
    alt: "DME Auto Service's real highway sign, Poulsbo, WA",
    caption: 'Our sign right off the 305 — easy to spot before Bond Road.',
  },
  {
    src: business.storefrontPhotoSrc,
    alt: 'DME Auto Service shop building at 20720 State Hwy 305 NE',
    caption: `Stop by ${business.addressFull} — the shop's real front entrance.`,
  },
]

export default function Gallery() {
  return (
    <section className="bg-steel-100 py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Around The Shop" title="A real, local shop on Highway 305">
          The same building, the same sign, the same team &mdash; find us right off the 305 in Poulsbo.
        </SectionHeading>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {photos.map((p) => (
            <figure key={p.src} className="overflow-hidden rounded-2xl border-4 border-ink bg-white shadow-card">
              <img src={p.src} alt={p.alt} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="p-5 text-sm normal-case leading-relaxed text-steel-600">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
