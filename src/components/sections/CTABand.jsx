import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SITE } from '../../config/site'

export default function CTABand() {
  return (
    <section className="cta-band" aria-label="Call to action">
      <div className="grain" aria-hidden="true" />
      <div className="container relative z-10 text-center">
        <p className="eyebrow justify-center w-full !text-[#071422] before:!bg-[#071422] font-extrabold tracking-widest">
          Ready to Accelerate Growth?
        </p>
        <h2 className="text-[#071422] text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
          Let’s Build Your Compounding Digital Strategy
        </h2>
        <p className="text-[#071422] font-medium text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Speak with a senior growth strategist about your revenue goals. No obligation — just an actionable roadmap of how to win your market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/free-website-audit" id="cta-band-primary" className="btn btn-navy text-base px-8 min-h-[52px] font-bold shadow-xl">
            {SITE.ctaPrimary} <ArrowRight size={16} />
          </Link>
          <Link to="/contact-us" id="cta-band-secondary" className="btn bg-white hover:bg-slate-100 text-[#071422] font-bold text-base px-8 min-h-[52px] shadow-lg">
            {SITE.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
