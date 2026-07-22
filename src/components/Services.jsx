import SectionHeading from './SectionHeading.jsx'
import { Icon } from './icons.jsx'
import { services } from '../data/services.js'

const icons = ['zap', 'gauge', 'wrench', 'shield', 'flag', 'handshake']

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="What We Do" title="Real repair work, done honestly">
          From same-day electrical fixes to decades-old classics, DME&rsquo;s team handles whatever rolls onto the
          lot &mdash; the same careful, straight-talk service every time.
        </SectionHeading>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.name} className="panel p-6 transition-transform hover:-translate-y-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-crimson-600/10 text-crimson-600">
                <Icon name={icons[i % icons.length]} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-tight text-ink">
                {s.name}
              </h3>
              <p className="mt-2 text-sm normal-case leading-relaxed text-steel-600">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
