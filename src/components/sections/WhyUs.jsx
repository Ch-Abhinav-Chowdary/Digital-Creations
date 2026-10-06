// src/components/sections/WhyUs.jsx
import { Link } from 'react-router-dom'
import { BrainCircuit, TrendingUp, BarChart3, Eye, ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useReveal } from '../ui/useReveal'

const PILLARS = [
  {
    Icon: BrainCircuit,
    title: 'AI-Driven Search & Optimization',
    body: 'We integrate advanced algorithmic modeling into keyword discovery, content architectures, and predictive analytics to win high-intent search share before competitors adapt.',
  },
  {
    Icon: TrendingUp,
    title: 'Integrated Engineering & Marketing',
    body: 'Strategy, creative, headless web development, and analytics under one roof. Zero hand-off delays, zero technical debt, and total alignment across every channel.',
  },
  {
    Icon: BarChart3,
    title: 'Commercial ROI & Lead Velocity',
    body: 'Every sprint is tied to measurable commercial outcomes: qualified pipeline, conversion rate uplifts, and customer acquisition cost reduction.',
  },
  {
    Icon: Eye,
    title: '100% Transparent Attribution',
    body: 'Direct access to your live ad accounts, server-side attribution dashboards, and plain-English executive summaries detailing exact pipeline impact.',
  },
]

export default function WhyUs() {
  const ref = useReveal()

  return (
    <section
      ref={ref}
      className="section relative overflow-hidden surface-dark"
    >
      {/* Subtle gold grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(184,150,62,0.8) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="container relative z-10">
        <SectionHeading
          eyebrow="The Agency Advantage"
          title="Engineered for Performance. Built for Growth."
          lead="We are selective about our client roster to guarantee deep strategic dedication, executive access, and rigorous commercial execution."
          light
        />

        {/* 4 Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-14">
          {PILLARS.map(({ Icon, title, body }, i) => (
            <article
              key={title}
              className="reveal bg-white/[0.06] border border-white/15 rounded-2xl p-7 hover:bg-white/[0.1] hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm group flex flex-col justify-between"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-400/25 transition-all">
                  <Icon size={24} className="text-amber-300" strokeWidth={1.75} />
                </div>
                <h3
                  className="!text-white text-lg font-bold mb-3 group-hover:!text-amber-300 transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {title}
                </h3>
                <p className="text-slate-200 text-sm leading-relaxed mb-4">{body}</p>
              </div>
              <div className="pt-3 border-t border-white/15 flex items-center gap-2 text-xs text-amber-300 font-bold">
                <CheckCircle2 size={14} className="text-emerald-400" /> Full SLA Guarantee
              </div>
            </article>
          ))}
        </div>

        {/* Team Strategy Callout Banner */}
        <div className="reveal rounded-2xl overflow-hidden border border-white/20 bg-white/[0.05] backdrop-blur-md p-8 lg:p-10 mb-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs text-amber-300 font-extrabold uppercase tracking-widest block mb-2">
              Partnership Philosophy
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold !text-white mb-3 font-serif">
              An Extension of Your Executive Growth Team
            </h3>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed">
              We eliminate the traditional agency bloat. You work directly with senior growth practitioners, technical SEO directors, and experienced full-stack engineers dedicated to compounding your market share.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <Link
              to="/about-us"
              id="why-us-cta"
              className="btn btn-primary text-sm px-6 text-center font-bold"
            >
              Explore Our Approach <ArrowRight size={15} />
            </Link>
            <Link
              to="/free-website-audit"
              className="btn btn-outline text-sm px-6 text-center border-white/25 text-white hover:bg-white/10"
            >
              Request Growth Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
