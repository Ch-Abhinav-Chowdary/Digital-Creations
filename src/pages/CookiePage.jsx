// src/pages/CookiePage.jsx
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/ui/PageHero'
import { SITE } from '../config/site'

export default function CookiePage() {
  const lastUpdated = 'January 15, 2026'

  return (
    <>
      <Helmet>
        <title>Cookie Policy | {SITE.name}</title>
        <meta
          name="description"
          content={`Cookie Policy for ${SITE.name}. Understand how we use cookies, analytical tags, and tracking technologies.`}
        />
        <link rel="canonical" href={`${SITE.url}/cookie-policy`} />
      </Helmet>

      <PageHero
        eyebrow="Compliance & transparency"
        title="Cookie Policy"
        lead={`Last updated: ${lastUpdated}. We use cookies and similar technologies to ensure performance, analyse traffic, and support conversions.`}
      />

      {/* Content */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-slate max-w-none text-[#1F2937] space-y-8 leading-relaxed">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#0B1F3A] mb-3">
                1. What Are Cookies?
              </h2>
              <p className="text-base text-[#5B6575]">
                Cookies are small text files placed on your computer or mobile device when you browse websites. They are widely used to make web applications work reliably, remember your preferences, and provide analytical data to website operators.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-[#0B1F3A] mb-3">
                2. Categories of Cookies We Use
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F7F8FA] rounded-[6px] border border-[#E5E7EB]">
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-1">
                    Strictly Necessary Cookies
                  </h3>
                  <p className="text-sm text-[#5B6575]">
                    Essential for navigation, secure form submission, and remembering your cookie preference banner consent. These cannot be disabled.
                  </p>
                </div>

                <div className="p-4 bg-[#F7F8FA] rounded-[6px] border border-[#E5E7EB]">
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-1">
                    Performance & Analytics Cookies
                  </h3>
                  <p className="text-sm text-[#5B6575]">
                    Help us count visits and traffic sources to measure and improve our site speed, load time, and user pathways. All information collected is aggregated and anonymous.
                  </p>
                </div>

                <div className="p-4 bg-[#F7F8FA] rounded-[6px] border border-[#E5E7EB]">
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-1">
                    Functional & Preference Cookies
                  </h3>
                  <p className="text-sm text-[#5B6575]">
                    Enable enhanced features and personalization, such as remembering your preferred form values and avoiding repeated modal popups.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-[#0B1F3A] mb-3">
                3. Managing Cookie Preferences
              </h2>
              <p className="text-base text-[#5B6575] mb-3">
                You can manage or withdraw your consent at any time:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#5B6575]">
                <li>
                  <strong className="text-[#1F2937]">Site Consent Banner:</strong> You can accept or decline non-essential cookies via the cookie banner displayed at the bottom of the screen.
                </li>
                <li>
                  <strong className="text-[#1F2937]">Browser Settings:</strong> You can configure your browser (Chrome, Safari, Firefox, Edge) to block or alert you about cookies. Note that blocking essential cookies may affect form submission.
                </li>
              </ul>
            </div>

            <div className="p-6 bg-[#F7F8FA] rounded-[6px] border border-[#E5E7EB]">
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">
                Need Help?
              </h3>
              <p className="text-sm text-[#5B6575]">
                If you have questions about our use of cookies or tracking technologies, please contact our technical team at{' '}
                <a href={`mailto:${SITE.email}`} className="text-[#B8963E] underline font-medium">
                  {SITE.email}
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
