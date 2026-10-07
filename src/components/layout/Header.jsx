// src/components/layout/Header.jsx
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { NAV } from '../../config/nav'
import { SITE } from '../../config/site'

// ── Desktop Mega Menu ──────────────────────────────────────────────────────
function MegaMenu({ item, isOpen, onClose }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 z-50 transition-all duration-200 ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
      style={{ minWidth: '680px', maxWidth: '900px' }}
      role="region"
      aria-label={`${item.label} submenu`}
    >
      <div className="mt-2 mega-panel">
        <div className="p-6 grid gap-6" style={{ gridTemplateColumns: `repeat(${item.groups.length}, 1fr)` }}>
          {item.groups.map((group) => (
            <div key={group.label}>
              <p className="eyebrow mb-3">{group.label}</p>
              <ul className="space-y-1">
                {group.items.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className="block py-1.5 px-2 text-sm text-[var(--color-ink)] rounded hover:bg-[var(--color-surface)] hover:text-[var(--color-accent-text)] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[var(--color-line)] px-6 py-3 bg-[var(--color-surface)]">
          <Link
            to={item.href}
            onClick={onClose}
            className="text-sm font-semibold text-[var(--color-accent-text)] hover:underline inline-flex items-center gap-1"
          >
            View all {item.label} →
          </Link>
        </div>
      </div>
    </div>
  )
}

// ── Mobile Accordion Item ──────────────────────────────────────────────────
function MobileNavItem({ item, onClose }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="border-b border-[var(--color-line)] last:border-0">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-[var(--color-navy)] text-base"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {item.label}
        <ChevronDown
          size={18}
          className={`text-[var(--color-accent-text)] transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>
      {expanded && (
        <div className="pb-4">
          {item.groups.map((group) => (
            <div key={group.label} className="px-6 mt-3">
              <p className="eyebrow mb-2">{group.label}</p>
              <ul className="space-y-2">
                {group.items.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className="block py-2 min-h-[44px] flex items-center text-sm text-[var(--color-ink)] hover:text-[var(--color-accent-text)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Main Header ────────────────────────────────────────────────────────────
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const headerRef = useRef(null)

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null)
    setMobileOpen(false)
  }, [location.pathname])

  // Shadow on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mega-menu when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Lock body scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header ${scrolled ? 'is-scrolled' : ''}`}
      >
        {/* Top bar */}
        <div className="topbar hidden md:block">
          <div className="container flex items-center justify-end gap-6 py-2">
            <a
              href={`tel:${SITE.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-1.5 hover:text-[var(--color-green-bright)] transition-colors"
            >
              <Phone size={12} />
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="hover:text-[var(--color-green-bright)] transition-colors"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        {/* Main nav bar */}
        <div className="container">
          <nav
            className="flex items-center justify-between h-16 lg:h-[72px] relative"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0" aria-label={`${SITE.name} — Home`}>
              <img
                src="/images/brand/upshoot-media-horizontal.png"
                alt={`${SITE.name} logo`}
                width="160"
                height="63"
                className="h-[52px] w-auto object-contain"
              />
            </Link>

            {/* Desktop mega-menu */}
            <ul className="hidden lg:flex items-center gap-1" role="menubar">
              {NAV.map((item) => (
                <li key={item.id} className="relative" role="none">
                  <button
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded={activeMenu === item.id}
                    className={`nav-link btn-inline ${
                      activeMenu === item.id ? 'is-open' : ''
                    }`}
                    onMouseEnter={() => setActiveMenu(item.id)}
                    onMouseLeave={() => setActiveMenu(null)}
                    onClick={() => setActiveMenu(activeMenu === item.id ? null : item.id)}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${activeMenu === item.id ? 'rotate-180 text-[var(--color-accent-text)]' : ''}`}
                    />
                  </button>
                  <div
                    onMouseEnter={() => setActiveMenu(item.id)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <MegaMenu
                      item={item}
                      isOpen={activeMenu === item.id}
                      onClose={() => setActiveMenu(null)}
                    />
                  </div>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/contact-us" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-accent-text)] transition-colors">
                Contact
              </Link>
              <Link to="/free-website-audit" className="btn btn-primary btn-inline text-sm px-5 min-h-[40px]">
                {SITE.ctaPrimary}
              </Link>
            </div>

            {/* Mobile: audit button + hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/free-website-audit"
                className="btn btn-primary btn-inline text-xs px-3 min-h-[36px] hidden sm:inline-flex"
              >
                Free Audit
              </Link>
              <button
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-drawer"
                className="w-10 h-10 flex items-center justify-center rounded text-[var(--color-navy)] hover:bg-[var(--color-surface)] transition-colors"
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-50 bg-black/40 lg:hidden transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel */}
        <nav
          id="mobile-drawer"
          role="navigation"
          aria-label="Mobile navigation"
          className={`fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-[360px] bg-white shadow-2xl flex flex-col lg:hidden transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--color-line)] flex-shrink-0">
            <Link to="/" onClick={() => setMobileOpen(false)} aria-label={`${SITE.name} — Home`}>
              <img
                src="/images/brand/upshoot-media-horizontal.png"
                alt={`${SITE.name} logo`}
                width="140"
                height="36"
                className="h-9 w-auto"
              />
            </Link>
            <button
              aria-label="Close menu"
              className="w-10 h-10 flex items-center justify-center rounded hover:bg-[var(--color-surface)] text-[var(--color-navy)]"
              onClick={() => setMobileOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable nav items */}
          <div className="flex-1 overflow-y-auto">
            {NAV.map((item) => (
              <MobileNavItem key={item.id} item={item} onClose={() => setMobileOpen(false)} />
            ))}
          </div>

          {/* Drawer footer */}
          <div className="px-6 py-5 border-t border-[var(--color-line)] space-y-3 flex-shrink-0">
            <Link
              to="/free-website-audit"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary w-full text-sm"
            >
              {SITE.ctaPrimary}
            </Link>
            <Link
              to="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="btn btn-navy w-full text-sm"
            >
              {SITE.ctaSecondary}
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/\D/g, '')}`}
              className="flex items-center justify-center gap-2 text-sm text-[var(--color-muted)]"
            >
              <Phone size={14} />
              {SITE.phone}
            </a>
          </div>
        </nav>
      </>
    </>
  )
}
