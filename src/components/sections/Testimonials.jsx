// src/components/sections/Testimonials.jsx
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star, TrendingUp } from 'lucide-react'
import { useReveal } from '../ui/useReveal'

const TESTIMONIALS = [
  {
    quote: 'Within eight months, our inbound pipeline grew by over 300% while cutting cost per acquisition by 38%. Their attribution clarity gave our board full ROI confidence.',
    name: 'Alex Morgan',
    role: 'VP Marketing',
    company: 'CloudFlow Analytics',
    industry: 'B2B SaaS',
    initials: 'AM',
    metric: '+320% Organic MQLs',
    metricColor: '#008A55',
  },
  {
    quote: 'Their redesign completely shifted us away from expensive portal fees. Mobile conversion doubled and direct inquiries surged 65% in the first quarter.',
    name: 'David Sterling',
    role: 'Managing Principal',
    company: 'Apex Property Partners',
    industry: 'Commercial Real Estate',
    initials: 'DS',
    metric: '2.1× Inbound Leads',
    metricColor: '#00D98B',
  },
  {
    quote: 'Upshoot Media doesn\'t report vanity metrics — every deliverable ties to revenue impact and lead velocity. An indispensable growth partner.',
    name: 'Elena Rostova',
    role: 'Chief Operating Officer',
    company: 'Artisan Culinary Group',
    industry: 'Hospitality & Retail',
    initials: 'ER',
    metric: '−28% Delivery Costs',
    metricColor: '#00D98B',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const ref = useReveal()

  const prev = () => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1))
  const next = () => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1))
  const t = TESTIMONIALS[active]

  return (
    <section ref={ref} className="section bg-[var(--color-surface)] relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-tone-green)] to-[var(--color-tone-forest)] opacity-70" />

      <div className="container">

        {/* Section header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="eyebrow justify-center">Client Success</p>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            Real Results, Verified Leaders
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="reveal max-w-3xl mx-auto">
          <div className="relative bg-white rounded-[var(--radius-lg)] border border-[var(--color-line)] shadow-[var(--shadow-lifted)] overflow-hidden">

            {/* Colored top bar */}
            <div className="h-1 bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-tone-green)] to-[var(--color-tone-forest)]" />

            <div className="p-8 md:p-10">
              {/* Stars + metric */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-7">
                <div className="flex items-center gap-2">
                  <div className="flex text-[var(--color-accent-text)]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <span className="text-xs font-bold text-[var(--color-muted)]">Verified Executive Review</span>
                </div>
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    color: t.metricColor,
                    background: `${t.metricColor}15`,
                    border: `1px solid ${t.metricColor}35`,
                  }}
                >
                  <TrendingUp size={12} />
                  {t.metric}
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-8">
                <Quote size={40} className="text-[var(--color-accent-text)]/15 absolute -top-3 -left-1 pointer-events-none" aria-hidden="true" />
                <blockquote
                  className="text-[var(--color-ink)] text-lg md:text-xl italic leading-relaxed pl-6 border-l-4 border-[var(--color-accent)]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author + navigation */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-6 border-t border-[var(--color-line)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-navy)] border-2 border-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--color-green-bright)] font-bold text-sm">{t.initials}</span>
                  </div>
                  <div>
                    <div className="font-extrabold text-[var(--color-navy)] text-sm">{t.name}</div>
                    <div className="text-xs text-[var(--color-muted)] font-medium">
                      {t.role} · <span className="font-bold text-[var(--color-navy)]">{t.company}</span>
                    </div>
                    <div className="text-[11px] font-bold mt-0.5" style={{ color: t.metricColor }}>{t.industry}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button onClick={prev} aria-label="Previous" className="w-10 h-10 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] hover:bg-[var(--color-navy)] hover:text-white hover:border-[var(--color-navy)] text-[var(--color-ink)] flex items-center justify-center transition-all cursor-pointer">
                    <ChevronLeft size={18} />
                  </button>
                  <span className="text-xs text-[var(--color-muted)] font-mono">{active + 1}/{TESTIMONIALS.length}</span>
                  <button onClick={next} aria-label="Next" className="w-10 h-10 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] hover:bg-[var(--color-navy)] hover:text-white hover:border-[var(--color-navy)] text-[var(--color-ink)] flex items-center justify-center transition-all cursor-pointer">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all cursor-pointer ${i === active ? 'w-6 h-2 bg-[var(--color-accent)]' : 'w-2 h-2 bg-[var(--color-line)] hover:bg-[var(--color-accent)]'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
