// src/components/sections/Testimonials.jsx
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star, CheckCircle, ShieldCheck } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useReveal } from '../ui/useReveal'

const TESTIMONIALS = [
  {
    quote:
      'Varun Digitals completely re-engineered our organic search acquisition and paid funnels. Within eight months, our marketing-qualified inbound pipeline grew by over 300% while cutting our cost per acquisition by 38%. Their transparency in reporting gave our executive board full clarity on ROI.',
    name: 'Alex Morgan',
    role: 'VP of Marketing',
    company: 'CloudFlow Analytics',
    industry: 'B2B SaaS',
    initials: 'AM',
    rating: 5,
    metrics: '+320% Organic MQLs',
  },
  {
    quote:
      'We approached Varun Digitals for a full redesign and came away with a high-converting digital platform that completely shifted our business away from expensive third-party portal fees. Our mobile conversion rate doubled and direct inquiries surged by 65% in the first quarter.',
    name: 'David Sterling',
    role: 'Managing Principal',
    company: 'Apex Property Partners',
    industry: 'Commercial Real Estate',
    initials: 'DS',
    rating: 5,
    metrics: '2.1x Inbound Leads',
  },
  {
    quote:
      'What sets Varun Digitals apart is their commercial rigour. They do not report on surface-level vanity metrics — every deliverable is tied to measurable revenue impact and lead velocity. They operate as an indispensable growth partner to our leadership team.',
    name: 'Elena Rostova',
    role: 'Chief Operating Officer',
    company: 'Artisan Culinary Group',
    industry: 'Hospitality & Retail',
    initials: 'ER',
    rating: 5,
    metrics: '−28% Delivery Fees',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const ref = useReveal()

  const prev = () => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1))
  const next = () => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1))
  const t = TESTIMONIALS[active]

  return (
    <section ref={ref} className="section bg-[#F7F8FA] relative overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Client Success"
          title="Verified Outcomes from Enterprise Leaders"
          lead="Real results delivered for founders, marketing directors, and enterprise executives across high-competition industries."
        />

        <div className="reveal max-w-4xl mx-auto">
          <div className="relative bg-white rounded-[var(--radius-lg)] border border-[var(--color-line)] p-8 md:p-12 shadow-[var(--shadow-lifted)]">
            {/* Top Bar with rating & verified pill */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB] mb-8">
              <div className="flex items-center gap-2">
                <div className="flex text-[#967016]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#967016" />
                  ))}
                </div>
                <span className="text-xs font-extrabold text-[#0B1F3A] ml-2">Verified 5.0 Executive Review</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#967016]/10 text-[#967016] text-xs font-bold border border-[#967016]/20">
                <CheckCircle size={14} /> Key Result: {t.metrics}
              </div>
            </div>

            {/* Quote icon & text */}
            <div className="relative">
              <Quote
                size={48}
                className="text-[#967016]/20 absolute -top-4 -left-2 pointer-events-none"
                aria-hidden="true"
              />
              <blockquote className="text-[#0B1F3A] text-lg md:text-xl font-serif italic leading-relaxed mb-8 relative z-10 pl-6 border-l-3 border-[#967016]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>

            {/* Attribution footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full bg-[#0B1F3A] border-2 border-[#967016] flex items-center justify-center flex-shrink-0 shadow-md"
                  aria-hidden="true"
                >
                  <span className="text-amber-300 font-bold text-base">{t.initials}</span>
                </div>
                <div>
                  <div className="font-extrabold text-[#0B1F3A] text-base">{t.name}</div>
                  <div className="text-xs font-medium text-[#4B5563]">
                    {t.role} • <span className="font-bold text-[#0B1F3A]">{t.company}</span>
                  </div>
                  <div className="text-[11px] text-[#967016] font-bold mt-0.5">{t.industry}</div>
                </div>
              </div>

              {/* Slider Navigation Buttons */}
              <div className="flex items-center gap-3 self-end sm:self-center">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-11 h-11 rounded-full border border-[#E5E7EB] bg-[#F7F8FA] hover:bg-[#0B1F3A] hover:text-[#B8963E] text-[#0B1F3A] flex items-center justify-center transition-colors cursor-pointer shadow-sm"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-xs text-[#5B6575] font-mono px-1">
                  {active + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-11 h-11 rounded-full border border-[#E5E7EB] bg-[#F7F8FA] hover:bg-[#0B1F3A] hover:text-[#B8963E] text-[#0B1F3A] flex items-center justify-center transition-colors cursor-pointer shadow-sm"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
