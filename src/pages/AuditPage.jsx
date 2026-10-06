// src/pages/AuditPage.jsx — Free Website Audit
import { Helmet } from 'react-helmet-async'
import { CheckCircle } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import LeadForm from '../components/ui/LeadForm'
import PageHero from '../components/ui/PageHero'
import { SITE } from '../config/site'

const AUDIT_ITEMS = [
  'Technical SEO health and Core Web Vitals',
  'On-page optimisation and content quality assessment',
  'Backlink profile and authority analysis',
  'Local SEO and Google Business Profile review',
  'Paid media account review (if applicable)',
  'Competitor benchmarking across three top rivals',
  'Prioritised action plan with estimated impact',
]

export default function AuditPage() {
  return (
    <>
      <Helmet>
        <title>Free Website Audit | {SITE.name}</title>
        <meta name="description" content={`Request a complimentary, comprehensive website and SEO audit from ${SITE.name}. No obligation. Delivered within 5 business days.`} />
        <link rel="canonical" href={`${SITE.url}/free-website-audit`} />
      </Helmet>

      <PageHero
        eyebrow="No obligation"
        title="Receive Your Free Website Audit"
        lead="A comprehensive review of your digital presence — delivered within five business days at no cost."
      />

      <main id="main-content">
        <div className="container section">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="What You Receive"
                title="A Thorough, Honest Assessment"
                lead="Our audit examines every dimension of your online presence and identifies the highest-impact improvements."
                align="left"
              />
              <ul className="mt-8 space-y-3">
                {AUDIT_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#B8963E] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1F2937] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              {/* Visual Audit Preview Card */}
              <div className="mt-8 rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#0B1F3A] text-white shadow-xl">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src="/images/home/service-seo.jpg"
                    alt="SEO & Digital Performance Analytics Audit Report"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] to-transparent" />
                  <div className="absolute top-3 right-3 bg-[#B8963E] text-[#0B1F3A] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Executive Deliverable
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase text-[#B8963E] font-semibold tracking-wider mb-2">Sample Audit Insights</div>
                  <div className="grid grid-cols-3 gap-3 text-center border-t border-white/10 pt-4">
                    <div className="p-2 rounded bg-white/5">
                      <span className="block text-xl font-bold text-green-400">94/100</span>
                      <span className="block text-[11px] text-white/60">Tech Health</span>
                    </div>
                    <div className="p-2 rounded bg-white/5">
                      <span className="block text-xl font-bold text-[#B8963E]">Pass</span>
                      <span className="block text-[11px] text-white/60">Core Vitals</span>
                    </div>
                    <div className="p-2 rounded bg-white/5">
                      <span className="block text-xl font-bold text-emerald-400">+42%</span>
                      <span className="block text-[11px] text-white/60">CRO Uplift</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-5 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB]">
                <p className="text-sm text-[#5B6575] leading-relaxed">
                  <strong className="text-[#0B1F3A]">No commitment required.</strong> The audit report is yours to keep, whether or not you choose to engage further. Our goal is to demonstrate the quality of our thinking before asking for your business.
                </p>
              </div>
            </div>

            <div className="card p-8">
              <h2 className="text-[#0B1F3A] text-xl mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                Request Your Free Audit
              </h2>
              <p className="text-sm text-[#5B6575] mb-6">
                Complete the form and we will be in touch within one business day to begin.
              </p>
              <LeadForm formId="audit-page" showMessage submitLabel="Request Free Audit" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
