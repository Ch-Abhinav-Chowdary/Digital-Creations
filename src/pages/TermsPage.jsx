// src/pages/TermsPage.jsx
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/ui/PageHero'
import { SITE } from '../config/site'

export default function TermsPage() {
  const lastUpdated = 'January 15, 2026'

  return (
    <>
      <Helmet>
        <title>Terms of Service | {SITE.name}</title>
        <meta
          name="description"
          content={`Terms of Service governing the use of ${SITE.name} website, digital marketing services, and client agreements.`}
        />
        <link rel="canonical" href={`${SITE.url}/terms-of-services`} />
      </Helmet>

      <PageHero
        eyebrow="Legal & governance"
        title="Terms of Service"
        lead={`Effective date: ${lastUpdated}. Please review these terms carefully prior to engaging our services or using our site.`}
      />

      {/* Content */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-slate max-w-none text-[#1F2937] space-y-8 leading-relaxed">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#071735] mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-base text-[#5B6575]">
                By accessing {SITE.name} or contracting our agency for digital marketing, web design, or development services, you agree to be bound by these Terms of Service and any Master Services Agreement (MSA) executed between the parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-[#071735] mb-3">
                2. Scope of Services
              </h2>
              <p className="text-base text-[#5B6575]">
                Our professional services include search engine optimization (SEO), pay-per-click advertising (PPC), website design and development, conversion rate optimization, brand identity, and marketing automation. Each client engagement is defined by an approved Statement of Work (SOW) specifying deliverables, timelines, and commercial terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-[#071735] mb-3">
                3. Intellectual Property Rights
              </h2>
              <p className="text-base text-[#5B6575] mb-3">
                Upon final payment in full according to the applicable SOW:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#5B6575]">
                <li>
                  <strong className="text-[#1F2937]">Client Deliverables:</strong> The client owns all custom website designs, custom copy, and branding created specifically for their engagement.
                </li>
                <li>
                  <strong className="text-[#1F2937]">Agency Pre-Existing IP:</strong> Pre-existing software frameworks, proprietary methodologies, toolkits, and reusable code libraries remain the intellectual property of {SITE.name}, licensed on a non-exclusive basis to the client for operating their project.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-[#071735] mb-3">
                4. Performance & Guarantees Disclaimer
              </h2>
              <p className="text-base text-[#5B6575]">
                While our digital marketing strategies follow documented industry standards and best practices, search engine algorithms (Google, Bing) and third-party advertising platforms (Meta, Google Ads) operate independently. Consequently, {SITE.name} does not guarantee specific search ranking positions, click-through rates, or specific revenue outcomes unless explicitly stated in a signed performance agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-[#071735] mb-3">
                5. Limitation of Liability
              </h2>
              <p className="text-base text-[#5B6575]">
                To the maximum extent permitted by applicable law, in no event shall {SITE.name}, its officers, directors, or employees be liable for indirect, incidental, punitive, or consequential damages resulting from platform downtime, third-party API changes, or business interruptions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-[#071735] mb-3">
                6. Governing Law & Jurisdiction
              </h2>
              <p className="text-base text-[#5B6575]">
                These terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law principles.
              </p>
            </div>

            <div className="p-6 bg-[#F7F8FA] rounded-[6px] border border-[#E5E7EB]">
              <h3 className="text-lg font-bold text-[#071735] mb-2">
                Questions Regarding Terms
              </h3>
              <p className="text-sm text-[#5B6575]">
                For legal notices or questions regarding our contractual terms, contact:
              </p>
              <p className="text-sm text-[#071735] font-medium mt-2">
                Email: <a href={`mailto:${SITE.email}`} className="text-[#007A4B] underline">{SITE.email}</a>
                <br />
                Phone: {SITE.phone}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
