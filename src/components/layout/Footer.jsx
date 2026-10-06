// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { SITE } from '../../config/site'
import { FOOTER_LINKS } from '../../config/nav'

const SOCIAL_ICONS = {
  LinkedIn: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.95 0-1.68.73-1.68 1.68s.73 1.68 1.68 1.68c.94 0 1.68-.73 1.68-1.68 0-.95-.74-1.68-1.68-1.68Z" />
    </svg>
  ),
  'Twitter / X': () => (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Facebook: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.2 22 12z" />
    </svg>
  ),
  Instagram: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
}

const SERVICES_LINKS = [
  { label: 'SEO Services', href: '/digital-marketing/seo-services' },
  { label: 'PPC Management', href: '/digital-marketing/ppc-management-services' },
  { label: 'Social Media Marketing', href: '/digital-marketing/social-media-marketing' },
  { label: 'Content Marketing', href: '/digital-marketing/content-marketing' },
  { label: 'Website Design', href: '/website-design-services' },
  { label: 'Ecommerce Web Design', href: '/ecommerce-web-design' },
  { label: 'Logo Design', href: '/creative-services/logo-design' },
  { label: 'Branding & Identity', href: '/creative-services/branding-identity' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-navy-deep)] text-white" role="contentinfo">
      {/* Main footer grid */}
      <div className="container section">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5" aria-label={`${SITE.name} — Home`}>
              <img
                src="/images/brand/logo-light.svg"
                alt={SITE.name}
                className="h-8 w-auto"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <span
                className="hidden font-bold text-white text-xl tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {SITE.name}
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              {SITE.tagline}
            </p>

            {/* Contact info */}
            <address className="not-italic space-y-3">
              <a
                href={`tel:${SITE.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[#B8963E] transition-colors"
              >
                <Phone size={14} className="flex-shrink-0 text-[#B8963E]" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[#B8963E] transition-colors"
              >
                <Mail size={14} className="flex-shrink-0 text-[#B8963E]" />
                {SITE.email}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#B8963E]" />
                <span>
                  {SITE.address.street},<br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </span>
              </div>
            </address>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {[
                { href: SITE.social.linkedin, key: 'LinkedIn', label: 'LinkedIn' },
                { href: SITE.social.twitter, key: 'Twitter / X', label: 'Twitter / X' },
                { href: SITE.social.facebook, key: 'Facebook', label: 'Facebook' },
                { href: SITE.social.instagram, key: 'Instagram', label: 'Instagram' },
              ].map(({ href, key, label }) => {
                const IconComponent = SOCIAL_ICONS[key]
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[var(--color-accent)] hover:text-[var(--color-navy)] transition-all duration-200 text-white hover:-translate-y-0.5"
                  >
                    {IconComponent && <IconComponent />}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold !text-white uppercase tracking-[0.16em] mb-5 !font-[family-name:var(--font-body)]">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-300 hover:text-amber-300 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold !text-white uppercase tracking-[0.16em] mb-5 !font-[family-name:var(--font-body)]">
              Company
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-300 hover:text-amber-300 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA / newsletter column */}
          <div>
            <h3 className="text-sm font-bold !text-white uppercase tracking-[0.16em] mb-5 !font-[family-name:var(--font-body)]">
              Grow Your Business
            </h3>
            <p className="text-sm text-slate-300 mb-5 leading-relaxed">
              Receive a complimentary audit of your website, SEO or paid media accounts — no obligation.
            </p>
            <Link
              to="/free-website-audit"
              className="btn btn-primary w-full text-sm mb-4 font-bold shadow-lg"
            >
              {SITE.ctaPrimary}
            </Link>
            <Link
              to="/contact-us"
              className="btn btn-outline w-full text-sm font-semibold border-white/30 text-white hover:bg-white/10"
            >
              {SITE.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-services" className="hover:text-white/70 transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white/70 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
