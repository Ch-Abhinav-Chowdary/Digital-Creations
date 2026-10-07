// src/pages/HubPage.jsx — Template for 3 hub pages
import { useLocation, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import SERVICES from '../content/services'
import { NAV } from '../config/nav'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import SectionHeading from '../components/ui/SectionHeading'
import CTABand from '../components/sections/CTABand'
import WhyUs from '../components/sections/WhyUs'
import PageHero from '../components/ui/PageHero'
import { SITE } from '../config/site'

const HUB_META = {
  'digital-marketing': {
    title: 'Digital Marketing Services',
    tagline: 'Data-driven marketing that builds your audience, generates leads and grows revenue.',
    description: 'Comprehensive digital marketing services including SEO, PPC, content marketing and social media — all tied to measurable business outcomes.',
  },
  'design-and-development': {
    title: 'Web Design & Development',
    tagline: 'From strategy to launch: design, development and ongoing performance.',
    description: 'Premium web design and development services — website design, redesign, ecommerce and custom development, built for conversion and performance.',
  },
  'creative-services': {
    title: 'Creative Services',
    tagline: 'Original brand identity, design and creative production for digital businesses.',
    description: 'Logo design, branding, graphic design, social media creative and motion graphics from an experienced creative team.',
  },
  ecommerce: {
    title: 'Ecommerce Marketing',
    tagline: 'SEO, paid media, shopping feeds and storefront optimisation that grow online sales.',
    description: 'Ecommerce SEO, PPC, Amazon, Shopify and marketplace growth programmes tied to revenue.',
  },
  'ai-marketing': {
    title: 'AI Marketing',
    tagline: 'Intelligent automation for search, social, content and customer conversations.',
    description: 'AI-powered SEO, social, chatbots, video and marketing automation.',
  },
  solutions: {
    title: 'Industry Solutions',
    tagline: 'Sector-specific marketing systems for the markets you compete in.',
    description: 'Digital marketing playbooks for ecommerce, healthcare, real estate, legal, food, technology and more.',
  },
}

export default function HubPage() {
  const { pathname } = useLocation()
  const hubSlug = pathname.replace(/^\//, '')
  const meta = HUB_META[hubSlug] || HUB_META['digital-marketing']

  // Get nav groups for this hub
  const navItem = NAV.find((n) => n.id === hubSlug || n.href === `/${hubSlug}`)

  // Get services belonging to this hub
  const hubServices = SERVICES.filter((s) => s.hub === hubSlug)

  return (
    <>
      <Helmet>
        <title>{meta.title} | {SITE.name}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`${SITE.url}/${hubSlug}`} />
        <meta property="og:title" content={`${meta.title} | ${SITE.name}`} />
        <meta property="og:description" content={meta.description} />
      </Helmet>

      <PageHero
        eyebrow="Practice area"
        title={meta.title}
        lead={meta.tagline}
        breadcrumbs={<Breadcrumbs />}
      >
        <div className="flex flex-wrap gap-3 mt-8">
          <Link to="/free-website-audit" className="btn btn-primary">
            {SITE.ctaPrimary} <ArrowRight size={16} />
          </Link>
          <Link to="/contact-us" className="btn btn-outline">Contact Us</Link>
        </div>
      </PageHero>

      <main id="main-content">
        {/* Grouped service links from nav */}
        {navItem && (
          <section className="section bg-[#F7F8FA]">
            <div className="container">
              <SectionHeading
                eyebrow="Our Services"
                title="Everything Under This Practice"
                lead="Click any service below to view the full process, deliverables and FAQs."
              />
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {navItem.groups.map((group) => (
                  <div key={group.label} className="card p-6">
                    <p className="eyebrow mb-3">{group.label}</p>
                    <ul className="space-y-2">
                      {group.items.map((link) => (
                        <li key={link.href}>
                          <Link
                            to={link.href}
                            className="flex items-center gap-2 text-sm text-[#1F2937] hover:text-[#007A4B] transition-colors py-1"
                          >
                            <ArrowRight size={13} className="text-[#007A4B] flex-shrink-0" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Featured services (those with full data) */}
        {hubServices.length > 0 && (
          <section className="section bg-white">
            <div className="container">
              <SectionHeading eyebrow="Featured" title="Services With Full Detail" lead="These services have complete case studies, process documentation and FAQs." />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {hubServices.map((svc) => (
                  <Link
                    key={svc.slug}
                    to={`/${svc.slug}`}
                    className="card group overflow-hidden flex flex-col border border-[#E5E7EB] hover:border-[#008A55]/50 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-36 bg-[#071735] relative overflow-hidden">
                      <img
                        src={
                          svc.slug.includes('seo')
                            ? '/images/home/service-seo.jpg'
                            : svc.slug.includes('ppc') || svc.slug.includes('ads')
                            ? '/images/home/service-ppc.jpg'
                            : svc.slug.includes('design') || svc.slug.includes('development')
                            ? '/images/portfolio/law-firm-thumb.jpg'
                            : '/images/case-studies/saas-platform-card.jpg'
                        }
                        alt={svc.title}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071735] via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 bg-[#071735]/90 backdrop-blur-sm text-[#00E89A] text-[11px] font-bold px-2 py-0.5 rounded">
                        {svc.group}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-[#071735] text-lg font-bold mb-2 group-hover:text-[#007A4B] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                        {svc.title}
                      </h3>
                      <p className="text-sm text-[#5B6575] flex-1 mb-4 leading-relaxed">{svc.tagline}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#007A4B] group-hover:gap-2 transition-all">
                        View service detail <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <WhyUs />
      </main>

      <CTABand />
    </>
  )
}
