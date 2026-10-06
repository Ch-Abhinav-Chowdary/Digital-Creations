// src/components/sections/StatsBand.jsx
import { useReveal } from '../ui/useReveal'

const STATS = [
  { value: '500+',  label: 'Campaigns Scaled',      sub: 'Across 20+ Verticals',       color: '#2D6E8F' },
  { value: '98.4%', label: 'Client Retention',       sub: 'Verified Performance SLAs',  color: '#346F58' },
  { value: '12+',   label: 'Years Agency Heritage',  sub: 'Continuous Innovation',      color: '#C08930' },
  { value: '$50M+', label: 'Client Revenue Tracked', sub: 'First-Party Attribution',    color: '#B85C38' },
]

export default function StatsBand() {
  const ref = useReveal()

  return (
    <section
      ref={ref}
      className="py-16 surface-dark relative overflow-hidden border-y border-white/8"
      aria-label="Agency performance statistics"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(192,137,48,0.9) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-10">
          <p className="eyebrow eyebrow-light justify-center">By The Numbers</p>
          <h2
            className="!text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Performance That Speaks for Itself
          </h2>
        </div>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="reveal p-6 rounded-xl bg-white/[0.04] border border-white/8 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300 group text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Coloured accent line */}
              <div
                className="w-8 h-[3px] rounded-full mx-auto mb-4"
                style={{ background: s.color }}
              />
              <dt
                className="text-4xl md:text-[2.75rem] font-bold mb-2 group-hover:scale-105 transition-transform origin-center"
                style={{ color: s.color, fontFamily: 'var(--font-display)', fontOpticalSizing: 'auto' }}
              >
                {s.value}
              </dt>
              <dd className="text-sm font-medium text-slate-200 mb-1">{s.label}</dd>
              <dd className="text-xs text-slate-400 font-normal">{s.sub}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
