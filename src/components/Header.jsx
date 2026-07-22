import { useState } from 'react'
import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

// DME's real signage has never included a standalone vector logo — their
// brand mark is the painted "DME" lettering on the shop building and
// highway sign themselves (see public/images/dme-*.jpg). Rather than
// inventing a logo graphic that doesn't exist, the header uses a
// stylized text wordmark that echoes the real sign's red/gold treatment.
function Wordmark({ dark = false }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-sm border-2 font-display text-base font-bold leading-none ${
          dark ? 'border-brass-500 bg-ink text-crimson-500' : 'border-crimson-600 bg-ink text-crimson-500'
        }`}
      >
        DME
      </span>
      <span className="font-display text-lg font-bold uppercase leading-tight tracking-tight text-ink">
        DME Auto
        <span className="block text-sm font-semibold text-crimson-600">Service</span>
      </span>
    </a>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-steel-200 bg-cream/95 backdrop-blur">
      <div className="border-b border-steel-200 bg-ink">
        <div className="container-page flex items-center justify-between py-2 text-xs text-steel-200">
          <p className="font-mono uppercase tracking-widest">
            {business.address.city}, {business.address.state} · {business.specialty}
          </p>
          <a href={business.phoneHref} className="hidden items-center gap-1.5 font-medium text-cream sm:flex">
            <Icon name="phone" className="h-3.5 w-3.5" />
            {business.phone}
          </a>
        </div>
      </div>

      <div className="container-page flex items-center justify-between py-3">
        <Wordmark />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-steel-600 transition-colors hover:text-crimson-600"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={business.phoneHref} className="btn-outline">
            <Icon name="phone" className="h-4 w-4" />
            Call Now
          </a>
          <a href="#contact" className="btn-primary">
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-steel-300 p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <Icon name={open ? 'x' : 'menu'} className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-steel-200 bg-cream lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-steel-700 hover:bg-steel-100"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href={business.phoneHref} className="btn-primary mt-2 justify-center">
              <Icon name="phone" className="h-4 w-4" />
              {business.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
