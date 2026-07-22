import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink py-14 text-steel-300">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-crimson-600 bg-ink font-display text-sm font-bold text-crimson-500">
              DME
            </span>
            <span className="font-display text-base font-bold uppercase text-white">DME Auto Service</span>
          </div>
          <p className="mt-4 text-sm normal-case leading-relaxed text-steel-400">
            Locally owned auto repair in Poulsbo, WA — classics, fleets, and everyday commuters, since day one.
          </p>
          <a
            href={business.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-steel-300 hover:text-white"
          >
            <Icon name="facebook" className="h-4 w-4" />
            Facebook
          </a>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-steel-500">Quick Links</p>
          <ul className="mt-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-steel-300 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-steel-500">Contact</p>
          <ul className="mt-4 space-y-2 text-sm normal-case text-steel-300">
            <li>{business.addressFull}</li>
            <li>
              <a href={business.phoneHref} className="hover:text-white">
                {business.phone}
              </a>
            </li>
            <li>
              <a href={business.facebookMessengerUrl} target="_blank" rel="noreferrer" className="hover:text-white">
                Message on Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-steel-500">Hours</p>
          <ul className="mt-4 space-y-1 text-sm normal-case text-steel-300">
            <li className="flex justify-between gap-4">
              <span>Mon &ndash; Fri</span>
              <span>8 AM &ndash; 5 PM</span>
            </li>
            <li className="flex justify-between gap-4 text-steel-500">
              <span>Sat &ndash; Sun</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-12 border-t border-white/10 pt-6 text-xs normal-case text-steel-500">
        <p>
          &copy; {new Date().getFullYear()} DME Auto Service. All rights reserved. Owned &amp; operated by{' '}
          {business.ownerName}.
        </p>
      </div>
    </footer>
  )
}
