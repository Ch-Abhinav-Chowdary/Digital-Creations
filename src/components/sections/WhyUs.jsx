// src/components/sections/WhyUs.jsx
import { Link } from 'react-router-dom'
import { BrainCircuit, TrendingUp, BarChart3, Eye, ArrowRight } from 'lucide-react'
import { useReveal } from '../ui/useReveal'

const PILLARS = [
  {
    Icon: BrainCircuit,
    title: 'AI-Driven SEO',
    body: 'Algorithmic keyword discovery and predictive analytics to capture search share before competitors adapt.',
    stat: '+320%',
    statLabel: 'Organic Traffic',
    color: '#00D98B',
  },
  {
    Icon: TrendingUp,
    title: 'One Roof, Zero Silos',
    body: 'Strategy, creative, dev and analytics together. No handoff delays, no technical debt.',
    stat: '12+',
    statLabel: 'Years Experience',
    color: '#00E89A',
  },
  {
    Icon: BarChart3,
    title: 'ROI-First Execution',
    body: 'Every sprint tied to qualified pipeline, conversion uplifts and customer acquisition cost reduction.',
    stat: '4.8×',
    statLabel: 'Average ROAS',
    color: '#00D98B',
  },
  {
    Icon: Eye,
    title: '100% Transparent',
    body: 'Live ad accounts, server-side attribution dashboards, and plain-English executive summaries.',
    stat: '98.4%',
    statLabel: 'Client Retention',
    color: '#00D98B',
  },
]

export default function WhyUs() {
  const ref = useReveal()

  return (
    <section id="growth-grow" ref={ref} className="section relative overflow-hidden surface-dark">
      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,217,139,0.9) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="container relative z-10">

        {/* Section header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="eyebrow eyebrow-light justify-center">The Agency Advantage</p>
          <h2 className="!text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Built Different. Proven Results.
          </h2>
          <p className="text-slate-300 text-base mt-3">
            We operate as a selective, high-performance growth unit — not a churn-and-burn agency.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {PILLARS.map(({ Icon, title, body, stat, statLabel, color }, i) => (
            <article
              key={title}
              className="reveal group p-6 rounded-2xl bg-white/[0.05] border border-white/12 hover:bg-white/[0.1] hover:border-emerald-400/45 hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-sm"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all"
                style={{ background: `${color}18`, border: `1.5px solid ${color}45` }}
              >
                <Icon size={20} style={{ color }} strokeWidth={1.75} />
              </div>

              {/* Big stat */}
              <div className="mb-3">
                <span className="text-3xl font-extrabold" style={{ color }}>{stat}</span>
                <span className="ml-2 text-xs font-bold text-slate-300 uppercase tracking-wider">{statLabel}</span>
              </div>

              <h3 className="!text-white text-base font-bold mb-2 group-hover:!text-emerald-300 transition-colors">
                {title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">{body}</p>
            </article>
          ))}
        </div>

        {/* Callout banner */}
        <div className="reveal rounded-2xl bg-white/[0.05] border border-white/15 p-7 lg:p-9 grid lg:grid-cols-12 gap-7 items-center">
          <div className="lg:col-span-8">
            <span className="text-[11px] text-emerald-300 font-extrabold uppercase tracking-widest block mb-2">
              Partnership Philosophy
            </span>
            <h3 className="text-2xl font-bold !text-white mb-2 font-serif">
              An Extension of Your Executive Team
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              You work directly with senior growth practitioners, SEO directors, and full-stack engineers — zero agency bloat.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link to="/about-us" id="why-us-cta" className="btn btn-primary text-sm px-6 font-bold">
              Our Approach <ArrowRight size={14} />
            </Link>
            <Link to="/free-website-audit" className="btn btn-outline text-sm px-6 border-white/25 text-white hover:bg-white/10">
              Free Growth Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
