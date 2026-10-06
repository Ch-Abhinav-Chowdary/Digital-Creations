// src/pages/PrivacyPage.jsx
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/ui/PageHero'
import { SITE } from '../config/site'

export default function PrivacyPage() {
  const lastUpdated = 'January 15, 2026'

  return (
    <>
      <Helmet>
        <title>Privacy Policy | {SITE.name}</title>
        <meta
          name="description"
          content={`Privacy Policy for ${SITE.name}. Details on data collection, processing, user rights, and compliance with privacy regulations.`}
        />
        <link rel="canonical" href={`${SITE.url}/privacy-policy`} />
      </Helmet>

      <PageHero
        eyebrow="Legal & compliance"
        title="Privacy Policy"
        lead={`Last updated: ${lastUpdated}. We respect your privacy and are committed to safeguarding your personal data.`}
      />

      {/* Content */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-slate max-w-none text-[#1F2937] space-y-8 leading-relaxed">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#0B1F3A] mb-3">
                1. Information We Collect
              </h2>
              <p className="text-base text-[#5B6575] mb-4">
                {SITE.name} collects information to deliver tailored digital marketing, web design, and growth consulting services. We obtain information through direct interactions and automated analytics.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#5B6575]">
                <li>
                  <strong className="text-[#1F2937]">Contact Details:</strong> Full name, professional email address, phone number, company name, and website URL submitted through our contact and audit request forms.
                </li>
                <li>
                  <strong className="text-[#1F2937]">Project Requirements:</strong> Strategic goals, advertising budgets, technical specifications, and project briefs provided during consultations.
                </li>
                <li>
                  <strong className="text-[#1F2937]">Usage & Technical Data:</strong> IP address, browser type, operating system, referring URL, time zone, and interactions with our website collected via privacy-first analytics tools.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-[#0B1F3A] mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-base text-[#5B6575] mb-4">
                We process your personal information strictly for legitimate commercial purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#5B6575]">
                <li>Generating and delivering website audit reports, growth blueprints, and proposals.</li>
                <li>Fulfilling contractual agreements and delivering client marketing campaigns.</li>
                <li>Communicating project milestones, performance reports, and invoice notices.</li>
                <li>Enhancing platform security, preventing fraudulent submissions, and testing site performance.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-[#0B1F3A] mb-3">
                3. Disclosure & Third-Party Processors
              </h2>
              <p className="text-base text-[#5B6575]">
                We do not sell, rent, or trade your personal data. We only disclose information to vetted enterprise processors essential for our service infrastructure, such as secure cloud hosting providers, transactional email relays, and CRM platforms under strict data processing agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-[#0B1F3A] mb-3">
                4. Data Security & Retention
              </h2>
              <p className="text-base text-[#5B6575]">
                We implement industry-standard encryption (TLS 1.3), access controls, and regular vulnerability audits. Personal information is retained only as long as necessary to satisfy legal obligations, accounting standards, and ongoing client service delivery.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-[#0B1F3A] mb-3">
                5. Your Legal Rights (GDPR & CCPA/CPRA)
              </h2>
              <p className="text-base text-[#5B6575] mb-4">
                Depending on your jurisdiction, you may hold rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#5B6575]">
                <li>The right to access and receive a copy of your stored personal data.</li>
                <li>The right to request rectification of inaccurate records.</li>
                <li>The right to request erasure ("right to be forgotten") subject to legal retention obligations.</li>
                <li>The right to opt-out of marketing communications at any time.</li>
              </ul>
            </div>

            <div className="p-6 bg-[#F7F8FA] rounded-[6px] border border-[#E5E7EB]">
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">
                Privacy Inquiries & Data Requests
              </h3>
              <p className="text-sm text-[#5B6575] mb-3">
                To exercise any privacy rights or ask questions regarding this policy, please reach our compliance team directly:
              </p>
              <p className="text-sm text-[#0B1F3A] font-medium">
                Email: <a href={`mailto:${SITE.email}`} className="text-[#B8963E] underline">{SITE.email}</a>
                <br />
                Address: {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
