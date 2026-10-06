// src/components/sections/CoreServices.jsx
// Numbered service blocks (section 6 of homepage blueprint)
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useReveal } from '../ui/useReveal'

const BLOCKS = [
  {
    number: '01',
    title: 'Search Engine Optimisation & Lead Generation',
    tagline: 'Build organic visibility that compounds over time and converts visitors into qualified leads.',
    links: [
      { label: 'SEO Services', href: '/digital-marketing/seo-services' },
      { label: 'Local SEO', href: '/digital-marketing/seo-services/local-seo' },
      { label: 'Enterprise SEO', href: '/digital-marketing/seo-services/enterprise-seo' },
      { label: 'Lead Generation SEO', href: '/digital-marketing/seo-services/lead-generation-seo' },
      { label: 'SEO Audits', href: '/digital-marketing/seo-services/seo-audits' },
    ],
    detail: '/digital-marketing/seo-services',
  },
  {
    number: '02',
    title: 'Pay-Per-Click & Paid Media',
    tagline: 'Targeted paid campaigns across Google, Meta and LinkedIn that maximise return on every pound spent.',
    links: [
      { label: 'PPC Management', href: '/digital-marketing/ppc-management-services' },
      { label: 'Google Ads', href: '/digital-marketing/ppc-management-services/google-ads' },
      { label: 'Facebook Ads', href: '/digital-marketing/ppc-management-services/facebook-ads' },
      { label: 'Instagram Ads', href: '/digital-marketing/ppc-management-services/instagram-ads' },
      { label: 'LinkedIn Ads', href: '/digital-marketing/ppc-management-services/linkedin-ads' },
    ],
    detail: '/digital-marketing/ppc-management-services',
  },
  {
    number: '03',
    title: 'Online Marketing & Brand Authority',
    tagline: 'Content, social and reputation strategies that build trust and drive consistent engagement.',
    links: [
      { label: 'Social Media Marketing', href: '/digital-marketing/social-media-marketing' },
      { label: 'Email Marketing', href: '/digital-marketing/email-marketing' },
      { label: 'Content Marketing', href: '/digital-marketing/content-marketing' },
      { label: 'Online Reputation Management', href: '/digital-marketing/online-reputation-management' },
      { label: 'Marketing Consulting', href: '/digital-marketing/digital-marketing-consulting' },
    ],
    detail: '/digital-marketing',
  },
  {
    number: '04',
    title: 'Ecommerce Marketing',
    tagline: 'Integrated ecommerce strategies covering SEO, PPC, shopping feeds and marketplace growth.',
    links: [
      { label: 'Ecommerce SEO', href: '/ecommerce/ecommerce-seo' },
      { label: 'Ecommerce PPC', href: '/ecommerce/ecommerce-ppc' },
      { label: 'Amazon SEO', href: '/ecommerce/amazon-seo' },
      { label: 'Shopify Optimisation', href: '/ecommerce/shopify-optimization' },
      { label: 'Shopping Feed Automation', href: '/ecommerce/shopping-feed-automation' },
    ],
    detail: '/ecommerce/ecommerce-seo',
  },
]

export default function CoreServices() {
  const ref = useReveal()

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Integrated Digital Marketing Services"
          lead="Every service we offer is connected to a measurable business outcome. We do not sell vanity metrics."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {BLOCKS.map((block, i) => {
            const blockImages = {
              '01': '/images/home/service-seo.jpg',
              '02': '/images/home/service-ppc.jpg',
              '03': '/images/home/cta-strategy.jpg',
              '04': '/images/case-studies/saas-platform-card.jpg',
              '05': '/images/portfolio/law-firm-thumb.jpg',
              '06': '/images/home/hero-bg.jpg',
            }
            const img = blockImages[block.number]

            return (
              <article
                key={block.number}
                className="reveal card overflow-hidden flex flex-col group border border-[#E5E7EB] hover:border-[#B8963E]/40 hover:shadow-xl transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Visual Image Header */}
                {img && (
                  <div className="h-44 bg-[#0B1F3A] relative overflow-hidden">
                    <img
                      src={img}
                      alt={block.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent" />
                    <span
                      className="absolute bottom-3 left-4 text-3xl font-extrabold text-[#B8963E]"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {block.number}
                    </span>
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="text-[#0B1F3A] text-xl font-bold mb-2 group-hover:text-[#967016] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                      {block.title}
                    </h3>
                    <p className="text-sm font-medium text-[#4B5563] leading-relaxed">{block.tagline}</p>
                  </div>

                  <ul className="flex flex-wrap gap-2 mb-6">
                    {block.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="inline-block px-3 py-1.5 text-xs font-semibold rounded-lg border border-[#E5E7EB] text-[#1F2937] bg-[#F7F8FA] hover:border-[#967016] hover:bg-[#967016]/10 hover:text-[#967016] transition-all duration-150"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={block.detail}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-[#967016] hover:text-[#B8963E] hover:gap-2.5 transition-all"
                  >
                    View details <ArrowRight size={15} />
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
