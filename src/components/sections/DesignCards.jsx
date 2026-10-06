// src/components/sections/DesignCards.jsx
// Section 7: Design & Development card grid
import { Link } from 'react-router-dom'
import { ArrowRight, Monitor, RefreshCcw, ShoppingCart, Code2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useReveal } from '../ui/useReveal'

const CARDS = [
  {
    icon: Monitor,
    title: 'Website Design Services',
    tagline: 'Conversion-focused, mobile-first web designs that reflect your brand with authority.',
    href: '/website-design-services',
    color: '#0B1F3A',
  },
  {
    icon: RefreshCcw,
    title: 'Website Redesign',
    tagline: 'Transform an underperforming site into a high-converting digital asset without starting from scratch.',
    href: '/website-redesign',
    color: '#13294B',
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Web Design',
    tagline: 'Premium shopping experiences on Shopify, WooCommerce and Magento that drive purchases.',
    href: '/ecommerce-web-design',
    color: '#1a3360',
  },
  {
    icon: Code2,
    title: 'Custom Web Development',
    tagline: 'Bespoke web applications and platforms engineered for performance, scalability and security.',
    href: '/custom-web-design',
    color: '#0B1F3A',
  },
]

export default function DesignCards() {
  const ref = useReveal()

  return (
    <section ref={ref} className="section bg-[#F7F8FA]">
      <div className="container">
        <SectionHeading
          eyebrow="Design & Development"
          title="Beautiful Websites That Work as Hard as You Do"
          lead="Every website we design is built for performance, accessibility and conversion — not just aesthetics."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <Link
                key={card.href}
                to={card.href}
                className="reveal group flex flex-col rounded-[var(--radius)] overflow-hidden border border-[var(--color-line)] bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lifted)] hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {/* Card header */}
                <div
                  className="relative h-40 flex items-center justify-center overflow-hidden"
                  style={{ background: card.color }}
                >
                  <img
                    src={i % 2 === 0 ? '/images/portfolio/law-firm-thumb.jpg' : '/images/case-studies/saas-platform-card.jpg'}
                    alt={card.title}
                    className="w-full h-full object-cover opacity-30 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/50 to-transparent" />
                  <div className="absolute z-10 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
                    <Icon
                      size={28}
                      className="text-[#B8963E] group-hover:scale-110 transition-transform duration-200"
                      strokeWidth={1.75}
                    />
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-lg font-bold text-[#0B1F3A] mb-2 group-hover:text-[#967016] transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm font-medium text-[#4B5563] leading-relaxed flex-1">{card.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#967016] group-hover:text-[#B8963E] group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={13} />
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
