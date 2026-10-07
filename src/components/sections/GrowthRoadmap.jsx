// src/components/sections/GrowthRoadmap.jsx
import { Link } from 'react-router-dom'
import { Search, Code2, TrendingUp, BarChart3, ArrowRight } from 'lucide-react'
import { useReveal } from '../ui/useReveal'

// Brand palette — navy and green
const STEPS = [
  {
    phase: '01',
    icon: Search,
    title: 'Audit & Roadmap',
    metric: 'Zero Guesswork',
    color: '#00D98B',
    bullets: ['Technical SEO audit', 'Competitor gap analysis', 'Funnel drop-off mapping'],
  },
  {
    phase: '02',
    icon: Code2,
    title: 'Web Engineering',
    metric: '2.4× Conversion',
    color: '#00D98B',
    bullets: ['Sub-second speeds (<0.8s)', 'WCAG-compliant UI', 'CRM & payment integration'],
  },
  {
    phase: '03',
    icon: TrendingUp,
    title: 'Traffic Surge',
    metric: '+320% Pipeline',
    color: '#008A55',
    bullets: ['Top 3 Google rankings', 'Google & Meta ad funnels', 'High-authority backlinks'],
  },
  {
    phase: '04',
    icon: BarChart3,
    title: 'Scale & Compound',
    metric: '4.8× ROAS',
    color: '#008A55',
    bullets: ['Live attribution dashboards', 'A/B conversion testing', 'Quarterly sprint reviews'],
  },
]

export default function GrowthRoadmap() {
  const ref = useReveal()

  return (
    <section
      id="growth-roadmap"
      ref={ref}
      className="section bg-white relative overflow-hidden border-b border-[var(--color-line)]"
      aria-label="How Upshoot Media scales your business"
    >
      {/* Top accent stripe */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#00D98B] via-[#00D98B] to-[#008A55] opacity-70" />

      <div className="container relative z-10">

        <div className="text-center mb-12 max-w-xl mx-auto">
          <p className="eyebrow justify-center">How It Works</p>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            The 4-Phase Revenue Engine
          </h2>
          <p className="text-[var(--color-muted)] text-base mt-3">
            From diagnosis to compounding growth — a proven, repeatable system.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <article
                key={step.phase}
                className="reveal group relative p-6 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] hover:bg-white hover:border-transparent hover:shadow-[var(--shadow-lifted)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Watermark */}
                <div
                  className="absolute -top-1 -right-1 text-[70px] font-bold leading-none select-none font-serif opacity-[0.05] group-hover:opacity-[0.08] transition-opacity"
                  style={{ color: step.color }}
                >
                  {step.phase}
                </div>

                {/* Icon + metric */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${step.color}14`, border: `1.5px solid ${step.color}35` }}
                  >
                    <Icon size={18} style={{ color: step.color }} strokeWidth={1.75} />
                  </div>
                  <span
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ color: step.color, background: `${step.color}12`, border: `1px solid ${step.color}30` }}
                  >
                    {step.metric}
                  </span>
                </div>

                <h3
                  className="text-base font-semibold text-[var(--color-ink)] mb-4 group-hover:text-[var(--color-accent-text)] transition-colors leading-snug"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.title}
                </h3>

                <ul className="space-y-2 pt-3 border-t border-[var(--color-line)]">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs font-medium text-[var(--color-muted)]">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: step.color }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        {/* CTA Banner */}
        <div className="reveal rounded-xl bg-[var(--color-navy)] p-6 md:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-5 border border-white/8 shadow-lg">
          <div>
            <h4 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              See this roadmap applied to your business
            </h4>
            <p className="text-slate-400 text-sm">
              Free 15-page diagnostic · competitor gap analysis · zero obligation.
            </p>
          </div>
          <Link
            to="/free-website-audit"
            className="btn btn-primary text-sm px-8 min-h-[44px] whitespace-nowrap font-semibold flex-shrink-0"
          >
            Claim Free Audit <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
