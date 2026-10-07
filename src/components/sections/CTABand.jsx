// src/components/sections/CTABand.jsx
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'
import { SITE } from '../../config/site'

export default function CTABand() {
  return (
    <section id="growth-scale" className="cta-band" aria-label="Call to action">
      <div className="grain" aria-hidden="true" />
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border border-[#071735]/20 bg-[#071735]/10 backdrop-blur-sm">
          <Sparkles size={14} className="text-[#071735]" />
          <span className="text-[#071735] text-xs font-extrabold tracking-[0.18em] uppercase">Ready to Grow?</span>
        </div>

        <h2 className="text-[#071735] font-extrabold mb-4">
          Let's Build Your Compounding<br className="hidden sm:block" /> Digital Strategy
        </h2>

        <p className="text-[#071735] text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-medium">
          Speak with a senior growth strategist. No obligation — just an actionable roadmap.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/free-website-audit" id="cta-band-primary" className="btn btn-navy text-base px-8 min-h-[52px] font-bold shadow-xl">
            {SITE.ctaPrimary} <ArrowRight size={16} />
          </Link>
          <Link to="/contact-us" id="cta-band-secondary" className="btn bg-white hover:bg-slate-50 text-[#071735] font-bold text-base px-8 min-h-[52px] shadow-lg border border-[#071735]/15">
            {SITE.ctaSecondary}
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-[#071735]">
          <span className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-[#071735]" /> No lock-in contracts</span>
          <span className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-[#071735]" /> 100% attribution transparency</span>
          <span className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-[#071735]" /> Full SLA accountability</span>
        </div>
      </div>
    </section>
  )
}
