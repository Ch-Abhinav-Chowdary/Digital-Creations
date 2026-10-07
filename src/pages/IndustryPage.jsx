// src/pages/IndustryPage.jsx — Template for all 7 industry + 20 vertical pages
import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle } from 'lucide-react'
import INDUSTRIES from '../content/industries'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import SectionHeading from '../components/ui/SectionHeading'
import FAQAccordion from '../components/ui/FAQAccordion'
import LeadForm from '../components/ui/LeadForm'
import CTABand from '../components/sections/CTABand'
import PageHero from '../components/ui/PageHero'
import { SITE } from '../config/site'

export default function IndustryPage() {
  const { '*': slugPath } = useParams()
  const industry = INDUSTRIES.find((ind) => ind.slug === slugPath || ind.slug.endsWith(slugPath))

  if (!industry) return <Navigate to="/solutions" replace />

  const canonical = `${SITE.url}/${industry.slug}`

  return (
    <>
      <Helmet>
        <title>{industry.seo.title}</title>
        <meta name="description" content={industry.seo.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={industry.seo.title} />
        <meta property="og:description" content={industry.seo.description} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `${industry.title} — ${SITE.name}`,
          url: canonical,
          provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
        })}</script>
      </Helmet>

      <PageHero
        eyebrow="Sector playbook"
        title={industry.title}
        lead={industry.tagline}
        breadcrumbs={<Breadcrumbs />}
      >
        <div className="grid lg:grid-cols-12 gap-10 items-center mt-8">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-4">
              <Link to="/free-website-audit" className="btn btn-primary min-h-[48px] px-7">
                Request Free Sector Audit <ArrowRight size={16} />
              </Link>
              <Link to="/contact-us" className="btn btn-outline min-h-[48px] px-7">
                Speak with a Specialist
              </Link>
            </div>
          </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#071735] group">
                <img
                  src={industry.image}
                  alt={industry.alt || industry.title}
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071735] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00E89A]">
                    {industry.title} Strategy
                  </span>
                  <span className="text-[11px] bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full font-semibold">
                    Verified ROI Framework
                  </span>
                </div>
              </div>
            </div>
          </div>
      </PageHero>

      <main id="main-content">
        <div className="container section">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            <div className="space-y-14">
              {/* Challenges */}
              <div>
                <SectionHeading eyebrow="The Landscape" title={`Challenges Facing ${industry.title.split(' ')[0]} Businesses`} align="left" />
                <ul className="space-y-3">
                  {industry.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[#1F2937] p-3 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB]">
                      <CheckCircle size={16} className="text-[#007A4B] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industry Case study */}
              {industry.caseStudy && (
                <div className="bg-[#071735] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={`${industry.caseStudy.client} Case Study`}
                      className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071735] via-[#071735]/40 to-transparent" />
                    <div className="absolute top-4 left-4 bg-[#00D98B] text-[#071735] text-xs font-bold px-3 py-1 rounded shadow uppercase tracking-wider">
                      Featured Sector Case Study
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-white text-xl font-serif font-bold mb-2">
                      {industry.caseStudy.client}
                    </h3>
                    <div className="text-[#00E89A] text-3xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      {industry.caseStudy.result}
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                      Discover the tailored omni-channel acquisition architecture and local conversion funnels deployed for this client.
                    </p>
                    <Link
                      to={industry.caseStudy.href}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#00E89A] hover:gap-2.5 transition-all"
                    >
                      Read the full case study <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              )}

              {/* FAQ */}
              <div>
                <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" align="left" />
                <FAQAccordion items={industry.faq} />
              </div>
            </div>

            {/* Sticky form */}
            <aside className="lg:sticky lg:top-24 self-start">
              <div className="card p-6">
                <h2 className="text-[#071735] text-xl mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                  Get a Free Industry Audit
                </h2>
                <p className="text-sm text-[#5B6575] mb-5">
                  Tell us about your {industry.title.toLowerCase()} business and we will prepare a tailored strategy.
                </p>
                <LeadForm formId={`industry-${industry.slug}`} />
              </div>
            </aside>
          </div>
        </div>
      </main>

      <CTABand />
    </>
  )
}
