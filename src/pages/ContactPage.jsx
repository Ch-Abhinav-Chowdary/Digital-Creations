// src/pages/ContactPage.jsx
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import LeadForm from '../components/ui/LeadForm'
import PageHero from '../components/ui/PageHero'
import { SITE } from '../config/site'

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | {SITE.name}</title>
        <meta name="description" content={`Get in touch with ${SITE.name}. Speak with a senior consultant about your digital marketing and web design goals.`} />
        <link rel="canonical" href={`${SITE.url}/contact-us`} />
      </Helmet>

      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        lead="Speak directly with a senior strategist. We respond to all enquiries within one business day."
      />

      <main id="main-content">
        <div className="container section">
          <div className="grid gap-14 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <SectionHeading
                eyebrow="Get in Touch"
                title="We Would Be Glad to Hear From You"
                lead="Whether you have a specific project in mind or simply want to understand your options, our team is available to help."
                align="left"
              />

              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 icon-tile">
                    <Phone size={18} className="text-[#007A4B]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#071735] mb-0.5">Phone</p>
                    <a href={`tel:${SITE.phone.replace(/\D/g, '')}`} className="text-[#5B6575] hover:text-[#007A4B] transition-colors">
                      {SITE.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 icon-tile">
                    <Mail size={18} className="text-[#007A4B]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#071735] mb-0.5">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-[#5B6575] hover:text-[#007A4B] transition-colors">
                      {SITE.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 icon-tile">
                    <MapPin size={18} className="text-[#007A4B]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#071735] mb-0.5">Address</p>
                    <address className="not-italic text-[#5B6575] text-sm leading-relaxed">
                      {SITE.address.street}<br />
                      {SITE.address.city}, {SITE.address.state} {SITE.address.zip}<br />
                      {SITE.address.country}
                    </address>
                  </div>
                </div>

                {/* Consultation Visual Card */}
                <div className="mt-8 rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#071735] text-white shadow-md relative">
                  <img
                    src="/images/home/cta-strategy.jpg"
                    alt="Upshoot Media Strategy Consultation Room"
                    className="w-full h-36 object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071735] via-[#071735]/60 to-transparent" />
                  <div className="p-4 relative">
                    <div className="flex items-center justify-between text-xs text-[#00E89A] font-semibold mb-1">
                      <span>Direct Strategy Sessions</span>
                      <span className="text-white/60">Mon – Fri 9am-6pm</span>
                    </div>
                    <p className="text-xs text-white/80">
                      Book an in-person or video consultation with our senior growth directors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card p-8">
              <h2 className="text-[#071735] text-xl mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                Send Us a Message
              </h2>
              <p className="text-sm text-[#5B6575] mb-6">
                Fill in the form below and a senior consultant will respond within one business day.
              </p>
              <LeadForm formId="contact-page" showMessage submitLabel="Send Message" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
