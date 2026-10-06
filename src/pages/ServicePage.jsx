// src/pages/ServicePage.jsx — Template for all ~70 service pages
import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight } from 'lucide-react'
import SERVICES from '../content/services'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import SectionHeading from '../components/ui/SectionHeading'
import FAQAccordion from '../components/ui/FAQAccordion'
import LeadForm from '../components/ui/LeadForm'
import CTABand from '../components/sections/CTABand'
import PageHero from '../components/ui/PageHero'
import { SITE } from '../config/site'

function ProcessStepper({ steps }) {
  return (
    <ol className="space-y-6">
      {steps.map((step) => (
        <li key={step.step} className="flex gap-5">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0B1F3A] flex items-center justify-center text-[#B8963E] font-bold text-sm">
            {step.step}
          </div>
          <div className="pt-1.5">
            <h3 className="text-base font-semibold text-[#0B1F3A] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              {step.title}
            </h3>
            <p className="text-sm text-[#5B6575] leading-relaxed">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default function ServicePage() {
  const { '*': slugPath } = useParams()
  const service = SERVICES.find((s) => s.slug === slugPath || s.slug.endsWith(slugPath))

  if (!service) {
    return <Navigate to="/digital-marketing" replace />
  }

  const canonical = `${SITE.url}/${service.slug}`

  return (
    <>
      <Helmet>
        <title>{service.seo.title}</title>
        <meta name="description" content={service.seo.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={service.seo.title} />
        <meta property="og:description" content={service.seo.description} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.seo.description,
          provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
          url: canonical,
        })}</script>
      </Helmet>

      <PageHero
        eyebrow={service.group}
        title={service.hero.h1}
        lead={service.hero.sub}
        breadcrumbs={<Breadcrumbs />}
      >
        <div className="flex flex-wrap gap-3 mt-8">
          {service.hero.cta.map((label, i) => (
            <Link
              key={label}
              to={i === 0 ? '/free-website-audit' : '/contact-us'}
              className={i === 0 ? 'btn btn-primary' : 'btn btn-outline'}
            >
              {label} {i === 0 && <ArrowRight size={16} />}
            </Link>
          ))}
        </div>
      </PageHero>

      <main id="main-content">
        <div className="container section">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* Left: content */}
            <div className="space-y-16">
              {/* Problem / Solution */}
              <div>
                <SectionHeading eyebrow="The Challenge" title="Why This Matters" align="left" />
                <p className="text-[#1F2937] leading-relaxed mb-6">{service.problem}</p>
                <p className="text-[#1F2937] leading-relaxed">{service.solution}</p>
              </div>

              {/* Process */}
              <div>
                <SectionHeading eyebrow="Our Approach" title="How We Deliver Results" align="left" />
                <ProcessStepper steps={service.process} />
              </div>

              {/* Service Execution & Deliverables Visual Banner */}
              <div className="rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#0B1F3A] text-white shadow-lg relative">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={
                      service.slug.includes('seo')
                        ? '/images/home/service-seo.jpg'
                        : service.slug.includes('ppc') || service.slug.includes('ads')
                        ? '/images/home/service-ppc.jpg'
                        : service.slug.includes('design') || service.slug.includes('development')
                        ? '/images/portfolio/law-firm-thumb.jpg'
                        : '/images/case-studies/saas-platform-card.jpg'
                    }
                    alt={`${service.title} Strategy & Execution`}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/40 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                    <div>
                      <span className="text-[#B8963E] text-xs font-semibold uppercase tracking-widest block">Execution Blueprint</span>
                      <span className="text-white font-bold text-lg font-serif">{service.title}</span>
                    </div>
                    <span className="hidden sm:inline-block bg-[#B8963E] text-[#0B1F3A] text-xs font-bold px-3 py-1 rounded-full">
                      Full Service SLA
                    </span>
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <SectionHeading eyebrow="Deliverables" title="What You Receive" align="left" />
                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-[#1F2937] p-3 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB]">
                      <CheckCircle size={16} className="text-[#B8963E] flex-shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div>
                <SectionHeading eyebrow="FAQ" title="Common Questions" align="left" />
                <FAQAccordion items={service.faq} />
              </div>

              {/* Related services */}
              {service.related?.length > 0 && (
                <div>
                  <SectionHeading eyebrow="Related" title="You May Also Be Interested In" align="left" />
                  <div className="flex flex-wrap gap-3">
                    {service.related.map((slug) => {
                      const rel = SERVICES.find((s) => s.slug.endsWith(slug))
                      if (!rel) return null
                      return (
                        <Link
                          key={slug}
                          to={`/${rel.slug}`}
                          className="px-4 py-2 rounded border border-[#E5E7EB] text-sm font-medium text-[#1F2937] hover:border-[#B8963E] hover:text-[#B8963E] transition-colors"
                        >
                          {rel.title}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Right: sticky lead form */}
            <aside className="lg:sticky lg:top-24 self-start">
              <div className="card p-6">
                <h2 className="text-[#0B1F3A] text-xl mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                  {SITE.ctaPrimary}
                </h2>
                <p className="text-sm text-[#5B6575] mb-5">
                  Tell us about your business and we will prepare a personalised recommendation.
                </p>
                <LeadForm formId={`service-${service.slug}`} />
              </div>
            </aside>
          </div>
        </div>
      </main>

      <CTABand />
    </>
  )
}
