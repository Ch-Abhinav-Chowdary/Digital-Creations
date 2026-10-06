// src/components/sections/DesignCards.jsx
import { Link } from 'react-router-dom'
import { ArrowRight, Monitor, RefreshCcw, ShoppingCart, Code2 } from 'lucide-react'
import { useReveal } from '../ui/useReveal'

const CARDS = [
  {
    icon: Monitor,
    title: 'Website Design',
    tagline: 'Conversion-first, mobile-native.',
    href: '/website-design-services',
    color: '#2D6E8F',
    image: '/images/portfolio/law-firm-thumb.jpg',
    badge: '99/100 Speed',
  },
  {
    icon: RefreshCcw,
    title: 'Website Redesign',
    tagline: 'Transform without starting from scratch.',
    href: '/website-redesign',
    color: '#C08930',
    image: '/images/case-studies/saas-platform-card.jpg',
    badge: '2.4× Conversions',
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Design',
    tagline: 'Premium Shopify & WooCommerce stores.',
    href: '/ecommerce-web-design',
    color: '#346F58',
    image: '/images/home/service-seo.jpg',
    badge: 'Shopify Plus',
  },
  {
    icon: Code2,
    title: 'Custom Development',
    tagline: 'Bespoke apps built for scale.',
    href: '/custom-web-design',
    color: '#B85C38',
    image: '/images/home/hero-bg.jpg',
    badge: 'WCAG AA',
  },
]

export default function DesignCards() {
  const ref = useReveal()

  return (
    <section ref={ref} className="section bg-[var(--color-surface)]">
      <div className="container">

        {/* Section header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="eyebrow justify-center">Design & Development</p>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            Websites That Work as Hard as You Do
          </h2>
          <p className="text-[var(--color-muted)] text-base mt-3">
            Every site we build is engineered for performance, accessibility, and conversion.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <Link
                key={card.href}
                to={card.href}
                className="reveal group flex flex-col rounded-2xl overflow-hidden border border-[var(--color-line)] bg-white hover:border-transparent hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {/* Image header */}
                <div className="h-40 relative overflow-hidden bg-[var(--color-navy)]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-75 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/90 via-[var(--color-navy)]/40 to-transparent" />
                  {/* Icon */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${card.color}22`, border: `1.5px solid ${card.color}55` }}
                  >
                    <Icon size={22} style={{ color: card.color }} strokeWidth={1.75} />
                  </div>
                  {/* Badge */}
                  <span
                    className="absolute bottom-2.5 right-2.5 text-[10px] font-extrabold px-2 py-1 rounded-full"
                    style={{ color: card.color, background: `${card.color}20`, border: `1px solid ${card.color}40` }}
                  >
                    {card.badge}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1 bg-white">
                  <h3
                    className="text-base font-bold text-[var(--color-navy)] mb-1.5 group-hover:text-[var(--color-accent)] transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-xs text-[var(--color-muted)] font-medium leading-relaxed flex-1">{card.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[var(--color-accent-text)] group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
