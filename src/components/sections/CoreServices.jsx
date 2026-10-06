// src/components/sections/CoreServices.jsx
import { Link } from 'react-router-dom'
import { ArrowRight, Search, Megaphone, Globe, ShoppingCart } from 'lucide-react'
import { useReveal } from '../ui/useReveal'

const BLOCKS = [
  {
    number: '01',
    icon: Search,
    title: 'SEO & Lead Generation',
    tagline: 'Organic visibility that compounds over time.',
    color: '#2D6E8F',
    image: '/images/home/service-seo.jpg',
    links: ['SEO Services', 'Local SEO', 'Enterprise SEO', 'SEO Audits'],
    hrefs: [
      '/digital-marketing/seo-services',
      '/digital-marketing/seo-services/local-seo',
      '/digital-marketing/seo-services/enterprise-seo',
      '/digital-marketing/seo-services/seo-audits',
    ],
    detail: '/digital-marketing/seo-services',
    metric: '+320% Pipeline',
  },
  {
    number: '02',
    icon: Megaphone,
    title: 'Paid Media & PPC',
    tagline: 'Maximum return on every ad dollar spent.',
    color: '#C08930',
    image: '/images/home/service-ppc.jpg',
    links: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'PPC Management'],
    hrefs: [
      '/digital-marketing/ppc-management-services/google-ads',
      '/digital-marketing/ppc-management-services/facebook-ads',
      '/digital-marketing/ppc-management-services/linkedin-ads',
      '/digital-marketing/ppc-management-services',
    ],
    detail: '/digital-marketing/ppc-management-services',
    metric: '4.8× ROAS',
  },
  {
    number: '03',
    icon: Globe,
    title: 'Brand & Social',
    tagline: 'Content and reputation that builds trust.',
    color: '#346F58',
    image: '/images/home/cta-strategy.jpg',
    links: ['Social Media', 'Email Marketing', 'Content Marketing', 'Reputation Mgmt'],
    hrefs: [
      '/digital-marketing/social-media-marketing',
      '/digital-marketing/email-marketing',
      '/digital-marketing/content-marketing',
      '/digital-marketing/online-reputation-management',
    ],
    detail: '/digital-marketing',
    metric: '+65% Engagement',
  },
  {
    number: '04',
    icon: ShoppingCart,
    title: 'Ecommerce Growth',
    tagline: 'Integrated strategies from traffic to checkout.',
    color: '#B85C38',
    image: '/images/case-studies/saas-platform-card.jpg',
    links: ['Ecommerce SEO', 'Ecommerce PPC', 'Shopify Optimisation', 'Amazon SEO'],
    hrefs: [
      '/ecommerce/ecommerce-seo',
      '/ecommerce/ecommerce-ppc',
      '/ecommerce/shopify-optimization',
      '/ecommerce/amazon-seo',
    ],
    detail: '/ecommerce/ecommerce-seo',
    metric: '2.4× Conversion',
  },
]

export default function CoreServices() {
  const ref = useReveal()

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">

        <div className="text-center mb-12 max-w-xl mx-auto">
          <p className="eyebrow justify-center">What We Do</p>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            Services Tied to Real Outcomes
          </h2>
          <p className="text-[var(--color-muted)] text-base mt-3">
            Every service we deliver connects to a measurable business result.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {BLOCKS.map((block, i) => {
            const Icon = block.icon
            return (
              <article
                key={block.number}
                className="reveal group rounded-xl overflow-hidden border border-[var(--color-line)] hover:border-transparent hover:shadow-[var(--shadow-lifted)] transition-all duration-300 bg-white flex flex-col"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {/* Image header */}
                <div className="h-44 relative overflow-hidden bg-[var(--color-navy)]">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090F1C]/85 via-[#090F1C]/25 to-transparent" />
                  <div
                    className="absolute bottom-3 left-4 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: `${block.color}20`, border: `1.5px solid ${block.color}45` }}
                  >
                    <Icon size={16} style={{ color: block.color }} strokeWidth={1.75} />
                  </div>
                  <span
                    className="absolute bottom-3 right-4 text-[10px] font-semibold px-2 py-1 rounded-full"
                    style={{ color: block.color, background: `${block.color}18`, border: `1px solid ${block.color}35` }}
                  >
                    {block.metric}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                      {block.number}
                    </span>
                    <h3
                      className="text-lg font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent-text)] transition-colors mt-0.5"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {block.title}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] mt-1 font-normal leading-relaxed">{block.tagline}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {block.links.map((label, j) => (
                      <Link
                        key={block.hrefs[j]}
                        to={block.hrefs[j]}
                        className="text-xs font-medium px-3 py-1.5 rounded-md border border-[var(--color-line)] text-[var(--color-ink)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-text)] hover:bg-white transition-all duration-150"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>

                  <Link
                    to={block.detail}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent-text)] hover:gap-2 transition-all"
                  >
                    Explore service <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
