// src/pages/AboutPage.jsx
import { Helmet } from 'react-helmet-async'
import SectionHeading from '../components/ui/SectionHeading'
import CTABand from '../components/sections/CTABand'
import WhyUs from '../components/sections/WhyUs'
import PageHero from '../components/ui/PageHero'
import { SITE } from '../config/site'

const VALUES = [
  { title: 'Integrity', body: 'We tell clients the truth, including when that truth is that a different approach, or even a different agency, would serve them better.' },
  { title: 'Rigour', body: 'Every recommendation is evidence-based. We do not act on assumption, trend or gut instinct when data is available.' },
  { title: 'Accountability', body: 'We own outcomes, not activity. Reporting is tied to business results — not vanity metrics — and we are measured accordingly.' },
  { title: 'Partnership', body: 'We work as an extension of your team, not a vendor. Your marketing function is stronger because of us, not dependent on us.' },
]

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | {SITE.name}</title>
        <meta name="description" content={`Learn about ${SITE.name} — our approach, values and the team behind our digital marketing and web design work.`} />
        <link rel="canonical" href={`${SITE.url}/about-us`} />
      </Helmet>

      <PageHero
        eyebrow="Our story"
        title={`About ${SITE.name}`}
        lead="A results-driven digital marketing and web design agency built on transparency, rigour and genuine partnership."
      />

      <main id="main-content">
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-14 lg:grid-cols-2 items-center">
              <div>
                <SectionHeading eyebrow="Our Story" title="Built on a Simple Belief" align="left" />
                <div className="space-y-4 text-[#1F2937] leading-relaxed">
                  <p>
                    {SITE.name} was founded with a straightforward premise: that digital marketing and web design work best when they are treated as business disciplines, not creative projects. Every engagement we undertake is framed around measurable commercial outcomes.
                  </p>
                  <p>
                    Over more than a decade, we have worked with businesses ranging from local service providers to enterprise brands, across industries from healthcare and legal services to ecommerce and technology. Our team combines specialists in SEO, paid media, content, creative, development and analytics — all under one roof, and all aligned to the same objective: your growth.
                  </p>
                  <p>
                    We are selective about the clients we work with. Not because we are exclusive, but because every programme we deliver is deeply customised — and that requires mutual commitment and clear communication. If we are not the right fit, we will say so.
                  </p>
                </div>
              </div>
              {/* Real agency team / strategy image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EB] bg-[#0B1F3A] group">
                <img
                  src="/images/home/cta-strategy.jpg"
                  alt="Varun Digitals executive leadership & marketing strategy team"
                  className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[#B8963E] text-xs uppercase tracking-widest font-semibold block">Strategy & Engineering</span>
                    <span className="text-white font-bold text-lg font-serif">Varun Digitals Team</span>
                  </div>
                  <div className="bg-[#B8963E] text-[#0B1F3A] px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md">
                    12+ Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-[#F7F8FA]">
          <div className="container">
            <SectionHeading eyebrow="Our Values" title="How We Operate" lead="These are not aspirational statements. They are the standards we hold ourselves to in every client engagement." />
            <div className="grid gap-6 sm:grid-cols-2">
              {VALUES.map((v) => (
                <div key={v.title} className="card p-7">
                  <h3 className="text-[#0B1F3A] text-lg mb-2" style={{ fontFamily: 'var(--font-display)' }}>{v.title}</h3>
                  <p className="text-sm text-[#5B6575] leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyUs />
      </main>

      <CTABand />
    </>
  )
}
