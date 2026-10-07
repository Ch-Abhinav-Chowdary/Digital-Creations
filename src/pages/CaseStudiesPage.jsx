// src/pages/CaseStudiesPage.jsx
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, BarChart3, Building, ShieldCheck } from 'lucide-react'
import CASE_STUDIES from '../content/caseStudies'
import SectionHeading from '../components/ui/SectionHeading'
import CTABand from '../components/sections/CTABand'
import PageHero from '../components/ui/PageHero'
import { SITE } from '../config/site'

export default function CaseStudiesPage() {
  const { slug } = useParams()

  // Single Case Study Detail View
  if (slug) {
    const cs = CASE_STUDIES.find((item) => item.slug === slug)

    if (!cs) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
          <h1 className="text-3xl font-bold text-[#071735] mb-4">Case Study Not Found</h1>
          <p className="text-[#5B6575] mb-6">The case study you are looking for does not exist or has been moved.</p>
          <Link to="/case-studies" className="btn btn-primary">
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>
        </div>
      )
    }

    return (
      <>
        <Helmet>
          <title>{cs.seo?.title || `${cs.headline} | ${SITE.name}`}</title>
          <meta name="description" content={cs.seo?.description || cs.summary} />
          <link rel="canonical" href={`${SITE.url}/case-studies/${cs.slug}`} />
        </Helmet>

        {/* Hero Header */}
        <header className="page-hero">
          <div className="grain" aria-hidden="true" />
          <div className="container page-hero__inner relative z-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-[#00E89A] hover:text-white transition-colors mb-6 font-medium"
            >
              <ArrowLeft size={16} /> Back to All Case Studies
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#00E89A]">
                {cs.industry}
              </span>
              <span className="text-xs text-white/50">•</span>
              <span className="text-xs text-white/70 font-medium">{cs.service}</span>
            </div>

            <h1
              className="text-white text-3xl sm:text-4xl md:text-5xl font-bold max-w-4xl leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {cs.headline}
            </h1>

            <p className="text-white/80 text-lg md:text-xl max-w-3xl leading-relaxed">
              {cs.summary}
            </p>
          </div>
        </header>

        {/* Results Bar */}
        <section className="bg-[#10254A] text-white py-10 border-t border-white/10 shadow-lg">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {cs.results.map((res, idx) => (
                <div key={idx} className={`${idx !== 0 ? 'pt-6 md:pt-0 md:pl-8' : ''}`}>
                  <div className="flex items-center gap-2 text-[#00E89A] text-xs uppercase tracking-widest font-semibold mb-1">
                    <TrendingUp size={14} />
                    {res.metric}
                  </div>
                  <div
                    className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {res.value}
                  </div>
                  <div className="text-xs text-white/50 mt-1">{res.period}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Breakdown */}
        <main id="main-content" className="py-16 md:py-24 bg-[#F7F8FA]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Main Article */}
              <div className="lg:col-span-8 space-y-12">
                {/* Visual Banner */}
                {cs.image && (
                  <div className="rounded-xl overflow-hidden shadow-md border border-[#E5E7EB] bg-[#071735]">
                    <img
                      src={cs.image}
                      alt={`${cs.client} Case Study`}
                      className="w-full h-auto object-cover max-h-[420px]"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                )}

                {/* Challenge Section */}
                <div className="card p-8 bg-white shadow-sm border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 text-red-600 font-semibold text-xs tracking-widest uppercase mb-3">
                    <BarChart3 size={16} /> The Challenge
                  </div>
                  <h2
                    className="text-2xl font-bold text-[#071735] mb-4"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    The Hurdles Standing in the Way of Scale
                  </h2>
                  <p className="text-[#5B6575] leading-relaxed text-base">
                    {cs.challenge}
                  </p>
                </div>

                {/* Approach & Strategy */}
                <div className="card p-8 bg-white shadow-sm border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 text-[#007A4B] font-semibold text-xs tracking-widest uppercase mb-3">
                    <ShieldCheck size={16} /> Our Strategic Approach
                  </div>
                  <h2
                    className="text-2xl font-bold text-[#071735] mb-4"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    How We Executed the Solution
                  </h2>
                  <p className="text-[#5B6575] leading-relaxed text-base mb-8">
                    {cs.approach}
                  </p>

                  {/* Steps */}
                  {cs.solutionSteps && (
                    <div className="space-y-4 pt-4 border-t border-[#E5E7EB]">
                      {cs.solutionSteps.map((s) => (
                        <div key={s.step} className="flex gap-4 p-4 rounded-lg bg-[#F7F8FA]">
                      <div className="w-10 h-10 rounded bg-[#071735] text-[#00E89A] font-bold text-sm flex items-center justify-center flex-shrink-0">
                            {s.step}
                          </div>
                          <div>
                            <h4 className="font-bold text-[#071735] text-sm mb-1">{s.title}</h4>
                            <p className="text-xs text-[#5B6575] leading-relaxed">{s.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Testimonial Quote */}
                {cs.testimonial && (
                  <div className="p-8 rounded-xl bg-gradient-to-r from-[#071735] to-[#10254A] text-white">
                    <p className="italic text-lg md:text-xl text-white/90 mb-6 font-serif leading-relaxed">
                      "{cs.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#00D98B]/20 border border-[#00E89A] flex items-center justify-center font-bold text-[#00E89A]">
                        {cs.testimonial.author[0]}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{cs.testimonial.author}</div>
                        <div className="text-xs text-white/60">{cs.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                <div className="card p-6 bg-white border border-[#E5E7EB] sticky top-28">
                  <h3 className="font-bold text-[#071735] text-lg mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Project Highlights
                  </h3>
                  <div className="space-y-4 text-sm pb-6 border-b border-[#E5E7EB]">
                    <div>
                      <span className="text-xs uppercase text-[#5B6575] font-semibold block">Client</span>
                      <span className="text-[#071735] font-medium">{cs.client}</span>
                    </div>
                    <div>
                      <span className="text-xs uppercase text-[#5B6575] font-semibold block">Industry</span>
                      <span className="text-[#071735] font-medium">{cs.industry}</span>
                    </div>
                    <div>
                      <span className="text-xs uppercase text-[#5B6575] font-semibold block">Core Service</span>
                      <span className="text-[#071735] font-medium">{cs.service}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-bold text-[#071735] mb-2">Want Similar Results?</h4>
                    <p className="text-xs text-[#5B6575] mb-4 leading-relaxed">
                      Let our growth specialists audit your current strategy and build a customized action plan.
                    </p>
                    <Link to="/free-website-audit" className="btn btn-primary w-full text-sm text-center">
                      Get Free Strategy Audit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <CTABand />
      </>
    )
  }

  // Case Studies List View
  return (
    <>
      <Helmet>
        <title>Case Studies & Client Results | {SITE.name}</title>
        <meta
          name="description"
          content={`Explore ${SITE.name}'s verified client results — SEO, PPC, web design and ecommerce case studies with measurable ROI.`}
        />
        <link rel="canonical" href={`${SITE.url}/case-studies`} />
      </Helmet>

      <PageHero
        eyebrow="Proven performance"
        title="Client Case Studies"
        lead="Detailed accounts of how we scale brands through search, paid media, and high-converting web experiences."
      />

      <main id="main-content">
        <section className="section bg-[#F7F8FA]">
          <div className="container">
            <SectionHeading
              eyebrow="Measurable ROI"
              title="Real Strategies, Compounded Growth"
              lead="Click into each case study for a breakdown of the brief, solution architecture, and verified metrics."
            />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {CASE_STUDIES.map((cs) => (
                <Link
                  key={cs.slug}
                  to={`/case-studies/${cs.slug}`}
                  className="card group flex flex-col overflow-hidden bg-white hover:shadow-xl transition-all duration-300 border border-[#E5E7EB] hover:border-[#008A55]/40"
                >
                  {/* Image banner */}
                  <div className="h-48 bg-[#071735] relative overflow-hidden flex items-center justify-center">
                    {cs.image ? (
                      <img
                        src={cs.image}
                        alt={cs.client}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                    ) : null}
                    <div className="hidden absolute inset-0 bg-[#071735] flex-col items-center justify-center p-4 text-center">
                      <span className="text-[#00E89A] font-bold text-sm mb-1">{cs.client}</span>
                      <span className="text-white/40 text-xs">{cs.service}</span>
                    </div>
                    <div className="absolute top-3 left-3 bg-[#071735]/90 backdrop-blur-sm text-[#00E89A] px-2.5 py-1 rounded text-xs font-semibold tracking-wide">
                      {cs.industry}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs text-[#5B6575] font-semibold mb-2 block">{cs.service}</span>
                    <h3
                      className="text-[#071735] text-lg font-bold mb-3 group-hover:text-[#007A4B] transition-colors leading-snug"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {cs.headline}
                    </h3>
                    <p className="text-sm text-[#5B6575] flex-1 leading-relaxed mb-6">
                      {cs.summary}
                    </p>

                    {/* Results highlights preview */}
                    <div className="bg-[#F7F8FA] rounded-lg p-3 mb-5 border border-[#E5E7EB]">
                      <div className="text-xs text-[#5B6575] font-semibold mb-1">Key Impact:</div>
                      <div className="text-lg font-bold text-[#071735]">
                        {cs.results[0]?.value}{' '}
                        <span className="text-xs font-normal text-[#5B6575]">({cs.results[0]?.metric})</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007A4B] group-hover:gap-2.5 transition-all">
                      View Full Case Study <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTABand />
    </>
  )
}
