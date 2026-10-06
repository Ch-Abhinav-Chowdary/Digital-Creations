// src/components/sections/StatsBand.jsx
import { useReveal } from '../ui/useReveal'
import { TrendingUp, Users, Award, DollarSign } from 'lucide-react'

const STATS = [
  { value: '500+', label: 'Clients & Campaigns Scaled', sub: 'Across 20+ Commercial Verticals', icon: Users },
  { value: '98.4%', label: 'Long-Term Client Retention', sub: 'Based on Verified Performance SLAs', icon: Award },
  { value: '12+', label: 'Years Agency Heritage', sub: 'Continuous Technological Innovation', icon: TrendingUp },
  { value: '$50M+', label: 'Tracked Client Revenue', sub: 'First-Party Verified Attribution', icon: DollarSign },
]

export default function StatsBand() {
  const ref = useReveal()

  return (
    <section
      ref={ref}
      className="py-16 surface-dark relative overflow-hidden border-y border-white/10"
      aria-label="Key agency statistics and performance metrics"
    >
      {/* Background ambient gold gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#B8963E_1px,transparent_1px)] [background-size:32px_32px]"
      />

      <div className="container relative z-10">
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className="reveal p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#B8963E]/40 transition-all duration-300 backdrop-blur-sm group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <span className="text-[11px] text-amber-300 font-bold uppercase tracking-wider bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    Verified SLA
                  </span>
                </div>
                <dt
                  className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight group-hover:text-amber-300 transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {s.value}
                </dt>
                <dd className="text-sm font-bold text-slate-100 mb-1">{s.label}</dd>
                <dd className="text-xs font-medium text-slate-300">{s.sub}</dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
