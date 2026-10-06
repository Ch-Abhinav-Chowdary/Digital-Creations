// src/pages/ThankYouPage.jsx
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle2, Calendar, FileText, ArrowRight, Phone } from 'lucide-react'
import { SITE } from '../config/site'

export default function ThankYouPage() {
  return (
    <>
      <Helmet>
        <title>Thank You | Strategy Request Received | {SITE.name}</title>
        <meta
          name="description"
          content={`Thank you for contacting ${SITE.name}. Our senior strategists are reviewing your website and will deliver your audit within 24-48 business hours.`}
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="section bg-[#F7F8FA] min-h-[70vh] flex items-center">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-[8px] p-8 md:p-12 border border-[#E5E7EB] shadow-sm text-center">
            <div className="w-16 h-16 bg-[#B8963E]/15 text-[#B8963E] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={36} />
            </div>

            <p className="eyebrow mb-2">Request Confirmed</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B1F3A] mb-4">
              Thank You. Your Request Has Been Received.
            </h1>
            <p className="text-base text-[#5B6575] leading-relaxed max-w-xl mx-auto mb-8">
              A senior growth strategist at {SITE.name} is currently examining your digital footprint. Here is exactly what will happen next:
            </p>

            {/* Steps Timeline */}
            <div className="grid gap-4 sm:grid-cols-3 text-left mb-10">
              <div className="p-4 rounded-[6px] bg-[#F7F8FA] border border-[#E5E7EB]">
                <div className="flex items-center gap-2 text-[#B8963E] font-bold text-sm mb-2">
                  <FileText size={16} /> Step 1: Analysis
                </div>
                <p className="text-xs text-[#5B6575]">
                  We run full technical, backlink, and ad-spend teardowns of your domain against key competitors.
                </p>
              </div>

              <div className="p-4 rounded-[6px] bg-[#F7F8FA] border border-[#E5E7EB]">
                <div className="flex items-center gap-2 text-[#B8963E] font-bold text-sm mb-2">
                  <Calendar size={16} /> Step 2: Delivery
                </div>
                <p className="text-xs text-[#5B6575]">
                  Within 24 business hours, you will receive our custom executive audit and growth blueprint via email.
                </p>
              </div>

              <div className="p-4 rounded-[6px] bg-[#F7F8FA] border border-[#E5E7EB]">
                <div className="flex items-center gap-2 text-[#B8963E] font-bold text-sm mb-2">
                  <Phone size={16} /> Step 3: Walkthrough
                </div>
                <p className="text-xs text-[#5B6575]">
                  You have the option to schedule a 30-minute video walkthrough with our strategy director.
                </p>
              </div>
            </div>

            {/* Direct Contact & CTAs */}
            <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="btn btn-primary text-sm w-full sm:w-auto">
                Return to Homepage <ArrowRight size={14} className="ml-1" />
              </Link>
              <Link to="/case-studies" className="btn btn-outline text-sm w-full sm:w-auto">
                Explore Case Studies
              </Link>
            </div>

            <p className="text-xs text-[#5B6575] mt-6">
              Need immediate assistance? Call us directly at{' '}
              <a href={`tel:${SITE.phone.replace(/\D/g, '')}`} className="text-[#0B1F3A] font-semibold underline">
                {SITE.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
