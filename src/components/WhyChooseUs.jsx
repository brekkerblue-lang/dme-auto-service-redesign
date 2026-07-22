import SectionHeading from './SectionHeading.jsx'
import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

const points = [
  {
    icon: 'award',
    title: '3+ Decades of Experience',
    detail: `Owner ${business.ownerName} has over three decades of hands-on experience working old school classics, fleets, and daily drivers.`,
  },
  {
    icon: 'star',
    title: 'Real, Verified Reputation',
    detail: `${business.rating.toFixed(1)} stars across ${business.reviewCount} Google reviews from real Poulsbo-area customers.`,
  },
  {
    icon: 'zap',
    title: 'Fast When It Counts',
    detail: 'Same-day alternator swaps and 3.5-hour water pump jobs — reviewers repeatedly point to how fast DME turns urgent repairs around.',
  },
  {
    icon: 'handshake',
    title: 'Honest, No-Surprise Pricing',
    detail: '"Very fair pricing" and "honest and reliable" are phrases that show up again and again in DME\'s own customer reviews.',
  },
  {
    icon: 'flag',
    title: 'Locally Owned, Off Highway 305',
    detail: 'A real Poulsbo business, not a chain — easy to find right off the 305, before Bond Road.',
  },
  {
    icon: 'wrench',
    title: 'Takes On What Others Won\'t',
    detail: 'From classic restorations to problem vehicles other shops gave up on — reviewers say DME solved what "2 other shops and all the message boards couldn\'t figure out."',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-ink py-20 text-white lg:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Why Poulsbo Trusts Us" title="Straight talk, real experience" light>
          Everything below comes straight from what customers actually say about DME Auto Service &mdash; not
          marketing copy.
        </SectionHeading>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-crimson-500/20 text-crimson-400">
                <Icon name={p.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-tight text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm normal-case leading-relaxed text-steel-300">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
