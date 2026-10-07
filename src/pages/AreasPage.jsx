// src/pages/AreasPage.jsx
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import CTABand from '../components/sections/CTABand'
import PageHero from '../components/ui/PageHero'
import { SITE } from '../config/site'

const MAJOR_MARKETS = [
  { city: 'New York, NY', region: 'Northeast', focus: 'Finance, Healthcare, Real Estate, Fashion & E-commerce' },
  { city: 'Los Angeles, CA', region: 'West Coast', focus: 'Entertainment, Consumer Goods, Tech, Food & Beverage' },
  { city: 'Chicago, IL', region: 'Midwest', focus: 'B2B Manufacturing, Legal, Logistics, Professional Services' },
  { city: 'Houston & Dallas, TX', region: 'South', focus: 'Energy, Medical Services, Tech Startups, Real Estate' },
  { city: 'Miami, FL', region: 'Southeast', focus: 'Hospitality, Tourism, Luxury Real Estate, International Commerce' },
  { city: 'San Francisco & Bay Area, CA', region: 'West Coast', focus: 'SaaS Platforms, AI Startups, Enterprise Tech' },
  { city: 'Atlanta, GA', region: 'Southeast', focus: 'FinTech, Media, Healthcare Systems, Logistics' },
  { city: 'Seattle, WA', region: 'Pacific Northwest', focus: 'Cloud Tech, Ecommerce Platforms, Life Sciences' },
]

export default function AreasPage() {
  return (
    <>
      <Helmet>
        <title>Areas We Serve | US Nationwide Digital Marketing & Web Agency | {SITE.name}</title>
        <meta
          name="description"
          content={`Explore the markets and regions served nationwide by ${SITE.name}. Strategic SEO, paid search, and high-performance web development across North America.`}
        />
        <link rel="canonical" href={`${SITE.url}/area-we-serve`} />
      </Helmet>

      <PageHero
        eyebrow="Nationwide footprint"
        title="Strategic Marketing Across the United States"
        lead="Headquartered in New York, we partner with growth-oriented brands across major metropolitan markets nationwide."
      />

      {/* Nationwide Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
            <div>
              <p className="eyebrow mb-3">Remote-First Agility, Local Market Precision</p>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#071735] mb-6 leading-tight">
                Empowering businesses nationwide to dominate regional and national search
              </h2>
              <p className="text-base text-[#5B6575] leading-relaxed mb-6">
                Whether you operate a multi-location dental network across Florida, an enterprise real estate brokerage in California, or an e-commerce brand distributing from the Midwest, our team delivers localized SEO, geo-targeted PPC, and custom digital infrastructure designed for measurable market share expansion.
              </p>
              <div className="space-y-3">
                {[
                  'Multi-location Local SEO & Google Business Profile optimization',
                  'High-intent geo-targeted Google Ads & Paid Social campaigns',
                  'Ultra-fast headless web architectures optimized for Core Web Vitals',
                  'Full compliance with federal, regional, and industry advertising standards',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#007A4B] flex-shrink-0 mt-1" />
                    <span className="text-sm font-medium text-[#1F2937]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F7F8FA] p-8 rounded-[8px] border border-[#E5E7EB]">
              <h3 className="text-xl font-serif font-bold text-[#071735] mb-4">
                Primary Regional Hub
              </h3>
              <div className="space-y-4 text-sm text-[#5B6575]">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#007A4B] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="text-[#1F2937] block font-semibold">New York Headquarters:</strong>
                    {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </div>
                </div>
                <p>
                  Our centralized campaign operations, engineering team, and account directors operate on Eastern and Pacific time zones, providing dedicated support throughout standard US business hours.
                </p>
                <div className="pt-4 border-t border-[#E5E7EB]">
                  <Link
                    to="/free-website-audit"
                    className="btn btn-primary w-full text-center"
                  >
                    Request a Regional Market Audit
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Markets Grid */}
          <div className="mt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="eyebrow mb-2">Key Metro Coverage</p>
              <h2 className="text-3xl font-serif font-bold text-[#071735]">
                Key Markets & Industry Clusters
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {MAJOR_MARKETS.map((m) => (
                <div
                  key={m.city}
                  className="p-6 rounded-[6px] border border-[#E5E7EB] bg-white hover:border-[#008A55] hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#007A4B]">
                      {m.region}
                    </span>
                    <MapPin size={16} className="text-[#5B6575]" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#071735] mb-2">
                    {m.city}
                  </h3>
                  <p className="text-xs text-[#5B6575] leading-relaxed mb-4">
                    {m.focus}
                  </p>
                  <Link
                    to="/contact-us"
                    className="text-xs font-semibold text-[#071735] hover:text-[#007A4B] inline-flex items-center gap-1 transition-colors"
                  >
                    Consult our specialists <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
