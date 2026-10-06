// src/components/sections/GrowthRoadmap.jsx
// Visual Storytelling: The 4-Stage Revenue Acceleration Engine
import { Link } from 'react-router-dom'
import {
  Sparkles,
  Search,
  Code2,
  TrendingUp,
  BarChart3,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useReveal } from '../ui/useReveal'

const STEPS = [
  {
    phase: '01',
    title: 'Diagnostic Audit & Growth Roadmap',
    tag: 'Phase 1: Intelligence',
    icon: Search,
    desc: 'We analyze your search landscape, conversion friction points, competitor keyword gaps, and technical infrastructure to locate immediate revenue upside.',
    bullets: [
      'Full technical SEO & Core Web Vitals audit',
      'Competitor search & market share analysis',
      'Conversion funnel & drop-off modeling',
    ],
    highlight: 'Zero Guesswork',
  },
  {
    phase: '02',
    title: 'High-Converting Web Engineering',
    tag: 'Phase 2: Foundation',
    icon: Code2,
    desc: 'We design and develop sub-second, mobile-first websites and Shopify storefronts engineered specifically to turn anonymous visitors into booked demos and paying customers.',
    bullets: [
      'Sub-second page speeds (< 0.8s)',
      'WCAG AA accessible & conversion-tested UI',
      'Seamless CRM, analytics & payment architecture',
    ],
    highlight: '2.4x Avg Conversion',
  },
  {
    phase: '03',
    title: 'Targeted Multi-Channel Traffic Surge',
    tag: 'Phase 3: Acquisition',
    icon: TrendingUp,
    desc: 'We launch intent-targeted organic SEO dominance, AI-assisted search positioning, and high-ROAS Google & Meta paid advertising campaigns that drive qualified demand.',
    bullets: [
      'Top 3 Google search rankings for high-intent terms',
      'Targeted Google Ads & Meta retargeting funnels',
      'Local pack dominance & high-authority PR backlinks',
    ],
    highlight: '+320% Pipeline',
  },
  {
    phase: '04',
    title: 'Attribution & Compounding Revenue',
    tag: 'Phase 4: Scale',
    icon: BarChart3,
    desc: 'We continuously A/B test conversion funnels, refine ad spend efficiency, and deliver server-side verified first-party attribution dashboards directly to your executive team.',
    bullets: [
      'Transparent live ad & lead attribution dashboards',
      'Continuous conversion rate optimization (CRO)',
      'Quarterly executive scale roadmap sprints',
    ],
    highlight: '4.8x Ad ROAS',
  },
]

export default function GrowthRoadmap() {
  const ref = useReveal()

  return (
    <section
      ref={ref}
      className="section bg-white relative overflow-hidden border-b border-[#E5E7EB]"
      aria-label="How Varun Digitals transforms and scales your business"
    >
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Visual Storytelling Roadmap"
          title="How Varun Digitals Compounds Your Revenue"
          lead="From initial technical diagnosis to high-converting web engineering and multi-channel customer acquisition — here is how we engineer market leadership."
        />

        {/* 4-Step Visual Journey Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <article
                key={step.phase}
                className="reveal group flex flex-col justify-between p-7 rounded-2xl border border-[#E5E7EB] bg-[#F7F8FA] hover:bg-white hover:border-amber-500/50 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {/* Step watermarked number */}
                <div className="absolute top-3 right-4 font-extrabold text-5xl text-[#0B1F3A]/[0.06] select-none group-hover:text-amber-500/15 transition-colors font-serif">
                  {step.phase}
                </div>

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center text-[#967016] group-hover:bg-[#0B1F3A] group-hover:text-amber-300 group-hover:scale-110 transition-all duration-300">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-bold text-[#967016] bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      {step.highlight}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-[#4B5563] uppercase tracking-wider block mb-1">
                    {step.tag}
                  </span>

                  <h3
                    className="text-lg font-bold text-[#0B1F3A] mb-3 group-hover:text-[#967016] transition-colors leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {step.title}
                  </h3>

                  <p className="text-xs font-medium text-[#4B5563] leading-relaxed mb-5">
                    {step.desc}
                  </p>

                  {/* Bullet deliverables */}
                  <ul className="space-y-2 pt-4 border-t border-[#E5E7EB] mb-6">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs font-semibold text-[#1F2937]">
                        <CheckCircle2 size={14} className="text-[#967016] flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    to="/free-website-audit"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#967016] group-hover:text-[#0B1F3A] group-hover:gap-2.5 transition-all"
                  >
                    Explore Step Details <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="reveal rounded-2xl bg-[#0B1F3A] p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 flex-shrink-0">
              <Zap size={26} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1 font-serif">
                Ready to see what this roadmap looks like for your business?
              </h4>
              <p className="text-sm text-slate-200">
                Get a custom 15-page diagnostic audit showing your competitor keyword share, UX leaks, and revenue upside.
              </p>
            </div>
          </div>
          <Link
            to="/free-website-audit"
            className="btn btn-primary text-sm px-6 min-h-[46px] whitespace-nowrap font-bold shadow-lg"
          >
            Claim Free Audit <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
